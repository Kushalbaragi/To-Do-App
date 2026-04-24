import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Avatar({ email }) {
  const initials = (email || '?')[0].toUpperCase()
  return (
    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-semibold"
      style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)' }}>
      {initials}
    </div>
  )
}

function MenuItem({ label, value, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-[14px] px-4 transition-colors duration-150 hover:bg-white/5 active:bg-white/10 text-left"
    >
      <span className={`text-sm font-normal ${danger ? 'text-red-400' : 'text-white'}`}>{label}</span>
      {value && <span className="text-xs text-white/35 truncate max-w-[140px]">{value}</span>}
    </button>
  )
}

function Divider() {
  return <div className="mx-4" style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
}

export default function Drawer({ open, onClose }) {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await signOut()
    onClose()
    navigate('/login')
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(0,0,0,0.5)' }}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-[300px] flex flex-col transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}
        style={{
          background: 'rgba(14,14,14,0.96)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          borderRight: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="px-5 pt-10 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {user ? (
            <>
              <Avatar email={user.email} />
              <p className="text-white text-base font-semibold mt-4 mb-1">{user.email}</p>
              <p className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-green-900/40 text-green-400 text-xs font-medium">
                Signed in
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="10" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                  <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-white/35 text-xs mt-4">Not signed in</p>
            </>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          {user && (
            <>
              <MenuItem label="Email" value={user.email} onClick={() => {}} />
              <Divider />
            </>
          )}
          <MenuItem label="Privacy Policy" onClick={() => {}} />
          <Divider />
          <MenuItem label="Terms & Conditions" onClick={() => {}} />
          {user && (
            <>
              <div className="mt-4" />
              <Divider />
              <MenuItem label="Log Out" danger onClick={handleLogout} />
            </>
          )}
        </div>
      </div>
    </>
  )
}
