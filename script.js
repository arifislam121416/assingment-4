let curentTab = "all";
const tabActive =["bg-gray-800","text-white"];
const tabInactive =["bg-gray-200","text-black"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");

const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectStat = document.getElementById("stat-reject");

const availebleStat =document.getElementById("availableStat")

const emptyStat =document.getElementById("emptyStat")

function updateStatus(){
    
    const counts ={
        all:allContainer.children.length,
        interview :interviewContainer.children.length,
        rejected:rejectContainer.children.length,
    }
    totalStat.innerText = counts.all;
    interviewStat.innerText = counts.interview;
    rejectStat.innerText =counts.rejected;
availebleStat.innerText =counts[curentTab];

if(counts[curentTab] < 1){
    emptyStat.classList.remove("hidden")
}else{
    emptyStat.classList.add("hidden")
}

}
updateStatus()

function switchTab(tab){
    const tabs = ["all","interview", "rejected"];
    curentTab = tab;

    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
       if(t===tab){
        tabName.classList.remove(...tabInactive);
        tabName.classList.add(...tabActive)
       }else{
        tabName.classList.remove(...tabActive);
        tabName.classList.add(...tabInactive)
       }
    }

    const pages =[allContainer,interviewContainer,rejectContainer];
    for (const element of pages) {
        element.classList.add("hidden");
    
    }

    emptyStat.classList.add("hidden")

    if(tab === "all"){
        allContainer.classList.remove("hidden");
        if(allContainer.children.length < 1){
            emptyStat.classList.remove("hidden")
        }
    }else if(tab === "interview"){
        interviewContainer.classList.remove("hidden");
         if(interviewContainer.children.length < 1){
            emptyStat.classList.remove("hidden")
        }
    }else{
        rejectContainer.classList.remove("hidden");
         if(rejectContainer.children.length < 1){
            emptyStat.classList.remove("hidden")
        }
    }
    updateStatus()
}

document.getElementById("job-container").addEventListener("click",function(event){
    const clickElement = event.target;
    const cards = clickElement.closest(".cards");
    const parent =cards.parentNode;
    const status = cards.querySelector(".statuss");

    if(clickElement.classList.contains("interview")){
        status.innerText ="Interview";
        interviewContainer.appendChild(cards)
        updateStatus()
    }
    if(clickElement.classList.contains("reject")){
        status.innerText ="Rejected";
 rejectContainer.appendChild(cards)
 updateStatus()
    }
    if(clickElement.classList.contains("delete")){
parent.removeChild(cards)
updateStatus()
    }
})
switchTab(curentTab)