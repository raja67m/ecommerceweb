let scrollContainer=document.querySelector('.cardWarpper');
let nextBtn=document.getElementById('nextBtn');
let backBtn=document.getElementById('backBtn');

// image scroll bar

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehaviour="smooth";

});
//  scroll left & right buttons

nextBtn.addEventListener('click',()=>{
    scrollContainer.scrollLeft += 1000;
    scrollContainer.style.scrollBehaviour="smooth";
})
backBtn.addEventListener('click',()=>{
    scrollContainer.scrollLeft -= 1000;
    scrollContainer.style.scrollBehaviour="smooth";
})