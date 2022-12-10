let collection = [];
// Created empty array named collection
function addToCollection ( title, artist, yearPublished ) {
    let album = {
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
        let album = array[i];
        console.log('TITLE', album.title, 'ARTIST', album.artist, 'published in', album.yearPublished );
        // Logging the collection in TITLE, ARTIST, published in: format by adding string along with the given object
}
}
 console.log(showCollection(collection));

 // Testing show collection function

 function findByArtist( artists ) {
    console.log( 'In byArtist:', artists);
    const arr = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].artist === artists) {
            arr.push(collection[i]);
        }
    }
    return arr;
 }
 console.log(findByArtist('Johnson'));
 console.log(findByArtist('Sherry'));

 // Testing findByArtist by using a an actual listed artist and a non listed artist