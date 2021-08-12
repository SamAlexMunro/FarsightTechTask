import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-subtitle, label[app-subtitle]',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubtitleComponent implements OnInit {
  @Input() subtitle?: string;

  ngOnInit() {
    if (!this.subtitle) console.error('Please provide a subtitle @Input()');
  }
}
