function getLandscapeType(number) {

  var landscapeType = "";

  for (var i = 0; i < bakkeNumbers.length; i++) {
    if (number === bakkeNumbers[i]) {
      landscapeType = "bakke";
      return landscapeType;
    }
  }

  for (var i = 0; i < cityNumbers.length; i++) {
    if (number === cityNumbers[i]) {
      landscapeType = "by";
      return landscapeType;
    }
  }

  for (var i = 0; i < waterNumbers.length; i++) {
    if (number === waterNumbers[i]) {
      landscapeType = "hav";
      return landscapeType;
    }
  }

  for (var i = 0; i < moseNumbers.length; i++) {
    if (number === moseNumbers[i]) {
      landscapeType = "mose";
      return landscapeType;
    }
  }

  for (var i = 0; i < forestNumbers.length; i++) {
    if (number === forestNumbers[i]) {
      landscapeType = "skov";
      return landscapeType;
    }
  }




}

function getResultsOn(list) {

  console.log(list);
  var results = [{
      "type": "hav",
      "score": 0,
      "percent": 0,
      "pictures": waterSize
    },
    {
      "type": "bakke",
      "score": 0,
      "percent": 0,
      "pictures": bakkeSize

    },
    {
      "type": "skov",
      "score": 0,
      "percent": 0,
      "pictures": forestSize

    }, {
      "type": "by",
      "score": 0,
      "percent": 0,
      "pictures": citySize

    }, {
      "type": "mose",
      "score": 0,
      "percent": 0,
      "pictures": moseSize
    }, {
      "type": "biophillia",
      "score": 0,
      "percent": -1,
      "winner": false,
      "pictures": sampleSize
    }
  ]
  for (var i = 0; i < data.length; i++) {
    if (data[i].landscapetype === "hav" && data[i].liked === true) {
      results[0].score += 1;
      results[0].percent = results[0].score / results[0].pictures;
    }
  }
  for (var i = 0; i < data.length; i++) {
    if (data[i].landscapetype === "bakke" && data[i].liked === true) {
      results[1].score += 1;
      results[1].percent = results[1].score / results[1].pictures;
    }
  }
  for (var i = 0; i < data.length; i++) {
    if (data[i].landscapetype === "skov" && data[i].liked === true) {
      results[2].score += 1;
      results[2].percent = results[2].score / results[2].pictures;
    }
  }
  for (var i = 0; i < data.length; i++) {
    if (data[i].landscapetype === "by" && data[i].liked === true) {
      results[3].score += 1;
      results[3].percent = results[3].score / results[3].pictures;
    }
  }

  for (var i = 0; i < data.length; i++) {
    if (data[i].landscapetype === "mose" && data[i].liked === true) {
      results[4].score += 1;
      results[4].percent = results[4].score / results[4].pictures;
    }
  }
  
    var totalBioPercent=results[0].percent+results[1].percent+results[2].percent+results[4].percent
  
  
  results[0].piePercent=results[0].percent/totalBioPercent;
  results[1].piePercent=results[1].percent/totalBioPercent;
  results[2].piePercent=results[2].percent/totalBioPercent;
  
  //BY SKAL IKKE HAVE EN PIE PERCENT
//results[3].piePercent=results[3]/totalBioPercent;
  
  results[4].piePercent=results[4].percent/totalBioPercent;
 


  var biophillia = (results[4].percent + results[2].percent + results[1].percent + results[0].percent) / 4

  if (biophillia > results[3].percent) results[5].winner = true;
  else if (biophillia === results[3].percent) results[5].winner = undefined;
  
  //sortList fungere ikke altid
  //den kan sige forkert i textFunction

  sortList(results);
  return results;
}

function sortList(list) {

  list.sort((a, b) => (a.percent > b.percent) ? 1 : -1)
  return list;

}