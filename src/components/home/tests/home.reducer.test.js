import reducer from '../../../state/home-fetch'

describe('home reducer', ()=> {
  test('should return initial state', () => {
    expect(reducer()).toEqual({
      data: null,
      fetching: false,
      error: null
    })
  });

  test('should handle action type: FETCH__BEGIN', () => {
    expect(reducer({
      data: null,
      fetching: false,
      error: null
    }, { type: 'home/FETCH__BEGIN' })
    ).toEqual({
      data: null,
      fetching: true,
      error: null
    })
  });

  test('should handle action type: FETCH__SUCCESS', () => {
    expect(reducer({
      data: null,
      fetching: true,
      error: null
    }, {
      type: 'home/FETCH__SUCCESS',
      data: 'foo'
    })).toEqual({
      data: 'foo',
      fetching: false,
      error: null
    })


  });




})