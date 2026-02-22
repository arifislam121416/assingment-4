
let interviewList =[];
let rejectList =[];


let total = document.getElementById("total-count");
let interview = document.getElementById("interview-count");
let reject = document.getElementById("reject-count");

const allCards = document.getElementById("all-card");

function calculateCount (){
    total.innerText = allCards.children.length ;
    interview.innerText = interviewList.length;
    reject.innerText = rejectList.length ;
}
calculateCount()

const allFilter = document.getElementById("all-btn");
const interviewFilter = document.getElementById("interview-btn");
const rejectFilter = document.getElementById("reject-btn");

function styleList(id){

}



// const interviewList = document.getElementById("interview-btn");
// const rejectList = document.getElementById("reject-btn");
// const allList = document.getElementById("all-btn");

