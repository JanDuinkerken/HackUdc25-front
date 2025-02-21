import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/header/Header';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './AppRoutes';

export const Home = () => {
    return (
        <AppShell
            header={{ height: "8vh" }}
            navbar={{
                width: "15vw",
                breakpoint: 'sm',
            }}
            padding="md"
        >
            <AppShell.Header>
                <Header />
            </AppShell.Header>

            <AppShell.Navbar p="md"><Navbar /></AppShell.Navbar>

            <AppShell.Main>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </AppShell.Main>
        </AppShell>
    );
}