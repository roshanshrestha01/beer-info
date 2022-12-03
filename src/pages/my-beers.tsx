import { useState } from 'react';

import type { BeerInfoProps } from '@/components/BeerInfo';
import CreateCustomBeer from '@/components/CreateCustomBeer';
import { CheckCustomBearExist } from '@/components/CustomBeers/components/CheckCustomBearExist';
import useCustomBeers from '@/hooks/customBeers';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const MyBeers = () => {
  const [beers, setBeers] = useCustomBeers([]);

  const [showModal, setShowModal] = useState(false);

  const addCustomBeers = (data: BeerInfoProps) => {
    setBeers([...beers, data]);
  };

  return (
    <Main
      meta={<Meta title="My beers" description="Custom beers from users." />}
      actionButton={
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add a new beer
        </button>
      }
    >
      <CheckCustomBearExist
        beers={beers}
        toggleModal={() => setShowModal(true)}
      />

      <CreateCustomBeer
        showModal={showModal}
        toggleModal={setShowModal}
        callSuccess={addCustomBeers}
      />
    </Main>
  );
};

export default MyBeers;
