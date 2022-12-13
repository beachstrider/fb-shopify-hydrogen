const Index = () => (
  <div className="mb-4">
    <div className="grid grid-cols-2 mb-2 gap-2">
      <input
        type="text"
        required
        placeholder="First Name"
        {...register('first_name')}
      />
      <input
        type="text"
        required
        placeholder="Last Name"
        {...register('last_name')}
      />
    </div>
    <div className="grid mb-2 gap-2">
      <input
        type="text"
        required
        placeholder="Address 1"
        {...register('address1')}
      />
    </div>
    <div className="grid mb-2 gap-2">
      <input
        type="text"
        required
        placeholder="Address 2"
        {...register('address2')}
      />
    </div>
    <div className="grid mb-2 gap-2">
      <input
        type="text"
        required
        placeholder="Company"
        {...register('company')}
      />
    </div>
    <div className="grid grid-cols-2 mb-2 gap-2">
      <input type="text" required placeholder="City" {...register('city')} />
      <input type="text" required placeholder="Zip/post" {...register('zip')} />
    </div>
    <div className="grid grid-cols-2 mb-2 gap-2">
      <input
        type="text"
        required
        placeholder="Country Code"
        {...register('country_code')}
      />
      <input
        type="text"
        required
        placeholder="Province"
        {...register('province')}
      />
    </div>
    <div className="grid mb-2 gap-2">
      <input type="text" required placeholder="Phone" {...register('phone')} />
    </div>
  </div>
);
