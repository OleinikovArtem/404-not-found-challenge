function App() {

  return (
    <main className='font-monospace min-h-screen flex flex-col justify-between pl-4 pr-4 py-6 py-md-10 px-md-20 max-w-7xl mx-auto'>
      <header>
        <p className='text-md md:text-2xl uppercase font-inconsolata font-bold'>404 not found</p>
      </header>
      <div className='flex flex-col md:flex-row justify-around'>

        <div className="max-w-xl p-11 md:pt-0">
          <img src='Scarecrow.png'/>
        </div>
        <div className='max-w-xl'>
          <div className='content flex-1'>
            <h1 className='text-5xl md:text-6xl font-bold'>I have bad news for you</h1>
            <p className='py-8 md:py-9 md:text-2xl'>The page you are looking for might be removed or is temporarily unavailable</p>
          </div>

          <button className='bg-black text-white px-11 py-6 mt-9 uppercase'>Back to homepage</button>
        </div>


      </div>
      <footer className='text-sm text-center font-medium text-gray whitespace-nowrap'>
        created by
        <a className='font-bold' href='https://devchallenges.io/portfolio/OleinikovArtem'> ArtOleinikov</a> -
        devChallenges.io
      </footer>
    </main>
  )
}

export default App
