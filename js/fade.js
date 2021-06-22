import Highway from "@dogstudio/highway";
//IMPORT IT FROM THE CORRECT PLACE
import Tween from "gsap";

class Fade extends Highway.Transition {
    in( { from, to, done } ) {
        //Remove the old content.
        from.remove();

        //Animation
        Tween.fromTo ( to, 0.5, { opacity: 0 }, { opacity : 1, onComplete: done } )
        
    }
    out({ from, done }){
        //Animation
        Tween.fromTo ( from, 0.5, { opacity: 1 }, { opacity : 0, onComplete: done } )
    }
} 

export default Fade;