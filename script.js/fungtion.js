const statusbtn1 = document.getElementById("stetus-1")
const interViewBtn1 = document.getElementById("interview-stetus-btn-1")
const rejectedbtn1 = document.getElementById("rejected-stetus-btn-1")
const deletebtn1 = document.getElementById("delete-btn-1")

const statusbtn2 = document.getElementById("stetus-2")
const interViewBtn2 = document.getElementById("interview-stetus-btn-2")
const rejectedbtn2 = document.getElementById("rejected-stetus-btn-2")
const deletebtn2 = document.getElementById("delete-btn-2")

const statusbtn3 = document.getElementById("stetus-3")
const interViewBtn3 = document.getElementById("interview-stetus-btn-3")
const rejectedbtn3 = document.getElementById("rejected-stetus-btn-3")
const deletebtn3 = document.getElementById("delete-btn-3")

const statusbtn4 = document.getElementById("stetus-4")
const interViewBtn4 = document.getElementById("interview-stetus-btn-4")
const rejectedbtn4 = document.getElementById("rejected-stetus-btn-4")
const deletebtn4 = document.getElementById("delete-btn-4")

const statusbtn5 = document.getElementById("stetus-5")
const interViewBtn5 = document.getElementById("interview-stetus-btn-5")
const rejectedbtn5 = document.getElementById("rejected-stetus-btn-5")
const deletebtn5 = document.getElementById("delete-btn-5")

const statusbtn6 = document.getElementById("stetus-6")
const interViewBtn6 = document.getElementById("interview-stetus-btn-6")
const rejectedbtn6 = document.getElementById("rejected-stetus-btn-6")
const deletebtn6 = document.getElementById("delete-btn-6")

const statusbtn7 = document.getElementById("stetus-7")
const interViewBtn7 = document.getElementById("interview-stetus-btn-7")
const rejectedbtn7 = document.getElementById("rejected-stetus-btn-7")
const deletebtn7 = document.getElementById("delete-btn-7")

const statusbtn8 = document.getElementById("stetus-8")
const interViewBtn8 = document.getElementById("interview-stetus-btn-8")
const rejectedbtn8 = document.getElementById("rejected-stetus-btn-8")
const deletebtn8 = document.getElementById("delete-btn-8")

const allBtn = document.getElementById("all-btn")
const interviewPageBtn = document.getElementById("interview-page-btn")
const rejectedPageBtn = document.getElementById("rejected-page-btn")
const noJobSection = document.getElementById("no-job-abailable")
const interviewCountBtn = document.getElementById("interview-count-btn")
const rejectedCountBtn = document.getElementById("rejected-count-btn")
const totalCountBtn = document.getElementById("Total-count-btn")

// save deleted cards here so we can restore them
let deletedCard1 = null
let deletedCard2 = null
let deletedCard3 = null
let deletedCard4 = null
let deletedCard5 = null
let deletedCard6 = null
let deletedCard7 = null
let deletedCard8 = null

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
  totalCountBtn.innerText = allCards.length
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
deletebtn1.addEventListener("click", function(){
  const card = document.querySelector('[data-id="1"]')
  deletedCard1 = card
  card.style.display = "none"
  updateCounts()
  applyFilter()
})


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
deletebtn2.addEventListener("click", function(){
  const card = document.querySelector('[data-id="2"]')
  deletedCard2 = card
  card.style.display = "none"
  updateCounts()
  applyFilter()
})


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
deletebtn3.addEventListener("click", function(){
  const card = document.querySelector('[data-id="3"]')
  deletedCard3 = card
  card.style.display = "none"
  updateCounts()
  applyFilter()
})


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
deletebtn4.addEventListener("click", function(){
  const card = document.querySelector('[data-id="4"]')
  deletedCard4 = card
  card.style.display = "none"
  updateCounts()
  applyFilter()
})


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
deletebtn5.addEventListener("click", function(){
  const card = document.querySelector('[data-id="5"]')
  deletedCard5 = card
  card.style.display = "none"
  updateCounts()
  applyFilter()
})


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
deletebtn6.addEventListener("click", function(){
  const card = document.querySelector('[data-id="6"]')
  deletedCard6 = card
  card.style.display = "none"
  updateCounts()
  applyFilter()
})


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
deletebtn7.addEventListener("click", function(){
  const card = document.querySelector('[data-id="7"]')
  deletedCard7 = card
  card.style.display = "none"
  updateCounts()
  applyFilter()
})


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
deletebtn8.addEventListener("click", function(){
  const card = document.querySelector('[data-id="8"]')
  deletedCard8 = card
  card.style.display = "none"
  updateCounts()
  applyFilter()
})

updateCounts()
applyFilter()
allBtn.classList.add("btn-active")

// Delete All
document.getElementById("delete-all-btn").addEventListener("click", function() {
  const card1 = document.querySelector('[data-id="1"]')
  const card2 = document.querySelector('[data-id="2"]')
  const card3 = document.querySelector('[data-id="3"]')
  const card4 = document.querySelector('[data-id="4"]')
  const card5 = document.querySelector('[data-id="5"]')
  const card6 = document.querySelector('[data-id="6"]')
  const card7 = document.querySelector('[data-id="7"]')
  const card8 = document.querySelector('[data-id="8"]')

  deletedCard1 = card1
  deletedCard2 = card2
  deletedCard3 = card3
  deletedCard4 = card4
  deletedCard5 = card5
  deletedCard6 = card6
  deletedCard7 = card7
  deletedCard8 = card8

  card1.style.display = "none"
  card2.style.display = "none"
  card3.style.display = "none"
  card4.style.display = "none"
  card5.style.display = "none"
  card6.style.display = "none"
  card7.style.display = "none"
  card8.style.display = "none"

  updateCounts()
  applyFilter()
})


document.getElementById("restore-all-btn").addEventListener("click", function() {
  if (deletedCard1) { deletedCard1.style.display = "block" }
  if (deletedCard2) { deletedCard2.style.display = "block" }
  if (deletedCard3) { deletedCard3.style.display = "block" }
  if (deletedCard4) { deletedCard4.style.display = "block" }
  if (deletedCard5) { deletedCard5.style.display = "block" }
  if (deletedCard6) { deletedCard6.style.display = "block" }
  if (deletedCard7) { deletedCard7.style.display = "block" }
  if (deletedCard8) { deletedCard8.style.display = "block" }

  updateCounts()
  applyFilter()
})