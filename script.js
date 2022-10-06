const dobPickerForm = document.getElementById("dob-picker");
const dobInput = document.getElementById("dob");
let userDob;

dobPickerForm.addEventListener("submit", (e) => {
	e.preventDefault();
	userDob = dob.value;
	dobPickerForm.classList.add("remove-element");
	setTimeout(() => (dobPickerForm.style.display = "none"), 600);
});
