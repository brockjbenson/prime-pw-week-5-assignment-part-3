let collection = [];
// Created empty array named collection
function addToCollection ( title, artist, yearPublished ) {
    const album = {
        'title': title,
        'artist': artist,
        'yearPublished': yearPublished,
    } ; 
    collection.push(album); {
    }
    return album;
}
// Function created
console.log(addToCollection('Take Me', 'Johnson', 2016));
console.log(addToCollection('Get Back', 'Bradly', 2010));
console.log(addToCollection('Hello', 'Crime', 1998));
console.log(addToCollection('Scammer', 'Crank', 2005));
console.log(addToCollection('Rough House', 'Sincere', 2009));
console.log(addToCollection('Sin', 'Baller', 2022));
// Added and logged 6 albums

console.log(collection);
//Logged new collection array

function showCollection( array ) {
    console.log(array);
    for (let i = 0; i < array.length; i++) {
       
    } 
}
 console.log(showCollection(collection));
