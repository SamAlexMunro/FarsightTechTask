import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubtitleModule } from './../subtitle/subtitle.module';
import { TitleModule } from './../title/title.module';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, TitleModule, SubtitleModule],
  exports: [CheckboxComponent],
})
export class CheckboxModule {}
