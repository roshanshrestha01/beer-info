import { useEffect, useState } from 'react';

import type { BeerInfoProps } from '@/components/BeerInfo';

const useCustomBeers = (initialState: BeerInfoProps[]) => {
  const [items, setItems] = useState<BeerInfoProps[]>(initialState);

  useEffect(() => {
    const persistedItems = JSON.parse(localStorage.getItem('items') as string);
    if (persistedItems) {
      setItems(persistedItems);
    }
  }, []);

  useEffect(() => {
    let data = [];
    const persistedItems =
      JSON.parse(localStorage.getItem('items') as string) || [];
    if (persistedItems.length > items.length) {
      data = persistedItems;
    } else {
      data = items;
    }
    localStorage.setItem('items', JSON.stringify(data));
  }, [items]);

  return [items, setItems] as const;
};

export default useCustomBeers;
