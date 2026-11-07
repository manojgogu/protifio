export default function Loader({ done }) {
  return (
    <div className={`loader ${done ? 'is-hidden' : ''}`.trim()} aria-hidden={done}>
      <div className="loader-inner">
        <div className="loader-mark">MG</div>
        <div className="loader-bar">
          <span />
        </div>
        <p className="loader-text">Preparing experience</p>
      </div>
    </div>
  )
}
