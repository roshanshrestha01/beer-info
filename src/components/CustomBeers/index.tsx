import EmptyCustomBeers from './components/EmptyCustomBeers';

const CustomBeers = () => {
  return (
    <>
      <EmptyCustomBeers handleClickHere={() => console.log('here')} />
    </>
  );
};

export default CustomBeers;
