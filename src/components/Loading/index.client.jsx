export default function Index({children, isLoading, className = ''}) {
  return (
    <>
      {isLoading ? (
        <div
          className={`flex h-full justify-center items-center py-8 ${className}`}
        >
          <div className="grid gap-4">
            <div className="flex items-center justify-center ">
              <div className="w-16 h-16 border-l-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
