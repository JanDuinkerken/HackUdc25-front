import { Center, Container, Group, Input, ScrollArea, Stack, Text, Title } from "@mantine/core";
import { IconRobotFace  , IconSend2 } from "@tabler/icons-react";

export const Chatbot = () => {
    return (
        <Stack w={"80vw"} h={"85vh"}>
            <Container h={"80vh"}>
                <ScrollArea h={"100%"}>
                    <Center>
                        <Group>
                            <IconRobotFace size={"5vh"} />
                            <Title>ChatBot</Title>
                        </Group>
                    </Center>
                    <Text c={"gray"}>
                        ¡Hola! Soy un chatbot, ¿en qué puedo ayudarte?
                    </Text>
                </ScrollArea>
            </Container>
            <Container h={"5vh"}>
                <Group>
                    <Input radius={"lg"} opacity={"100%"} w={"60vw"} rightSection={<IconSend2/>} placeholder="¿En que podemos ayudarte?" />
                </Group>
            </Container>
        </Stack>
    );
}