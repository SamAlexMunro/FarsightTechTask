import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CookieBarComponent } from './cookie-bar/cookie-bar.component';

@NgModule({
  declarations: [CookieBarComponent],
  imports: [CommonModule],
  exports: [CookieBarComponent],
})
export class CookieBarModule {}
