
import React from 'react'
import '../App.css';

const MainPage = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-2xl mx-2 font-semibold mb-2'>Enter Details</h1>
      <hr />
      <form className='justify-between items-center flex flex-col'>
        <div className="my-6">
          <input
            type="text"
            className="form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="First Name"
          />
        </div>


        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Last Name"
          />
        </div>
        <div className='mb-4'>
          <input type="date" placeholder='DOC' name="DOC" className='form-control block w-72 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
        </div>

        <div>
          <select id="countries" className=" form-control block w-64 mb-4 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
            <option defaultValue className=''>Choose a Template</option>
            <option className='text-gray-700'>AWS</option>
            <option className='text-gray-700'>AZURE</option>
          </select>

        </div>

        <div className="text-center lg:text-left">
          <button
            type="submit"
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
    </div >

  )
}

export default MainPage