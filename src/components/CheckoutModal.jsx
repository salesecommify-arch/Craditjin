import { useState } from "react";
import { X, User, Phone, ShieldCheck, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function CheckoutModal({ plan, onClose }) {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [formError, setFormError] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("idle"); // 'idle' | 'processing' | 'success' | 'pending' | 'failed'
  const [paymentDetails, setPaymentDetails] = useState(null);

  if (!plan) return null;

  // Backend API URL (defaults to http://localhost:5000)
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  // Merchant WhatsApp number
  const merchantNumber = "917567319919";

  // Helper to open WhatsApp to Merchant (Success / Pending)
  const sendWhatsAppNotification = (status, orderInfo) => {
    let text = "";
    if (status === "success") {
      text =
        `✅ *भुगतान सफल - नया एनरोलमेंट (PAYMENT SUCCESSFUL)*\n\n` +
        `👤 *विद्यार्थी का नाम (Student Name):* ${orderInfo.name}\n` +
        `📱 *मोबाइल (Phone):* ${orderInfo.phone}\n` +
        `📚 *कोर्स (Course):* ${orderInfo.plan}\n` +
        `💰 *भुगतान की गई राशि (Amount):* ₹${orderInfo.price}\n` +
        `🆔 *पेमेंट आईडी (Payment ID):* ${orderInfo.paymentId}\n` +
        (orderInfo.orderId ? `📦 *ऑर्डर आईडी (Order ID):* ${orderInfo.orderId}\n` : "") +
        `\n` +
        `नमस्ते! मैंने Razorpay से पेमेंट पूरा कर लिया है। कृपया मुझे कोर्स का एक्सेस लिंक और क्रेडेंशियल्स भेजें।`;
    } else if (status === "pending" || status === "failed") {
      text =
        `⚠️ *भुगतान लंबित / रद्द (PAYMENT PENDING / INCOMPLETE)*\n\n` +
        `👤 *विद्यार्थी का नाम (Student Name):* ${orderInfo.name}\n` +
        `📱 *मोबाइल (Phone):* ${orderInfo.phone}\n` +
        `📚 *कोर्स (Course):* ${orderInfo.plan}\n` +
        `💰 *लंबित राशि (Pending Amount):* ₹${orderInfo.price}\n` +
        (orderInfo.orderId ? `📦 *ऑर्डर आईडी (Order ID):* ${orderInfo.orderId}\n` : "") +
        `\n` +
        `नमस्ते! मेरा पेमेंट अधूरा/लंबित रह गया है। कृपया मुझे UPI QR कोड या अन्य तरीके से पेमेंट पूरा करने में सहायता करें।`;
    }

    const url = `https://wa.me/${merchantNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  // Helper to send WhatsApp confirmation to the Customer
  const sendCustomerReceiptWhatsApp = (status, orderInfo) => {
    let text = "";
    const cleanCustomerNum = orderInfo.phone.replace(/\D/g, "");
    const targetNumber = cleanCustomerNum.length === 10 ? `91${cleanCustomerNum}` : cleanCustomerNum;

    if (status === "success") {
      text =
        `🎉 *नमस्ते ${orderInfo.name}!*\n\n` +
        `Creditjin के साथ *${orderInfo.plan}* में एनरोल करने के लिए धन्यवाद!\n\n` +
        `💳 *भुगतान रसीद (Payment Receipt):*\n` +
        `• राशि: ₹${orderInfo.price}\n` +
        `• स्थिति: सफल भुगतान (Paid Successfully) ✅\n` +
        `• पेमेंट आईडी: ${orderInfo.paymentId}\n\n` +
        `हमारी सपोर्ट टीम (7567319919) आपके कोर्स का एक्सेस सेट कर रही है। स्वागत है!`;
    } else {
      text =
        `⚠️ *नमस्ते ${orderInfo.name}!*\n\n` +
        `हमने देखा कि *${orderInfo.plan}* (₹${orderInfo.price}) के लिए आपका भुगतान पूरा नहीं हो सका।\n\n` +
        `यदि आपके पैसे कट गए हैं या आपको UPI/QR सहायता चाहिए, तो कृपया यहाँ उत्तर दें या 7567319919 पर संपर्क करें।`;
    }

    const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handlePayWithRazorpay = async (e) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setFormError("कृपया अपना पूरा नाम दर्ज करें।");
      return;
    }
    const cleanPhone = customerPhone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setFormError("कृपया एक मान्य 10-अंकों का मोबाइल नंबर दर्ज करें।");
      return;
    }

    setFormError("");
    setPaymentStatus("processing");

    let orderData = null;

    // 1. Call Backend to create official Razorpay Order
    try {
      const response = await fetch(`${backendUrl}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: plan.price,
          planTitle: plan.title,
          customerName: customerName.trim(),
          customerPhone: customerPhone.trim(),
        }),
      });

      if (response.ok) {
        orderData = await response.json();
      } else {
        console.warn("Backend order creation returned status:", response.status);
      }
    } catch (err) {
      console.warn("Could not reach payment backend, will attempt client checkout fallback:", err);
    }

    const razorpayKey =
      (orderData && orderData.keyId) ||
      import.meta.env.VITE_RAZORPAY_KEY_ID ||
      "rzp_live_TpkLTIECeCMV4z";

    const baseOrderInfo = {
      name: customerName.trim(),
      phone: customerPhone.trim(),
      plan: plan.title,
      price: plan.price,
      orderId: orderData?.orderId || "",
      paymentId: "",
    };

    const options = {
      key: razorpayKey,
      amount: orderData?.amount || plan.price * 100,
      currency: orderData?.currency || "INR",
      name: "Creditjin Masterclass",
      description: plan.title,
      order_id: orderData?.orderId || undefined,
      image: "/image/logo.png",
      prefill: {
        name: customerName.trim(),
        contact: customerPhone.trim(),
      },
      theme: {
        color: "#0f2d59",
      },
      handler: async function (response) {
        // Payment Succeeded at Gateway!
        const completedInfo = {
          ...baseOrderInfo,
          paymentId: response.razorpay_payment_id || `PAY_${Date.now()}`,
          orderId: response.razorpay_order_id || baseOrderInfo.orderId,
        };

        // 1. Verify with backend if order_id is present
        if (response.razorpay_order_id && response.razorpay_signature) {
          try {
            await fetch(`${backendUrl}/api/verify-payment`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
          } catch (verErr) {
            console.error("Backend verification error:", verErr);
          }
        }

        setPaymentDetails(completedInfo);
        setPaymentStatus("success");

        // 2. Trigger SUCCESS WhatsApp Notification to Merchant
        sendWhatsAppNotification("success", completedInfo);
      },
      modal: {
        ondismiss: function () {
          // User closed the gateway before paying -> Status: Pending / Incomplete
          const pendingInfo = {
            ...baseOrderInfo,
            paymentId: "PENDING_CHECKOUT",
          };
          setPaymentDetails(pendingInfo);
          setPaymentStatus("pending");

          // Trigger PENDING WhatsApp Notification to Merchant
          sendWhatsAppNotification("pending", pendingInfo);
        },
      },
    };

    if (window.Razorpay) {
      try {
        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", function (failResponse) {
          const failInfo = {
            ...baseOrderInfo,
            paymentId: failResponse.error?.metadata?.payment_id || "FAILED",
          };
          setPaymentDetails(failInfo);
          setPaymentStatus("pending");
          sendWhatsAppNotification("pending", failInfo);
        });
        rzp.open();
      } catch (err) {
        console.error("Razorpay Error:", err);
        sendWhatsAppNotification("pending", baseOrderInfo);
        setPaymentStatus("pending");
      }
    } else {
      // If Razorpay script failed to load, open pending WhatsApp directly
      sendWhatsAppNotification("pending", baseOrderInfo);
      setPaymentStatus("pending");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0d1d3f] border border-blue-500/30 rounded-2xl shadow-2xl p-6 md:p-8 text-white overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800/80 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. SUCCESS STATE */}
        {paymentStatus === "success" && paymentDetails && (
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black mb-1 text-white">भुगतान सफल रहा!</h3>
            <p className="text-xs text-emerald-400 font-semibold mb-4">
              पेमेंट आईडी: {paymentDetails.paymentId}
            </p>

            <div className="p-4 rounded-xl bg-[#081329] border border-emerald-500/30 text-left mb-6 space-y-1.5 text-xs text-slate-300">
              <p><strong className="text-white">विद्यार्थी:</strong> {paymentDetails.name}</p>
              <p><strong className="text-white">मोबाइल:</strong> {paymentDetails.phone}</p>
              <p><strong className="text-white">प्लान:</strong> {paymentDetails.plan}</p>
              <p><strong className="text-white">भुगतान की गई राशि:</strong> ₹{paymentDetails.price}</p>
            </div>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              टीम को सूचना भेज दी गई है। आप विद्यार्थी के नंबर पर भी रसीद भेज सकते हैं:
            </p>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => sendCustomerReceiptWhatsApp("success", paymentDetails)}
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
              >
                <span>ग्राहक को WhatsApp रसीद भेजें ({paymentDetails.phone})</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                पूर्ण / बंद करें
              </button>
            </div>
          </div>
        )}

        {/* 2. PENDING / CANCELLED STATE */}
        {paymentStatus === "pending" && paymentDetails && (
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <AlertCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-1 text-white">भुगतान लंबित है</h3>
            <p className="text-xs text-amber-400 font-medium mb-4">
              चेकआउट पूरा नहीं हुआ था
            </p>

            <div className="p-4 rounded-xl bg-[#081329] border border-amber-500/30 text-left mb-6 space-y-1.5 text-xs text-slate-300">
              <p><strong className="text-white">विद्यार्थी:</strong> {paymentDetails.name}</p>
              <p><strong className="text-white">मोबाइल:</strong> {paymentDetails.phone}</p>
              <p><strong className="text-white">प्लान:</strong> {paymentDetails.plan}</p>
              <p><strong className="text-white">लंबित राशि:</strong> ₹{paymentDetails.price}</p>
            </div>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              हमने हमारी WhatsApp टीम (7567319919) को सूचित कर दिया है। आप Razorpay से दोबारा प्रयास कर सकते हैं या WhatsApp QR से भुगतान पूरा कर सकते हैं।
            </p>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => sendWhatsAppNotification("pending", paymentDetails)}
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
              >
                <span>WhatsApp QR कोड से भुगतान पूरा करें</span>
              </button>
              <button
                onClick={() => setPaymentStatus("idle")}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Razorpay से पुनः प्रयास करें
              </button>
            </div>
          </div>
        )}

        {/* 3. DEFAULT FORM / INITIAL STATE */}
        {(paymentStatus === "idle" || paymentStatus === "processing") && (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" /> सुरक्षित एनरोलमेंट
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">अपना भुगतान पूरा करें</h3>
              <p className="text-xs text-slate-400 mt-1">
                Razorpay चेकआउट के लिए नीचे अपनी जानकारी भरें।
              </p>
            </div>

            {/* Plan Info Card */}
            <div className="p-3.5 rounded-xl bg-[#081329] border border-blue-500/20 mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 font-medium">चुना गया प्लान</p>
                <p className="text-sm font-bold text-white mt-0.5 max-w-[220px] truncate">
                  {plan.title}
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-[#22c55e]">₹{plan.price}</span>
              </div>
            </div>

            {/* Form Error */}
            {formError && (
              <div className="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium">
                {formError}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handlePayWithRazorpay} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  पूरा नाम *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    disabled={paymentStatus === "processing"}
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      if (formError) setFormError("");
                    }}
                    placeholder="अपना नाम दर्ज करें"
                    className="w-full pl-10 pr-4 py-3 bg-[#081329] border border-blue-400/30 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  मोबाइल नंबर *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    maxLength={13}
                    disabled={paymentStatus === "processing"}
                    value={customerPhone}
                    onChange={(e) => {
                      setCustomerPhone(e.target.value);
                      if (formError) setFormError("");
                    }}
                    placeholder="उदा. 9876543210"
                    className="w-full pl-10 pr-4 py-3 bg-[#081329] border border-blue-400/30 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={paymentStatus === "processing"}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {paymentStatus === "processing" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Razorpay खुल रहा है...</span>
                    </>
                  ) : (
                    <>
                      <span>अभी भुगतान करें ₹{plan.price}</span>
                      <span className="text-lg">→</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-400">
                <span>🔒 Razorpay द्वारा सुरक्षित (UPI, Cards, Netbanking)</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
