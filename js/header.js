const login = document.querySelector(".login");
const logo = document.querySelector(".logo");
const logo_login = document.querySelector("#logo_login");

login.addEventListener("click", ()=>{
    location.href="login.html"
});

logo.addEventListener("click", ()=>{
    location.href="index.html"
    console.log("index")
});

logo_login.addEventListener("click", ()=>{
    location.href="index.html"
    console.log("login")
});