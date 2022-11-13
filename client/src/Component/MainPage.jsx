import React from 'react'
import '../App.css';
import {useState} from 'react';
import axios from 'axios';

const MainPage = () => {

  const [info, setInfo] = useState({firstname: '', lastname: '', toDate: '', fromDate: '', instructor: '', certificatetype: '', issuedOn: '', contact: '', address: ''})

  const handleChange = (e) => {
    setInfo({...info, [e.target.value]: e.target.value})
  }

  const generateCertificate = () => {
    const result = axios.post('http://localhost:3001/generate', info, {
      headers: {
        'creatorid': `${localStorage.getItem('id')}`
      }
    })

    document.getElementById('certificate').innerHTML = result.data;
  }

  return (
    <div className='mt-20'>
      <h1 className='text-2xl mx-2 font-semibold mb-2'>Enter Details</h1>
      <hr />
      <form onSubmit={generateCertificate} className='justify-between items-center flex flex-col'>
        <div className="my-6">
          <input
            type="text"
            required
            value={info.firstname}
            name='firstname'
            onChange={handleChange}
            className="form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="First Name"
          />
        </div>


        <div className="mb-6">
          <input
            type="text"
            required
            value={info.lastname}
            name='lastname'
            onChange={handleChange}
            className="form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-6 flex flex-row gap-6">
          <input
            type="date"
            required
            value={info.fromDate}
            onChange={handleChange}
            name='fromDate'
            className="flex-[1] form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="From Date"
          />
          <input
            type="date"
            name='toDate'
            required
            value={info.toDate}
            onChange={handleChange}
            className="flex-[1] form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="To Date"
          />
        </div>
        <div className='mb-4'>
          
          <input required onChange={handleChange} value={info.issuedOn} type="date" placeholder='DOC' name="issuedOn" className='form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
        </div>
        <div className='mb-4'>
          <input required onChange={handleChange} value={info.contact} type="text" placeholder='Contact' name="contact" className='form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
        </div>
        <div className='mb-4'>
          <input required onChange={handleChange} value={info.address} type="text" placeholder='Address' name="address" className='form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
        </div>
        <div className="my-6">
          <input
            type="text"
            name='instructor'
            required
            onChange={handleChange}
            value={info.instructor}
            className="form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Instructor"
          />
        </div>
        <div>
          <select  required onChange={handleChange} value={info.certificatetype} id="certificatetype" name='certificatetype' className=" form-control block w-64 mb-4 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
            <option defaultValue className=''>Choose A Type</option>
            <option className='text-gray-700'>AWS Course</option>
            <option className='text-gray-700'>AZURE Course</option>
          </select>

        </div>
        <div id='certificate' className='w-full m-12 p-12'>

        </div>
        <div className="text-center lg:text-left">
          <button
            type="submit"
            disabled={info.certificatetype === 'Choose A Type'}
            className="inline-block px-7 py-3 mb-5 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-xl focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out "
          >
            Generate Certificate
          </button>
        </div>
      </form>
      <hr />
      <div className='text-2xl font-semibold my-3 mx-2' >
        Recently Generated
      </div>
      <div>
        
      </div>
    </div >

  )
}

export default MainPage