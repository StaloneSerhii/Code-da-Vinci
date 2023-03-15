import '../../index.css';
// import { nanoid } from 'nanoid';

export const Header = () => {
  return (
    <header>
      <div className="header ">
        <div className="header__logo">
          <a href='./' className="header__logo--name active">Code-daVinci</a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav--list">
            <li>
              <a className="header__nav--item" href="./">
                REACT
              </a>
            </li>
            <li>
              <a className="header__nav--item" href="./">
                JavaScript
              </a>
            </li>
            <li>
              <a className="header__nav--item" href="./">
                HTML/CSS
              </a>
            </li>
            <li>
              <a className="header__nav--item" href="./">
                ABOUT US
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <ul className="header__social">
            <div className="screen-light"></div>
            <button className="btn__header" type="button">
                <svg width="40px" height="40px">
                  <path d="M20 0.005c-6.627 0-12 5.373-12 12 0 2.026 0.507 3.933 1.395 5.608l-8.344 8.342 0.007 0.006c-0.652 0.641-1.058 1.529-1.058 2.516 0 1.949 1.58 3.529 3.529 3.529 0.985 0 1.874-0.406 2.515-1.059l-0.002-0.002 8.341-8.34c1.676 0.891 3.586 1.4 5.617 1.4 6.627 0 12-5.373 12-12s-5.373-12-12-12zM4.795 29.697c-0.322 0.334-0.768 0.543-1.266 0.543-0.975 0-1.765-0.789-1.765-1.764 0-0.498 0.21-0.943 0.543-1.266l-0.009-0.008 8.066-8.066c0.705 0.951 1.545 1.791 2.494 2.498l-8.063 8.063zM20 22.006c-5.522 0-10-4.479-10-10s4.478-10 10-10c5.521 0 10 4.478 10 10s-4.479 10-10 10zM20 5.005c0.275 0 0.5 0.224 0.5 0.5s-0.225 0.5-0.5 0.5c-3.314 0-6 2.687-6 6 0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-3.866 3.133-7 7-7z"></path>
                </svg>
            </button>
            <button className="btn__header" type="button">
                <svg width="40px" height="40px">
                  <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
                </svg>
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
};
