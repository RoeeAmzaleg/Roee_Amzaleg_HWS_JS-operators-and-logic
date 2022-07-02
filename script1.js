//Using the "&&" Operator.
var x = 10;
var y = 20;
if (x == 10 && y == 20) {
    true
}
else {
    false
}

//Matchstick Houses
const matchHouses = (num1) => {

    var num1 = prompt("Enter a number:");
    var y = parseInt(num1);
    if (y === 0) {
        return "0"+ "<br />"
    } else if (y < 0  || y === false) {
        return "non-negative integer."+ "<br />"
    } else {
        var result = 5 * y + 1;
        return "the number of matchsticks is: " + result + "<br />";
    }
}
document.write(matchHouses());

//Perimeters with a Catch
const calculatePerimeter = (x, y) => {

    var a = prompt("Enter the length of 1 side of a square:");
    var b = prompt("Enter the radius of the circle:");
    var side = parseInt(a);
    var radius = parseInt(b);
    if (side <= 0 || radius <= 0) {
        return "non-negative integer."
    }
    else {
        var squarePerimeter = 4 * side;
        var radiusPerimeter = 6.28 * radius;
        return "The perimeter of a square with a length is " + squarePerimeter + "<br />" +
            "The perimeter of a circle is " + radiusPerimeter + ".";
    }
}
document.write(calculatePerimeter());




