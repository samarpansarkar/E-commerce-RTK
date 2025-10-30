import React from 'react'

const ProductCard = () => {
    return (
        <>
            <div className="bg-[#fefefe] text-gray-900">

                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-normal text-gray-900 mb-3 tracking-tight">Essentials Collection</h2>
                            <p className="text-gray-600 max-w-md mx-auto text-sm">Timeless pieces for everyday wear</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <article className="product-card group bg-white rounded-none p-4">
                                <div className="relative overflow-hidden mb-4 bg-gray-50 aspect-[3/4]">
                                    <img
                                        src="https://placehold.co/600x800/f5f5f5/737373?text=WILD+JOURNEY"
                                        alt="Wild Journey T-shirt"
                                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-95"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-base font-normal text-gray-900 mb-1">Wild Journey</h3>
                                            <p className="text-gray-500 text-xs uppercase tracking-wide">T-Shirt</p>
                                        </div>
                                        <span className="text-base font-normal text-gray-900">$35</span>
                                    </div>

                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                        <div className="flex items-center space-x-1">
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-300 text-gray-300"></i>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <i data-lucide="plus" className="w-4 h-4"></i>
                                        </button>
                                    </div>
                                </div>
                            </article>

                            <article className="product-card group bg-white rounded-none p-4">
                                <div className="relative overflow-hidden mb-4 bg-gray-50 aspect-[3/4]">
                                    <img
                                        src="https://placehold.co/600x800/f5f5f5/737373?text=URBAN+EXPLORER"
                                        alt="Urban Explorer Hoodie"
                                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-95"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-base font-normal text-gray-900 mb-1">Urban Explorer</h3>
                                            <p className="text-gray-500 text-xs uppercase tracking-wide">Hoodie</p>
                                        </div>
                                        <span className="text-base font-normal text-gray-900">$49</span>
                                    </div>

                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                        <div className="flex items-center space-x-1">
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <i data-lucide="plus" className="w-4 h-4"></i>
                                        </button>
                                    </div>
                                </div>
                            </article>

                            <article className="product-card group bg-white rounded-none p-4">
                                <div className="relative overflow-hidden mb-4 bg-gray-50 aspect-[3/4]">
                                    <img
                                        src="https://placehold.co/600x800/f5f5f5/737373?text=OCEAN+WAVE"
                                        alt="Ocean Wave T-shirt"
                                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-95"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-base font-normal text-gray-900 mb-1">Ocean Wave</h3>
                                            <p className="text-gray-500 text-xs uppercase tracking-wide">T-Shirt</p>
                                        </div>
                                        <span className="text-base font-normal text-gray-900">$32</span>
                                    </div>

                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                        <div className="flex items-center space-x-1">
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-300 text-gray-300"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-300 text-gray-300"></i>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <i data-lucide="plus" className="w-4 h-4"></i>
                                        </button>
                                    </div>
                                </div>
                            </article>

                            <article className="product-card group bg-white rounded-none p-4">
                                <div className="relative overflow-hidden mb-4 bg-gray-50 aspect-[3/4]">
                                    <img
                                        src="https://placehold.co/600x800/f5f5f5/737373?text=MOUNTAIN+KING"
                                        alt="Mountain King Sweater"
                                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-95"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-base font-normal text-gray-900 mb-1">Mountain King</h3>
                                            <p className="text-gray-500 text-xs uppercase tracking-wide">Sweater</p>
                                        </div>
                                        <span className="text-base font-normal text-gray-900">$59</span>
                                    </div>

                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                        <div className="flex items-center space-x-1">
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <i data-lucide="plus" className="w-4 h-4"></i>
                                        </button>
                                    </div>
                                </div>
                            </article>

                            <article className="product-card group bg-white rounded-none p-4">
                                <div className="relative overflow-hidden mb-4 bg-gray-50 aspect-[3/4]">
                                    <img
                                        src="https://placehold.co/600x800/f5f5f5/737373?text=DESERT+SUN"
                                        alt="Desert Sun T-shirt"
                                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-95"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-base font-normal text-gray-900 mb-1">Desert Sun</h3>
                                            <p className="text-gray-500 text-xs uppercase tracking-wide">T-Shirt</p>
                                        </div>
                                        <span className="text-base font-normal text-gray-900">$27</span>
                                    </div>

                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                        <div className="flex items-center space-x-1">
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-300 text-gray-300"></i>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <i data-lucide="plus" className="w-4 h-4"></i>
                                        </button>
                                    </div>
                                </div>
                            </article>

                            <article className="product-card group bg-white rounded-none p-4">
                                <div className="relative overflow-hidden mb-4 bg-gray-50 aspect-[3/4]">
                                    <img
                                        src="https://placehold.co/600x800/f5f5f5/737373?text=FOREST+SPIRIT"
                                        alt="Forest Spirit Hoodie"
                                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-95"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-base font-normal text-gray-900 mb-1">Forest Spirit</h3>
                                            <p className="text-gray-500 text-xs uppercase tracking-wide">Hoodie</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-base font-normal text-gray-900">$44</span>
                                            <span className="text-xs text-gray-400 line-through">$59</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                        <div className="flex items-center space-x-1">
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                            <i data-lucide="star" className="w-3 h-3 fill-gray-800 text-gray-800"></i>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <i data-lucide="plus" className="w-4 h-4"></i>
                                        </button>
                                    </div>
                                </div>
                            </article>

                        </div>

                        <div className="text-center mt-16">
                            <button className="border border-gray-300 bg-white text-gray-700 px-8 py-3 text-sm hover:bg-gray-50 transition-colors font-normal tracking-wide">
                                VIEW ALL PRODUCTS
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default ProductCard