import { RadarChart } from "@mantine/charts";
import { Center, Container, Flex, Group, List, Stack, Text, Title, Tooltip } from "@mantine/core";
import { useEffect, useState } from "react";
import { getProfile } from "../../api/getProfile";
import { IconInfoCircle } from "@tabler/icons-react";

type DataType = {
    trait: string;
    score: number;
    description: string;
}

export const Profile = () => {
    const [data, setData] = useState<DataType[]>([])
    const auth = localStorage.getItem('access_token');

    useEffect(() => {
        getProfile(auth).then(response => {
            console.log(response);
            setData(response);
        });
    }, [])

    return (
        <Stack w={"80vw"} h={"85vh"} pl={"2vw"} mt={"2vh"}>
            <Container>
                <Center>
                    <Title>Mi perfil emocional</Title>
                </Center>
            </Container>
            <Flex align={"left"} justify={"flex-start"} w={"80vw"} mt={"8vh"}>
                <RadarChart
                    h={"60vh"}
                    w={"50vw"}
                    data={data}
                    dataKey="trait"
                    withPolarRadiusAxis
                    series={[{ name: 'score', color: 'blue.4', opacity: 0.2 }]}
                />
                <List mt={"15vh"}>
                    {
                        data.map((item, index) => (
                            <List.Item key={index}>
                                <Text fw="bold">{item.trait}:</Text>
                                <Group gap={"8px"}>
                                    <Text>Tu puntuación en esta categoría del Big Five es</Text>
                                    <Text fw="bold">{item.score}</Text>
                                    <Group mb={4}>
                                        <Tooltip
                                            label={item.description}
                                            position="top"
                                            maw={"25vw"}
                                            multiline
                                            transitionProps={{ duration: 200 }}
                                            withArrow
                                        >
                                            <IconInfoCircle />
                                        </Tooltip>
                                    </Group>
                                </Group>
                            </List.Item>
                        ))
                    }
                </List>
            </Flex>
        </Stack>
    );
}