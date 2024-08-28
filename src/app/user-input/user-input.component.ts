import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investment } from '../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})


export class UserInputComponent {

  investmentInput!:Investment;

  enteredInitialInvestment!:number;
  enteredAnnualInvestment!:number;
  enteredExpectedReturn!:number;
  enteredExpectedDuration!:number;
  investmentresult:boolean=false;
  @Output() add = new EventEmitter<Investment>();

  
  onSubmit(){
    this.add.emit({
      initialInvestment:this.enteredInitialInvestment,
      annualInvestment:this.enteredAnnualInvestment,
      duration:this.enteredExpectedDuration,
      expectedReturn:this.enteredExpectedReturn
    });
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredExpectedDuration);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredInitialInvestment);
    
    
  }

}
