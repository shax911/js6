var x = +prompt("введите 1 число");
var y = +prompt("введите 2 число");
var w = +prompt("введите 3 число");

if (y < x && x < w){
    alert(x);
}
else if (x < y && y < w){
    alert(y);
}
else if (x < w && w < y){
    alert(w);
}   
else (
    alert('все цифры равны')
)

