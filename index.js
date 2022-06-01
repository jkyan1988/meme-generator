document.addEventListener('DOMContentLoaded', () => {

const foodForm = document.getElementById('food-form')

const foodList = document.getElementById('list-food')

const foodFormInput = document.getElementById('food-input')



foodForm.addEventListener("submit", (event) => {
	event.preventDefault()
})



const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
			'X-RapidAPI-Key': '2e3f16e539mshfa3a1045a91b025p11dd85jsn239ca32e8706'
		}
};
	
fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/9266/information?amount=100&unit=gram', options)
		.then(response => response.json())
		.then(food => console.log(food))
		.catch(err => console.log(err));
})


	/* Open when someone clicks on the span element */
	function openNav() {
		document.getElementById("side-nav").style.width = "50%";
	  }
	  
	  /* Close when someone clicks on the "x" symbol inside the overlay */
	  function closeNav() {
		document.getElementById("side-nav").style.width = "0%";
	  
	  }
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
// 	document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
// 	if (!event.target.matches('.dropbtn')) {
// 	  var dropdowns = document.getElementsByClassName("dropdown-content");
// 	  var i;
// 	  for (i = 0; i < dropdowns.length; i++) {
// 		var openDropdown = dropdowns[i];
// 		if (openDropdown.classList.contains('show')) {
// 		  openDropdown.classList.remove('show');
// 		}
// 	  }
// 	}
//   }
// myFunction()