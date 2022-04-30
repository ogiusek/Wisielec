import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent{
  @Input('lives') lives: number = 0;
  constructor() { }
  

}
