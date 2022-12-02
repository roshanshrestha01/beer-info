export type BeerInfoProps = {
  imageURL: string;
  name: string;
  tagline: string;
  description: string;
};

const BeerInfo = ({ imageURL, name, tagline, description }: BeerInfoProps) => {
  return (
    <div className="card__wrapper">
      <img className="card__image" src={imageURL} alt={name} />
      <div className="card__content">
        <h5 className="card__name">{name}</h5>

        <p className="card__tagline">{tagline}</p>

        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};

export default BeerInfo;
