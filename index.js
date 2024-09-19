let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push (Ralph);
}
function destructivelyRemoveLastCat(Garfield){
    cats.pop (Garfield);
}

function destructivelyPrependCat(name){
    cats.unshift (name);
}
function destructivelyRemoveFirstCat(){
    cats.shift ();
}
function appendCat(name){
    return [...cats, name];
}
function prependCat(name){
    return [name, ...cats];
}
function removeLastCat() {
    return cats.slice(0, cats.length -1)
}
function removeFirstCat(){
    return cats.slice(1);
}

