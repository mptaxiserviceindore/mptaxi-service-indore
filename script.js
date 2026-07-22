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



function setupSuggestion(inputId, listId){

const input = document.getElementById(inputId);
const list = document.getElementById(listId);


input.addEventListener("input", function(){


let value = this.value.toLowerCase();

list.innerHTML="";


if(value===""){
    return;
}


let results = locations.filter(place =>
place.toLowerCase().includes(value)
);



results.forEach(place=>{


let div=document.createElement("div");

div.innerText=place;


div.onclick=function(){

input.value=place;
list.innerHTML="";

};


list.appendChild(div);


});


});


}



setupSuggestion("pickup","pickup-list");

setupSuggestion("drop","drop-list");





function sendWhatsApp(){


let trip =
document.querySelector('input[name="trip"]:checked').value;


let pickup =
document.getElementById("pickup").value;


let drop =
document.getElementById("drop").value;


let date =
document.getElementById("date").value;


let time =
document.getElementById("time").value;


let car =
document.getElementById("car").value;


let name =
document.getElementById("name").value;


let mobile =
document.getElementById("mobile").value;



let message =

`🚕 New Taxi Booking

MT TAXI SERVICE INDORE

Trip Type:
${trip}

Customer Name:
${name}

Mobile Number:
${mobile}

Pickup Location:
${pickup}

Drop Location:
${drop}

Pickup Date:
${date}

Pickup Time:
${time}

Car:
${car}

Thank You`;



let whatsappURL =

"https://wa.me/917000688407?text="

+ encodeURIComponent(message);



window.open(whatsappURL,"_blank");


}
