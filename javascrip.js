// document.getElementById("boton-inicio").addEventListener("click",function(){
//     window.scroll(0,0);
// }); "todo esto era el codigo antes de mejorar el boton ahora con el siguiente codigo queda mejor el efecto scroll"
document.getElementById("boton-inicio").addEventListener("click", function(){
    var i = window.pageYOffset;
    var intervalId = setInterval(function(){
        window.scrollTo(0, i);
        i -= 25; 
        if (i <= 0) {
            clearInterval(intervalId);
        }
    }, 20);
});