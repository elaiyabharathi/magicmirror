/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "India Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/India-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "bottom_bar"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Chennai",
				locationID: "1264527",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "a0424ccb2ee3761084971c462e1cb896"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Chennai",
				locationID: "1264527",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "a0424ccb2ee3761084971c462e1cb896"
			}
		},
		{
    			module: 'MMM-MirrorMirrorOnTheWall',
    			position: "middle_center",
    			config: {}
		},
		{
			module: "MMM-EARTH",
			position: "middle_center",
			config: {
				mode: "Natural",
				updateInterval: 3600000,
				rotateInterval: 15000,
				MaxWidth: "90%",
				MaxHeight: "90%",
				}
		},		
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Company In The News",
						url: "https://drive.google.com/uc?export=download&id=0B_8BSzRvPG43MjNwQzc1N25CSEE"
					},
					{
						title: "Competition News",
						url: "https://drive.google.com/uc?export=download&id=0B_8BSzRvPG43US04ZDEtcDN6NzA"
					},					
					{
						title: "Industry News",
						url: "https://drive.google.com/uc?export=download&id=0B_8BSzRvPG43WVBZUjMzcEhyVmM"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
