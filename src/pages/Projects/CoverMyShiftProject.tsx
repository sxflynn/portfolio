import {
  IconBrandVue,
  IconCheck,
  IconCoffee,
  IconExternalLink,
  IconSql,
} from '@tabler/icons-react';
import { Button, Code, Container, Group, List, rem, Text, ThemeIcon, Title } from '@mantine/core';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import classes from './Projects.module.css';

const CoverMyShiftProject = () => {
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Cover My Shift</Title>
          <Text mt="md">
            A full stack web application designed to help teachers and school administrators manage
            teacher absences.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size="lg" radius="lg" variant="light">
                <IconCheck style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item
              icon={
                <ThemeIcon size="lg" radius="xl" variant="light">
                  <IconCoffee style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <b>Backend written in Java / Spring Boot</b> – Built using model-view-controller
              design. Implements <Code>JdbcTemplate</Code>, user authentication, <Code>JUnit</Code>{' '}
              testing, <Code>@RestController</Code>
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon size="lg" radius="xl" variant="light">
                  <IconSql style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <b>PostgreSQL database</b> – Created relational database in PostgreSQL, utilizing{' '}
              <Code>JOIN</Code> queries combine multiple tables, <Code>WHERE</Code> to filter
              results, and parameterized statements in <Code>JDBC</Code> database interactions.
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon size="lg" radius="xl" variant="light">
                  <IconBrandVue style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <b>Vue frontend</b> – Implemented <Code>Vuetify.js</Code> UI library,{' '}
              <Code>VueX</Code> for state management and dispatches, <Code>Axios</Code> for http
              requests. Built with Vite.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              component="a"
              href="http://www.github.com/sxflynn/covermyshift"
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
          src="https://assets.sxflynn.net/covermyshift-demo.mp4"
          src2x="https://assets.sxflynn.net/covermyshift-demo@2x.mp4"
          allowDimming
        />
      </div>
    </Container>
  );
};

export default CoverMyShiftProject;
