/*
 loadSymbols();
  loadLandscapes(37, 'assets/city');
  loadLandscapes(10, 'assets/forest');
  loadLandscapes(10, 'assets/hills');
  loadLandscapes(10, 'assets/mose');
  loadLandscapes(10, 'assets/water');
*/

function loadDesign(){
  designs.push(loadImage('assets/design/intro.jpg'));
  designs.push(loadImage('assets/design/play.png'));
  designs.push(loadImage('assets/design/kanji.png'));
  designs.push(loadImage('assets/design/like.png'));
  designs.push(loadImage('assets/design/dislike.png'));
  designs.push(loadImage('assets/design/clip_p.png'));
  designs.push(loadImage('assets/design/tape_p.png'));
  designs.push(loadImage('assets/design/testscreen2.png'));
  
 
}
function loadSymbols(size) {
  for (var i = 0; i < size; i++) {

    if ((i + 1) < 10) symbolLocations.push('assets/0' + (i + 1) + '.png');
    else symbolLocations.push('assets/' + (i + 1) + '.png');
  }



  for (var i = 0; i < symbolLocations.length; i++) {

    symbols.push(loadImage(symbolLocations[i]));
  }

}

//load routes
//load numbers
//load pictures
//randomize

function loadLandscapes(size, route) {

  for (var i = 0; i < size; i++) {
    if (route === 'assets/water') {
      waterNumbers.push(counterImages);
      counterImages++;
    }
    if (route === 'assets/city') {
      cityNumbers.push(counterImages);
      counterImages++;
    }
    if (route === 'assets/hills') {
      bakkeNumbers.push(counterImages);
      counterImages++;
    }
    if (route === 'assets/mose') {
      moseNumbers.push(counterImages);
      counterImages++;
    }
    if (route === 'assets/forest') {
      forestNumbers.push(counterImages);
      counterImages++;
    }


    //console.log("landscapes:"+route+" count:"+i);
    if (route !== 'assets/water') {
      if (route !== 'assets/hills') {
        if ((i + 1) < 10) imageLocations.push(route + '0' + (i + 1) + '.jpg');

        else imageLocations.push(route + (i + 1) + '.jpg');
      } else imageLocations.push(route + (i + 1) + '.jpg');
    } else imageLocations.push(route + (i + 1) + '.jpg');
  }
}

function pushImages(list) {
  var cityNumber = 0;
  var forestNumber = 0;
  var bakkeNumber = 0;
  var moseNumber = 0;
  var waterNumber = 0;
  
   console.log(list);
  for (var i = 0; i < list.length; i++) {
    if(i<citySize) {
      images.push({"image":loadImage(list[i]), "landscapeType":"by"});
      cityNumber++;
    }
    if(i>=citySize && i<forestSize+citySize) {
      images.push({"image":loadImage(list[i]), "landscapeType":"skov"});
      forestNumber++;
    }
    if(i>=forestSize+citySize && i<forestSize+citySize+bakkeSize) {
      images.push({"image":loadImage(list[i]), "landscapeType":"bakke"});
      bakkeNumber++;
    }
    if(i>=forestSize+citySize+bakkeSize && i<forestSize+citySize+bakkeSize+moseSize) {
      images.push({"image":loadImage(list[i]), "landscapeType":"mose"});
      moseNumber++;
    }
    if(i>=forestSize+citySize+bakkeSize+moseSize && i<forestSize+citySize+bakkeSize+moseSize+waterSize) {
      images.push({"image":loadImage(list[i]), "landscapeType":"hav"});
      waterNumber++;
    }
  }
  
  console.log("before shuffle");
  console.log(images);
  //setTimeout
  shuffleArray(images);
  console.log("after shuffle");
  console.log(images);
  
  
 /* 
  loadSymbols(sampleSize);
  loadLandscapes(citySize, 'assets/city');
  loadLandscapes(forestSize, 'assets/forest');
  loadLandscapes(bakkeSize, 'assets/hills');
  loadLandscapes(moseSize, 'assets/mose');
  loadLandscapes(waterSize, 'assets/water');
  pushImages(imageLocations);*/


}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}