/**
 * To run this code in Chrome Source
 * Put a breakpoint on line 15 and run the code
 * Use a Step button 
 * check Call Stack dropdown updates ;) 
 */
function funcThree(){
    console.log('Three')
}

function funcTwo() {
    funcThree()
    console.log('Two')
}

function funcOne() {
    funcTwo()
    console.log('One')
}

funcOne()