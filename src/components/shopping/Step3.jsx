export function Step3({
    ...props
}) {
    return (
        <section className="overflow-x-hidden py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <label className="block text-gray-800 text-lg font-bold mb-2" for="" style={{ fontSize: '24px' }}>3. Choose your Price</label>
                    <div className="flex flex-wrap -mx-4 mb-24">
                        <div className="w-full px-2">
                            <div className="relative  bg-gray-50">
                                <div className="px-6 py-4 mt-8" style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' }}>
                                    <div className="mb-1">
                                        <div className="mb-1" style={{ color: '#8D8B8C' }}>
                                            <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
                                                <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
                                                    <label>
                                                        <input type="radio" name="radio-name" value="option 1" /><span className="ml-3 font-bold">SUBSCRIBE & SAVE</span><br /><span>
                                                            <strike>$189.95</strike></span><span> $169.95 / </span><span>4 meals</span>
                                                    </label>
                                                </div>
                                                <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0"><span style={{ float: 'right' }}>$8.50/Serving</span></div>
                                            </div>
                                            <hr />
                                            <p style={{ marginTop: '10px' }}><span className="font-bold" style={{ fontSize: '18px' }}>Limited Time Promotion:</span><br />Get a FREE Breakfast with the life of your Subscription. (A $60.00 value)

                                            </p><br />
                                            <p>Delivery Every: <span>
                                                <u> Weekly</u> > Biweekly </span></p>
                                            <p>Save $20</p>
                                            <p>No Commitments, Cancel Anytime</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mb-20 px-2">
                            <div className="relative  bg-gray-50">
                                <div className="px-6 py-4 mt-8" style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' }}>
                                    <div className="mb-1">
                                        <div className="mb-1" style={{ color: '#8D8B8C' }}>
                                            <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
                                                <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
                                                    <label>
                                                        <input type="radio" name="radio-name" value="option 1" /><span className="ml-3 font-bold">ONE-TIME</span><br /><span>$189.95 / </span><span>3 meals</span>
                                                    </label>
                                                </div>
                                                <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0"><span style={{ float: 'right' }}>$12.66/Serving</span></div>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-2">
                            <div className="relative  bg-gray-50">
                                <div className="px-6 py-4 mt-8" style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', border: 'solid #DB9707 4px' }}><span className="font-bold" style={{ float: 'right', backgroundColor: '#DB9725', color: '#FFFFFF', padding: '4px 44px', marginTop: '-48px', marginRight: '-28px' }}>Most Popular</span>
                                    <div className="mb-1">
                                        <div className="mb-1" style={{ color: '#000000' }}>
                                            <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
                                                <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
                                                    <label>
                                                        <input id="subscribe_save" type="radio" name="radio-name" value="option 1" style={{ accentColor: '#DB9707' }}/><span className="ml-3 font-bold" style={{ fontSize: '18px' }}>SUBSCRIBE & SAVE</span><br />
                                                        <div style={{ paddingBottom: '14px' }}><span>
                                                            <strike>$189.95</strike></span><span className="font-bold" style={{ fontSize: '18px' }}> $169.95 / </span><span>4 meals</span></div>
                                                    </label>
                                                </div>
                                                <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0"><span className="font-bold" style={{ float: 'right', backgroundColor: '#DB9725', color: '#FFFFFF', padding: '10px 6px', marginTop: '-8px' }}>$8.50/Serving</span></div>
                                            </div>
                                            <hr />
                                            <p style={{ color: '#DB9725', marginTop: '10px' }}><span className="font-bold" style={{ fontSize: '18px' }}>Limited Time Promotion:</span><br />                              Get a FREE Breakfast with the life of your Subscription. (A $60.00 value)

                                            </p><br />
                                            <p>Delivery Every: <span>
                                                <u> Weekly</u> > Biweekly </span></p>
                                            <p>Save $20</p>
                                            <p>No Commitments, Cancel Anytime</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mb-20 px-2">
                            <div className="relative  bg-gray-50">
                                <div className="px-6 py-4 mt-8" style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', border: 'solid #DB9707 4px' }}>
                                    <div className="mb-1">
                                        <div className="mb-1" style={{ color: '#000000' }}>
                                            <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
                                                <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
                                                    <label>
                                                        <input id="one-time" type="radio" name="radio-name" value="option 1" style={{ accentColor: '#DB9707' }}/><span className="ml-3 font-bold" style={{ fontSize: '18px' }}>ONE-TIME</span><br /><span className="font-bold" style={{ fontSize: '18px' }}>$189.95 / </span><span>3 meals</span>
                                                    </label>
                                                </div>
                                                <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0"><span className="font-bold" style={{ float: 'right', backgroundColor: '#DB9725', color: '#FFFFFF', padding: '10px 6px', marginTop: '-8px' }}>$12.66/Serving</span></div>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}