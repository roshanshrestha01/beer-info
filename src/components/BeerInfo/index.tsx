import { useState } from 'react';

export type BeerInfoProps = {
  id?: string | number;
  imageURL: string;
  name: string;
  tagline: string;
  description: string;
  ingredients?: string | object;
};

export type ShowMoreDescriptionProps = {
  description: string;
};

const ShowMoreDescription = ({ description }: ShowMoreDescriptionProps) => {
  const [showMore, setShowMore] = useState(false);
  const trim = (data: string) => {
    return `${data.substring(0, 152)}...`;
  };
  return (
    <div>
      <p className="card__description">
        {showMore ? description : trim(description)}
      </p>
      <button className="btn btn-link" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
};

type CardImageProps = {
  imageURL: string;
  name: string;
  ingredients?: string | object;
};

export const CardImage = ({ imageURL, name, ingredients }: CardImageProps) => {
  return (
    <div className="group relative min-w-[150px] text-center">
      <img className="card__image" src={imageURL} alt={name} />
      <div className="absolute top-0 left-0 mb-6 hidden flex-col items-center group-hover:flex">
        {/* @ts-ignore */}
        <span className="whitespace-no-wrap z-10 rounded-md bg-gray-600 p-2 text-xs leading-none text-white shadow-lg">
          Ingredients: {ingredients}
        </span>
      </div>
    </div>
  );
};

const BeerInfo = ({
  imageURL,
  name,
  tagline,
  description,
  ingredients,
}: BeerInfoProps) => {
  const [isShowMoreRequired] = useState(description.length > 152);

  return (
    <div className="card__wrapper">
      <CardImage imageURL={imageURL} name={name} ingredients={ingredients} />
      <div className="card__content">
        <h5 className="card__name">{name}</h5>

        <p className="card__tagline">{tagline}</p>
        {isShowMoreRequired ? (
          <ShowMoreDescription description={description} />
        ) : (
          <p className="card__description">{description}</p>
        )}
      </div>
    </div>
  );
};

export default BeerInfo;
