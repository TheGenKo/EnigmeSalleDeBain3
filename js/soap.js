window.onload=function()
{
  var bathroom = document.getElementById('bathroom');
  function dansRectangle(x,y,Xmin,Ymin,Xmax,Ymax)
  {
    return x >= Xmin && x<=Xmax && y >=Ymin && y<=Ymax;
  }

  //Permet de charger la page sopa.html quand clique sur un savon dans l'image
  soap.onclick=function(event){

    var x =(event.clientX-this.offsetLeft)/this.width;
    var y =(event.clientY-this.offsetTop)/this.height;
    console.log(x+' '+y);


    // clic 1
    if (dansRectangle(x,y,0.8968253968253969,0.9602510460251046,0.9682539682539683 ,0.9874476987447699))
    {
      window.location.href = '../html/tiroir.html';
    }
    }
  }
