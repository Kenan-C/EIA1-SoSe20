"use strict";
var world18 = 1.236 + 1.262 + 4.209 + 6.036 + 16.274 + 2.101;
/* Europe */
document.querySelector(".europe").addEventListener("click", EUFun);
var euro18 = 4.209;
var euro08 = 4.966;
var euroRe = (euro18 / world18) * 100;
var euroReRound = euroRe.toFixed(2);
var unterschiedEU = 4.209 - 4.966;
var unterschiedEUAbsolute = unterschiedEU.toFixed(2);
var euroEmiAnstieg = (unterschiedEU / euro18) * 100;
var euroEmiAnstiegRound = euroEmiAnstieg.toFixed(2);
function EUFun() {
    document.querySelector("#titleRegion").innerHTML = "Europe";
    document.querySelector(".value").innerHTML = +euro18;
    document.querySelector(".textvalue").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector(".relative").innerHTML = +euroReRound + "%";
    document.querySelector(".textrelative").innerHTML = "Relative to total world's emission";
    document.querySelector(".growth").innerHTML = +euroEmiAnstiegRound + "%";
    document.querySelector(".textgrowth").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector(".absolute").innerHTML = +unterschiedEUAbsolute * 1000;
    document.querySelector(".textabsolute").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".chart").setAttribute("Style", "height: 13.53%");
}
/* North America */
document.querySelector(".northamerica").addEventListener("click", NAFun);
var noam18 = 6.036;
var noam08 = 6.600;
var noamRe = (noam18 / world18) * 100;
var noamReRound = noamRe.toFixed(2);
var unterschiedNA = 6.036 - 6.600;
var unterschiedNAAbsolute = unterschiedNA.toFixed(2);
var noamEmiAnstieg = (unterschiedNA / noam18) * 100;
var noamEmiAnstiegRound = noamEmiAnstieg.toFixed(2);
function NAFun() {
    document.querySelector("#titleRegion").innerHTML = "North America";
    document.querySelector(".value").innerHTML = +noam18;
    document.querySelector(".textvalue").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector(".relative").innerHTML = +noamReRound + "%";
    document.querySelector(".textrelative").innerHTML = "Relative to total world's emission";
    document.querySelector(".growth").innerHTML = +noamEmiAnstiegRound + "%";
    document.querySelector(".textgrowth").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector(".absolute").innerHTML = +unterschiedNAAbsolute * 1000;
    document.querySelector(".textabsolute").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".chart").setAttribute("Style", "height: 19.4%");
}
/* Southamerica */
document.querySelector(".southamerica").addEventListener("click", SAFun);
var soam18 = 1.262;
var soam08 = 1.133;
var soamRe = (soam18 / world18) * 100;
var soamReRound = soamRe.toFixed(2);
var unterschiedSA = 1.262 - 1.133;
var unterschiedSAAbsolute = unterschiedSA.toFixed(2);
var soamEmiAnstieg = (unterschiedSA / soam18) * 100;
var soamEmiAnstiegRound = soamEmiAnstieg.toFixed(2);
function SAFun() {
    document.querySelector("#titleRegion").innerHTML = "South America";
    document.querySelector(".value").innerHTML = +soam18;
    document.querySelector(".textvalue").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector(".relative").innerHTML = +soamReRound + "%";
    document.querySelector(".textrelative").innerHTML = "Relative to total world's emission";
    document.querySelector(".growth").innerHTML = +soamEmiAnstiegRound + "%";
    document.querySelector(".textgrowth").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector(".absolute").innerHTML = +unterschiedSAAbsolute * 1000;
    document.querySelector(".textabsolute").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".chart").setAttribute("Style", "height: 4.06%");
}
/* Africa */
document.querySelector(".africa").addEventListener("click", AfrFu);
var afr18 = 1.236;
var afr08 = 1.028;
var afrRe = (afr18 / world18) * 100;
var afrReRound = afrRe.toFixed(2);
var unterschiedAfr = 1.236 - 1.028;
var unterschiedAfrAbsolute = unterschiedAfr.toFixed(2);
var AfrEmiAnstieg = (unterschiedAfr / afr18) * 100;
var AfrEmiAnstiegRound = AfrEmiAnstieg.toFixed(2);
function AfrFu() {
    document.querySelector("#titleRegion").innerHTML = "Africa";
    document.querySelector(".value").innerHTML = +afr18;
    document.querySelector(".textvalue").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".relative").innerHTML = +afrReRound + "%";
    document.querySelector(".textrelative").innerHTML = "Relative to total world's emission";
    document.querySelector(".growth").innerHTML = +AfrEmiAnstiegRound + "%";
    document.querySelector(".textgrowth").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector(".absolute").innerHTML = +unterschiedAfrAbsolute * 1000;
    document.querySelector(".textabsolute").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".chart").setAttribute("Style", "height: 3.97%");
}
/* Asia */
document.querySelector(".asia").addEventListener("click", AsiaFu);
var asia18 = 16.274;
var asia08 = 12.955;
var asiaRe = (asia18 / world18) * 100;
var asiaReRound = asiaRe.toFixed(2);
var unterschiedAsia = 16.274 - 12.955;
var unterschiedAsiaAbsolute = unterschiedAsia.toFixed(2);
var asiaEmiAnstieg = (unterschiedAsia / asia18) * 100;
var asiaEmiAnstiegRound = asiaEmiAnstieg.toFixed(2);
function AsiaFu() {
    document.querySelector("#titleRegion").innerHTML = "Asia";
    document.querySelector(".value").innerHTML = +asia18;
    document.querySelector(".textvalue").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector(".relative").innerHTML = +asiaReRound + "%";
    document.querySelector(".textrelative").innerHTML = "Relative to total world's emission";
    document.querySelector(".growth").innerHTML = +asiaEmiAnstiegRound + "%";
    document.querySelector(".textgrowth").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector(".absolute").innerHTML = +unterschiedAsiaAbsolute * 1000;
    document.querySelector(".textabsolute").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".chart").setAttribute("Style", "height: 52.3%");
}
/* Australia */
document.querySelector(".australia").addEventListener("click", AustraliaFu);
var australia18 = 2.101;
var australia08 = 1.993;
var australiaRe = (australia18 / world18) * 100;
var australiaReRound = australiaRe.toFixed(2);
var unterschiedAustralia = 2.101 - 1.993;
var unterschiedAustraliaAbsolute = unterschiedAustralia.toFixed(2);
var australiaEmiAnstieg = (unterschiedAustralia / australia18) * 100;
var australiaEmiAnstiegRound = australiaEmiAnstieg.toFixed(2);
function AustraliaFu() {
    document.querySelector("#titleRegion").innerHTML = "Australia";
    document.querySelector(".value").innerHTML = +australia18;
    document.querySelector(".textvalue").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector(".relative").innerHTML = +australiaReRound + "%";
    document.querySelector(".textrelative").innerHTML = "Relative to total world's emission";
    document.querySelector(".growth").innerHTML = +australiaEmiAnstiegRound + "%";
    document.querySelector(".textgrowth").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector(".absolute").innerHTML = +unterschiedAustraliaAbsolute * 1000;
    document.querySelector(".textabsolute").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".chart").setAttribute("Style", "height: 6.75%");
}
//# sourceMappingURL=Emissionswerte.js.map