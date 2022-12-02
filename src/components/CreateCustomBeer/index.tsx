import { useRouter } from 'next/router';

import type { BeerInfoProps } from '@/components/BeerInfo';

type CreateCustomBeerProps = {
  showModal: boolean;
  toggleModal: () => void;
  callSuccess: (data: BeerInfoProps) => void;
};

const CreateCustomBeer = ({
  showModal,
  toggleModal,
  callSuccess,
}: CreateCustomBeerProps) => {
  const router = useRouter();

  const submit = () => {
    callSuccess({
      imageURL: `${router.basePath}/img/default-beer.png`,
      name: 'Hanoi Beer',
      tagline: 'IPA Vietnamese',
      description: 'hello world!',
    });
    toggleModal();
  };

  // @ts-ignore
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none sm:w-[500px] md:w-[600px]">
                <div className="flex items-start justify-between rounded-t p-5">
                  <h3 className="text-3xl font-semibold">Add a New Beer</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={toggleModal}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form onSubmit={submit}>
                  <div className="relative flex-auto px-6">
                    <div className="mb-6 w-[150px] text-center">
                      <img
                        className="inline h-[150px] w-[70px]"
                        src={`${router.basePath}/img/default-beer.png`}
                        alt="default-beer-image"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="name"
                        className="my-3 block w-full rounded-lg border border-gray-600 bg-white p-2.5 text-sm text-gray-700 placeholder:text-gray-700 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                        placeholder="Beer name*"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="genre"
                        className="my-3 block w-full rounded-lg border border-gray-600 bg-white p-2.5 text-sm text-gray-700 placeholder:text-gray-700 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                        placeholder="Genre*"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        name="description*"
                        className="my-3 block w-full rounded-lg border border-gray-600 bg-white p-2.5 text-sm text-gray-700 placeholder:text-gray-700 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                        rows={4}
                        placeholder="Description*"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end rounded-b p-6">
                    <button
                      className="btn mr-3 font-bold text-gray-600"
                      type="button"
                      onClick={toggleModal}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default CreateCustomBeer;
