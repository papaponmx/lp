import LandingPage from './layout/landingPage';
import React from 'react';

function App() {
	return (
		<LandingPage>
			<div className='flex flex-col h-full items-center justify-center text-white bg-gradient-to-br from-gray-600 via-teal-700 to-gray-800'>
				<div className='flex items-center animate-bounce' />
				<p className='mt-6 tracking-wide'>
					Edit <code>src/App.jsx</code> and save to reload.
				</p>
				<div className='mt-4 flex justify-center'>
					<a
						className='ml-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded'
						href='https://tailwindcss.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						Learn Tailwind
					</a>
				</div>
			</div>
		</LandingPage>
	);
}

export default App;
