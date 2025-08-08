"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="relative bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center animate-fadeIn">
        <div className="bg-red-100 p-4 rounded-full">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 17.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mt-4">Oops! Something went wrong.</h1>
        <p className="text-gray-600 mt-2 text-center">{"An unexpected error occurred."}</p>

        <button
          onClick={() => reset()}
          className="mt-5 px-6 py-2 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Try Again
        </button>

        <p className="mt-3 text-gray-500 text-sm">Redirecting to home in 5 seconds...</p>
      </div>
    </div>
  );
}
