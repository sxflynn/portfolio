import { Container, Title, Button, Group, Text, List, ThemeIcon, rem, Code } from '@mantine/core';
import { IconCheck, IconBrandPython, IconApi, IconBrandReact, IconExternalLink } from '@tabler/icons-react';
import classes from './Projects.module.css'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const BallotBearProject = () => {


    return (
        <Container size="lg">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        Upper Arlington School Board Election Simulator
                    </Title>
                    <Text mt="md">
                        React/Python web application to help an Upper Arlington voter predict who will win the November 2023 School Board election.
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={"lg"} radius="lg" variant="light">
                                <IconCheck style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
                            </ThemeIcon>
                        }
                    >
                        <List.Item
                            icon={
                                <ThemeIcon size={"lg"} radius="xl" variant="light">
                                    <IconBrandPython style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
                                </ThemeIcon>
                            }>
                            <b>Prediction engine written in Python</b> – Business logic abstracted from implementation, allowing election engine to run both as a CLI or a web app
                        </List.Item>
                        <List.Item
                            icon={
                                <ThemeIcon size={"lg"} radius="xl" variant="light">
                                    <IconApi style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
                                </ThemeIcon>
                            }>
                            <b>Served with FastAPI</b> – Election configuration and candidate information is validated with Pydantic models
                        </List.Item>
                        <List.Item
                            icon={
                                <ThemeIcon size={"lg"} radius="xl" variant="light">
                                    <IconBrandReact style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
                                </ThemeIcon>
                            }>
                            <b>React frontend</b> – User preferences stored in <Code>LocalStorage</Code>. Built with Vite.
                        </List.Item>
                    </List>

                    <Group mt={30}>
                            <Button
                                component="a"
                                href="http://www.ballotbear.app"
                                target="_blank"
                                radius="xl"
                                size="md"
                                className={classes.control}
                                rightSection={<IconExternalLink />}
                            >
                                Visit BallotBear.app
                            </Button>
                            <Button
                                component="a"
                                href="http://www.github.com/sxflynn/electionsim"
                                target="_blank"
                                variant="default"
                                radius="xl"
                                size="md"
                                className={classes.control}
                                rightSection={<IconExternalLink />}
                            >
                                GitHub repo
                            </Button>
                    </Group>
                </div>
                <VideoPlayer 
                src='https://assets.sxflynn.net/ballotbear-demo.mp4'
                src2x='https://assets.sxflynn.net/ballotbear-demo@2x.mp4'
                allowDimming={true}
                />
        </div>

        </Container >
    );
}

export default BallotBearProject;