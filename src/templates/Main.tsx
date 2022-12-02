import type { ReactNode } from 'react';

import ActiveLink from '@/components/ActiveLink';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="mt-3 w-full px-3 text-gray-700 sm:px-3 md:px-2 lg:px-1">
      {props.meta}
      <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl">
        <div>
          <div>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <ActiveLink
                  activeClassName="nav-active"
                  href="/"
                  className="border-none text-gray-500"
                  data-testid="all-beers-nav-link"
                >
                  All Beers
                </ActiveLink>
              </li>
              <li className="mr-6">
                <ActiveLink
                  activeClassName="nav-active"
                  href="/my-beers/"
                  className="border-none text-gray-500"
                  data-testid="my-beers-nav-link"
                >
                  My Beers
                </ActiveLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="content py-5 text-xl">{props.children}</div>
      </div>
    </div>
  );
};

export { Main };
