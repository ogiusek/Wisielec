import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent{
  @Input('password') password: string = 'password';
  @Input('letters') letters: string[] = [];
  @Input('passwordArray') passwordArray: string[] = [];
  foundLetter = false;
  constructor(){
  }
  GetLetter(letter: string): boolean{
    let found = false;
    for (let index = 0; index < this.letters.length; index++) {
      if(letter == this.letters[index]){
        found = true;
        break;
      }
    }
    this.foundLetter = found;
    return found;
  }
}