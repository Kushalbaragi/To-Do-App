import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import SummaryCard from './components/SummaryCard'
import TransactionList from './components/TransactionList'
import AddModal from './components/AddModal'
import Drawer from './components/Drawer'
import { useTransactions } from './hooks/useTransactions'
import { useAuth } from './context/AuthContext'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'

function Dashboard() {
  const [activeTab, setActiveTab] = useState('expense')
  const [modalOpen, setModalOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { transactions, addTransaction, deleteTransaction } = useTransactions()

  return (
    <div className="min-h-screen bg-bg font-sans">
      <div className="mx-auto max-w-[480px] min-h-screen relative">

        <Header activeTab={activeTab} onTabChange={setActiveTab} onMenuOpen={() => setDrawerOpen(true)} />

        <SummaryCard transactions={transactions} activeTab={activeTab} />

        <div className="mt-2">
          <TransactionList
            transactions={transactions}
            activeTab={activeTab}
            onDelete={deleteTransaction}
          />
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white text-black text-3xl font-light flex items-center justify-center shadow-lg z-30 active:scale-90 transition-transform duration-150 hover:bg-gray-100"
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
          aria-label="Add transaction"
        >
          +
        </button>

        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

        <AddModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onAdd={addTransaction}
        />
      </div>
    </div>
  )
}

function ProtectedRoute({ children }) {
  const { session, loading } = useAuth()
  if (loading) return null
  return session ? children : <Navigate to="/login" replace />
}

function PublicRoute({ children }) {
  const { session, loading } = useAuth()
  if (loading) return null
  return session ? <Navigate to="/" replace /> : children
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><SignUpPage /></PublicRoute>} />
      <Route path="/forgot-password" element={<PublicRoute><ForgotPasswordPage /></PublicRoute>} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
