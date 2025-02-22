import { Center, Container, Group, ScrollArea, Stack, Text, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconRobotFace, IconSend2 } from "@tabler/icons-react";
import { useState } from "react";
import { Message } from "../../components/message/Message";
import { Response } from "../../components/response/Response";

type ChatbotMessageResponse = {
    message: string,
    response: string;
}

export const Chatbot = () => {
    const [messages, setMessages] = useState<ChatbotMessageResponse[]>([]);

    const form = useForm({
        initialValues: {
            message: ""
        }
    });

    const sendMessage = (message: string) => {
        setMessages([...messages, {
            message: message,
            response: ""
        }]);
        form.reset();
        console.log(messages);
    }

    return (
        <Stack w={"80vw"} h={"85vh"}>
            <Container h={"80vh"}>
                <ScrollArea h={"100%"} w={"60vw"}>
                    <Center>
                        <Group>
                            <IconRobotFace size={"5vh"} />
                            <Title>ChatBot</Title>
                        </Group>
                    </Center>
                    <Center>
                        <Text c={"gray"}>
                            ¡Hola! Soy un chatbot, ¿en qué puedo ayudarte?
                        </Text>
                    </Center>
                    {messages.map((message, index) => (
                        <Stack key={index} gap={"1vh"}>
                            <Message message={message.message} />
                            <Group align="left" justify="flex-end">
                                <Response response={message.response} />
                            </Group>
                        </Stack>
                    ))}
                </ScrollArea>
            </Container>
            <Container h={"5vh"}>
                <Group>
                    <form onSubmit={form.onSubmit((e) => { sendMessage(e.message) })}>
                        <TextInput
                            value={form.values.message}
                            onChange={(e) => form.setFieldValue('message', e.currentTarget.value)}
                            radius={"lg"}
                            opacity={"100%"}
                            w={"60vw"}
                            rightSection={<IconSend2 />}
                            placeholder="¿En que podemos ayudarte?"
                        />
                    </form>
                </Group>
            </Container>
        </Stack>
    );
}