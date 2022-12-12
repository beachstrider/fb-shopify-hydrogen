import {createSlice} from '@reduxjs/toolkit';
import {settings} from '../../utils';
import {zone1, zone2, zone3} from '../data/zipcodes';

export const steps = settings().steps();
export const MEAL_PLANS_ITEM = 2;

export const initialState = {
  displayHeader: false,
  displayFooter: false,
  isNextButtonActive: true,
  steps,
  deliveryZones: [
    {
      id: 1,
      name: 'Zone 1',
      earliestAvailableDay: 3,
      leadTime: 3,
      zipCodes: zone1,
      deliveryDates: [
        {
          id: 2,
          day: 2, // Tuesday
          disabled: false,
          isSelected: false,
        },
        {
          id: 3,
          day: 3, // Wednesday
          disabled: false,
          isSelected: false,
        },
        {
          id: 5,
          day: 5, // Friday
          disabled: false,
          isSelected: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Zone 2',
      earliestAvailableDay: 3,
      leadTime: 3,
      zipCodes: zone2,
      deliveryDates: [
        {
          id: 2,
          day: 2,
          disabled: false,
          isSelected: false,
        },
        {
          id: 3,
          day: 3,
          disabled: false,
          isSelected: false,
        },
        {
          id: 5,
          day: 5,
          disabled: false,
          isSelected: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Zone 3',
      earliestAvailableDay: 3,
      leadTime: 3,
      zipCodes: zone3,
      deliveryDates: [
        {
          id: 2,
          day: 2,
          disabled: false,
          isSelected: false,
        },
        {
          id: 3,
          day: 3,
          disabled: false,
          isSelected: false,
        },
        {
          id: 5,
          day: 5,
          disabled: false,
          isSelected: false,
        },
      ],
    },
  ],
  bundle: {
    id: 0,
    price: 0,
    extraPricePerMeal: 0,
    weeklyPrice: '',
    shippingPrice: 0,
    breakfast: {
      id: 0,
      tag: '',
    },
  },
  entreeType: {id: 0},
  entreeSubType: {id: 0},
  faqType: null,
  cart: [],
  email: '',
  location: {
    zipCode: '',
    deliveryDate: {
      id: -1,
    },
  },
  tokens: {
    guestToken: '',
    userToken: '',
  },
  triggerLastStep: false,
  returnToStep: '',
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    displayHeader: (state, action) => {
      state.displayHeader = action.payload;
    },
    displayFooter: (state, action) => {
      state.displayFooter = action.payload;
    },
    setActiveStep: (state, action) => {
      const currentStepId = action.payload;
      const currentSteps = state.steps.map((step) =>
        step.id === Number(currentStepId)
          ? {...step, isActive: true}
          : {...step, isActive: false},
      );
      state.steps = currentSteps;
    },
    setVisitedStep: (state, action) => {
      const currentStepId = action.payload;
      const currentSteps = state.steps.map((step) =>
        step.id < Number(currentStepId)
          ? {...step, isVisited: true}
          : {...step, isVisited: false},
      );
      state.steps = currentSteps;
    },
    setBundle: (state, action) => {
      state.bundle = action.payload;
    },
    setBundleExtraPricePerMeal: (state, action) => {
      state.bundle.extraPricePerMeal = action.payload;
    },
    selectFaqType: (state, action) => {
      state.faqType = action.payload;
    },
    setZipCode: (state, action) => {
      state.zipCode = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setEntreeType: (state, action) => {
      state.entreeType = action.payload;
    },
    setEntreeSubType: (state, action) => {
      state.entreeSubType = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setTokens: (state, action) => {
      state.tokens = action.payload;
    },
    setIsNextButtonActive: (state, action) => {
      state.isNextButtonActive = action.payload;
    },
    cartClear: (state) => {
      state.cart = [];
    },
    reset: () => initialState,
    cartUpdate: (state, action) => {
      state.cart = action.payload;
    },
    cartAddItem: (state, action) => {
      const quantity = action.payload.quantity || 1;
      const existingItem = state.cart.find(
        (i) => Number(i.id) === Number(action.payload.id),
      );

      if (!existingItem) {
        state.cart = [
          ...state.cart,
          {
            ...action.payload,
            quantity,
          },
        ];
      } else {
        existingItem.quantity += quantity;
      }
    },
    cartRemoveItem: (state, action) => {
      const existingItem = state.cart.find(
        (i) => Number(i.id) === Number(action.payload.id),
      );

      if (existingItem) {
        existingItem.quantity -= 1;
      }

      if (existingItem.quantity === 0) {
        const newCart = state.cart.filter((i) => i.id !== existingItem.id);
        state.cart = newCart;
      }
    },
    triggerLastStep: (state, action) => {
      state.triggerLastStep = action.payload;
    },
    clearBundle: (state) => {
      state.bundle = {...initialState.bundle};
    },
    setReturnToStep: (state, action) => {
      state.returnToStep = action.payload;
    },
    setDeliveryDates: (state, action) => {
      state.deliveryDates = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const {
  displayFooter,
  displayHeader,
  cartAddItem,
  cartRemoveItem,
  cartClear,
  cartUpdate,
  clearBundle,
  reset,
  selectFaqType,
  setActiveStep,
  setVisitedStep,
  setEmail,
  setBundle,
  setBundleExtraPricePerMeal,
  setEntreeType,
  setEntreeSubType,
  setLocation,
  setTokens,
  setIsNextButtonActive,
  triggerLastStep,
  setReturnToStep,
  setDeliveryDates,
  deliveryDates,
} = rootSlice.actions;
