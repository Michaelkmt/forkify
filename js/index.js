import { renderResults } from "./searchView.js";
import { showRecipe } from "./recipeView.js";

// Page Elements
const input = document.querySelector('.search__field');
const submitBtn = document.querySelector('.search__btn');
const apiKey = "830b3b01-9965-4576-ac15-732d83870a7b";
const url = "https://forkify-api.herokuapp.com/api/v2/recipes"


// Add AJAX functions here:
const getRecipe = async () => {

    const recipeInput = input.value;

    const urlToFetch = `${url}?search=${recipeInput}&key=${apiKey}`
    console.log(urlToFetch)

    try{

        const response = await fetch(urlToFetch);

        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse)
            renderResults(jsonResponse.data.recipes)
        }else{
            throw new Error("Something went wrong!");
        }

    }catch(err){console.log(err)}

    
    }
// getRecipe()


export const getOneRecipe = async (id) => {
    const newId = id
    const urlToFetch = `${url}/${newId}?key=${apiKey}`
    console.log(urlToFetch)

    try{

        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse) 
            showRecipe(jsonResponse.data.recipe)
            // console.log(jsonResponse.data.recipe)

        }else{
            throw new Error("Something went wrong!");
        }

    }catch(err){console.log(err)}
    
    }

    // getOneRecipe()

submitBtn.addEventListener('click', getRecipe)



