// =============================
// MP Taxi Service Booking Script
// WhatsApp Booking
// =============================

const form = document.getElementById("bookingForm");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const pickup = document.getElementById("pickup").value.trim();
const drop = document.getElementById("drop").value.trim();
const date = document.getElementById("date").value;
const car = document.getElementById("car").value;

const message =
`🚖 *New Taxi Booking Request*

👤 Name : ${name}

📞 Mobile : ${phone}

📍 Pickup : ${pickup}

🏁 Drop : ${drop}

📅 Journey Date : ${date}

🚘 Car : ${car}

Thank You
MP Taxi Service Indore`;

const whatsappNumber = "917000688407";

const whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

window.location.href = whatsappURL;

});

}
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("active");
    });
});
