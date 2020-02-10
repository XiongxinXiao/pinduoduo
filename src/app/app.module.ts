import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HomeModule, ParamInterceptor } from './home';
import { AppRoutingModule } from './app-routing.module';
import { NotificationInterceptor } from './home/interceptors/ notification.interceptor';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    FormsModule, 
    SharedModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}