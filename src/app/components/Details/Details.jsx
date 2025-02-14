import './Details.scss'

export default function Details({ isLoading, curFold }) {
  const formatHeight = height => {
    const thresholds = [1000000, 1000, 10]
    const units = ['km', 'm', 'cm']
    let unit = 'mm'

    for (let i = 0; i < thresholds.length; i++) {
      if (height >= thresholds[i]) {
        height /= thresholds[i]
        unit = units[i]
        break
      }
    }

    return `${height.toLocaleString(undefined, { maximumFractionDigits: 1 })} ${unit}`
  }

  return (
    <div className="details">
      <p className="fold-height">
        <span>current height:</span>
        <span className={isLoading ? 'skeleton skeleton-p' : ''}>{isLoading ? '' : formatHeight(curFold.height)}</span>
      </p>
      <p className={isLoading ? 'skeleton skeleton-p' : ''}>{isLoading ? '' : curFold.desc}</p>
    </div>
  )
}
