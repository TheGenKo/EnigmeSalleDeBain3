window.onload=function()
{
  var digicode = document.getElementById('digicode');
  function dansRectangle(x,y,Xmin,Ymin,Xmax,Ymax)
  {
    return x >= Xmin && x<=Xmax && y >=Ymin && y<=Ymax;
  }

  var nbrHit = 0;
  var codeHit = [];
  var realCode = [1,7,7];


// Fonction uilisé lors d'un clic qui récupère les coordonnées et ajouté la valeur du digicode dans un tableau
  digicode.onclick=function(event){

    var x =(event.clientX-this.offsetLeft)/this.width;
    var y =(event.clientY-this.offsetTop)/this.height;
    console.log(x+' '+y);

    // clic 1
    if (dansRectangle(x,y,0.6104815864022662,0.3659574468085106,0.6161473087818697 ,0.37446808510638296))
    {
      codeHit.push(1);
      alert("Vous avez clické sur 1");
      nbrHit++;
    }

    // click 2
    else if (dansRectangle(x,y,0.6274787535410765,0.3659574468085106,0.6331444759206799 ,0.37446808510638296))
    {
      codeHit.push(2);
      alert("Vous avez clické sur 2");
      nbrHit++;
    }

    // click 3
    else if (dansRectangle(x,y,0.6416430594900849,0.3638297872340426,0.6501416430594901 ,0.37659574468085105))
    {
      codeHit.push(3);
      alert("Vous avez clické sur 3");
      nbrHit++;
    }

    // click 4 -
    else if (dansRectangle(x,y,0.6104815864022662,0.39148936170212767,0.6161473087818697 ,0.4))
    {
      codeHit.push(4);
      alert("Vous avez clické sur 4");
      nbrHit++;
    }

    // click 5
    else if (dansRectangle(x,y,0.6260623229461756,0.39148936170212767,0.6331444759206799 ,0.4))
    {
      codeHit.push(5);
      alert("Vous avez clické sur 5");
      nbrHit++;
    }

    // click 6
    else if (dansRectangle(x,y,0.6416430594900849,0.39148936170212767,0.6515580736543909 ,0.4))
    {
      codeHit.push(6);
      alert("Vous avez clické sur 6");
      nbrHit++;
    }

    // click 7
    else if (dansRectangle(x,y,0.6104815864022662,0.4148936170212766,0.6161473087818697 ,0.425531914893617))
    {
      codeHit.push(7);
      alert("Vous avez clické sur 7");
      nbrHit++;
    }

    // click 8
    else if (dansRectangle(x,y,0.6260623229461756,0.4148936170212766,0.6331444759206799 ,0.425531914893617))
    {
      codeHit.push(8);
      alert("Vous avez clické sur 8");
      nbrHit++;
    }

    // click 9
    else if (dansRectangle(x,y,0.6430594900849859,0.4148936170212766,0.6501416430594901 ,0.425531914893617))
    {
      codeHit.push(9);
      alert("Vous avez clické sur 9");
      nbrHit++;
    }

    // clikc 0
    else if (dansRectangle(x,y,0.6274787535410765,0.4425531914893617,0.6359773371104815 ,0.451063829787234))
    {
      codeHit.push(0);
      alert("Vous avez clické sur 0");
      nbrHit++;
    }

    else if (dansRectangle(x,y,0.8172804532577904,0.7510638297872341,0.8456090651558074,0.7659574468085106)){
      /*nbrHit=0;
      codeHit=[];*/
      alert("Direction : La salle de bain !");
      window.location.href = '../html/bathroom.html';
    }


    // vérification du tableau rempli via digicode
    if (nbrHit>=3){
      var correct = 1;
      console.log(codeHit);
      codeHit.forEach(function(element, index){ if (element!=realCode[index]) correct=0;});
      if (correct==0)
      {
        nbrHit=0;
        codeHit= [];
        alert("Code incorrect, recommencez !");
      }
      else
      {
        alert("Niveau terminé !");
      }
    }
  }
}
