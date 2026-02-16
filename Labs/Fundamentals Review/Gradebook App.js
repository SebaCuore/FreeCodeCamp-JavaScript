const getAverage = (testScoresArr) => {
    let sum = 0;
    for (let score of testScoresArr) {
        sum += score;
    }
    return sum / testScoresArr.length;
}

const getGrade = (studentScore) => {
    if (studentScore < 60) {
        return 'F'; 
    } else if (studentScore < 70) {
        return 'D'; 
    } else if (studentScore < 80) {
        return 'C'; 
    } else if (studentScore < 90) {
        return 'B'; 
    } else if (studentScore < 100) {
        return 'A';
    } else if (studentScore === 100) {
        return 'A+';
    } else {
        return 'Invalid score';
    }
}

const hasPassingGrade = (studentScore) => {
    if (getGrade(studentScore) === 'F' || getGrade(studentScore) === 'Invalid score') {
        return false;
    }    
    return true;
}

const studentMsg = (scoresArr, studentScore) => {
    if (hasPassingGrade(studentScore)) {
        return `Class average: ${getAverage(scoresArr)}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
    } else {
        return `Class average: ${getAverage(scoresArr)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
    }
}
