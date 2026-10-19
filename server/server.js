
require("dotenv").config();

const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create Razorpay Order with dynamic plan amount
app.post("/api/create-order", async (req, res) => {
    try {
        const { amount, planTitle, customerName, customerPhone } = req.body || {};
        
        // Amount in paise: if provided in rupees convert to paise, default ₹499 = 49900
        const parsedAmount = Number(amount);
        const amountInPaise = (!isNaN(parsedAmount) && parsedAmount > 0)
            ? Math.round(parsedAmount * 100)
            : 49900;

        const order = await razorpay.orders.create({
            amount: amountInPaise,
            currency: "INR",
            receipt: "receipt_" + Date.now(),
            notes: {
                plan: planTitle || "Creditjin Masterclass",
                student_name: customerName || "",
                student_phone: customerPhone || ""
            }
        });

        console.log(`[Order Created] ID: ${order.id}, Amount: ₹${order.amount / 100}`);

        res.json({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            keyId: process.env.RAZORPAY_KEY_ID
        });
    } catch (error) {
        console.error("Order creation failed:", error.message);
        res.status(500).json({
            error: "Unable to create payment order",
            details: error.message
        });
    }
});

// Verify the signature returned by Checkout.
app.post("/api/verify-payment", (req, res) => {
    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
    } = req.body;

    if (!razorpay_order_id ||
        !razorpay_payment_id ||
        !razorpay_signature) {
        return res.status(400).json({
            verified: false,
            error: "Missing payment details"
        });
    }

    const body =
        `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(body)
        .digest("hex");

    const expected = Buffer.from(expectedSignature, "hex");
    const received = Buffer.from(razorpay_signature, "hex");

    const verified =
        expected.length === received.length &&
        crypto.timingSafeEqual(expected, received);

    if (!verified) {
        return res.status(400).json({
            verified: false,
            error: "Payment verification failed"
        });
    }

    // Verified successfully
    console.log(`[Payment Verified] Order: ${razorpay_order_id}, Payment: ${razorpay_payment_id}`);
    return res.json({ verified: true });
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Payment server running");
});
