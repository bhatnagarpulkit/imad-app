console.log('Loaded!');

//change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='New  Value';


//move the image
var image=document.getElementById('madi');
function moveRight () {
    marginLeft=marginLeft+10;
    img.style.margin=marginLeft + 'px';
}
img.onclick=function() {
    var interval= setInterval(moveRight,100);

};


