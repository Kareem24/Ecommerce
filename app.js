const displayPicture = document.getElementById('display-picture');// page display picture
const thumbnailBtn = document.querySelectorAll('.thumbnail-btn');
const addItem = document.querySelector('.add')
const itemCount = document.querySelector('.value')
const subtrItem = document.querySelector('.minus');
const addToCart = document.querySelector('.add-to-cart');
const closeModal = document.querySelector('.close-modal');
const cartCounter = document.querySelector('.counter')
const cart = document.getElementById('cart');
const container = document.querySelector('.container-all')
const thumbailOne =document.getElementById('thumb1');
const thumbailTwo =document.getElementById('thumb2');
const thumbailThree =document.getElementById('thumb3');
const thumbailFour =document.getElementById('thumb4');
const modalOne =document.getElementById('modal1');
const modalTwo =document.getElementById('modal2');
const modalThree =document.getElementById('modal3');
const modalFour =document.getElementById('modal4');
const modalbtn = document.querySelectorAll('.modalthumbnail-btn');
const modalPicture = document.getElementById('modal-picture');
const cartTrack = document.querySelector('.cart-track');
const emptyMessage = document.querySelector('.empty');
const cartDetails = document.querySelector('.cart-details')
const multiplier = document.querySelector('.mult');
const multPrice = document.querySelector('.pricing');
const emptyCartList = document.querySelector('.delete-cartBtn');
const nextBtn =document.querySelector('.right');
const prevBtn =document.querySelector('.left');
const checkouBtn = document.querySelector('.checkout');
const navBar =document.querySelector('.navlinks');
const menu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.closeBtn');
console.log(navBar,menu,closeMenu);
//list of the images 
const images =[
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg',

];
//event listener
//function to add modal 
displayPicture.addEventListener('click',function(){
    container.classList.add('modal')
})

// function to remove modal mode 
closeModal.addEventListener('click',function(){
    container.classList.remove('modal')
})
// modal change  picture displayPicture  event
modalbtn.forEach((btn)=>{
    btn.addEventListener('click',changeImage)
})

// thumbnail btn event
thumbnailBtn.forEach((btn)=>{
    btn.addEventListener('click',changeImage)
})

function active(thumb){
    thumb.classList.add('active');
 }//adding active class to the thumbnail
 function removeActive(thumb){
    thumb.classList.remove('active');
 }//removing active from the thumbnail
 function updateItem(){
    itemCount.textContent = item
    // cartCounter.classList.add('show-counter')
    multiplier.textContent = item;
    cartCounter.textContent =item;
    multPrice.textContent = price;
 }// updating counter and price
 
// function change product display picture 
function changeImage(e){
    const change = e.currentTarget
    if(change.classList.contains('thumb1') || change.classList.contains('modal1')){
      displayPicture.src = images[0];
      modalPicture.src = images[0];
      active(thumbailOne)
      active(modalOne)
    }
    else{
        removeActive(thumbailOne)
        removeActive(modalOne)
    }
    if(change.classList.contains('thumb2') || change.classList.contains('modal2')){
        displayPicture.src = images[1]
        modalPicture.src = images[1]
        active(thumbailTwo)
        active(modalTwo)
    }
    else{
        removeActive(thumbailTwo)
        removeActive(modalTwo)
    }
    //change to third picture
    if(change.classList.contains('thumb3')  ||change.classList.contains('modal3')){
        displayPicture.src = images[2]
        modalPicture.src = images[2]
        active(thumbailThree)
        active(modalThree)
    }
    else{
        removeActive(thumbailThree)
        removeActive(modalThree)
    }
    if(change.classList.contains('thumb4') || change.classList.contains('modal4')){
        displayPicture.src = images[3];
        modalPicture.src = images[3]
        
        //add active class to th active thumbnail and remove from the rest
        active(thumbailFour)
        active(modalFour)
        
    }
    else{
        removeActive(thumbailFour)
        removeActive(modalFour)
    }
}
//initial count for cart product
let item = 0
//initail price
let price = 0;
//adding item to the cart event and function
addItem.addEventListener('click',()=>{
    price += 125 
    item++
   updateItem()
    
    if(item === 1){
        price = 125
    }
})
// click event funion of subtarcting product from the item
subtrItem.addEventListener('click',()=>{
    item--
    price -= 125
    const newPrice= price / item;
    updateItem()

    if(item < 0 || item === 0){
        showEmptyMessage()
        item = 0
        price = 0
        itemCount.textContent = '0'
        cartCounter.textContent ='0';
        cartCounter.classList.remove('show-counter');
    }
})

function showEmptyMessage(){
    emptyMessage.classList.add('show-empty-message')
    cartDetails.classList.remove('show-cart-details')
   
}
function showCartDetails(){
    emptyMessage.classList.remove('show-empty-message')
    cartDetails.classList.add('show-cart-details')
}

// cart click event and function

cart.addEventListener('click',()=>{
    cartTrack.classList.toggle('show-cart-track');

    //show empty message 
    if(item === 0 || item< 0){
       showEmptyMessage()
    }

    //show cart deatils
    if(item > 0){
        showCartDetails()
    }
})

//add to cart event an dfunction
addToCart.addEventListener('click',()=>{
    //show cart detail
     cartCounter.classList.add('show-counter')
    if(item > 0){
        
        showCartDetails()
        cartTrack.classList.add('show-cart-track');

    }
    if(item < 0 || item === 0){
        cartTrack.classList.remove('show-cart-track');
    }
})
emptyCartList.addEventListener('click',()=>{
 if (item > 0) {
    item =0;
    price= 0;
    itemCount.textContent= '0'
    cartCounter.classList.remove('show-counter')
    showEmptyMessage()
 }
})
checkouBtn.addEventListener('click',()=>{
    cartTrack.classList.remove('show-cart-track');

})
let next = 0
nextBtn.addEventListener('click',()=>{
    next++
 displayPicture.src = images[next]
 if(next > images.length-1){
    next= 0
    displayPicture.src = images[0]
}
}
)
prevBtn.addEventListener('click',()=>{
    next--
    displayPicture.src= images[next]
    if(next < 0){
       next = images.length -1
       displayPicture.src= images[3]
    }
});

// hamburger menu function 
menu.addEventListener('click',()=>{
    navBar.classList.add('show-navlinks')
})
closeMenu.addEventListener('click',()=>{
    navBar.classList.remove('show-navlinks')
})
window.addEventListener('scroll',()=>{
    navBar.classList.remove('show-navlinks');
    container.classList.remove('modal')
})