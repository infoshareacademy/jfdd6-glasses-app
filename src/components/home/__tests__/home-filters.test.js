import reducer from '../../../state/home-filters'

describe('home filters reducer', () => {
  test('should return initial state', () => {
    expect(reducer()).toEqual({
      start: 0,
      value: 3000
    })
  })
});