import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  bamba: {
    name: string;
    value: number;
  };
}

const initialState: CounterState = {
  value: 0,
  bamba: {
    name: "bamba",
    value: 0,
  },
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.bamba.value += 1;
      state.bamba.name = "umma bamba";
    },
    decrement: (state) => {
      state.value -= 1;
      state.bamba.value -= 1;
      if (state.value === 0) state.bamba.name = "bamba";
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
