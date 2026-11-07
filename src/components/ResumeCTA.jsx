import { resume, resumePath } from '../data/portfolio'
import { IconDownload } from './icons'

export default function ResumeCTA() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="resume-box" data-reveal>
          <div className="resume-copy">
            <p className="section-tag">Resume</p>
            <h2>{resume.heading}</h2>
            <p>{resume.text}</p>
          </div>

          {resumePath ? (
            <a className="button primary" href={resumePath} download>
              <IconDownload />
              Download Resume
            </a>
          ) : (
            <button
              type="button"
              className="button primary pending"
              title="Add your resume file at public/resume.pdf"
            >
              <IconDownload />
              Download Resume
            </button>
          )}
        </div>
      </div>
    </section>
  )
}