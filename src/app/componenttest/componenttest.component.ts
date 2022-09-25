import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConstructorDemo } from '../constructorDemo';
import { TestService } from '../test.service';

@Component({
  selector: 'app-componenttest',
  templateUrl: './componenttest.component.html',
  styleUrls: ['./componenttest.component.css']
})
export class ComponenttestComponent implements OnInit, OnChanges{

  @Input()
  public name: string | undefined;

  constructor(public constructorDemo: ConstructorDemo) {
    console.log("constructor called for ComponenttestComponent")
  }
  ngOnInit(): void {
    console.log("ngOnInit called for ComponenttestComponent")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log("ngOnChanges called for ComponenttestComponent")
  }
}
