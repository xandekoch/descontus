import React from 'react';
import { toast } from 'react-toastify';

const ShareButton = () => {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Compartilhar URL',
                    text: 'Confira este perfil interessante!',
                    url: window.location.href
                });
                console.log('Perfil compartilhado com sucesso!');
            } catch (error) {
                console.error('Erro ao compartilhar perfil:', error.message);
            }
        } else {
            console.log('API navigator.share não disponível.');
            // Copiar URL para a área de transferência
            const copyToClipboard = () => {
                const url = 'https://sua-url.com';
                navigator.clipboard.writeText(url).then(() => {
                    console.log('URL copiada para a área de transferência:', url);
                    toast.success('URL copiada para a área de transferência!');
                }).catch((error) => {
                    console.error('Erro ao copiar URL para a área de transferência:', error);
                    toast('Erro ao copiar URL para a área de transferência.');
                });
            };

            // Chamar a função de cópia ao clicar no botão "Copiar link"
            copyToClipboard();
        }
    };

    return (
        <button
            onClick={handleShare}
            className='py-1 px-12 font-medium bg-alt-dark-3 rounded-md'>
            Compartilhar
        </button>
    );
};

export default ShareButton;