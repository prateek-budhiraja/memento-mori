const dobPickerForm = document.getElementById("dob-picker");
const dobInput = document.getElementById("dob");
const timerContainer = document.getElementById("timer-container");
const timer = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

dobPickerForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let userDob = dob.valueAsDate;
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

const displayTimer = (dobAsNumber) => {
	let today = new Date();
	let _80yearsFromNow = new Date(dobAsNumber.getTime() + 2524556160000); //adding 80 years to dob

	var diffMillis = _80yearsFromNow - today;

	days = Math.floor(diffMillis / 86400000);
	hours = Math.floor((diffMillis / (1000 * 60 * 60)) % 24);
	minutes = Math.floor((diffMillis / (1000 * 60)) % 60);
	seconds = 59;

	const timerInterval = setInterval(() => {
		timer.innerText = getRemainingTime();
		if (hours === 0 && minutes === 0 && seconds === 0) {
			clearInterval(timerInterval);
		}
	}, 1000);
};

function getRemainingTime() {
	seconds--;
	if (seconds === 0) {
		seconds = 60;
		minutes--;
	}
	if (minutes === 0) {
		minutes = 60;
		hours--;
	}

	if (hours === 0) {
		hours = 24;
		days--;
	}

	return `${days} Days, ${hours > 9 ? hours : "0" + hours}:${
		minutes > 9 ? minutes : "0" + minutes
	}:${seconds > 9 ? seconds : "0" + seconds} left`;
}

const displayLifeInWeeks = (dobInString) => {};
