const slides = document.querySelectorAll(".slide")
var counter = 0
slides.forEach(
    (slides,index) => {    
        slides.style.left = `${index  * 100}%`        
    }
)

const GoNext = () => {
    if(counter==2){
        counter=0
    }else{
        counter++    
    }
    slideImage()
    
}
const GoPrev = () => {
    if(counter==0){
        counter=2
    }else{
        counter--
    }
 
    slideImage()
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`           
        }
    )
}