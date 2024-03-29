let image = document.getElementsByClassName('image')
let description = document.getElementsByClassName('desc')
let sub = document.getElementsByClassName('sub')

for(let i= 0; i<image.length; i++ ){
    image[i].addEventListener('click', ()=>{
        if(i==0){
          description[i].classList.toggle('hide')
          image[i].classList.toggle('plus')
        }
        else{
            description[i].classList.toggle('show')
            image[i].classList.toggle('less')
            image[i].classList.toggle('plus')
        }
    })
}

for(let i = 0; i < image.length; i++){
    sub[i].addEventListener('click', ()=>{
        if(i==0){
          description[i].classList.toggle('hide')
          image[i].classList.toggle('plus')
        }
        else{
            description[i].classList.toggle('show')
            image[i].classList.toggle('less')
            image[i].classList.toggle('plus')
        }
    })
}