//Учениците могат да кандидатстват за социална стипендия или за стипендия за отличен успех. Изискване за социална стипендия - доход на член от семейството по-малък от минималната работна заплата и успех над 4.5. Размер на социалната стипендия - 35% от минималната работна заплата. Изискване за стипендия за отличен успех - успех над 5.5, включително. Размер на стипендията за отличен успех - успехът на ученика, умножен по коефициент 25. Напишете програма, която при въведени доход, успех и минимална работна заплата, дава информация дали ученик има право да получава стипендия, и стойността на стипендията, която е по-висока за него.

function solve(input) {
    let salary = +input.shift();
    let grades = +input.shift();
    let minSalary = +input.shift();
    let socialScholarship = 0;
    let excellentScholarship = 0;
    if (salary < minSalary && grades > 4.50) {
        socialScholarship = minSalary * 0.35;
    }
    if (grades >= 5.5) {
        excellentScholarship = grades * 25;
    }
    if (socialScholarship > excellentScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if (socialScholarship < excellentScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
    } else {
        console.log("You cannot get a scholarship!");
    }
}
