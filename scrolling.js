let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountOne = document.getElementById("mount1");
let mountTwo = document.getElementById("mount2");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let hello = document.querySelector(".hello");
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 3 + "px";
    mountOne.style.top = value * 2 + "px";
    mountTwo.style.top = value * 1.5 + "px";
    river.style.top = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value * 3 + "px";
    hello.style.fontSize = value + "px";
    if(scrollY >= 67 ){
        hello.style.fontSize = 67 + "px";
        hello.style.position = 'fixed';
        if(scrollY >= 405){
            hello.style.display = 'none';
        }else{
            hello.style.display = 'block';
        }
          if(scrollY >= 127){
                document.querySelector(".main").style.background = 'linear-gradient(#376281 , #10001f)'
            }else{
                document.querySelector(".main").style.background = 'linear-gradient(#200016 , #10001f)'
            }
    }
}
