
import React from 'react';
import Image from 'next/image';

const services = [
    { title: 'Static Page Hosting', description: 'Lorem Ipsum is simply dummy text' },
    { title: 'Dynamic Page Hosting', description: 'Lorem Ipsum is simply dummy text' },
    { title: 'API Hosting', description: 'Lorem Ipsum is simply dummy text' },
];


const ContributionPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <Image
                    src="/contribution.png"
                    alt="Contribution"
                    width={100}
                    height={100}
                    className="mx-auto"
                />
                <h1 className="text-2xl font-extrabold text-purple-600 text-center">CONTRIBUTIONS</h1>
                <p className="mt-5 text-xl font-bold text-center">Lorem Ipsum is simply dummy text <br /> of the printing and typesetting industry.</p>
                <div className="rounded-lg mt-8 px-8 py-16 border-dotted border-2 border-gray-400">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                        <div className="bg-white overflow-hidden rounded-md p-4">
                            <p className="mt-1 text-sm text-purple-900 font-bold text-center">₹ 10</p>
                        </div>
                        <div className="bg-white overflow-hidden rounded-md p-4">
                            <p className="mt-1 text-sm text-purple-900 font-bold text-center">₹ 20</p>
                        </div>
                        <div className="bg-white overflow-hidden rounded-md p-4">
                            <p className="mt-1 text-sm text-purple-900 font-bold text-center">₹ 30</p>
                        </div>
                        <div className="bg-white overflow-hidden rounded-md p-4">
                            <p className="mt-1 text-sm text-purple-900 font-bold text-center">₹ 40</p>
                        </div>
                        <div className="bg-white overflow-hidden rounded-md p-4">
                            <p className="mt-1 text-sm text-purple-900 font-bold text-center">₹ 50</p>
                        </div>
                        <div className="bg-white overflow-hidden rounded-md p-4">
                            <p className="mt-1 text-sm text-purple-900 font-bold text-center">Other</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContributionPage;
