import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: `
    h1[app-title],
    h2[app-title],
    h3[app-title],
    h4[app-title],
    h5[app-title],
    h6[app-title],
  `,
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent implements OnInit {
  @Input() title?: string;

  ngOnInit() {
    if (!this.title) console.error('Please provide a title @Input');
  }
}
