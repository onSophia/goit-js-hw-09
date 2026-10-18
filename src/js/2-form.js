const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

const formData = {
    email: "",
    message: "",
};

const savedState = localStorage.getItem(STORAGE_KEY);
if (savedState) {
    try {
        const parsedState = JSON.parse(savedState);

        formData.email = parsedState.email || "";
        formData.message = parsedState.message || "";

        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    } catch (error) {
        console.error("Error parsing local storage data", error);
    }
}

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();

    formData.email = "";
    formData.message = "";
});