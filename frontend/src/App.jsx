import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';
import Home from './pages/Home';
import AuthLayout from './pages/_auth/AuthLayout';


const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <main className='app flex flex-col items-center h-screen'>
      <Routes>
        {!isAuthenticated ? (
          // Rotas públicas
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        ) : (
          // Rotas privadas
          <Route path='/' element={<RootLayout />}>
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        )}
        {/* Rota de redirecionamento */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </main>
  );
}

export default App;