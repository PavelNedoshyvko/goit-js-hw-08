import throttle from "lodash.throttle";


const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));


if (JSON.parse(localStorage.getItem("feedback-form-state"))) {
	const formData = JSON.parse(localStorage.getItem("feedback-form-state"));
	formEl.elements.email.value = formData.email;
	formEl.elements.message.value = formData.message;
}

function onFormSubmit(evt) {
	evt.preventDefault();
	if (formEl.elements.email.value === '' || formEl.elements.message.value === '') {
			return alert('All fields must be filled!!!')
		};
	console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
	localStorage.removeItem("feedback-form-state");
	evt.currentTarget.reset();
}

function onFormInput(evt) {
	const formData = {
			email: formEl.elements.email.value,
			message: formEl.elements.message.value,
	};
	localStorage.setItem("feedback-form-state", JSON.stringify(formData));	
}