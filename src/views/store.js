/* === STORE === */


import { setActiveProduct } from "../../main";
import { handleGetProductsInLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";

//Funcion que trae los elementos y llama al render
export function handleGetProductsToStore (){
    const products =  handleGetProductsInLocalStorage();
    if(products){
        handleRenderList(products);
    } else{
        setInLocalStorage();
    }
};

//Filtra y renderiza la seccion con sus respectivos elementos
export function handleRenderList (productsIn){

    //Filtra arrays por categoría
    const burgers = productsIn.filter((el) => el.categoria === "Hamburguesa");
    const papas = productsIn.filter((el) => el.categoria === "Papas");
    const gaseosas = productsIn.filter((el) => el.categoria === "Gaseosa");
    console.log(burgers);
    
    
    //Renderizar los elementos de la seccion
    const renderProductGroup = (products, title) =>{
        if(products.length > 0){
            const productosHtml = products.map((product, index) =>{
                return `
                <div class="containerTargetItem" id="product-${product.categoria}-${index}">
                    <div>
                    <img src='${product.imagen}' />
                        <div>
                        <h2>${product.nombre}</h2>
                        </div>
                        <div class='targetP'>
                        <p><b>Precio:</b> $ ${product.precio}</p>
                        </div>
                    </div>
                </div>
                `;
            });
            
            //Retorna la seccion con todos los elementos dentro
            return `
            <section class="sectionStore">
            <div class="containerTitleSection">
            <h3>${title}</h3>
            </div>
            <div class="containerProductStore">
            ${productosHtml.join("")}
            </div>
            </section>
            `;
        } else{
            return "";
        }
    };

    //Renderizar cada uno de los productos dentro de sus categorias.
    const appContainer = document.querySelector("#storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    
    `;

    //Agregar eventos de click a todos los elementos
    const addEvents = (productsIn) =>{
        if(productsIn){
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
                    
                productContainer.addEventListener('click', () => {
                    setActiveProduct(element);
                    openModal();
                });
            });
        };
    };

    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};