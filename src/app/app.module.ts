import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenttestComponent } from './componenttest/componenttest.component';
import { TestmoduleModule } from './testmodule/testmodule.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponenttestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
