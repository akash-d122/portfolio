//Smooth Scrolling for menu links

var menuLinks = document.querySelectorAll(".nav-bar-list a");

for(var i=0 ; i<menuLinks.length ; i++){
    menuLinks[i].addEventListener("click",function(event){
        event.preventDefault();

        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },30);
    })
}

// skill fill animation

var skillProgress = document.getElementsByClassName("skill-progress");
var skillContainer = document.getElementById('skills');
var animationDone = false;
window.addEventListener("scroll",checkScroll);


//function identify skill container
function checkScroll(){
    let coordinates = skillContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){
        initializeWidth();
        fillBars();
        animationDone = true;
    }else if(skillContainer.getBoundingClientRect().top > window.innerHeight){
        animationDone = false;
        initializeWidth();
    }
}


function initializeWidth() {
    for(let bar of skillProgress)
        bar.style.width = 0 + "%";
}

function fillBars() {
    for(let bar of skillProgress){
        let targetWidth = bar.getAttribute("data-percent");
        let currWidth = 0;
        let interval = setInterval(function(){
            if(currWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currWidth++;
            bar.style.width = currWidth + "%";
        },10);
    }
}




