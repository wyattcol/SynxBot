/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDAxMTUyOTU3MDI0MDQzMDE4.DTmErQ.UfF6iaAOesg79bpTXTTseFEmCgs';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
	var words = message.content.split(' ')
	if (words[0] === ':buy') {
		var number1 = words[1]
		console.log(message.author.id)
		console.log(message.author.username)
		username = message.author.username
		id = message.author.id
		tag = message.author.tag
		//var number2 = words[2]
		//console.log('your number is', number1)
		   //client.sendMessage('you ran the :purchase command')
		//message.guild.channels.find("name", "purchaseusers").send("DiscordId: "+ id + "     " + "Username: " + tag + "    " + "RequestedVersion: " + number1);
		//message.author.sendMessage("Thank you for sending a purchase request for Synx7!\nYou will be messaged shortly by an owner to do the transaction.")
		message.channel.send("You can buy Synx7 V3 at the following rocketr link. (Coming Soon!)");

	}
});

client.on('message', message => {
	if (message.content === ':help')
	{
		message.channel.send('To purchase Synx7, all you have to do is run a command! Type :buy [Version]. Then, your name will be added to a purchase list. The owner of Synx will then message you and give you a link to buy the exploit. (Currently Synx7V3 can only be purchased with paypal for $3.)');
	}
});


client.on('message', message => {
	if (message.content === ':howtouse')
	{
		message.author.send('Currently, it is very simple to use the Synx7 Exploit. Once you buy the exploit, you will be provided with a download link and a secret key. Download the files. Then you will get a folder that has all of the files necessary for running the exploit in. Open the Synx7.Exe. You will be prompted to put in your secret key. Paste it into the textbox. Then you are ready to use the exploit!');
	}
});

client.on('message', message => {
	var words = message.content.split(' ')
	if (words[0] === ':announce') {
		var number1 = words[1]
		console.log(message.author.id)
		console.log(message.author.username)
		username = message.author.username
		id = message.author.id
		tag = message.author.tag
		//var number2 = words[2]
		//console.log('your number is', number1)
		   //client.sendMessage('you ran the :purchase command')
		message.guild.channels.find("name", "announcements").send(number1);
	}
});

// Log our bot in
client.login(token);
