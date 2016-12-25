window.onload = function() {

  var canvas=document.getElementById("winter");
  var ctx=canvas.getContext("2d");

  var W= window.innerWidth;
  var H=window.innerHeight;
  canvas.width=W;
  canvas.height=H;

  var maxFlakes=200;
  var flakes=[];

  for(var i=0;i<maxFlakes;i++)
  {
    flakes.push({
      x:Math.random()*(W),
      y:Math.random()*H,
      r:Math.random()*3+2,
      d:Math.random()+1
    });
  }

  function drawSnowManFace() {
    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.moveTo(W-520,H-320);
    ctx.arc(W-520,H-320,8,0,Math.PI*2,true);
    ctx.moveTo(W-520,H-320);
    ctx.arc(W-480,H-320,8,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle="red";
    ctx.beginPath();
    ctx.moveTo(W-500,H-300);
    ctx.arc(W-500,H-300,7,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
  }

  function drawSnowManHands() {
    ctx.strokeStyle="brown";
    ctx.lineWidth=6;
    ctx.beginPath();
    ctx.moveTo(W-580,H-230);
    ctx.lineTo(W-640,H-260);
    ctx.lineTo(W-660,H-280);
    ctx.moveTo(W-640,H-260);
    ctx.lineTo(W-660,H-250);

    ctx.moveTo(W-420,H-230);
    ctx.lineTo(W-360,H-260);
    ctx.lineTo(W-340,H-280);
    ctx.moveTo(W-360,H-260);
    ctx.lineTo(W-340,H-250);
    ctx.stroke();
  }

  function drawSnowManBody() {
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.moveTo(W-500,H-100);
    ctx.arc(W-500,H-100,(W-(W-500))/4,0,Math.PI*2,true);
    ctx.moveTo(W-500,H-200);
    ctx.arc(W-500,H-200,(W-(W-500))/5,0,Math.PI*2,true);
    ctx.moveTo(W-500,H-300);
    ctx.arc(W-500,H-300,(W-(W-500))/8,0,Math.PI*2,true);

    ctx.fill();
    drawSnowManFace();
    drawSnowManHands();
  }

  function drawFlakes(){
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle=  "white";
    ctx.beginPath();
    for (var i = 0; i < maxFlakes; i++)
    {
      var f= flakes[i];
      ctx.moveTo(f.x,f.y);
      ctx.arc(f.x,f.y,f.r,0,Math.PI*2,true);
    }
    ctx.fill();

    drawSnowManBody();
    moveFlakes();
  }

  var angle =0;

  function moveFlakes(){
    angle +=0.01;
    for (var i = 0; i < maxFlakes ; i++)
    {
      var f = flakes[i];
      f.x += Math.sin(angle)*2;
      f.y += Math.pow(f.d,2);

      if(f.y>H)
      {
        flakes[i] = {
          x:Math.random()*(W+150),
          y:0,
          r:f.r,
          d:f.d
        };
      }
    }
  }
  setInterval(drawFlakes, 25);
}
