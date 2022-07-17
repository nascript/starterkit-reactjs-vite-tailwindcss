import { useState } from 'react'

const Sidebar = () => {
  const [open, setOpen] = useState(true)

  const Menus = [
    { title: 'Dashboard', src: 'Chart_fill', active: true },
    { title: 'Inbox', src: 'Chat', active: false },
    { title: 'Accounts', src: 'User', gap: true, active: false },
    { title: 'Schedule ', src: 'Calendar', active: false },
    { title: 'Search', src: 'Search', active: false },
    { title: 'Analytics', src: 'Chart', active: false },
    {
      title: 'Files ',
      src: 'Folder',
      gap: true,
      active: false,
    },
    { title: 'Setting', src: 'Setting', active: false },
  ]
  return (
    <div
      className={`${
        open ? 'w-64' : 'w-20'
      } duration-300 pt-5 h-screen bg-background-primary relative border-r-2`}
    >
      <img
        src='./src/assets/control.png'
        className={`${
          open ? '' : 'rotate-180'
        } duration-100 absolute cursor-pointer -right-4 top-24 w-9 border-4 border-background-primary rounded-full hover:w-10`}
        onClick={() => setOpen(!open)}
      />
      <div
        className={`${
          open ? '' : 'h-14'
        } flex gap-x-1 items-center m-3 shadow-md border border-primary rounded cursor-pointer`}
      >
        <img
          src='./src/assets/ubaform-logo.png'
          className='cursor-pointer duration-500 w-14 rotate-180'
        />
        <h1
          className={`text-primary origin-left font-medium text-xl duration-300 ${
            !open && 'scale-0'
          }`}
        >
          nas application
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
              } origin-left hover:text-white font-medium duration-200 text-primary  ${
                Menu.active ? 'text-white font-bold' : ''
              }`}
            >
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
