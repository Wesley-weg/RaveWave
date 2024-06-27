console.log("connected")
let timer = 300000
let time = false
buttonhouse = document.querySelector("#housebutton")
buttontechno = document.querySelector("#technobutton")
buttondrumbass = document.querySelector("#drumbassbutton")
buttonhits = document.querySelector("#hitsbutton")
timetext = document.querySelector("#timetext")
const house = new Audio("images/housenr1.mp3")
const techno = new Audio("images/technonr1.mp3")
const drumbass = new Audio("images/drumbassnr1.mp3")
const hits = new Audio("images/hitsnr1.mp3")
function timed(){
setInterval(function countdown(){
    if(time=true){
        timer--
        timetext.textContent = timer
    }
    if(timer <= 0){
        time = false
        clearInterval(timer)
        house.pause()
        techno.pause()
        drumbass.pause()
        hits.pause()
        house.currentTime = 0
        techno.currentTime = 0
        drumbass.currentTime = 0
        hits.currentTime = 0
        timetext.textContent = "times up"
    }

})}

function restart(){
    timer = 300000
    timed()
    console.log(time)
}

function musichouse(){
if(timer > 0){
    time = true
    setTimeout(techno.pause(),1000)
    setTimeout(drumbass.pause(),1000)
    setTimeout(hits.pause(),1000)
    house.play()
    timed()
} else{
    restart()
    console.log("test")
}

}


function musictechno(){
if(timer > 0){
    time = true
    setTimeout(house.pause(),1000)
    setTimeout(drumbass.pause(),1000)
    setTimeout(hits.pause(),1000)
    techno.play()
    timed()
} else{
    restart()
    }
}

function musicdrumbass(){
if(timer > 0){
    time = true
    setTimeout(house.pause(),1000)
    setTimeout(techno.pause(),1000)
    setTimeout(hits.pause(),1000)
    drumbass.play()
    timed()
} else{
    restart()
}
}

function musichits(){
if(timer > 0){
    time = true
    setTimeout(house.pause(),1000)
    setTimeout(techno.pause(),1000)
    setTimeout(drumbass.pause(),1000)
    hits.play()
    timed()
} else{
    restart()
}
}

console.log(time)
buttonhouse.addEventListener("click", musichouse)
buttontechno.addEventListener("click", musictechno)
buttondrumbass.addEventListener("click", musicdrumbass)
buttonhits.addEventListener("click", musichits)