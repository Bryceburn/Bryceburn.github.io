let flagbuttons = document.getElementsByClassName("flagchange");
let flag = document.getElementById("flag");
for (let i=0; i< flagbuttons.length; i++){
    flagbuttons[i].addEventListener("click", function(){
        flag.src = flagbuttons[i].getAttribute("data-src");
        flag.alt = flagbuttons[i].getAttribute("data-alt");
    })
}
