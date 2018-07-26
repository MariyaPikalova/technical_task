import './navigation.scss';

export const Navigation = props => (
  <nav className="header__nav">
    <ul className="header__nav-list">
      {props.list.map((item, i) =>
        <li
          className="header__nav-item"
          key={i}
        >
          <a
            className="header__nav-link"
            href={item}
          >
            {item}
          </a>
        </li>)}
    </ul>
  </nav>
);
