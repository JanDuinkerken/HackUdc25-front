import { useEffect, useState } from 'react';
import {
  IconHeart,
  IconLogout,
  IconNotebook,
  IconRobotFace,
  IconTarget,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';

const data = [
  { link: '/', label: 'ChatBot', icon: IconRobotFace },
  { link: '/diary', label: 'Mi diario emocional', icon: IconNotebook },
  { link: '/profile', label: 'Mi perfil emocional', icon: IconTarget },
];

export function Navbar() {
  const [active, setActive] = useState('ChatBot');

  const user = localStorage.getItem('email');

  const location = window.location;

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActive('ChatBot');
        break;
      case '/diary':
        setActive('Mi diario emocional');
        break;
      case '/profile':
        setActive('Mi perfil emocional');
        break;
    };
  }, [location]);

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {links}
      </div>

      <div className={classes.footer}>
        <a href='#' className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconHeart className={classes.linkIcon} stroke={1.5} />
          <span>{user}</span>
        </a>
        <a className={classes.link} onClick={() => { localStorage.clear(); window.location.href = '/login'; }}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}