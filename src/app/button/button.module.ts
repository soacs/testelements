import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from './button.component';
import { ApplicationRef, ComponentFactoryResolver, Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ButtonComponent
  ]
})
export class ButtonModule {

  constructor(private injector: Injector) {
    console.log('create ButtonModule');
    const aoButton = createCustomElement(ButtonComponent, {injector });
    customElements.define('ao-button', aoButton);
  }

  ngDoBootStrap() {
    console.log('calling ngDoBootStrap()');
  }
}
