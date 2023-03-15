export default function(element : HTMLElement, callback : Function){
    const event = document.addEventListener("click", e => {
        const outside = !(e.target == element)

        if(!outside) return

        callback()
    })    
}