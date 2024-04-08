import Validator from '../basic';

test('Метод validateUsername существует и работает корректно', () => {
  expect(Boolean(Validator.validateUsername)).toBeTruthy();
  expect(Validator.validateUsername('User123-456name')).toBeTruthy();
  expect(Validator.validateUsername('name78_90user')).toBeTruthy();
  expect(Validator.validateUsername('-NameUser')).toBeFalsy();
  expect(Validator.validateUsername('UserName-')).toBeFalsy();
  expect(Validator.validateUsername('_NameUser')).toBeFalsy();
  expect(Validator.validateUsername('NameUser_')).toBeFalsy();
  expect(Validator.validateUsername('1NameUser')).toBeFalsy();
});