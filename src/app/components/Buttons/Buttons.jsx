import './Buttons.scss'

export default function Buttons({ states, setStates }) {
  const unfoldLast = () => {
    if (!states.isLoading && states.folds > 0) {
      setStates(prevStates => ({ ...prevStates, folds: 0 }))
    }
  }

  const unfold = () => {
    if (!states.isLoading && states.folds > 0) {
      setStates(prevStates => ({ ...prevStates, folds: states.folds - 1 }))
    }
  }

  const fold = () => {
    if (!states.isLoading && states.folds < states.maxFold) {
      setStates(prevStates => ({ ...prevStates, folds: states.folds + 1 }))
    }
  }

  const foldLast = () => {
    if (!states.isLoading && states.folds < states.maxFold) {
      setStates(prevStates => ({ ...prevStates, folds: states.maxFold }))
    }
  }

  return (
    <div className="button-container">
      <button className="unfold-button unfold-last" disabled={states.folds == 0 || states.isLoading} onClick={unfoldLast}>last unfold</button>
      <button className="unfold-button" disabled={states.folds == 0 || states.isLoading} onClick={unfold}>unfold</button>
      <button className="fold-button" disabled={states.folds == states.maxFold || states.isLoading} onClick={fold}>fold</button>
      <button className="fold-button fold-last" disabled={states.folds == states.maxFold || states.isLoading} onClick={foldLast}>last fold</button>
    </div>
  )
}
