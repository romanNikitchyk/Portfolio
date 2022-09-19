import React from "react";
import style from "./Nav.module.scss"
import {Slide} from 'react-awesome-reveal';
import {Link} from "react-scroll";

function Nav() {
  return (
    <div className={style.nav}>
      <Slide>
        <Link
          href={''} // отавляем пустую строку для нормального поведения,
          className={style.link}
          activeClass={style.active}
          to={'1'}
          spy={true}
          smooth={true}
          offset={1}
          duration={1000}
        >Main</Link>
        <Link
          href={''} // отавляем пустую строку для нормального поведения,
          className={style.link}
          activeClass={style.active}
          to={'2'}
          spy={true}
          smooth={true}
          offset={1}
          duration={1000}
        >Skills</Link>
        <Link
          href={''} // отавляем пустую строку для нормального поведения,
          className={style.link}
          activeClass={style.active}
          to={'3'}
          spy={true}
          smooth={true}
          offset={1}
          duration={1000}
        >Projects</Link>
        <Link
          href={''} // отавляем пустую строку для нормального поведения,
          className={style.link}
          activeClass={style.active}
          to={'4'}
          spy={true}
          smooth={true}
          offset={1}
          duration={1000}
        >Contacts</Link>
        <Link
          href={''} // отавляем пустую строку для нормального поведения,
          className={style.link}
          activeClass={style.active}
          to={'5'}
          spy={true}
          smooth={true}
          offset={1}
          duration={1000}
        >Links</Link>
      </Slide>
    </div>
  );
}

export default Nav;