import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import { openModal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/services/searchBar";

/* === APLICATION === */
export let activeCategory = null;

export let activeProduct = null;

export const setActiveCategory = (categoryIn) =>{
    activeCategory = categoryIn;
};

export const setActiveProduct = (productoIn) =>{
    activeProduct = productoIn;
};

renderCategories();
handleGetProductsToStore();


//LISTENERS
const btnAdd = document.querySelector("#btnAgregarElemento")
btnAdd.addEventListener('click', openModal);

const btnSearch = document.querySelector("#btnSearchProduct");
btnSearch.addEventListener('click', () =>{
    handleSearchProductByName();
});





