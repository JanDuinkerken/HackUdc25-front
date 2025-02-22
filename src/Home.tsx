import { AppShell } from '@mantine/core';
import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/header/Header';
import { Outlet } from 'react-router';

export const Home = () => {
    return (
        <AppShell
            header={{ height: "8vh" }}
            navbar={{
                width: "15vw",
                breakpoint: 'sm',
            }}
        >
            <AppShell.Header>
                <Header />
            </AppShell.Header>

            <AppShell.Navbar p="md"><Navbar /></AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}