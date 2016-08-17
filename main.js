var timerId,
	flag = true,
	count = 0,
	second = 0,
	minute = 0,
	hour = 0;
const startColor = 'rgb(28, 184, 65)';

var start = document.getElementById('start'),
	watch = document.getElementById('watch'),
	timer = document.getElementById('milisecond'),
	clear = document.getElementById('clear');


start.onclick = function() {
	if (flag)
	{
		this.innerHTML = 'PAUSE';
		this.style.background = 'blue';
		flag = false;

		timerId = setInterval(
			function() {
			count += 4;
			if (!(count % 13)) 
			{
				setMillisecond();
			}

			if (count >= 1000) 
			{
				count = 0;
				second++;
				setTime();
			if (second >= 60) 
			{
				second = 0;
				minute++;
			if (minute >= 60) 
			{
				minute = 0;
				hour++;
			if ( hour >= 24) 
			{
				toZero();
			}
			}
			}
			}
		},1);
	} 
	else 
	{
		this.innerHTML = 'START';
		this.style.background = startColor;
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
		start.style.background = startColor;
		flag = true;


}



function checkZero(n) {
	return n < 10 ? '0' + n : n;
}

function setTime() {
	watch.innerHTML = checkZero(hour) + ":" + checkZero(minute) + ":"  + checkZero(second);
}

function setMillisecond() {
	timer.innerHTML = count;
}

function toZero() {
	hour = minute = second = count = 0;
}
