
/* === PRODUCTS === */

import Swal from "sweetalert2";
import { activeProduct } from "../../main";
import { handleGetProductsInLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

//Funcion guardar o modificar un producto
export const handleSaveOrModifyProducts = () =>{
    const nombre = document.querySelector("#nameItem").value;
    const imagen = document.querySelector("#img").value;
    const precio = document.querySelector("#precioItem").value;
    const categoria = document.querySelector("#categoria").value;
    
    let product = null;
    
    console.log(activeProduct);
    
    if(activeProduct){
        product = {
            ...activeProduct,
            nombre,
            imagen,
            precio,
            categoria,
        }
    }else{
        product = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria,
        };
    }

    setInLocalStorage(product);

    Swal.fire({
        title: "Excelente!",
        text: "Producto guardado correctamente!",
        icon: "success"
      });
    
    handleGetProductsToStore();
    
    closeModal();
    
}

export const handleDeleteProduct = ()=>{
    Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            const allProducts = handleGetProductsInLocalStorage();
              const result = allProducts.filter((el) => el.id !== activeProduct.id);
             localStorage.setItem("products", JSON.stringify(result));
             const newProducts = handleGetProductsInLocalStorage();
             handleRenderList(newProducts);
             closeModal();
          Swal.fire({
            title: "Eliminado!",
            text: "El producto ha sido eliminado.",
            icon: "success"
          });
        }
      });
};