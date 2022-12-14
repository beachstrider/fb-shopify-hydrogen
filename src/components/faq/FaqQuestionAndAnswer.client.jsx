import {Disclosure, Transition} from '@headlessui/react';

export function FaqQuestionAndAnswer({questionData, ...props}) {
  const listItems = questionData.items.map((item, index) => (
    <Disclosure key={index} as="div" className={`${index === 0 ? '' : 'mt-2'}`}>
      {({open}) => (
        <>
          <Disclosure.Button
            className={`${
              open
                ? 'transition transform duration-600 text-green-600 border-l-[5px] border-green-600'
                : 'text-gray-600'
            } flex w-full justify-between bg-gray-100 p-4 text-left text-xl font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
          >
            <span>{item.question}</span>
            {open ? '-' : '+'}
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel
              className={`${
                open ? 'border-l-[5px] border-green-600' : ''
              } p-2 text-sm text-black mt-2`}
            >
              {item.answer}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  ));

  return (
    <div className="p-4">
      <div className="w-full">
        <div className="w-full">{listItems}</div>
      </div>
    </div>
  );
}
