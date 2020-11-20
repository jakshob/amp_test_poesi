//TEXT____________________________

var sentences = 
    ["Du [verbPos] [skovN_1] og [skovN_2], de [actionVerbPos]",
  "[havN_1] [verbNeu_1] [adjectivePos_1] og [havN_2] [verbNeu_2] [adjectivePos_2]",
  "Du [verbNeg] [byN1] og [byN2], de [actionVerbNeg] i dit sind"
];

//Method for deciding the poems word lists
function createSentencesOn(list) {

  var finalText = ""; 
  
  


  //LOGIK FORSLAG

  if (list[0].winner === true && isPoetry === true) {
    finalText = "Du " +getRandom(verbPos) + " naturen men " + getRandom(verbNeg)+" byen";

    //for (var i = 0; i < list.length; i++) {

      if (list[5].type === "hav") finalText += "\n" + createSentenceOne(hav);
      if (list[5].type === "mose") finalText += "\n" + createSentenceOne(mose);
      if (list[5].type === "by") finalText += "\n" + createSentenceOne(by);
      if (list[5].type === "skov") finalText += "\n" + createSentenceOne(skov);
      if (list[5].type === "bakke") finalText += "\n" + createSentenceOne(bakke);
    
      if (list[4].type === "hav") finalText += "\n" + createSentenceTwo(hav);
      if (list[4].type === "mose") finalText += "\n" + createSentenceTwo(mose);
      if (list[4].type === "by") finalText += "\n" + createSentenceTwo(by);
      if (list[4].type === "skov") finalText += "\n" + createSentenceTwo(skov);
      if (list[4].type === "bakke") finalText += "\n" + createSentenceTwo(bakke);
    
      if (list[1].type === "hav") finalText += "\n" + createSentenceThree(hav);
      if (list[1].type === "mose") finalText += "\n" + createSentenceThree(mose);
      if (list[1].type === "by") finalText += "\n" + createSentenceThree(by);
      if (list[1].type === "skov") finalText += "\n" + createSentenceThree(skov);
      if (list[1].type === "bakke") finalText += "\n" + createSentenceThree(bakke);
    //}
    
    //anden sætning skal gå til anden pladsen
    //tredje sætning skal gå til sidste pladsen


  } else if (list[0].winner === undefined && isPoetry === true) {
    finalText = "Du " +getRandom(verbPos)+" naturen og byen ligemeget";
    //for (var i = 0; i < list.length; i++) {

      if (list[5].type === "hav") finalText += "\n" + createSentenceOne(hav);
      if (list[5].type === "mose") finalText += "\n" + createSentenceOne(mose);
      if (list[5].type === "by") finalText += "\n" + createSentenceOne(by);
      if (list[5].type === "skov") finalText += "\n" + createSentenceOne(skov);
      if (list[5].type === "bakke") finalText += "\n" + createSentenceOne(bakke);
    
      if (list[4].type === "hav") finalText += "\n" + createSentenceTwo(hav);
      if (list[4].type === "mose") finalText += "\n" + createSentenceTwo(mose);
      if (list[4].type === "by") finalText += "\n" + createSentenceTwo(by);
      if (list[4].type === "skov") finalText += "\n" + createSentenceTwo(skov);
      if (list[4].type === "bakke") finalText += "\n" + createSentenceTwo(bakke);
    
      if (list[1].type === "hav") finalText += "\n" + createSentenceThree(hav);
      if (list[1].type === "mose") finalText += "\n" + createSentenceThree(mose);
      if (list[1].type === "by") finalText += "\n" + createSentenceThree(by);
      if (list[1].type === "skov") finalText += "\n" + createSentenceThree(skov);
      if (list[1].type === "bakke") finalText += "\n" + createSentenceThree(bakke);

  } else if (isPoetry === true) { finalText = "Du " +getRandom(verbPos) + " byen men " + getRandom(verbNeg)+" naturen";
                                //for (var i = 0; i < list.length; i++) {

      if (list[5].type === "hav") finalText += "\n" + createSentenceOne(hav);
      if (list[5].type === "mose") finalText += "\n" + createSentenceOne(mose);
      if (list[5].type === "by") finalText += "\n" + createSentenceOne(by);
      if (list[5].type === "skov") finalText += "\n" + createSentenceOne(skov);
      if (list[5].type === "bakke") finalText += "\n" + createSentenceOne(bakke);
    
      if (list[4].type === "hav") finalText += "\n" + createSentenceTwo(hav);
      if (list[4].type === "mose") finalText += "\n" + createSentenceTwo(mose);
      if (list[4].type === "by") finalText += "\n" + createSentenceTwo(by);
      if (list[4].type === "skov") finalText += "\n" + createSentenceTwo(skov);
      if (list[4].type === "bakke") finalText += "\n" + createSentenceTwo(bakke);
    
      if (list[1].type === "hav") finalText += "\n" + createSentenceThree(hav);
      if (list[1].type === "mose") finalText += "\n" + createSentenceThree(mose);
      if (list[1].type === "by") finalText += "\n" + createSentenceThree(by);
      if (list[1].type === "skov") finalText += "\n" + createSentenceThree(skov);
      if (list[1].type === "bakke") finalText += "\n" + createSentenceThree(bakke);
                                }
  if (isPoetry === false) finalText = "Du kan bedst lide " + list[5].type + " og holder også af " + list[4].type + ". \nDu er ikke ligeså glad for " + list[1].type + ".";

  if (list[0].winner === true && isPoetry === false) finalText += "\nDu er mere knyttet til naturen end til byen.";
  else if (list[0].winner === undefined && isPoetry === false) finalText += "\nDu er lige knyttet til byen og naturen.";
  else if (list[0].winner === false && isPoetry === false) {
    finalText += "\nDu er mere knyttet til byen end naturen.";
  }

  /*finalText += "\n \n \n Dette digt er baseret på at du var positiv overfor særligt de kinesiske tegn der fulgte efter billeder af: " + list[5].type + "\n I de forskellige kategorier var din procent: " + "\n kategori: " + list[1].type + " procent: " + list[1].percent*100
  + "\n kategori: " + list[2].type + " procent: " + list[2].percent*100
  + "\n kategori: " + list[3].type + " procent: " + list[3].percent*100
  + "\n kategori: " + list[4].type + " procent: " + list[4].percent*100  + "\n kategori: " + list[5].type + " procent: " + list[5].percent*10 ;*/

  /*
  finalText += "\n" + createSentenceTwo(skov, verbNeu, adjectivePos);

  finalText += "\n" + createSentenceThree(by);*/

  return finalText;
}


function createSentenceOne(list) {

  var subjects = getWords(list);

  var ord_1 = subjects[0];
  var ord_2 = subjects[1];

  var text = sentences[0]
    .replace("[verbPos]", getRandom(verbPos))
    .replace("[skovN_1]", ord_1)
    .replace("[skovN_2]", ord_2)
  .replace("[actionVerbPos]", getRandom(actionVerbPos));
  //Maybe just return text
  return text;

}

function createSentenceTwo(list1) {

  var subjects = getWords(list1);
  var verbs = getWords(verbNeu);
  var adjectives = getWords(adjectivePos);

  //PT bliver begge "et" ord, 
  var ord_1 = subjects[0];
  var ord_2 = subjects[1];
  
  ord_1 = jsUcfirst(ord_1)

  var verb_1 = verbs[0];
  var verb_2 = verbs[1];

  var adj_1 = adjectives[0];
  var adj_2 = adjectives[1];

  if (checkForEnding(subjects[0])) adj_1 += "t";
  if (checkForEnding(subjects[1])) adj_2 += "t";



  var text2 = sentences[1]
    .replace("[havN_1]", ord_1)
    .replace("[verbNeu_1]", verb_1)
    .replace("[adjectivePos_1]", adj_1)
    .replace("[havN_2]", ord_2)
    .replace("[verbNeu_2]", verb_2)
    .replace("[adjectivePos_2]", adj_2)
  //Maybe just return text
  return text2;

}

function createSentenceThree(list) {


  var pronomen;
  var subjects = getWords(list);
  var ord_1 = subjects[0];
  var ord_2 = subjects[1];
  /*
  if (checkForEnding(ord_1)) pronomen = "det";
  else pronomen = "den";*/

  var text3 = sentences[2]
    .replace("[verbNeg]", getRandom(verbNeg))
    .replace("[byN1]", ord_1)
    .replace("[byN2]", ord_2)
   
    .replace("[actionVerbNeg]", getRandom(actionVerbNeg));
  //Maybe just return text
  return text3;


}



function removeDuplicate(list, word) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === word) {
      //pushes element to memory
      listMemory.push(list[i]);
      //Removes 1 element
      list.splice(i, 1);
    }
  }
}

function resetList(list) {
  //console.log("before: " + list);

  list.push(listMemory[0]);
  listMemory.pop();

}


function checkForEnding(word) {
  //TRUE hvis "et" slutter ordet, vi sender bare et ord fra listen, fordi vi kun bruger bestemt ental går det såvidt jeg ved altid. 
  if (word.includes("et", word.length - 2)) {
    return true
  } else return false;
}

//GETTERS___________________________________________________________

function getWords(list) {
  var word_1 = getRandom(list);
  removeDuplicate(list, word_1);
  var word_2 = getRandom(list);
  resetList(list);

  var words = [word_1, word_2];
  return words;
}


function getRandom(list) {
  //print(list);
  var number = constrain(round(random(list.length)) - 1, 0, list.length - 1);
  // print(number);
  //print(list[number]);
  return list[number]
}


function jsUcfirst(string) 

{

    return string.charAt(0).toUpperCase() + string.slice(1);

}

function pieChart(diameter, data) {
 
  //console.log("graph");
  
  var dataTemp = [];
  
  piePercents = [];
  
  for (i = 0; i<data.length;i++){
   // console.log(data[i]);
    if (data[i].type==="biophillia") 
    {dataTemp.push(data[i]);data.splice(i,1);}
    if (data[i].type==="by") {dataTemp.push(data[i]);data.splice(i,1);}
    
  }
   
  //console.log(dataTemp);
  //console.log(data);
  
  let lastAngle = 0;
  let angle = 0;
  let piePercent = 0;


  for (i = 0; i < data.length; i++) {
    //console.log(data[i].percent);
    total += data[i].percent;
  }

  for (i = 0; i < data.length; i++) {
    currentData = data[i].percent;
    angle = (currentData / total) * 360;
    piePercent = (currentData/total) * 100;
   
    
    
    angles.push(angle);
    let red = map(i, 0, data.length, 100, 255);
    let green = map(i, 0, data.length, 150, 250);
    let blue = map(i, 0, data.length, 0, 200);
    
    if(i===0){red=255;green=0;blue=0;}
    if(i===1){red=255;green=255;blue=0;}
    if(i===2){red=255;green=150;blue=50;}
    if(i===3){red=100;green=100;blue=255;}
    
    fill(red,green,blue);
    
    push();
    translate(windowWidth/2, (windowHeight/2)+100);
    arc(0, 0, diameter, diameter, lastAngle, lastAngle + radians(angles[i]));

    var number = data[i].piePercent*100;
var rounded = Math.round(number * 10) / 10
// rounded is 12.3
 
    pop();
    
    
    rect(windowWidth/4, (windowHeight / 2)+60*i, 30, 30);
    fill(0);
    text(jsUcfirst(data[i].type) + " : "+ rounded + "%",(windowWidth/4), (windowHeight / 2)+(60*i)-5);
    
    lastAngle += radians(angles[i]);
  }
  
  for(i=0;i<dataTemp.length;i++){
    data.push(dataTemp[i]);
  }
  
  //console.log(data);
  return data;
}