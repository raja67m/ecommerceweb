let iName=document.getElementById('itemName');
let iPrice=document.getElementById('itemPrice');
let iImage=document.getElementById('itemImage');
const productData=[
   {
      id:1,
      itemName:"headPhone",
      itemPrice:"23$",
       image:"./images/head/head-01.jpg" 
}
];

 let productCard=document.getElementById('card-container');
let acceptData=()=>{
productData.push({
 itemName  
})
}
let proData=()=>{
   productCard.innerHTML="";
   data.map((x,y)=>{
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
                  </div>`)
   })
}