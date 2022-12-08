import Link from 'next/link'

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[46rem] py-32 gap-8">
      <div className=" flex gap-6 justify-center items-center">
        <span className="text-3xl font-semibold">404</span>
        <hr className="bg-gray-600 w-0.5 h-16" />
        <p className="text-gray-600">This page could not be found.</p>
      </div>
      <Link
        href="/"
        className="border-2 border-gray-600 rounded py-2 px-4 text-sm font-light hover:font-semibold hover:bg-gray-800 hover:border-gray-800 transition-all duration-200 ease-in-out hover:text-gray-50"
      >
        Go To Home
      </Link>
    </div>
  )
}

export default PageNotFound
