import { Loader, Paper, Text } from "@mantine/core";

interface ResponseProps {
    response: string;
}
export const Response = ({ response }: ResponseProps) => {
    return (
        <Paper p={"sm"} pl={"2vw"} m={"sm"} radius={"xl"} w={"40vw"} bg={"#5DFDCB"}>
            {response === ""
                ?
                <Loader color={"gray"} type="dots" />

                : <Text>
                    {response}
                </Text>
            }
        </Paper>
    );
}