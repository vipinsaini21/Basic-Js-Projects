const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const heading = document.querySelector('h1');
const counterTimer = document.querySelector('.counterTimer');

// Converting secondsElement, minutes, hours and days in milliseconds
const second = 1000,
	minute = 60 * second,
	hour = 60 * minute,
	day = 24 * hour;

const timerFunction = () => {
	// Generating current date in mm/dd/yyyy fromat
	let now = new Date();
	let dd = String(now.getDate()).padStart(2, '0');
	let mm = String(now.getMonth() + 1).padStart(2, '0');
	let yyyy = now.getFullYear();

	// Taking target date from user
	const enterDay = prompt('Enter Day').padStart(2, '0');
	const enterMonth = prompt('Enter Month').padStart(2, '0');

	now = `${mm}/${dd}/${yyyy}`;
	let targetDate;
	if (
		enterDay >= 1 &&
		enterDay <= 31 &&
		((enterMonth) => 1 && enterMonth <= 12)
	) {
		targetDate = `${enterMonth}/${enterDay}/${yyyy}`;
	} else {
		alert('Enter Valid Day and Month');
		counterTimer.style.display = 'none';
		heading.innerText = 'Please Reload and Enter Valid Day and Month';
	}

	// Checking if target date is for next year
	if (now > targetDate) {
		targetDate = `${enterMonth}/${enterDay}/${yyyy + 1}`;
	}

	const intervalId = setInterval(() => {
		// Converting target date in millisecond
		const timer = new Date(targetDate).getTime();

		// Taking current date in millisecond
		const today = new Date().getTime();

		// Finding difference between target date and today date
		const difference = timer - today;

		// Finding left daysElement, hours, minutes and seconds
		const leftDay = Math.floor(difference / day);
		const leftHour = Math.floor((difference % day) / hour);
		const leftMinute = Math.floor((difference % hour) / minute);
		const leftSecond = Math.floor((difference % minute) / second);

		// Showing timer in DOM
		daysElement.innerText = leftDay;
		hoursElement.innerText = leftHour;
		minutesElement.innerText = leftMinute;
		secondsElement.innerText = leftSecond;

		// Stoping setInterval after reaching target date
		if (difference < 0) {
			counterTimer.style.display = 'none';
			heading.innerText = "Time's Up";
			clearInterval(intervalId);
		}
	}, 0);
};

timerFunction();
