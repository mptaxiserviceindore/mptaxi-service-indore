// Taxi Rates (आप बाद में यहां किराया बदल सकते हैं)

const rates = {

    dzire: 12,
    ertiga: 15,
    innova: 20,
    scorpio: 18,
    traveller: 25

};



// Popular Locations

const locations = [

"Indore",
"Indore Airport",
"Indore Railway Station",
"Vijay Nagar Indore",
"Palasia Indore",
"Rajwada Indore",

"Ujjain",
"Ujjain Mahakal Temple",
"Ujjain Railway Station",

"Omkareshwar",
"Bhopal",
"Dewas",
"Mhow",
"Ratlam",
"Khandwa"

];




// Trip Selection

function setTrip(type){

document.getElementById("tripType").value = type;


let buttons = document.querySelectorAll(".tabs button");


buttons.forEach(btn=>{

btn.classList.remove("active");

});

event.target.classList.add("active");



let returnBox = document.getElementById("returnSection");


if(type === "Round Trip"){

returnBox.classList.remove("hidden");

}

else{

returnBox.classList.add("hidden");

}


}




// Location Suggestion


function locationSearch(inputId, suggestionId){


let input = document.getElementById(inputId);

let suggestion = document.getElementById(suggestionId);



input.addEventListener("input",function(){


let text=this.value.toLowerCase();

suggestion.innerHTML="";


if(text=="") return;



locations
.filter(place=>place.toLowerCase().includes(text))
.forEach(place=>{


let div=document.createElement("div");

div.innerText=place;


div.onclick=function(){

input.value=place;

suggestion.innerHTML="";

}


suggestion.appendChild(div);



});


});


}



locationSearch("pickup","pickupSuggestion");

locationSearch("drop","dropSuggestion");







// Fare Calculator


function calculateFare(){



let car=document.getElementById("car").value;


let rate=rates[car];


let distance=0;


// Default route estimate

let pickup=document.getElementById("pickup").value.toLowerCase();

let drop=document.getElementById("drop").value.toLowerCase();



if(
pickup.includes("indore") &&
drop.includes("ujjain")
){

distance=55;

}

else if(
pickup.includes("indore") &&
drop.includes("omkareshwar")
){

distance=80;

}

else if(
pickup.includes("indore") &&
drop.includes("bopal")
){

distance=190;

}

else{

distance=100;

}




let trip=document.getElementById("tripType").value;



let fare;



if(trip=="Round Trip"){

fare = distance * 2 * rate;

}

else{

fare = distance * rate;

}




// Minimum Fare

if(fare < 1800){

fare = 1800;

}



document.getElementById("fare").innerText =
Math.round(fare);



}







// WhatsApp Booking


function sendBooking(){


let message =

`🚕 MT TAXI SERVICE INDORE

New Taxi Booking

Trip Type:
${document.getElementById("tripType").value}


Name:
${document.getElementById("customerName").value}


Mobile:
${document.getElementById("mobile").value}


Pickup:
${document.getElementById("pickup").value}


Drop:
${document.getElementById("drop").value}


Pickup Date:
${document.getElementById("pickupDate").value}


Pickup Time:
${document.getElementById("pickupTime").value}


Return Date:
${document.getElementById("returnDate").value}


Return Time:
${document.getElementById("returnTime").value}


Car:
${document.getElementById("car").value}


Estimated Fare:
₹${document.getElementById("fare").innerText}



Thank You`;



let url =
"https://wa.me/917000688407?text="
+encodeURIComponent(message);



window.open(url,"_blank");

}
