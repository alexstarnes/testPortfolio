    setTimeout(function() {
        document.getElementById("splash").style.opacity = "0";

        setTimeout(function() {
            document.getElementById("splash").style.display = "none";
        }, 1200);

    }, 1000);

// window.onscroll = function() {myFunction()}; 

var dropMenu = document.getElementById("dropMenu");
//var menuIcon = document.getElementById("menuIcon");
var logo = document.getElementById("logo");
var topNavBar = document.getElementById("topNavBar");
var popupOverlay = document.getElementById("popupOverlay");
var popupIframe = document.getElementById("popupIframe");

var menuToggleSwitch = 0;
var overlayToggleSwitch = 0;

// function myFunction() {
//     if ( window.pageYOffset > 80 ) {
//         logo.style.backgroundImage = "url('./images/starnesLogo_dark.svg')";
// //        menuIcon.style.backgroundImage = "url('./images/menuIcon_dark.svg')";
//     }
//     else {
//         logo.style.backgroundImage = "url('./images/starnesLogo.svg')";
// //        menuIcon.style.backgroundImage = "url('./images/menuIcon.svg')";
//     }
// }

function scrollToPortfolio() {
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top},
        400);
}

function toggleOverlay() {
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        
        window.open('./images/Tool%20Services%20Case%20Study.pdf', '_blank');
        
    }
    else {
        
        var url = arguments[0];

        if(menuToggleSwitch){
            toggleMenu();
        }
        setTimeout(function(){

        if (overlayToggleSwitch){
            popupOverlay.style.top = "105vh";
            popupIframe.src = "";
            overlayToggleSwitch = 0;
            document.body.style.overflow = "initial";
        }
        else {
            popupOverlay.style.top = "0";
            popupIframe.src = url;
            overlayToggleSwitch = 1;
            document.body.style.overflow = "hidden";
        }

        }, 200);
        
    }
    
}

function toggleMenu() {
    
    if (menuToggleSwitch == 0) {
        dropMenu.style.right = "0px";
        menuToggleSwitch = 1;
        document.getElementById("splash").style.display = "initial";
        document.body.style.overflowY = "hidden";
    }
    
    else {
        dropMenu.style.right = "-901px";
        menuToggleSwitch = 0;
        document.getElementById("splash").style.display = "none";
        document.body.style.overflowY = "initial";
        
    }
}