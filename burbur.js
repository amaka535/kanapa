// Link banlist and commands
$(`<script src="https://zimek-lmao.github.io/better-alis/commands.js?nocache=${Date.now()}"></script> <script src="https://zimek-lmao.github.io/better-alis/BetterAlis.banlist.js?nocache=${Date.now()}"></script>`).appendTo('head');
/* global playerDetails, userid, window */
// Run
setInterval(function() {
$(document).ready(function(){

  // Config

window.myuserid = userid;

  // Zimek
  var zimekCI = [{"x":"-2","y":"-2","url": "https://i.imgur.com/rpgzIVz.png" },{"x":"0","y":"-2","url": "https://i.imgur.com/AbOQ6N7.png" },{"x":"-2","y":"0","url": "https://i.imgur.com/wunPx2d.png" }/*,{"x":"0","y":"0","url": "https://i.imgur.com/cBR2cul.png" }*/];
  var zimekClr = {"r":"130","g":"255","b":"144"};
  var zimekSkin = "https://i.imgur.com/PxCyNam.png";
  var zimekHat = "";
  var zimekID = "165218";
  var zimekEjectClr = {"r":"255","g":"173","b":"244"};

  // YuRain
  var yurainCI = [{"x":-2,"y":-2,"url":"https:\/\/nosx.cf\/skin\/topleft.png"},{"x":0,"y":-2,"url":"https:\/\/nosx.cf\/skin\/topright.png"},{"x":-2,"y":0,"url":"https:\/\/nosx.cf\/skin\/bottomleft.png"},{"x":0,"y":0,"url":"https:\/\/nosx.cf\/skin\/bottomright.png"}];
  var yurainClr = {"r":"111","g":"0","b":"142"};
  var yurainSkin = "";
  var yurainHat = "";
  var yurainID = "2056";

// Hats
var sickCrown = [{"x":"-2","y":"-2","url": "https://i.imgur.com/5jYUav5.png" },{"x":"0","y":"-2","url": "https://i.imgur.com/b6uYi62.png" }];
var crown = "http://alis.io/assets/img/crownhat.png";
var dildo = "https://nosx.cf/dildo.png";
var tRex = "https:\/\/cdn.discordapp.com\/attachments\/283249356415696896\/464991723345674260\/nrz_hat.png";
var imNoob = "https://i.imgur.com/KnJUiXJ.png";

  // Sick
  var sickCI = [{"x":"-2","y":"-2","url": "https://i.imgur.com/JVTCK5t.png" },{"x":"0","y":"-2","url": "https://i.imgur.com/MViWvvE.png" },{"x":"-2","y":"0","url": "https://i.imgur.com/TVD7Adl.png" },{"x":"0","y":"0","url": "https://i.imgur.com/ENUT99f.png" }];
  var sickClr = {"r":"181","g":"255","b":"253"};
  var sickSkin = "";
  var sickHat = "";
  var sickID = "322943";

  // Yellow
  var yellowClr = {"r":"255","g":"240","b":"89"};
  var yellowID = "287937";

  // Neroz & Aqu
  var nerozID = "116426";
  var nerozHat = "https://i.imgur.com/eCVRWJj.png";
  var aquID = "16999";
  var aquCI = [{"x":"-2","y":"-2","url": "https://i.imgur.com/RxV0AaM.png" },{"x":"0","y":"-2","url": "https://i.imgur.com/Kiatxhz.png" }];

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
  var hannahID = "389192";

  // Badr
  var badrID = "316234";
  var badrHat = imNoob;

  // Onkill
  var noskillID = "310697";
  var noskillHat = "https://i.imgur.com/Jr8uK3y.png";
  var noskillEjectSkin = "https://i.imgur.com/l6IhxBU.png";

// Adding upgrades

if(userid == sickID){return};

// Zimek
  Object.values(playerDetails).forEach(player=>{if(player.uid==zimekID)player.customImages=zimekCI});
  Object.values(playerDetails).forEach(player=>{if(player.uid==zimekID)player.color=zimekClr});
  Object.values(playerDetails).forEach(player=>{if(player.uid==zimekID){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].color=zimekEjectClr}})
  Object.values(playerDetails).forEach(player=>{if(player.uid==zimekID){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].numSides=4}})
  Object.values(playerDetails).forEach(player=>{if(player.uid==zimekID)player.skinUrl=zimekSkin});
  Object.values(playerDetails).forEach(player=>{if(player.uid==zimekID)player.isAdmin="Zimek"});
// Object.values(playerDetails).forEach(player=>{if(player.uid==zimekID)player.hat=zimekHat});
// Object.values(playerDetails).forEach(player=>{if(player.uid==zimekID)player.numSides=7});


// Yurain
//Object.values(playerDetails).forEach(player=>{if(player.uid==yurainID)player.customImages=yurainCI});
//Object.values(playerDetails).forEach(player=>{if(player.uid==yurainID)player.color=yurainClr});
//Object.values(playerDetails).forEach(player=>{if(player.uid==yurainID)player.skinUrl=yurainSkin});
//Object.values(playerDetails).forEach(player=>{if(player.uid==yurainID)player.skinUrl=yurainHat});

// Zimek on yurain
Object.values(playerDetails).forEach(player=>{if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){player.customImages=zimekCI}}});
Object.values(playerDetails).forEach(player=>{if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){player.skinUrl=zimekSkin}}});
Object.values(playerDetails).forEach(player=>{if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){player.color=zimekClr}}});
Object.values(playerDetails).forEach(player=>{if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){player.isAdmin="Zimek"}}});
Object.values(playerDetails).forEach(player=>{if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].numSides=4}}});
Object.values(playerDetails).forEach(player=>{if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].color=zimekEjectClr}}});
//Object.values(playerDetails).forEach(player=>{if(player.uid==yurainID){if(player.name.includes("Zimek") || player.name.includes("zimek")){player.hat=zimekHat}}});


// Yellow
Object.values(playerDetails).forEach(player=>{if(player.uid==yellowID)player.color=yellowClr});


// Sick
//Object.values(playerDetails).forEach(player=>{if(player.uid==sickID)player.customImages=sickCI});
Object.values(playerDetails).forEach(player=>{if(player.uid==sickID)player.color=sickClr});
//Object.values(playerDetails).forEach(player=>{if(player.uid==sickID)player.skinUrl=sickSkin});
//Object.values(playerDetails).forEach(player=>{if(player.uid==sickID)player.skinUrl=sickHat});

// No name
Object.values(playerDetails).forEach(player=>{if(player.uid==nonameID)player.color=nonameClr});
Object.values(playerDetails).forEach(player=>{if(player.uid==nonameID)player.skinUrl=nonameHat});

// Hannah
Object.values(playerDetails).forEach(player=>{if(player.uid==hannahID)player.hat=hannahHat});

// Badr
Object.values(playerDetails).forEach(player=>{if(player.uid==badrID)player.hat=badrHat});

// Noskill
Object.values(playerDetails).forEach(player=>{if(player.uid==noskillID)player.hat=noskillHat});
Object.values(playerDetails).forEach(player=>{if(player.uid==noskillID){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].skinUrl=noskillEjectSkin}})


// Killer
Object.values(playerDetails).forEach(player=>{if(player.uid==killerID)player.hat=killerHat});
//Object.values(playerDetails).forEach(player=>{if(player.uid==killerID)player.color=killerClr});


// Neroz $ Aqu
Object.values(playerDetails).forEach(player=>{if(player.uid==nerozID)player.hat=nerozHat})
Object.values(playerDetails).forEach(player=>{if(player.uid==aquID)player.hat="Disabled"}) //disable aqu T-rex
Object.values(playerDetails).forEach(player=>{if(player.uid==aquID)player.customImages=aquCI});

// "Poor" guy: hat from neroz.
Object.values(playerDetails).forEach(player=>{if(player.uid=="251989")player.hat=tRex});

// Free trex hat for people with name "Aquliax"
Object.values(playerDetails).forEach(player=>{if(player.name=="Aquliax")player.hat=tRex});

});
}, 5000)


setTimeout(function(){
window.myuserid = userid;
        if (userid == 2056 || userid == 165218) {
console.log("you r special")
        }
}, 13000)


// Animated skin by zimek
/*
setInterval(function() {
$(document).ready(function(){

setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/1.png"});}, 70);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/2.png"});}, 140);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/3.png"});}, 210);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/4.png"});}, 280);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/5.png"});}, 350);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/6.png"});}, 420);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/7.png"});}, 490);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/8.png"});}, 560);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/9.png"});}, 630);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/10.png"});}, 700);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/11.png"});}, 770);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/12.png"});}, 840);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/13.png"});}, 910);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/14.png"});}, 980);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/15.png"});}, 1050);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/16.png"});}, 1120);
setTimeout(function(){Object.values(playerDetails).forEach(player=>{if(player.uid=="165218")player.skinUrl="https://zimek-lmao.github.io/zimek/aSKIN/17.png"});}, 1190);


});
}, 1200);
*/
