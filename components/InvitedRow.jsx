import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function InvitedRow({ name, number, onDelete }) {
    return (
        <div className='flex flex-row items-center'>
            <div className='flex flex-row items-center font-varelaround shadow-xl p-3 bg-white rounded w-48'>
                {name}: {number}
            </div>
            <div className="flex center cursor-pointer hover:shadow-lg rounded-full p-2 h-8 w-8">
                <FontAwesomeIcon icon={faTrashCan} />
            </div>
        </div>
    )
}

InvitedRow.defaultProps = {
    name: 'Orel',
    number: '0543056286',
    onDelete: (id) => { },
};

InvitedRow.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onDelete: PropTypes.func,
};
