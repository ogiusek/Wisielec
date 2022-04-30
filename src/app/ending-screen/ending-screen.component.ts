import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ending-screen',
  templateUrl: './ending-screen.component.html',
  styleUrls: ['./ending-screen.component.css']
})
export class EndingScreenComponent{
  @Input('won') won = false;
  @Output('reset') resetEmiter = new EventEmitter<{}>();
  
  Reset(){
    this.resetEmiter.emit();
  }
}