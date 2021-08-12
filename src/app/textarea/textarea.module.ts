import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubtitleModule } from './../subtitle/subtitle.module';
import { TitleModule } from './../title/title.module';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [TextareaComponent],
  imports: [CommonModule, TitleModule, SubtitleModule],
  exports: [TextareaComponent],
})
export class TextareaModule {}
