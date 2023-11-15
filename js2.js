var randomNumber = function (size) {
    return Math.floor(Math.random()*size)
}

var width = 400;
var height = 400;

var target = {
    x: randomNumber(width),
    y: randomNumber(height)
}
var click = 0;
$("#map").click(function(event) {
    click++
})

var getDistance = function (event, target) {
    var diffx = event.offsetx - target.x
    var diffy = event.offsety - target.y
    return Math.sqrt((diffx*diffx)+(diffy*diffy))
}

var getDistanceHint = function (distance) {
    if(distance < 10){
        return "Обожжешься!";
    } else if(distance < 20){
        return "Очень горячо";
    } else if(distance < 40){
        return "Горячо";
    } else if(distance < 80){
        return "Тепло";
    } else if(distance < 160){
        return "Холодно";
    } else if(distance < 320){
        return "Очень холодно";
    }  else {
        return "Замерзнешь!";
    }
}

var distance = getDistance(event, target);
var distanceHint = getDistanceHint(distance);
$("#distance")