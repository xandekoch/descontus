import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import More from '../icons/More'
import Close from '../icons/Close'

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="topbar w-full fixed top-0 z-40 max-w-[430px] m-auto">
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

      <div className={`transition-transform delay-500 fixed z-20 w-full mt-[72px] ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
        <div
          onClick={() => { setIsMenuOpen(!isMenuOpen) }}
          className={`h-screen w-full left-0 fixed bg-main-dark/70 -z-10 ${isMenuOpen ? 'block' : 'hidden'}`}></div>
        <div className='p-0 top-0 py-6 left-0 w-screen max-w-[430px] flex flex-col items-center h-full bg-main-white rounded-b-3xl'>
          <a
            href='#hero'
            onClick={() => { setIsMenuOpen(!isMenuOpen) }}
            className='p-4 w-full text-center font-semibold text-lg'>
            Início
          </a>
          <a
            href='#steps'
            onClick={() => { setIsMenuOpen(!isMenuOpen) }}
            className='p-4 w-full text-center font-semibold text-lg'>
            Funcionalidades
          </a>
          <a
            href='#mission'
            onClick={() => { setIsMenuOpen(!isMenuOpen) }}
            className='p-4 w-full text-center align-middle font-semibold text-lg'>
            Nossa Missão
          </a>
          <a
            href='#prices'
            onClick={() => { setIsMenuOpen(!isMenuOpen) }}
            className='p-4 w-full text-center align-middle font-semibold text-lg'>
            Preços
          </a>
          <a
            href='#faq'
            onClick={() => { setIsMenuOpen(!isMenuOpen) }}
            className='p-4 w-full text-center align-middle font-semibold text-lg'>
            FAQ
          </a>
          <button className='mt-7 bg-main-dark py-3 px-24 grid items-center rounded-full text-main-white font-bold hover:bg-main-color'>Cadastre-se Grátis</button>
        </div>
      </div>
    </div>
  )
}

export default Topbar