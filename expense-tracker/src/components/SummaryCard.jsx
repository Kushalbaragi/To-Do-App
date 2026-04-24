import { useMemo } from 'react'
import BarChart from './BarChart'
import {
  formatCurrencyFull,
  formatCurrency,
  getDelta,
  monthLabel,
  currentMonthYear,
} from '../utils/format'

export default function SummaryCard({ transactions, activeTab }) {
  const { month, year } = currentMonthYear()

  const { current, diff } = useMemo(
    () => getDelta(transactions, activeTab, month, year),
    [transactions, activeTab, month, year]
  )

  const isIncome = activeTab === 'income'
  const accentColor = isIncome ? 'text-income' : 'text-expense'

  const deltaPositive = diff >= 0
  // For income: more is good (green). For expense: more is bad (red).
  const deltaGood = isIncome ? deltaPositive : !deltaPositive
  const deltaColor = deltaGood ? 'text-income' : 'text-expense'
  const deltaArrow = deltaPositive ? '↑' : '↓'
  const deltaLabel = `${deltaArrow} ${formatCurrency(Math.abs(diff))} from last month`

  return (
    <div className="mx-4 mb-2 bg-surface rounded-2xl p-5 overflow-hidden">
      {/* Month label */}
      <p className="text-muted text-sm text-center mb-1">{monthLabel(month, year)}</p>

      {/* Total amount */}
      <p className={`text-4xl font-semibold text-center tracking-tight mb-1 ${accentColor}`}>
        {formatCurrencyFull(current)}
      </p>

      {/* Delta */}
      <p className={`text-sm text-center mb-5 ${diff === 0 ? 'text-muted' : deltaColor}`}>
        {diff === 0 ? 'No change from last month' : deltaLabel}
      </p>

      {/* Bar chart */}
      <BarChart transactions={transactions} activeMonth={month} year={year} />
    </div>
  )
}
