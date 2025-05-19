
 let productCard=document.getElementById('card-container');
 let recommendedProduct=document.getElementById('cardWarpper');
 let countScreen=document.getElementById('addNum');
 let displayBillingTable=document.getElementById('billingContainer');
 let addCard=document.getElementById('cart');
 let addCardClose=document.getElementById('Close');

 let count=0;

//  all product data set

const productData=[
   {
      "id":1,
      "itemName":"headPhone",
      "itemPrice":"23$",
      "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
       "image":"./images/head/head-01.jpg" 
},
{
   "id":2,
   "itemName":"Lenovo",
   "itemPrice":"300$",
   "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/laptop/lap-1.jpg"
},
{
   "id":3,
   "itemName":"Hp laptop",
   "itemPrice":"350$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/laptop/lap-2.jpg" 
},
{
   "id":4,
   "itemName":"sony",
   "itemPrice":"30$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/head/head-05.jpg" 
},
{
   "id":5,
   "itemName":"ultra Headset",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "itemPrice":"30$",
   "image":"./images/head/head-03.jpg" 
},
{
   "id":6,
   "itemName":"ssd",
   "itemPrice":"320$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/hardware/ssd_04.jpg" 
},
{
   "id":7,
   "itemName":"Intel Process",
   "itemPrice":"250$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/hardware/intel_02.jpg" 
},
{
   "id":8,
   "itemName":"Pendrive",
   "itemPrice":"20$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/hardware/pendrive_03.jpg" 
},
{
   "id":9,
   "itemName":"Hard Disk",
   "itemPrice":"320$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/hardware/harddisk_01.jpg" 
},
{
   "id":10,
   "itemName":"Acer",
   "itemPrice":"1000$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/laptop/lap4.jpg" 
},
{
   "id":11,
   "itemName":"Hp New",
   "itemPrice":"1200$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/laptop/lap.jpg" 
},
{
   "id":12,
   "itemName":"Oppo A38",
   "itemPrice":"600$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/phone/oppo_03.jpg" 
},
{
   "id":13,
   "itemName":"Iphone",
   "itemPrice":"4000$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/phone/iphone_01.jpg" 
},
{
   "id":14,
   "itemName":"iphone max",
   "itemPrice":"10000$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/phone/iphone_02.jpg" 
},
{
   "id":15,
   "itemName":"Redmi 6",
   "itemPrice":"4000$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/phone/redmi_05.jpg" 
},
{
   "id":16,
   "itemName":"Bluetooth Speaker",
   "itemPrice":"200$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/bluetooth/blueHeadset_02.jpg" 
},
{
   "id":17,
   "itemName":"JBL",
   "itemPrice":"250$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/bluetooth/blueSpeaker_01.jpg" 
},
{
   "id":19,
   "itemName":"JBL Max",
   "itemPrice":"400$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/bluetooth/blueToothSpeaker_03.jpg" 
},
{
   "id":20,
   "itemName":"Connon",
   "itemPrice":"600$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/camera/camera_02.jpg" 
},
{
   "id":21,
   "itemName":"Camera Pro",
   "itemPrice":"800$",
    "itemDes":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   "image":"./images/camera/camera_01.jpg" 
},
];

// product recomed data set

const recommendedData=[
   {
      "id":1,
      "recomName":"HeadPhone",
      "recomPrice":"50$",
      "recomImage":"./images/head/head-01.jpg" 
   },
   {
      "id":2,
       "recomName":"Lenova",
       "recomPrice":"400$",
       "recomImage":"./images/laptop/lap-1.jpg"
   },
   {
      "id":3,
      "recomName":"Headset",
      "recomPrice":"120$",
     "recomImage":"./images/bluetooth/blueHeadset_02.jpg"
   },
   {
      "id":4,
      "recomName":"Iphone",
      "recomPrice":"200$",
      "recomImage":"./images/phone/iphone_01.jpg"
   },
   {
      "id":5,
      "recomName":"HP Laptop",
      "recomPrice":"400$",
      "recomImage":"./images/laptop/lap-2.jpg"
   },
    {
      "id":6,
      "recomName":"Camera",
      "recomPrice":"800$",
      "recomImage":"./images/camera/camera_01.jpg"
   }
]

let recommedData=()=>{
   recommendedProduct.innerHTML="";
   recommendedData.map((x,y)=>{
      return (recommendedProduct.innerHTML +=`
         <div class="cardView" id=${y}>
             <img src=${x.recomImage} alt="Not visible">
               <div class="cardCat">
                  <p class="productName">${x.recomName}</p>
                  <p class="price">${x.recomPrice}</p>
               </div> 
         </div>

         `)
   })
}


let proData=()=>{
   productCard.innerHTML="";
   productData.map((x,y)=>{
      return (productCard.innerHTML +=`
          <div class="card" id=${y}>
                    <img src=${x.image} alt="Not visible">
                     <div class="card-content">
                       <h5>${x.itemName}</h5>
                       <p class="des">${x.itemDes}</p>
                       <p>${x.itemPrice}</p>
                       <div class="card-btns">
                       <button class="add-btn" onClick="countAddCard()">Add Card</button>
                       <button class="buy-btn">Buy Now</button>
                       </div>
                     </div>
                  </div>`
               );
   })
   recommedData();
}

// addto card count fucntion
function countAddCard(){
   count ++;
   countScreen.innerHTML=count;
   if(count>9){
      countScreen.innerHTML +=  "+";
      }
}

// display & close the billing table
addCard.addEventListener('click',()=>{
   displayBillingTable.style.display="flex";
  countScreen.innerHTML="";
})

addCardClose.addEventListener('click',()=>{
   displayBillingTable.style.display="none";
})
