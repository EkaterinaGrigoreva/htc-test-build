function clock() {
	var d = new Date();
	var day = d.getDate();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();

	month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
	"июля", "августа", "сентября", "октября", "ноября", "декабря");
	days=new Array("воскресенье", "понедельник", "вторник", "среда",
	"четверг", "пятница", "суббота");

	if (day <= 9) day = "0" + day;
	if (hours <= 9) hours = "0" + hours;
	if (minutes <= 9) minutes = "0" + minutes;
	if (seconds <= 9) seconds = "0" + seconds;

	date_date = day + " " + month[d.getMonth()] + " " + d.getFullYear() + " г. (" +
	days[d.getDay()] + ")";
	date_time = hours + ":" + minutes + ":" + seconds;

	if (document.layers) {
	document.layers.date.document.write(date_time);
	document.layers.date.document.close();
	document.layers.time.document.write(date_time);
	document.layers.time.document.close();
			}
	else {
	document.getElementById("date").innerHTML = date_date;
	document.getElementById("time").innerHTML = date_time;
	}
	setTimeout("clock()", 1000);
	}
	clock();