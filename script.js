const dobPickerForm = document.getElementById("dob-picker");
const dobInput = document.getElementById("dob");
const timerContainer = document.getElementById("timer-container");
const timer = document.getElementById("timer");
const pauseBtn = document.getElementById("pause-btn");

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

dobPickerForm.addEventListener("submit", (submit) => {
	submit.preventDefault();
	let userDob = dob.valueAsDate;
	if (!userDob) return;
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
		timer.innerHTML = getRemainingTime();
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

	return `${days} Days<span class="important">,</span> ${
		hours > 9 ? hours : "0" + hours
	}<span class="important">:</span>${
		minutes > 9 ? minutes : "0" + minutes
	}<span class="important">:</span>${
		seconds > 9 ? seconds : "0" + seconds
	} <span style="text-decoration: underline;">left</span>`;
}

pauseBtn.addEventListener(
	"click",
	() => (pauseBtn.innerText = "Sadly it doesn't work that way ☠️")
);

const displayLifeInWeeks = (dobInString) => {};
