import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface Checkbox {
  checked: boolean;
  id: string;
  label: string;
  name: string;
  value: string;
}
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() checkboxes?: Checkbox[];
}
