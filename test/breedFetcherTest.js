const fetchBreedDescription  = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('chartreux', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it('returns a string description for an error for invalid/non-existing breed, via callback', (done) => {
    fetchBreedDescription('charteu', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(desc, null);

      const expectedError = ('Error fetch details:', err);

      // compare returned description
      assert.equal(err, expectedError);

      done();
    });
  });
});