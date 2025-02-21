import { Group, Image, Text, Title } from '@mantine/core';
import classes from './Header.module.css';

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Image src={'logo.png'} alt="Logo" mt={"1vh"} height={"60vh"}/>
          <Title size={"3rem"} mt={"1vh"}>KeleaCare</Title>
        </Group>
      </div>
    </header>
  );
}