//Functions for the index page

function processForm() {
    //establish variables and bring in info from form
    let iAssign = parseInt(document.getElementById("assignments").value);
    let iGroup = parseInt(document.getElementById("group").value);
    let iQuiz = parseInt(document.getElementById("quizzes").value);
    let iExam = parseInt(document.getElementById("exams").value);
    let iIntex = parseInt(document.getElementById("intex").value);
    let output = '';

    //accumulate user input score
    let iScore = iAssign + iGroup + iQuiz + iExam + iIntex;

    //get a grade letter for concat
    let sGradeLetter = gradeCalc(iScore);

    output = "You scored a " + iScore + "% in IS 413." + "That is a(n) " + sGradeLetter + "!";

    //return output to HTML
    document.getElementById('output-container').innerHTML = output;
    document.getElementById('output-container').style = "color: royalblue;";

}

function gradeCalc(score) {
    if (score >= 94) {
        return ("A");
    }
    else if (score < 94 && score >= 90) {
        return ("A-");
    }
    else if (score < 90 && score >= 87) {
        return ("B+");
    }
    else if (score < 87 && score >= 84) {
        return ("B");
    }
    else if (score < 84 && score >= 80) {
        return ("B-");
    }
    else if (score < 80 && score >= 77) {
        return ("C+");
    }
    else if (score < 77 && score >= 74) {
        return ("C");
    }
    else if (score < 74 && score >= 70) {
        return ("C-");
    }
    else if (score < 70 && score >= 67) {
        return ("D+");
    }
    else if (score < 67 && score >= 64) {
        return ("D");
    }
    else if (score < 64 && score >= 60) {
        return ("D-");
    }
    else {
        return ("E");
    }
}