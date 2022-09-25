import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Callable } from './callable';
import { ConstructorDemo } from './constructorDemo';
import { TestService } from './test.service';
import { Viber } from './viber';
import { WhatsApp } from './whatsApp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit{

  callable: Callable = new WhatsApp();

  constructor(private testService: TestService, public constructorDemo: ConstructorDemo) {
    console.log("constructor called for app")
    this.constructorDemo.setName("Pramod")
  }
  ngOnInit(): void {
    console.log("ngOnInit called for app")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called for app")
  }
}
