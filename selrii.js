const fs = require('fs');

// Function to calculate HRA
function calculateHRA(basicSalary) {
    return basicSalary * 0.2; // Assuming HRA is 20% of basic salary
}

// Function to calculate DA
function calculateDA(basicSalary) {
    return basicSalary * 0.1; // Assuming DA is 10% of basic salary
}

// Function to calculate gross salary
function calculateGrossSalary(basicSalary) {
    const hra = calculateHRA(basicSalary);
    const da = calculateDA(basicSalary);
    return basicSalary + hra + da;
}

// Main function
function main() {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const employeeData = JSON.parse(data);
        for (const employee of employeeData) {
            const basicSalary = employee.basicSalary;
            const grossSalary = calculateGrossSalary(basicSalary);

            console.log(`Name: ${employee.name}`);
            console.log(`Basic Salary: $${basicSalary}`);
            console.log(`HRA: $${calculateHRA(basicSalary)}`);
            console.log(`DA: $${calculateDA(basicSalary)}`);
            console.log(`Gross Salary: $${grossSalary}`);
            console.log('------------------------');
        }
    });
}

// Call the main function
main();
