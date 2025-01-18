import {Component} from '@angular/core';
import { UserInputComponent } from "./user-input/user-input.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { InvestmentInput } from './investment-input.model';
//import  {HeaderComponent} from "./header/header.component"; 

@Component({
  selector : 'app-root',
  standalone : true,
  imports: [UserInputComponent, HeaderComponent, InvestmentResultComponent, InvestmentResultsComponent],
  templateUrl:'./app.component.html',
}) 

export class AppComponent{
resultsData: any;
onCalculateInvestmentResults($event: InvestmentInput) {
throw new Error('Method not implemented.');
}
}


/*import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'my-investment-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-investment-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, my-investment-app');
  });
});
*/