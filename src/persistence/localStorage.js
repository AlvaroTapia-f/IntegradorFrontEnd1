/* === LOCALSTORAGE === */

//Traer productos LocalStorage
export const handleGetProductsInLocalStorage = ()=>{
    
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;
    } else{
        return [];
    }
};

//Guardar productos LocalStorage
//Recibir el producto
export const setInLocalStorage = (productIn) =>{
    //Traer todos los elementos
    let productsInLocal = handleGetProductsInLocalStorage();
    
    const existsIndex = productsInLocal.findIndex((productLocal) =>{
        console.log(productLocal.id);
        
        return productLocal.id === productIn.id
    });
    console.log(existsIndex);
    
    
    //Verificar si el elemento existe. 
    //Si existe se reemplaza 
    if(existsIndex !== -1){
        productsInLocal[existsIndex] = productIn;
        
    } else{
        //si no se agrega
        productsInLocal.push(productIn);
    }

    //Setear el nuevo array con los productos modificados
    localStorage.setItem("products", JSON.stringify(productsInLocal));
    
};