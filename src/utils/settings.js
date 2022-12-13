import {DEFAULT_SETTINGS_KEY} from '../constants/defaults';
import storeSettings from '../store/settings/settings';

const settings = () => {
  const settingsKey = DEFAULT_SETTINGS_KEY;
  const values = () => storeSettings[settingsKey];
  const bundles = () => values().bundles;
  const bundleOptions = () => bundles().options;
  const bundleImages = () => bundles().images;
  const icons = () => bundles().icons;
  const labels = () => values().labels;
  const titles = () => values().titles;
  const subtitles = () => values().subtitles;
  const display = () => values().settings.display;
  const bundlePricesPerPortion = (entreeType, entreeSubType) =>
    entreeType
      ? bundles().pricesPerPortion.find(
          (t) =>
            t.type === entreeType.toLowerCase() &&
            t.subType === entreeSubType.toLowerCase(),
        )
      : bundles().pricesPerPortion;

  const steps = () => {
    const skipStepMealPlan = display().skipStepMealPlan;
    const labels = values().labels;
    // steps for common site
    const commonSteps = [
      {
        id: 1,
        name: 'Step 1',
        description: labels.step1,
        path: '/',
        isActive: true,
      },
      {
        id: 2,
        name: 'Step 2',
        description: labels.step2,
        path: '/steps/2',
        isActive: false,
      },
      {
        id: 3,
        name: 'Step 3',
        description: labels.step3,
        path: '/steps/3',
        isActive: false,
      },
      {
        id: 4,
        name: 'Step 4',
        description: labels.step4,
        path: '/steps/4',
        isActive: false,
      },
      {
        id: 5,
        name: 'Step 5',
        description: labels.step5,
        path: '/steps/5',
        isActive: false,
      },
    ];
    // steps for skipStepMealPlan
    const withoutMealPlanStep = [
      {
        id: 1,
        name: 'Step 1',
        description: labels.step1,
        path: '/',
        isActive: true,
      },
      {
        id: 2,
        name: 'Step 2',
        description: labels.step3,
        path: '/steps/2',
        isActive: false,
      },
      {
        id: 3,
        name: 'Step 3',
        description: labels.step4,
        path: '/steps/3',
        isActive: false,
      },
      {
        id: 4,
        name: 'Step 4',
        description: labels.step5,
        path: '/steps/4',
        isActive: false,
      },
    ];

    if (skipStepMealPlan) {
      return withoutMealPlanStep;
    } else {
      return commonSteps;
    }
  };
  return {
    bundleOptions,
    bundleImages,
    bundles,
    values,
    icons,
    labels,
    titles,
    subtitles,
    display,
    bundlePricesPerPortion,
    steps,
  };
};

export default settings;
