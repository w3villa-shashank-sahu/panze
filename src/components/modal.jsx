import React, { useRef } from 'react';
import {X} from 'lucide-react';

const Modal = ({ onClose, data = null, onSave}) => {

    const ref = useRef()

    const closeModal = (e) => {
        if (e.target === ref.current) {
            onClose()
        }
    }

    const onSaveBtnPressed = () => {
        console.log("old mail: ", data?.email);
        
        onSave(data?.email,{
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            email: document.getElementById('email').value,
        } );
    }

    return (
        <div ref={ref} onClick={closeModal} className='z-2 fixed inset-0 flex justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className='bg-white p-6 rounded-lg shadow-lg relative text-black'>
                <div className='flex mb-3 justify-end cursor-pointer text-gray-600 hover:text-gray-800'>
                    <X onClick={onClose} />
                </div>
                <div className='mb-4 flex flex-col gap-2 text-base'>
                    <h1 className='text-xl font-bold'>{data == null? "Add Data" : "Edit Data"}</h1>
                    <input id='name' className='h-8 p-2 mb-2 border rounded' type="text" defaultValue={data ? data.name : ''} placeholder="Name"/>
                    <input id='age' className='h-8 p-2 mb-2 border rounded' type="number" defaultValue={data ? data.age : ''} placeholder="Age"/>
                    <input id='email' className='h-8 p-2 mb-2 border rounded' type="email" defaultValue={data ? data.email : ''} placeholder="Email"/>
                </div>
                <div className='flex justify-end space-x-2'>
                    <button className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700' onClick={onSaveBtnPressed}>Save</button>
                    <button className='bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-700' onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;