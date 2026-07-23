/* ==========================================
MP TAXI SERVICE
FINAL SCRIPT.JS - PART 1
========================================== */

/* MP Locations Database */

const mpLocations = [

"Indore",
"Indore Airport",
"Indore Railway Station",
"Rajwada",
"Khajrana Ganesh Temple",
"Super Corridor",
"Vijay Nagar",
"MR10",
"Bhanwarkuan",
"Palasia",
"Rau",
"Mhow",
"Pithampur",

"Ujjain",
"Mahakaleshwar Temple",
"Ujjain Railway Station",

"Omkareshwar",
"Mamleshwar",

"Maheshwar",

"Dewas",

"Bhopal",
"Bhopal Airport",
"Rani Kamlapati Railway Station",

"Sehore",
"Ashta",

"Ratlam",
"Ratlam Junction",

"Mandsaur",

"Neemuch",

"Jaora",

"Shajapur",

"Agar Malwa",

"Susner",

"Sarangpur",

"Shivpuri",

"Guna",

"Ashoknagar",

"Vidisha",

"Sanchi",

"Raisen",

"Hoshangabad",

"Itarsi",

"Betul",

"Khandwa",

"Burhanpur",

"Khargone",

"Barwani",

"Dhar",

"Mandu",

"Alirajpur",

"Jhabua",

"Badwani",

"Rewa",

"Satna",

"Panna",

"Khajuraho",

"Chhatarpur",

"Tikamgarh",

"Sagar",

"Damoh",

"Katni",

"Jabalpur",

"Narsinghpur",

"Seoni",

"Balaghat",

"Mandla",

"Dindori",

"Shahdol",

"Umaria",

"Anuppur",

"Singrauli",

"Sidhi",

"Morena",

"Bhind",

"Gwalior",

"Datia"

];
/* ==========================================
FINAL SCRIPT.JS - PART 2
Smart Search Suggestion
========================================== */

const pickupInput = document.getElementById("pickup");
const dropInput = document.getElementById("drop");

/* Create Suggestion Box */

const pickupList = document.createElement("div");
pickupList.className = "suggestion-box";
pickupInput.parentNode.appendChild(pickupList);

const dropList = document.createElement("div");
dropList.className = "suggestion-box";
dropInput.parentNode.appendChild(dropList);

/* Search Function */

function showSuggestions(input, box){

const value = input.value.toLowerCase().trim();

box.innerHTML="";

if(value.length<1){

box.style.display="none";

return;

}

const result = mpLocations.filter(location=>

location.toLowerCase().includes(value)

);

if(result.length===0){

box.style.display="none";

return;

}

box.style.display="block";

result.slice(0,8).forEach(place=>{

const item=document.createElement("div");

item.className="suggestion-item";

item.innerHTML=place;

item.onclick=function(){

input.value=place;

box.style.display="none";

};

box.appendChild(item);

});

}

/* Events */

pickupInput.addEventListener("keyup",function(){

showSuggestions(this,pickupList);

});

dropInput.addEventListener("keyup",function(){

showSuggestions(this,dropList);

});

/* Hide on Click Outside */

document.addEventListener("click",function(e){

if(!pickupList.contains(e.target) && e.target!==pickupInput){

pickupList.style.display="none";

}

if(!dropList.contains(e.target) && e.target!==dropInput){

dropList.style.display="none";

}

});
/* ==========================================
FINAL SCRIPT.JS - PART 3
Booking + WhatsApp + Dynamic Fields
========================================== */

const tripType = document.getElementById("tripType");
const localPackageBox = document.getElementById("localPackageBox");
const returnDateBox = document.getElementById("returnDateBox");

tripType.addEventListener("change",function(){

if(this.value==="Local Rental"){

localPackageBox.style.display="block";
returnDateBox.style.display="none";

}

else if(this.value==="Round Trip"){

localPackageBox.style.display="none";
returnDateBox.style.display="block";

}

else{

localPackageBox.style.display="none";
returnDateBox.style.display="none";

}

});

/* Booking */

document.getElementById("bookNow").addEventListener("click",function(){

const bookingId="MP"+Math.floor(100000+Math.random()*900000);

const name=document.getElementById("customerName").value.trim();

const mobile=document.getElementById("mobile").value.trim();

const pickup=document.getElementById("pickup").value.trim();

const drop=document.getElementById("drop").value.trim();

const trip=document.getElementById("tripType").value;

const rental=document.getElementById("localPackage").value;

const pickupDate=document.getElementById("pickupDate").value;

const pickupTime=document.getElementById("pickupTime").value;

const returnDate=document.getElementById("returnDate").value;

const vehicle=document.getElementById("vehicle").value;

const passengers=document.getElementById("passengers").value;

const note=document.getElementById("note").value.trim();

if(name===""){

alert("Enter Customer Name");

return;

}

if(mobile.length!=10){

alert("Enter Valid Mobile Number");

return;

}

if(pickup===""){

alert("Enter Pickup Location");

return;

}

if(drop==="" && trip!=="Local Rental"){

alert("Enter Drop Location");

return;

}

if(trip===""){

alert("Select Trip Type");

return;

}

const message=`🚖 *MP TAXI SERVICE INDORE*

━━━━━━━━━━━━━━

🆔 Booking ID
${bookingId}

👤 Name
${name}

📞 Mobile
${mobile}

📍 Pickup
${pickup}

📍 Drop
${drop}

🚖 Trip
${trip}

🕒 Rental Package
${rental}

📅 Pickup Date
${pickupDate}

⏰ Pickup Time
${pickupTime}

📅 Return Date
${returnDate}

🚗 Vehicle
${vehicle}

👥 Passengers
${passengers}

📝 Note
${note}

━━━━━━━━━━━━━━

Please Confirm My Booking.`;

window.open(

"https://wa.me/917000688407?text="+encodeURIComponent(message),

"_blank"

);

});
