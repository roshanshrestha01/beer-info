import AllBeers from '@/components/AllBeers';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title="All bears" description="Comprehensive list of all beers" />
      }
    >
      <AllBeers />
    </Main>
  );
};

export default Index;
