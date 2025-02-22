import { Card, Group, Paper, Text, Title } from "@mantine/core";
import { Color } from "../../pages/diary/Diary";

interface PostitPromps {
    day: string;
    text: string;
    emotion: string;
    color: Color;
}

export const Postit = ({ day, text, emotion, color }: PostitPromps) => {
    return (
        <Card
            bg={color.fg}
            shadow="xs"
            padding="md"
            radius="sm"
            h={"40vh"}
            w={"20vw"}
        >
            <Card.Section p={"sm"}>
                <Title>{day}</Title>
            </Card.Section>
            <Card.Section p={"md"} pt={0}>
                <Paper h={"20vh"} bg={color.bg} shadow="none" p={"md"}>
                    {text}
                </Paper>
            </Card.Section>
            <Card.Section py={"sm"} p={"md"}>
                <Group gap={0}>
                    <Text fw="bold">Tu emoción predominante durante este día ha sido:</Text>
                    <Text>{emotion}</Text>
                </Group>
            </Card.Section>
        </Card>
    )
}