const Discord=require('discord.js')
const bot=new Discord.Client()

var dispatcher;



bot.on('message',function(message){
if(message.content==='!Tasir'){
    if(message.member.voiceChannel){
    message.member.voiceChannel.join().then(connection =>{
        dispatcher=connection.playArbitraryInput("http://hitradio-maroc.ice.infomaniak.ch/hitradio-maroc-128.mp3");
    });
   }else{
    message.reply("Wa Dkhul lchi channel a Hamadi");
   }
}else if(message.content==='!sirt7wa'){
    message.member.voiceChannel.leave();
    message.reply("Hana Ghadi a weld l9a7ba a berred");
}
})
 


 bot.login(process.env.token)