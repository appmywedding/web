import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions/invited';
import { baseURL } from '../environment';
import { InvitedRow, ShowAndLoad, Loading } from '../components';

export default function Invited() {
    const [addLoading, setAddLoading] = useState(false);
    const [getLoading, setGetLoading] = useState(false);

    const invited = useSelector((reducers) => reducers.invited.invited)
    const dispatch = useDispatch();


    const addInvited = async () => {
        if (addLoading) return;
        setAddLoading(true);
        axios.post(`${baseURL}/invites/add`, {
            people: [{
                name: 'Orel123',
                number: '0543056286'
            }]
        })
            .then((response) => {
                let newInvited = [...invited];
                for (let i = 0; i < response.data.length; i += 1) {
                    newInvited.push(response.data[i]);
                }
                dispatch(actions.setInvited(newInvited));
                setAddLoading(false);
            }, (error) => {
                setAddLoading(false);
                console.log(error);
            });
    }

    const removeInvited = async (invitedToRemove) => {
        axios.post(`${baseURL}/invites/remove`, {
            people: Array.isArray(invitedToRemove) ? invitedToRemove : [{ ...invitedToRemove }],
        })
            .then((response) => {
                let removedInvitedIDs = response.data.map((removedInvited) => removedInvited.id);
                let newInvited = invited.filter((invited) => !removedInvitedIDs.includes(invited.id));
                dispatch(actions.setInvited(newInvited));
            }, (error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        if (invited || getLoading) return;
        setGetLoading(true);
        axios.get(`${baseURL}/invites/getAll`)
            .then((response) => {
                setGetLoading(false);
                dispatch(actions.setInvited(response.data));
            }, (error) => {
                setGetLoading(false);
                console.log(error);
            });
    }, [invited])


    return (
        <div className='flex flex-col items-center h-full w-full'>
            <ShowAndLoad isLoading={getLoading}>
                {invited ?
                    <div className="flex flex-col items-center h-5/6 overflow-y-scroll m-5">
                        {invited.map((person) => {
                            return (
                                <div className='p-2' key={person.id}>
                                    <InvitedRow invited={person} onDelete={removeInvited} />
                                </div>
                            )
                        }
                        )}
                    </div>
                    : ''}
            </ShowAndLoad>
            {
                invited ? <ShowAndLoad isLoading={addLoading}>
                    <div className='cursor-pointer' onClick={addInvited}>Add</div>
                </ShowAndLoad> : ''
            }
        </div >
    )
}