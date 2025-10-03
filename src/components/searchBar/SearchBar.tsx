
function SearchBar() {
  return (
    <div className='bg-gray-100 flex flex-row justify-evenly items-center w-[35%] h-fit text-right px-1 rounded'><i className='fa-solid fa-camera-retro text-gray-500 text-xl cursor-pointer'></i><input className='bg-gray-100 py-3 pr-3 text-right w-[85%] focus:outline-none font-thin placeholder:font-sans placeholder:font-bold' type='text' placeholder='جست و جو در بازار' /><i className='fa-solid fa-search text-gray-400 text-xl'></i></div>
  )
}

export default SearchBar