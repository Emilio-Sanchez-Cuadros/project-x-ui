import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BrowserModule } from '@angular/platform-browser';

const components = [
  AppComponent,
  AdminLayoutComponent
];

const modules = [
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  ComponentsModule,
  RouterModule,
  AppRoutingModule,
  BrowserModule
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    ...modules
  ],
  declarations: [
    ...components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
