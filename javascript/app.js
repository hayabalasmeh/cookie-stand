

'use strict'


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}


//Adding seatle location


const seattle = {
minHourlyCust: 23,
maxHourlyCust: 65,
avgCookPerOneCust: 6.3,
cookPerHour:[],
randHourlyCust:[],
workingHours:['at 6am','at 7am','at 8am','at 9am','at 10am','at 11am','at 12pm','at 1pm','at 2pm','at 3pm','at 4pm', 'at 5pm', 'at 6pm', 'at 7pm'],
listRandcustomer_Hour:[],
listCookPurch_Hour:[],

randomHourlyCust:function(){
   
    for (let i=0; i<=13; i++){
        
this.randHourlyCust.push(getRandomIntInclusive(this.minHourlyCust,this.maxHourlyCust));
 this.listRandcustomer_Hour[i]= (`${this.workingHours[i]} : ${this.randHourlyCust[i]}`);
 //console.log(this.listRandcustomer_Hour[i]);
    }

},
cookiesPerHour:function(){
    for (let i=0; i<=13; i++){
    this.cookPerHour[i] = this.randHourlyCust[i]*Math.round(this.avgCookPerOneCust); 
    //console.log(this.cookPerHour[i]);
    this.listCookPurch_Hour [i]= (`${this.workingHours[i]} : ${this.cookPerHour[i]}`);
    this.cookPerHour.push(this.cookPerHour[i]);
    //console.log(this.listCookPurch_Hour[i]);
    };
},
creatingList: function(){
let mainsection = document.getElementById("special");
let unorderl = document.createElement("ul");
mainsection.appendChild(unorderl);
let li = null;
let totalnum = 0;

for (let x =0 ; x < this.workingHours.length; x++){
 li = document.createElement('li');
unorderl.appendChild(li);
li.textContent =`${this.listCookPurch_Hour[x]}`;
totalnum = totalnum + this.cookPerHour[x];
   //console.log(li.textContent);
}
li = document.createElement('li');
unorderl.appendChild(li);
li.textContent = `Total : ${totalnum}`;
},

}


seattle.randomHourlyCust();
seattle.cookiesPerHour();
seattle.creatingList();



//Adding Tokyo location
  
const Tokyo = {
    minHourlyCust: 3,
    maxHourlyCust: 24,
    avgCookPerOneCust: 1.2,
    cookPerHour:[],
    randHourlyCust:[],
    workingHours:['at 6am','at 7am','at 8am','at 9am','at 10am','at 11am','at 12pm','at 1pm','at 2pm','at 3pm','at 4pm', 'at 5pm', 'at 6pm', 'at 7pm'],
    listRandcustomer_Hour:[],
    listCookPurch_Hour:[],
    
    randomHourlyCust:function(){
       
        for (let i=0; i<=13; i++){
            
    this.randHourlyCust.push(getRandomIntInclusive(this.minHourlyCust,this.maxHourlyCust));
     this.listRandcustomer_Hour[i]= (`${this.workingHours[i]} : ${this.randHourlyCust[i]}`);
     //console.log(this.listRandcustomer_Hour[i]);
        }
    
    },
    cookiesPerHour:function(){
        for (let i=0; i<=13; i++){
        this.cookPerHour[i] = this.randHourlyCust[i]*Math.round(this.avgCookPerOneCust); 
        //console.log(this.cookPerHour[i]);
        this.listCookPurch_Hour [i]= (`${this.workingHours[i]} : ${this.cookPerHour[i]}`);
        this.cookPerHour.push(this.cookPerHour[i]);
        //console.log(this.listCookPurch_Hour[i]);
        };
    },
    creatingList: function(){
    let mainsection = document.getElementById("special");
    let unorderl = document.createElement("ul");
    mainsection.appendChild(unorderl);
    let li = null;
    let totalnum = 0;
    
    for (let x =0 ; x < this.workingHours.length; x++){
     li = document.createElement('li');
    unorderl.appendChild(li);
    li.textContent =`${this.listCookPurch_Hour[x]}`;
    totalnum = totalnum + this.cookPerHour[x];
       //console.log(li.textContent);
    }
    li = document.createElement('li');
    unorderl.appendChild(li);
    li.textContent = `Total : ${totalnum}`;
    },
    
    }
    
    
    Tokyo.randomHourlyCust();
    Tokyo.cookiesPerHour();
    Tokyo.creatingList();



    //Adding Dubai location

    const Dubai = {
        minHourlyCust: 11,
        maxHourlyCust: 38,
        avgCookPerOneCust: 3.7,
        cookPerHour:[],
        randHourlyCust:[],
        workingHours:['at 6am','at 7am','at 8am','at 9am','at 10am','at 11am','at 12pm','at 1pm','at 2pm','at 3pm','at 4pm', 'at 5pm', 'at 6pm', 'at 7pm'],
        listRandcustomer_Hour:[],
        listCookPurch_Hour:[],
        
        randomHourlyCust:function(){
           
            for (let i=0; i<=13; i++){
                
        this.randHourlyCust.push(getRandomIntInclusive(this.minHourlyCust,this.maxHourlyCust));
         this.listRandcustomer_Hour[i]= (`${this.workingHours[i]} : ${this.randHourlyCust[i]}`);
         //console.log(this.listRandcustomer_Hour[i]);
            }
        
        },
        cookiesPerHour:function(){
            for (let i=0; i<=13; i++){
            this.cookPerHour[i] = this.randHourlyCust[i]*Math.round(this.avgCookPerOneCust); 
            //console.log(this.cookPerHour[i]);
            this.listCookPurch_Hour [i]= (`${this.workingHours[i]} : ${this.cookPerHour[i]}`);
            this.cookPerHour.push(this.cookPerHour[i]);
            //console.log(this.listCookPurch_Hour[i]);
            };
        },
        creatingList: function(){
        let mainsection = document.getElementById("special");
        let unorderl = document.createElement("ul");
        mainsection.appendChild(unorderl);
        let li = null;
        let totalnum = 0;
        
        for (let x =0 ; x < this.workingHours.length; x++){
         li = document.createElement('li');
        unorderl.appendChild(li);
        li.textContent =`${this.listCookPurch_Hour[x]}`;
        totalnum = totalnum + this.cookPerHour[x];
           //console.log(li.textContent);
        }
        li = document.createElement('li');
        unorderl.appendChild(li);
        li.textContent = `Total : ${totalnum}`;
        },
        
        }
        
        
        Dubai.randomHourlyCust();
        Dubai.cookiesPerHour();
        Dubai.creatingList();


        //Adding Paris location
        const Paris = {
            minHourlyCust: 20,
            maxHourlyCust: 38,
            avgCookPerOneCust: 2.3,
            cookPerHour:[],
            randHourlyCust:[],
            workingHours:['at 6am','at 7am','at 8am','at 9am','at 10am','at 11am','at 12pm','at 1pm','at 2pm','at 3pm','at 4pm', 'at 5pm', 'at 6pm', 'at 7pm'],
            listRandcustomer_Hour:[],
            listCookPurch_Hour:[],
            
            randomHourlyCust:function(){
               
                for (let i=0; i<=13; i++){
                    
            this.randHourlyCust.push(getRandomIntInclusive(this.minHourlyCust,this.maxHourlyCust));
             this.listRandcustomer_Hour[i]= (`${this.workingHours[i]} : ${this.randHourlyCust[i]}`);
             //console.log(this.listRandcustomer_Hour[i]);
                }
            
            },
            cookiesPerHour:function(){
                for (let i=0; i<=13; i++){
                this.cookPerHour[i] = this.randHourlyCust[i]*Math.round(this.avgCookPerOneCust); 
                //console.log(this.cookPerHour[i]);
                this.listCookPurch_Hour [i]= (`${this.workingHours[i]} : ${this.cookPerHour[i]}`);
                
                
                //console.log(this.listCookPurch_Hour[i]);
                };
            },
            creatingList: function(){
            let mainsection = document.getElementById("special");
            let unorderl = document.createElement("ul");
            mainsection.appendChild(unorderl);
            let li = null;
            let totalnum = 0;
            
            for (let x =0 ; x < this.workingHours.length; x++){
             li = document.createElement('li');
            unorderl.appendChild(li);
            li.textContent =`${this.listCookPurch_Hour[x]}`;
            
            totalnum = totalnum + this.cookPerHour[x];
               //console.log(li.textContent);
            }
            li = document.createElement('li');
            unorderl.appendChild(li);
            li.textContent = `Total : ${totalnum}`;
            },
            
            }
            
           
            Paris.randomHourlyCust();
            Paris.cookiesPerHour();
            Paris.creatingList();
            


            //Adding lima location

            const Lima = {
                minHourlyCust: 2,
                maxHourlyCust: 16,
                avgCookPerOneCust: 4.6,
                cookPerHour:[],
                randHourlyCust:[],
                workingHours:['at 6am','at 7am','at 8am','at 9am','at 10am','at 11am','at 12pm','at 1pm','at 2pm','at 3pm','at 4pm', 'at 5pm', 'at 6pm', 'at 7pm'],
                listRandcustomer_Hour:[],
                listCookPurch_Hour:[],
                
                randomHourlyCust:function(){
                   
                    for (let i=0; i<=13; i++){
                        
                this.randHourlyCust.push(getRandomIntInclusive(this.minHourlyCust,this.maxHourlyCust));
                 this.listRandcustomer_Hour[i]= (`${this.workingHours[i]} : ${this.randHourlyCust[i]}`);
                 //console.log(this.listRandcustomer_Hour[i]);
                    }
                
                },
                cookiesPerHour:function(){
                    for (let i=0; i<=13; i++){
                    this.cookPerHour[i] = this.randHourlyCust[i]*Math.round(this.avgCookPerOneCust); 
                    //console.log(this.cookPerHour[i]);
                    this.listCookPurch_Hour [i]= (`${this.workingHours[i]} : ${this.cookPerHour[i]}`);
                    
                    
                    //console.log(this.listCookPurch_Hour[i]);
                    };
                },
                creatingList: function(){
                let mainsection = document.getElementById("special");
                let unorderl = document.createElement("ul");
                mainsection.appendChild(unorderl);
                let li = null;
                let totalnum = 0;
                
                for (let x =0 ; x < this.workingHours.length; x++){
                 li = document.createElement('li');
                unorderl.appendChild(li);
                li.textContent =`${this.listCookPurch_Hour[x]}`;
                
                totalnum = totalnum + this.cookPerHour[x];
                   //console.log(li.textContent);
                }
                li = document.createElement('li');
                unorderl.appendChild(li);
                li.textContent = `Total : ${totalnum}`;
                },
                
                }
                
               
                Lima.randomHourlyCust();
                Lima.cookiesPerHour();
                Lima.creatingList();