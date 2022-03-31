import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function InvitedRow({ invited, onDelete }) {
    return (
        <div className='flex flex-row items-center'>
            <div className='flex flex-row items-center font-varelaround shadow-xl p-3 bg-white rounded w-48'>
                {invited.name}: {invited.number}
            </div>
            <div className="flex center cursor-pointer hover:shadow-lg rounded-full p-2 h-8 w-8" onClick={() => { onDelete(invited) }}>
                <FontAwesomeIcon icon={faTrashCan} />
            </div>
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
