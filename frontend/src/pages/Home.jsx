import React from 'react'
import Topbar from '../components/ui/shared/Topbar'
import Emojis from '../components/ui/icons/Emojis'

const Home = () => {
  return (
    <>
      <Topbar />
      <div className='w-full max-w-[390px] m-auto pt-24 px-5'>
        <div className="hero">
          <h1
            className='text-[32px] line'
          >
            <Emojis /><span className='px-1 bg-main-dark text-main-white font-black'>Obtenha</span> clientes.
            <br /> Pague depois.
          </h1>
          <p
            className='pt-4 text-justify'
          >
            Forneça <span className='p-[3px] bg-main-color text-main-white font-medium'>descontos</span> exclusivos no nosso app e tenha milhares de usuários interessados nas suas ofertas. Crie programas de fidelidade pra aumentar a recorrência de clientes.
          </p>

          <div className="register-form pt-10">
            <div className="input-container w-full flex items-center px-5 py-3 font-semibold border-main-dark border-2 rounded-full">
              <span>descontus.com/</span>
              <input className='max-w-44' type="text" placeholder='seunegócio' />
            </div>
            <button className='w-full mt-3 bg-main-dark py-3 grid items-center rounded-full text-main-white font-bold'>Cadastre-se Grátis</button>

            <div className="partners mt-5 text-center">
              <span>Estabelecimentos <span className='font-bold'>parceiros</span> que se cadastraram.</span>
              <div className="partners-logos mt-5 relative flex justify-center">
                <img className="relative translate-x-4" src="/assets/partner-1.png" alt="Partner 1" />
                <img className="relative" src="/assets/partner-2.png" alt="Partner 2" />
                <img className="relative translate-x-[-1rem]" src="/assets/partner-3.png" alt="Partner 3" />
              </div>
              <p className='mt-2 text-sm opacity-50'>
                e 300+ outros
                <br />
                Previsão de lançamento - 01/2025
              </p>
            </div>
          </div>
        </div>

        <div className="discount-50 mt-10 max-w-[390px] m-auto">
          <h2 className='text-[32px]'>Ganhe 50% <br />
            de desconto <span className='px-1 bg-main-color text-main-white font-medium'>vitalício.</span></h2>
          <p className='text-justify mt-3'>Cobramos uma taxa de 6% apenas quando você faz uma <span className='font-bold'>venda</span>, mas para os estabelecimentos que se cadastrarem no <span className='font-bold'>pré-lançamento</span> essa taxa será de 3% (50% OFF) <span className='font-bold'>para sempre.</span></p>
        </div>
      </div>

      <div className="steps mt-14 max-w-[390px] m-auto">
        <div className="step bg-main-dark py-6 px-5">
          <h2 className='text-4xl text-main-white'>1. Crie ✏️</h2>
          <p className='text-main-white mt-3'>Crie um <span className='px-1 bg-main-color text-main-white font-medium'>Desconto</span> de um produto, combo ou ingresso e disponibilize para nosso usuários. <br /><br /> Assim que o cliente faz a compra pelo app, uma reserva com QR Code é gerada.</p>
        </div>
        <div className="step bg-main-white py-6 px-5">
          <h2 className='text-4xl text-main-dark'>2. Venda 🔥</h2>
          <p className='text-main-dark mt-3'>O cliente apresenta a reserva no estabelecimento na data marcada e o pagamento é liberado <span className='px-1 bg-main-color text-main-white font-medium'>imediatamente</span> para saque.</p>
        </div>
        <div className="step bg-second-color py-6 px-5">
          <h2 className='text-4xl text-main-dark'>3. Fidelize 🤝</h2>
          <p className='text-main-dark mt-3'>Crie programas de fidelidade (opcional). Ex.: Ao comprar 10 vezes, o cliente ganha 1 <span className='px-1 bg-main-white text-main-dark font-medium'>bônus</span> de sua escolha.<br /><br />Tenha clientes <span className='px-1 bg-main-white text-main-dark font-medium'>afiliados</span> (opcional). Ex.: O cliente que convidar 3 conhecidos, ganha 1 bônus de sua escolha.</p>
        </div>
      </div>

      <div className="strips">
        <div className="strip-container overflow-hidden relative">
          <div className="strip flex gap-5 py-2 bg-main-dark text-2xl text-main-white font-bold">
            <span className=''>UMENTE</span>
            <div className="dollars flex gap-5">
              <img className='max-w-6 max-h-6' src="/assets/dollar-icon.png" alt="" />
              <img className='max-w-6 max-h-6' src="/assets/dollar-icon.png" alt="" />
              <img className='max-w-6 max-h-6' src="/assets/dollar-icon.png" alt="" />
            </div>
            <span className=''>A <span className='px-0.5 bg-main-color'>DESCONT</span></span>
          </div>
        </div>
        <div className="strip-container overflow-hidden relative">
          <div className="strip flex gap-5 py-2 bg-main-dark text-2xl text-main-white font-bold">
            <span className=''>ANUNCIE · VENDA · FATURE</span>
            <div className="dollars flex gap-5">
              <img className='max-w-6 max-h-6' src="/assets/dollar-icon.png" alt="" />
              {/* <img className='max-w-6 max-h-6' src="/assets/dollar-icon.png" alt="" />
              <img className='max-w-6 max-h-6' src="/assets/dollar-icon.png" alt="" /> */}
            </div>
            {/* <span className=''>OFERTE · VENDA · RECEBA</span> */}
          </div>
        </div>
      </div>

      <div className="cta my-14 flex flex-col gap-2 items-center max-w-[390px] m-auto">
        <img src="/assets/logo-black.png" alt="" className='max-w-40' />
        <p className='opacity-70'>Obtenha um fluxo de novos clientes.</p>
        <button className='bg-main-color py-3 px-8 rounded-full text-main-white font-bold text-sm'>Cadastre-se Grátis</button>
      </div>

      <div className="same-boat px-5 pt-10 pb-14 bg-main-dark max-w-[390px] m-auto">
        <img src="/assets/compass.png" alt="" />
        <h2 className='text-main-white text-4xl mt-5'>Estamos no mesmo barco.<br /><br /> Nós ganhamos quando <span className='px-1 bg-main-color'>você ganha</span></h2>
        <p className='mt-14 text-main-white font-medium'>O nosso faturamento é obtido com micro-comissões que deduzimos de cada venda.<br /><br />
          Nossos clientes, portanto, não são mais apenas clientes, <span className='underline'>mas parceiros</span>. Nós somos 100% <span className='px-1 bg-main-white text-main-dark'>skin in the game</span> (pele em jogo).<br /><br />
          Nosso objetivo é o mesmo. Oferecer o melhor produto, a melhor oferta, para maximizar sua conversão, seu faturamento.<br /><br />
          Nós sempre vamos estar ao seu lado, não apenas porque somos gentis, mas porque é nosso interesse financeiro em comum.<br /><br />
          E isso é saudável.
        </p>
      </div>
    </>
  )
}

export default Home