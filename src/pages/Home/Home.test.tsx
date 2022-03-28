import { fireEvent, render, screen } from '@testing-library/react';
import { CardProvider } from 'context/CardContex';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('<Home />', () => {
  it('should enabled button if has name', async () => {
    renderComponent();
    const inputName = screen.getByTestId('input-name');
    const nextButton = screen.getByTestId('next-button');

    fireEvent.change(inputName, { target: { value: 'Test' } })

    expect(nextButton).toBeEnabled()

  });
});

const renderComponent = () => {
  render(
    <CardProvider>
        <MemoryRouter>  
            <Home/>
        </MemoryRouter>
    </CardProvider>
  );
};
