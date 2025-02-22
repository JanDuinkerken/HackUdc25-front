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

export function Login() {
    return (
        <Group w="100vw" h="100vh" p={0}>
            <div style={{backgroundImage: 'url(./palette.png)', backgroundSize: 'cover', height: '100vh'}}>
                <Center w="100vw" h="100vh">
                    <Container w="40vw" my={40}>
                        <Group>
                            <Image src="./logo.png" alt="Logo" width={70} height={70} />
                            <Title ta="center" className={classes.title}>
                                Bienvenido!
                            </Title>
                        </Group>

                        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                            <TextInput label="Email" placeholder="tu@email.com" required />
                            <PasswordInput label="Contraseña" placeholder="Tu contraseña" required mt="md" />
                            <Button fullWidth mt="xl">
                                Iniciar sesión
                            </Button>
                        </Paper>
                    </Container>
                </Center>
            </div>
        </Group>
    );
}