import { Button, Card, Center, Container, Flex, Stack, Textarea, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { Postit } from "../../components/postit/Postit";
import { diaryHistory } from "../../api/diaryHistory";
import { submitPostit } from "../../api/submitPostit";
import { useForm } from "@mantine/form";

export type Color = {
    fg: string;
    bg: string;
}

type PostitData = {
    date: string;
    text: string;
    emotion_idioma: string;
    emotion_estandar: string;
}

const POSITIVE_COLOR: Color = { fg: "#5DFDCB", bg: "#82FFD7" };
const NEGATIVE_COLOR: Color = { fg: "#7CC6FE", bg: "blue.1" };
const NEUTRAL_COLOR: Color = { fg: "#A9ABE6", bg: "#C5C7F3" };

const POSITIVE_EMOTIONS: string[] = [
    "admiration",
    "amusement",
    "approval",
    "caring",
    "curiosity",
    "desire",
    "excitement",
    "gratitude",
    "joy",
    "love",
    "optimism",
    "pride",
    "relief"
];
const NEGATIVE_EMOTIONS: string[] = [
    "anger",
    "annoyance",
    "disappointment",
    "disapproval",
    "disgust",
    "embarrassment",
    "fear",
    "grief",
    "nervousness",
    "remorse",
    "sadness"
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
    const [postits, setPostits] = useState<PostitData[]>([]);
    const form = useForm({
        initialValues: {
            text: ""
        }
    });

    const auth = localStorage.getItem("access_token");

    useEffect(() => {
        diaryHistory(auth).then(response => {
            console.log(response);
            setPostits([...response]);
        });
    }, [])

    const writePostit = (text: string) => {
        console.log(text);
        submitPostit(text, auth).then(response => {
            if (response) {
                diaryHistory(auth).then(response => {
                    console.log(response);
                    setPostits([...response]);
                });
            }
        });
    }

    return (
        <Stack w={"80vw"} h={"85vh"} pl={"2vw"}>
            <Container w={"80vw"} h={"10vh"}>
                <Center>
                    <Title> Mi diario emocional</Title>
                </Center>
            </Container>
            <Flex w="80vw" gap="lg" wrap="wrap" rowGap="md">
                {postits.length > 0
                    ? postits.map((postit, index) => (
                        <Postit
                            key={index}
                            day={postit.date}
                            text={postit.text}
                            emotion={postit.emotion_idioma}
                            color={decideColor(postit.emotion_estandar)} />
                    ))
                    : <></>
                }
                {
                    postits.length > 0
                        && postits[postits.length - 1].date === new Date().toISOString().slice(0, 10)
                        ? <></>
                        : <Card
                            withBorder
                            padding="lg"
                            h={"40vh"}
                            w={"20vw"}
                        >
                            <Card.Section>
                                <Container p="md" >
                                    <Title>Hoy me encuentro ...</Title>
                                </Container>
                            </Card.Section>
                            <form onSubmit={form.onSubmit((e) => { writePostit(e.text) })}>
                                <Textarea
                                    value={form.values.text}
                                    onChange={(e) => form.setFieldValue('text', e.currentTarget.value)}
                                    autosize
                                    minRows={7}
                                    maxRows={7}
                                    h={"20vh"}
                                    placeholder="Escribe aquí tus emociones"
                                />
                                <Button
                                    color="dark"
                                    mt="sm"
                                    w={"5vw"}
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </form>
                        </Card>
                }

            </Flex>
        </Stack>
    );
}