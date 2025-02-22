import { Group, Image, Title } from '@mantine/core';
import classes from './Header.module.css';

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group h={"100%"}>
          <Image src={'logo.png'} alt="Logo" mt={"1vh"} height={"60vh"} />
          <Title size={"3rem"} mt={"1vh"}>KeleaCare</Title>
          <Group justify={"end"} w={"81.65vw"} m={0} p={0} h={"100%"}>
            <Image src={'palette.png'} alt="Navbar color gradient" h={"7.9vh"} />
          </Group>
        </Group>
      </div>
    </header>
  );
}