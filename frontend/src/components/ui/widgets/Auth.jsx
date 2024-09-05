import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import LogoText from '../icons/LogoText';
import Close from '../icons/Close';
import Loader from '../shared/Loader';
import { loginUser, registerUser } from '../../../services/NodeApi/authApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../../context/AuthProvider';
import { useUIContext } from '../../../context/UIProvider';

// Definindo os schemas de validação com Zod
const loginSchema = z.object({
    email: z.string(),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

const registerSchema = z.object({
    username: z.string().min(3, 'Mínimo de 3 caracteres'),
    email: z.string().email('Email inválido').min(1),
    password: z.string().min(6, 'Mínimo de 6 caracteres'),
});

const recoverPasswordSchema = z.object({
    email: z.string().email('Email inválido').min(1),
});

const Auth = () => {
    const { setAuthWidgetOpen } = useUIContext();
    const [activeForm, setActiveForm] = useState('login');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '',
    });
    const [formError, setFormError] = useState('');
    const [isPending, setIsPending] = useState(false);
    const { authenticate } = useAuth();

    // Exemplo de como usar a função de registro
    const handleRegister = async (formData) => {
        setIsPending(true);
        try {
            const userData = {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            };

            const response = await registerUser(userData);
            // Se o registro for bem sucedido, o usuário é logado automaticamente
            if (response) {
                console.log('Usuário cadastrado');
                handleLogin(formData);
                toast.success('Cadastro realizado com sucesso');
            }
        } catch (error) {
            console.error(error.message || 'Erro ao realizar o cadastro');
            const errorMessage = error.message;
            // Verifica se o erro é relacionado a um e-mail ou nome de usuário duplicado
            if (errorMessage.includes('duplicate key error collection') && errorMessage.includes('email')) {
                toast.error('E-mail já cadastrado');
            } else if (errorMessage.includes('duplicate key error collection') && errorMessage.includes('username')) {
                toast.error('Nome de usuário já cadastrado');
            } else {
                toast.error(error.message || 'Erro ao realizar o cadastro');
            }
        } finally {
            setIsPending(false);
        }
    };


        const handleLogin = async (formData) => {
            setIsPending(true);
            try {
                const userData = {
                    usernameOrEmail: formData.email,
                    password: formData.password,
                };

                const session = await loginUser(userData);
                if (session) {
                    authenticate(session);
                    toast.success('Login realizado com sucesso');
                    setAuthWidgetOpen(false);
                } else {
                    console.error('Erro ao realizar o login');
                    toast.error('Erro ao realizar o login');
                }
            } catch (error) {
                console.error(error);
                toast.error(error.message || 'Erro ao realizar o login');
            } finally {
                setIsPending(false);
            }
        };


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormError('');

        try {
            let result;
            switch (activeForm) {
                case 'login':
                    result = loginSchema.parse(formData);
                    handleLogin(result);
                    console.log('Login data:', result);
                    break;
                case 'register':
                    result = registerSchema.parse(formData);
                    handleRegister(result);
                    console.log('Register data:', result);
                    break;
                case 'recoverPassword':
                    result = recoverPasswordSchema.parse(formData);
                    // Chamar função de recuperação de senha
                    console.log('Recover Password data:', result);
                    break;
                default:
                    break;
            }
        } catch (error) {
            setFormError(error.errors[0].message);
        }
    };

    const renderFormInputs = () => {
        switch (activeForm) {
            case 'login':
                return (
                    <>
                        <h2 className='font-bold text-xl pb-6 w-full'>Faça login</h2>
                        <input
                            type="text"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Email ou Username"
                            className=" border bg-alt-dark-2 p-2 mb-6 rounded-md focus:outline-none w-full"
                        />
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="Password"
                            className="border bg-alt-dark-2 p-2 mb-6 rounded-md focus:outline-none w-full"
                        />
                    </>
                );
            case 'register':
                return (
                    <>
                        <h2 className='font-bold text-xl pb-6 w-full'>Criar conta</h2>
                        <input
                            type="text"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            placeholder="Username"
                            className="border bg-alt-dark-2 p-2 mb-6 rounded-md focus:outline-none w-full"
                        />
                        <input
                            type="text"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Email"
                            className="border bg-alt-dark-2 p-2 mb-6 rounded-md focus:outline-none w-full"
                        />
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="Password"
                            className="border bg-alt-dark-2 p-2 mb-6 rounded-md focus:outline-none w-full"
                        />
                    </>
                );
            case 'recoverPassword':
                return (
                    <>
                        <h2 className='font-bold text-xl pb-6 w-full'>Recuperar senha</h2>
                        <input
                            type="text"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Email"
                            className="border bg-alt-dark-2 p-2 mb-6 rounded-md focus:outline-none w-full"
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="fixed z-40 inset-0 bg-alt-dark/70 backdrop-blur-sm" onClick={() => { setAuthWidgetOpen(false) }} />
            <div
                className="fixed z-50 top-1/2 -translate-y-2/4 left-1/2 -translate-x-1/2 box-border  overflow-visible bg-gradient auth-widget flex flex-col justify-center items-center w-10/12 h-fit p-8 rounded-lg shadow-md max-w-md">
                <button className="absolute top-2 right-2" onClick={() => { setAuthWidgetOpen(false) }}>
                    <Close />
                </button>
                <div className='mb-4'>
                    <LogoText />
                </div>
                <form onSubmit={handleFormSubmit} className=" ">
                    {renderFormInputs()}
                    {formError && <p className="text-red-500">{formError}</p>}
                    <button type="submit" className="bg-main-red text-white font-bold text-sm py-2 px-8 w-full rounded-full hover:opacity-80 flex items-center justify-center gap-2" disabled={isPending}>
                        {isPending && <Loader />}
                        {activeForm === 'login' ? 'ENTRAR' : activeForm === 'register' ? 'CADASTRAR' : 'ENVIAR POR E-MAIL'}
                    </button>
                </form>
                <div className="form-switch w-full mt-6 flex justify-between">
                    {activeForm !== 'login' && (
                        <button onClick={() => setActiveForm('login')} className="text-main-white hover:text-main-red">
                            Entrar
                        </button>
                    )}
                    {activeForm !== 'register' && (
                        <button onClick={() => setActiveForm('register')} className="text-main-white hover:text-main-red">
                            Cadastrar
                        </button>
                    )}
                    {activeForm !== 'recoverPassword' && (
                        <button onClick={() => setActiveForm('recoverPassword')} className="text-main-white hover:text-main-red">
                            Esqueceu a senha?
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Auth;