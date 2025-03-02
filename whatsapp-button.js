document.addEventListener("DOMContentLoaded", function () {
    let whatsappBtn = document.createElement("a");
    whatsappBtn.href = "https://wa.me/+94701366370";
    whatsappBtn.target = "_blank";
    whatsappBtn.className = "whatsapp-float";
    whatsappBtn.setAttribute("aria-label", "Chat with us on WhatsApp");
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappBtn);
});
