import { useMemo } from 'react'
import { getMonthlyTotals, monthShortLabel } from '../utils/format'

const BAR_HEIGHT = 80
const BAR_WIDTH = 8
const GAP = 2
const GROUP_WIDTH = BAR_WIDTH * 2 + GAP + 6
const MONTHS = 12

export default function BarChart({ transactions, activeMonth, year }) {
  const { income, expense } = useMemo(
    () => getMonthlyTotals(transactions, year),
    [transactions, year]
  )

  const maxVal = Math.max(...income, ...expense, 1)

  const totalWidth = GROUP_WIDTH * MONTHS
  const svgH = BAR_HEIGHT + 24

  return (
    <svg
      viewBox={`0 0 ${totalWidth} ${svgH}`}
      className="w-full"
      style={{ overflow: 'visible' }}
    >
      {Array.from({ length: MONTHS }, (_, i) => {
        const x = i * GROUP_WIDTH + 3
        const incH = (income[i] / maxVal) * BAR_HEIGHT
        const expH = (expense[i] / maxVal) * BAR_HEIGHT
        const isActive = i === activeMonth
        const incColor = isActive ? '#4ade80' : 'rgba(74,222,128,0.35)'
        const expColor = isActive ? '#f87171' : 'rgba(248,113,113,0.35)'

        return (
          <g key={i}>
            {/* income bar */}
            <rect
              x={x}
              y={BAR_HEIGHT - incH}
              width={BAR_WIDTH}
              height={incH}
              rx={3}
              fill={incColor}
              style={{ transition: 'height 0.5s ease, y 0.5s ease' }}
            />
            {/* expense bar */}
            <rect
              x={x + BAR_WIDTH + GAP}
              y={BAR_HEIGHT - expH}
              width={BAR_WIDTH}
              height={expH}
              rx={3}
              fill={expColor}
              style={{ transition: 'height 0.5s ease, y 0.5s ease' }}
            />
            {/* month label */}
            <text
              x={x + BAR_WIDTH + GAP / 2}
              y={BAR_HEIGHT + 16}
              textAnchor="middle"
              fontSize="9"
              fill={isActive ? '#fff' : '#555'}
              fontFamily="Inter, sans-serif"
            >
              {monthShortLabel(i)}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
