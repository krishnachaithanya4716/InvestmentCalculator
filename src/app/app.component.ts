import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { NgIf } from '@angular/common';
import { type Investment, type InvestmentannualData } from './investment.model';
import { CalculationService } from './calculation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[HeaderComponent,UserInputComponent,InvestmentResultsComponent,NgIf]
})
export class AppComponent {

  showResult:boolean = false;

  constructor(private calculationService: CalculationService){}

  annualData!:InvestmentannualData[];
  
  
  // calculateInvestmentResults(initialInvestment:number,expectedReturn:number,duration:number,annualInvestment:number):InvestmentannualData[] {
  //   this.annualData = [];
  //   let investmentValue = initialInvestment;
  
  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //     investmentValue += interestEarnedInYear + annualInvestment;
  //     const totalInterest =
  //       investmentValue - annualInvestment * year - initialInvestment;
  //     this.annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year,
  //     });
  //   }
  
  //   return this.annualData;
  //   console.log(this.annualData);
  // }  
  
  


  onCalculate(Investmentdata:Investment){
    this.showResult=true;
    this.annualData=this.calculationService.calculateInvestmentResults(Investmentdata.initialInvestment,Investmentdata.expectedReturn,Investmentdata.duration,Investmentdata.annualInvestment);
    
   console.log(this.annualData);
  }


}
