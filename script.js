/*========================================
MP TAXI SERVICE
script.js - Part 1
========================================*/

/* Trip Tabs */

const tabs = document.querySelectorAll(".tabs button");

tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

tabs.forEach(btn=>btn.classList.remove("active"));

tab.classList.add("active");

});

});

/* MP Location Database */

const locations=[

"Indore",
"Indore Airport",
"Indore Railway Station",
"Rajwada",
"Vijay Nagar",
"Palasia",
"MR10",
"Bhawarkuan",
"Rau",
"Mhow",
"Pithampur",

"Ujjain",
"Mahakal Temple",
"Ujjain Railway Station",

"Omkareshwar",
"Maheshwar",

"Dewas",

"Bhopal",
"Bhopal Airport",

"Ratlam",

"Mandsaur",

"Neemuch",

"Gwalior",

"Jabalpur",

"Khajuraho",

"Sanchi",

"Rewa",

"Satna",

"Burhanpur",

"Khandwa",

"Sehore",

"Vidisha",

"Sagar",

"Shivpuri",

"Dhar",

"Mandu",

"Barwani"

];

/* Input */

const pickup=document.getElementById("pickup");

const drop=document.getElementById("drop");

/* Suggestion Box */

function createSuggestion(input){

const box=document.createElement("div");

box.className="suggestion-box";

input.parentElement.appendChild(box);

input.addEventListener("keyup",()=>{

const value=input.value.toLowerCase();

box.innerHTML="";

if(value===""){

box.style.display="none";

return;

}

const result=locations.filter(item=>

item.toLowerCase().includes(value)

);

result.slice(0,8).forEach(place=>{

const div=document.createElement("div");

div.className="suggestion-item";

div.innerText=place;

div.onclick=function(){

input.value=place;

box.style.display="none";

};

box.appendChild(div);

});

box.style.display=result.length?"block":"none";

});

document.addEventListener("click",(e)=>{

if(!input.parentElement.contains(e.target)){

box.style.display="none";

}

});

}

createSuggestion(pickup);

createSuggestion(drop);
/*========================================
Search Button
========================================*/

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

const pickup = document.getElementById("pickup").value.trim();
const drop = document.getElementById("drop").value.trim();
const date = document.getElementById("date").value;
const time = document.getElementById("time").value;

if (pickup === "") {
alert("Please enter Pickup Location");
return;
}

if (drop === "") {
alert("Please enter Drop Location");
return;
}

if (date === "") {
alert("Please select Journey Date");
return;
}

if (time === "") {
alert("Please select Pickup Time");
return;
}

/* Save Booking Data */

localStorage.setItem("pickup", pickup);
localStorage.setItem("drop", drop);
localStorage.setItem("date", date);
localStorage.setItem("time", time);

/* Demo Fare */

let fare = 0;

if (
pickup.toLowerCase().includes("indore") &&
drop.toLowerCase().includes("ujjain")
) {

fare = 1800;

} else if (
pickup.toLowerCase().includes("indore") &&
drop.toLowerCase().includes("omkareshwar")
) {

fare = 2800;

} else if (
pickup.toLowerCase().includes("indore") &&
drop.toLowerCase().includes("maheshwar")
) {

fare = 2500;

} else if (
pickup.toLowerCase().includes("indore") &&
drop.toLowerCase().includes("dewas")
) {

fare = 1200;

} else {

fare = 1500;

}

localStorage.setItem("fare", fare);

/* Open Results Page */

window.location.href = "results.html";

});
/*========================================
RESULTS + BOOKING + WHATSAPP
script.js - Part 3
========================================*/

/* Show Search Data on results.html */

if(document.getElementById("pickupText")){

document.getElementById("pickupText").innerText=
localStorage.getItem("pickup");

document.getElementById("dropText").innerText=
localStorage.getItem("drop");

document.getElementById("dateText").innerText=
localStorage.getItem("date");

document.getElementById("timeText").innerText=
localStorage.getItem("time");

document.getElementById("fareText").innerText=
"₹ "+localStorage.getItem("fare");

}

/* Book Button */

document.querySelectorAll(".bookNow").forEach(btn=>{

btn.addEventListener("click",function(){

const car=this.dataset.car;

localStorage.setItem("car",car);

window.location.href="booking.html";

});

});

/* Booking Page */

if(document.getElementById("selectedCar")){

document.getElementById("selectedCar").innerText=
localStorage.getItem("car");

document.getElementById("bookingFare").innerText=
"₹ "+localStorage.getItem("fare");

}

/* WhatsApp Booking */

const confirmBtn=document.getElementById("confirmBooking");

if(confirmBtn){

confirmBtn.addEventListener("click",function(){

const name=document.getElementById("customerName").value.trim();

const mobile=document.getElementById("customerMobile").value.trim();

const address=document.getElementById("pickupAddress").value.trim();

const note=document.getElementById("specialNote").value.trim();

if(name==""){

alert("Enter Name");

return;

}

if(mobile.length!=10){

alert("Enter Valid Mobile Number");

return;

}

const bookingId="MP"+Math.floor(Math.random()*900000+100000);

const message=`🚖 *MP TAXI SERVICE*

🆔 Booking ID : ${bookingId}

👤 Name : ${name}

📞 Mobile : ${mobile}

📍 Pickup : ${localStorage.getItem("pickup")}

📍 Drop : ${localStorage.getItem("drop")}

📅 Date : ${localStorage.getItem("date")}

🕒 Time : ${localStorage.getItem("time")}

🚗 Vehicle : ${localStorage.getItem("car")}

💰 Fare : ₹${localStorage.getItem("fare")}

🏠 Pickup Address : ${address}

📝 Note : ${note}`;

window.open(

"https://wa.me/917000688407?text="+encodeURIComponent(message),

"_blank"

);

});

}
