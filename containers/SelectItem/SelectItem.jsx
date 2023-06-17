import React, { useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../../environment';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../../actions/items';
import { Item } from '../../components/Item';

export default function SelectItem({ type }) {

    let dispatch = useDispatch();
    const items = useSelector((reducers) => {
        return reducers.items[type.toTypePlural(type)];
    });

    useEffect(async () => {
        try {
            let result = await axios({
                method: "get",
                url: `${baseURL}/items/getAll/${type.toTypePlural(type)}`,
            });
            dispatch(addItems(result.data, type.toTypePlural(type)));
        } catch (error) {
            console.log(error);
        }

    }, [type]);

    return (
        <div className='flex flex-col items-center'>
            <div className='text-4xl space-y-1.5 mb-4'>
                Select your {type.toTypeSingular(type)}:
            </div>
            {
                items.length > 0 ?
                <Item
                title={items[0].title}
                description={items[0].description}
                imageUrl={items[0].imageUrl}
                price={items[0].price} />
                    : 'No items'
            }
        </div>
    )
}