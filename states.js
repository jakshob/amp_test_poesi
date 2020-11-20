//States____________________________


//State 0
function uiStart() {
  uiUpdateSimple(); //Hvad gør denne

  background(255);
  var scale = 0.8;
  imageMode(CENTER);
  image(designs[0], 0.5 * width, 0.5 * height, scale * width, scale * designs[0].height * width / designs[0].width);

  if (mouseX < windowWidth && mouseX > windowWidth * 0.75 && mouseY < windowHeight && mouseY > 100) {
    cursor(HAND);
  } else cursor(ARROW);

  if (mouseIsPressed && mouseX < windowWidth && mouseX > windowWidth * 0.75 && mouseY < windowHeight && mouseY > 100) {

    //RANDOM POETRY STATE
    picker = 2//Math.floor(Math.random() * 3); 

    if (picker === 0) isPoetry = false;
    if (picker === 1) isPoetry = undefined;
    if (picker === 2) isPoetry = true;

    console.log(isPoetry);
    fullScreenToggle();
    state = 5;

  }



}

function uiStartTwo() {

  uiUpdateSimple(); //Hvad gør denne

  //Kan jeg justere stroke/fill på enkelte containers?
  cursor(ARROW);
  imageMode(CENTER);
  image(designs[7], 0.5 * width, 0.5 * height, scale * width, scale * designs[0].height * width / designs[0].width);

  uiContainerStart((windowWidth / 2) - 100, height / 2 + 300, 250);

  if (uiButton("Kør testen").clicked) {
    //fullScreenToggle();
    state = 3;
  }
  uiContainerEnd();
}


//state 1
function uiAMP() {

  uiUpdateSimple();
  currentMillis = millis();


  if (currentMillis - prevMillis1 < primeTime) {

    image(images[counter].image, windowWidth / 2, windowHeight / 2);

  }

  if (currentMillis - prevMillis1 < pauseTime && currentMillis - prevMillis1 > primeTime)

    background(240, 240, 240);

  if (currentMillis - prevMillis1 < targetTime && currentMillis - prevMillis1 > pauseTime) {

    image(symbols[counter], windowWidth / 2, windowHeight / 2);

  }

  if (currentMillis - prevMillis1 > primeTime + targetTime + pauseTime) {
    background(255);

    fill(0);
    rect(50, windowHeight - 100, counter * 2, 20);
    noFill();
    stroke(0);
    rect(50, windowHeight - 100, sampleSize * 2, 20);
    fill(0);

    textSize(20);
    text( counter + "/" + sampleSize, 70, windowHeight - 110)


    uiContainerStart(windowWidth / 2 - 100, windowHeight - 150, 250);
    
    imageMode(CORNER);
    image(designs[3], (windowWidth / 2) + 50, (windowHeight * 0.8), 50, 50);
    imageMode(CENTER);

    if (mouseX < (windowWidth / 2) && mouseX > (windowWidth / 2) - 50 && mouseY < (windowHeight * 0.8) + 50 && mouseY > windowHeight * 0.8) {
      cursor(HAND);
    } else if (mouseX < (windowWidth / 2) + 100 && mouseX > (windowWidth / 2) + 50 && mouseY < (windowHeight * 0.8) + 50 && mouseY > windowHeight * 0.8) {
      cursor(HAND);
    } else cursor(ARROW);

    if (mouseIsPressed && mouseX < (windowWidth / 2) + 100 && mouseX > (windowWidth / 2) + 50 && mouseY < (windowHeight * 0.8) + 50 && mouseY > windowHeight * 0.8) {
      data.push({
        "landscapetype": images[counter].landscapeType,
        "liked": true
      });
      prevMillis1 = millis();
      if (counter < sampleSize - 1) {

        counter++;

      } else state = 2;
      //state = 2;
      print(counter);
    }
    imageMode(CORNER);
    image(designs[4], (windowWidth / 2) - 50, (windowHeight * 0.8), 50, 50);
    imageMode(CENTER);



    if (mouseIsPressed && mouseX < (windowWidth / 2) && mouseX > (windowWidth / 2) - 50 && mouseY < (windowHeight * 0.8) + 50 && mouseY > windowHeight * 0.8) {
      data.push({
        "landscapetype": images[counter].landscapeType,
        "liked": false
      });
      prevMillis1 = millis();
      if (counter < sampleSize - 1) {

        counter++;


      } else state = 2;

      print(counter);
    }
  }
}


//state 2
function uiFinish() {
  results = getResultsOn(data);
  resultsCopy = results;
  console.log(results);
  sentenceDone = createSentencesOn(results);
  state = 4;

  //noLoop();
}

function uiFinishLoop() {
  uiUpdateSimple();

  fill(0);
  

  // uiContainerStart(windowWidth / 2, windowHeight / 4, 250);
  //textAlign(CENTER, CENTER);
  fill(0);
  //uiText("DONE");

  var url = "https://docs.google.com/forms/d/e/1FAIpQLScmbzQ_Mmy__x-W2Fpxrvxnp-6GiLwoKsId8RXbAap5CupKtg/viewform?usp=pp_url&entry.86019745=";

    textSize(14);
  textFont("Helvetica");
  text("I denne psykologiske test har du reageret på symboler.\nUnderbevidst har du reageret på de landskaber der blev vist inden symbolerne.\nDette er resultatet: ", windowWidth / 3, (windowHeight / 4) - 40);
  
  if (isPoetry === undefined)
  {
    if(results[0].winner===true) text("Du er meget knyttet til naturen.\nHerunder kan du se hvor meget du kan lide forskellige typer landskaber i forhold til hinanden.",windowWidth / 3,(windowHeight / 4) + 30);
    else if(results[0].winner===undefined) text("Du er knyttet til naturen.\nHerunder kan du se hvor meget du kan lide forskellige typer landskaber i forhold til hinanden.",windowWidth / 3,(windowHeight / 4) + 30);
      else text("Du er ikke særligt knyttet til naturen.\nHerunder kan du se hvor meget du kan lide forskellige typer landskaber i forhold til hinanden.",windowWidth / 3,(windowHeight / 4) + 30);
    //PIEE
    results = pieChart(windowWidth / 4, resultsCopy);
  } 
  else {
    imageMode(CORNER);
    
    image(designs[6], (windowWidth / 3) - 40, (windowHeight / 4), designs[6].width * 1.3, designs[6].height * 1.3);
   
     textFont(typeFont);
    text(sentenceDone, windowWidth / 3, (windowHeight / 4) + 150)
  }



  uiContainerStart((windowWidth / 2) - 100, windowHeight * 0.9, 250);
  textFont("Helvetica");
  if (uiButtonSurvey("Spørgeskema").clicked) {

    var resultsString = "";

    resultsString += sentenceDone;

    resultsString += "\n \n TESTDATA \n \n"

    for (var i = 1; i < results.length; i++) {
      resultsString += "\n type: " + results[i].type + "\n score: " + results[i].score + "\n percent: " + results[i].percent + "\n winner: " + results[i].winner + "\n pictures: "+ results[i].pictures + "\n \n";
    }


    window.open(url + encodeURIComponent(resultsString), "target=_blank");


  }

  uiContainerEnd();

}

//state 3
function timing() {
  background(255);
  uiContainerStart(windowWidth / 2, windowHeight / 2, 250);
  uiText(timer, 50);
  uiContainerEnd();
  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
  }
  if (timer == 0) {
    state = 1;
    prevMillis1 = millis();
    print("Program started");
    return false;
  }
}