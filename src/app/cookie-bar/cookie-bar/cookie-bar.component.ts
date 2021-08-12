import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export interface CookieData {
  serviceName: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-cookie-bar',
  templateUrl: './cookie-bar.component.html',
  styleUrls: ['./cookie-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookieBarComponent implements OnInit {
  @Input() cookieData?: CookieData;
  @Output() acceptedCookies = new EventEmitter<void>();
  @Output() declinedCookies = new EventEmitter<void>();

  ngOnInit() {
    if (!this.cookieData) console.error('Please add cookieData @Input()');
  }
}
