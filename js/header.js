const login = document.querySelector(".login");
const logo = document.querySelector(".logo");

login.addEventListener("click", ()=>{
    location.href="login.html"
});

logo.addEventListener("click", ()=>{
    console.log(logo);
    location.href="index.html"
});