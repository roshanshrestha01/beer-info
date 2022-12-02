import CustomBeers from '@/components/CustomBeers';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const MyBeers = () => (
  <Main meta={<Meta title="My beers" description="Custom beers from users." />}>
    <CustomBeers />
  </Main>
);

export default MyBeers;
