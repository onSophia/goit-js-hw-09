const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

let formState = {
    email: "",
    message: "",
};

const savedState = localStorage.getItem(STORAGE_KEY);
if (savedState) {
    try {
        formState = JSON.parse(savedState);
        form.elements.email.value = formState.email || "";
        form.elements.message.value = formState.message || "";
    } catch (error) {
        console.error("Error parsing local storage data", error);
    }
}

form.addEventListener("input", (event) => {
    formState[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formState.email || !formState.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formState);

    localStorage.removeItem(STORAGE_KEY);
    formState = { email: "", message: "" };
    form.reset();
});