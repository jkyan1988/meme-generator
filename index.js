import {key} from '/secret.js'

document.addEventListener('DOMContentLoaded', () => {
console.log('this is my key', key)
//FETCH FUNCTION API / API KEY




//FOOD LIST ELEMENTS

const foodListMain = document.getElementById('food-list')
const foodListList = document.getElementById('foodlistlist')
const foodList = document.getElementById("list-food")
const foodListB = document.getElementById("list-food-b")
const foodListC = document.getElementById("list-food-c")
const foodListD = document.getElementById("list-food-d")
const foodListE = document.getElementById("list-food-e")



//FOOD FORM ELEMENTS

const foodForm = document.getElementById('food-form')

let foodFormInput = document.getElementById('food-input')
let foodFormInputB = document.getElementById('food-input-b')
let foodFormInputC = document.getElementById('food-input-c')
let foodFormInputD = document.getElementById('food-input-d')
let foodFormInputE = document.getElementById('food-input-e')


//FOOD NUTRITION GUIDE ELEMENTS

const nutritionGuide = document.getElementById('nutrition-guide')
const foodCalories = document.getElementById('calories-id')
const foodFat = document.getElementById('fat-id')
const foodProtein = document.getElementById('protein-id')
const foodCarb = document.getElementById('carb-id')
const foodPrice = document.getElementById('price-id')
	
// FOOD PIE CHART

const pieChart = document.getElementById('pie-chart')


//FOOD EVENT LISTENERS - FOOD LIST

foodListMain.addEventListener('mouseover', foodListMouseOver)

function foodListMouseOver(event) {
	event.target.style.color = "orange"
}

foodListList.addEventListener('mouseover', foodListListMouseOver)

function foodListListMouseOver(event) {
	event.target.style.color = "blue"
}

//FOOD EVENT LISTENERS - NUTRITION GUIDE

foodCalories.addEventListener('click', calorieClick)

function calorieClick(event) {
	foodCalories.innerText = foodFormInput.value
}

foodFat.addEventListener('click', fatClick)

function fatClick(event) {
	foodFat.innerText = foodFormInputB.value
}

foodProtein.addEventListener('click', proteinClick)

function proteinClick(event) {
	foodProtein.innerText = foodFormInputC.value
}

foodCarb.addEventListener('click', carbClick)

function carbClick(event) {
	foodCarb.innerText = foodFormInputD.value
}

foodPrice.addEventListener('click', priceClick)

function priceClick(event) {
	foodPrice.innerText = foodFormInputE.value
}


//FOOD EVENT LISTENERS - FOOD FORM

foodForm.addEventListener("submit", (event) => {
		event.preventDefault()
		foodList.textContent = foodFormInput.value
		foodListB.textContent = foodFormInputB.value
		foodListC.textContent = foodFormInputC.value
		foodListD.textContent = foodFormInputD.value
		foodListE.textContent = foodFormInputE.value

})

//FOOD EVENT LISTENERS - PIE CHART

pieChart.addEventListener('mouseover', pieChartChange)

function pieChartChange(event) {
	event.target.style.color = "green"
}

// DO NOT DELETE BELOW THE `})` part of DOMContentloaded and side Menu Div
})



/* Open when someone clicks on the span element */
function openNav() {
	document.getElementById("side-nav").style.width = "50%";
}
		  
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
	document.getElementById("side-nav").style.width = "0%";
}
	

