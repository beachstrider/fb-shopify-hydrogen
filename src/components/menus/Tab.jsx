export function Tab() {
    return (
        <div className="text-sm font-medium uppercase text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                    <a href="#" className="inline-block px-6 py-4 text-green-700 rounded-t-lg border-b-2 border-green-700 active dark:text-green-500 dark:border-green-500" aria-current="page"><div className="mb-1 font-bold">week-5</div><div className="week-range fw-bolder font-bold"> Feb 5<sup className="ordinal">th</sup> - 11<sup className="ordinal">th</sup> </div></a>
                </li>
                <li className="mr-2">
                    <a href="#" className="inline-block px-6 py-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"><div className="mb-1 font-bold">week-5</div><div className="week-range fw-bolder font-bold"> Feb 5<sup className="ordinal">th</sup> - 11<sup className="ordinal">th</sup> </div></a>
                </li>
            </ul>
        </div>
    );
  }
  