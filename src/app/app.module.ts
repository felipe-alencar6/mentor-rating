import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { Router } from '@angular/router';
import { CountService } from './count.service';

@NgModule({
  declarations: [AppComponent, OneComponent, TwoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
