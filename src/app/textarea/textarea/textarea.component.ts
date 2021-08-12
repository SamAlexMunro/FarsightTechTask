import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent {
  @Input() characterLimit = 200;
  remainingCharacters = this.characterLimit;

  updateRemainingCharacters(textareaValue: string): void {
    this.remainingCharacters = this.characterLimit - textareaValue.length;
  }
}
