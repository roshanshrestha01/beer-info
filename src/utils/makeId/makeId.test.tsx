import makeId from '@/utils/makeId/index';

describe('makeId', () => {
  it('should return random string of 7 characters', function () {
    const randomString: string = makeId(7);
    expect(randomString.length).toEqual(7);
  });
});
