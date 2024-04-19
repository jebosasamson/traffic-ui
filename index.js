
 // GRAB
let circleOne = document.querySelector('.One')
let circleTwo = document.querySelector('.Two')
let circleThree = document.querySelector('.Three')

let Stopswitch = document.querySelector('.stop')
let is_StopWitch = true
let Slowswitch = document.querySelector('.slow')
let Goswitch = document.querySelector('.go')




// function handleAddstop(e){
//     circleOne.style.background = 'red'
//     is_StopWitch = false
// }

function handleAllActions(check, backgroundUpdate, backgroundColor){
    if(check){
        backgroundUpdate.style.background = backgroundColor
        check = false
    }else{
        backgroundUpdate.style.background = `black`
        check = true
    }
}

function handleStopEvent(){
    if(is_StopWitch){
        circleOne.style.background = 'red'
        is_StopWitch = false
    }else{
        circleOne.style.background = 'black'
        is_StopWitch = true
    }
}

Stopswitch.addEventListener('click', handleAllActions(is_StopWitch, circleOne, 'red'))


function handleslow(){
    circleTwo.style.backgroundColor = 'orange'

}
function handlego(){
    circleThree.style.background = 'green'

}


// ADD EVENT
// Stopswitch.addEventListener('click', handleStopEvent)
Slowswitch.addEventListener('click', handleslow)
Goswitch.addEventListener('click', handlego)






