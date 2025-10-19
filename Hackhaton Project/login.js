import {  getAuth,signInWithEmailAndPassword} from "./firebase.js";


let form = document.getElementById("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
let email = document.getElementById("email")
let pass = document.getElementById("pass")

const auth = getAuth();
signInWithEmailAndPassword(auth, email.value, pass.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    window.location.href ="pitch.html"
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    window.location.href= "./index.html"
    
  });

})