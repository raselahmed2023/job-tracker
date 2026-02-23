//count section
let totalJobs = document.querySelectorAll(".totalJobs");
let totalInterview = document.getElementById('totalInterview');
let totalRejected = document.getElementById('totalRejected');

// btn document
const allBtn = document.getElementById('allBtn');
const interviewBtn = document.getElementById('interviewBtn');
const rejectedBtn = document.getElementById('rejectedBtn');


//allCards btn
const allCards = document.getElementById('cards');


// filterSection btn
const filterSection = document.getElementById('filterSection');


//available job
const jobsCounter = document.getElementById('jobsCounter');

function UpdateWithClick() {
    const total = allCards.children.length;
    if (allBtn.classList.contains('bg-black')) {
        jobsCounter.innerText = total;
    } else if (interviewBtn.classList.contains('bg-black')) {
        jobsCounter.innerText = `${interviewList.length} of ${total}`;
    } else if (rejectedBtn.classList.contains('bg-black')) {
        jobsCounter.innerText = `${rejectedList.length} of ${total}`;
    }
}


// cards interview and rejected
let interviewList = [];
let rejectedList = [];

//main function class
const mainContainer = document.querySelector('main');


//btn toggle

function resetBtn() {
    allBtn.className = "bg-gray-100  text-gray-700 px-5 py-2";
    interviewBtn.className = "bg-gray-100  text-gray-700 px-5 py-2";
    rejectedBtn.className = "bg-gray-100  text-gray-700 px-5 py-2";
}
allBtn.addEventListener('click', function () {
    resetBtn();
    allBtn.className = "bg-black text-white px-5 py-2";
})
interviewBtn.addEventListener("click", function () {
    resetBtn();
    interviewBtn.className = "bg-black text-white px-5 py-2";
})
rejectedBtn.addEventListener("click", function () {
    resetBtn();
    rejectedBtn.className = "bg-black text-white px-5 py-2";
})


//btn cards hide and remove

const cardsSection = document.getElementById('cards');
const filtered = document.getElementById('filtered');

allBtn.addEventListener('click', function () {
    cardsSection.classList.remove('hidden');
    filtered.classList.add('hidden');
    filterSection.classList.add('hidden');

    UpdateWithClick();
});

interviewBtn.addEventListener('click', function () {
    cardsSection.classList.add('hidden');

    if (interviewList.length === 0) {
        filtered.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else {
        filtered.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }

    UpdateWithClick();
});

rejectedBtn.addEventListener('click', function () {
    cardsSection.classList.add('hidden');

    if (rejectedList.length === 0) {
        filtered.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else {
        filtered.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }
    UpdateWithClick();
})


// count function
function calculateCount() {
    const count = allCards.children.length;
    totalJobs.forEach(function (item) {
        item.innerText = count;
    })
    totalInterview.innerText = interviewList.length;
    totalRejected.innerText = rejectedList.length;

    UpdateWithClick();
}
calculateCount();



//mainContainer

mainContainer.addEventListener('click', function (event) {
    const deleteBtn = event.target.closest('.btn-delete');

if (deleteBtn) {
    const parentNode = deleteBtn.closest('.card');
    const headTitle = parentNode.querySelector('.headTitle').innerText;

    parentNode.remove();

    interviewList = interviewList.filter(item => item.headTitle !== headTitle);
    rejectedList = rejectedList.filter(item => item.headTitle !== headTitle);

    calculateCount();

    if (interviewBtn.classList.contains('bg-black')) renderInterview();
    if (rejectedBtn.classList.contains('bg-black')) renderRejected();

    return;
}
    if (event.target.classList.contains('callInterview')) {

        const parentNode = event.target.closest('.card');


        const headTitle = parentNode.querySelector('.headTitle').innerText;
        const headPara = parentNode.querySelector('.headPara').innerText;
        const details = parentNode.querySelector('.details').innerText;
  
        const notes = parentNode.querySelector('.notes').innerText;

        const cardInfo = { headTitle, headPara, details, status: "Interview", notes };
        rejectedList = rejectedList.filter(item => item.headTitle !== cardInfo.headTitle);
        const jobExist = interviewList.find(item => item.headTitle === cardInfo.headTitle);

        // status change on click
        const status1 = parentNode.querySelector('.status');
        status1.innerText = 'Interview';
        status1.classList.remove("bg-red-100", "border-red-500", "text-red-500");
        status1.classList.add("bg-green-100", "border-green-300", "text-green-400")


        if (!jobExist) {
            interviewList.push(cardInfo);
        };
        calculateCount();
        if (interviewBtn.classList.contains('bg-black')) {
            renderInterview();
        };
        if (rejectedBtn.classList.contains('bg-black')) {
            renderRejected();
        }

    }

    if (event.target.classList.contains('SayRejected')) {
        const parentNode = event.target.closest('.card');
        const headTitle = parentNode.querySelector('.headTitle').innerText;
        const headPara = parentNode.querySelector('.headPara').innerText;
        const details = parentNode.querySelector('.details').innerText;
       
        const notes = parentNode.querySelector('.notes').innerText;

        const cardInfo = { headTitle, headPara, details, status: "Rejected", notes };

        interviewList = interviewList.filter(item => item.headTitle != headTitle);
        const jobNo = rejectedList.find(item => item.headTitle === cardInfo.headTitle);


        // status change on click
        const status1 = parentNode.querySelector('.status');
        status1.innerText = 'Rejected';
        status1.classList.add("bg-red-100", "border-red-500", "text-red-500");
        status1.classList.remove("bg-green-100", "border-green-300", "text-green-400")


        if (!jobNo) {
            rejectedList.push(cardInfo);
        }
        calculateCount();
        if (interviewBtn.classList.contains('bg-black')) {
            renderInterview();
        }


        if (rejectedBtn.classList.contains('bg-black')) {
            renderRejected();
        }
    }

})

// renderInterview function
function renderInterview() {
    filterSection.innerHTML = "";

    if (interviewList.length === 0) {
        filtered.classList.remove('hidden');
        filterSection.classList.add('hidden');
        return;
    }
    filtered.classList.add('hidden');
    filterSection.classList.remove('hidden');

    for (let inter of interviewList) {
        let div = document.createElement('div');
        div.className = 'card px-3 py-2 m-2 bg-white shadow space-y-4 flex justify-between rounded-xl'
        div.innerHTML = `
         <div class="space-y-3.5 ">
     <div>
         <h1 class="text-xl font-bold headTitle">${inter.headTitle}</h1>
         <p class="headPara">${inter.headPara}</p>
     </div>
     <p class="details">${inter.details}</p>
     <p class=" status inline-block bg-green-100 px-3 py-1 rounded border border-green-500 text-green-500">${inter.status}</p>
     <p class="notes">${inter.notes}</p>
     <div class="flex gap-1">
         <button
             class="callInterview  btn p-2 m-2 border rounded border-green-300 text-green-400">Interview</button>
         <button
             class=" SayRejected btn border rounded border-red-600 text-red-500 p-2 m-2">Rejected</button>
     </div>
 </div>
 <!-- second part -->
 <div>
     <button class=" btn-delete w-10 h-10 rounded-full border flex items-center justify-center"><i
             class="fa-regular fa-trash-can "></i></button>
 </div>
        `
        filterSection.appendChild(div);
    }
}

// renderRejected function

function renderRejected() {
    filterSection.innerHTML = "";

    if (rejectedList.length === 0) {
        filtered.classList.remove('hidden');
        filterSection.classList.add('hidden');
        return;
    }
    filtered.classList.add('hidden');
    filterSection.classList.remove('hidden');

    for (let reject of rejectedList) {
        let div = document.createElement('div');
        div.className = 'card px-3 py-2 m-2 bg-white shadow space-y-4 flex justify-between rounded-xl'
        div.innerHTML = `
         <div class="space-y-3.5 ">
     <div>
         <h1 class="text-xl font-bold headTitle">${reject.headTitle}</h1>
         <p class="headPara">${reject.headPara}</p>
     </div>
     <p class="details">${reject.details}</p>
     <p class=" status inline-block bg-red-100 px-3 py-1 rounded border border-red-500 text-red-500">${reject.status}</p>
     <p class="notes">${reject.notes}</p>
     <div class="flex gap-1">
         <button
             class="callInterview  btn p-2 m-2 border rounded border-green-300 text-green-400">Interview</button>
         <button
             class=" SayRejected btn border rounded border-red-600 text-red-500 p-2 m-2">Rejected</button>
     </div>
 </div>
 <!-- second part -->
 <div>
     <button class=" btn-delete w-10 h-10 rounded-full border flex items-center justify-center"><i
             class="fa-regular fa-trash-can "></i></button>
 </div>
        `
        filterSection.appendChild(div);
    }


}