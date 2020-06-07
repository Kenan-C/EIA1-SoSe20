"use strict";
var world18 = 1.236 + 1.262 + 4.209 + 6.036 + 16.274 + 2.101;
/* Emission Europe */
var euro18 = 4.209;
var euro08 = 4.966;
var euroRe = (euro18 / world18) * 100;
var euroReRound = euroRe.toFixed(2);
var unterschiedEU = 4.209 - 4.966;
var unterschiedEUAbsolute = unterschiedEU.toFixed(2);
var euroEmiAnstieg = (unterschiedEU / euro18) * 100;
var euroEmiAnstiegRound = euroEmiAnstieg.toFixed(2);
/* Emission North America */
var noam18 = 6.036;
var noam08 = 6.600;
var noamRe = (noam18 / world18) * 100;
var noamReRound = noamRe.toFixed(2);
var unterschiedNA = 6.036 - 6.600;
var unterschiedNAAbsolute = unterschiedNA.toFixed(2);
var noamEmiAnstieg = (unterschiedNA / noam18) * 100;
var noamEmiAnstiegRound = noamEmiAnstieg.toFixed(2);
/* Emission South America */
var soam18 = 1.262;
var soam08 = 1.133;
var soamRe = (soam18 / world18) * 100;
var soamReRound = soamRe.toFixed(2);
var unterschiedSA = 1.262 - 1.133;
var unterschiedSAAbsolute = unterschiedSA.toFixed(2);
var soamEmiAnstieg = (unterschiedSA / soam18) * 100;
var soamEmiAnstiegRound = soamEmiAnstieg.toFixed(2);
/* Emission Africa */
var afr18 = 1.236;
var afr08 = 1.028;
var afrRe = (afr18 / world18) * 100;
var afrReRound = afrRe.toFixed(2);
var unterschiedAfr = 1.236 - 1.028;
var unterschiedAfrAbsolute = unterschiedAfr.toFixed(2);
var AfrEmiAnstieg = (unterschiedAfr / afr18) * 100;
var AfrEmiAnstiegRound = AfrEmiAnstieg.toFixed(2);
/* Emission Asia */
var asia18 = 16.274;
var asia08 = 12.955;
var asiaRe = (asia18 / world18) * 100;
var asiaReRound = asiaRe.toFixed(2);
var unterschiedAsia = 16.274 - 12.955;
var unterschiedAsiaAbsolute = unterschiedAsia.toFixed(2);
var asiaEmiAnstieg = (unterschiedAsia / asia18) * 100;
var asiaEmiAnstiegRound = asiaEmiAnstieg.toFixed(2);
/* Emission Australia */
var australia18 = 2.101;
var australia08 = 1.993;
var australiaRe = (australia18 / world18) * 100;
var australiaReRound = australiaRe.toFixed(2);
var unterschiedAustralia = 2.101 - 1.993;
var unterschiedAustraliaAbsolute = unterschiedAustralia.toFixed(2);
var australiaEmiAnstieg = (unterschiedAustralia / australia18) * 100;
var australiaEmiAnstiegRound = australiaEmiAnstieg.toFixed(2);
/* Textausgabe Europa*/
console.log("Die Emission von Europa ist: " + euro18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit: " + euroReRound + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + euroEmiAnstiegRound + "% verändert");
console.log("2018 im vergleich zu 2008 sind das " + unterschiedEUAbsolute * 1000 + " kg CO2");
/* Textausgabe Nordamerika*/
console.log("Die Emission von Nordamerika ist: " + noam18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit: " + noamReRound + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + noamEmiAnstiegRound + "% verändert");
console.log("2018 im vergleich zu 2008 sind das " + unterschiedNAAbsolute * 1000 + " kg CO2");
/* Textausgabe Südamerika*/
console.log("Die Emission von Südamerika ist: " + soam18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit: " + soamReRound + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + soamEmiAnstiegRound + "% verändert");
console.log("2018 im vergleich zu 2008 sind das " + unterschiedSAAbsolute * 1000 + " kg CO2");
/* Textausgabe Afrika*/
console.log("Die Emission von Afrika ist: " + afr18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit: " + afrReRound + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + AfrEmiAnstiegRound + "% verändert");
console.log("2018 im vergleich zu 2008 sind das " + unterschiedAfrAbsolute * 1000 + " kg CO2");
/* Textausgabe Asien*/
console.log("Die Emission von Asien ist: " + asia18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit: " + asiaReRound + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asiaEmiAnstiegRound + "% verändert");
console.log("2018 im vergleich zu 2008 sind das " + unterschiedAsiaAbsolute * 1000 + " kg CO2");
/* Textausgabe Australien*/
console.log("Die Emission von Australien ist: " + australia18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit: " + australiaReRound + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + australiaEmiAnstiegRound + "% verändert");
console.log("2018 im vergleich zu 2008 sind das " + unterschiedAustraliaAbsolute * 1000 + " kg CO2");
//# sourceMappingURL=Emissionswerte.js.map