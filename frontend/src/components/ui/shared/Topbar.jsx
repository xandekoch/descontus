import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import More from '../icons/More'
import Close from '../icons/Close'

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="topbar w-full fixed top-0 z-40 max-w-[390px] m-auto">
      <div
        className='w-full px-5 py-4 bg-main-white h-fit flex items-center justify-between z-50'>
        <button
          onClick={() => { navigate('/') }}
          className='w-40 rounded flex gap-2'>
          <div>
            <img src="/assets/logo-black.png" alt="" />
          </div>
        </button>

        <button
          onClick={() => { setIsMenuOpen(!isMenuOpen) }}
          className='w-[40px] h-[40px] rounded flex justify-center'>
          {isMenuOpen ? <Close /> : <More />}
        </button>
      </div>

      <div className={`transition-transform delay-500 fixed z-20 w-full mt-14 py-6 px-4 rounded-b-lg ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
        <div className='absolute top-0 left-0 z-[-1] w-full h-full bg-alt-dark-2/80 backdrop-blur-sm  rounded-b-lg border-b-2 border-alt-gray-border'></div>
        <div className=''>
          <button
            onClick={() => { navigate('/') }}
            className='p-4 w-fit flex gap-3 items-center'>
            Explorar
          </button>
          <div
            onClick={() => { navigate('/') }}
            className='p-4 w-fit flex gap-3 items-center'>
            Afilie-se
          </div>
          <div
            onClick={() => { navigate('/') }}
            className='p-4 w-fit flex gap-3 items-center'>
            Configurações
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar