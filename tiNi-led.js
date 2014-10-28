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

window.onload = function () {
	updateUI();
}
setInterval(updateUI, 30000);
function updateUI() {
	($.ajax({
		url: 'http://www.tiniplanet.com/api/statistics/realtime',
		dataType: "json",
		timeout: 60000,
		success: function (data) {
			$("#updating").hide(); 
			setTimeout(function() {     
			   $("#updating").show(); 
			},20000);
			//setInterval(function () {
			var totalUser = data.tiniplanet_stats.total.players;
			var signupLastWeek = data.tiniplanet_stats.last_week.signup;
			var signupThisWeek = data.tiniplanet_stats.this_week.signup;
			var username = data.tiniplanet_stats.total.latest_signup.username;
			var signupOn = data.tiniplanet_stats.total.latest_signup.signup_on;
			var nowPlaying = data.tiniplanet_stats.total.online_players;
			var energyEarn = data.tiniplanet_stats.total.energy_earn;
			var tinidiemEarn = data.tiniplanet_stats.total.tinidiem_earned;
			var tinidiemSpent = data.tiniplanet_stats.total.tinidiem_spent;
			var playerEnergyEarn = data.tiniplanet_stats.total.players_earn_energy;
			var playerTinidiemEarn = data.tiniplanet_stats.total.players_earn_tinidiem;
			var playerTinidiemSpent = data.tiniplanet_stats.total.players_spend_tinidiem;
			
			$('#total-user').html(commaSeparateNumber(totalUser));
			$('#signup-lastweek').html(commaSeparateNumber(signupLastWeek));
			$('#signup-thisweek').html(commaSeparateNumber(signupThisWeek));
			$('#username').html(username);
			$('#now-playing').html(commaSeparateNumber(nowPlaying) + ' <br/><div style="font-size: 45px; line-height: 85%; text-align:center; ">Users</div>');
			$('#energy-earned').html(commaSeparateNumber(energyEarn));
			$('#tinidiem-earned').html(commaSeparateNumber(tinidiemEarn));
			$('#tinidiem-spent').html(commaSeparateNumber(Math.abs(tinidiemSpent)));
			$('#player-energy-earned').html(commaSeparateNumber(playerEnergyEarn));
			$('#player-tinidiem-earned').html(commaSeparateNumber(playerTinidiemEarn));
			$('#player-tinidiem-spent').html(commaSeparateNumber(playerTinidiemSpent));
			var currentDate = new Date().toString('ddd dd MMM yyyy HH:mm:ss'); 
//			currentdate.toS;
			
			$('#last-updated').html('Last updated '+ currentDate);
			
			var diff = Math.abs(new Date() - new Date(signupOn));
			var m = Math.floor((diff/1000)/60);
			
			$('#signup-on').html(m + ' minutes ago' );
		}
	}));
}

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+'.'+'$2');
    }
    return val;
  }
/*

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
	
}*/
