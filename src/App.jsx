import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(true)

  const Menus = [
    { title: 'Dashboard', src: 'Chart_fill', active: true },
    { title: 'Inbox', src: 'Chat', active: false },
    { title: 'Accounts', src: 'User', gap: true, active: false },
    { title: 'Schedule ', src: 'Calendar', active: false },
    { title: 'Search', src: 'Search', active: false },
    { title: 'Analytics', src: 'Chart', active: false },
    { title: 'Files ', src: 'Folder', gap: true, active: false },
    { title: 'Setting', src: 'Setting', active: false },
  ]

  return (
    <div className='flex'>
      <div
        className={`${
          open ? 'w-72' : 'w-20'
        } duration-300 h-screen bg-dark-purple relative border-r-2`}
      >
        <img
          src='./src/assets/control.png'
          className={`${
            open ? '' : 'rotate-180'
          } duration-100 absolute cursor-pointer -right-3 top-24 w-7 border-2 border-dark-purple rounded-full hover:w-8`}
          onClick={() => setOpen(!open)}
        />
        <div className={`${open ? '' : 'h-14'} flex gap-x-1 items-center m-3 shadow-xl border border-primary rounded cursor-pointer`}>
          <img
            src='./src/assets/ubaform-logo.png'
            className='cursor-pointer duration-500 w-14'
          />
          <h1
            className={`text-primary origin-left font-medium text-xl duration-300 ${
              !open && 'scale-0'
            }`}
          >
            Ubaform App
          </h1>
        </div>
        {/* LIST MENU */}
        <ul className={`${open ? 'p-6' : 'p-2 ml-2.5 mr-2.5'}`}>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-secondary hover:font-bold text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-secondary'} `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span
                className={`${
                  !open && 'hidden'
                } origin-left hover:text-white duration-200 text-primary  ${
                  Menu.active ? 'text-white font-bold' : ''
                }`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
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
