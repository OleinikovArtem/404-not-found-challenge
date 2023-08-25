export const ErrorHeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around">
      <div className="max-w-xl p-11 md:pt-0">
        <img src="Scarecrow.png" />
      </div>
      <div className="max-w-xl">
        <div className="content flex-1">
          <h1 className="text-5xl md:text-6xl font-bold">
            I have bad news for you
          </h1>
          <p className="py-8 md:py-9 md:text-2xl">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
        </div>

        <button className="bg-black text-white px-11 py-6 mt-9 uppercase">
          Back to homepage
        </button>
      </div>
    </div>
  )
}
