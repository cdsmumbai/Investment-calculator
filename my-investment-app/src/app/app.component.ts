import { Component, signal } from '@angular/core';
//for  migrating  module
//import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//following imports removed  for  migrating  
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentInput } from './investment-input.model';
@Component({
  selector: 'app-root',
  //standalone: true,   removed  for  migrating  to  angular module 
  //standalone: true, 
  //imports: [RouterOutlet],
 // removed  for migrating to angular  module  both  imports  and standalone
 // imports:[HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
// investment  calculation  code  either  under  this  or  in separate  file 
//add  variables
// destructure data  

//removed  for  migrating  to angular module
export class AppComponent {
   resultsData = signal<{
    year : number;
    interest : number;
    valueEndOfYear : number;
    annualInvestment:number;
    totalInterest: number;
    totalAmountInvested : number;
}[] | undefined>(undefined);
// before  changing  signal 
  /*resultsData?:  {
    year : number;
    interest : number;
    valueEndOfYear : number;
    annualInvestment:number;
    totalInterest: number;
    totalAmountInvested : number;

}[] ;
*/
  onCalculateInvestmentResults(data : InvestmentInput) {
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
    this.resultsData.set(annualData);
} 
  title = 'my-investment-app';
}
