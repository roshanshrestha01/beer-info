import { action, makeObservable, observable, toJS } from 'mobx';

import type { BeerInfoProps } from '@/components/BeerInfo';
// eslint-disable-next-line import/extensions,import/no-absolute-path
import { API } from '@/constants/api-endpoints';

class PunkAPI {
  beers: BeerInfoProps[] = [];

  currentPage: number = 1;

  constructor() {
    makeObservable(this, {
      beers: observable,
      getBeers: action,
      getUnikeyById: action,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getUnikeyById = (array: BeerInfoProps[]) => {
    return [
      // @ts-ignore
      ...new Map(array.map((item) => [item.id, item])).values(),
    ];
  };

  getBeers = async (pageNumber: number) => {
    const response = await fetch(API.V2.allBeers.index(pageNumber));
    const newBeers = await response.json();
    const allBeers = toJS(this.beers).concat(newBeers);
    this.beers = this.getUnikeyById(allBeers);
    this.currentPage = pageNumber;
  };
}

export const punkAPI = new PunkAPI();
