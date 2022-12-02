import type { BeerInfoProps } from '@/components/BeerInfo';
import BeerInfo from '@/components/BeerInfo';

export type AllCustomBeersProps = {
  beers: BeerInfoProps[];
};

const AllCustomBeers = ({ beers }: AllCustomBeersProps) => {
  const renderCustomBeers = () => {
    return beers.map((beer: BeerInfoProps, index: number) => {
      return <BeerInfo key={index} {...beer} />;
    });
  };

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      {renderCustomBeers()}
    </div>
  );
};

export default AllCustomBeers;
