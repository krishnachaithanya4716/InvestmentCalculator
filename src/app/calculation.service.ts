import { Injectable } from '@angular/core';
import { InvestmentannualData } from './investment.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  annualData:InvestmentannualData[] = [];

  constructor() { }

  calculateInvestmentResults(initialInvestment:number,expectedReturn:number,duration:number,annualInvestment:number):InvestmentannualData[] {
   
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
        this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return this.annualData;


}
}