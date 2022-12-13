import {Disclosure} from '@headlessui/react';

export function FaqQuestionAndAnswer({questionData, ...props}) {
  const listItems = questionData.items.map((item, index) => (
    <Disclosure key={index} as="div" className={`${index === 0 ? '' : 'mt-2'}`}>
      {({open}) => (
        <>
          <Disclosure.Button className={`${open ? 'text-green-600 border-l-[5px] border-green-600' : 'text-gray-600'} flex w-full justify-between bg-gray-100 p-4 text-left text-xl font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
            <span>{item.question}</span>
            {open ? '-' : '+'}
          </Disclosure.Button>
          <Disclosure.Panel className={`${open ? 'border-l-[5px] border-green-600' : ''} p-2 text-sm text-black mt-2`}>
            {item.answer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  ));

  return (
    <div className="flex-auto p-4">
      <div className="w-full">
        <div className="w-full">
            {listItems}
        </div>
      </div>
    </div>
  );
}
