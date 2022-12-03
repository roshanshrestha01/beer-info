import {punkAPI} from "@/stores/HomePage";
import fixtures from "./Homepage.fixture.json"

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(fixtures),
  })
);

beforeEach(() => {
  // @ts-ignore
  fetch.mockClear();
});

describe("store:HomePage for second page", () => {
  beforeEach(async () => {
    await punkAPI.getBeers(2);
  })

  it("should have 1 beer data in beers", async () => {
    expect(punkAPI.beers.length).toEqual(10);
  });

  it("should have currentPage set to 2", async () => {
    expect(punkAPI.currentPage).toEqual(2);
  });
})

