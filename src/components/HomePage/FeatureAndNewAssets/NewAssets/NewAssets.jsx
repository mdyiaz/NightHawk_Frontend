import Image from 'next/image';
import React from 'react';
import slugify from '@/utils/slugify';
import Link from 'next/link';

const NewAssets = ({ categories }) => {

    console.log("are you here categories ? ", categories);

    return (
        <div className='mt-10 container' >
            <h1 className='text-center font-semibold text-2xl '>New Assets</h1>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-5'>
                {
                    categories?.map((category) => (
                        <div key={category?.id} className=''>
                            {
                                category?.sub_categories?.[0]?.assets?.slice(0, 4)?.map((assets) => (
                                    <div key={assets?.id}>
                                        <Link href={`/${slugify(category?.name)}/${slugify(category?.sub_categories?.[0]?.name)}/${slugify(assets?.name)}-${assets?.id}`}></Link>
                                        {assets?.cover && <Image
                                            src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL_FOR_IMAGE +
                                                assets?.cover}
                                            height={800}
                                            width={800}
                                            alt=''
                                            className='w-full mx-auto rounded-md'
                                        ></Image>}
                                        <div className='bg-secondary text-white text-center py-2 rounded-md'>
                                            <p>{assets?.name}</p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default NewAssets;