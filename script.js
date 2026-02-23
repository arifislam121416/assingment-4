// empty array 
let interviewList =[];
let rejectList =[];

// top count dorar jonno 
let total = document.getElementById("total-count");
let interview = document.getElementById("interview-count");
let reject = document.getElementById("reject-count");

// all card dorar jonno 
let allCards = document.getElementById("all-card");

// main container dorar jonno 
const containerMain =document.querySelector('main')

// faka section creat kore dorar jonno 
const filterSection =document.getElementById("filter-section");

// poriman korar jonno kaj kore 
function calculateCount (){
    total.innerText = allCards.children.length ;
    interview.innerText = interviewList.length;
    reject.innerText = rejectList.length ;
}
// function call korar jonno 
calculateCount()
// top btn dorat jonno 
const allFilter = document.getElementById("all-btn");
const interviewFilter = document.getElementById("interview-btn");
const rejectFilter = document.getElementById("reject-btn");

// toggle er madome color add & remove korar jonno 

function toggleStyle(id){
    allFilter.classList.remove('bg-black','text-white')
    interviewFilter.classList.remove('bg-black','text-white')
    rejectFilter.classList.remove('bg-black','text-white')

    const selected = document.getElementById(id)
    selected.classList.remove('bg-gray-700','text-white')
    selected.classList.add('bg-gray-700','text-white')
}

//  selected.classList.remove('bg-gray-300', 'text-black')
 

containerMain.addEventListener('click', function (event) {
    if (event.target.classList.contains('jobInterviewBtn')) {
const parendNode = event.target.closest(".card-item")   

        const  companiName = parendNode.querySelector('.companiName').innerText
        const  remoteSalary = parendNode.querySelector('.remoteSalary').innerText
        const descriptionName = parendNode.querySelector('.descriptionName').innerText
        const appliedName= parendNode.querySelector('.appliteName').innerText;

        const cardInfo = {
             companiName,
           remoteSalary,
             appliteName :'Applied',
            descriptionName
        }

        const InterviewE = interviewList.find(item => item.companiName == cardInfo.companiName)
parendNode.querySelector('.appliteName').innerText = 'Applied'

        if (!InterviewE) {
            interviewList.push(cardInfo)
        }
        renderApplied()
        calculateCount()
    }})

function renderApplied(){
filterSection.innerHTML ='' 

for(let applied of interviewList){
    console.log(applied);
    let divCreate = document.createElement('div')
   divCreate.className = 'mb-5 rounded-2xl p-8 flex justify-between bg-amber-100'

divCreate.innerHTML = `
<div class="space-y-6">
    <div>
        <h2 class="companiName text-2xl text-[#033972]">${applied.companiName}</h2>
    </div>
    <p class="remoteSalary text-gray-500">${applied.remoteSalary}</p>
    <p class="appliteName bg-green-300 px-2 py-1 rounded">Applied</p>
    <p class="descriptionName">${applied.descriptionName}</p>
</div>
`

   filterSection.appendChild(divCreate)
}

}
renderApplied()
