//using  service  cross  componet 
//import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { Component, signal } from '@angular/core';

//import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';
//import type { InvestmentInput } from '../investment-input.model';


@Component({
  selector: 'app-user-input',
  //standalone: true,
 // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
// calculate =output  one  way    angular  17  &  above
// calculate=new EventEmitter()

export class UserInputComponent {
  //calculate=output()
  //calculate=new EventEmitter();
  //after  signal
 // calculate=< InvestmentInput> ();  not  required  for  modeling
  enteredInitialInvestment =signal('0');
  enteredAnnualInvestment =signal('0');
  enteredExpectedReturn =signal('5');
  enteredDuration =signal('10');

  constructor(private investmentService: InvestmentService) {}
  onSubmit() {  
    this.investmentService.CalculateInvestmentResults({
    initialInvestment: +this.enteredInitialInvestment(),
    duration:+this.enteredDuration(),
    expectedReturn:+this.enteredExpectedReturn(),
    annualInvestment:+this.enteredAnnualInvestment(),
  });
  this.enteredInitialInvestment.set('0');
  this.enteredAnnualInvestment.set('0');
  this.enteredExpectedReturn.set('0');
  this.enteredDuration.set('0');
  }
}

/*

//import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { Component, output, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
// calculate =output  one  way    angular  17  &  above
// calculate=new EventEmitter()

export class UserInputComponent {
  //calculate=output()
  //calculate=new EventEmitter();
  //after  signal
  calculate=output< InvestmentInput> ();
  enteredInitialInvestment =signal('0');
  enteredAnnualInvestment =signal('0');
  enteredExpectedReturn =signal('5');
  enteredDuration =signal('10');
  onSubmit() {  
    this.calculate.emit( {
    initialInvestment: +this.enteredInitialInvestment(),
    duration:+this.enteredDuration(),
    expectedReturn:+this.enteredExpectedReturn(),
    annualInvestment:+this.enteredAnnualInvestment(),
  });
  this.enteredInitialInvestment.set('0');
  this.enteredAnnualInvestment.set('0');
  this.enteredExpectedReturn.set('0');
  this.enteredDuration.set('0');
  }
}

    //berfore  signal
  /*  this.calculate.emit( {
      initialInvestment: +this.enteredInitialInvestment,
      duration:+this.enteredDuration,
      expectedReturn:+this.enteredExpectedReturn,
      annualInvestment:+this.enteredAnnualInvestment
    });
    */
    /*after  signal  but  fefore  making  changes
    this.calculate.emit( {
      initialInvestment: +this.enteredInitialInvestment(),
      duration:+this.enteredDuration(),
      expectedReturn:+this.enteredExpectedReturn(),
      annualInvestment:+this.enteredAnnualInvestment(),
    });
*/
 //before  investment input 
  //@Output()calculate=new EventEmitter<  {
  //  initialInvestment: number;
  //  duration : number;
  //  expectedReturn : number;
  //  annualInvestment:number;
  //}>();
/*
  @Output()calculate=new EventEmitter< InvestmentInput> ();
  enteredInitialInvestment ='0';
  enteredAnnualInvestment ='0';
  enteredExpectedReturn ='5';
  enteredDuration ='10'; */
  /*after singal 
  enteredInitialInvestment =signal('0');
  enteredAnnualInvestment =signal('0');
  enteredExpectedReturn =signal('5');
  enteredDuration =signal('10');
  onSubmit() { 
  */
    //berfore  signal
  /*  this.calculate.emit( {
      initialInvestment: +this.enteredInitialInvestment,
      duration:+this.enteredDuration,
      expectedReturn:+this.enteredExpectedReturn,
      annualInvestment:+this.enteredAnnualInvestment
    });
    */
    /*after  signal
    this.calculate.emit( {
      initialInvestment: +this.enteredInitialInvestment(),
      duration:+this.enteredDuration(),
      expectedReturn:+this.enteredExpectedReturn(),
      annualInvestment:+this.enteredAnnualInvestment(),
    });
    */
  /*  consol
  /*  console.log('SUBMITTED!');
    console.log(this. enteredInitialInvestment);
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);
  

    
    }

}
*/
