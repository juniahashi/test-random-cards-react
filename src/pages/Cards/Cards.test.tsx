import { render, screen } from '@testing-library/react';
import { CardContext, CardContextInterface, CardProvider } from 'context/CardContex';
import { MemoryRouter } from 'react-router-dom';
import Cards from './Cards';

describe('<Cards />', () => {
  it('should enabled button if has name', async () => {
    const providerProps: CardContextInterface = {
      name: 'Test',
      setName: jest.fn()
    }
    renderComponent(providerProps);

    expect(screen.getByText(/Test/i)).toBeInTheDocument()

  });
});

const renderComponent = (providerProps: CardContextInterface) => {
  render(
    <CardContext.Provider value={providerProps}>
        <MemoryRouter>  
            <Cards/>
        </MemoryRouter>
    </CardContext.Provider>
  );
};
