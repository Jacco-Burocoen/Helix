const ACCESS_CODE = "2468"; // Pas hier de viercijferige code aan.
const login = document.getElementById("login");
const portal = document.getElementById("portal");
const form = document.getElementById("login-form");
const code = document.getElementById("code");
const error = document.getElementById("error");

function showPortal(){ login.hidden=true; portal.hidden=false; sessionStorage.setItem("helixAccess","granted"); }
if(sessionStorage.getItem("helixAccess")==="granted") showPortal();
form.addEventListener("submit", e=>{e.preventDefault(); if(code.value===ACCESS_CODE){error.textContent="";showPortal()}else{error.textContent="De ingevoerde code is niet juist.";code.value="";code.focus()}});
document.getElementById("logout").addEventListener("click",()=>{sessionStorage.removeItem("helixAccess");portal.hidden=true;login.hidden=false;code.value="";code.focus()});
document.getElementById("search").addEventListener("input",e=>{const q=e.target.value.toLowerCase().trim();document.querySelectorAll(".card").forEach(card=>card.hidden=!card.dataset.search.includes(q))});