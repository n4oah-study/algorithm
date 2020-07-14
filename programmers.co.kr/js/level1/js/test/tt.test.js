const { 완주하지못한선수 } = require('../src/완주하지_못한_선수');

test("완주하지 못 한 선수", () => {
  expect(완주하지못한선수(['leo', 'kiki', 'eden'], ['eden', 'kiki']))
    .toEqual('leo');
  expect(완주하지못한선수(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']))
    .toEqual('vinko');
  expect(완주하지못한선수(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])).toEqual('mislav');
})