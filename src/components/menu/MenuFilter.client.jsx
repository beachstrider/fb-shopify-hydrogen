export function MenuFilter() {
  return (
    <div className="">
      <div className="flex flex-wrap p-2">
        <div className="relative flex items-start mr-6">
          <div className="text-md">
            <label htmlFor="comments" className="font-medium text-gray-700">
              {' '}
              Filter:{' '}
            </label>
          </div>
        </div>
        <div className="relative flex items-start mr-6">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="outline-0 ring-0 focus:ring-0 focus:outline-0  h-4 w-4 rounded-0 border-green-600 text-green-600 focus:text-green-600"
            />
          </div>
          <div className="ml-3 text-md">
            <label htmlFor="comments" className="font-medium text-gray-700">
              {' '}
              Breakfast (4)
            </label>
          </div>
        </div>
        <div className="relative flex items-start mr-6">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="outline-0 ring-0 focus:ring-0 focus:outline-0  h-4 w-4 rounded-0 border-green-600 text-green-600 focus:text-green-600"
            />
          </div>
          <div className="ml-3 text-md">
            <label htmlFor="comments" className="font-medium text-gray-700">
              {' '}
              Breakfast (4)
            </label>
          </div>
        </div>
      </div>
      <hr className="mt-2" />
      <div className="text-md font-bold p-2">
        We have a 6-week meal rotation and are currently shipping week 4. You
        are able to choose meals for the following two weeks below.
      </div>
    </div>
  );
}
