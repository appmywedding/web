import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import ShowAndLoad from './ShowAndLoad';

export default function InvitedRow({ invited, onDelete }) {
    const [deleteLoading, setDeleteLoading] = useState(false);

    return (
        <div className='flex flex-row items-center'>
            <div className='flex flex-row items-center shadow-xl p-3 bg-white rounded w-54'>
                {invited.name}: {invited.number}
            </div>
            <ShowAndLoad isLoading={deleteLoading} title="">
                <div className="flex center cursor-pointer hover:shadow-lg rounded-full p-2 h-8 w-8" onClick={() => {
                    setDeleteLoading(true);
                    onDelete(invited)
                }}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </div>
            </ShowAndLoad>
        </div>
    )
}

InvitedRow.defaultProps = {
    onDelete: () => { },
};

InvitedRow.propTypes = {
    invited: PropTypes.object,
    onDelete: PropTypes.func,
};
