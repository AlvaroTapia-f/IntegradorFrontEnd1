import { handleGetProductsInLocalStorage } from "../persistence/localStorage"
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () =>{
    const inputHeader = document.querySelector("#inputSearch")
    const allProduct = handleGetProductsInLocalStorage();

    const result = allProduct.filter((product) =>
    product.nombre.toLowerCase().includes(inputHeader.value)
    );
    handleRenderList(result);
}