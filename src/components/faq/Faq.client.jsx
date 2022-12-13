import {useState} from 'react';
import {FaqCategory, FaqQuestionAndAnswer} from '~/components';

const data = [
  {
    title: 'About QuickFresh',
    items: [
      {
        question: 'What is QuickFresh?',
        answer:
          'QuickFresh believes in making healthy eating convenient by delivering nutritious meals straight to your door. Each dish is ready to eat in under three minutes. You can choose from over 50 different meal options available with balanced macros. With a QuickFresh subscription, you will receive a weekly delivery of our meals.',
      },
      {
        question: 'How did QuickFresh start?',
        answer:
          'CEO Jody Rookstool started QuickFresh in 2021 because he believes that anyone is capable of changing for the better. He organized a group of culinary experts to start creating nutritious meals that could be delivered across the country. Now based in Springville, Utah, QuickFresh continues to keep its core values at the forefront of its business model, ensuring our mission is helping our customers feel empowered to make lifestyle changes for the better.',
      },
    ],
  },
  {
    title: 'Subscription & Account',
    items: [
      {
        question: 'Is QuickFresh a subscription service?',
        answer:
          'Yes! Your account will be charged weekly and a new batch of amazing meals will be delivered to your door on the same day each week. Don’t stress though, you can cancel or pause your subscription at any time.',
      },
      {
        question: 'How did QuickFresh start?',
        answer:
          'CEO Jody Rookstool started QuickFresh in 2021 because he believes that anyone is capable of changing for the better. He organized a group of culinary experts to start creating nutritious meals that could be delivered across the country. Now based in Springville, Utah, QuickFresh continues to keep its core values at the forefront of its business model, ensuring our mission is helping our customers feel empowered to make lifestyle changes for the better.',
      },
    ],
  },
  {
    title: 'About QuickFresh',
    items: [
      {
        question: 'What is QuickFresh?',
        answer:
          'QuickFresh believes in making healthy eating convenient by delivering nutritious meals straight to your door. Each dish is ready to eat in under three minutes. You can choose from over 50 different meal options available with balanced macros. With a QuickFresh subscription, you will receive a weekly delivery of our meals.',
      },
      {
        question: 'How did QuickFresh start?',
        answer:
          'CEO Jody Rookstool started QuickFresh in 2021 because he believes that anyone is capable of changing for the better. He organized a group of culinary experts to start creating nutritious meals that could be delivered across the country. Now based in Springville, Utah, QuickFresh continues to keep its core values at the forefront of its business model, ensuring our mission is helping our customers feel empowered to make lifestyle changes for the better.',
      },
    ],
  },
];

export function Faq({...props}) {
  const [selectedData, setSelectedData] = useState(data[0]);

  const handleClick = (index) => {
    setSelectedData(data[index]);
  };

  return (
    <div className="flex">
      <FaqCategory data={data} handleClick={handleClick} />
      <FaqQuestionAndAnswer questionData={selectedData} />
    </div>
  );
}
