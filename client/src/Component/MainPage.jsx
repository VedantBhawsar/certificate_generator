import React from 'react'
import '../App.css';
import { useState } from 'react';
import axios from 'axios';

const MainPage = () => {

  const [info, setInfo] = useState({ firstname: '', lastname: '', toDate: '', fromDate: '', instructor: '', certificatetype: '', issuedOn: '', contact: '', address: '' })

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.value]: e.target.value })
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
        <div className='flex my-6 gap-8 ml-20'>
          <input
            type="text"
            required
            value={info.firstname}
            name='firstname'
            onChange={handleChange}
            className="form-control block  w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="First Name"
          />
          <input
            type="text"
            required
            value={info.lastname}
            name='lastname'
            onChange={handleChange}
            className="form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Last Name"
          />
          <input required
            onChange={handleChange}
            value={info.contact}
            type="text"
            placeholder='Contact'
            name="contact"
            className='form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          />
          <input required
            onChange={handleChange}
            value={info.address}
            type="text"
            placeholder='Address'
            name="address"
            className='form-control block w-72 px-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          />
        </div>

        {/* Second Line */}
        <div className='flex gap-8 mb-3'>
          <div className='mb-4 flex flex-col '>
            <label className='ml-2'>Course Start Date</label>
            <input
              type="date"
              required
              value={info.fromDate}
              onChange={handleChange}
              name='fromDate'
              placeholder="From Date"
              className='form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
          </div>

          <div className='mb-4 flex flex-col '>
            <label className='ml-2'>Course End Date</label>
            <input
              type="date"
              name='toDate'
              required
              value={info.toDate}
              onChange={handleChange}
              placeholder="To Date"
              className='form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
          </div>



          <div className='mb-4 flex flex-col '>
            <label className='ml-2'>Date Of Certification</label>
            <input required onChange={handleChange} value={info.issuedOn} type="date" placeholder='DOC' name="issuedOn" className='form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
          </div>

          <div className=''>
            <label className='ml-2' >Choose A Type</label>
            <select required onChange={handleChange} value={info.certificatetype} id="certificatetype" name='certificatetype' className=" form-control block w-52 h-12 mb-4 px-4 py-2 text-lg  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
              <option defaultValue className=''>None</option>
              <option className='text-gray-700'>AWS Course</option>
              <option className='text-gray-700'>AZURE Course</option>
            </select>
          </div>
        </div>
        {/* Third Line */}
        <div className="mb-6 flex gap-8">
          <input
            type="text"
            name='instructor'
            required
            onChange={handleChange}
            value={info.instructor}
            className="form-control h-12 block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Instructor Name"
          />


          {/* Button */}
          <div className="text-center lg:text-left">
            <button
              type="submit"
              disabled={info.certificatetype === 'Choose A Type'}
              className="inline-block px-7 py-3 mb-5 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-xl focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out "
            >
              Generate Certificate
            </button>
          </div>
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