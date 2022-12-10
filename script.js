/*const $ = require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);
});
*/

let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".side-bar");
    let getSidebarUl = document.querySelector(".side-bar ul");
    //let getSidebarTitle = document.querySelector(".side-bar span");
    let getSidebarLinks = document.querySelectorAll(".side-bar a");
    let getToggleImage = document.querySelector("btn-toggle-nav");
    
    if(toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        //getToggleImage.style.visibility = "hidden";
        getSidebar.style.width = "272px";
        //getSidebarTitle.style.opacity = "0.5";
        
        let arrayLength = getSidebarLinks.length;
        for(let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        
        toggleNavStatus = true;
    }
    
    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        //getSidebarTitle.style.opacity = "0";
        
        let arrayLength = getSidebarLinks.length;
        for(let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        
        getSidebarUl.style.visibility = "hidden";
        //getToggleImage.style.visibility = "visible";
        
        toggleNavStatus = false;
    }
}

/*
$(document).mousemove(function(e){
    $("#mouse-image").stop().animate({left:e.pageX, top:e.pageY});
});
*/