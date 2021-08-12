import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface Breadcrumb {
  url: string;
  label: string;
}
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs?: Breadcrumb[];

  constructor() {
    if (!this.breadcrumbs) console.error('Please add breadcrumbs @Input()');
  }
}
