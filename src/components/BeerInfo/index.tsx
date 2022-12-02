type BeerInfoProps = {
  imageURL: string;
  name: string;
  tagline: string;
  description: string;
};

const BeerInfo = ({ imageURL, name, tagline, description }: BeerInfoProps) => {
  return (
    <div>
      <a
        href="#"
        className="md:w-100 flex h-[100%] flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:flex-row"
      >
        <img
          className="m-[40px] h-[200px] w-[50px] rounded-t-lg object-cover md:h-[150px] md:rounded-none md:rounded-l-lg lg:h-[150px]"
          src={imageURL}
          alt={name}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

          <p className="mb-3 font-normal text-yellow-600 dark:text-yellow-400">
            {tagline}
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default BeerInfo;
