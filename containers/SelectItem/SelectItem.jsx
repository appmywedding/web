import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { baseURL } from '../../environment';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../../actions/items'
export default function SelectItem({ type }) {

    let dispatch = useDispatch();
    const items = useSelector((reducers) => {
        
    })

    useEffect(async () => {
        try {
            let result = await axios({
                method: "get",
                url: `${baseURL}/items/getAll/${type.toTypePlural(type)}`,
            });
            debugger;
            dispatch(addItems(result.data, type.toTypePlural(type)));
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }

    }, [type]);

    return (
        <div className='flex flex-col items-center'>
            <div className='text-4xl space-y-1.5 mb-4'>
                Select your {type.toTypeSingular(type)}:
            </div>
            {items ? `items: ${items}` : 'no items'}
        </div>
    )
}

SelectItem.propTypes = {
    type: PropTypes.string,
}