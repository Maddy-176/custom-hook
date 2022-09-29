import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './components/Counter';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Testing Custom Hooks/i);
  expect(linkElement).toBeInTheDocument();
});





test('Header should display as Subsequent Render on first count increment and First Render in first Render',()=>{
  render(<Counter/>);

  const counterBtn= screen.getByTestId("counter-btn");
  //before brn click is should display as first render
  const headerElementFirstRender = screen.getByText(/First Render/i);
  const counterTextFirstRender = screen.getByText(/You Clicked: 0 times/i);

  fireEvent.click(counterBtn);

  //count element should change on first click
  const counterTextpostRender = screen.getByText(/You Clicked: 1 times/i);

  //header should change after first click
  const headerElement2 = screen.getByText(/Subsequent Render/i);

  expect(headerElementFirstRender).toBeInTheDocument();
  expect(counterTextFirstRender).toBeInTheDocument();

  expect(counterTextpostRender).toBeInTheDocument();
  expect(headerElement2).toBeInTheDocument();

})
