var offerBar =document.querySelector(".offerBar")
offerBar.addEventListener("click",function(){
    offerBar.style.display="none"
})

// selecting the side nav bar

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})


var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+50

    if(slidermargin>50)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=50
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-50
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)


// Like Button for red heart

var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
        
            e.target.src="./images/icons/redheart.png"
        }
        else{
            e.target.src="./images/icons/blackheart.png"
        }
    })
})




