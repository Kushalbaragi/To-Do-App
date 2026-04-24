export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-bg font-sans flex items-center justify-center px-4">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white tracking-tight">{title}</h1>
          {subtitle && <p className="text-muted text-sm mt-2">{subtitle}</p>}
        </div>
        <div className="glass rounded-2xl p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
