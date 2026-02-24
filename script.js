// empty array 
let interviewList =[];
let rejectList =[];
let curent = 'all'

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

    allFilter.classList.add('bg-gray-300','text-black')
    interviewFilter.classList.add('bg-gray-300','text-black')
    rejectFilter.classList.add('bg-gray-300','text-black')

    const selected = document.getElementById(id)
    selected.classList.remove('bg-gray-300','text-black')
    selected.classList.add('bg-black','text-white')
    
    if(id == 'interview-btn'){
        allCards.classList.add('hidden')
        filterSection.classList.remove('hidden')
            renderApplied()

    }else if(id == 'all-btn'){
       allCards.classList.remove('hidden')
        filterSection.classList.add('hidden')
    }else if(id == 'reject-btn'){
       allCards.classList.add('hidden')
        filterSection.classList.remove('hidden')
            renderReject()
    }

allFilter.addEventListener("click", () => {
    toggleStyle("all-btn")
})

interviewFilter.addEventListener("click", () => {
    toggleStyle("interview-btn")
    renderApplied()
})

rejectFilter.addEventListener("click", () => {
    toggleStyle("reject-btn")
    renderReject()
})
}

//  Applied Interview part 

containerMain.addEventListener('click', function (event) {
    if (event.target.classList.contains('jobInterviewBtn')) {
const parendNode = event.target.closest(".card-item")   

        const  companiName = parendNode.querySelector('.companiName').innerText
        const  remoteSalary = parendNode.querySelector('.remoteSalary').innerText
        const descriptionName = parendNode.querySelector('.descriptionName').innerText
        const appliedName= parendNode.querySelector('.appliteName').innerText;

        parendNode.querySelector('.appliteName').innerText = 'Applied'

        const cardInfo = {
             companiName,
           remoteSalary,
             appliteName :'Applied',
            descriptionName
        }
                const InterviewE = interviewList.find(item => item.companiName == cardInfo.companiName)


        if (!InterviewE) {
            interviewList.push(cardInfo)
        }


        if(curent == "interview-btn"){
         renderApplied()
        }

        
        calculateCount()
    }})

function renderApplied(){
filterSection.innerHTML ='' 

for(let applied of interviewList){
    // console.log(applied);
    let divCreate = document.createElement('div')
   divCreate.className = 'mb-5 rounded-2xl p-8 flex justify-between bg-amber-100'

divCreate.innerHTML = `
<div class="space-y-6">
    <div>
        <h2 class="companiName text-2xl text-[#033972]">${applied.companiName}</h2>
    </div>
    <p class="remoteSalary text-gray-500">${applied.remoteSalary}</p>
        <p class="appliteName w-[13%] bg-green-400 px-2 py-1 rounded">${applied.appliteName}</p>
    <p class="descriptionName">${applied.descriptionName}</p>

      <div>
            <button  class="jobInterviewBtn btn btn-neutral soft btn-outline">Interview</button>
            <button  class="jobRejectBtn btn btn-neutral btn-outline">Rejected</button>
        </div>
       </div>
        <div>
            <button class="btn btn-error">Delet</button>
        </div>
</div>


`

   filterSection.appendChild(divCreate)
}

}
renderApplied()
  
// Reject part 

containerMain.addEventListener('click', function (event) {
    if (event.target.classList.contains('jobRejectBtn')) {
const parendNode = event.target.closest(".card-item")   

        const  companiName = parendNode.querySelector('.companiName').innerText
        const  remoteSalary = parendNode.querySelector('.remoteSalary').innerText
        const descriptionName = parendNode.querySelector('.descriptionName').innerText
        const appliedName= parendNode.querySelector('.appliteName').innerText;

        const cardInfo = {
             companiName,
           remoteSalary,
             appliteName :'Reject',
            descriptionName
        }

        const rejectE = rejectList.find(item => item.companiName == cardInfo.companiName)
parendNode.querySelector('.appliteName').innerText = 'Reject'

        if (!rejectE) {
            rejectList.push(cardInfo)
        }
         if(curent == "reject-btn"){
         renderReject()
        }
        calculateCount()
        
    }})

function renderReject(){
filterSection.innerHTML ='' 

for(let reject of rejectList){
    console.log(reject);
    let divCreate = document.createElement('div')
   divCreate.className = 'mb-5 rounded-2xl p-8 flex justify-between bg-amber-100'

divCreate.innerHTML = `
<div class="space-y-6">
    <div>
        <h2 class="companiName text-2xl text-[#033972]">${reject.companiName}</h2>
    </div>
    <p class="remoteSalary text-gray-500">${reject.remoteSalary}</p>
    <p class="appliteName w-[13%] bg-red-300 px-2 py-1 rounded">Reject</p>
    <p class="descriptionName">${reject.descriptionName}</p>

       <div>
            <button  class="jobInterviewBtn btn btn-neutral soft btn-outline">Interview</button>
            <button  class="jobRejectBtn btn btn-neutral btn-outline">Rejected</button>
        </div>
       </div>
        <div>
            <button class="btn btn-error">Delet</button>
        </div>
</div>
`

   filterSection.appendChild(divCreate)
}

}
renderReject()
