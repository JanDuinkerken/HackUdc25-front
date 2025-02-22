import { Button, Card, Center, Container, Flex, Stack, Textarea, Title } from "@mantine/core";

export const Diary = () => {
    return (
        <Stack w={"80vw"} h={"85vh"}>
            <Container w={"80vw"} h={"10vh"}>
                <Center>
                    <Title> Mi diario emocional</Title>
                </Center>
            </Container>
            <Flex w={"80vw"}>
                <Card
                    withBorder
                    padding="lg"
                    h={"35vh"}
                >
                    <Card.Section>
                        <Container p="md" >
                            <Title>Hoy me encuentro ...</Title>
                        </Container>
                    </Card.Section>
                    <Textarea autosize minRows={7} maxRows={7} h={"20vh"} placeholder="Escribe aquí tus emociones" />
                    <Button color="dark" mt="sm" w={"5vw"}>Submit</Button>
                </Card>
            </Flex>
        </Stack>
    );
}