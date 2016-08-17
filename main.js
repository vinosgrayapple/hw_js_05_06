var timerId,
	flag = true,
	count = 0,
	second = 0,
	minute = 0,
	hour = 0;

var start = document.getElementById('start'),
	hourId = document.getElementById('hour'),
	minuteId = document.getElementById('minute'),
	secondId = document.getElementById('second'),
	timer = document.getElementById('milisecond');

timer.innerHTML = '0';

start.onclick = function() {
	if (flag)
	{
		this.innerHTML = 'PAUSE';
		this.style.background = 'blue';
		flag = false;

		timerId = setInterval(function() {
		timer.innerHTML = count;

		if (count >= 1000) 
		{
			count = 0;
			second++;
		}
		// if (second >= 60) 
		// {
		// 	second = 0;
		// 	minute++;
		// }
		// if (minute >= 60) 
		// {
		// 	minute = 0;
		// 	hour++;
		// }
		// if ( hour >= 24) 
		// {
		// 	toZero();
		// }

		// setTime();
		count++;
									},1);
	} 
	else 
	{
		this.innerHTML = 'START';
		this.style.background = 'rgb(28, 184, 65)';
		flag = true;
		window.clearInterval(timerId);
	}

};

clear.onclick = function() {

		window.clearInterval(timerId);
		toZero();
		setTime();
		timer.innerHTML    = '0'; 
		start.innerHTML = 'START';
		start.style.background = 'rgb(28, 184, 65)';
		flag = true;


};

function checkZero(n) {
	return n < 10 ? '0' + n : n;
}

function setTime() {
	secondId.innerHTML = checkZero(second);
	minuteId.innerHTML = checkZero(minute);
	hourId.innerHTML   = checkZero(hour);
}

function toZero() {
	hour = minute = second = count = 0;
}
