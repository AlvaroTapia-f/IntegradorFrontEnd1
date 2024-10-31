import { activeCategory } from "../../main";
import { handleGetProductsInLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

/* === CATEGORIES === */
const handleFilterProductByCategory = (categoryIn) =>{
    const allProducts = handleGetProductsInLocalStorage();

    switch (categoryIn) {
        case activeCategory:
            handleRenderList(allProducts);
            break;
        case "Todo":
            handleRenderList(allProducts);
            break;
        case "Hamburguesa":
        case "Papas":
        case "Gaseosa":
            const result = allProducts.filter((element) => element.categoria === categoryIn )
            handleRenderList(result);
        default:
            break;
        case "mayorPrecio":
            const resultMayorPrecio = allProducts.sort((a,b) => b.precio - a.precio );
            handleRenderList(resultMayorPrecio);
            break;
        case "menorPrecio":
            const resultMenorPrecio = allProducts.sort((a,b) => a.precio - b.precio );
            handleRenderList(resultMenorPrecio);
            break;

    }
};





//Render de la vista categorias

export function renderCategories () {
    //Tomamos todos los elementos de la lista
    const uList = document.querySelector("#itemsList");
    console.log(uList);
    
    //Creamos los elementos de la lista
    uList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesa">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosa">Gaseosas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>
    `;

    //Agregamos a todos los elementos de la lista el evento click
    const liElements = uList.querySelectorAll("li")
    liElements.forEach((element) =>{
        element.addEventListener('click', () =>{
            handleClick(element);
            console.log("click en: " + element.id);
        });
    });

    //Damos estilo al elemento activo
    const handleClick = (element) =>{
        handleFilterProductByCategory(element.id);
        liElements.forEach((el) => {
            if(el.classList.contains('liActive')){
                el.classList.remove('liActive');
            }
            if(element === el){
                el.classList.add('liActive')
            }
        });
    }

};