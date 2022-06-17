import { createStore } from 'vuex';

export type TOption = {
  value: string,
  text: string,
}

export enum Currencies {
  HKD = 'HKD',
  USD = 'USD',
  AUD = 'AUD',
}

export enum Packages {
  Standard = 'Standard',
  Safe = 'Safe',
  SuperSafe = 'SuperSafe',
}

export const ContriesOptions: Array<TOption> = [
  { value: Currencies.HKD, text: 'Hong Kong' },
  { value: Currencies.USD, text: 'USA' },
  { value: Currencies.AUD, text: 'Australia' },
];

export const PackagesOptions: Array<TOption> = [
  { value: Packages.Standard, text: 'Standard' },
  { value: Packages.Safe, text: 'Safe' },
  { value: Packages.SuperSafe, text: 'Super Safe' },
];

export const Rates: { [key: string]: number } = {
  [Currencies.HKD]: 1,
  [Currencies.USD]: 2,
  [Currencies.AUD]: 3,
};

export const PackageRates: { [key: string]: number } = {
  [Packages.Standard]: 0,
  [Packages.Safe]: 0.5,
  [Packages.SuperSafe]: 0.75,
};

export interface IFormValues {
  name: string;
  age: number;
  country: Currencies;
  pack: Packages;
}

export interface IAppState {
  error?: Error,
}

export interface IState {
  formValues: IFormValues,
  appState: IAppState
}

const defaultFormValues: IFormValues = {
  name: '',
  age: 0,
  country: Currencies.HKD,
  pack: Packages.Standard,
};

const defaultFormState: IAppState = {
  error: undefined,
};

export default createStore<IState>({
  state: {
    formValues: { ...defaultFormValues },
    appState: { ...defaultFormState },
  },
  getters: {
    summaryWithoutRate({ formValues }): number {
      return 10 * formValues.age * Rates[formValues.country];
    },
    rateSummary({ formValues }, getters): number {
      return getters.summaryWithoutRate * PackageRates[formValues.pack];
    },
    summary(_, getters): number {
      return getters.summaryWithoutRate + getters.rateSummary;
    },
  },
  mutations: {
    setFormState({ formValues }, payload: IFormValues) {
      Object.entries(payload)
        .forEach(([key, val]) => {
          if (key in formValues) {
            // eslint-disable-next-line
            (formValues as {[key: string]: any})[key] = val;
          }
        });
    },
    setFormStateToDefault(state) {
      state.formValues = { ...defaultFormValues };
      state.appState = { ...defaultFormState };
    },
    setAppError(state, payload: Error) {
      state.appState.error = payload;
    },
  },
  actions: {
  },
  modules: {
  },
});
