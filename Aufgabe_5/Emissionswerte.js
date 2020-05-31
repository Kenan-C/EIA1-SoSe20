"use strict";
/* Emission Africa */
var emiafrica = 1.028 + 1.042 + 1.072 + 1.074 + 1.107 + 1.134 + 1.167 + 1.174 + 1.192 + 1.207 + 1.235;
var africa18 = 1.235;
var africa08 = 1.028;
var afChange = africa08 - africa18;
/* Emission South America */
var emisouthamerica = 1.133 + 1.093 + 1.164 + 1.215 + 1.262 + 1.309 + 1.331 + 1.322 + 1.295 + 1.279 + 1.261;
var southamerica18 = 1.261;
var southamerica08 = 1.133;
var saChange = southamerica08 - southamerica18;
/* Emission Europe */
var emieurope = 4.966 + 4.616 + 4.706 + 4.615 + 4.541 + 4.437 + 4.202 + 4.192 + 4.247 + 4.279 + 4.209;
var europe18 = 4.209;
var europe08 = 4.966;
var euChange = europe08 - europe18;
/* Emission North America */
var eminorthamerica = 6.600 + 6.140 + 5.376 + 6.262 + 5.999 + 6.167 + 6.269 + 6.049 + 5.938 + 5.920 + 6.036;
var northamerica18 = 6.036;
var northamerica08 = 6.600;
var naChange = northamerica08 - northamerica18;
/* Emission Asia */
var emiasia = 12.956 + 13.247 + 13.987 + 14.860 + 15.309 + 15.660 + 15.787 + 15.877 + 15.984 + 16.274 + 16.274;
var asia18 = 16.274;
var asia08 = 12.955;
var asChange = asia08 - asia18;
/* Emission Australia */
var emiaustralia = 1.993 + 1.876 + 1.939 + 2.035 + 1.063 + 2.015 + 2.028 + 1.987 + 1.997 + 2.001 + 2.100;
var australia18 = 2.100;
var australia08 = 1.993;
var auChange = australia08 - australia18;
/* Emission Welt */
var emiwelt = emiafrica + emisouthamerica + emieurope + eminorthamerica + emiasia + emiaustralia;
var afWelt = (emiafrica / emiwelt) * 100;
var saWelt = (emisouthamerica / emiwelt) * 100;
var euWelt = (emieurope / emiwelt) * 100;
var naWelt = (eminorthamerica / emiwelt) * 100;
var asWelt = (emiasia / emiwelt) * 100;
var auWelt = (emiaustralia / emiwelt) * 100;
var afPro = (afChange / emiafrica) * 100;
var saPro = (saChange / emisouthamerica) * 100;
var euPro = (euChange / emieurope) * 100;
var naPro = (naChange / eminorthamerica) * 100;
var asPro = (asChange / emiasia) * 100;
var auPro = (auChange / emiaustralia) * 100;
/* Textausgabe Afrika*/
console.log("Die Emission von Afrika ist: " + emiafrica + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit: " + afWelt + "%");
console.log("Für Afrika hat sich im Vergleich zu 2008 die Emission um " + afPro + "% verändert");
console.log("2018 im vergleich zu 2008 sind das " + afChange + " kg CO2");
/* Textausgabe Südamerika*/
console.log("Die Emission von Südamerika ist: " + emisouthamerica + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit: " + saWelt + "%");
console.log("Für Südamerika hat sich im Vergleich zu 2008 die Emission um " + saPro + "% verändert");
console.log("2018 im vergleich zu 2008 sind das " + saChange + " kg CO2");
/* Textausgabe Europa*/
console.log("Die Emission von Europa ist: " + emieurope + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit: " + euWelt + "%");
console.log("Für Europa hat sich im Vergleich zu 2008 die Emission um " + euPro + "% verändert");
console.log("2018 im vergleich zu 2008 sind das " + euChange + " kg CO2");
/* Textausgabe Nordamerika*/
console.log("Die Emission von Nordamerika ist: " + eminorthamerica + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit: " + naWelt + "%");
console.log("Für Nordamerika hat sich im Vergleich zu 2008 die Emission um " + naPro + "% verändert");
console.log("2018 im vergleich zu 2008 sind das " + naChange + " kg CO2");
/* Textausgabe Asien*/
console.log("Die Emission von Asien ist: " + emiasia + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit: " + asWelt + "%");
console.log("Für Asien hat sich im Vergleich zu 2008 die Emission um " + asPro + "% verändert");
console.log("2018 im vergleich zu 2008 sind das " + asChange + " kg CO2");
/* Textausgabe Australien*/
console.log("Die Emission von Australien ist: " + emiaustralia + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit: " + auWelt + "%");
console.log("Für Australien hat sich im Vergleich zu 2008 die Emission um " + auPro + "% verändert");
console.log("2018 im vergleich zu 2008 sind das " + auChange + " kg CO2");
//# sourceMappingURL=Emissionswerte.js.map