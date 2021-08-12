import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cookie-bar',
  templateUrl: './cookie-bar.component.html',
  styleUrls: ['./cookie-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookieBarComponent {}
