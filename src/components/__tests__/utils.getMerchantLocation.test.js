/* eslint-env jest */

/* This test runs against static data as the focus is */

import axios from 'axios';
import api from '../../utils/api';
import utils from '../../utils/utils';

describe('Test api.fetchMerchantLocations()', () => {
  it('JSON returned should have the property "location"', () => {
      const id = 2348; // Static data for Boloco
    return api.fetchMerchantLocations('https://gist.githubusercontent.com/aripollak/2590fb80d71d2dc136a315cf4b608537/raw/dbd05012e9afd0d2064d33bda1640262f976f4f1/locations.json')
    .then(data => {
        console.log(data[0].location.merchant_name);
      expect(utils.getMerchantLocation(data[0], id)).toBe('Boloco');
    })
  })
})