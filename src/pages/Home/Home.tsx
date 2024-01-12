import {
  Text,
  Container,
  Group,
  Button,
  List,
  ListItem,
  ThemeIcon,
  rem,
} from "@mantine/core";
import classes from "./Home.module.css";
import { IconCheck } from "@tabler/icons-react";

const Home = () => {
  return (
    <Container size={750} className={classes.inner}>
      <h1 className={classes.title}>
        Hi! I'm Stephen X. Flynn, a <br />{" "}
        <Text
          component="span"
          variant="gradient"
          gradient={{ from: "red", to: "orange" }}
          inherit
        >
          full stack software developer
        </Text>{" "}
        based in Columbus, Ohio
      </h1>
      {/* <Text size="lg" fw="bold">
        Write a subtitle sentence here about myself
        </Text> */}
      <Text size="lg" mt="md" mb="md">
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
          7 years middle school teacher, promoted to Technology Chair and Grade Level Chair
        </ListItem>
        <ListItem>5 year career as Emerging Technologies Librarian</ListItem>
        <ListItem>
          Master's Degrees in Computer Education Technology, and Information
          Science
        </ListItem>
      </List>
      <Group mt="md">
        <Button>Resume</Button>
        <Button>Thing 2</Button>
      </Group>
    </Container>
  );
};
export default Home;
