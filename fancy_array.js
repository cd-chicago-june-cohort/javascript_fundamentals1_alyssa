/* This function will print the each element of an array with it's index.
    Ex: 0 -> arr[0]
    -> will be replaced by a symbol passed into the function
    True can be passed in for reversed if the elements should be printed in reverse order */

function fancyArray(arr, sym, reversed){
    if (!reversed){//iterates through array from 0 to last item
        for (var idx = 0; idx < arr.length; idx += 1){
            console.log(idx + " " + sym + " " + arr[idx]);
        };
    } else { //iterates through the arry from the last item to 0
        for (var idx = arr.length-1; idx >= 0; idx -= 1){
            console.log(idx + " " + sym  + " " +  arr[idx]);
        };
    };
};

// Testing the function 

var nickowWomen = ["Hailee", "Taryn", "Sarah", "Alyssa", "Shirlee"];

console.log("Expect names from Hailee to Shirlee with symbol ~");
fancyArray(nickowWomen, "~");

console.log("Expect names from Shirlee to Hailee with symbol <->");
fancyArray(nickowWomen, "<->", true);