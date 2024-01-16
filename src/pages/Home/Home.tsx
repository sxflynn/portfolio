import {
  Text,
  Container,
  Group,
  Button,
  List,
  ListItem,
  ThemeIcon,
  rem,
  Anchor,
  Grid,
  Card,
  SimpleGrid,
} from "@mantine/core";
import classes from "./Home.module.css";
import {
  IconBackpack,
  IconBrandPython,
  IconBuildingSkyscraper,
  IconCheck,
  IconDownload,
  IconSql,
} from "@tabler/icons-react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container size="md" className={classes.inner}>
      <h1 className={classes.title}>
        Hi! 👋 I'm Stephen X. Flynn, a{" "}
        <Text
          component="span"
          variant="gradient"
          gradient={{ from: "red", to: "orange" }}
          inherit
        >
          full stack software developer
        </Text>{" "}
        based in Columbus, Ohio. <IconBuildingSkyscraper size={30} />
      </h1>
      <Text size="lg">
        I'm passionate about creating web applications with Java, Spring Boot,
        PostgreSQL, and JavaScript frameworks like Vue and React. I have built a
        strong foundation of teamwork, troubleshooting and innovation from my
        previous successful careers in classroom teaching and technology
        librarianship.
      </Text>

      <Group mt="lg">
        <Anchor href='https://pub-0d39c7af531f4456b2a0bb4b5d58306e.r2.dev/Stephen%20X%20Flynn%20resume%20portfolio.pdf'>
          <Button rightSection={<IconDownload size={16} />}>View Resume</Button>
        </Anchor>
        <Link to="/projects">
          <Button>View Projects</Button>
        </Link>
        <Link to="/about/">
          <Button>More About Me</Button>
        </Link>
      </Group>

      <Text size="lg" mt="xl" mb="md" fw="bold">
        Software Highlights
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
        <div>
          <Card shadow="sm" radius="lg" withBorder>
            <Grid>
              <Grid.Col className={classes.gridFix} span={{ base: 1, lg: 2 }}>
                <ThemeIcon variant="light">
                  {" "}
                  <IconBrandPython
                    style={{ width: rem(20), height: rem(20) }}
                    stroke={2}
                  />
                </ThemeIcon>
              </Grid.Col>
              <Grid.Col span={{ base: 10, lg: 10 }}>
                <Text>
                  Within two weeks, created an Upper Arlington school board
                  election predictor in Python, with a React frontend, deployed
                  to Vercel. Correctly predicted election.
                </Text>
              </Grid.Col>
            </Grid>
          </Card>
        </div>

        <div>
          <Card shadow="sm" padding="md" radius="lg" withBorder>
            <Grid>
              <Grid.Col className={classes.gridFix} span={{ base: 1, lg: 2 }}>
                <ThemeIcon variant="light">
                  {" "}
                  <IconSql
                    style={{ width: rem(20), height: rem(20) }}
                    stroke={2}
                  />
                </ThemeIcon>
              </Grid.Col>
              <Grid.Col span={{ base: 10, lg: 10 }}>
                <Text>
                  Within two weeks, led a team to create a web application to
                  help teachers cover their shifts, using Java, PostgreSQL,
                  Vue.js, in an Agile work environment
                </Text>
              </Grid.Col>
            </Grid>
          </Card>
        </div>

        <div>
          <Card shadow="sm" padding="md" radius="lg" withBorder>
            <Grid>
              <Grid.Col className={classes.gridFix} span={{ base: 1, lg: 2 }}>
                <ThemeIcon variant="light">
                  {" "}
                  <IconBackpack
                    style={{ width: rem(20), height: rem(20) }}
                    stroke={2}
                  />
                </ThemeIcon>
              </Grid.Col>
              <Grid.Col span={{ base: 10, lg: 10 }}>
                <Text>
                  Graduated from intensive 3 month software development
                  bootcamp, learning object oriented programming, full stack
                  development through 800 hours of instruction
                </Text>
              </Grid.Col>
            </Grid>
          </Card>
        </div>
      </SimpleGrid>
      <Text size="lg" mt="xl" mb="md" fw="bold">
        Career Highlights
      </Text>

      <List
        spacing="sm"
        size="md"
        icon={
          <ThemeIcon size={"md"} radius="lg" variant="light">
            <IconCheck style={{ width: rem(20), height: rem(20) }} stroke={2} />
          </ThemeIcon>
        }
      >
        <ListItem>Tech Elevator full stack coding boot camp graduate</ListItem>
        <ListItem>
          7 years middle history school teacher, promoted to Technology Chair and Grade
          Level Chair
        </ListItem>
        <ListItem>5 years as Emerging Technologies Librarian</ListItem>
        <ListItem>
          Master's Degrees in Computer Education Technology, and Library
          Information Science
        </ListItem>
      </List>
    </Container>
  );
};
export default Home;
