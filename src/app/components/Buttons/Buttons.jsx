import './Buttons.scss'

export default function Buttons({ isLoading, folds, setFolds }) {
  const unfoldLast = () => {
    if (!isLoading && folds > 0) {
      setFolds(0)
    }
  }

  const unfold = () => {
    if (!isLoading && folds > 0) {
      setFolds(folds - 1)
    }
  }

  const fold = () => {
    if (!isLoading && folds < 42) {
      setFolds(folds + 1)
    }
  }

  const foldLast = () => {
    if (!isLoading && folds < 42) {
      setFolds(42)
    }
  }

  return (
    <div className="button-container">
      <button className="unfold-button unfold-last" disabled={folds == 0 || isLoading} onClick={unfoldLast}>last unfold</button>
      <button className="unfold-button" disabled={folds == 0 || isLoading} onClick={unfold}>unfold</button>
      <button className="fold-button" disabled={folds == 42 || isLoading} onClick={fold}>fold</button>
      <button className="fold-button fold-last" disabled={folds == 42 || isLoading} onClick={foldLast}>last fold</button>
    </div>
  )
}
