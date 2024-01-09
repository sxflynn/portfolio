import { Container, Title, Button, Group, Text, List, ThemeIcon, rem, Code, Image } from '@mantine/core';
import { IconCheck, IconBrandPython, IconApi, IconBrandReact, IconExternalLink } from '@tabler/icons-react';
import classes from './Projects.module.css'
import ExternalLink from '../../components/ExternalLink';
import ballotBearDemo from '../../assets/ballotbear-demo.mp4';

const BallotBearProject = () => {

    return (
        <Container size="lg">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        Upper Arlington School Board Election Simulator
                    </Title>
                    <Text c="dimmed" mt="md">
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
                        <ExternalLink to="http://www.ballotbear.app">
                            <Button 
                            radius="xl" 
                            size="md" 
                            className={classes.control} 
                            rightSection={<IconExternalLink/>}
                            >
                                Visit BallotBear.app
                            </Button>
                        </ExternalLink>
                        <ExternalLink to="http://www.github.com/sxflynn/electionsim">
                            <Button 
                            variant="default" 
                            radius="xl" 
                            size="md" 
                            className={classes.control}
                            rightSection={<IconExternalLink/>}
                            >
                                GitHub repo
                            </Button>
                        </ExternalLink>
                    </Group>
                </div>

                <div className={classes.video}>
                    <video autoPlay muted loop playsInline>
                        <source src={ballotBearDemo} type="video/mp4"/>
                    </video>


                </div>

            </div>

        </Container>
    );
}

export default BallotBearProject;