import BeerInfo from '@/components/BeerInfo';
import LoadMore from '@/components/LoadMore';

const AllBeers = () => {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <BeerInfo
          imageURL="https://images.punkapi.com/v2/2.png"
          name="Russian Doll – India Pale Ale"
          tagline="Nesting Hop Bomb."
          description="The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses,
              but by tweaking the amount o.."
        />
        <BeerInfo
          imageURL="https://images.punkapi.com/v2/2.png"
          name="Coors"
          tagline="IPA German"
          description="The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses,
              buThe levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses,
              bu"
        />
      </div>
      <div className="my-4 text-center">
        <LoadMore handleClick={() => console.log('more')} />
      </div>
    </>
  );
};

export default AllBeers;
