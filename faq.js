let image = document.getElementsByClassName('image')
let description = document.getElementsByClassName('desc')

for(let i= 0; i<image.length; i++ ){
    image[i].addEventListener('click', ()=>{
    description[i].classList.toggle('show')
    for(let j=0; j<image.length; j++){
        if(j !== i){
            description[j].classList.add('hide')
        }
    }
    })
}