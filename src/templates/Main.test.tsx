import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have 2 menu items', () => {
      render(<Main meta={null}>{null}</Main>);

      const menuItemList = screen.getAllByRole('listitem');

      expect(menuItemList).toHaveLength(2);
    });

    it('should have All beers link', () => {
      render(<Main meta={null}>{null}</Main>);
      const allBeerNavLink = screen.getByTestId('all-beers-nav-link');
      expect(allBeerNavLink).toHaveTextContent('All Beers');
    });

    it('should have My beers link', () => {
      render(<Main meta={null}>{null}</Main>);
      const allBeerNavLink = screen.getByTestId('my-beers-nav-link');
      expect(allBeerNavLink).toHaveTextContent('My Beers');
    });
  });
});
