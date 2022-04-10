import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'



export default function Message({ type, isVisible, title, text }) {

    const info = {
        icon: <FontAwesomeIcon icon={faCircleInfo} color='#146ebe' size='lg' />,
        color: '#146ebe',
    };

    const error = {
        icon: <FontAwesomeIcon icon={faCircleExclamation} color='#f53e3e' size='lg' />,
        color: '#f53e3e',
    };

    const success = {
        icon: <FontAwesomeIcon icon={faCircleCheck} color='#4df34a' size='xl' />,
        color: '#4df34a',
    };

    const loading = {
        icon: <div>loading</div>,
        color: '#4df34a',
    };

    const [state, setState] = useState(info);

    useEffect(() => {
        switch (type) {
            case 'info': setState(info); return;
            case 'error': setState(error); return;
            case 'success': setState(success); return;
            case 'loading': setState(loading); return;
            default: throw Error('type not found');
        }
    }, [type])

    return (
        isVisible ?
            <div className='flex flex-row items-center justify-start absolute top-10 left-10 rounded w-48 max-w-62 max-h-24 p-2 shadow-semiwhite '>
                <div className='mr-2'>
                    {state.icon}
                </div>
                <div className='flex flex-col items-start justify-start'>
                    <div className='text-xl font-semibold'>
                        {title}
                    </div>
                    <div className='font-thin px-1'>
                        {text}
                    </div>
                </div>
            </div>
            : ''
    );

}

Message.defaultProps = {
    isVisible: false,
    title: '',
    text: '',
}

Message.propTypes = {
    type: PropTypes.string.isRequired,
    isVisible: PropTypes.bool,
    title: PropTypes.string,
    text: PropTypes.string,
}