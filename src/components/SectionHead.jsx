export default function SectionHead({ index, kicker, title, description, center = false }) {
  return (
    <div className={`section-head ${center ? 'center' : ''}`.trim()} data-reveal>
      <p className="section-kicker">
        <span className="num">{index}</span>
        {kicker}
      </p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-sub">{description}</p> : null}
    </div>
  )
}
