const form = document.querySelector("[data-form]");
const email = document.querySelector("[data-email]");
const error = document.querySelector("[data-error]");
const text = document.querySelector("[data-text]");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if(!pattern.test(email.value)) {
        error.classList.add("active");
        text.classList.add("active");
        email.classList.add("form__email-border")
    } else {
        error.classList.remove("active");
        text.classList.remove("active");
        email.classList.remove("form__email-border");
    }
})