'use strict'


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

let mainsection = document.getElementById("special");
let table = document.createElement('table');
mainsection.appendChild(table);

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
this.listCookPurch_Hour = [];
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
         
        this.randHourlyCust[i]=this.randHourlyCust.push(getRandomIntInclusive(this.minHourlyCust,this.maxHourlyCust));
        
         console.log(this.randHourlyCust[i]);
          
        }
        
}
//console.log(seattle.randHourlyCust[1]);
Location.prototype.cookiesPerHour = function(){
    for (let i=0; i<=13; i++){
        this.cookPerHour.push(this.randHourlyCust[i]*Math.round(this.avgCookPerOneCust)); 
       
        this.listCookPurch_Hour.push(`${workingHours[i]} : ${this.cookPerHour[i]} Cookies`);
        
        };
}
//calling methods for all locations 
for(let i=0; i< arrofObjects.length; i++){
    arrofObjects[i].randomHourlyCust();
    arrofObjects[i].cookiesPerHour();
    
    //console.log(arrofObjects[i]);
}




//adding table headings
function tablehead (){
    let tablerow1 = document.createElement('tr');
    table.appendChild(tablerow1);
    let tableheademp= document.createElement('th');
    tablerow1.appendChild(tableheademp);
    tableheademp.textContent = ' ';
    for(let i=0; i< workingHours.length;i++){
    let tablehead1= document.createElement('th');
    tablerow1.appendChild(tablehead1);
    tablehead1.textContent = `| ${workingHours[i]} |`;
    
    }
    let tableheadtot=document.createElement('th');
    tablerow1.appendChild(tableheadtot);
    tableheadtot.textContent = ' Daily Location Total';
}
tablehead();

Location.prototype.creatingTable = function(){
    let totalLocat = 0;
    let tablerow2= document.createElement('tr');
    table.appendChild(tablerow2);
    let tablerowmain = document.createElement('td')
    tablerow2.appendChild(tablerowmain);
    tablerowmain.textContent= `${this.locationName} |`;   
    for (let i=0; i < workingHours.length; i++){
        
        let tabledata = document.createElement('td');
        tablerow2.appendChild(tabledata);
        tabledata.textContent = this.cookPerHour[i];
        totalLocat = totalLocat + this.cookPerHour[i];
    }
    let table_total_loc = document.createElement('td');
    tablerow2.appendChild(table_total_loc);
    table_total_loc.textContent = totalLocat;
};
for(let i=0; i< arrofObjects.length; i++){
    arrofObjects[i].creatingTable();}

    Location.prototype.adding_one_our = function(){
    
    }

function tablefooter(){
    let one_hour_total = 0;
    let all_hour_totl = 0;
    let tablefootrow = document.createElement('tr');
    table.appendChild(tablefootrow);
    let tableheademp2= document.createElement('td');
    tablefootrow.appendChild(tableheademp2);
    tableheademp2.textContent = ' Totals | ';
    for(let y=0; y< workingHours.length;y++){
    let tablefooterdata= document.createElement('td');
    tablefootrow.appendChild(tablefooterdata);
    for(let i =0; i <arrofObjects.length; i++){
    one_hour_total = one_hour_total + arrofObjects[i].cookPerHour[y];
    console.log(arrofObjects[i].cookPerHour[y]);
    }
    tablefooterdata.textContent = one_hour_total;
    console.log(one_hour_total);
    all_hour_totl = all_hour_totl+ one_hour_total
}
let tablelastcell = document.createElement('td');
tablefootrow.appendChild(tablelastcell);
tablelastcell.textContent = all_hour_totl;
}
tablefooter();



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
