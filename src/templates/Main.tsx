import type { ReactNode } from 'react';

import ActiveLink from '@/components/ActiveLink';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      {props.meta}
      <div className="mx-auto max-w-screen-md">
        <div className="border-b border-gray-300">
          <div>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <ActiveLink
                  activeClassName="active"
                  href="/"
                  className="border-none text-gray-700 hover:text-gray-900"
                  data-testid="all-beers-nav-link"
                >
                  All Beers
                </ActiveLink>
              </li>
              <li className="mr-6">
                <ActiveLink
                  activeClassName="active"
                  href="/about/"
                  className="border-none text-gray-700 hover:text-gray-900"
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
