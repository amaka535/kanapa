// Link banlist and commands
$(`
<script>
var sickCrown = [{"x":"-2","y":"-2","url": "https://i.imgur.com/5jYUav5.png" },{"x":"0","y":"-2","url": "https://i.imgur.com/b6uYi62.png" }];
var crown = "http://alis.io/assets/img/crownhat.png";
var dildo = "https://nosx.cf/dildo.png";
var tRex = "https://cdn.discordapp.com/attachments/283249356415696896/464991723345674260/nrz_hat.png";
var imNoob = "https://i.imgur.com/KnJUiXJ.png";
var noob = "http://gaver.io/hats/noob.png";
var cat = "http://gaver.io/hats/cat.png";
var suckcat = "http://alis.io/assets/img/cathat.png";
var santa = "http://gaver.io/hats/santa.png";
var fancy = "http://gaver.io/hats/fancy.png";
var trollCrown = "http://gaver.io/hats/troll.png";
var xaz = "http://gaver.io/hats/xaz.png";
</script>`).appendTo('head');
/* global playerDetails, userid, window */

// Config

// Zimek
var zimekCI = [{"x":"-2","y":"-2","url": "https://i.imgur.com/SPeixJv.png" },{"x":"0","y":"-2","url": "https://i.imgur.com/WvELX77.png" },/*{"x":"-2","y":"0","url": "https://i.imgur.com/wunPx2d.png" },*/{"x":"0","y":"0","url": "https://i.imgur.com/EkNOhNI.png" }];
var zimekClr = {"r":"255","g":"96","b":"96"};
var zimekSkin = "https://i.imgur.com/VRnvWbI.png";
var zimekHat = "";
var zimekID = "165218";
var zimekEjectClr = {"r":"255","g":"0","b":"0"};

// YuRain
var yurainCI = [{"x":-2,"y":-2,"url":"https:\/\/nosx.cf\/skin\/topleft.png"},{"x":0,"y":-2,"url":"https:\/\/nosx.cf\/skin\/topright.png"},{"x":-2,"y":0,"url":"https:\/\/nosx.cf\/skin\/bottomleft.png"},{"x":0,"y":0,"url":"https:\/\/nosx.cf\/skin\/bottomright.png"}];
var yurainClr = {"r":"0","g":"109","b":"16"};
var yurainSkin = "";
var yurainHat = "";
var yurainID = "2056";

// Hats
var sickCrown = [{"x":"-2","y":"-2","url": "https://i.imgur.com/5jYUav5.png" },{"x":"0","y":"-2","url": "https://i.imgur.com/b6uYi62.png" }];
var crown = "http://alis.io/assets/img/crownhat.png";
var dildo = "https://nosx.cf/dildo.png";
var tRex = "https://cdn.discordapp.com/attachments/283249356415696896/464991723345674260/nrz_hat.png";
var imNoob = "https://i.imgur.com/KnJUiXJ.png";
var noob = "http://gaver.io/hats/noob.png";
var cat = "http://gaver.io/hats/cat.png";
var suckcat = "http://alis.io/assets/img/cathat.png";
var santa = "http://gaver.io/hats/santa.png";
var fancy = "http://gaver.io/hats/fancy.png";
var trollCrown = "http://gaver.io/hats/troll.png";
var xaz = "http://gaver.io/hats/xaz.png";

// Sick
var sickClr = {"r":"0","g":"102","b":"102"};
var sickID = "322943";

// Yellow
var yellowClr = {"r":"255","g":"240","b":"89"};
var yellowID = "287937";

// Neroz & Aqu
var nerozID = "116426";
var nerozHat = "https://i.imgur.com/eCVRWJj.png";
var aquID = "413198";
var aquCI = [{"x":"-1","y":"-1.9","url": "https://i.imgur.com/JyvWlWZ.png" }];

// No name
var nonameClr = {"r":"255","g":"240","b":"89"};
var nonameHat = crown;
var nonameID = "47787";

// Killer
var killerID = "37288";
var killerHat = "http://gaver.io/hats/kaneki.png";
var killerClr = {"r":"39","g":"74","b":"179"};

// Hannah
var hannahHat = dildo;
var hannahClr = {"r":"249","g":"172","b":"242"};
var hannahEjectClr = {"r":"124","g":"255","b":"244"};
var hannahID = "389192";

// Badr
var badrID = "316234";
var badrHat = imNoob;

// Onkill
var noskillID = "310697";
var noskillHat = "https://i.imgur.com/Jr8uK3y.png";
var noskillEjectSkin = "https://i.imgur.com/l6IhxBU.png";

// Run
setInterval(function() {
$(document).ready(function(){
// Adding upgrades
if(isJoinedGame || spectateMode){
  Object.values(playerDetails).forEach(player=>{

    // Zimek
//    if(player.uid==zimekID)player.customImages=zimekCI;
//  if(player.uid==zimekID)player.skinUrl=zimekSkin;
  if(player.uid==zimekID)player.color=zimekClr;
  if(player.uid==zimekID){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].color=zimekEjectClr}
  if(player.uid==zimekID){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].numSides=3}
  if(player.uid==zimekID)player.isAdmin="Zimek"; //so on any tag people can see my skin
// if(player.uid==zimekID)player.hat=zimekHat;

// Yurain
//if(player.uid==yurainID)player.customImages=yurainCI;
if(player.uid==yurainID)player.color=yurainClr;
//if(player.uid==yurainID)player.skinUrl=yurainSkin;
//if(player.uid==yurainID)player.skinUrl=yurainHat;

// Zimek on yurain acc
//if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){player.customImages=zimekCI}};
//if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){player.skinUrl=zimekSkin}};
if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){player.color=zimekClr}};
if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){player.isAdmin="Zimek"}}; //so peps see my skin on any tag
if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].numSides=3}};
if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].color=zimekEjectClr}};
//if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){player.hat=zimekHat}};

// Yellow
if(player.uid==yellowID)player.color=yellowClr; //gay cant be anonymous

// Sick
if(player.uid==sickID)player.color=sickClr; //you too ^

// No name
if(player.uid==nonameID)player.color=nonameClr;
if(player.uid==nonameID)player.skinUrl=nonameHat;

// Hannah
if(player.uid==hannahID)player.hat=hannahHat;
if(player.uid==hannahID)player.color=hannahClr;
if(player.uid==hannahID){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].color=hannahEjectClr}


// Badr
if(player.uid==badrID)player.hat=badrHat;

// Noskill
if(player.uid==noskillID)player.hat=noskillHat;
if(player.uid==noskillID){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].skinUrl=noskillEjectSkin}


// Killer
if(player.uid==killerID)player.hat=killerHat;
//if(player.uid==killerID)player.color=killerClr;

// Rinsen / neroz
if(player.uid==nerozID)player.hat=nerozHat

// "Poor" guy: hat from neroz.
if(player.uid=="251989")player.hat=tRex;

}); }
})
}, 4500);


setTimeout(function(){
window.myuserid = userid;
        if (userid == 2056 || userid == 165218) {
console.log("you are special")
        }
}, 13000)

//Animated skin by Zimek
//Config

var userUID = 165218
var speed = 100
var frames = 5
var url1 = "https://zimek-lmao.github.io/zimek/askin2/"
var url2 = ".gif"
var count = 1

//run
setInterval(function(){
    if(count > frames){count=1}
    var url = `${url1}${count}${url2}`
Object.values(playerDetails).forEach(player=>{
if(player.uid==userUID)player.skinUrl=url
});
count = count + 1;
}, speed)
