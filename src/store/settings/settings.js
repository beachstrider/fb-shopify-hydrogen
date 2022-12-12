module.exports = {
  quickfresh: {
    settings: {
      page: {
        title: 'QuickFresh',
        description:
          'We offer healthy, chef-prepared meals delivered fresh to your door. Choose from a wide variety of 120+ options for both Balanced and Keto meal types.',
      },
      display: {
        averageMacros: false,
        chooseMealPlan: true,
        mealsStartingAt: false,
        skipStepMealPlan: true,
        hideBreakFast: true,
        hideShippingPrice: true,
        mealPortionSizeAutoSelectAndHide: true,
        discountFeatureEnable: false,
        setDefault9MealPlanSelection: true,
        filterMealsEnable: true,
        modifyLunchDinner: true,
      },
    },
    labels: {
      step1: 'Meals Per Week',
      step2: 'Meal plans',
      step3: 'Location & Delivery',
      step4: 'Select Your Meals',
      step5: 'Review Order',
      bundleCalorieRange: 'Average Calories Per Meal',
    },
    titles: {
      step1: 'Select Meals Per Week',
      step2: 'Choose Your Meal Plan',
      step3a: 'Enter Your Zip Code & Email',
      step3b: 'Select a Delivery Date',
      step4: 'Select Your Meals',
      step5: 'Review Your Order',
    },
    subtitles: {
      step1: 'Healthy, fresh and ready to eat in 2 minutes',
      step2: 'Chef-curated, nutritious options to fit your lifestyle.',
      step3a:
        'Meals are delivered fresh every week. You can pause, cancel, or update your meal plan at anytime!',
      step3b: 'We can deliver fresh to you within one week!',
      step4: '',
      step5: '',
    },
    bundles: {
      images: {
        featured: '/images/quickfresh-frequency.jpg',
        checkout: '/images/quickfresh-order-package.jpg',
        breakfastSample: '/images/quickfresh-breakfast-sample.jpg',
      },
      icons: [
        {
          key: 'is_dairy_free',
          name: 'DairyFreeIcon',
          color: '#fedc5c',
        },
        {
          key: 'is_gluten_free',
          name: 'GlutenFreeIcon',
          color: '#fedc5c',
        },
        {
          key: 'is_peanut_free',
          name: 'PeanutFreeIcon',
          color: '#fedc5c',
        },
        {
          key: 'is_spicy',
          name: 'SpicyIcon',
          color: '#fedc5c',
        },
      ],
      options: [
        {
          id: 1,
          name: '21 Meals',
          description: '7-Days All inclusive - (14 Meals + 7 Breakfasts)',
          price: 10.95,
          shippingPrice: 0,
          entreesQuantity: 21,
          breakfastsQuantity: 0,
          breakfasts: [
            // {
            //   name: '7 Meals',
            //   price: 4.95,
            //   tag: '7 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '21 Meal Plan',
            },
          ],
        },
        {
          id: 2,
          name: '15 Meals',
          description: '',
          price: 11.95,
          shippingPrice: 0,
          entreesQuantity: 15,
          breakfastsQuantity: 0,
          breakfasts: [
            // {
            //   name: '5 Meals',
            //   price: 5.95,
            //   tag: '5 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '15 Meal Plan',
            },
          ],
        },
        {
          id: 3,
          name: '9 Meals',
          description: '',
          price: 12.95,
          shippingPrice: 0,
          entreesQuantity: 9,
          breakfastsQuantity: 0,

          breakfasts: [
            // {
            //   name: '3 Meals',
            //   price: 5.95,
            //   tag: '3 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '9 Meal Plan',
            },
          ],
        },
      ],
      defaultType: 'balanced',
      pricesPerPortion: [
        // { type: 'keto', subType: 'large', price: 1 },
        {type: 'balanced', subType: 'regular', price: 0},
        // { type: 'balanced', subType: 'medium', price: 1 },
        // { type: 'balanced', subType: 'large', price: 2 }
      ],
    },
    theme: {
      fontFiles: [
        {
          name: 'Gotham-Black',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Black.otf?v=1627982628',
        },
        {
          name: 'Gotham-Bold',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Bold.otf?v=1627982628',
        },
        {
          name: 'Gotham-Book',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Book.otf?v=1627982628',
        },
        {
          name: 'Gotham-Light',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Light.otf?v=1627982628',
        },
        {
          name: 'Gotham-Medium',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Medium.otf?v=1627982628',
        },
        {
          name: 'Gotham-Thin',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Thin.otf?v=1627982628',
        },
      ],
      fontFamilies: {
        fontFamilyBook: 'Gotham-Book',
        fontFamilyBold: 'Gotham-Bold',
        fontFamilyBlack: 'Gotham-Black',
        fontFamilyLight: 'Gotham-Light',
        fontFamilyThin: 'Gotham-Thin',
        fontFamilyMedium: 'Gotham-Medium',
        fontFamilyMediumBold: 'Gotham-Medium',
        fontFamilyMediumItalic: 'Gotham-Medium',
      },
      borders: {
        borderButtonRadius: '2.5rem',
      },
      fontSizes: {
        fontLarge: '4.7rem',
        fontMediumLarge: '3rem',
        semiMediumFont: '2.4rem',
        fontMedium: '2rem',
        fontMediumRegular: '1.8rem',
        fontMediumSmall: '1.6rem',
        fontSmall: '1.6rem',
        fontXSmall: '1.5rem',
        font2XSmall: '1.4rem',
        font3XSmall: '1.2rem',
      },
      colors: {
        primaryColor: '#0a8d47',
        primaryColorLight: '#068d47',
        secondaryColor: '#fec12d',
        thirdColor: '#0a8d47',
        gray: '#4c4c4c',
        grayLight: '#e7eaec',
        gray100: '#e2e2e2',
        gray200: '#dbdbdb',
        gray300: '#bababa',
        grayMedium: '#737678',
        grayMediumSecondary: '#242424',
        white: '#ffffff',
        black: '#000000',
        border: '#707070',
        red: '#c8432d',
        orange: '#ec6120',
        butter: '#fedc5c',
        butter100: '#fedc5cb3',
        headerBackgroundColor: '#f6f6f7',
        borderColor: '#ebebec',
        faqBackgroundColor: '#e8e8e8',
        pillBackground: '#737678',
        buttonColor: '#0a8d47',
        buttonTextColor: '#FFFFFF',
        bannerBackground: '#fedc5c',
        deliveryDay: '#000000',
        topMenuBannerColor: '#F8D739',
      },
    },
  },
  /**
   * CHOW Notes:
   * Breakfast price is always: mealPrice - $2 = X
   */
  chow: {
    settings: {
      page: {
        title: 'Chow',
        description:
          'We offer healthy, chef-prepared meals delivered fresh to your door. Choose from a wide variety of 120+ options for both Balanced and Keto meal types.',
      },
      display: {
        averageMacros: false,
        chooseMealPlan: false,
        mealsStartingAt: false,
        skipStepMealPlan: true,
        hideBreakFast: true,
        hideShippingPrice: true,
        mealPortionSizeAutoSelectAndHide: false,
        discountFeatureEnable: false,
        setDefault9MealPlanSelection: true,
        filterMealsEnable: true,
        modifyLunchDinner: true,
      },
    },
    labels: {
      step1: 'Meals Per Week',
      step2: 'Meal plans',
      step3: 'Location & Delivery',
      step4: 'Select Your Meals',
      step5: 'Review Order',
      bundleCalorieRange: 'Average Calories Per Meal',
    },
    titles: {
      step1: 'Select Meals Per Week',
      step2: 'Choose Your Meal Plan',
      step3a: 'Enter Your Zip Code & Email',
      step3b: 'Select a Delivery Date',
      step4: 'Select Your Meals',
      step5: 'Review Your Order',
    },
    subtitles: {
      step1: 'Healthy, fresh and ready to eat in 2 minutes',
      step2: 'Chef-curated, nutritious options to fit your lifestyle.',
      step3a:
        'Meals are delivered fresh every week. You can pause, cancel, or update your meal plan at anytime!',
      step3b: 'We can deliver fresh to you within one week!',
      step4: '',
      step5: '',
    },
    bundles: {
      images: {
        featured: '/images/quickfresh-frequency.jpg',
        checkout: '/images/chow-thank-you-for-your-order.png',
        breakfastSample: '/images/quickfresh-breakfast-sample.jpg',
      },
      icons: [
        {
          key: 'is_dairy_free',
          name: 'DairyFreeIcon',
          color: '#ffffff',
        },
        {
          key: 'is_gluten_free',
          name: 'GlutenFreeIcon',
          color: '#ffffff',
        },
        {
          key: 'is_peanut_free',
          name: 'PeanutFreeIcon',
          color: '#ffffff',
        },
        {
          key: 'is_spicy',
          name: 'SpicyIcon',
          color: '#ffffff',
        },
      ],
      options: [
        {
          id: 1,
          name: '21 Meals',
          description: '7-Days All inclusive - (14 Meals + 7 Breakfasts)',
          price: 10.95,
          shippingPrice: 0,
          entreesQuantity: 21,
          breakfastsQuantity: 0,
          breakfasts: [
            // {
            //   name: '7 Meals',
            //   price: 8.95,
            //   tag: '7 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '21 Meal Plan',
            },
          ],
        },
        {
          id: 2,
          name: '15 Meals',
          description: '',
          price: 11.95,
          shippingPrice: 0,
          entreesQuantity: 15,
          breakfastsQuantity: 0,
          breakfasts: [
            // {
            //   name: '5 Meals',
            //   price: 9.95,
            //   tag: '5 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '15 Meal Plan',
            },
          ],
        },
        {
          id: 3,
          name: '9 Meals',
          description: '',
          price: 12.95,
          shippingPrice: 0,
          entreesQuantity: 9,
          breakfastsQuantity: 0,

          breakfasts: [
            // {
            //   name: '3 Meals',
            //   price: 10.95,
            //   tag: '3 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '9 Meal Plan',
            },
          ],
        },
      ],
      defaultType: 'balanced',
      pricesPerPortion: [
        // { type: 'keto', subType: 'large', price: 1 },
        {type: 'balanced', subType: 'regular', price: 0},
        // { type: 'balanced', subType: 'medium', price: 1 },
        // { type: 'balanced', subType: 'large', price: 2 }
      ],
    },
    theme: {
      fontFiles: [
        {
          name: 'Eveleth-Bold',
          url: 'https://cdn.shopify.com/s/files/1/0630/9399/7799/files/EvelethRegular-Bold.woff?v=1646429742',
        },
        {
          name: 'Eveleth-Regular',
          url: 'https://cdn.shopify.com/s/files/1/0630/9399/7799/files/Eveleth_Regular.otf?v=1647641476',
        },
        {
          name: 'Gotham-Bold',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Bold.otf?v=1627982628',
        },
        {
          name: 'Lato-Regular',
          url: 'https://cdn.shopify.com/s/files/1/0630/9399/7799/files/Lato-Regular.woff?v=1646429737',
        },
        {
          name: 'Gotham-Light',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Light.otf?v=1627982628',
        },
        {
          name: 'Lato-Bold',
          url: 'https://cdn.shopify.com/s/files/1/0630/9399/7799/files/Lato-Bold.woff?v=1646429737',
        },
        {
          name: 'Lato-Black',
          url: 'https://cdn.shopify.com/s/files/1/0630/9399/7799/files/Lato-Black.woff?v=1646429737',
        },
        {
          name: 'Lato-Bold-Italic',
          url: 'https://cdn.shopify.com/s/files/1/0630/9399/7799/files/Lato-BoldItalic.ttf?v=1647640661',
        },
        {
          name: 'Gotham-Thin',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Thin.otf?v=1627982628',
        },
      ],
      fontFamilies: {
        fontFamilyBook: 'Lato-Regular',
        fontFamilyBold: 'Eveleth-Regular',
        fontFamilyBlack: 'Lato-Black',
        fontFamilyLight: 'Lato-Bold',
        fontFamilyThin: 'Gotham-Thin',
        fontFamilyMedium: 'Lato-Bold',
        fontFamilyMediumBold: 'Lato-Bold',
        fontFamilyMediumItalic: 'Lato-Bold-Italic',
      },
      borders: {
        borderButtonRadius: '0.5rem',
      },
      fontSizes: {
        fontLarge: '4.7rem',
        fontMediumLarge: '3rem',
        semiMediumFont: '2.4rem',
        fontMedium: '2rem',
        fontMediumRegular: '1.8rem',
        fontMediumSmall: '1.6rem',
        fontSmall: '1.6rem',
        fontXSmall: '1.5rem',
        font2XSmall: '1.4rem',
        font3XSmall: '1.2rem',
      },
      colors: {
        primaryColor: '#000000',
        primaryColorLight: '#656549',
        secondaryColor: '#BB8D3D',
        thirdColor: '#000000',
        gray: '#4c4c4c',
        grayLight: '#e7eaec',
        gray100: '#e2e2e2',
        gray200: '#dbdbdb',
        gray300: '#bababa',
        grayMedium: '#737678',
        grayMediumSecondary: '#242424',
        white: '#ffffff',
        black: '#000000',
        border: '#707070',
        red: '#c8432d',
        orange: '#ec6120',
        butter: '#fedc5c',
        butter100: '#fedc5cb3',
        headerBackgroundColor: '#f6f6f7',
        borderColor: '#ebebec',
        faqBackgroundColor: '#e8e8e8',
        pillBackground: '#BB8D3D',
        buttonColor: '#656549',
        buttonTextColor: '#FFFFFF',
        bannerBackground: '#DDCFC4',
        deliveryDay: '#000000',
        topMenuBannerColor: '#958161',
      },
    },
  },
  cse: {
    settings: {
      page: {
        title: 'Clean Simple Eats',
        description:
          'We offer healthy, chef-prepared meals delivered fresh to your door. Choose from a wide variety of 120+ options for both Balanced and Keto meal types.',
      },
      display: {
        averageMacros: true,
        chooseMealPlan: false,
        mealsStartingAt: true,
        skipStepMealPlan: false,
        hideBreakFast: false,
        hideShippingPrice: false,
        mealPortionSizeAutoSelectAndHide: false,
        discountFeatureEnable: false,
        setDefault9MealPlanSelection: false,
        filterMealsEnable: false,
        modifyLunchDinner: false,
      },
    },
    labels: {
      step1: 'Meals Per Week',
      step2: 'Portion Size',
      step3: 'Location & Delivery',
      step4: 'Select Your Meals',
      step5: 'Review Order',
      bundleCalorieRange: 'Average Calories',
    },
    titles: {
      step1: 'Select Meals Per Week',
      step2: 'Choose Your Portion Size',
      step3a: 'Enter Your Zip Code & Email',
      step3b: 'Select a Delivery Date',
      step4: 'Select Your Meals',
      step5: 'Review Your Order',
    },
    subtitles: {
      step1: 'Healthy, fresh and ready to eat in 2 minutes',
      step2: 'Chef-curated, nutritious options to fit your lifestyle.',
      step3a:
        'Meals are delivered fresh every week. You can pause, cancel, or update your meal plan at anytime!',
      step3b: 'We can deliver fresh within one week!',
      step4: '',
      step5: '',
    },
    bundles: {
      images: {
        featured: '/images/cse-frequency.jpg',
        checkout: '/images/cse-review-order.png',
        breakfastSample: '',
      },
      icons: [
        {
          key: 'is_dairy_free',
          name: 'DairyFreeIcon',
          color: '#ffffff',
        },
        {
          key: 'is_gluten_free',
          name: 'GlutenFreeIcon',
          color: '#ffffff',
        },
        {
          key: 'is_peanut_free',
          name: 'PeanutFreeIcon',
          color: '#ffffff',
        },
        {
          key: 'is_spicy',
          name: 'SpicyIcon',
          color: '#ffffff',
        },
      ],
      options: [
        {
          id: 1,
          name: '14 Meals',
          description: '7-Days All inclusive - (14 Meals + 7 Breakfasts)',
          price: 10.95,
          shippingPrice: 9.95,
          entreesQuantity: 14,
          breakfastsQuantity: 7,
          breakfasts: [
            {
              name: '7 Meals',
              price: 8.95,
              tag: '7 Day with breakfast',
            },
            {
              name: 'none',
              price: 'None',
              tag: '7 Day',
            },
          ],
        },
        {
          id: 2,
          name: '10 Meals',
          description: '',
          price: 11.95,
          shippingPrice: 9.95,
          entreesQuantity: 10,
          breakfastsQuantity: 5,
          breakfasts: [
            {
              name: '5 Meals',
              price: 9.95,
              tag: '5 Day with breakfast',
            },
            {
              name: 'none',
              price: 'None',
              tag: '5 Day',
            },
          ],
        },
        {
          id: 3,
          name: '6 Meals',
          description: '',
          price: 12.95,
          shippingPrice: 9.95,
          entreesQuantity: 6,
          breakfastsQuantity: 3,

          breakfasts: [
            {
              name: '3 Meals',
              price: 10.95,
              tag: '3 Day with breakfast',
            },
            {
              name: 'none',
              price: 'None',
              tag: '3 Day',
            },
          ],
        },
      ],
      defaultType: 'balanced',
      pricesPerPortion: [
        {type: 'balanced', subType: 'single', price: 0},
        {type: 'balanced', subType: 'double', price: 2},
      ],
    },
    theme: {
      fontFiles: [
        {
          name: 'Eveleth-Bold',
          url: 'https://cdn.shopify.com/s/files/1/0630/9399/7799/files/EvelethRegular-Bold.woff?v=1646429742',
        },
        {
          name: 'Eveleth-Regular',
          url: 'https://cdn.shopify.com/s/files/1/0630/9399/7799/files/Eveleth_Regular.otf?v=1647641476',
        },
        {
          name: 'Gotham-Bold',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Bold.otf?v=1627982628',
        },
        {
          name: 'Gotham-Black',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Black.otf?v=1627982628',
        },
        {
          name: 'Avenir-Regular',
          url: 'https://cdn.shopify.com/s/files/1/0632/5262/7694/files/Avenir-Book.woff?v=1647640173',
        },
        {
          name: 'Gotham-Light',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Light.otf?v=1627982628',
        },
        {
          name: 'Avenir-Bold',
          url: 'https://cdn.shopify.com/s/files/1/0632/5262/7694/files/Avenir-Heavy.woff?v=1647640173',
        },
        {
          name: 'Avenir-Bold-Italic',
          url: 'https://cdn.shopify.com/s/files/1/0632/5262/7694/files/Avenir-Oblique.woff?v=1647640173',
        },
        {
          name: 'Gotham-Thin',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Thin.otf?v=1627982628',
        },
      ],
      fontFamilies: {
        fontFamilyBook: 'Avenir-Regular',
        fontFamilyBold: 'Eveleth-Regular',
        fontFamilyBlack: 'Gotham-Black',
        fontFamilyLight: 'Avenir-Bold',
        fontFamilyThin: 'Gotham-Thin',
        fontFamilyMedium: 'Avenir-Bold',
        fontFamilyMediumBold: 'Avenir-Bold',
        fontFamilyMediumItalic: 'Avenir-Bold-Italic',
      },
      borders: {
        borderButtonRadius: '0.5rem',
      },
      fontSizes: {
        fontLarge: '4.7rem',
        fontMediumLarge: '3rem',
        semiMediumFont: '2.4rem',
        fontMedium: '2rem',
        fontMediumRegular: '1.8rem',
        fontMediumSmall: '1.6rem',
        fontSmall: '1.6rem',
        fontXSmall: '1.5rem',
        font2XSmall: '1.4rem',
        font3XSmall: '1.2rem',
      },
      colors: {
        primaryColor: '#000000',
        primaryColorLight: '#689859',
        secondaryColor: '#689859',
        thirdColor: '#000000',
        gray: '#4c4c4c',
        grayLight: '#e7eaec',
        gray100: '#e2e2e2',
        gray200: '#dbdbdb',
        gray300: '#bababa',
        grayMedium: '#737678',
        grayMediumSecondary: '#242424',
        white: '#ffffff',
        black: '#000000',
        border: '#707070',
        red: '#c8432d',
        orange: '#ec6120',
        butter: '#fedc5c',
        butter100: '#fedc5cb3',
        headerBackgroundColor: '#f6f6f7',
        borderColor: '#ebebec',
        faqBackgroundColor: '#e8e8e8',
        pillBackground: '#689859',
        buttonColor: '#689859',
        buttonTextColor: '#FFFFFF',
        bannerBackground: '#FFFFFF',
        deliveryDay: '#689859',
        topMenuBannerColor: '#689859',
      },
    },
  },
  etp: {
    settings: {
      page: {
        title: 'Eat To Perform Kitchen',
        description:
          'We offer healthy, chef-prepared meals delivered fresh to your door. Choose from a wide variety of 120+ options for both Balanced and Keto meal types.',
      },
      display: {
        averageMacros: false,
        chooseMealPlan: false,
        mealsStartingAt: false,
        skipStepMealPlan: true,
        hideBreakFast: true,
        hideShippingPrice: true,
        mealPortionSizeAutoSelectAndHide: false,
        discountFeatureEnable: true,
        setDefault9MealPlanSelection: true,
        filterMealsEnable: true,
        modifyLunchDinner: true,
      },
    },
    labels: {
      step1: 'Meals Per Week',
      step2: 'Meal plans',
      step3: 'Location & Delivery',
      step4: 'Select Your Meals',
      step5: 'Review Order',
      bundleCalorieRange: 'Average Calories Per Meal',
    },
    titles: {
      step1: 'Select Meals Per Week',
      step2: 'Choose Your Meal Plan',
      step3a: 'Enter Your Zip Code & Email',
      step3b: 'Select a Delivery Date',
      step4: 'Select Your Meals',
      step5: 'Review Your Order',
    },
    subtitles: {
      step1: 'Healthy, fresh and ready to eat in 2 minutes',
      step2: 'Chef-curated, nutritious options to fit your lifestyle.',
      step3a:
        'Meals are delivered fresh every week. You can pause, cancel, or update your meal plan at anytime!',
      step3b: 'We can deliver fresh to you within one week!',
      step4: '',
      step5: '',
    },
    bundles: {
      images: {
        featured: '/images/quickfresh-frequency.jpg',
        checkout:
          'https://res.cloudinary.com/meals/image/upload/v1661628814/etpk/Site%20Assets/5_meals_hero.jpg',
        breakfastSample: '/images/quickfresh-breakfast-sample.jpg',
      },
      icons: [
        {
          key: 'is_dairy_free',
          name: 'DairyFreeIcon',
          color: '#fedc5c',
        },
        {
          key: 'is_gluten_free',
          name: 'GlutenFreeIcon',
          color: '#fedc5c',
        },
        {
          key: 'is_peanut_free',
          name: 'PeanutFreeIcon',
          color: '#fedc5c',
        },
        {
          key: 'is_spicy',
          name: 'SpicyIcon',
          color: '#fedc5c',
        },
      ],
      options: [
        {
          id: 1,
          name: '21 Meals',
          description: '7-Days All inclusive - (14 Meals + 7 Breakfasts)',
          price: 10.95,
          shippingPrice: 0,
          entreesQuantity: 21,
          breakfastsQuantity: 0,
          breakfasts: [
            // {
            //   name: '7 Meals',
            //   price: 4.95,
            //   tag: '7 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '21 Meal Plan',
            },
          ],
        },
        {
          id: 2,
          name: '15 Meals',
          description: '',
          price: 11.95,
          shippingPrice: 0,
          entreesQuantity: 15,
          breakfastsQuantity: 0,
          breakfasts: [
            // {
            //   name: '5 Meals',
            //   price: 5.95,
            //   tag: '5 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '15 Meal Plan',
            },
          ],
        },
        {
          id: 3,
          name: '9 Meals',
          description: '',
          price: 12.95,
          shippingPrice: 0,
          entreesQuantity: 9,
          breakfastsQuantity: 0,

          breakfasts: [
            // {
            //   name: '3 Meals',
            //   price: 5.95,
            //   tag: '3 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '9 Meal Plan',
            },
          ],
        },
      ],
      defaultType: 'balanced',
      pricesPerPortion: [
        // { type: 'keto', subType: 'large', price: 1 },
        {type: 'balanced', subType: 'regular', price: 0},
        // { type: 'balanced', subType: 'medium', price: 1 },
        // { type: 'balanced', subType: 'large', price: 2 }
      ],
    },
    theme: {
      fontFiles: [
        {
          name: 'Gotham-Black',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Black.otf?v=1627982628',
        },
        {
          name: 'Gotham-Bold',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Bold.otf?v=1627982628',
        },
        {
          name: 'Gotham-Book',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Book.otf?v=1627982628',
        },
        {
          name: 'Gotham-Light',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Light.otf?v=1627982628',
        },
        {
          name: 'Gotham-Medium',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Medium.otf?v=1627982628',
        },
        {
          name: 'Gotham-Thin',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Thin.otf?v=1627982628',
        },
      ],
      fontFamilies: {
        fontFamilyBook: 'Gotham-Book',
        fontFamilyBold: 'Gotham-Bold',
        fontFamilyBlack: 'Gotham-Black',
        fontFamilyLight: 'Gotham-Light',
        fontFamilyThin: 'Gotham-Thin',
        fontFamilyMedium: 'Gotham-Medium',
        fontFamilyMediumBold: 'Gotham-Medium',
        fontFamilyMediumItalic: 'Gotham-Medium',
      },
      borders: {
        borderButtonRadius: '2.5rem',
      },
      fontSizes: {
        fontLarge: '4.7rem',
        fontMediumLarge: '3rem',
        semiMediumFont: '2.4rem',
        fontMedium: '2rem',
        fontMediumRegular: '1.8rem',
        fontMediumSmall: '1.6rem',
        fontSmall: '1.6rem',
        fontXSmall: '1.5rem',
        font2XSmall: '1.4rem',
        font3XSmall: '1.2rem',
      },
      colors: {
        primaryColor: '#48c2f9',
        primaryColorLight: '#48c2f9',
        secondaryColor: '#0a8d47',
        thirdColor: '#48c2f9',
        gray: '#4c4c4c',
        grayLight: '#e7eaec',
        gray100: '#e2e2e2',
        gray200: '#dbdbdb',
        gray300: '#bababa',
        grayMedium: '#737678',
        grayMediumSecondary: '#242424',
        white: '#ffffff',
        black: '#000000',
        border: '#707070',
        red: '#c8432d',
        orange: '#ec6120',
        butter: '#fedc5c',
        butter100: '#fedc5cb3',
        headerBackgroundColor: '#f6f6f7',
        borderColor: '#ebebec',
        faqBackgroundColor: '#e8e8e8',
        pillBackground: '#737678',
        buttonColor: '#48c2f9',
        buttonTextColor: '#FFFFFF',
        bannerBackground: '#fedc5c',
        deliveryDay: '#000000',
        topMenuBannerColor: '#F8D739',
      },
    },
  },
  iifym: {
    settings: {
      page: {
        title: 'If it fits your macros kitchen',
        description:
          'We offer healthy, chef-prepared meals delivered fresh to your door. Choose from a wide variety of 120+ options for both Balanced and Keto meal types.',
      },
      display: {
        averageMacros: false,
        chooseMealPlan: true,
        mealsStartingAt: false,
        skipStepMealPlan: true,
        hideBreakFast: true,
        hideShippingPrice: true,
        mealPortionSizeAutoSelectAndHide: false,
        discountFeatureEnable: false,
        setDefault9MealPlanSelection: true,
        filterMealsEnable: true,
        modifyLunchDinner: true,
      },
    },
    labels: {
      step1: 'Meals Per Week',
      step2: 'Meal plans',
      step3: 'Location & Delivery',
      step4: 'Select Your Meals',
      step5: 'Review Order',
      bundleCalorieRange: 'Average Calories Per Meal',
    },
    titles: {
      step1: 'Select Meals Per Week',
      step2: 'Choose Your Meal Plan',
      step3a: 'Enter Your Zip Code & Email',
      step3b: 'Select a Delivery Date',
      step4: 'Select Your Meals',
      step5: 'Review Your Order',
    },
    subtitles: {
      step1: 'Healthy, fresh and ready to eat in 2 minutes',
      step2: 'Chef-curated, nutritious options to fit your lifestyle.',
      step3a:
        'Meals are delivered fresh every week. You can pause, cancel, or update your meal plan at anytime!',
      step3b: 'We can deliver fresh to you within one week!',
      step4: '',
      step5: '',
    },
    bundles: {
      images: {
        featured: '/images/quickfresh-frequency.jpg',
        checkout:
          'https://res.cloudinary.com/meals/image/upload/v1661628814/etpk/Site%20Assets/5_meals_hero.jpg',
        breakfastSample: '/images/quickfresh-breakfast-sample.jpg',
      },
      icons: [
        {
          key: 'is_dairy_free',
          name: 'DairyFreeIcon',
          color: '#fedc5c',
        },
        {
          key: 'is_gluten_free',
          name: 'GlutenFreeIcon',
          color: '#fedc5c',
        },
        {
          key: 'is_peanut_free',
          name: 'PeanutFreeIcon',
          color: '#fedc5c',
        },
        {
          key: 'is_spicy',
          name: 'SpicyIcon',
          color: '#fedc5c',
        },
      ],
      options: [
        {
          id: 1,
          name: '21 Meals',
          description: '7-Days All inclusive - (14 Meals + 7 Breakfasts)',
          price: 10.95,
          shippingPrice: 0,
          entreesQuantity: 21,
          breakfastsQuantity: 0,
          breakfasts: [
            // {
            //   name: '7 Meals',
            //   price: 4.95,
            //   tag: '7 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '21 Meal Plan',
            },
          ],
        },
        {
          id: 2,
          name: '15 Meals',
          description: '',
          price: 11.95,
          shippingPrice: 0,
          entreesQuantity: 15,
          breakfastsQuantity: 0,
          breakfasts: [
            // {
            //   name: '5 Meals',
            //   price: 5.95,
            //   tag: '5 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '15 Meal Plan',
            },
          ],
        },
        {
          id: 3,
          name: '9 Meals',
          description: '',
          price: 12.95,
          shippingPrice: 0,
          entreesQuantity: 9,
          breakfastsQuantity: 0,

          breakfasts: [
            // {
            //   name: '3 Meals',
            //   price: 5.95,
            //   tag: '3 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '9 Meal Plan',
            },
          ],
        },
      ],
      defaultType: 'balanced',
      pricesPerPortion: [
        // { type: 'keto', subType: 'large', price: 1 },
        {type: 'balanced', subType: 'regular', price: 0},
        // { type: 'balanced', subType: 'medium', price: 1 },
        // { type: 'balanced', subType: 'large', price: 2 }
      ],
    },
    theme: {
      fontFiles: [
        {
          name: 'Gotham-Black',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Black.otf?v=1627982628',
        },
        {
          name: 'Gotham-Bold',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Bold.otf?v=1627982628',
        },
        {
          name: 'Gotham-Book',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Book.otf?v=1627982628',
        },
        {
          name: 'Gotham-Light',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Light.otf?v=1627982628',
        },
        {
          name: 'Gotham-Medium',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Medium.otf?v=1627982628',
        },
        {
          name: 'Gotham-Thin',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Thin.otf?v=1627982628',
        },
      ],
      fontFamilies: {
        fontFamilyBook: 'Gotham-Book',
        fontFamilyBold: 'Gotham-Bold',
        fontFamilyBlack: 'Gotham-Black',
        fontFamilyLight: 'Gotham-Light',
        fontFamilyThin: 'Gotham-Thin',
        fontFamilyMedium: 'Gotham-Medium',
        fontFamilyMediumBold: 'Gotham-Medium',
        fontFamilyMediumItalic: 'Gotham-Medium',
      },
      borders: {
        borderButtonRadius: '2.5rem',
      },
      fontSizes: {
        fontLarge: '4.7rem',
        fontMediumLarge: '3rem',
        semiMediumFont: '2.4rem',
        fontMedium: '2rem',
        fontMediumRegular: '1.8rem',
        fontMediumSmall: '1.6rem',
        fontSmall: '1.6rem',
        fontXSmall: '1.5rem',
        font2XSmall: '1.4rem',
        font3XSmall: '1.2rem',
      },
      colors: {
        primaryColor: '#d53333',
        primaryColorLight: '#d53333',
        secondaryColor: '#d53333',
        thirdColor: '#969696',
        gray: '#4c4c4c',
        grayLight: '#e7eaec',
        gray100: '#e2e2e2',
        gray200: '#dbdbdb',
        gray300: '#bababa',
        grayMedium: '#737678',
        grayMediumSecondary: '#242424',
        white: '#ffffff',
        black: '#000000',
        border: '#707070',
        red: '#c8432d',
        orange: '#ec6120',
        butter: '#fedc5c',
        butter100: '#fedc5cb3',
        headerBackgroundColor: '#f6f6f7',
        borderColor: '#ebebec',
        faqBackgroundColor: '#e8e8e8',
        pillBackground: '#737678',
        buttonColor: '#d53333',
        buttonTextColor: '#FFFFFF',
        bannerBackground: '#fedc5c',
        deliveryDay: '#000000',
        topMenuBannerColor: '#F8D739',
      },
    },
  },
  feastbox: {
    settings: {
      page: {
        title: 'FeastBox',
        description:
          'We offer healthy, chef-prepared meals delivered fresh to your door. Choose from a wide variety of 120+ options for both Balanced and Keto meal types.',
      },
      display: {
        averageMacros: false,
        chooseMealPlan: true,
        mealsStartingAt: false,
        skipStepMealPlan: true,
        hideBreakFast: true,
        hideShippingPrice: true,
        mealPortionSizeAutoSelectAndHide: true,
        discountFeatureEnable: false,
        setDefault9MealPlanSelection: true,
        filterMealsEnable: true,
        modifyLunchDinner: true,
      },
    },
    labels: {
      step1: 'Party Size',
      step2: 'Meal plans',
      step3: 'Location & Delivery',
      step4: 'FEASTbox',
      step5: 'Review Order',
      bundleCalorieRange: 'Average Calories Per Meal',
    },
    titles: {
      step1: 'Choose party size',
      step11: 'Enter Your Email & Zipcode',
      step2: 'Choose Your Meal Plan',
      step3a: 'Choose first delivery date',
      step3b: 'Select a Delivery Date',
      step4: 'Choose Your First FEASTbox',
      step5: 'Subscription',
    },
    subtitles: {
      step1:
        'Lets get the party started.Choose the number of people you plan on feeding.',
      step11:
        'Meals are delivered fresh every week. You can pause, cancel or update your meals plan at anytime!',
      step2: 'Chef-curated, nutritious options to fit your lifestyle.',
      step3a:
        'This is a reoccurring delivery on the weekday you select if you need it on Monday, choose delivery on Friday.',
      step3b: 'We can deliver fresh to you within one week!',
      step4: 'Each week come back to choose your Feast',
      step5: 'Each week come back to choose your Feast',
    },
    bundles: {
      images: {
        featured: '/images/quickfresh-frequency.jpg',
        checkout: '/images/quickfresh-order-package.jpg',
        breakfastSample: '/images/quickfresh-breakfast-sample.jpg',
      },
      icons: [
        {
          key: 'is_dairy_free',
          name: 'DairyFreeIcon',
          color: '#fedc5c',
        },
        {
          key: 'is_gluten_free',
          name: 'GlutenFreeIcon',
          color: '#fedc5c',
        },
        {
          key: 'is_peanut_free',
          name: 'PeanutFreeIcon',
          color: '#fedc5c',
        },
        {
          key: 'is_spicy',
          name: 'SpicyIcon',
          color: '#fedc5c',
        },
      ],
      options: [
        {
          id: 1,
          name: '21 Meals',
          description: '7-Days All inclusive - (14 Meals + 7 Breakfasts)',
          price: 10.95,
          shippingPrice: 0,
          entreesQuantity: 21,
          breakfastsQuantity: 0,
          breakfasts: [
            // {
            //   name: '7 Meals',
            //   price: 4.95,
            //   tag: '7 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '21 Meal Plan',
            },
          ],
        },
        {
          id: 2,
          name: '15 Meals',
          description: '',
          price: 11.95,
          shippingPrice: 0,
          entreesQuantity: 15,
          breakfastsQuantity: 0,
          breakfasts: [
            // {
            //   name: '5 Meals',
            //   price: 5.95,
            //   tag: '5 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '15 Meal Plan',
            },
          ],
        },
        {
          id: 3,
          name: '9 Meals',
          description: '',
          price: 12.95,
          shippingPrice: 0,
          entreesQuantity: 9,
          breakfastsQuantity: 0,

          breakfasts: [
            // {
            //   name: '3 Meals',
            //   price: 5.95,
            //   tag: '3 Day with breakfast'
            // },
            {
              name: 'none',
              price: 'None',
              tag: '9 Meal Plan',
            },
          ],
        },
      ],
      defaultType: 'balanced',
      pricesPerPortion: [
        // { type: 'keto', subType: 'large', price: 1 },
        {type: 'balanced', subType: 'regular', price: 0},
        // { type: 'balanced', subType: 'medium', price: 1 },
        // { type: 'balanced', subType: 'large', price: 2 }
      ],
    },
    theme: {
      fontFiles: [
        {
          name: 'Gotham-Black',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Black.otf?v=1627982628',
        },
        {
          name: 'Gotham-Bold',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Bold.otf?v=1627982628',
        },
        {
          name: 'Gotham-Book',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Book.otf?v=1627982628',
        },
        {
          name: 'Gotham-Light',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Light.otf?v=1627982628',
        },
        {
          name: 'Gotham-Medium',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Medium.otf?v=1627982628',
        },
        {
          name: 'Gotham-Thin',
          url: 'https://cdn.shopify.com/s/files/1/0552/6549/3185/files/Gotham-Thin.otf?v=1627982628',
        },
      ],
      fontFamilies: {
        fontFamilyBook: 'Gotham-Book',
        fontFamilyBold: 'Gotham-Bold',
        fontFamilyBlack: 'Gotham-Black',
        fontFamilyLight: 'Gotham-Light',
        fontFamilyThin: 'Gotham-Thin',
        fontFamilyMedium: 'Gotham-Medium',
        fontFamilyMediumBold: 'Gotham-Medium',
        fontFamilyMediumItalic: 'Gotham-Medium',
      },
      borders: {
        borderButtonRadius: '2.5rem',
      },
      fontSizes: {
        fontLarge: '4.7rem',
        fontMediumLarge: '3rem',
        semiMediumFont: '2.4rem',
        fontMedium: '2rem',
        fontMediumRegular: '1.8rem',
        fontMediumSmall: '1.6rem',
        fontSmall: '1.6rem',
        fontXSmall: '1.5rem',
        font2XSmall: '1.4rem',
        font3XSmall: '1.2rem',
      },
      colors: {
        primaryColor: '#0a8d47',
        primaryColorLight: '#068d47',
        secondaryColor: '#fec12d',
        thirdColor: '#0a8d47',
        gray: '#4c4c4c',
        grayLight: '#e7eaec',
        gray100: '#e2e2e2',
        gray200: '#dbdbdb',
        gray300: '#bababa',
        grayMedium: '#737678',
        grayMediumSecondary: '#242424',
        white: '#ffffff',
        black: '#000000',
        border: '#707070',
        red: '#c8432d',
        orange: '#ec6120',
        butter: '#fedc5c',
        butter100: '#fedc5cb3',
        headerBackgroundColor: '#f6f6f7',
        borderColor: '#ebebec',
        faqBackgroundColor: '#e8e8e8',
        pillBackground: '#737678',
        buttonColor: '#0a8d47',
        buttonTextColor: '#FFFFFF',
        bannerBackground: '#fedc5c',
        deliveryDay: '#000000',
        topMenuBannerColor: '#F8D739',
      },
    },
  },
};
