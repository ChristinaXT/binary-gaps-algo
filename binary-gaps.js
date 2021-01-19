// I chose a recursive approach to this, and quite a simple solution. The performance is on point however.
// We transform the integer into a string representation in binary of that integer.
//
// Then, we check for the first occurance of a 1, measure the gap to the next 1 and so on. There are tests to see if we reached the end, or if there’s only one “1” in the representation. And that’s all, folks.

let gap;
function solution(N) {
    if (N === parseInt(N, 10) && N>=1 && N<=2147483647){
        gap = 0;

        //turn it to binary
        const binary = N.toString(2)
        //turn it into an array
        let NArray = binary.split('')
        findGap(NArray)
    }
    return gap;

}


function evalGap(distance){
    if (distance > gap){
        gap = distance;
    }
}

function findGap(binaryArray) {
    if (binaryArray.indexOf('1') == -1){
        return gap
    }
    else {
        index1 = binaryArray.indexOf('1');
        evalGap(index1)

        binaryArray = binaryArray.slice(index1+1);
        index2 = binaryArray.indexOf('1')

        if (index2 !== -1) {

            evalGap(index2)
            binaryArray = binaryArray.slice(index2+1);
            findGap(binaryArray)
        } else {
            if (gap === 0) {
                gap = 0
            }
        }
    }
}
