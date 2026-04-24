export default function Header({ activeTab, onTabChange }) {
  return (
    <div className="flex items-center justify-center pt-6 pb-4 px-4">
      <div className="flex bg-surface rounded-full p-1 gap-1">
        {['expense', 'income'].map(tab => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${activeTab === tab
                ? 'bg-white text-black shadow-sm'
                : 'text-muted hover:text-white'
              }
            `}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}
