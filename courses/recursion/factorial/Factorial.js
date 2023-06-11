/**
 * To run this code in Chrome Source
 * Put a breakpoint on line 15 and run the code
 * Use a Step button
 * check Call Stack dropdown updates
 * By click on each factorial n value will be display
 */
function factorial(n) {
    if(n === 1) return 1;
    
    return n * factorial(n-1);
}

factorial(4);