import {useState} from 'react';

export function FaqCategory({data, handleClick, ...props}) {
  const [activeTab, setActiveTab] = useState(0);
  const handleClickTab = (index) => {
    setActiveTab(index);
    handleClick(index);
  };

  const listItems = data.map((item, index) => (
    <div
      onClick={() => handleClickTab(index)}
      className={`p-2 font-bold text-xl text-gray-600 hover:text-green-600 hover:cursor-pointer ${
        activeTab === index ? 'text-green-600' : ''
      }`}
      key={index}
    >
      {item.title}
    </div>
  ));

  return <div className="flex flex-col p-4">{listItems}</div>;
}
