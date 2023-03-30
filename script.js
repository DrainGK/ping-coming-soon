const submit =document.getElementById("submit");
const mail = document.getElementById("mail");

submit.addEventListener("submit", (e)=> {
    e.preventDefault();
})

mail.addEventListener("change"), (e)=> {
    if(e.target.value === ""){
        mail.style.border = "1px solid red"
    }
}