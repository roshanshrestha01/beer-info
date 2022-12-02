import type { AllCustomBeersProps } from '@/components/CustomBeers/components/AllCustomBeers';
import AllCustomBeers from '@/components/CustomBeers/components/AllCustomBeers';
import EmptyCustomBeers from '@/components/CustomBeers/components/EmptyCustomBeers';

export const CheckCustomBearExist = ({
  beers,
  toggleModal,
}: AllCustomBeersProps & { toggleModal: () => void }) => {
  if (beers.length > 0) {
    return <AllCustomBeers beers={beers} />;
  }
  return <EmptyCustomBeers handleClickHere={toggleModal} />;
};
