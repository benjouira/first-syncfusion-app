import { Component } from '@angular/core';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  // template: `<ejs-grid [dataSource]='data'> </ejs-grid>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-syncfusion-app';
  public data!: object[];

    ngOnInit(): void {
        this.data = data;
    }
}
