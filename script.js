
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
const filterSection =document.getElementById("filter-section");

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
mainContainer.addEventListener('click', function(event){

console.log((event.target.classList.contains('appliteName')));

  if(event.target.classList.contains('appliteName')){

      const parentNodeName = event.target.parentNode.parentNode;

    const companiName = parentNodeName.querySelector('.companyName').innerText;
    const remoteSalary =parentNodeName.querySelector('.remoteSalary').innerText;
    const appliteName = parentNodeName.querySelector('.appliteName').innerText;
    const descriptionName = parentNodeName.querySelector('.descriptionName').innerText;

    // console.log(companiName,remoteSalary,appliteName,descriptionName);

    const cardData ={
        companiName,
        remoteSalary,
        appliteName,
        descriptionName
    }
const interviewExit = interviewList.find(item=>item.companiName == cardData.companiName)

if(!interviewExit){
    interviewList.push(cardData)
}
  }
  renderInterview ()
})

function renderInterview (){
    filterSection.innerHTML = '' ;

    for(let interview of interviewList){
       
        let div =document.createElement('div');
        div.className = 'class="mb-5 rounded-2xl p-8 flex justify-between  bg-amber-100"';
        div.innerHTML = `
        
         <div class="space-y-6">
        <div>
            <h2  class="companyName text-2xl text-[#033972]">Mobile First Corp</h2>
        <p class="postName text-gray-500">React Native Developer</p>
        </div>
        <div >
            <p class="remoteSalary text-gray-500">Remote .  • 
Full-time . •
 $130,000 - $175,000</p>
        </div>
        <div class="space-y-1">
             <p id="applied" class="appliteName w-[13%] rounded bg-gray-300 font-semibold py-3 text-[#033972] px-2">Not Applied</p>
             <p class="descriptionName">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
        </div>
        <div>
            <button id="job-interview-btn" class="btn btn-neutral soft btn-outline">Interview</button>
            <button id="job-reject-btn" class="btn btn-neutral btn-outline" > Rejected</button>
        </div>
       </div>
        <div>
            <button class="btn btn-error">Delet</button>
        </div>
        `
    }
}


