import {ActionCreator} from './action-creator';
import {ActionType} from './action-type';

describe(`Action creators work correctly!`, () => {

  it(`Action creator for select genre returns correct genre`, () => {
    expect(ActionCreator.selectGenre(`Horror`)).toEqual({
      type: ActionType.SELECT_GENRE,
      payload: `Horror`,
    });
  });

});
