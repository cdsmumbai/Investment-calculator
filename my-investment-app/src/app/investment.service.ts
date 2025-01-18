import { Injectable, signal } from "@angular/core";
import type { InvestmentInput } from "./investment-input.model";

@Injectable({providedIn:'root'})
/*
export class InvestmentService {
      resultData? :{
       year : number;
       interest : number;
       valueEndOfYear : number;
       annualInvestment:number;
       totalInterest: number;
       totalAmountInvested : number;
}[] ;
*/


      //serving  with  signal 
export class InvestmentService {      
      resultData=signal<{
       year : number;
       interest : number;
       valueEndOfYear : number;
       annualInvestment:number;
       totalInterest: number;
       totalAmountInvested : number;
}[] | undefined> (undefined);



    CalculateInvestmentResults(data : InvestmentInput) {
      // {initialInvestment:number, duration : number, expectedReturn : number,annualInvestment : number }) {
     const {initialInvestment,annualInvestment,expectedReturn,duration}=data;
        
     const  annualData = [];
     let investmentValue=initialInvestment;
     
     for (let i =0; i < duration; i++) {
        const  year = i + 1;
        const  interestEarnedInYear = investmentValue * (expectedReturn /100);
        investmentValue += interestEarnedInYear + annualInvestment;
        const  totalInterest = 
            investmentValue - annualInvestment * year - initialInvestment;
         annualData.push ({
             year :  year,
             interest: interestEarnedInYear,
             valueEndOfYear : investmentValue,
             annualInvestment: annualInvestment,
             totalInterest: totalInterest,
             totalAmountInvested: initialInvestment + annualInvestment * year,
         
         });        
 
     }
     //return annualData;
     console.log(annualData);
     //this.resultsData=annualData;   before  changing  into  signal 
    // this.resultsData.set(annualData);   not  rquired for  servicing 
    //this.resultData=annualData    with  serving before  signal
  this.resultData.set(annualData)

 } 
   title = 'my-investment-app';
 }
   