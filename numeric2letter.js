// This program *calculates* a **letter grade** based on a *numeric grade**

// assign numeric grade
let numericGrade = 99;

// assign letter grades to numeric values

if (numericGrade >= 90){
    console.log(`a numeric grade of ${numericGrade} is letter grade A+`);

} else if (numericGrade >= 85 && numericGrade <=89){
    console.log(`a numeric grade of ${numericGrade} is letter grade A`);

} else if (numericGrade >= 80 && numericGrade <=84){
    console.log(`a numeric grade of ${numericGrade} is letter grade A-`);

} else if (numericGrade >= 77 && numericGrade <=79){
    console.log(`a numeric grade of ${numericGrade} is letter grade B+`);

} else if (numericGrade >= 73 && numericGrade <=76){
    console.log(`a numeric grade of ${numericGrade} is letter grade B`);

} else if (numericGrade >= 70 && numericGrade <=72){
    console.log(`a numeric grade of ${numericGrade} is letter grade B-`);

} else if (numericGrade >= 67 && numericGrade <=69){
    console.log(`a numeric grade of ${numericGrade} is letter grade C+`);

} else if (numericGrade >= 60 && numericGrade <=66){
    console.log(`a numeric grade of ${numericGrade} is letter grade C`);

}else if (numericGrade <60 && numericGrade>=51){
    console.log(`a numeric grade of ${numericGrade} is letter grade D`);

}else if (numericGrade <=50){
    console.log(`a numeric grade of ${numericGrade} is letter grade F`);
}
