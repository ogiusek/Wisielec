import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
  @Output('press') pressedButton = new EventEmitter<{content: string}>();
  constructor() { }

  Emit(button: string){
    this.pressedButton.emit({content: button});
  }
}
