const dismissBtn = document.getElementById("dismiss");
const success = document.getElementById("success");
const subPage = document.getElementById("sub-page");
const email = document.getElementById("email");
const error = document.getElementById("error-msg");
const form = document.getElementById("form");
const emailChecker = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
  if (email.value === "" || email.value === null) {
    e.preventDefault();
    error.innerHTML = "Valid email required";
    document.querySelector("input").classList.add("error");
  } else {
    error.innerHTML = "";
  }

  if (!email.value.match(emailChecker)) {
    e.preventDefault();
    error.innerHTML = "Valid email required";
    document.querySelector("input").classList.add("error");
  } else {
    subPage.classList.add("hide");
    success.classList.remove("hide");
    e.preventDefault();
    dismissBtn.addEventListener("click", () => {
      subPage.classList.remove("hide");
      success.classList.add("hide");
    });
  }
});
