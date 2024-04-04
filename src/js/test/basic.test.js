test('Метод validateUsername существует и работает корректно', () => {
  expect(Boolean(Validator.validateUsername)).toBeTruthy();
  expect(Validator.validateUsername('Name-123Abc')).toBeTruthy();
  expect(Validator.validateUsername('nAmE987-321')).toBeTruthy();
  expect(Validator.validateUsername('!name')).toBeFalsy();
  expect(Validator.validateUsername('name_')).toBeFalsy();
  expect(Validator.validateUsername('_name')).toBeFalsy();
  expect(Validator.validateUsername('name-')).toBeFalsy();
  expect(Validator.validateUsername('-name')).toBeFalsy();
  expect(Validator.validateUsername('name1')).toBeFalsy();
  expect(Validator.validateUsername('na1me')).toBeFalsy();
  expect(Validator.validateUsername('na.me1')).toBeFalsy();
  expect(Validator.validateUsername('name1234')).toBeFalsy();
  expect(Validator.validateUsername('name1name2name3')).toBeFalsy();
  expect(Validator.validateUsername('na-me')).toBeFalsy();
  expect(Validator.validateUsername('-name-')).toBeFalsy();
  expect(Validator.validateUsername('_name_')).toBeFalsy();
  expect(Validator.validateUsername('_-name-_')).toBeFalsy();
});