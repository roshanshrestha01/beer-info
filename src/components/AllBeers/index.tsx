import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import BeerInfo from '@/components/BeerInfo';
import LoadMore from '@/components/LoadMore';
import { punkAPI } from '@/stores/HomePage';

const AllBeers = () => {
  const [nextPage, setNextPage] = useState(punkAPI.currentPage);

  const fetchBeer = async () => {
    await punkAPI.getBeers(nextPage).catch(console.error);
  };

  const incrementPage = () => {
    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    (async () => {
      await fetchBeer();
    })();
  }, [nextPage]);

  const renderBeers = () => {
    return punkAPI.beers.map((beer) => {
      const {
        id,
        name,
        tagline,
        description,
        // @ts-ignore
        image_url: imageURL,
      } = beer;
      return (
        <BeerInfo
          id={id}
          key={id}
          imageURL={imageURL}
          name={name}
          tagline={tagline}
          description={description}
        />
      );
    });
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {renderBeers()}
      </div>
      <div className="my-4 text-center">
        <LoadMore handleClick={incrementPage} />
      </div>
    </>
  );
};

export default observer(AllBeers);
