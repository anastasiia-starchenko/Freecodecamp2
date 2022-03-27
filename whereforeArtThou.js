/*Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name
and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection
if it is to be included in the returned array.*/

function whatIsInAName(collection, source) {
  const arr = [];
  collection.forEach(function(item){
  	for (let key in item) {
  		for (let innerKey in source) {
  			if (key == innerKey) {
  				item[key] == source[innerKey] ? arr.push(item) : ``;
  			}
  		}
  	}
  })
  return arr;
}