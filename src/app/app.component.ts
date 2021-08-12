import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Breadcrumb } from './breadcrumbs/breadcrumbs/breadcrumbs.component';
import { Checkbox } from './checkbox/checkbox/checkbox.component';
import { CookieData } from './cookie-bar/cookie-bar/cookie-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly checkboxData: Checkbox[] = [
    {
      id: 'waste',
      name: 'waste',
      value: 'carcasses',
      label: 'Waste from animal carcasses',
      checked: false,
    },
    {
      id: 'waste-2',
      name: 'waste',
      value: 'carcasses',
      label: 'Waste from mines or quarries',
      checked: false,
    },
    {
      id: 'waste-3',
      name: 'waste',
      value: 'farm',
      label: 'Farm or agricultural waste',
      checked: false,
    },
  ];

  readonly breadcrumbs: Breadcrumb[] = [
    {
      url: '',
      label: 'Home',
    },
    {
      url: '',
      label: 'Passports, travel and living abroad',
    },
    {
      url: '',
      label: 'Travel abroad',
    },
  ];

  readonly cookieData: CookieData = {
    serviceName: 'GovUK',
    title: 'Cookies on GovUK',
    description:
      'We use some essential cookies to make this service work. We’d also like to use analytics cookies so we can understand how you use the service and make improvements.',
  };
}
