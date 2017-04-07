import reducer from '../../../state/home-location'

describe('location reducer', () => {
  test('should return initial state', () => {
    expect(reducer()).toEqual({
      data: {
        results: [{
          geometry: {
            location: {
              lat: 54.3881021,
              lng: 18.606417
            }
          },
          formatted_address: "Hynka 5, 80-465 Gdańsk, Polska"
        }]
      },
      fetching: false,
      error: null
    })
  });

  test('should handle action type: FETCH__BEGIN', () => {
    expect(reducer({
        data: null,
        fetching: false,
        error: null
      }, {type: 'location/FETCH__BEGIN'})
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
      type: 'location/FETCH__SUCCESS',
      data: 'fetch success'
    })).toEqual({
      data: 'fetch success',
      fetching: false,
      error: null
    });
  });

  test('should handle action type: FETCH__FAIL', () => {
    expect(reducer({
      data: null,
      fetching: true,
      error: null
    }, {
      type: 'location/FETCH__FAILED',
      error: 'fetch failed'
    })).toEqual({
      data: null,
      fetching: false,
      error: 'fetch failed'
    });

    expect(reducer({
      data: 'some data',
      fetching: true,
      error: null
    }, {
      type: 'location/FETCH__FAILED',
      error: 'fetch failed'
    })).toEqual({
      data: 'some data',
      fetching: false,
      error: 'fetch failed'
    });
  });
});