function setNewImage(){
    document.getElementById("imgevo").src="https://lh3.googleusercontent.com/y11WRAuYWKHi8aE_z_adWmFmvOBZkILS9ij9M4pq4HtobS_5FtRocVcXYhAsSLaXXiNHQRW57acNdqTL5ca5TVpiuu7JnmktJ2jN-82PX1ap-Z9REnghoKRWTsGpCW8YHzztDyv1VZEQFzfLl3H0f5hkIh733vgBEXxi1PExi4t87uD_22fq4RlIz7scNAlHd5joYlqOm9uZEJDAM2M6GzsJB70OBdUpXXtea567CDVn5YWcvwUgkcqcIkfHuK-EFojCXx2H1MJxHwVzPun6-erNEZBp3otMATSZD6EAPH-a40a6U0a4fNRJPTBOKGiYj5sqocnARW68i3-gpD7o2GiABNShKqVOu38jjJ4yFxIrT5coDFAYDn9Dz8tz1rwGrDg8J39-r_Wkh1RglXMcviMdXwIUUU6hfE9_jsWdgKhFJQb2rHYYwNx-jB5055Xw0bkY9e9ocvDZ-oNoyAu0NRCyb8OVgVV9odz-n9jtiQBRTWr9OEGTaEQtni_tSNvppYMdF-Nlj6syNPzUK3tzBPhv-N4-Q7QOvbKHlhIZrNIzbeWdVcwIULxLDbkZJMdY_UkjXmhSZ3_qDA7P940guWxkIxLP7Jrivi5mL6_uC7Ck5h8_G2QcdTLKBEGZ-Y5EsttK32KOLljW4vPsY1jhqeS2qgUFdawXRaleREDZkudxDZyc5jJgReHexdAC0I2k_pesXuSsnUE483H13lvyi8m0=w205-h310-no?authuser=0"
}

function setOldImage(){
    document.getElementById("imgevo").src="https://lh3.googleusercontent.com/mbJD76kKyB_NMFFqfRySrunL1toMTOfk1FZvR_P0iH5CNTx0K7uiCBd0b3Vi-rClNTeKzC89aLuJVJ2TJGIOXjFIm2XA9a6gZwCaOD4YB0kIV7rKQif2-IBLvrJvOsvKtG1WjuZasXAjVp8R6IxlvkMNd8QHqPqmc9sEbNFAQ5u1kFiSAbWTlWSYlriiiD_ZdnmcMMj69TCm1TQoyLgN2R1YxgaV3WxwN1pjz39JWwsaRn0ain3ug3fiyowUEvteg7d6BORGIe1Fs9BW2phCanzsr6ld3fG7nW-1unOw-QML3t5YE35xoqNoaW52-o15sZYu9e8NaRUYeM39ISGtszTURuEemY2COZR_pDZ-Dj7_9PuyFHAtNSBlHj7c53RI-ArJ8WyAANQTVp0Y2v4BwGbE75YhC7Dg7YvcnP4f82ZxM0qGVRqRsvYTVBvxl0qNTrhP4bAY6DGGxm0Ho2A1VkOy6JgWaTEJLFV5AeaLjhecXeoTcRFUMBdfv-iGvVTxgX4q830zZ95_zDG3vtPr7c5QKnXq5WWSdl2fvHI0o9xK8QUM401FAbZZonGDO8CdvkDF8-t-ej5BcWzsqn5FHqSW9xVeKeQBRIwR0UF9e7qSFwqUfux0eNzDWsqpiJSFVOjTir3O-IIYWTzgjs24pA9CnNikHMlRWJmCVHklK8HB__zpwK8yR507RCr0eTpW2fkJIoMda-qkUpQB0kBz8Pyn=w604-h914-no?authuser=0"
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


var currentImage = 'green'
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
