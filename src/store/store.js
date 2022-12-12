import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './slices/rootSlice';
import {DEFAULT_SETTINGS_KEY} from '../constants/defaults';

const storeSettingsKey = process.env.STORE_SETTINGS_KEY || DEFAULT_SETTINGS_KEY;
const localStorageKey =
  `${storeSettingsKey}_${process.env.LOCAL_STORAGE_KEY}` ||
  `${storeSettingsKey}_bundleData`;

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  } catch (e) {
    // TODO: track error somewhere
    return null;
  }
};

export const clearLocalStorage = () => {
  try {
    localStorage.removeItem(localStorageKey);
  } catch (e) {
    // TODO: track error somewhere
    return null;
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem(localStorageKey);
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    // TODO: track error somewhere
    return null;
  }
};

const preloadedState = loadFromLocalStorage();
const store = configureStore({reducer, preloadedState});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
