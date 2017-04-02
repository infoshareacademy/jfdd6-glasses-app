import reducer, { change, slide } from '../../../state/home-filters'

describe('home filters reducer', () => {
  test('should return initial state', () => {
    expect(
      reducer()
    ).toEqual({
      start: 0,
      value: 3000
    })
  });

  test('should handle action: CHANGE', () => {
    // negative step when no earlier events on list
    expect(
      reducer({
        start: 0,
        value: 1000
      }, change(-1, []))
    ).toEqual({
      start: 0,
      value: 1000
    });

    // positive step exceeds event list length
    expect(
      reducer({
        start: 2,
        value: 1000
      }, change(1, ['foo', 'bar', 'buzz']))
    ).toEqual({
      start: 2,
      value: 1000
    });

    // positive step
    expect(
      reducer({
        start: 2,
        value: 1000
      }, change(1, ['foo', 'bar', 'buzz', 'foo', 'bar']))
    ).toEqual({
      start: 3,
      value: 1000
    });

    // negative step
    expect(
      reducer({
        start: 2,
        value: 1000
      }, change(-1, ['foo', 'bar', 'buzz', 'foo', 'bar']))
    ).toEqual({
      start: 1,
      value: 1000
    });

  });

  test('should handle action: SLIDE', () => {
    expect(
      reducer({
        start: 0,
        value: 3000
      }, slide(1000))
    ).toEqual({
      start: 0,
      value: 1000
    })
  })
});