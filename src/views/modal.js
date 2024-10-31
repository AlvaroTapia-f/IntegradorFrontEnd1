/* === MODAL === */

import { activeProduct, setActiveProduct } from "../../main";
import { handleDeleteProduct, handleSaveOrModifyProducts } from "../services/products";

//Funciones abrir y cerrar modal
const modal = document.querySelector("#modalPopUp");
export const openModal = () =>{
    modal.classList.add('mostrarPopUp');
    
    const btnDelete = document.querySelector("#btnDelete");

    if(activeProduct){
        btnDelete.style.display = "block";
    } else{
        btnDelete.style.display = "none";
    }

    if(activeProduct){
        const nombre = document.querySelector("#nameItem");
        const imagen = document.querySelector("#img");
        const precio = document.querySelector("#precioItem");
        const categoria = document.querySelector("#categoria");
        nombre.value = activeProduct.nombre;
        imagen.value = activeProduct.imagen;
        precio.value = activeProduct.precio;
        categoria.value = activeProduct.categoria;
    }

};

export const closeModal = () => {
    modal.classList.remove('mostrarPopUp');
    setActiveProduct(null);
    resetModal();
};

function resetModal () {
    const nombre = document.querySelector("#nameItem");
    const imagen = document.querySelector("#img");
    const precio = document.querySelector("#precioItem");
    const categoria = document.querySelector("#categoria");
    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categoria.value = "";
};

const btnAcceptPopUp = document.querySelector("#btnAccept");
btnAcceptPopUp.addEventListener('click', () =>{
    handleSaveOrModifyProducts();
});

const btnCancelPopUp = document.querySelector("#btnCancel");
btnCancelPopUp.addEventListener('click', () =>{
    closeModal();
});


const handleBtnDelete = () =>{
    handleDeleteProduct();
};

const btnDelete = document.querySelector("#btnDelete");
btnDelete.addEventListener('click', () =>{
    handleBtnDelete();
});