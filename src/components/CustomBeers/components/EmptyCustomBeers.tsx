type EmptyCustomBeersProps = {
  handleClickHere: (e: any) => void;
};

const EmptyCustomBeers = ({ handleClickHere }: EmptyCustomBeersProps) => {
  return (
    <div className="grid h-[60vh] w-[100%] place-items-center bg-[#fafafa]">
      <div className="text-center text-sm text-[#7f7f7f]">
        <p>Nothing to see yet</p>
        <p>
          <button className="btn btn-link" onClick={handleClickHere}>
            Click here
          </button>{' '}
          to add your first beer!
        </p>
      </div>
    </div>
  );
};

export default EmptyCustomBeers;
