import './Headings.scss'

export default function Headings({ states }) {
  return (
    <div className="heading">
      <h1>Paper Fold Game</h1>
      <h2>
        <span>folds:</span>
        <span>{states.folds}</span>
      </h2>
    </div>
  )
}
