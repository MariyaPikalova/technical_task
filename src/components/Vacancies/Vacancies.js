import './vacancies.scss';

export const Vacancies = () => (
  <div className="container">
    <div className="vacancy-wrap">
      <h2 className="title">Hot Vacancies</h2>
      <ul className="vacancy-list">
        <li className="vacancy-item">
            <div className="vacancy-caption">
              <p className="vacancy-intro">A situation</p>
              <h3 className="vacancy-title">
                <a className="vacancy-link" href="#">As soon as Computerized Tomography</a>
              </h3>
              <p className="vacancy-desc">No image is so essential</p>
            </div>
        </li>
        <li className="vacancy-item">
          <div className="vacancy-inner">
            <div className="vacancy-caption">
              <p className="vacancy-intro">A situation</p>
              <h3 className="vacancy-title">
                <a className="vacancy-link" href="#">Magnetic Resonance Imaging</a>
              </h3>
              <p className="vacancy-desc">No image is so essential</p>
            </div>
          </div>
        </li>
        <li className="vacancy-item">
          <div className="vacancy-inner">
            <div className="vacancy-caption">
              <p className="vacancy-intro">A situation</p>
              <h3 className="vacancy-title">
                <a className="vacancy-link" href="#">This is for the reason</a>
              </h3>
              <p className="vacancy-desc">No image is so essential</p>
            </div>
          </div>
        </li>
        <li className="vacancy-item">
          <div className="vacancy-inner">
            <div className="vacancy-caption">
              <p className="vacancy-intro">A situation</p>
              <h3 className="vacancy-title">
                <a className="vacancy-link" href="#">After that, in the 1980s Magnetic</a>
              </h3>
              <p className="vacancy-desc">No image is so essential</p>
            </div>
          </div>
        </li>
        <li className="vacancy-item">
          <div className="vacancy-inner">
            <div className="vacancy-caption">
              <p className="vacancy-intro">A situation</p>
              <h3 className="vacancy-title">
                <a className="vacancy-link" href="#">became accessible in the 1970s</a>
              </h3>
              <p className="vacancy-desc">No image is so essential</p>
            </div>
          </div>
        </li>
        <li className="vacancy-item">
          <div className="vacancy-inner">
            <div className="vacancy-caption">
              <p className="vacancy-intro">A situation</p>
              <h3 className="vacancy-title">
                <a className="vacancy-link" href="#">MRIs concentrate on water molecules</a>
              </h3>
              <p className="vacancy-desc">No image is so essential</p>
            </div>
          </div>
        </li>
      </ul>
      <div className="button-wrapper">
        <span className="button button-more">More Vacancies</span>
      </div>
    </div>
  </div>
)