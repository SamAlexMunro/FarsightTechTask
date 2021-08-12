import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { CookieBarModule } from './cookie-bar/cookie-bar.module';
import { TextareaModule } from './textarea/textarea.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BreadcrumbsModule,
    BrowserModule,
    CheckboxModule,
    CookieBarModule,
    TextareaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
