import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, ElementRef, HostListener,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input()
  public name: string | undefined;

  constructor(private host: ElementRef<HTMLElement>) {
    console.log("constructor called for TestComponent")

    setTimeout(() => {
      this.host.nativeElement.remove();
    }, 6000)
  }

  ngOnInit(): void {
    console.log("ngOnInit called for TestComponent")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called for TestComponent")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called for TestComponent")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called for TestComponent")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called for TestComponent")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called for TestComponent")
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called for TestComponent")
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    console.log("ngOnDestroy called for TestComponent")
  }
}
