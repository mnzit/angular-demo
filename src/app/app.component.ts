import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component, ComponentRef,
  ElementRef,
  OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {TestComponent} from "./test/test.component";

type generateRandomString = (x: number) => string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterContentChecked{

  @ViewChild(TestComponent, {read: ViewContainerRef, static: true})
  public testComponent!: ComponentRef<TestComponent>;

  public name: string = "Shyam";

  public generateRandomStringImpl1: generateRandomString = (len: number) => {
    return Math.random().toString(36).substring(2, len + 2);
  }

  public generateRandomStringImpl2: generateRandomString = (len: number) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < len; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  constructor() {
    setTimeout(() => {
      this.name = this.generateRandomStringImpl2(6)
    }, 2000)
  }


  ngAfterContentChecked() {
    // console.log()
  }

  ngAfterViewInit() {
  // console.log(this.test)
}


}
