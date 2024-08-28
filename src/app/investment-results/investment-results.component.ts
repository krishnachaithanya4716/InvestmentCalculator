import { Component, Input } from '@angular/core';
import { type InvestmentannualData } from '../investment.model';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgFor,CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  @Input() InvestmentData!:InvestmentannualData[];



}
