import {
  Text,
  Container,
  Group,
  Button,
  List,
  ListItem,
  ThemeIcon,
  rem,
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
        based in Columbus, Ohio <IconBuildingSkyscraper size={30} />
      </h1>
      <Text size="lg">
        I'm passionate about creating web applications with Java, Spring Boot,
        PostgreSQL, and JavaScript frameworks like Vue and React. I have built a
        strong foundation of teamwork, troubleshooting and innovation from my
        previous successful careers in classroom teaching and technology
        librarianship.
      </Text>
      <Group mt="lg">
        <Button
          component="a"
          href="https://assets.sxflynn.net/Stephen%20X%20Flynn%20resume%20portfolio.pdf"
          target="_blank"
          rightSection={<IconDownload size={16} />}
        >
          View Resume
        </Button>
        <Button component={Link} to="/projects">
          View Projects
        </Button>
          <Button component={Link} to="/about">More About Me</Button>
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
                  Created a web application to correctly predict the Upper
                  Arlington school board election, built in Python, FastAPI,
                  React, and deployed to Vercel
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
                  Led a team to create a web application to help teachers cover
                  their shifts, using Java, Spring Boot, PostgreSQL, Vue, using
                  test-driven development
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
                  Graduated from 14 week software development bootcamp —
                  emphasis on pair programming, Agile methodology and
                  test-driven development
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
          Seven years middle history school teacher, promoted to Technology
          Chair and Grade Level Chair
        </ListItem>
        <ListItem>Five years as Emerging Technologies Librarian</ListItem>
        <ListItem>
          Master's Degrees in Computer Education Technology, and Library
          Information Science
        </ListItem>
      </List>
    </Container>
  );
};
export default Home;
