"use strict";
// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן
// דגשים
// שחקן  יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2'
// התשובה חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה
var gameOption;
(function (gameOption) {
    gameOption["ROCK"] = "rock";
    gameOption["PAPER"] = "paper";
    gameOption["SCISSORS"] = "scissors";
})(gameOption || (gameOption = {}));
function playGame(player1, player2) {
    if (player1 === player2)
        return "ds";
    if ((player1 === gameOption.ROCK && player2 === gameOption.SCISSORS) ||
        (player1 === gameOption.PAPER && player2 === gameOption.ROCK) ||
        (player1 === gameOption.SCISSORS && player2 === gameOption.PAPER))
        return "playerOne";
    return "playerTwo";
}
const player1 = gameOption.PAPER;
const player2 = gameOption.PAPER;
const play = playGame(player1, player2);
console.log(play);
//Output: player1 or player2 or tie
