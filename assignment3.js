var menubgrd = document.getElementById("menu");
var menubtn = document.getElementById("menubtn");
var bodywidth = document.getElementsByTagName("body");

if(menubtn.style.display="block"){
    menubtn.addEventListener("click",function(){
        menubgrd.style.paddingBottom="200px";
        menubgrd.style.transition="all";
        menubgrd.style.transitionDuration="0.5s";
        menubgrd.style.transitionTimingFunction="linear";
    });

    menubtn.addEventListener("mouseleave",function(){
        menubgrd.style.height="80px";
        menubgrd.style.transition="all";
        menubgrd.style.transitionDuration="0.5s";
        menubgrd.style.transitionTimingFunction="linear";
    });
}

if(bodywidth[0].style.width>"600px"){
    menubtn.style.zIndex="-1";
}
