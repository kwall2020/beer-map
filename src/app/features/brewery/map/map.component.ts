import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BrewerySelectors } from 'src/app/core/store/selectors';

import { BreweryActions } from '../../../core/store/actions';
import { CoreState } from '../../../core/store/reducers';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit, OnDestroy {
  private isDestroyed$ = new Subject();

  values = [];

  constructor(private store: Store<CoreState>, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.store
      .select(BrewerySelectors.values)
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe(values => {
        console.log(values);

        this.values = values;

        this.cd.detectChanges();
      });

    this.store.dispatch(BreweryActions.read());
  }

  ngOnDestroy() {
    this.isDestroyed$.next();
  }
}