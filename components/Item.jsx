import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function Item({ title, description, imageUrl, price }) {

    useEffect(() => {
        ;
    }, [title])
    
    return (
        <div className='flex flex-col items-center p-4 nm-flat-white-100 rounded w-80 h-72'>
            <Image src={imageUrl} alt='Items image' width={200} height={150} placeholder='blur' blurDataURL={imageUrl} />
            <div className='mt-3 text-xl text-center'>
                {title}
            </div>
            <div className='mt-2 text-m text-center'>
                {description}
            </div>
            <div className='mt-2 text-s text-center'>
                price: {price}
            </div>
        </div>
    )
}

Item.defaultProps = {
    title: 'iPhone',
    description: 'An overpriced piece of technology.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/mywedding-3c67a.appspot.com/o/iPhone.jpeg?alt=media&token=d83c4796-b586-45ff-80a6-816d8d888076',
    price: 4431
}

Item.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
}