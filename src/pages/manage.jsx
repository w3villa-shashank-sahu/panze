import React, { useEffect, useState } from 'react';
import { EditIcon, TrashIcon } from 'lucide-react';
import Modal from '../components/modal';

const rowsPerPage = 6;

    const columns = ["Name", "Age", "Email", "Action"];
    let rows = [
        { name: "John Doe", age: 28, email: "john@example.com" },
        { name: "Jane Smith", age: 34, email: "jane@example.com" },
        { name: "Sam Johnson", age: 45, email: "sam@example.com" },
        { name: "Alice Brown", age: 29, email: "alice@example.com" },
        { name: "Bob White", age: 31, email: "bob@example.com" },
        { name: "Charlie Black", age: 22, email: "charlie@example.com" },
        { name: "Diana Green", age: 27, email: "diana@example.com" },
        { name: "Eve Blue", age: 35, email: "eve@example.com" },
        { name: "Frank Red", age: 40, email: "frank@example.com" },
        { name: "Grace Yellow", age: 33, email: "grace@example.com" },
        { name: "Hank Purple", age: 38, email: "hank@example.com" },
        { name: "Ivy Orange", age: 26, email: "ivy@example.com" },
        { name: "Jack Pink", age: 30, email: "jack@example.com" },
        { name: "Karen Gray", age: 32, email: "karen@example.com" },
        { name: "Leo Cyan", age: 28, email: "leo@example.com" },
        { name: "Mona Magenta", age: 24, email: "mona@example.com" },
        { name: "Nina Lime", age: 29, email: "nina@example.com" },
        { name: "Oscar Teal", age: 36, email: "oscar@example.com" },
        { name: "Paul Indigo", age: 37, email: "paul@example.com" },
        { name: "Quinn Violet", age: 25, email: "quinn@example.com" },
        { name: "Rita Gold", age: 34, email: "rita@example.com" },
        { name: "Steve Silver", age: 39, email: "steve@example.com" },
        { name: "Tina Bronze", age: 31, email: "tina@example.com" }
    ];
   
const ManagePage = () => {

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState(rows);

    const filteredRows = data.filter(row =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    

    const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentRows = filteredRows.slice(startIndex, startIndex + rowsPerPage);

    if(totalPages < currentPage) {
        if(totalPages != 0) 
            setCurrentPage(1);
    }

    const updateData = (oldEmail, newData) => {
        if(oldEmail === undefined) {
            rows.push(newData);
            return setShowModal(false);
        }
        console.log(oldEmail);
        
        const index = rows.findIndex(row => row.email === oldEmail);
        rows[index].name = newData.name;
        rows[index].age = newData.age;
        rows[index].email = newData.email;
        setShowModal(false);
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const deleteData = (index) =>{
        rows = rows.filter((row, i) => i !== index);
        setData(rows);
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='flex items-center justify-center w-[99%] boder-2 border-red-500'>
            <div className=" flex flex-col items-center justify-center w-[99%] max-w-lg">
                <div className=' mb-4 flex justify-between w-[99%] gap-2'>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className=" p-2  border rounded text-black border-gray-700 w-[99%]"
                        style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
                    />
                    <button className='text-white border-amber-600 border rounded w-10 h-10 bg-amber-500' 
                    style={{ fontSize: 'clamp(1rem, 1.7vw, 2rem)'}}
                    onClick={()=>setShowModal(true)}
                    >
                        +
                    </button>
                </div>
                <div className="overflow-x-auto w-[99%]">
                    <table className="min-w-[99%] bg-white border border-black border-b-0">
                        <thead>
                            <tr>
                                {columns.map((column, index) => (
                                    <th key={index} className="py-2 px-4 text-black bg-amber-400" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', textAlign: 'start' }}>{column}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentRows.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b text-black" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', whiteSpace: 'nowrap' }}>{row.name}</td>
                                    <td className="py-2 px-4 border-b text-black" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'}}>{row.age}</td>
                                    <td className="py-2 px-4 border-b text-black" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'}}>{row.email}</td>
                                    <td className="py-2 px-4 border-b text-black min-w-[100px]">
                                        <div className="flex items-center gap-2">
                                            <button className="p-1 bg-blue-500 text-white rounded" 
                                            onClick={
                                                () => {
                                                    setModalData({
                                                        name: row.name,
                                                        age: row.age,
                                                        email: row.email
                                                    });
                                                    setShowModal(true);
                                                }
                                            }>
                                                <EditIcon className="p-1 bg-blue-500 text-white rounded"/>        
                                            </button>
                                            <button className="p-1 bg-red-500 text-white rounded" 
                                            onClick={()=>deleteData(index)}
                                            >
                                                <TrashIcon className="p-1 bg-red-500 text-white rounded"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    
                    </table>
                </div>
                <div className="flex justify-between mt-4 </div>w-[99%]">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border rounded bg-gray-200 text-black disabled:opacity-50"
                        style={{fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'}}
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2 text-black" style={{fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'}}>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border rounded bg-gray-200 text-black disabled:opacity-50"
                        style={{fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'}}
                    >
                        Next
                    </button>
                </div>
            </div>
            {showModal && <Modal onClose={()=>{
                setShowModal(false);
                setModalData(null);
            }} data={modalData} onSave={updateData} />}
        </div>
    );
};

export default ManagePage;