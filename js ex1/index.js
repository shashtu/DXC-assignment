//converting into desired array

// var obj = {
//   "One": "1",
//   "Two": "2",
//   "Three": "3",
//   "Four": "4"
// };

// var arr = Object.values(obj);
// console.log(arr);



//sorting the array by title value
// function sortByTitle(arr) {
//     arr.sort(function(x, y) {
//       var titleX = a.title.toUpperCase();
//       var titleY = b.title.toUpperCase();
//       if (titleX < titleY) {
//         return -1;
//       }
//       if (titleX > titleY) {
//         return 1;
//       }
//       return 0;
//     });
//   }
  
//   var library = [
//     { author: 'john', title: 'fallin in love', libraryID: 4849 },
//     { author: 'Rehman', title: 'Where is God', libraryID: 7384 },
//     { author: 'Ram', title: 'Meluha', libraryID: 9765 }
//   ];
//   sortByTitle(library);
//   console.log(library);
  



// a string and a letter argument

// function countOccurrences(str, letter) {
//  var count = 0;
//  for (var i = 0; i < str.length; i++) {
//       if (str.charAt(i) === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
//   var str = 'dxc.com';
//   var letter = 'c';
//   var occurrences = countOccurrences(str, letter);
//   console.log(occurrences);



// chels property

//  var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
// var obj = JSON.parse(jsonStr);
// console.log(obj.chels);




// extracting data from json


// var json = `{
// 	"status": "ok",
// 	"source": "the-next-web",
// 	"sortBy": "latest",
// 	{
//   "books": [
//     {
//       "author": "michelle james",
//       "title": "The Buckingham palace stories",
//       "description": "The novel in the buckingham series"
//     },
//     {
//       "author": "leonardo cavins",
//       "title": " THE 100",
//       "description"The novel which tells about how life started on earth  "
//     },
//     {
//       "author": "rajamouli",
//       "title": "The RRR",
//       "description": "A fantasy friendship story about komaram bheem and sitaramaraju"
//     }
//   ]
// }};

//var obj = JSON.parse(jsonString);


// var result = [];
// for (var i = 0; i < obj.books.length; i++) 
// {
//   var book = obj.books[i];
//   var data = {
//     author: book.author,
//     title: book.title,
//     description: book.description
//   };

//   result.push(data);
// }
// console.log(result);