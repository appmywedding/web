import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';
import axios from 'axios';
import { baseURL } from '../../environment';
import Message from '../../components/Message';

export default function AddItem({ type }) {

    const hiddenFileInput = useRef(null);
    const selectFile = () => hiddenFileInput.current.click();

    const [isFileUploading, setIsFileUploading] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState();
    const [imageURL, setImageURL] = useState('');
    const [imageName, setImageName] = useState('')

    // const typeToName = () => {
    //     switch (type) {
    //         case 'dj': return 'dj';
    //         case 'dresses': return 'dress';
    //         case 'halls': return 'hall';
    //         default: throw Error('Type not found');
    //     }
    // }

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const onDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const onPriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleFileSelect = async (event) => {
        const file = event.target.files[0];
        var formData = new FormData();
        formData.append("image", file);
        formData.append("name", type);
        setIsFileUploading(true)
        axios.post(`${baseURL}/files/upload`, formData, {
            headers: {
                "Content-type": "multipart/form-data ",
            },
        }).then((result) => {
            setIsFileUploading(false);
            setImageURL(result.data);
            setImageName(file.name);
        }, (error) => {
            console.log(error);
        });
    }

    const onSubmit = async () => {
        if (!(description && title && price)) {
            return;
        }

        try {
            await axios({
                method: "post",
                url: `${baseURL}/items/create`,
                data: {
                    imageURL,
                    type,
                    title,
                    description,
                    price,
                },
                headers: { "Content-Type": "application/json" },
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='text-4xl space-y-1.5 mb-4'>
                Add your {type.toTypeSingular(type)}:
            </div>
            <Input onChange={onTitleChange} placeholder='What is your title?' id='dj-title' className='mt-4' />
            <Input onChange={onDescriptionChange} placeholder='Describe what you sell' id='dj-title' className='mt-4' />
            <Input onChange={onPriceChange} placeholder='What is your price' id='dj-title' className='mt-4' type='number' />
            {imageURL ? <img src={imageURL} alt='uploaded image' className='h-56 mt-6' /> : ''}
            <span className='text-xs'>{imageName}</span>
            <div className='mt-4 cursor-pointer' onClick={selectFile}>
                Upload File
            </div>

            <div className='mt-4 cursor-pointer' onClick={onSubmit}>
                Submit
            </div>

            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleFileSelect}
                style={{ display: 'none' }}
            />
            <Message isVisible={isFileUploading} text='Uploading...' title='File Upload' type={isFileUploading ? 'loading' : 'success'} />
        </div>
    )
}

AddItem.propTypes = {
    name: PropTypes.string,
}