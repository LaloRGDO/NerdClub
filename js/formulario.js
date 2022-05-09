const inputNombre = document.querySelector(".nombre");

console.log(inputNombre);

inputNombre.onfocus = ()=>{
    inputNombre.previousElementSibling.classList.add("top");
    inputNombre.previousElementSibling.classList.add("focus");
    inputNombre.parentNode.classList.add("focus");
}
inputNombre.onblur = ()=>{
    if(inputNombre.value == ""){
        inputNombre.previousElementSibling.classList.remove("top");
    }
    inputNombre.previousElementSibling.classList.remove("focus");
    inputNombre.parentNode.classList.remove("focus");
}