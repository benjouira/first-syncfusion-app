import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



// import the GridModule for the Grid component
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule , GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
