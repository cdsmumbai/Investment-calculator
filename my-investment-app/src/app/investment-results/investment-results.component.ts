//import { Component, Input, input } from '@angular/core';
import { Component,  computed,  inject,  input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService=inject(InvestmentService);
  
  results=computed(()=>this.investmentService.resultData()); 

 // get results() {
  //  return this.investmentService.resultData;
 // }
}
/* not  required  for servicing 
  //after  signal 
 results=input<{
       year : number;
       interest : number;
       valueEndOfYear : number;
       annualInvestment:number;
       totalInterest: number;
       totalAmountInvested : number;
}[] >()
}
//;  one  way and  otehr  way  is  below 
   
       // @Input() results : ...;
       //not  required  aftr sigal
       /*
  @Input() results? : {
       year : number;
       interest : number;
       valueEndOfYear : number;
       annualInvestment:number;
       totalInterest: number;
       totalAmountInvested : number;
 
   }[] ;

}
*/
/*  before  serving
//import { Component, Input, input } from '@angular/core';
import { Component,  input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  //after  signal 
 results=input<{
       year : number;
       interest : number;
       valueEndOfYear : number;
       annualInvestment:number;
       totalInterest: number;
       totalAmountInvested : number;
}[] >()
}
//;  one  way and  otehr  way  is  below 
   
       // @Input() results : ...;
       //not  required  aftr sigal
       /*
  @Input() results? : {
       year : number;
       interest : number;
       valueEndOfYear : number;
       annualInvestment:number;
       totalInterest: number;
       totalAmountInvested : number;
 
   }[] ;

}
*/