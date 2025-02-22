import { Center, Container, Group, ScrollArea, Stack, Text, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconRobotFace, IconSend2 } from "@tabler/icons-react";
import { useState } from "react";
import { Message } from "../../components/message/Message";
import { Response } from "../../components/response/Response";
import { sendQuestion } from "../../api/chatBotApi";

type ChatbotMessageResponse = {
    message: string,
    response: string;
}

export const Chatbot = () => {
    const [messages, setMessages] = useState<ChatbotMessageResponse[]>([]);
    const auth = localStorage.getItem('access_token');

    const form = useForm({
        initialValues: {
            message: ""
        }
    });

    const sendMessage = (message: string) => {
        const oldMessages = [...messages];
        setMessages([...oldMessages, { message: message, response: "" }]);
        sendQuestion(message, auth).then(response => {
            console.log(response);
            setMessages([...oldMessages,
            {
                message: message,
                response: response === 'Error: \'final_answer\''
                    ? 'No entiendo tu pregunta, por favor vuelve a intentarlo'
                    : response
            }
            ]);
        });
        form.reset();
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
                            <Group align="left" justify="flex-end">
                                <Message message={message.message} />
                            </Group>
                            <Response response={message.response} />

                        </Stack>
                    ))}
                </ScrollArea>
            </Container>
            <Container h={"5vh"}>
                <Group>
                    <form onSubmit={form.onSubmit((e) => { sendMessage(e.message) })}>
                        <TextInput
                            disabled={messages.length != 0 && messages[messages.length - 1]?.response === ""}
                            value={form.values.message}
                            onChange={(e) => form.setFieldValue('message', e.currentTarget.value)}
                            radius={"lg"}
                            opacity={"100%"}
                            w={"60vw"}
                            rightSection={<IconSend2 />}
                            placeholder="¿En que puedo ayudarte?"
                        />
                    </form>
                </Group>
            </Container>
        </Stack>
    );
}