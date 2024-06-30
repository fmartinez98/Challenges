import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    hasSeenOnboarding: false,
  },
  reducers: {
    clearCredentials(state) {
      state.hasSeenOnboarding = false;
    },
    changeOnboardingVisibility(state) {
      state.hasSeenOnboarding = true;
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;

export const selectHasSeenOnboarding = (state) => state.auth.hasSeenOnboarding;
