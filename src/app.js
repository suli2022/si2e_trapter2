/*
* File: app.js
* Author: Sallai András
* Copyright: 2023, Sallai András
* Group: Szoft I-2 E
* Date: 2023-01-26
* Github: https://github.com/andteki/
* Licenc: GNU GPL
*/

const asideElem = document.querySelector("#aside");
const bsideElem = document.querySelector("#bside");
const csideElem = document.querySelector("#cside");
const dsideElem = document.querySelector("#dside");
const calcButton = document.querySelector("#calcButton");
const areaElem = document.querySelector("#area");

calcButton.addEventListener('click', () => {
    //a=13, b=4, c=7, d=4
//    console.log('műkdik') 
   let aside = Number(asideElem.value);
   let bside = Number(bsideElem.value);
   let cside = Number(csideElem.value);
   let dside = Number(dsideElem.value);
//    console.log(aside)
   let area = calcArea(aside, bside, cside, dside);
   areaElem.value = area;
});

function calcArea(a, b, c, d) {
    let terulet = ( (a + c)/(4*(a-c)) ) 
    * Math.sqrt(
        (a+b-c+d)*
        (a-b-c+d)*
        (a+b-c-d)*
        (-a+b+c+d)
    )
    return terulet;
}
