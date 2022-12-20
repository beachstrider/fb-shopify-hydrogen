import {Disclosure, Transition} from '@headlessui/react';

export function FaqQuestionAndAnswer({questionData, ...props}) {
  const listItems = questionData.map((item, index) => (
    <Disclosure key={index} as="div" className={``}>
      {({open}) => (
        <div
          className={`${
            open
              ? 'transition text-black transform duration-600 border-l-[7px] border-l-yellow-600 pl-2'
              : 'text-black-700 font-normal pl-4'
          }`}
        >
          <div className="border-t-[1px] border-t-gray-500">
            <Disclosure.Button
              className={`${open? 'font-bold' : ''} flex w-full justify-between p-2 text-left text-xl font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
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
                className={`bg-white p-2 text-sm text-black mt-2`}
              >
                {item.answer}
              </Disclosure.Panel>
            </Transition>
          </div>
        </div>
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
