

const Pagination  = ({page, LastPage, setPage}) => {
const handelnext = () => {
    setPage ((prevState) => prevState + 1)
}

const handelback = () => {
    setPage ((prevState) => prevState - 1)
}


    return (
        <div className="flex justify-center items-center p-8 gap-4">
        <button
          onClick={handelback}
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Prev
        </button>
      
        <p className="text-2xl font-bold"> {page}  of {LastPage} </p>
      
        <button
          onClick={handelnext}
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Next
        </button>
      </div>
      
        
    )

}

export default Pagination 