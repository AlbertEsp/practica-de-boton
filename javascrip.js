// document.getElementById("boton-inicio").addEventListener("click",function(){
//     window.scroll(0,0);
// });
document.getElementById("boton-inicio").addEventListener("click", function(){
    var i = window.pageYOffset;
    var intervalId = setInterval(function(){
        window.scrollTo(0, i);
        i -= 50; 
        if (i <= 0) {
            clearInterval(intervalId);
        }
    }, 20);
});