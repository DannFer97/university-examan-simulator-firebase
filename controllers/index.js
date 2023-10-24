// json array movement variable
var i = 0;
var correctCount = 0 ;
//initialize the first question
generate(0);
// generate from json array data with index
function generate(index) {
    document.getElementById("question").innerHTML = preguntas[index].question;
    document.getElementById("ans1").innerHTML = preguntas[index].answer1;
    document.getElementById("ans2").innerHTML = preguntas[index].answer2;
    document.getElementById("ans3").innerHTML = preguntas[index].answer3;
    document.getElementById("ans4").innerHTML = preguntas[index].answer4;
}

function checkAnswer() {
    if (document.getElementById("answer1").checked && jsonData[i].answer1 == preguntas[i].correctAnswer) {
       correctCount++;
    }
    if (document.getElementById("answer2").checked && jsonData[i].answer2 == preguntas[i].correctAnswer) {
        correctCount++;
    }
    if (document.getElementById("answer3").checked && jsonData[i].answer3 == preguntas[i].correctAnswer) {
        correctCount++;
    }
    if (document.getElementById("answer4").checked && jsonData[i].answer3 == preguntas[i].correctAnswer) {
        correctCount++;
    }
    // increment i for next question
    i++;
    if(preguntas.length-1 < i){
        document.write("<body style='background-color:#348322;'>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>*****Your score is : "+correctCount+"*****</div>");
        document.write("</body>");
    }
    // callback to generate
    generate(i);
}