import CardQuantities from './components/CardQuantities';
const CardData = [
  {
    image:
      'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png',
    title: 'BBQ FEASTbox',
    serves: 5,
  },
  {
    image:
      'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png',
    title: 'BBQ FEASTbox',
    serves: 5,
  },
  {
    image:
      'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png',
    title: 'BBQ FEASTbox',
    serves: 5,
  },
  {
    image:
      'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png',
    title: 'BBQ FEASTbox',
    serves: 5,
  },
  {
    image:
      'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png',
    title: 'BBQ FEASTbox',
    serves: 5,
  },
];
export function ChooseMealStep({...props}) {
  return (
    <div>
      <label
        className="text-2xl mt-[20px] block text-gray-800 text-lg font-bold mb-2"
        htmlFor=""
      >
        2. Choose your Meals
      </label>
      <div className="flex flex-wrap -mx-2 -mb-2">
        {CardData.map((item, index) => (
          <CardQuantities
            key={index}
            title={item.title}
            image={item.image}
            serves={item.serves}
          />
        ))}
      </div>
      <label
        className="block text-gray-800 text-2xl font-bold mb-2 mt-6"
        htmlFor=""
      >
        Breakfast Meals
      </label>
      <div className="flex flex-wrap -mx-2 -mb-2">
        {CardData.map((item, index) => (
          <CardQuantities
            key={index}
            title={item.title}
            image={item.image}
            serves={item.serves}
          />
        ))}
      </div>
    </div>
  );
}
