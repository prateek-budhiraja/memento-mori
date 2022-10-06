const dobPickerForm = document.getElementById("dob-picker");
const dobInput = document.getElementById("dob");
const timerContainer = document.getElementById("timer-container");

dobPickerForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let userDob = dob.value;
	dobPickerForm.classList.add("remove-element");
	setTimeout(() => {
		dobPickerForm.style.display = "none";
		timerContainer.classList.add("add-element");
		timerContainer.style.display = "flex";
		document.body.style.alignItems = "start";
	}, 500);
	displayTimer(userDob);
	displayLifeInWeeks(userDob);
});

const displayTimer = (dobInString) => {
	console.log(dobInString);
};
const displayLifeInWeeks = (dobInString) => {};
