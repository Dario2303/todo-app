

const HeaderForm = ({screenMode, setScreenMode}) => {


  return (
    <div className='w-full flex justify-between align-top md:h-20 sm:mb-20 mb-12'>
        <h1 className="uppercase">todo</h1>
        <div className={`${screenMode ? "moon" : "sun"} cursor-pointer`} onClick={() => setScreenMode(!screenMode)}></div>
    </div>
  )
}

export default HeaderForm
