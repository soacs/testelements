import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'ao-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Elements Demo';

  constructor(private elRef: ElementRef) {
    console.log('AppComponent Constructor: ' + this.elRef.nativeElement);
    console.log('localName = ' + this.elRef.nativeElement.localName);
    console.dir(this.elRef.nativeElement);
  }
}
