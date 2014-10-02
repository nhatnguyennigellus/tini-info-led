// JavaScript Document
/*var mockup = {
	tiniplanet_stats: {
        total_users: 1235,
        signup_thisweek: 1827,
        signup_lastweek: 3756,
        tinidiem_earned: 400583,
        tinidiem_spend: 75218,
        latest_signup: {
            username: "nhatN",
            sigup_on: "3 minutes ago"
        }
    }
}

function updateUI () {
		//document.getElementById("total-user").innerHTML = mockup.tiniplanet_stats.total_users;
	//	document.getElementById("signup-lastweek").innerHTML = mockup.tiniplanet_stats.signup_lastweek;
	//	document.getElementById("signup-thisweek").innerHTML = mockup.tiniplanet_stats.signup_thisweek;
	//	document.getElementById("username").innerHTML = mockup.tiniplanet_stats.latest_signup.username;
	//	document.getElementById("signup-on").innerHTML = mockup.tiniplanet_stats.latest_signup.sigup_on;
	//	document.getElementById("tinidiem-earned").innerHTML = mockup.tiniplanet_stats.tinidiem_earned;
	//	document.getElementById("tinidiem-spent").innerHTML = mockup.tiniplanet_stats.tinidiem_spend;
		
	}
	
window.onload = function () {
	setInterval(function () {updateUI()}, 5000);
}


function updatingNoti(){
	setInterval(function() {
		document.getElementById("updating").style.;
	}, 2000);
}



setInterval(notiUpdate, 3000);
function notiUpdate() {
	$('#updating').toggle();
}*/

setInterval(updateUI, 5000);
function updateUI() {
	($.ajax({
		url: 'http://192.168.12.18:5000/tinistats',
		dataType: "json",
		timeout: 30000,
		success: function (data) {
			$("#updating").hide(); 
			setTimeout(function() {     
			   $("#updating").show(); 
			},3000);
			//setInterval(function () {
			var totalUser = data.tiniplanet_stats.total_users;
			var signupLastWeek = data.tiniplanet_stats.signup_lastweek;
			var signupThisWeek = data.tiniplanet_stats.signup_thisweek;
			var username = data.tiniplanet_stats.latest_signup.username;
			var signupOn = data.tiniplanet_stats.latest_signup.signup_on;
			var tinidiemEarned = data.tiniplanet_stats.tinidiem_earned;
			var tinidiemSpent = data.tiniplanet_stats.tinidiem_spent;
			
			
	
			$('#total-user').html(totalUser.toLocaleString());
			$('#signup-lastweek').html(signupLastWeek.toLocaleString());
			$('#signup-thisweek').html(signupThisWeek.toLocaleString());
			$('#username').html(username);
			$('#signup-on').html(signupOn);
			$('#tinidiem-earned').html(tinidiemEarned.toLocaleString());
			$('#tinidiem-spent').html(tinidiemSpent.toLocaleString());
			var currentdate = new Date().toString('ddd dd MMM yyyy HH:mm:ss'); 
//			currentdate.toS;
			
			$('#last-updated').html('Last updated '+ currentdate);
			

		}
	}));
}


setInterval(countdownClockUpdate, 1000);

function countdownClockUpdate () {
	var dueDate = new Date(2014, 9, 4, 9, 0, 0).getTime() / 1000;
	var currentDate = new Date().getTime() / 1000;
	var totalRemainSec = new Date(dueDate - currentDate) ;
	
	
	var d = parseInt(totalRemainSec / 86400);
	var h = parseInt(totalRemainSec / 3600) % 24 + parseInt(d * 24);
	var m = parseInt(totalRemainSec / 60 ) % 60;
    var s = parseInt(totalRemainSec % 60, 10);
	
	if(parseInt(s) < 10)
	{
		s = "0" + s;
	}
	if(parseInt(m) < 10)
	{
		m = "0" + m;
	}
	if(parseInt(h) < 10)
	{
		h = "0" + h;
	}
//	var dispClock = currentdate.
	document.getElementById('countdown-clock').innerHTML = h + ":" + m + ":" + s;
	//document.getElementById('countdown-clock').innerHTML =  parseInt(totalRemainSec, 10);
	
}
