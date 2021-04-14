'use strict'

//Hello welcome to my lab 7 code , the side notes are just a refrence for me when I get back later to the code as it was huge brainstorming lab 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}


let mainsection = document.getElementById("special");
let tableBuild = document.createElement('table');
mainsection.appendChild(tableBuild);

let workingHours = [' at 6am ',' at 7am ',' at 8am ',' at 9am ',' at 10am ',' at 11am ',' at 12pm ',' at 1pm ',' at 2pm ',' at 3pm ',' at 4pm ', ' at 5pm ', ' at 6pm ', ' at 7pm '];


// Constructor Function
let arrofObjects= [];

function Location (locationName,minHourlyCust,maxHourlyCus,avgCookPerOneCust){
this.locationName = locationName;
this.minHourlyCust = minHourlyCust;
this.maxHourlyCus = maxHourlyCus;
this.avgCookPerOneCust = avgCookPerOneCust;
this.cookPerHour = [];
this.randHourlyCust = [];
this.listCookPurchHour = [];
arrofObjects.push(this);
console.log(this);
}

// Creating objects

let seattle = new Location('Seatle',23,65,6.3);
let tokyo = new Location('Tokyo',3,24,1.2);
let dubai = new Location('Dubai',11,38,3.7);
let paris = new Location('Paris',20,38,2.3);
let lima = new Location('Lima',2,16,4.6);

//Creating methods

Location.prototype.randomHourlyCust = function(){
    
    for (let i=0; i<=13; i++){
         
        this.randHourlyCust.push(getRandomIntInclusive(this.minHourlyCust,this.maxHourlyCus));
        
         console.log(this.randHourlyCust[i]);
          
        }
        
}
//console.log(seattle.randHourlyCust[1]);
Location.prototype.cookiesPerHour = function(){
    for (let i=0; i<=13; i++){
        this.cookPerHour.push(this.randHourlyCust[i]*Math.round(this.avgCookPerOneCust)); 
       
        this.listCookPurchHour.push(`${workingHours[i]} : ${this.cookPerHour[i]} Cookies`);
        
        };
}
//calling methods for all locations 
for(let i=0; i< arrofObjects.length; i++){
    arrofObjects[i].randomHourlyCust();
    arrofObjects[i].cookiesPerHour();
    
    //console.log(arrofObjects[i]);
}




//adding table headings
function tableHead (){
    let tableRow1 = document.createElement('tr');
    tableBuild.appendChild(tableRow1);
    let tableHeadEmp= document.createElement('th');
    tableRow1.appendChild(tableHeadEmp);
    tableHeadEmp.textContent = ' ';
    for(let i=0; i< workingHours.length;i++){
    let tableHead1= document.createElement('th');
    tableRow1.appendChild(tableHead1);
    tableHead1.textContent = `| ${workingHours[i]} |`;
    
    }
    let tableHeadTot=document.createElement('th');
    tableRow1.appendChild(tableHeadTot);
    tableHeadTot.textContent = ' Daily Location Total';
}
tableHead();
//adding Table rows

Location.prototype.creatingTable = function(){
    let totalLocat = 0;
    let tableRow2= document.createElement('tr');
    tableBuild.appendChild(tableRow2);
    let tableRowMain = document.createElement('td')
    tableRow2.appendChild(tableRowMain);
    tableRowMain.textContent= `${this.locationName} `;   
    for (let i=0; i < workingHours.length; i++){
        
        let tableData = document.createElement('td');
        tableRow2.appendChild(tableData);
        tableData.textContent = this.cookPerHour[i];
        totalLocat = totalLocat + this.cookPerHour[i];
    }
    let tableTotalLoc = document.createElement('td');
    tableRow2.appendChild(tableTotalLoc);
    tableTotalLoc.textContent = totalLocat;
};

//calling creatingTable function

for(let i=0; i< arrofObjects.length; i++){
    arrofObjects[i].creatingTable();
}


//Adding table footer

function tableFooter(){
    let oneHourTotal = 0;// outside the first for loop in order to use it inside both for loop
    let allHourTotl = 0;
    let tableFootRow = document.createElement('tr');
    tableBuild.appendChild(tableFootRow);
    let tableHeadSum= document.createElement('td');
    tableFootRow.appendChild(tableHeadSum);
    tableHeadSum.textContent = ' Totals ';
    for(let y=0; y < workingHours.length;y++){
    let tableFooterData= document.createElement('td');
    tableFootRow.appendChild(tableFooterData);

    oneHourTotal = 0; //in order not add the summation of the first hour -for all objects- to the second hour and so on
    for(let i =0; i <arrofObjects.length; i++){
    oneHourTotal = oneHourTotal + arrofObjects[i].cookPerHour[y]; // I used y in order to have the summation for the each hour for all the object
    //console.log(arrofObjects[i].cookPerHour[y]);
    }
    tableFooterData.textContent = oneHourTotal;// in order to create a table data with the content being the summation for each hour
    //console.log(one_hour_total);
    allHourTotl = allHourTotl + oneHourTotal //in order to add the whole first hour total to the second hour and so on
}
let tableLastCell = document.createElement('td');
tableFootRow.appendChild(tableLastCell);
tableLastCell.textContent = allHourTotl;
}
tableFooter();


//adding form for user own creation of shop


const form = document.getElementById('report');
form.addEventListener('submit',creatingShop);
//form.insertBefore('special',);




function creatingShop(event){
    event.preventDefault();
    let shopName = event.target.f1.value;
    console.log(shopName);
    let minValue = parseInt(event.target.f2.value);
    let maxValue = parseInt(event.target.f3.value);
    let avergeValue = parseFloat(event.target.f4.value);
    let newShop = new Location (shopName,minValue,maxValue,avergeValue);
    let table = document.querySelector('table');
    table.deleteRow(6);
    newShop.randomHourlyCust();
    newShop.cookiesPerHour();
    newShop.creatingTable();
    //My REF https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteRow
    //arrofObjects.push(newShop);
    tableFooter();
    
    
    console.log(newShop);
}

 
//console.log(tablefooter);


// Location.prototype.creatingList = function(){
// let h2 = document.createElement('h2');
// mainsection.appendChild(h2);
// h2.textContent= this.locationName;
// let unorderl = document.createElement("ul");
// mainsection.appendChild(unorderl);
// let li = null;
// let totalnum = 0;

// for (let x =0 ; x < workingHours.length; x++){
//  li = document.createElement('li');
// unorderl.appendChild(li);
// li.textContent =`${this.listCookPurch_Hour[x]}`;
// totalnum = totalnum + this.cookPerHour[x];
   
// }
// li = document.createElement('li');
// unorderl.appendChild(li);
// li.textContent = `Total : ${totalnum} Cookies`;
// }



//adding table data
// seattle.randomHourlyCust();
// seattle.cookiesPerHour();
// seattle.creatingList();
// console.log(seattle.randomHourlyCust());
// console.log(arrofObjects);
// //Calling Tokyo

// tokyo.randomHourlyCust();
// tokyo.cookiesPerHour();
// tokyo.creatingList();


// //Calling Dubai

// dubai.randomHourlyCust();
// dubai.cookiesPerHour();
// dubai.creatingList();

// //Calling Paris

// paris.randomHourlyCust();
// paris.cookiesPerHour();
// paris.creatingList();

// //Calling Lima

// lima.randomHourlyCust();
// lima.cookiesPerHour();
// lima.creatingList();
