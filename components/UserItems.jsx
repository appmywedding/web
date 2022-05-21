import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { baseURL } from '../environment';
import * as actions from '../actions/items';
import ShowAndLoad from './ShowAndLoad';
import { Item } from '../components/Item'

export default function UserItems() {
    const [loadItems, setLoadItems] = useState(false);

    const items = useSelector((reducers) => reducers.items.items)
    const dispatch = useDispatch();

    useEffect(() => {
        if (loadItems) return;
        setLoadItems(true);
        axios.get(`${baseURL}/user/items/getAll`)
            .then((response) => {
                setLoadItems(false);
                dispatch(actions.setItems(response.data));
            }, (error) => {
                setLoadItems(false);
                console.log(error);
            });
    }, [])

    return (
        <ShowAndLoad isLoading={loadItems}>
            {items ?
                <div>
                    {Object.keys(items).map((key) => {
                        const item = items[key];
                        return (
                            <div className='p-2' key={key}>
                                <Item title={item.title} description={item.description} imageUrl={item.imageUrl} price={item.price} />
                            </div>
                        )
                    })}
                </div>
                : ''}
        </ShowAndLoad>
    )
}