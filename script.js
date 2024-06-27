console.log("connected")
let timer = 75000
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

function synthesizer1(){
    document.querySelector(".block1").style.animation = "block1 1s infinite"
}
function synthesizer2(){
    document.querySelector(".block2").style.animation = "block2 1s infinite"
}
function synthesizer3(){
    document.querySelector(".block3").style.animation = "block3 1s infinite"
}
function synthesizer4(){
    document.querySelector(".block4").style.animation = "block4 1s infinite"
}
function synthesizer6(){
    document.querySelector(".block6").style.animation = "block6 1s infinite"
}
function synthesizer7(){
    document.querySelector(".block7").style.animation = "block7 1s infinite"
}
function synthesizer8(){
    document.querySelector(".block8").style.animation = "block8 1s infinite"
}
function synthesizer9(){
    document.querySelector(".block9").style.animation = "block9 1s infinite"
}

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
    synthesizer1()
    setTimeout(synthesizer2,500)
    setTimeout(synthesizer6,500)
    setTimeout(synthesizer3,1000)
    setTimeout(synthesizer7,1000)
    setTimeout(synthesizer4,1500)
    setTimeout(synthesizer8,1500)
    setTimeout(synthesizer9,2000)
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
    synthesizer1()
    setTimeout(synthesizer2,500)
    setTimeout(synthesizer6,500)
    setTimeout(synthesizer3,1000)
    setTimeout(synthesizer7,1000)
    setTimeout(synthesizer4,1500)
    setTimeout(synthesizer8,1500)
    setTimeout(synthesizer9,2000)
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
    synthesizer1()
    setTimeout(synthesizer2,500)
    setTimeout(synthesizer6,500)
    setTimeout(synthesizer3,1000)
    setTimeout(synthesizer7,1000)
    setTimeout(synthesizer4,1500)
    setTimeout(synthesizer8,1500)
    setTimeout(synthesizer9,2000)
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
    synthesizer1()
    setTimeout(synthesizer2,500)
    setTimeout(synthesizer6,500)
    setTimeout(synthesizer3,1000)
    setTimeout(synthesizer7,1000)
    setTimeout(synthesizer4,1500)
    setTimeout(synthesizer8,1500)
    setTimeout(synthesizer9,2000)
} else{
    restart()
}
}

console.log(time)
buttonhouse.addEventListener("click", musichouse)
buttontechno.addEventListener("click", musictechno)
buttondrumbass.addEventListener("click", musicdrumbass)
buttonhits.addEventListener("click", musichits)