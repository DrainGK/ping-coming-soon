const mail = document.getElementById("mail");
const display = document.querySelector("#result");
const submit = document.querySelector("#submit");

let email;

const errorDisplay = (message, valid) => {
  if(!valid){
    mail.style.border = "1px solid red";
    mail.style.color = "red";
    display.style.visibilty = "visible"
    display.style.color = "red"
    display.textContent = message;

    console.log(display.textContent);
  } else {
    mail.style.border = "1px solid hsl(223, 100%, 88%)";
    mail.style.color = "hsl(223, 100%, 88%)";
    display.style.visibilty = "hidden"
    display.textContent = "";
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("Please provide a valid email address", false);
    email = null;
  } else {
    errorDisplay("", true);
    email = value;
  }
};

mail.addEventListener("input", (e) => {
  emailChecker(e.target.value); 
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (email) {
    // Send email to server or perform other actions
    console.log("Email submitted: ", email);
    alert("Thank you for subscribing!");
  } else {
    alert("Please provide a valid email address");
  }
});
