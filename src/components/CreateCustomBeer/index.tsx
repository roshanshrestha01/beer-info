import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import type { BeerInfoProps } from '@/components/BeerInfo';
import useFormData from '@/hooks/formData';
import makeId from '@/utils/makeId';

type CreateCustomBeerProps = {
  showModal: boolean;
  toggleModal: (b: boolean) => void;
  callSuccess: (data: BeerInfoProps) => void;
};

type IChildren = {
  children: ReactNode;
};

const Modal = ({ children }: IChildren) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
    <div className="relative my-6 mx-auto w-auto max-w-3xl">
      <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none sm:w-[500px] md:w-[600px]">
        {children}
      </div>
    </div>
  </div>
);

const ModalHead = ({ children }: IChildren) => (
  <div className="flex items-start justify-between rounded-t p-5">
    {children}
  </div>
);

const ModalContent = ({ children }: IChildren) => (
  <div className="relative flex-auto px-6">{children}</div>
);

const ModalFooter = ({ children }: IChildren) => (
  <div className="flex items-center justify-end rounded-b p-6">{children}</div>
);

const CreateCustomBeer = ({
  showModal,
  toggleModal,
  callSuccess,
}: CreateCustomBeerProps) => {
  const router = useRouter();
  const [formData, handleChange, resetState] = useFormData({
    name: '',
    tagline: '',
    description: '',
  });

  const resetAndToggle = () => {
    toggleModal(false);
    resetState();
  };

  useEffect(() => {
    // Close modal when escape key is pressed
    const close = (e: any) => {
      if (e.keyCode === 27) {
        toggleModal(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const submit = () => {
    const data = {
      ...formData,
      id: makeId(7),
      imageURL: `${router.basePath}/img/default-beer.png`,
    };
    callSuccess(data);
    resetAndToggle();
  };

  return (
    <>
      {showModal ? (
        <>
          <Modal>
            <ModalHead>
              <h3 className="text-3xl font-semibold">Add a New Beer</h3>
            </ModalHead>
            <form onSubmit={submit}>
              <ModalContent>
                <div className="mb-6 w-[150px] border-2 text-center">
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
                    value={formData.name}
                    onChange={handleChange}
                    className="my-3 block w-full rounded-lg border border-gray-600 bg-white p-2.5 text-sm text-gray-700 placeholder:text-gray-700 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                    placeholder="Beer name*"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="tagline"
                    value={formData.tagline}
                    onChange={handleChange}
                    className="my-3 block w-full rounded-lg border border-gray-600 bg-white p-2.5 text-sm text-gray-700 placeholder:text-gray-700 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                    placeholder="Genre*"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="description"
                    className="my-3 block w-full rounded-lg border border-gray-600 bg-white p-2.5 text-sm text-gray-700 placeholder:text-gray-700 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description*"
                    required
                  />
                </div>
              </ModalContent>
              <ModalFooter>
                <button
                  className="btn mr-3 font-bold text-gray-600"
                  type="button"
                  onClick={resetAndToggle}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </ModalFooter>
            </form>
          </Modal>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default CreateCustomBeer;
