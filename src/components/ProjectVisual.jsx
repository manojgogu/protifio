import {
  IconBrain,
  IconBuilding,
  IconCalendar,
  IconCheck,
  IconCpu,
  IconDumbbell,
  IconGlobe,
  IconShield,
} from './icons'

function TopBar({ label }) {
  return (
    <div className="pv-topbar">
      <span className="pv-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="pv-label">{label}</span>
      <span className="pv-status">preview</span>
    </div>
  )
}

function CampusVisual() {
  return (
    <div className="pv pv-campus">
      <TopBar label="CampusSafe · response overview" />
      <div className="pv-body campus-body">
        <div className="campus-map" aria-hidden="true">
          <span className="map-grid" />
          <span className="map-ring ring-a" />
          <span className="map-ring ring-b" />
          <span className="map-road road-a" />
          <span className="map-road road-b" />
          <span className="map-pin pin-a" />
          <span className="map-pin pin-b" />
          <span className="map-pin pin-c" />
          <span className="map-core">
            <IconShield />
          </span>
        </div>

        <div className="campus-side">
          <div className="sos-tile">
            <span className="sos-label">SOS</span>
            <small>Emergency reporting</small>
          </div>
          <div className="mini-tile">
            <span className="mini-icon">
              <IconShield />
            </span>
            <span>
              <strong>Campus alert</strong>
              <small>Reporting channel</small>
            </span>
          </div>
          <div className="mini-tile">
            <span className="mini-icon alt">
              <IconGlobe />
            </span>
            <span>
              <strong>Response team</strong>
              <small>Coordination</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function RetrievoVisual() {
  return (
    <div className="pv pv-retrievo">
      <TopBar label="Retrievo · AI match" />
      <div className="pv-body retrievo-body">
        <div className="match-board" aria-hidden="true">
          <svg className="match-lines" viewBox="0 0 360 220" preserveAspectRatio="none">
            <path d="M92 52 C160 52 150 110 224 110" />
            <path d="M92 168 C160 168 150 110 224 110" />
            <path d="M252 110 h52" />
          </svg>

          <div className="item-card item-a">
            <span className="item-thumb" />
            <strong>Reported item</strong>
            <small>Photo + details</small>
          </div>

          <div className="item-card item-b">
            <span className="item-thumb alt" />
            <strong>Found item</strong>
            <small>Photo + details</small>
          </div>

          <div className="match-core">
            <IconBrain />
            <span>AI match</span>
          </div>

          <div className="match-result">
            <IconCheck />
            <span>
              <strong>Potential match</strong>
              <small>Similarity concept</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function FitnessVisual() {
  return (
    <div className="pv pv-fitness">
      <TopBar label="FITSync · operations" />
      <div className="pv-body fitness-body">
        <div className="fitness-side" aria-hidden="true">
          <span className="active" />
          <span />
          <span />
          <span />
        </div>

        <div className="fitness-main">
          <div className="fitness-row">
            <div className="ring-card">
              <div className="activity-ring">
                <span>
                  <IconDumbbell />
                </span>
              </div>
              <div>
                <strong>Member activity</strong>
                <small>Fitness workflows</small>
              </div>
            </div>

            <div className="bar-card" aria-hidden="true">
              <span className="bar b1" />
              <span className="bar b2" />
              <span className="bar b3" />
              <span className="bar b4" />
              <span className="bar b5" />
            </div>
          </div>

          <div className="fitness-tiles">
            <div className="mini-tile">
              <span className="mini-icon">
                <IconGlobe />
              </span>
              <span>
                <strong>Members</strong>
                <small>Profiles</small>
              </span>
            </div>
            <div className="mini-tile">
              <span className="mini-icon alt">
                <IconCalendar />
              </span>
              <span>
                <strong>Schedules</strong>
                <small>Workouts</small>
              </span>
            </div>
            <div className="mini-tile">
              <span className="mini-icon">
                <IconCheck />
              </span>
              <span>
                <strong>Operations</strong>
                <small>Daily flow</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SmartVisual() {
  return (
    <div className="pv pv-smart">
      <TopBar label="Smart Campus · services" />
      <div className="pv-body smart-body">
        <div className="smart-grid">
          <div className="smart-tile span-2">
            <span className="smart-icon">
              <IconBuilding />
            </span>
            <span>
              <strong>Campus services</strong>
              <small>Digital workflows</small>
            </span>
          </div>
          <div className="smart-tile">
            <IconCalendar />
            <small>Schedules</small>
          </div>
          <div className="smart-tile">
            <IconGlobe />
            <small>Notifications</small>
          </div>
          <div className="smart-tile span-2">
            <div className="smart-bars" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <small>Service overview</small>
          </div>
          <div className="smart-tile">
            <IconCpu />
            <small>Smart systems</small>
          </div>
        </div>
      </div>
    </div>
  )
}

const visualMap = {
  campus: CampusVisual,
  retrievo: RetrievoVisual,
  fitness: FitnessVisual,
  smart: SmartVisual,
}

export default function ProjectVisual({ variant }) {
  const Visual = visualMap[variant] ?? CampusVisual
  return <Visual />
}
