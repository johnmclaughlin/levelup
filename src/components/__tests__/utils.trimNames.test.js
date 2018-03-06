/* eslint-env jest */

import utils from '../../utils/utils';

describe('Test utils.trimNames()', () => {
  test('should return "Caffè Nero" if "Caffè Nero - The Italian Coffee Company" is submitted', () => {
    const merchantName = 'Caffè Nero - The Italian Coffee Company';
    expect(utils.trimNames(merchantName)).toBe('Caffè Nero');
  });
});
