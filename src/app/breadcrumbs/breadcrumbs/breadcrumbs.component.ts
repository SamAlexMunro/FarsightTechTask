import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

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
export class BreadcrumbsComponent implements OnInit {
  @Input() breadcrumbs?: Breadcrumb[];

  ngOnInit() {
    if (!this.breadcrumbs) console.error('Please add breadcrumbs @Input()');
  }
}
