document.querySelector("#submit1").onclick = function(){
var WordsForMyGame = [
    "оладушки",
    "камень",
    "акула",
    "револьвер",
    "составное",
    "подчинительное",
    "сказуемое",
    "корень",
    "степень",
    "окно",
    "висилица",
    "человечик",
    "игра",
    "фортнайт",
    "слово",
    "пустота",
    "воздух",
    "ничего",
    "котик"
];

var bugovi = [
    'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 
	'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
]

var word = WordsForMyGame[Math.floor(Math.random() * WordsForMyGame.length)];

var answer = [];
for (var i = 0; i < word.length; i++) {
    answer[i] = "_";
};

var remeingLetters = word.length;
var hod = 5
while(remeingLetters > 0) {
    alert(answer.join(' '));
    var guess = prompt("Введите букву или нажмите отмена для прекращения игры, осталось совершить ошибок до проигрыша: " + hod);
    console.log(guess)
    if (guess === null) {
        alert("Загаданное слово: " + word)
        break   
    } else if (guess.length !==1) {
        while (guess.length !==1) {
            guess = prompt("Пожалуйста введите только 1 букву или нажмите отмена для прекращения игры, осталось совершить ошибок до проигрыша: " + hod);
            if (guess === null) {
                alert("Загаданное слово: " + word)
                remeingLetters = 0
            } 
        }   
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answer[j] = guess;
                remeingLetters--

            }
        }
    }
    console.log(answer)
    console.log(guess)

    if (guess == answer) {
        alert(answer.join(""));
        alert("Отлично! ты победил, было загадано слово: " + word)
    }
};


}