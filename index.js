
 // GRAB
let circleOne = document.querySelector('.One')
let circleTwo = document.querySelector('.Two')
let circleThree = document.querySelector('.Three')

let Stopswitch = document.querySelector('.stop')
let is_StopWitch = true
let is_SlowWitch = true
let is_GoWitch = true
let Slowswitch = document.querySelector('.slow')
let Goswitch = document.querySelector('.go')




function handleStopEvent(){
    // if(is_StopWitch){
    //     circleOne.classList.add('test')
    //     is_StopWitch = false
    // }else{
    //     circleOne.classList.remove('')
    //     is_StopWitch = true
    // }
    if(is_StopWitch){
        circleOne.classList.toggle('test')
    }

}

Stopswitch.addEventListener('click',handleStopEvent)


function handleslow()
{
    if(is_SlowWitch){
        circleTwo.style.background= 'orange'
        is_SlowWitch = false
    }else{
        circleTwo.style.background = 'black'
        is_SlowWitch = true
    }

}

Slowswitch.addEventListener('click', handleslow)

function handlego(){
    if(is_GoWitch){
        circleThree.style.background= 'green'
        is_GoWitch = false
    }else{
        circleThree.style.background = 'black'
        is_GoWitch = true
    }

}


Goswitch.addEventListener('click', handlego)






