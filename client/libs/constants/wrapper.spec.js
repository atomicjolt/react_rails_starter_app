import wrapper from './wrapper';

describe('wrapper', () => {
  const actionTypes = [
    'LOCAL_ACTION'
  ];
  const asyncActionTypes = [
    'SERVER_ACTION'
  ];
  const result = wrapper(actionTypes, asyncActionTypes);

  it('Setups up local actions', () => {
    // Local actions shouldn't get a 'DONE'
    expect(result.LOCAL_ACTION).toEqual('LOCAL_ACTION');
    expect(result.LOCAL_ACTION_DONE).toEqual(undefined);
  });

  it('Adds a "DONE" for async actions', () => {
    // Server actions or async actions get a 'DONE'
    expect(result.SERVER_ACTION).toEqual('SERVER_ACTION');
    expect(result.SERVER_ACTION_DONE).toEqual('SERVER_ACTION_DONE');
  });

});
