import { RadarChart } from "@mantine/charts";
import { Center, Container, Group, List, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";

export const Profile = () => {
    const [data] = useState([
        {
            emotion: 'Felicidad',
            score: 1
        },
        {
            emotion: 'Tristeza',
            score: 2
        },
        {
            emotion: 'Enojo',
            score: 3
        },
        {
            emotion: 'Miedo',
            score: 2
        },
        {
            emotion: 'Sorpresa',
            score: 3
        }
    ])
    return (
        <Stack w={"80vw"} h={"85vh"}>
            <Container>
                <Center>
                    <Title>Mi perfil emocional</Title>
                </Center>
            </Container>
            <RadarChart
                h={"50vh"}
                data={data}
                dataKey="emotion"
                withPolarRadiusAxis
                series={[{ name: 'score', color: 'blue.4', opacity: 0.2 }]}
            />
            <List>
                <List.Item>
                    <Group>
                        <Text fw={"bold"} size="lg">Neuroticismo:</Text>
                        <Text>Descriptción del estado emocional</Text>
                    </Group>
                </List.Item>
                <List.Item>
                    <Group>
                        <Text fw={"bold"} size="lg">Apertura a la experiencia:</Text>
                        <Text>Descriptción del estado emocional</Text>
                    </Group>
                </List.Item>
                <List.Item>
                    <Group>
                        <Text fw={"bold"} size="lg">Responsabilidad:</Text>
                        <Text>Descriptción del estado emocional</Text>
                    </Group>
                </List.Item>
                <List.Item>
                    <Group>
                        <Text fw={"bold"} size="lg">Extroversión:</Text>
                        <Text>Descriptción del estado emocional</Text>
                    </Group>
                </List.Item>
                <List.Item>
                    <Group>
                        <Text fw={"bold"} size="lg">Amabilidad:</Text>
                        <Text>Descriptción del estado emocional</Text>
                    </Group>
                </List.Item>
            </List>
        </Stack>
    );
}