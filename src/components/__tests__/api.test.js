/* eslint-env jest */

/* We expect the the Merchant Locations could change overtime, so rather than testing the return against a snaphot, let that the return has at least one 'location' */

import api from '../../utils/api';

describe('Test api.fetchMerchantLocations()', () => {
  it('JSON returned should have the property "location"', () => {
    return api.fetchMerchantLocations('https://gist.githubusercontent.com/aripollak/2590fb80d71d2dc136a315cf4b608537/raw/dbd05012e9afd0d2064d33bda1640262f976f4f1/locations.json')
    .then(data => {
      expect(data).toBeDefined()
      expect(data[0]).toHaveProperty('location');
    })
  })
})