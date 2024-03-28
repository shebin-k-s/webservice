
import React from 'react';
import Image from 'next/image';

const services = [
    { title: 'Static Page Hosting', description: 'Lorem Ipsum is simply dummy text' },
    { title: 'Dynamic Page Hosting', description: 'Lorem Ipsum is simply dummy text' },
    { title: 'API Hosting', description: 'Lorem Ipsum is simply dummy text' },
];


const ServicePage = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex ">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <Image
                    src="/service.png"
                    alt="Service"
                    width={100}
                    height={100}
                    className="mx-auto"
                />
                <h1 className="text-2xl font-extrabold text-purple-600 text-center">SERVICES</h1>
                <p className="mt-5 text-xl font-bold text-center">Lorem Ipsum is simply dummy text <br /> of the printing and typesetting industry.</p>
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {services.map((service, index) => (
                        <div className="bg-white overflow-hidden shadow rounded-xl flex items-center">
                            <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center">
                                <Image
                                    src="/icon.png"
                                    alt="icon"
                                    width={30}
                                    height={30}
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-2">
                                <h2 className="text-lg font-bold text-gray-900">{service.title}</h2>
                                <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                            </div>
                        </div>

                    ))}
                </div>
                <div className='flex justify-center items-center'>
                    <div className="bg-white overflow-hidden rounded-2xl mt-10 w-max p-2">
                        <p className="mt-1 text-sm text-purple-900 font-bold">Learn More About Our Services</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
