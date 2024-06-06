'use strict';
function calculateTeamFinanceReport(salaries, team) {
    const report = {
        totalBudgetTeam: 0
    };

    // Initialize all specializations in the report with 0
    for (let specialization in salaries) {
        const prop = `totalBudget${specialization}`;
        report[prop] = 0;
    }

    team.forEach(member => {
        const specialization = member.specialization;
        const salaryDetails = salaries[specialization];

        if (salaryDetails) {
            const salary = salaryDetails.salary;
            const tax = parseFloat(salaryDetails.tax) / 100;
            const netSalary = salary - (salary * tax);

            report.totalBudgetTeam += netSalary;

            const prop = `totalBudget${specialization}`;
            report[prop] += netSalary;
        }
    });

    report.totalBudgetTeam = Math.round(report.totalBudgetTeam);
    for (let specialization in salaries) {
        const prop = `totalBudget${specialization}`;
        report[prop] = Math.round(report[prop]);
    }

    return report;
}
const salaries1 = {
    Manager: { salary: 1000, tax: "10%" },
    Designer: { salary: 600, tax: "30%" },
    Artist: { salary: 1500, tax: "15%" },}
 const team1 = [
    { name: "Misha", specialization: "Manager" },
    { name: "Max", specialization: "Designer" },
    { name: "Vova", specialization: "Designer"},
    { name: "Leo", specialization: "Artist"},]
 const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
 console.log(JSON.stringify(financeReport1))

