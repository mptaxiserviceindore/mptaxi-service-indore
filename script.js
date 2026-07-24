/*====================================
MP TAXI SERVICE INDORE
script.js FINAL PART 1
====================================*/


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");

});

}


// CLOSE MENU AFTER CLICK

document.querySelectorAll("#navbar a").forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");

});

});



// TRIP TABS

const tripButtons = document.querySelectorAll(".trip-btn");

const returnDateBox = document.getElementById("returnDateBox");
const returnTimeBox = document.getElementById("returnTimeBox");
const packageBox = document.getElementById("packageBox");


let selectedTrip="oneway";


tripButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


tripButtons.forEach(b=>{

b.classList.remove("active");

});


btn.classList.add("active");


selectedTrip = btn.dataset.trip;



// HIDE ALL

if(returnDateBox)
returnDateBox.style.display="none";


if(returnTimeBox)
returnTimeBox.style.display="none";


if(packageBox)
packageBox.style.display="none";



// ROUND TRIP

if(selectedTrip==="round"){


returnDateBox.style.display="block";

returnTimeBox.style.display="block";


}



// LOCAL RENTAL

if(selectedTrip==="rental"){


packageBox.style.display="block";


}


// AIRPORT

if(selectedTrip==="airport"){


console.log("Airport Trip Selected");


}


});


});



// LOCATION DATABASE

const locations=[

"Indore",
"Indore Airport",
"Indore Railway Station",
"Ujjain",
"Mahakal Temple Ujjain",
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
"Barwani",
"Mhow",
"Rau",
"Pithampur"

];



// SUGGESTION FUNCTION


function setupSuggestion(inputId,boxId){


const input=document.getElementById(inputId);

const box=document.getElementById(boxId);


if(!input || !box) return;



input.addEventListener("input",()=>{


let value=input.value.toLowerCase();


box.innerHTML="";


if(value===""){

box.style.display="none";

return;

}



let result=locations.filter(place=>

place.toLowerCase().includes(value)

);



result.slice(0,8).forEach(place=>{


let div=document.createElement("div");


div.innerHTML=

'<i class="fa-solid fa-location-dot"></i> '+place;


div.onclick=()=>{


input.value=place;

box.style.display="none";


};


box.appendChild(div);


});



if(result.length){

box.style.display="block";

}

else{

box.style.display="none";

}


});


document.addEventListener("click",(e)=>{


if(!input.contains(e.target) && !box.contains(e.target)){


box.style.display="none";


}


});


}



setupSuggestion(
"pickup",
"pickupSuggestions"
);


setupSuggestion(
"drop",
"dropSuggestions"
);

/*====================================
MP TAXI SERVICE INDORE
script.js FINAL PART 2
SEARCH + FARE SYSTEM
====================================*/


const searchBtn = document.getElementById("searchBtn");


if(searchBtn){


searchBtn.addEventListener("click",()=>{


const pickup =
document.getElementById("pickup").value.trim();


const drop =
document.getElementById("drop").value.trim();


const date =
document.getElementById("journeyDate").value;


const time =
document.getElementById("pickupTime").value;


const returnDate =
document.getElementById("returnDate")?.value || "";


const returnTime =
document.getElementById("returnTime")?.value || "";


const packageName =
document.getElementById("rentalPackage")?.value || "";



if(pickup===""){

alert("Please Select Pickup Location");
return;

}


if(selectedTrip!=="rental" && drop===""){

alert("Please Select Drop Location");
return;

}


if(date===""){

alert("Please Select Journey Date");
return;

}


if(time===""){

alert("Please Select Pickup Time");
return;

}



if(selectedTrip==="round"){

if(returnDate===""){

alert("Please Select Return Date");
return;

}

if(returnTime===""){

alert("Please Select Return Time");
return;

}

}



if(selectedTrip==="rental"){

if(packageName===""){

alert("Please Select Rental Package");
return;

}

}


// ================================
// ADVANCED FARE CALCULATION
// ================================


let routeFare = 0;


let pickupCity = pickup.toLowerCase();
let dropCity = drop.toLowerCase();


// ROUTE DATABASE

if(
pickupCity.includes("indore") &&
dropCity.includes("ujjain")
){

routeFare = 1800;

}

else if(
pickupCity.includes("indore") &&
dropCity.includes("omkareshwar")
){

routeFare = 2800;

}

else if(
pickupCity.includes("indore") &&
dropCity.includes("maheshwar")
){

routeFare = 2500;

}

else if(
pickupCity.includes("indore") &&
dropCity.includes("dewas")
){

routeFare = 1200;

}

else if(
pickupCity.includes("indore") &&
dropCity.includes("bhopal")
){

routeFare = 3500;

}

else if(
pickupCity.includes("indore") &&
dropCity.includes("mandu")
){

routeFare = 3000;

}

else{

routeFare = 2000;

}



// CAR MULTIPLIER

let carType = "Swift Dzire";

let carFare = routeFare;



// ROUND TRIP

if(selectedTrip==="round"){

carFare = routeFare * 2;

}



// AIRPORT

if(selectedTrip==="airport"){

carFare = routeFare + 500;

}



// RENTAL PACKAGE

if(selectedTrip==="rental"){


if(packageName.includes("1 Hour")){

carFare = 500;

}

else if(packageName.includes("2 Hour")){

carFare = 900;

}

else if(packageName.includes("4 Hour")){

carFare = 1600;

}

else if(packageName.includes("8 Hour")){

carFare = 2800;

}

else if(packageName.includes("12 Hour")){

carFare = 4000;

}

}


// SAVE BASE FARE

localStorage.setItem(
"baseFare",
carFare
);

localStorage.setItem(
"fare",
carFare
);
localStorage.setItem("tripType",selectedTrip);

localStorage.setItem("pickup",pickup);

localStorage.setItem("drop",drop);

localStorage.setItem("date",date);

localStorage.setItem("time",time);

localStorage.setItem("returnDate",returnDate);

localStorage.setItem("returnTime",returnTime);

localStorage.setItem("package",packageName);

localStorage.setItem("fare",fare);



// OPEN RESULTS


window.location.href="results.html";


});


}

/*====================================
MP TAXI SERVICE INDORE
script.js FINAL PART 3
RESULT PAGE
====================================*/


// SHOW RESULT DATA

if(document.getElementById("resultPickup")){

document.getElementById("resultPickup").innerText =
localStorage.getItem("pickup");

document.getElementById("resultDrop").innerText =
localStorage.getItem("drop");

document.getElementById("resultDate").innerText =
localStorage.getItem("date");

document.getElementById("resultTime").innerText =
localStorage.getItem("time");

document.getElementById("resultTrip").innerText =
localStorage.getItem("tripType");

document.getElementById("resultFare").innerText =
"₹ " + localStorage.getItem("fare");

}



// BOOK NOW BUTTON

const bookButtons=document.querySelectorAll(".bookBtn");


bookButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


let car=btn.dataset.car || 
btn.parentElement.querySelector("h3").innerText;



localStorage.setItem("car",car);


window.location.href="booking.html";


});


});



/*====================================
PART 4
BOOKING PAGE + WHATSAPP
====================================*/


if(document.getElementById("selectedCar")){


document.getElementById("selectedCar").innerText =
localStorage.getItem("car");


}


if(document.getElementById("bookingFare")){


document.getElementById("bookingFare").innerText =
"₹ " + localStorage.getItem("fare");


}



const confirmBooking =
document.getElementById("confirmBooking");



if(confirmBooking){


confirmBooking.addEventListener("click",()=>{


const name =
document.getElementById("customerName").value.trim();


const mobile =
document.getElementById("customerMobile").value.trim();


const address =
document.getElementById("pickupAddress").value.trim();


const note =
document.getElementById("specialNote").value.trim();



if(name===""){

alert("Enter Your Name");

return;

}


if(mobile.length!==10){

alert("Enter Valid Mobile Number");

return;

}



let bookingID =
"MP"+Math.floor(100000+Math.random()*900000);



let message=

`🚖 MP TAXI SERVICE INDORE

🆔 Booking ID: ${bookingID}

👤 Name: ${name}

📞 Mobile: ${mobile}

🚕 Trip: ${localStorage.getItem("tripType")}

📍 Pickup: ${localStorage.getItem("pickup")}

📍 Drop: ${localStorage.getItem("drop")}

📅 Date: ${localStorage.getItem("date")}

🕒 Time: ${localStorage.getItem("time")}

🔁 Return Date: ${localStorage.getItem("returnDate")}

🔁 Return Time: ${localStorage.getItem("returnTime")}

📦 Package: ${localStorage.getItem("package")}

🚗 Car: ${localStorage.getItem("car")}

💰 Fare: ₹${localStorage.getItem("fare")}

🏠 Address: ${address}

📝 Note: ${note}`;



window.open(

"https://wa.me/917000688407?text="+
encodeURIComponent(message),

"_blank"

);



});


}



/*====================================
PART 5
ANIMATION + SCROLL + EXTRA
====================================*/



// SCROLL REVEAL


const revealElements =
document.querySelectorAll(
".route-card,.car-card,.about-card,.contact-card,.faq-item"
);



function reveal(){


revealElements.forEach(el=>{


let top =
el.getBoundingClientRect().top;


if(top < window.innerHeight-80){

el.classList.add("active");

}


});


}



window.addEventListener("scroll",reveal);

reveal();




// BACK TO TOP


const topBtn=document.getElementById("topBtn");


if(topBtn){


window.addEventListener("scroll",()=>{


if(window.scrollY>400){

topBtn.style.display="flex";

}

else{

topBtn.style.display="none";

}


});



topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}



// AUTO YEAR


const year =
document.querySelector("footer p");


if(year){

year.innerHTML =
year.innerHTML.replace(
"2025",
new Date().getFullYear()
);

}
