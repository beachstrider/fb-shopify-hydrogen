export function MenuBanner() {
  return (
    <div className="text-center p-5 h-[400px] bg-center relative overflow-hidden bg-no-repeat bg-cover p-5 text-center bg-image bg-[url('../assets/images/menu-header.avif')]">
      <div className="flex items-center justify-center h-full">
        <div className="text-black">
          <h1 className="text-[4rem] mb-[-0.5rem]"> Our Menu </h1>
          <h4 className="mb-4">
            Choose From 22+ Healthy, Chef-Curated Meals Each Week!
          </h4>
        </div>
      </div>
    </div>
  );
}
