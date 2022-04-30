import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = 'password';
  passwords: string[] = [];
  passwordArray: string[] = [];
  letters: string[] = [];
  deflautLives = 6;
  lives = this.deflautLives;
  streak = 0;
  end: boolean = false;
  won: boolean = false;
  constructor() {
    this.passwords.push('chleb');
    this.passwords.push('komputer');
    this.passwords.push('miska');
    this.passwords.push('klawiatura');
    this.passwords.push('kot');
    this.passwords.push('pies');
    this.passwords.push('mleko');
    this.passwords.push('kaloryfer');
    this.passwords.push('okno');
    this.passwords.push('guzik');
    this.Reset();
  }
  InputValue(value: string){
    let foundInLetters = false;
    let foundInPassword = false;
    for (let index = 0; index < this.letters.length; index++) {
      if(this.letters[index] == value){
        foundInLetters = true;
      }
    }
    for (let index = 0; index < this.password.length; index++) {
      if(this.password[index] == value){
        foundInPassword = true;
      }
    }
    if(!foundInLetters && foundInPassword){
      if(!this.ResetCheck()){
        this.letters.push(value);
      }
    }else{
      if(this.lives > 0){
        this.lives--;
      }
    }
    if(this.ResetCheck()){
      for (let index = 0; index < this.password.length; index++) {
        this.letters.push(this.password[index]);        
      }
    }
  }
  Reset(){
    this.end = false;
    this.letters = [];
    this.lives = this.deflautLives;
    let passwordIndex = Math.floor(Math.random() * (this.passwords.length - 1));
    // Math.floor(Math.random() * (max - min)) + min
    this.passwordArray = [];
    this.password = this.passwords[passwordIndex];
    for (let index = 0; index < this.password.length; index++) {
      this.passwordArray.push(this.password[index]);
    }
  }
  ResetCheck(): boolean{
    let foundEveryLetter = true;
    if(this.lives <= 0){
      this.streak = 0;
      this.end = true;
      this.won = false;
      return true;
    }
    for (let i = 0; i < this.password.length; i++) {
      let foundLetter = false;
      for (let j = 0; j < this.letters.length; j++) {
        if(this.password[i] == this.letters[j]){
          foundLetter = true;
          // break;
        }
      }
      if(!foundLetter){
        foundEveryLetter = false;
        break;
      }
    }
    if(foundEveryLetter){
      this.streak++;
      this.end = true;
      this.won = true;
      return true;
    }
    return false;
  }
}
