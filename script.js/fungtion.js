const statusbtn1 = document.getElementById("stetus-1")
const interViewBtn1 = document.getElementById("interview-stetus-btn-1")
const rejectedbtn1 = document.getElementById("rejected-stetus-btn-1")

const statusbtn2 = document.getElementById("stetus-2")
const interViewBtn2 = document.getElementById("interview-stetus-btn-2")
const rejectedbtn2 = document.getElementById("rejected-stetus-btn-2")

const statusbtn3 = document.getElementById("stetus-3")
const interViewBtn3 = document.getElementById("interview-stetus-btn-3")
const rejectedbtn3 = document.getElementById("rejected-stetus-btn-3")

const statusbtn4 = document.getElementById("stetus-4")
const interViewBtn4 = document.getElementById("interview-stetus-btn-4")
const rejectedbtn4 = document.getElementById("rejected-stetus-btn-4")

const statusbtn5 = document.getElementById("stetus-5")
const interViewBtn5 = document.getElementById("interview-stetus-btn-5")
const rejectedbtn5 = document.getElementById("rejected-stetus-btn-5")

const statusbtn6 = document.getElementById("stetus-6")
const interViewBtn6 = document.getElementById("interview-stetus-btn-6")
const rejectedbtn6 = document.getElementById("rejected-stetus-btn-6")

const statusbtn7 = document.getElementById("stetus-7")
const interViewBtn7 = document.getElementById("interview-stetus-btn-7")
const rejectedbtn7 = document.getElementById("rejected-stetus-btn-7")

const statusbtn8 = document.getElementById("stetus-8")
const interViewBtn8 = document.getElementById("interview-stetus-btn-8")
const rejectedbtn8 = document.getElementById("rejected-stetus-btn-8")

const allBtn = document.getElementById("all-btn")
const interviewPageBtn = document.getElementById("interview-page-btn")
const rejectedPageBtn = document.getElementById("rejected-page-btn")
const noJobSection = document.getElementById("no-job-abailable")
const interviewCountBtn = document.getElementById("interview-count-btn")
const rejectedCountBtn = document.getElementById("rejected-count-btn")

let currentFilter = "all"

function updateCounts() {
  const allCards = document.querySelectorAll(".job-card")
  let interviewTotal = 0
  let rejectedTotal = 0
  for (let i = 0; i < allCards.length; i++) {
    if (allCards[i].dataset.status === "interview") interviewTotal++
    if (allCards[i].dataset.status === "rejected") rejectedTotal++
  }
  interviewCountBtn.innerText = interviewTotal
  rejectedCountBtn.innerText = rejectedTotal
}

function applyFilter() {
  const allCards = document.querySelectorAll(".job-card")
  let visibleCount = 0
  for (let i = 0; i < allCards.length; i++) {
    if (currentFilter === "all" || allCards[i].dataset.status === currentFilter) {
      allCards[i].style.display = "block"
      visibleCount++
    } else {
      allCards[i].style.display = "none"
    }
  }
  if (visibleCount === 0) {
    noJobSection.classList.remove("hidden")
  } else {
    noJobSection.classList.add("hidden")
  }
}

allBtn.addEventListener("click", function() {
  currentFilter = "all"
  applyFilter()
  allBtn.classList.add("btn-active")
  interviewPageBtn.classList.remove("btn-active")
  rejectedPageBtn.classList.remove("btn-active")
})

interviewPageBtn.addEventListener("click", function() {
  currentFilter = "interview"
  applyFilter()
  interviewPageBtn.classList.add("btn-active")
  allBtn.classList.remove("btn-active")
  rejectedPageBtn.classList.remove("btn-active")
})

rejectedPageBtn.addEventListener("click", function() {
  currentFilter = "rejected"
  applyFilter()
  rejectedPageBtn.classList.add("btn-active")
  allBtn.classList.remove("btn-active")
  interviewPageBtn.classList.remove("btn-active")
})

// ── CARD 1 ────────────────────────────────────────
interViewBtn1.addEventListener("click", function(){
  statusbtn1.innerText = "INTERVIEW"
  statusbtn1.classList.remove("text-red-500", "bg-red-100")
  statusbtn1.classList.add("text-green-500", "bg-green-100")
  document.querySelector('[data-id="1"]').dataset.status = "interview"
  updateCounts()
  applyFilter()
})
rejectedbtn1.addEventListener("click", function(){
  statusbtn1.innerText = "REJECTED"
  statusbtn1.classList.remove("text-green-500", "bg-green-100")
  statusbtn1.classList.add("bg-red-100", "text-red-500")
  document.querySelector('[data-id="1"]').dataset.status = "rejected"
  updateCounts()
  applyFilter()
})

// ── CARD 2 ────────────────────────────────────────
interViewBtn2.addEventListener("click", function(){
  statusbtn2.innerText = "INTERVIEW"
  statusbtn2.classList.remove("text-red-500", "bg-red-100")
  statusbtn2.classList.add("text-green-500", "bg-green-100")
  document.querySelector('[data-id="2"]').dataset.status = "interview"
  updateCounts()
  applyFilter()
})
rejectedbtn2.addEventListener("click", function(){
  statusbtn2.innerText = "REJECTED"
  statusbtn2.classList.remove("text-green-500", "bg-green-100")
  statusbtn2.classList.add("bg-red-100", "text-red-500")
  document.querySelector('[data-id="2"]').dataset.status = "rejected"
  updateCounts()
  applyFilter()
})

// ── CARD 3 ────────────────────────────────────────
interViewBtn3.addEventListener("click", function(){
  statusbtn3.innerText = "INTERVIEW"
  statusbtn3.classList.remove("text-red-500", "bg-red-100")
  statusbtn3.classList.add("text-green-500", "bg-green-100")
  document.querySelector('[data-id="3"]').dataset.status = "interview"
  updateCounts()
  applyFilter()
})
rejectedbtn3.addEventListener("click", function(){
  statusbtn3.innerText = "REJECTED"
  statusbtn3.classList.remove("text-green-500", "bg-green-100")
  statusbtn3.classList.add("bg-red-100", "text-red-500")
  document.querySelector('[data-id="3"]').dataset.status = "rejected"
  updateCounts()
  applyFilter()
})

// ── CARD 4 ────────────────────────────────────────
interViewBtn4.addEventListener("click", function(){
  statusbtn4.innerText = "INTERVIEW"
  statusbtn4.classList.remove("text-red-500", "bg-red-100")
  statusbtn4.classList.add("text-green-500", "bg-green-100")
  document.querySelector('[data-id="4"]').dataset.status = "interview"
  updateCounts()
  applyFilter()
})
rejectedbtn4.addEventListener("click", function(){
  statusbtn4.innerText = "REJECTED"
  statusbtn4.classList.remove("text-green-500", "bg-green-100")
  statusbtn4.classList.add("bg-red-100", "text-red-500")
  document.querySelector('[data-id="4"]').dataset.status = "rejected"
  updateCounts()
  applyFilter()
})

// ── CARD 5 ────────────────────────────────────────
interViewBtn5.addEventListener("click", function(){
  statusbtn5.innerText = "INTERVIEW"
  statusbtn5.classList.remove("text-red-500", "bg-red-100")
  statusbtn5.classList.add("text-green-500", "bg-green-100")
  document.querySelector('[data-id="5"]').dataset.status = "interview"
  updateCounts()
  applyFilter()
})
rejectedbtn5.addEventListener("click", function(){
  statusbtn5.innerText = "REJECTED"
  statusbtn5.classList.remove("text-green-500", "bg-green-100")
  statusbtn5.classList.add("bg-red-100", "text-red-500")
  document.querySelector('[data-id="5"]').dataset.status = "rejected"
  updateCounts()
  applyFilter()
})

// ── CARD 6 ────────────────────────────────────────
interViewBtn6.addEventListener("click", function(){
  statusbtn6.innerText = "INTERVIEW"
  statusbtn6.classList.remove("text-red-500", "bg-red-100")
  statusbtn6.classList.add("text-green-500", "bg-green-100")
  document.querySelector('[data-id="6"]').dataset.status = "interview"
  updateCounts()
  applyFilter()
})
rejectedbtn6.addEventListener("click", function(){
  statusbtn6.innerText = "REJECTED"
  statusbtn6.classList.remove("text-green-500", "bg-green-100")
  statusbtn6.classList.add("bg-red-100", "text-red-500")
  document.querySelector('[data-id="6"]').dataset.status = "rejected"
  updateCounts()
  applyFilter()
})

// ── CARD 7 ────────────────────────────────────────
interViewBtn7.addEventListener("click", function(){
  statusbtn7.innerText = "INTERVIEW"
  statusbtn7.classList.remove("text-red-500", "bg-red-100")
  statusbtn7.classList.add("text-green-500", "bg-green-100")
  document.querySelector('[data-id="7"]').dataset.status = "interview"
  updateCounts()
  applyFilter()
})
rejectedbtn7.addEventListener("click", function(){
  statusbtn7.innerText = "REJECTED"
  statusbtn7.classList.remove("text-green-500", "bg-green-100")
  statusbtn7.classList.add("bg-red-100", "text-red-500")
  document.querySelector('[data-id="7"]').dataset.status = "rejected"
  updateCounts()
  applyFilter()
})

// ── CARD 8 ────────────────────────────────────────
interViewBtn8.addEventListener("click", function(){
  statusbtn8.innerText = "INTERVIEW"
  statusbtn8.classList.remove("text-red-500", "bg-red-100")
  statusbtn8.classList.add("text-green-500", "bg-green-100")
  document.querySelector('[data-id="8"]').dataset.status = "interview"
  updateCounts()
  applyFilter()
})
rejectedbtn8.addEventListener("click", function(){
  statusbtn8.innerText = "REJECTED"
  statusbtn8.classList.remove("text-green-500", "bg-green-100")
  statusbtn8.classList.add("bg-red-100", "text-red-500")
  document.querySelector('[data-id="8"]').dataset.status = "rejected"
  updateCounts()
  applyFilter()
})

// ── RUN ON PAGE LOAD ──────────────────────────────
updateCounts()
applyFilter()
allBtn.classList.add("btn-active")