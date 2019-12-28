//debugger
let callback = function() {
    console.log("Inside the function of call back!");
}

setTimeout(callback, 5000);

setTimeout(function() {
    console.log("Inside the function of set time out!");
}, 5000);

function myMap(my_array, callback1){
	var arr = [];
	for(var index in my_array){
        console.log('Inside the for loop of myMap function')
        console.log('Passed array is, ' , my_array)
        console.log('Index is '+ index)
        console.log(my_array[index])
		arr.push(callback1(my_array[index]));
	}
	return arr;
}

var some_array = [2,4,6,8,10];

console.log('Adding the elements of array by 1')
console.log(myMap(some_array, (x) => x + 1 ));  //increments array element by 1.
console.log('')
console.log(myMap(some_array, (x) => x * 2 ));  //doubles each array element.
console.log(myMap(some_array, (x) => x * x ));  //squares each array element.