window.onload=function()
{
  var bathroom = document.getElementById('bathroom');
  function dansRectangle(x,y,Xmin,Ymin,Xmax,Ymax)
  {
    return x >= Xmin && x<=Xmax && y >=Ymin && y<=Ymax;
  }

  //Peremt retour au tiroir quand clic sur flèche rouge
  bathroom.onclick=function(event){
    var x =(event.clientX-this.offsetLeft)/this.width;
    var y =(event.clientY-this.offsetTop)/this.height;
    console.log(x+' '+y);

    // clic 1
    if (dansRectangle(x,y,0.4791666666666667,0.5358974358974359,0.48908730158730157 ,0.617948717948718))
    {
      window.location.href = '../html/soap.html';
    }
    }
  }
