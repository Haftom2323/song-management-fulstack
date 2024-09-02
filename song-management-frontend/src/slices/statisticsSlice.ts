import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Statistics } from '../types/song';

interface StatisticsState {
  data: Statistics | null;
  loading: boolean;
  error: string | null;
}

const initialState: StatisticsState = {
  data: null,
  loading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    fetchStatisticsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchStatisticsSuccess(state, action: PayloadAction<Statistics>) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchStatisticsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchStatisticsStart,
  fetchStatisticsSuccess,
  fetchStatisticsFailure
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
