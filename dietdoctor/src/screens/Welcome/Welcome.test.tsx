import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Welcome } from './Welcome';
import { strings } from '@/localization';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

// Mocking the navigation functions
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

jest.mock('react-native-linear-gradient', () => 'LinearGradient');

describe('Welcome component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Welcome />);

    const loginButton = getByTestId(strings.welcome.login);
    const skipButton = getByTestId(strings.welcome.skip);

    expect(loginButton).toBeDefined();
    expect(skipButton).toBeDefined();
  });

  it('calls handleLogin when Login button is pressed', () => {
    const { getByText } = render(<Welcome />);
    const loginButton = getByText(strings.welcome.login);

    fireEvent.press(loginButton);
    expect(mockNavigate).toHaveBeenCalled();
  });

  it('calls handleSkip when Skip button is pressed', () => {
    const { getByText } = render(<Welcome />);
    const skipButton = getByText(strings.welcome.skip);

    fireEvent.press(skipButton);
    expect(mockNavigate).toHaveBeenCalled();
  });
});
