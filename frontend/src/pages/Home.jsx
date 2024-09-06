import React, { useState } from 'react'
import Topbar from '../components/ui/shared/Topbar'
import Emojis from '../components/ui/icons/Emojis'
import Strip from '../components/ui/shared/Strip'
import StripRight from '../components/ui/shared/StripRight'

const Home = () => {
  const questionsData = [
    { id: 1, question: "O que é o Discontus?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 2, question: "Como funciona a plataforma?", answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 3, question: "Como faço uma reserva?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 4, question: "Quais descontos estão disponíveis?", answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 5, question: "Posso cancelar uma reserva?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 6, question: "Como entrar em contato com o suporte?", answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 7, question: "Preciso pagar para usar o Discontus?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 8, question: "Posso usar o Discontus fora do Brasil?", answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 9, question: "Quais são os termos de uso?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 10, question: "Como alterar meus dados de usuário?", answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." }
  ];

  const [openQuestions, setOpenQuestions] = useState(Array(questionsData.length).fill(false));

  const toggleAnswer = (index) => {
    setOpenQuestions((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };
  return (
    <>
      <Topbar />
      <div className='w-full max-w-[430px] m-auto pt-24 px-5'>
        <div id='hero' className="hero scroll-mt-[72px]">
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
            <button className='w-full mt-3 bg-main-dark py-3 grid items-center rounded-full text-main-white font-bold hover:bg-main-color'>Cadastre-se Grátis</button>

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

        <div className="discount-50 mt-10 max-w-[430px] m-auto">
          <h2 className='text-[32px]'>Ganhe 50% <br />
            de desconto <span className='px-1 bg-main-color text-main-white font-medium'>vitalício.</span></h2>
          <p className='text-justify mt-3'>Cobramos uma taxa de 6% apenas quando você faz uma <span className='font-bold'>venda</span>, mas para os estabelecimentos que se cadastrarem no <span className='font-bold'>pré-lançamento</span> essa taxa será de 3% (50% OFF) <span className='font-bold'>para sempre.</span></p>
        </div>
      </div>

      <div id='steps' className="steps mt-14 max-w-[430px] m-auto scroll-mt-[72px]">
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

      <div className="strips text-2xl max-w-[390px] m-auto relative">
        <div className='w-full h-[1px] bg-main-gray absolute top-1 z-10'></div>
        <div className="strip-container bg-main-dark pt-0.5 overflow-hidden relative">
          <div className="strip strip-left flex items-center gap-5 py-2 bg-main-dark text-2xl text-main-white font-bold animate-left">
            <Strip />
            <Strip />
            <Strip />
            <Strip />
            <Strip />
          </div>
        </div>

        <div className="strip-container overflow-hidden relative -translate-y-2">
          <div className="strip strip-right flex items-center gap-5 py-2 bg-main-dark text-2xl text-main-white font-bold animate-right">
            <StripRight />
            <StripRight />
            <StripRight />
            <StripRight />
            <StripRight />
          </div>
        </div>
      </div>

      <div className="cta my-14 flex flex-col gap-2 items-center max-w-[390px] m-auto">
        <img src="/assets/logo-black.png" alt="" className='max-w-40' />
        <p className='opacity-70'>Obtenha um fluxo de novos clientes.</p>
        <button className='bg-main-color py-3 px-8 rounded-full text-main-white font-bold text-sm hover:bg-main-dark'>Cadastre-se Grátis</button>
      </div>

      <div id='mission' className="same-boat px-5 pt-10 pb-14 bg-main-dark max-w-[390px] m-auto scroll-mt-[72px]">
        <img className='compass' src="/assets/compass.png" alt="" />
        <h2 className='text-main-white text-4xl mt-5'>Estamos no mesmo barco.<br /><br /> Nós ganhamos quando <span className='px-1 bg-main-color'>você ganha</span></h2>
        <p className='mt-14 text-main-white font-medium'>O nosso faturamento é obtido com micro-comissões que deduzimos de cada venda.<br /><br />
          Nossos clientes, portanto, não são mais apenas clientes, <span className='underline'>mas parceiros</span>. Nós somos 100% <span className='px-1 bg-main-white text-main-dark'>skin in the game</span> (pele em jogo).<br /><br />
          Nosso objetivo é o mesmo. Oferecer o melhor produto, a melhor oferta, para maximizar sua conversão, seu faturamento.<br /><br />
          Nós sempre vamos estar ao seu lado, não apenas porque somos gentis, mas porque é nosso interesse financeiro em comum.<br /><br />
          E isso é saudável.
        </p>
      </div>

      <div id='prices' className="prices my-14 px-5 max-w-[390px] scroll-mt-[72px]">
        <h2 className='text-4xl mt-5'>Preços.</h2>
        <div className="price-card mt-5 p-6 bg-second-color rounded-2xl">
          <span className='font-semibold text-2xl'>Grátis</span>
          <p className='pt-3'>Comece agora mesmo.</p>
          <div className="price pt-10">
            <p className='font-bold text-xl'>
              <span className='text-lg opacity-60 line-through'>6%</span>
              <span className='text-3xl font-black'> 3% </span>
              por venda
            </p>
            <button className='mt-5 w-full border border-main-dark rounded-full py-2 hover:bg-main-dark hover:text-main-white'>Cadastrar</button>
          </div>
        </div>
      </div>

      <div id='faq' className="faq mt-14 px-5 max-w-[390px] scroll-mt-[72px]">
        <h2 className='text-4xl mt-5'>FAQ.</h2>
        <div className="questions flex flex-col items-start gap-10 mt-8">
          {questionsData.map((item, index) => (
            <div key={item.id} className="question-block">
              <div
                className="question font-semibold text-xl cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-second-gray">{String(index + 1).padStart(2, '0')}</span> <br />
                <span className='hover:bg-main-dark hover:text-main-white'>{item.question}</span>
              </div>
              {openQuestions[index] && (
                <p className="answer mt-5">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="footer mt-20 px-5 pt-20 pb-12 max-w-[390px] bg-main-dark">
        <div className="subscribe">
          <img src="/assets/logo-white.png" alt="" className='max-w-44' />
          <p className='text-main-gray/40 mt-10 font-medium text-lg'>Receba Atualizações<br />diretamente no seu inbox.</p>
          <div className="form mt-9">
            <input className='w-full px-5 py-3 font-semibold bg-second-dark text-main-white rounded-full' type="text" placeholder='Digite seu email' />
            <button className='w-full mt-4 bg-second-color py-3 grid items-center rounded-full text-main-white font-bold hover:bg-main-white hover:text-main-dark'>Cadastre-se Grátis</button>
          </div>
          <p className='mt-10 text-main-gray text-[12px]'>Ao se inscrever você concorda com nossa Política de Privacidade e consente em receber atualizações.</p>
        </div>

        <div className='w-full h-[1px] mt-14 bg-main-gray'></div>

        <div className="links mt-12 text-main-white font-medium flex flex-col gap-7">
          <a href="">
            Início
          </a>
          <a href="">
            Funcionalidades
          </a>
          <a href="">
            Nossa missão
          </a>
          <a href="">
            Início
          </a>
          <a href="">
            Preços
          </a>
          <a href="">
            FAQ
          </a>
        </div>

        <div className="mt-14 ltda-social">
          <p className='text-main-gray text-[12px]'>© 2024 Discontus, Ltda. Todos os direitos reservados.</p>
          <div className="social-icons flex items-center gap-2 mt-5">
            <a href="">
              <img src="/assets/twitter-icon.svg" alt="" />
            </a>
            <a href="">
              <img src="/assets/youtube-icon.svg" alt="" />
            </a>
            <a href="">
              <img src="/assets/telegram-icon.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
          
    </>
  )
}

export default Home