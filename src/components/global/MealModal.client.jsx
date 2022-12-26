import {useState} from 'react';
import {IconClose} from '~/components';

export function MealModal({children, open, close}) {
  // const [selectedTag,setSelectedTag] = useState(1);
  // const handleSelect=(index)=>{
  //   setSelectedTag(index)
  // }
  return open ? (
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
            id="modal-bg"
          >
            <div className="relative my-10 mx-auto max-w-3xl">
              <div className="fixed inset-0 transition-opacity bg-opacity-75 bg-primary/40"></div>
              <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                <div
                  className="relative flex-1 px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform rounded shadow-xl bg-contrast sm:my-12 sm:flex-none sm:w-full sm:max-w-sm sm:p-6"
                  role="button"
                  onClick={(e) => e.stopPropagation()}
                  onKeyPress={(e) => e.stopPropagation()}
                  tabIndex={0}
                >
                  <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button
                      type="button"
                      className="absolute -top-1 -right-1 rounded-full border border-gray-200 bg-white p-1 text-gray-800"
                      onClick={close}
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="black 800"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {children}
                </div>
              </div>
            </div>
            </div>
          </div>
      ): null
}
