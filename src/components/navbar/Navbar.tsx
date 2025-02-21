import { useState } from 'react';
import {
  IconLogout,
  IconNotebook,
  IconRobotFace,
  IconTarget,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';

const data = [
  { link: '', label: 'ChatBot', icon: IconRobotFace },
  { link: '', label: 'Mi diario emocional', icon: IconNotebook },
  { link: '', label: 'Mi perfil emocional', icon: IconTarget },
];

export function Navbar() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
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
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}