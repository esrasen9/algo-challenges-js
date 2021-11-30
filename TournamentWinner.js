function tournamentWinner(competitions, results) {
    const scores = {};
    let winner = "";
    let winnerPoint = 0;
    for (let i = 0; i < competitions.length; i++) {
        const team1 = competitions[i][0]
        const team2 = competitions[i][1];
        if (results[i] === 1) {
            scores[team1] ? scores[team1] += 3 : scores[team1] = 3;
            if (isWinner(scores, winnerPoint, team1)) winner = team1
        } else {
            scores[team2] ? scores[team2] += 3 : scores[team2] = 3;
            if (isWinner(scores, winnerPoint, team2)) winner = team2
        }
        winnerPoint = scores[winner];
    }
    return winner;
}

function isWinner(scores, winnerPoint, team) {
    return (scores[team] >= winnerPoint);
}