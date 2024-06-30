import React from 'react';
import { describe, expect } from '@jest/globals';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { checkAndUpdateUsers, clearStorage, getUsersFromStorage } from '../../storage/storage';
import Home from './Home';
import { strings } from '../../constants/strings';

jest.mock('axios');
jest.mock('../../storage/storage');
jest.mock('@react-native-async-storage/async-storage', () => {
  return require('@react-native-async-storage/async-storage/jest/async-storage-mock');
});

describe('Home', () => {

  beforeEach(() => {
    (getUsersFromStorage as jest.Mock).mockClear();
    (checkAndUpdateUsers as jest.Mock).mockClear();
    (clearStorage as jest.Mock).mockClear();
  });

  it('should render correctly when data is retrived from storage', async () => {
    (checkAndUpdateUsers as jest.Mock).mockImplementation((callback: (data: any) => void) => {
      const mockData = [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }];
      callback(mockData);
    });

    const { getByText } = render(<Home />);

    expect(getByText('John')).toBeTruthy();
    expect(getByText('25')).toBeTruthy();
    expect(getByText('Alice')).toBeTruthy();
    expect(getByText('30')).toBeTruthy();

  });

  it('should render correctly when data is retrived from HTTP request', async () => {
    (checkAndUpdateUsers as jest.Mock).mockImplementation((callback: (data: any) => void) => {
      callback([]);
    });

    (checkAndUpdateUsers as jest.Mock).mockImplementation(
      (callback: (data: any) => void) => {
        const mockData = [{ name: 'Bob', age: 28 }, { name: 'Eve', age: 35 }];
        callback(mockData);
      }
    );

    const { getByText } = render(<Home />);

    expect(getByText('Bob')).toBeTruthy();
    expect(getByText('28')).toBeTruthy();
    expect(getByText('Eve')).toBeTruthy();
    expect(getByText('35')).toBeTruthy();
  });

  it('should fetch data from HTTP, save it in storage, and retrieve from storage after a few seconds', async () => {
    (checkAndUpdateUsers as jest.Mock).mockImplementation(
      (callback: (data: any) => void) => {
        const mockData = [{ name: 'Bob', age: 28 }, { name: 'Eve', age: 35 }];
        callback(mockData);
      }
    );

    const { getByText } = render(<Home />);

    expect(getByText('Bob')).toBeTruthy();
    expect(getByText('28')).toBeTruthy();
    expect(getByText('Eve')).toBeTruthy();
    expect(getByText('35')).toBeTruthy();

    fireEvent.press(getByText(strings.home.clearStorageButton));

    jest.advanceTimersByTime(2000); // 2 seconds delay

    expect(checkAndUpdateUsers).toHaveBeenCalledTimes(1);

    (getUsersFromStorage as jest.Mock).mockImplementation((callback: (data: any) => void) => {
      const mockData = [{ name: 'Bob', age: 28 }, { name: 'Eve', age: 35 }];
      callback(mockData);
    });

    await waitFor(() => {
      expect(getByText('Bob')).toBeTruthy();
      expect(getByText('28')).toBeTruthy();
      expect(getByText('Eve')).toBeTruthy();
      expect(getByText('35')).toBeTruthy();
    });
  });

  it('should clear users data when "Clear Users" button is pressed', async () => {
    const { getByText } = render(<Home />);

    fireEvent.press(getByText(strings.home.clearUsersBotton));

    expect(checkAndUpdateUsers).toHaveBeenCalledTimes(1);
    expect(getByText(strings.usersTable.empty)).toBeTruthy();

  });

  it('should clear storage data when "Clear Storage" button is pressed', async () => {
    const { getByText } = render(<Home />);

    fireEvent.press(getByText(strings.home.clearStorageButton));

    expect(clearStorage).toHaveBeenCalledTimes(1);
  });
});
