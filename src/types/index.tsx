export interface EnthusiasmState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface CounterState {
  counter: number
}

export interface StoreState {
  enthusiasm: EnthusiasmState,
  changeNumber: CounterState
}