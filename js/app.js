"use strict"
var myDevices=['deviseName','deviseCategory','quantity'];
var tableEl=document.getElementById('table');
var form =document.getElementById('form');


function getRandomPrice(min,max){
    return Math.floor(Math.random() * (max - min) ) + min; 
}

var devises=[];

function Devise
    (deviseName,
        deviseCategory,
        quantity,
    )
{

   this.deviseName=deviseName;
   this.deviseCategory=deviseCategory;
   this.quantity=quantity;
   this.price=0;
   this.total=0;
   devises.push(this); 
}

Devise.prototype.randomPrice=function(){
this.price=Math.ceil(getRandomPrice(350,750));
}

Devise.prototype.render=function(){
    var rowEl =document.createElement('tr');
    tableEl.appendChild(rowEl);
    var tdEl=document.createElement('td');
    rowEl.appendChild(tdEl);
    tdEl.textContent=this.deviseName;

    var tdEl=document.createElement('td');
    rowEl.appendChild(tdEl);
    tdEl.textContent=this.quantity;

    var tdEl=document.createElement('td');
    rowEl.appendChild(tdEl);
    tdEl.textContent=this.price;

    var tdEl=document.createElement('td');
    rowEl.appendChild(tdEl);
    tdEl.textContent=this.deviseCategory;

    

   
}

function header(){
    var headerRow =document.createElement('tr');
    tableEl.appendChild(headerRow);
    var tdEl=document.createElement('td');
    headerRow.appendChild(tdEl);
    tdEl.textContent="Devise Name";

    var tdEl=document.createElement('td');
    headerRow.appendChild(tdEl);
    tdEl.textContent="Quantity";

    var tdEl=document.createElement('td');
    headerRow.appendChild(tdEl);
    tdEl.textContent="Unit Price";

    var tdEl=document.createElement('td');
    headerRow.appendChild(tdEl);
    tdEl.textContent="Category";
}
header();
for (var j=0 ;j <devises.length;j++){
var newDevise= new Devise(deviseName,deviseCategory,quantity)
newDevise.randomPrice();
newDevise.render();
}

function calculatTotal(){
    var totals=0,
    for (var m=0 ;m<price.length;m++){
        totals+=price[m].this.prices
    }
}
form.addEventListener('submit',addDevise);
function  addDevise(event){
    event.preventDefault();
    var deviseName =event.target.deviseName;
    var deviseCategory=event.target.deviseCategory;
    var quantity=event.target.quantity;

    var newadded= Devise(deviseName,deviseCategory,quantity);
    newadded.randomPrice();
    newadded.render();

    localStorage.setItem('devises',JSON.stringify(devises));

}

if (localStorage.getItem('devises')){
    var storageData=JSON.parse('devises',localStorage.getItem('devises'));
    for (var i=0 ; i<storageData.length;i++){
      var devises=  new Devise(storageData[i].deviseName,storageData[i].deviseCategory,storageData[i].quantity)
      devises[i].randomPrice();
      devises[i].render();
    }
}










