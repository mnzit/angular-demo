import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestmoduleRoutingModule } from './testmodule-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    TestmoduleRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class TestmoduleModule { }
