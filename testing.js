function inning(){
    let points = Math.floor(Math.random() * 3);
    return points;
}

function finalScore(callback, numInnings){
    const output = {
      "Home": 0,
      "Away": 0
    }
    for (let i = 0; i <= numInnings; i++) {
      output.Home += callback();
      output.Away += callback();
    }
    return output;
  }

  function getInningScore(callback) {
    const inningScore = {
      "Home": 0,
      "Away": 0
    }
    inningScore.Home += callback();
    inningScore.Away += callback();
    return inningScore;
  }

  function scoreboard(getBoth, getScore, innings) {
    const output = []
    const count = {
      "Away": 0,
      "Home": 0
    };
    for (let i = 1; i <= innings; i++) {
      
      let inningScore = getBoth(getScore)
      let awayScore = inningScore.Away;
      let homeScore = inningScore.Home;

      output.push(`Inning ${i}: Away ${String(awayScore)} - Home ${String(homeScore)}`)
      count.Away += awayScore;
      count.Home += homeScore;
    }
    if(count.Away != count.Home) {
      output.push(`Final Score: Away ${String(count.Away)} - Home ${String(count.Home)}`)
    } else {
      output.push(`This game will require extra innings: Away ${String(count.Away)} - Home ${String(count.Home)}`)
    }
    
    return output;
  }
console.log(scoreboard(getInningScore, inning, 9))