document.addEventListener('DOMContentLoaded', () => {



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
		'X-RapidAPI-Key': '2e3f16e539mshfa3a1045a91b025p11dd85jsn239ca32e8706'
	}
};

fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1003464/ingredientWidget.json', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

})


const foodForm = document.getElementById('title-input')
foodForm.addEventListener('submit', storeFoodForm)

function storeFoodForm(event) {
    event.preventDefault()
    console.log(event)
}

