let items = document.querySelectorAll('.slider .list .item' );
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnail = document.querySelectorAll('.thumbnail .item');


let count = items.length;
let itemact = 0;

let refreshInterval = setInterval(()=>{
    next.click();
}, 3000)
next.onclick = function(){
    itemact = itemact + 1;
    if(itemact >= count){
        itemact = 0;
    }
    showslider();
}
prev.onclick = function(){
    itemact = itemact - 1;
    if(itemact < 0){
        itemact = count - 1;
    }
    showslider();
}
function showslider() {
    let itemactOld = document.querySelector('.slider .list .item.act');
    let thumbnailOld = document.querySelector('.thumbnail .item.act');
    itemactOld.classList.remove('act');
    thumbnailOld.classList.remove('act');

    items[itemact].classList.add('act');
    thumbnail[itemact].classList.add('act');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() =>{
        next.click();
    }, 5000);



}

thumbnail.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemact = index;
        showslider();
    })
})