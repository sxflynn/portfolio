import { Container, Title, Button, Group, Text, List, ThemeIcon, rem, Code } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconCheck } from '@tabler/icons-react';
import classes from './Projects.module.css'

const Projects = () => {

    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        Upper Arlington School Board Election Simulator
                    </Title>
                    <Text c="dimmed" mt="md">
                        I built a Python web application to help an Upper Arlington voter predict who will win the 2023 School Board election.
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <b>Backend written in Python</b> – object oriented
                        </List.Item>
                        <List.Item>
                            <b>Served with FastAPI</b> – Election configuration and candidate information is validated with Pydantic models
                        </List.Item>
                        <List.Item>
                            <b>React frontend</b> – User preferences stored in <Code>LocalStorage</Code>. Soon: React Router, UI Library
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Link to="http://www.ballotbear.app">
                            <Button radius="xl" size="md" className={classes.control}>
                                Visit BallotBear.app
                            </Button>
                        </Link>
                        <Link to="http://www.github.com/sxflynn/electionsim">
                            <Button variant="default" radius="xl" size="md" className={classes.control}>
                                GitHub Source code
                            </Button>
                        </Link>
                    </Group>
                </div>
                {/* Image goes here */}
            </div>

        </Container>
    );
}

export default Projects;