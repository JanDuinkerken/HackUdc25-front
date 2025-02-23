import { Group, Image } from '@mantine/core';
import classes from './Header.module.css';

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group h={"100%"}>
          <Image src={'logo.png'} alt="Logo" height={"60vh"} />
          <Image src={'ofelia.png'} alt="Title" h={"7vh"} />
          <Group justify={"end"} w={"82.58vw"} m={0} p={0} h={"100%"}>
            <Image src={'palette.png'} alt="Navbar color gradient" h={"7.9vh"} />
          </Group>
        </Group>
      </div>
    </header>
  );
}