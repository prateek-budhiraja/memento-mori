const dobPickerForm = document.getElementById("dob-picker");
const dobInput = document.getElementById("dob");
const timerContainer = document.getElementById("timer-container");
const daysToDisplay = document.querySelector("#clock-container #days h1");
const timeToDisplay = document.querySelector("#clock-container #hours h1");
const pauseBtn = document.getElementById("pause-btn");
const lifeInWeeksContainer = document.getElementById("life-in-week-container");

var userDob = null;
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

(function () {
	if (localStorage.getItem("userDob")) {
		userDob = new Date(Date.parse(localStorage.getItem("userDob")));
		console.log("Saved DOB fetched", userDob);
		dobPickerForm.style.display = "none";
		timerContainer.style.display = "flex";
		document.body.style.display = "block";
		displayTimer(userDob);
		displayLifeInWeeks();
	}
})();

dobPickerForm.addEventListener("submit", (submit) => {
	submit.preventDefault();
	userDob = dob.valueAsDate;
	if (!userDob) return;

	localStorage.setItem("userDob", userDob.toString());

	dobPickerForm.classList.add("remove-element");
	setTimeout(() => {
		dobPickerForm.style.display = "none";
		timerContainer.classList.add("add-element");
		timerContainer.style.display = "flex";
		document.body.style.display = "block";
	}, 500);
	displayTimer(userDob);
	displayLifeInWeeks();
});

function displayTimer(dobAsNumber) {
	let today = new Date();
	let _80yearsFromNow = new Date(dobAsNumber.getTime() + 2524556160000); //adding 80 years to dob

	var diffMillis = _80yearsFromNow - today;

	days = Math.floor(diffMillis / 86400000);
	hours = Math.floor((diffMillis / (1000 * 60 * 60)) % 24);
	minutes = Math.floor((diffMillis / (1000 * 60)) % 60);
	seconds = 59;

	const timerInterval = setInterval(() => {
		let timeLeft = getRemainingTime();
		// console.log(timeLeft);
		// let element = document.createElement("div");
		daysToDisplay.innerHTML = timeLeft[0];
		// daysToDisplay.append(element);
		timeToDisplay.innerHTML = timeLeft[1];
		// element.innerHTML = timeLeft[1];
		// timeToDisplay.append(element);

		if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
			clearInterval(timerInterval);
		}
	}, 1000);
}

function getRemainingTime() {
	seconds--;
	if (seconds === -1) {
		seconds = 59;
		minutes--;
	}
	if (minutes === -1) {
		minutes = 59;
		hours--;
	}

	if (hours === 0) {
		hours = 23;
		days--;
	}

	return [
		`${days}`,
		`${hours > 9 ? hours : "0" + hours}<span class="important">:</span>${
			minutes > 9 ? minutes : "0" + minutes
		}<span class="important">:</span>${seconds > 9 ? seconds : "0" + seconds}`,
	];
}

pauseBtn.addEventListener(
	"mouseenter",
	() => (pauseBtn.innerText = "Sadly it doesn't work that way ☠️")
);
pauseBtn.addEventListener(
	"mouseleave",
	() => (pauseBtn.innerText = "Pause Time ⏸️")
);

function displayLifeInWeeks() {
	let weeksTitle = document.getElementById("life-week-title");
	weeksTitle.style.display = "block";
	let weeksLeft = days / 7;
	for (i = 0; i < 4170; i++) {
		let weekBox = document.createElement("div");
		weekBox.classList.add("box");
		i <= 4170 - weeksLeft ? weekBox.classList.add("box-fill") : "";
		lifeInWeeksContainer.append(weekBox);
	}
}
