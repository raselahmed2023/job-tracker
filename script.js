
//btn toggle
const allBtn = document.getElementById('allBtn');
const interviewBtn = document.getElementById('interviewBtn');
const rejectedBtn = document.getElementById('rejectedBtn');

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

allBtn.addEventListener('click',function(){
    cardsSection.classList.remove('hidden');
    filtered.classList.add('hidden');
})

interviewBtn.addEventListener('click',function(){
    cardsSection.classList.add('hidden');
    filtered.classList.remove('hidden');
})

rejectedBtn.addEventListener('click',function(){
    cardsSection.classList.add('hidden');
    filtered.classList.remove('hidden');
})


//btn cards 