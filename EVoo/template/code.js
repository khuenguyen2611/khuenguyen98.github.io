function setNewImage(){
    document.getElementById("imgevo").src="template/image/xanh.png"
}

function setOldImage(){
    document.getElementById("imgevo").src="template/image/den.png"
}

var src = ['red', 'green', 'blue', 'white', 'brown', 'pink']

var slideArea = document.querySelector('.slide-area')
var slideNav = document.querySelector('.slide-nav')
// console.log(slideNav);

for (let e of src){
    let img = document.createElement('img')
    img.src = `./template/slide/slide-${e}.png`
    img.classList.add(`slide-image`)
    img.setAttribute(`data-slide`, e)
    slideArea.appendChild(img.cloneNode())
    img.addEventListener('click', () => changeImage(e))
    slideNav.appendChild(img)
}


var currentImage = 'blue'
document.querySelectorAll(`[data-slide="${currentImage}"]`)
    .forEach(e => e.classList.toggle('active'))

function changeImage(color) {
    console.log('Ok');
    document.querySelectorAll(`[data-slide="${currentImage}"]`)
        .forEach(e => e.classList.toggle('active'))
    document.querySelectorAll(`[data-slide="${color}"]`)
        .forEach(e => e.classList.toggle('active'))
    currentImage = color
}
