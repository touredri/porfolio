import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { close, menu, logo } from '../assets';
import '../i18n';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    if (lng !== currentLanguage) {
      i18n.changeLanguage(lng);
    }
    if (lng === 'fr') {
      document.getElementById('fr').classList.add('selected');
      document.getElementById('en').classList.remove('selected');
    } else {
      document.getElementById('en').classList.add('selected');
      document.getElementById('fr').classList.remove('selected');
    }
  };

  const navLinks = t('navLinks', { returnObjects: true });

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it.
          <h1 style={nameHome}>Drissa</h1>*/}
        </Link>
        <div className="flex flex-row bg-grey text-black gap-3">
          <button
            onClick={() => changeLanguage('fr')}
            disabled={currentLanguage === 'fr'}
            
            id="fr"
          >
            {t('fr')}
          </button>
          <button
            onClick={() => changeLanguage('en')}
            disabled={currentLanguage === 'en'}
            className="selected"
            id="en"
          >
            {t('en')}
          </button>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}
            >
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-center justify-end -ml-[5px]"
              >
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a className="link-mobile" href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
