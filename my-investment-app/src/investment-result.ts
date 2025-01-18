import { DEFAULT_INTERPOLATION_CONFIG } from "@angular/compiler";

function calculateInvestmentResults() {
    const  annualData = [];
    let investmentValue=initialInvestment;
    
    for (let i =0; i < duration; i++) {
        const  year = i + 1;
       const  interestEarnedYear = investmentValue * (expectedReturn /100);
       investmentValue = interestEarnedYear + annualInvestment;
       const  totalInterest = 
           inverstmentValue = annualInvestment * year - initialInvestment;
        annualData.push ({
            year :  year,
            interest: inierestEarnedInYear,
            valueEndOfYear : investmentValue,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
        
        });        

    }
    return annualData;
}

