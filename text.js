

const slidese = document.querySelectorAll(".slideB")
var counterb = 0
slidese.forEach(
    (slidese,indexe) => {    
        slidese.style.left = `${indexe  * 100}%`        
    }
)

const nxt = () => {
    if(counterb==2){

        counterb=0
    }else{
        counterb++    
    }
    SlideImage()
    
}
const pre = () => {
    if(counterb==0){
        counterb=2
    }else{
        counterb--
    }
 
    SlideImage()
}
const SlideImage = () => {
    slidese.forEach(
        (slideB) => {
            slideB.style.transform = `translateX(-${counterb * 100}%)`           
        }
    )
}