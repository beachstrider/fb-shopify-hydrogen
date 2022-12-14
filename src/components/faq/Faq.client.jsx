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
      {
        question: 'Can I follow QuickFresh on social media?',
        answer: 'We’d love to connect with you! QuickFresh has accounts on LinkedIn, Instagram, Facebook, YouTube and Tik Tok. Follow us to stay up-to-date with the latest QuickFresh news and be inspired on your journey to eat convenient, healthy food!'
      },
      {
        question: 'Is QuickFresh hiring?',
        answer: 'Great question! You can see any available job positions at QuickFresh by looking at our Careers page linked in our footer. Check back regularly to see new job opportunities with us.'
      },
      {
        question: 'Is QuickFresh a subscription service?',
        answer: 'Yes! Your account will be charged weekly and a new batch of amazing meals will be delivered to your door on the same day each week. Don’t stress though, you can cancel or pause your subscription at any time.'
      },
      {
        question: 'Where are your meals prepared?',
        answer: 'They are prepared at our QuickFresh production facility in Springville, UT.'
      },
      {
        question: 'How can I contact you?',
        answer: 'You can contact us by email at support@quickfresh.com or by phone at (435)-659-2345.'
      }
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
        question: 'How do I cancel my subscription plan?',
        answer:
          'Log into your account and click “Manage Subscription.” From there, you should be able to see your active subscriptions. Click on the cancel button at the bottom of the page to cancel any active subscriptions.',
      },
      {
        question: 'How do I change how many meals I get each week?',
        answer:
          'Log into your online account and click on the “Manage Meal Subscription” button. From there, you will click edit, then product, and swap your subscription. You can also reach out to our team using the chat feature on our site or contact Customer Service at support@quickfresh.com or (435)-659-2345.',
      },
      {
        question: 'How do I change how many meals I get each week?',
        answer:
          'Log into your online account and click on the “Manage Meal Subscription” button. From there, you will click edit, then product, and swap your subscription. You can also reach out to our team using the chat feature on our site or contact Customer Service at support@quickfresh.com or (435)-659-2345.',
      },
      {
        question: 'How do I change my delivery address?',
        answer:
          'Reach out to our team using the chat feature on our site or contact Customer Service at support@quickfresh.com or (435)-659-2345.',
      },
      {
        question: 'How do I skip my next shipment?',
        answer:
          'Log into your account and click “Manage Subscription.” From there, click on “edit” and you will be given the option to “skip shipment.” ',
      },
      {
        question: 'What if I want to change the plan I’m on?',
        answer:
          'To switch your plan, you can contact us through the chat feature on this page or contact Customer Service at support@quickfresh.com or (435)-659-2345.',
      },
      {
        question: 'Do I get to choose my meals each week?',
        answer:
          'Yes, you do! To select meals for your upcoming weeks, log into your account and click “Pick Your Custom Meals.” Note that you must choose your meals before your upcoming charge goes through! You will receive an email letting you know when your upcoming charge is approaching. If you forget to select your meals in this time frame, don’t stress. We’ll send you our most popular meals for the upcoming week. If you have questions or concerns about choosing your meals, contact our consultation team through the chat on this page or contact Customer Service at support@quickfresh.com or (435)-659-2345.',
      },
      {
        question: 'What happens if I forget to choose my meals?',
        answer:
          'If you forget to choose your meals one week, you will be sent the ‘Customer Favorites’ meals for that week. These are the most popular meals among our customers for that week’s menu.',
      },
      {
        question: 'How can I figure out when my next charge date is?',
        answer:
          'If you log into your account and click “manage subscription,” it will show you your next charge date which should be 3 days after your last meal delivery (unless it was skipped). You will also receive an email when you are approaching your charge date to remind you to select your meals. If you are still unable to find your next charge date, contact our support team at support@quickfresh.com or (435)-659-2345.',
      },
      {
        question: 'By when do I need to skip my meals?',
        answer:
          'Any changes being made to your order, i.e. canceling, skipping, adjusting meals, need to be made before your charge date every week. You can make changes to your order/subscription by logging into your account and clicking view/manage subscriptions.',
      },
      {
        question: 'How many people does each meal feed?',
        answer:
          'Our meals are packaged as individual servings. We have a variety of portion sizes to meet you individual nutritional needs.',
      },
      {
        question: 'Where can I leave feedback on the meals that I have received?',
        answer:
          'You can speak with Customer Service at support@quickfresh.com or (435)-659-2345.',
      },
    ],
  },
  {
    title: 'Delivery Process',
    items: [
      {
        question: 'How is the food delivered?',
        answer:
          'Your meals are packed in a box with insulation and cold packs to keep them fresh. Then they’re shipped to your doorstep via UPS in record time, guaranteeing that your food will arrive in top condition.',
      },
      {
        question: 'My delivery hasn’t arrived. What should I do?',
        answer:
          'If your delivery hasn’t arrived but you believe it should have been, please contact our team. We can help figure out what went wrong and issue a full refund if needed. You can contact us through the chat feature on this page or contact Customer Service at support@quickfresh.com or (435)-659-2345.',
      },
      {
        question: 'The ice packs were melting when my food arrived. How do I know if it’s still good?',
        answer:
          'If the food inside of your package is still cold to the touch, refrigerate them immediately. If they are lukewarm, do not refrigerate or consume.',
      },
      {
        question: 'Do I need to be home for my meals to be delivered?',
        answer:
          'Nope! Even if you don’t answer the door, the meals will be left on your doorstep. They are packed with insulation and ice to keep your food cold, so you will want to refrigerate as soon as possible.',
      },
      {
        question: 'How do I store my food?',
        answer:
          'Put your meals in the refrigerator as soon as possible to keep them fresh. Salads, wraps, protein bowls, and tacos should be consumed by the day limit listed on the packaging. Breakfasts and any other meals are good for two weeks after delivery.',
      },
      {
        question: 'What delivery carriers do you use?',
        answer:
          'We deliver our meals in partnership with UPS and FedEx.',
      },
      {
        question: 'Do you deliver to my area?',
        answer:
          'We deliver to all 48 continental United States. As long as you live within those boundaries, then yes, we do deliver to you!',
      },
      {
        question: 'How much does shipping cost?',
        answer:
          'Currently, shipping costs $14.95 per box.',
      },
      {
        question: 'How do I know when my delivery is on the way?',
        answer:
          'You will receive an email notification when your order has shipped and after it has been delivered.',
      },
      {
        question: 'How do I cancel a delivery?',
        answer:
          'To see about canceling a delivery already in process you would need to contact Customer Support at support@quickfresh.com or (435)-659-2345. Any changes made to an order or your account need to happen before your charge date every week.',
      },
      {
        question: 'How do the meals stay fresh during transit?',
        answer:
          'All of our meals are vacuum sealed after they have been prepared. We also ship our meals in insulated boxes and include ice packs to make sure they stay fresh when they arrive on your doorstep.',
      },
      {
        question: 'Is your packaging recyclable?',
        answer:
          'We use recyclable material in our trays.',
      },
    ],
  },
  {
    title: 'Food',
    items: [
      {
        question: 'Do I get to choose my meals each week?',
        answer:
          'Yes, you do! To select meals for your upcoming weeks, log into your account and click “Pick Your Custom Bundle Meals.” Note that you must choose your meals before your upcoming charge goes through! You will receive an email letting you know when your upcoming charge is approaching. If you forget to select your meals in this time frame, don’t stress. We’ll send you our most popular meals for the upcoming week. If you have questions or concerns about choosing your meals, contact our team through the chat on this page or contact Customer Service at support@quickfresh.com or (435)-659-2345.',
      },
      {
        question: 'Are these meals made for people to lose weight?',
        answer:
          'Not necessarily. Many people enjoy QuickFresh purely for the convenience, but there are others who want to build muscle or lose weight while eating their meals.',
      },
      {
        question: 'What does a balanced meal mean?',
        answer:
          'QuickFresh Balanced meals offer optimal servings of protein paired with vegetables and a healthy starch or grain. This combination promotes satiation without sacrificing flavor.',
      },
      {
        question: 'How do I know which meals I should try?',
        answer:
          'You can take short quiz to find out which meal options are best suited to your lifestyle.',
      },
      {
        question: 'How long do meals last?',
        answer:
          'Packaging on each individual meal sleeve will have the best by date. Meals can last in the refrigerator for up to 14 days if the seal is still intact unless otherwise specified on packaging.',
      },
      {
        question: 'Where can I find nutritional information about your meals?',
        answer:
          'All of the nutritional information is included on the meal packaging. You can also find the general macro and calorie information on our website when selecting your meals.',
      },
      {
        question: 'What kind of ingredients do you use?',
        answer:
          'We use beef that is free-range and sourced locally. We use organic ingredients when they are available and cost effective. We buy our produce directly and we only use USDA certified suppliers.',
      },
      {
        question: "What if I'm still hungry?",
        answer:
          'It is important to honor your hunger if it is truly physiological hunger. Make sure you are in tune with your emotions and stress levels to see if you could satisfy your needs without food. If this is a repeated pattern of hunger, speak to our team about potentially switching to a higher calorie meal plan.',
      },
      {
        question: 'Do you change the meals on your menu?',
        answer:
          'Our menu changes weekly, on a 6 week rotation. You are guaranteed to not see the same meal 2 weeks in a row. New meals are also added to the menu after each full rotation.',
      },
    ],
  },
  {
    title: 'Ordering & Billing',
    items: [
      {
        question: 'When will I be billed?',
        answer:
          "Three days after each delivery, you will be charged for the following week's meals.",
      },
      {
        question: 'Can I view my order online?',
        answer:
          'Yes, you can view your order by logging into your account, and clicking view/manage subscriptions.',
      },
      {
        question: 'How much time do I have before delivery to adjust or cancel my order?',
        answer:
          'Any changes being made to your order, i.e. canceling, skipping, adjusting meals, need to be made before your charge date every week. You can make changes to your order/subscription and view your next charge date by logging into your account and clicking view/manage subscriptions.',
      },
      {
        question: 'I have concerns or other questions about my order.',
        answer:
          'Let’s get those taken care of. You can contact us by using the chat feature on this site or or contact Customer Service at support@quickfresh.com or (435)-659-2345.',
      },
      {
        question: 'Why is there a long waiting period between when I order and when I receive my first order?',
        answer:
          'Our weekly menu changes each Sunday and runs until Saturday. Any order placed during that time will be delivered starting on Tuesday the following week. This allows our production team time to order the necessary ingredients to make the selected meals. ',
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
    <>
      <div className="flex">
        <FaqCategory data={data} handleClick={handleClick} />
        <FaqQuestionAndAnswer questionData={selectedData} />
      </div>
    </>
  );
}
