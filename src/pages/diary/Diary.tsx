import { Button, Card, Center, Container, Flex, Stack, Textarea, Title } from "@mantine/core";
import { useState } from "react";
import { Postit } from "../../components/postit/Postit";

export type Color = {
    fg: string;
    bg: string;
}

type PostitData = {
    day: string;
    text: string;
    emotion: string;
    emotion_eng: string;
}

const POSITIVE_COLOR: Color = { fg: "#5DFDCB", bg: "#82FFD7" };
const NEGATIVE_COLOR: Color = { fg: "#7CC6FE", bg: "blue.1" };
const NEUTRAL_COLOR: Color = { fg: "#A9ABE6", bg: "#C5C7F3" };

const POSITIVE_EMOTIONS: string[] = [
    "Admiration",
    "Amusement",
    "Approval",
    "Caring",
    "Curiosity",
    "Desire",
    "Excitement",
    "Gratitude",
    "Joy",
    "Love",
    "Optimism",
    "Pride",
    "Relief"
];
const NEGATIVE_EMOTIONS: string[] = [
    "Anger",
    "Annoyance",
    "Disappointment",
    "Disapproval",
    "Disgust",
    "Embarrassment",
    "Fear",
    "Grief",
    "Nervousness",
    "Remorse",
    "Sadness"
];

const decideColor = (emotion: string): Color => {
    if (POSITIVE_EMOTIONS.includes(emotion)) {
        return POSITIVE_COLOR;
    } else if (NEGATIVE_EMOTIONS.includes(emotion)) {
        return NEGATIVE_COLOR;
    } else {
        return NEUTRAL_COLOR;
    }
}

export const Diary = () => {
    const [postits] = useState<PostitData[]>([{
        day: "Lunes",
        text: "Hoy me siento feliz",
        emotion: "Felicidad",
        emotion_eng: "Joy"
    },
    {
        day: "Martes",
        text: "Hoy me siento triste",
        emotion: "Tristeza",
        emotion_eng: "Sadness"
    },
    {
        day: "Miércoles",
        text: "Hoy me siento enojado",
        emotion: "Enojo",
        emotion_eng: "Anger"
    }]);

    return (
        <Stack w={"80vw"} h={"85vh"} pl={"2vw"}>
            <Container w={"80vw"} h={"10vh"}>
                <Center>
                    <Title> Mi diario emocional</Title>
                </Center>
            </Container>
            <Flex w="80vw" gap="lg" wrap="wrap" rowGap="md">
                {postits.map((postit, index) => (
                    <Postit
                        key={index}
                        day={postit.day}
                        text={postit.text}
                        emotion={postit.emotion}
                        color={decideColor(postit.emotion_eng)} />
                ))}
                <Card
                    withBorder
                    padding="lg"
                    h={"35vh"}
                    w={"20vw"}
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