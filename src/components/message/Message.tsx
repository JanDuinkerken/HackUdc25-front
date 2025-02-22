import { Paper, Text } from "@mantine/core";

interface MessageProps {
    message: string;
}
export const Message = ({ message }: MessageProps) => {
    return (
        <Paper p={"sm"} pl={"2vw"} m={"sm"} radius={"xl"} w={"40vw"} bg={"blue.1"}>
            <Text>
                {message}
            </Text>
        </Paper>
    );
}