import { useState, useEffect, useRef } from 'react'
import { today } from '../utils/format'

export default function AddModal({ open, onClose, onAdd }) {
  const [type, setType] = useState('expense')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(today())
  const [description, setDescription] = useState('')
  const amountRef = useRef(null)

  useEffect(() => {
    if (open) {
      setType('expense')
      setAmount('')
      setDate(today())
      setDescription('')
      setTimeout(() => amountRef.current?.focus(), 300)
    }
  }, [open])

  function handleSubmit(e) {
    e.preventDefault()
    const val = parseFloat(amount)
    if (!val || val <= 0) return
    onAdd({ type, amount: val, date, description })
    onClose()
  }

  const isIncome = type === 'income'

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          open ? 'opacity-60 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[480px] bg-surface rounded-t-3xl px-6 pt-5 pb-10 transition-transform duration-300 ease-out ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        {/* Handle */}
        <div className="w-10 h-1 bg-border rounded-full mx-auto mb-5" />

        {/* Type toggle */}
        <div className="flex bg-bg rounded-full p-1 gap-1 mb-6">
          {['expense', 'income'].map(t => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                type === t
                  ? t === 'income'
                    ? 'bg-income text-black'
                    : 'bg-expense text-black'
                  : 'text-muted hover:text-white'
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Amount */}
          <div className="mb-6 text-center">
            <div className="flex items-center justify-center gap-1">
              <span className={`text-4xl font-light ${isIncome ? 'text-income' : 'text-expense'}`}>₹</span>
              <input
                ref={amountRef}
                type="number"
                inputMode="decimal"
                placeholder="0"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                className={`bg-transparent text-5xl font-semibold text-center outline-none w-full max-w-[220px] placeholder-border ${
                  isIncome ? 'text-income' : 'text-expense'
                }`}
              />
            </div>
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="block text-muted text-xs font-medium mb-1 uppercase tracking-wider">Date</label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-white transition-colors duration-150"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-muted text-xs font-medium mb-1 uppercase tracking-wider">Description</label>
            <input
              type="text"
              placeholder="What was this for?"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-white transition-colors duration-150 placeholder-border"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!amount || parseFloat(amount) <= 0}
            className={`w-full py-4 rounded-2xl text-base font-semibold transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed ${
              isIncome
                ? 'bg-income text-black hover:bg-green-300'
                : 'bg-expense text-black hover:bg-red-300'
            }`}
          >
            Add {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        </form>
      </div>
    </>
  )
}
