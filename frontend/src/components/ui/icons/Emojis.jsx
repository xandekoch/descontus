import React, { useState, useEffect } from 'react';

const Emojis = () => {
  const emojis = ['💸', '🏪', '💰', '🧑‍💼']; // Emojis: Dinheiro voando, Comércio, Saco de dinheiro, Cliente
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);
  const [sparkle, setSparkle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkle(true); // Ativa o sparkle

      setTimeout(() => {
        setSparkle(false); // Desativa o sparkle após 300ms
      }, 300);

      setCurrentEmoji(prevEmoji => {
        const currentIndex = emojis.indexOf(prevEmoji);
        return emojis[(currentIndex + 1) % emojis.length]; // Alterna entre os emojis
      });
    }, 2000); // Muda a cada 2 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [emojis]);

  return (
    <span className={`emoji ${sparkle ? 'sparkle' : ''}`} style={{ fontSize: '40px' }}>
      {currentEmoji}
    </span>
  );
};

export default Emojis;