import { getOneRecipe } from "./index.js";

const recipesContainer = document.querySelector('.results__list');

export const renderResults = recipesArr => {
    recipesContainer.innerHTML = "";
    
    recipesArr.forEach(element => {

        const html = `<li id=${element.id}>
    <a class="results__link results__link--active" href=#${element.id}>
        <figure class="results__fig">
            <img src=${element.image_url} alt="Test">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${element.title}</h4>
            <p class="results__author">${element.publisher}</p>
        </div>
    </a>
</li>`
    recipesContainer.insertAdjacentHTML("beforeend", html);

    document.getElementById(element.id).onclick=()=>{return getOneRecipe(element.id)}

});
};




