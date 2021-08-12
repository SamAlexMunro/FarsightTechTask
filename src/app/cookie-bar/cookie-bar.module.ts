import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from './../button/button.module';
import { TitleModule } from './../title/title.module';
import { CookieBarComponent } from './cookie-bar/cookie-bar.component';

@NgModule({
  declarations: [CookieBarComponent],
  imports: [CommonModule, ButtonModule, TitleModule],
  exports: [CookieBarComponent],
})
export class CookieBarModule {}
