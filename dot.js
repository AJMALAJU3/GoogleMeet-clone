
const slidesc = document.querySelectorAll(".slideC")
var counterc = 0
slidesc.forEach(
    (slidesc,indexc) => {    
        slidesc.style.left = `${indexc  * 100}%`        
    }
)

const nxt1 = () => {
    if(counterc==2){

        counterc=0
    }else{
        counterc++    
    }
    Slideimage()
    
}
const pre1 = () => {
    if(counterc==0){
        counterc=2
    }else{
        counterc--
    }
 
    Slideimage()
}
const Slideimage = () => {
    slidesc.forEach(
        (slideC) => {
            slideC.style.transform = `translateX(-${counterc * 100}%)`           
        }
    )
}