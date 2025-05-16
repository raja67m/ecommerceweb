
 let productCard=document.getElementById('card-container');
 let recommendedProduct=document.getElementById('cardWarpper');
const productData=[
   {
      "id":1,
      "itemName":"headPhone",
      "itemPrice":"23$",
       "image":"./images/head/head-01.jpg" 
}
];

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
                       <p>${x.itemPrice}</p>
                       <div class="card-btns">
                       <button class="add-btn">Add Card</button>
                       <button class="buy-btn">Buy Now</button>
                       </div>
                     </div>
                  </div>`
               );
   })
   recommedData();
}
