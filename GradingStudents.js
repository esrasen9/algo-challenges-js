function gradingStudents(grades) {
    const result = [];
    grades.map(grade => {
        if(grade < 38){
            result.push(grade);
        }
        else {
            const remainder = grade % 10;
            let roundGrade =
                (remainder <= 5) ? grade + (5-remainder) :  grade + (10-remainder);

            (roundGrade-grade<3)
                ? result.push(roundGrade)
                : result.push(grade);
        }
    });
    return result;
}

console.log(gradingStudents([73,67,38,33]))