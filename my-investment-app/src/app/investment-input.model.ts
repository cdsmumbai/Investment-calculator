//one  way
export interface InvestmentInput {
    initialInvestment : number;
    duration:number;
    expectedReturn:number;
    annualInvestment:number;
}
/*  other  way 
export type InvestmentInput= {
    initialInvestment : number;
    duration:number;
    expectedReturn:number;
    annualInvestment:number;
}
*/