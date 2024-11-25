import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Tis a website by {{value}}</div>`,
})
export class AppComponent {
  value = 'the mike of the schnitzels';
}
