const mail = document.getElementById("mail");
const display = document.querySelector("#result");

function verifyEmail() {
   
    console.log(mail.value);
    if (mail.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
      display.innerHTML ='';
    } else {
        mail.classList.toggle("notvalid");
    }
  }
