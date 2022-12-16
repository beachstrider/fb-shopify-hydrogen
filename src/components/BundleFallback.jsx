import DeliveryDates from "./shopping/components/DeliveryDates";

export function BundleFallback() {
  const styles = 'bg-contrast/80 text-primary';
  return (
    <div>
      <div className="flex justify-center items-center py-8">
        <div className="grid gap-4">
          <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-l-2 border-gray-900 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Box({wide}) {
  return (
    <div
      className={`h-6 rounded-sm ${wide ? 'w-32' : 'w-16'} ${'bg-primary/20'}`}
    />
  );
}
