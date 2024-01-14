import { useState, useEffect } from "react";
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
} from "@mantine/core";
import classes from "./Home.module.css";
import { IconBuildingSkyscraper, IconCheck, IconDownload } from "@tabler/icons-react";

import StephenXFlynnResume from "../../assets/StephenXFlynnResume.pdf";
import { Link } from "react-router-dom";

const FlipText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skills = ["Java", "full stack", "React", "Python"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return <span className={classes.changeText}>{skills[currentIndex]}</span>;
};

const Home = () => {
  return (
    <Container size="md" className={classes.inner}>
      <h1 className={classes.title}>
        Hi! 👋 I'm Stephen X. Flynn, a {" "}
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
        I'm passionate about creating web applications
        with Java, Spring Boot, PostgreSQL, and JavaScript frameworks like Vue
        and React. I have built a strong foundation of teamwork, troubleshooting
        and innovation from my previous successful careers in classroom teaching
        and technology librarianship.
      </Text>
      <Group mt="lg" mb="lg">
        <Anchor href={StephenXFlynnResume}>
          <Button rightSection={<IconDownload size={16} />}>View Resume</Button>
        </Anchor>
        <Link to="/projects">
          <Button>View Projects</Button>
        </Link>
        <Link to="/about/">
          <Button>More About Me</Button>
        </Link>
      </Group>

      <Text size="lg" mt="md" mb="md" fw="bold">
        Software Highlights
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
        <ListItem>
          Within two weeks, created a local election predictor in Python, with a React frontend,
          deployed to Vercel
        </ListItem>
        <ListItem>
          Within two weeks, led a team to create a web application to help teachers cover their
          shifts, using Java, PostgreSQL, Vue.js, in an Agile work environment
        </ListItem>
        <ListItem>
          Graduated from intensive 3 month software development bootcamp,
          learning object oriented development, test driven development
        </ListItem>
      </List>

      <Text size="lg" mt="md" mb="md" fw="bold">
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
        <ListItem>Tech Elevator full stack bootcamp graduate</ListItem>
        <ListItem>
          7 years middle school teacher, promoted to Technology Chair and Grade
          Level Chair
        </ListItem>
        <ListItem>5 year career as Emerging Technologies Librarian</ListItem>
        <ListItem>
          Master's Degrees in Computer Education Technology, and Library
          Information Science
        </ListItem>
      </List>
    </Container>
  );
};
export default Home;
