export interface EnthusiasmState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface CounterState {
  counter: number
}

export interface ShopState {
  banners: Array<object | null>;
  recommends: Array<object | null>;
}

export interface UserState {
  username: string;
  jumpPath: string;
}

export interface StoreState {
  enthusiasm: EnthusiasmState,
  changeNumber: CounterState,
  shopData: ShopState,
  userState: UserState
}