import React from 'react'

function SearchBar() {
  return (
    <div className='bg-gray-200 w-fit h-fit text-right px-4 rounded-xl'><i className='fa-solid fa-camera-retro text-gray-500 text-xl cursor-pointer'></i><input className='bg-gray-200 py-3 pr-3 text-right pl-52 focus:outline-none font-thin placeholder:font-sans placeholder:font-bold' type='text' placeholder='جست و جو در بازار' /><i className='fa-solid fa-search text-gray-400 text-xl'></i></div>
  )
}

export default SearchBar