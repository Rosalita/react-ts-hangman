import { isLost } from './isLost';

test('game isnt lost if 7 mistakes made', () => {
  expect(isLost(7)).toEqual(false);
});

test('game is lost if 8 mistakes made', () => {
  expect(isLost(8)).toEqual(true);
});