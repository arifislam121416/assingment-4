
let interviewList =[];
let rejectList =[];


let total = document.getElementById("total-count");
let interview = document.getElementById("interview-count");
let reject = document.getElementById("reject-count");

const allCards = document.getElementById("all-card");
const mainContainer =document.getElementById("containet");

function calculateCount (){
    total.innerText = allCards.children.length ;
    interview.innerText = interviewList.length;
    reject.innerText = rejectList.length ;
}
calculateCount()

const allFilter = document.getElementById("all-btn");
const interviewFilter = document.getElementById("interview-btn");
const rejectFilter = document.getElementById("reject-btn");

function toggleStyle(id){
 allFilter.classList.add('bg-black-300','text-white')
 interviewFilter.classList.add('bg-black-300','text-white')
 rejectFilter.classList.add('bg-black-300','text-white')

 allFilter.classList.remove('bg-black','text-white')
 interviewFilter.classList.remove('bg-black','text-white')
 rejectFilter.classList.remove('bg-black','text-white')



 const selected = document.getElementById(id)
currentStatus = id

 selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-black', 'text-white')
}

