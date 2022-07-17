import { useState } from 'react'
import { AcademicCapIcon, ChatIcon } from '@heroicons/react/solid'

function App() {
  const [open, setOpen] = useState(true)

  const Menus = [
    {
      label: 'Academic',
      active: true,
      icon: (
        <AcademicCapIcon
          className={` text-primary cursor-pointer duration-500 ${
            open && 'scale-100 h-8 w-8'
          }`}
        />
      ),
    },
    {
      label: 'Academic',
      active: false,
      icon: (
        <AcademicCapIcon
          className={` text-primary cursor-pointer duration-500 ${
            open && 'scale-100 h-8 w-8'
          }`}
        />
      ),
    },
  ]

  return (
    <div className='flex'>
      <div
        className={`${
          open ? 'w-72' : 'w-20'
        } duration-300 h-screen bg-dark-purple relative`}
      >
        <img
          src='./src/assets/control.png'
          className={`${
            open ? '' : 'rotate-180'
          } duration-100 absolute cursor-pointer -right-3 top-24 w-7 border-2 border-dark-purple rounded-full hover:w-8`}
          onClick={() => setOpen(!open)}
        />
        <div className='flex gap-x-3 items-center m-3 shadow-xl border border-primary rounded cursor-pointer'>
          <img
            src='./src/assets/ubaform-logo.png'
            className='cursor-pointer duration-500 w-14'
          />
          <h1
            className={`text-primary origin-left font-medium text-2xl duration-300 ${
              !open && 'scale-0'
            }`}
          >
            Ubaform App
          </h1>
        </div>
        {/* LIST MENU */}
        {Menus.map((menu) => {
          return (
            <>
              <div className='flex items-center gap-x-3 p-5'>
                {menu.icon}
                <h1
                  className={`${
                    menu.active ? 'text-secondary' : 'text-primary '
                  } origin-left font-medium text-xl duration-300 ${
                    !open && 'scale-0'
                  }`}
                >
                  {menu.label}
                </h1>
              </div>
            </>
          )
        })}
        {/* <AcademicCapIcon
            className={` text-primary cursor-pointer duration-500 ${
              open && 'scale-100 h-8 w-8'
            }`}
          />
          <h1
            className={`text-primary origin-left font-medium text-xl duration-300 ${
              !open && 'scale-0'
            }`}
          >
            Academic
          </h1> */}
      </div>
      <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default App
