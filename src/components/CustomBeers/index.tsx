import { useRouter } from 'next/router';

import AllCustomBeers from '@/components/CustomBeers/components/AllCustomBeers';
import useCustomBeers from '@/hooks/customBeers';

import EmptyCustomBeers from './components/EmptyCustomBeers';

const CustomBeers = () => {
  const router = useRouter();
  const [beers, setBeers] = useCustomBeers([]);

  function addCustomBeers(e: any) {
    e.preventDefault();
    setBeers([
      ...beers,
      {
        imageURL: `${router.basePath}/img/default-beer.png`,
        name: 'Hanoi Beer',
        tagline: 'IPA Vietnamese',
        description: 'hello world!',
      },
    ]);
  }

  return (
    <>
      <AllCustomBeers beers={beers} />

      <EmptyCustomBeers
        handleClickHere={(e: any) => {
          addCustomBeers(e);
        }}
      />
    </>
  );
};

export default CustomBeers;
