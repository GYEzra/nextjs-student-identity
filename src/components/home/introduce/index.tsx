import React from 'react'
import Image from 'next/image'
const Introduce = () => {
    return (
        <div className="relative overflow-hidden text-gray-600 body-font bg-gradient-to-r from-violet-600 via-purple-500 to-black">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight special-text sm:text-5xl">
                            Explore the Future of Digital Ownership with Our Platform
                        </h1>
                        <p className="mt-4 text-xl text-white">
                            Welcome to the ultimate destination for NFT enthusiasts! Whether you are an artist, collector, or investor, we offer a perfect platform to buy, sell, and showcase unique digital assets.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <Image
                                                    alt=""
                                                    src="/images/h2.webp"
                                                    className="size-full object-cover"
                                                    width={176}
                                                    height={256}
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt="hk"
                                                    src="/images/h13.jpg"
                                                    className="size-full object-cover"
                                                    width={176}
                                                    height={256}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    src="/images/h14.jpg"
                                                    className="size-full object-cover"
                                                    width={176}
                                                    height={256}
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    src="/images/h7.jpg"
                                                    className="size-full object-cover"
                                                    width={176}
                                                    height={256}
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    src="/images/h11.jpg"
                                                    className="size-full object-cover"
                                                    width={176}
                                                    height={256}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    src="/images/h5.jpeg"
                                                    className="size-full object-cover"
                                                    width={176}
                                                    height={256}
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    src="/images/h10.jpg"
                                                    className="size-full object-cover"
                                                    width={176}
                                                    height={256}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="btn border-0 special-button"
                            >
                                Shop Collection
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce;