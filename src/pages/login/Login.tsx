import {
    Button,
    Center,
    Container,
    Group,
    Image,
    Paper,
    PasswordInput,
    TextInput,
    Title,
} from '@mantine/core';
import classes from './Login.module.css';
import { login } from '../../api/login';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';

interface LoginProps {
    changeAuth: () => void;
}

export function Login({ changeAuth }: LoginProps) {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
    })

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            window.location.href = '/';
        }
    }, []);

    const authenticate = (email: string, password: string) => {
        login(email, password).then((response) => {
            localStorage.setItem('access_token', response);
            localStorage.setItem('email', email);
            changeAuth();
            form.reset();
            window.location.href = '/';
        });
    }

    return (
        <Group w="100vw" h="100vh" p={0}>
            <div style={{ backgroundImage: 'url(./palette.png)', backgroundSize: 'cover', height: '100vh' }}>
                <Center w="100vw" h="100vh">
                    <Container w="40vw" my={40}>
                        <Group>
                            <Image src="./logo.png" alt="Logo" width={70} height={70} />
                            <Title ta="center" className={classes.title}>
                                Bienvenido!
                            </Title>
                        </Group>

                        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                            <form onSubmit={form.onSubmit((e) => authenticate(e.email, e.password))}>
                                <TextInput
                                    label="Email"
                                    placeholder="tu@email.com"
                                    value={form.values.email}
                                    onChange={(e) => form.setFieldValue('email', e.currentTarget.value)}
                                    required
                                />
                                <PasswordInput
                                    label="Contraseña"
                                    placeholder="Tu contraseña"
                                    value={form.values.password}
                                    onChange={(e) => form.setFieldValue('password', e.currentTarget.value)}
                                    required
                                    mt="md"
                                />
                                <Button fullWidth mt="xl" type='submit' bg="#5DFDCB" c="dark">
                                    Iniciar sesión
                                </Button>
                            </form>
                        </Paper>
                    </Container>
                </Center>
            </div>
        </Group>
    );
}