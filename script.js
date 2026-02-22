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


// cards interview and rejected
let interviewList = [];
let rejectedList = [];


const mainContainer = document.querySelector('main');


// count function
function calculateCount() {
    const count = allCards.children.length;
    totalJobs.forEach(function (item) {
        item.innerText = count;
    })

    totalInterview.innerText = interviewList.length;
    totalRejected.innerText = rejectedList.length;
}
calculateCount();


//onclick toggle

function toggleStyle(id) {
    console.log('click');
}



//mainContainer

mainContainer.addEventListener('click', function (event) {
    const parentNode = event.target.parentNode.parentNode;
    const headTitle=parentNode.querySelector('.headTitle').innerText;
    const headPara=parentNode.querySelector('.headPara').innerText;
    const details=parentNode.querySelector('.details').innerText;
    const status=parentNode.querySelector('.status').innerText;
    const notes=parentNode.querySelector('.notes').innerText;

    const cardInfo={
        headTitle,
        headPara,
        details,
        status,
        notes
    }
    
    interviewList.find(item=>item.headTitle== cardInfo)

})


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
})

interviewBtn.addEventListener('click', function () {
    cardsSection.classList.add('hidden');
    filtered.classList.remove('hidden');
})

rejectedBtn.addEventListener('click', function () {
    cardsSection.classList.add('hidden');
    filtered.classList.remove('hidden');
})


