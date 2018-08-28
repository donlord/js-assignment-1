'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures
or other items. We want to create the text that should be displayed next to such an item.
Implement a function likes :: [String] -> String, which must take in input array, containing the names 
of people who like an item. It must return the display text as shown in the examples:
*/

var likes = exports.likes = function likes(array) {
    if (array.length === 3) {
        console.log(array[0] + ', ' + array[1] + ', and ' + array[2] + ' like this');
    } else if (array.length === 4) {
        console.log(array[0] + ', ' + array[1] + ' and 2 others like this');
    } else if (array.length === 0) {
        console.log('no one likes this');
    } else console.log(array + ' likes this');
};

// export function likes(array){
//     if (array.length === 3){
//         console.log(array[0]+', '+ array[1]+', and '+ array[2] + ' like this')
//     }
//     else if(array.length === 4){
//         console.log(array[0]+', '+ array[1]+' and 2 others like this')
//     }
//     else if (array.length === 0){
//         console.log('no one likes this')
//     }
//     else console.log(array + ' likes this')
// }