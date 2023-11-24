var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, 0, 0);
for (var i = 0; i<48;i++) {
    ctx.fillRect(i*10, i*0.6, 100,12)    
}
