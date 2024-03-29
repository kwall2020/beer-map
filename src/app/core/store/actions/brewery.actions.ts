import { createAction, props } from '@ngrx/store';

import * as Models from '../../models';

export namespace BreweryActions {
  export const createValue = createAction(
    '[brewery] CREATE_VALUE',
    props<{ value: Models.Brewery }>()
  );

  export const readValues = createAction('[brewery] READ_VALUES');

  export const storeValues = createAction(
    '[brewery] STORE_VALUES',
    props<{ values: Models.Brewery[] }>()
  );

  export const storeValue = createAction(
    '[brewery] STORE_VALUE',
    props<{ value: Models.Brewery }>()
  );
}
