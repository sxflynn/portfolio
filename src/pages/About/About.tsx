import { CodeHighlightTabs } from "@mantine/code-highlight";
import {
  Anchor,
  Container,
  Group,
  List,
  ListItem,
  Text,
  Title,
  Image,
  Code,
  Card,
  Space,
} from "@mantine/core";
import {
  IconApi,
  IconBrandJavascript,
  IconBrandPython,
  IconCloudComputing,
  IconCoffee,
  IconDashboard,
  IconFileSpreadsheet,
  IconFileTypeJsx,
} from "@tabler/icons-react";
import { TableOfContentsFloating } from "../../components/TableOfContents/TableOfContents";
import codeSnippets from "./codeSnippets";

const jsIcon = <IconBrandJavascript />;
const excelIcon = <IconFileSpreadsheet />;
const pythonIcon = <IconBrandPython />;
const cloudIcon = <IconCloudComputing />;
const jsxIcon = <IconFileTypeJsx />;
const coffeeIcon = <IconCoffee />;

const About = () => {

  const tocLinks = [
    { label: "Intro", link: "#intro", order: 1 },
    { label: "Michigan - 2010", link: "#michigan", order: 1 },
    { label: "Wooster - 2011", link: "#wooster", order: 1 },
    { label: "Teachers - 2016", link: "#teachers", order: 1 },
    { label: "Elections - 2021", link: "#elections", order: 1 },
    { label: "Tech Elevator - 2023", link: "#techelevator", order: 1 },
    { label: "What's Next?", link: "#whatsnext", order: 1 },
  ];

  return (
    <>
      <Container>
        <TableOfContentsFloating
          links={tocLinks}
        />
      </Container>
      <Container size="sm" mt="xl" mb="xl">
        <Title id="intro" order={1}>
          My Software Development Journey
        </Title>
        <Text size="lg" mt="lg">
          Software development is the latest chapter in my professional goal to
          help solve real-world problems with technology. My coding life started
          with calculating pi in my introductory computer science course at
          Lawrence University. 14 years, two careers and two masters degrees
          later, I'm embarking on a journey to build tools, troubleshoot, and
          create new efficiencies for the software community.
        </Text>
        <CodeHighlightTabs
          mt="lg"
          code={[
            {
              code: codeSnippets.calculatePi,
              language: "java",
              fileName: "calculatePi.java",
              icon: coffeeIcon,
            },
          ]}
        />

        <Title id="michigan"  mt="lg" order={3}>
          University of Michigan: Plain Language Medical Dictionary — 2010
        </Title>
        <Text size="lg">
          I worked a reference desk student job at Michigan's Health Science
          Library, helping patrons find research resources. While I enjoyed
          helping students power up their research, my supervisors recognized my
          strong affinity for coding and assigned me a project to build a mobile
          web version of a pre-existing medical dictionary. In addition to
          JQuery and HTML5, I taught myself{" "}
          <Anchor href="https://github.com/tidev/titanium-sdk" target="_blank">
            Appcelerator's Titanium Mobile
          </Anchor>{" "}
          which was the React Native / Flutter of 2010. It let you use a
          JavaScript API to render native iOS UI widgets into a compiled XCode
          project. I eventually deployed the app to the iOS App Store under
          Michigan's official account.
        </Text>

        <Group mt="lg" justify="center">
          <Image maw="40%" src="https://assets.sxflynn.net/plainmed-left.png" />
          <Image
            maw="40%"
            src="https://assets.sxflynn.net/plainmed-right.png"
          />
        </Group>

        <CodeHighlightTabs
          code={[
            {
              code: codeSnippets.plainMedCode,
              language: "js",
              fileName: "app.js",
              icon: jsIcon,
            },
          ]}
        />
        <Title id="wooster" mt="lg" order={3}>
          Kickstarting Institutional Repositories — 2011-2013
        </Title>
        <Text size="lg">
          In my new career as Emerging Technologies Librarian, I used my coding
          skills to automate workflows for institutional repositories. The
          College of Wooster had recently deployed a DSpace repository needed
          high quality content. I successfully led the effort to create a
          digital submission requirement for undergraduate capstone projects
          that would find a permanent digital home in our repository. Next, we
          began to recruit faculty members to upload their research to promote
          open access publishing. Many journals allow their authors to publish
          their peer reviewed drafts (aka post-prints) to institutional
          repositories, which could be low-hanging fruit in recruiting content.
          The challenge is figuring out which journals do that, and which
          faculty publish in those journals. I authored a custom Google Sheet
          function in JavaScript that streamlined identifying Wooster faculty
          publications in journals with friendly open access policies, allowing
          us to take a 12 hour project and automate it in 15 minutes. I
          published my findings in Code4Lib and presented a poster at the
          Association of College & Research Libraries conference.
        </Text>

        <CodeHighlightTabs
          mt="lg"
          code={[
            {
              fileName: "SHERPARoMEOScript.js",
              code: codeSnippets.kickstartCode,
              language: "js",
              icon: jsIcon,
            },
          ]}
        />

        <Title id="teachers" mt="lg" order={3}>
          Teachers Are So Busy! — 2016-2023
        </Title>
        <Text size="lg">
          I wanted to pursue a passion for teaching, and took a position as an
          8th Grade History teacher in Columbus. When I started, almost every
          major workflow was paper-based. Absent student for a test? — paper
          ticket goes into folder. Major comprehensive exams? — printed on
          paper, scanned and fed through software to produce reports. Paper has
          some wonderful use cases, but this definitely wasn't one of them. I
          quickly worked to digitize many school processes, and became a go-to
          resource for other teachers wanting to do the same. I spearheaded the
          adoption of{" "}
          <Anchor href="http://www.edulastic.com" target="_blank">
            Edulastic
          </Anchor>
          , so all quizzes, tests and comprehensive exams could be completed on
          Chromebooks with automatic grading. I created Google Sheets with query
          formulas so each grade level could keep a central spreadsheet to track
          students missing tests.
        </Text>
        <Text size="lg" mt="lg">
          During remote learning, there arose a heightened imperative for
          teachers to regularly contact families to report on their student's
          progress. I created a Google spreadsheet that used a model to predict
          a student's daily academic activity, and when their behavior was not
          as expected, used that occasion to start a dialog with the family. I
          had some straight A students, which the model would predict a {">"}95%
          probability of completing their daily work. If one of those students
          didn't turn in their work, the model would alert me to the unexpected
          behavior, allowing me to make my communication home much more targeted
          and based on real-time data.
        </Text>

        <CodeHighlightTabs
          mt="lg"
          code={[
            {
              code: codeSnippets.schoolProbabilityCode,
              language: "js",
              fileName: "probabilityEngine.gsheets",
              icon: excelIcon,
            },
            {
              code: codeSnippets.schoolAlertModelCode,
              language: "js",
              fileName: "alertModel.gsheets",
              icon: excelIcon,
            },
          ]}
        />
        <Card withBorder mt="sm">
          <Text>
            This model assigns a probability to a student completing today's
            work by weighing yesterday and 4 day's ago completion at 40% each,
            and their previous trimester average at 20%
          </Text>
        </Card>
        <Title id="elections" mt="lg" order={3}>
          Local Elections Needed More Attention — 2021 - 2023
        </Title>
        <Text size="lg">
          In 2021 Upper Arlington's contentious school board election received
          increased attention due to political polarization. Voters wanted to
          know if certain candidates were likely to win. I wanted a framework
          for discussing that possibility, so I created a Python script called{" "}
          <Code>election.py</Code> that generated hundreds of election
          simulations. If you gave it the list of candidates and the likelihood
          of Democrats, Republicans and Independents voting for each one, it
          told you who was likely to win the election. In 2021,{" "}
          <Code>election.py</Code> correctly predicted the two school board
          election winners.
        </Text>
        <CodeHighlightTabs
          mt="lg"
          code={[
            {
              code: codeSnippets.electionOriginal,
              language: "py",
              fileName: "election.py",
              icon: pythonIcon,
            },
          ]}
        />
        <Text size="lg" mt="lg" >
          I revived <Code>election.py</Code> for the 2023 school board election,
          but wanted to create a tool that was web-based so others could make
          their own predictions. I set a deadline of the Friday before the
          November 7 election so that voters could use it and give feedback.
          Within a 2-3 weeks I worked extremely hard on these deliverables:
        </Text>
        <List type="ordered" withPadding mt="sm" size="lg">
          <ListItem icon={<IconBrandPython />}>
            Refactored <Code>election.py</Code> from a script with global
            variables into fully encapsulated object oriented code with classes.
          </ListItem>
          <ListItem icon={<IconApi />}>
            Implemented FastAPI to execute the <Code>election.py</Code> engine
            through a RESTful API
          </ListItem>
          <ListItem icon={<IconBrandJavascript />}>
            Created a lightweight React front end interface
          </ListItem>
          <ListItem icon={<IconCloudComputing />}>
            Deployed the FastAPI application as a serverless function on Fly.io
          </ListItem>
          <ListItem icon={<IconDashboard />}>
            Picked a name “Ballot Bear”, bought a domain and deployed the React
            frontend to Vercel with both a 'staging' and 'production' branch to
            mimic CI/CD practices.
          </ListItem>
        </List>
        <CodeHighlightTabs
          mt="lg"
          code={[
            {
              code: codeSnippets.electionMain,
              language: "py",
              fileName: "main.py",
              icon: cloudIcon,
            },
            {
              code: codeSnippets.appJsx,
              language: "jsx",
              fileName: "app.jsx",
              icon: jsxIcon,
            },
          ]}
        />
        <Text size="lg" mt="lg" >
          I publicized the app within the Upper Arlington community and received
          over 200 visitors over the weekend before the election. My prediction
          model ended up correctly predicting 2 out of 3 of the eventual
          winners.
        </Text>
        <Title id="techelevator" mt="lg" order={3}>
          It's time to finally become a software developer — late 2023
        </Title>
        <Text size="lg">
          The move to pursue a software developer career felt like the logical
          next step after over a decade of working in fast paced environments,
          collaborating in teams, mentoring others, and using code to automate
          and enhance workflows. I decided to enroll in Tech Elevator, a full
          time in-person full stack software development bootcamp on Ohio
          State's west campus, where I became immersed in objective oriented
          programming, RESTful API design, model view controller design and
          test-driven development. I learned Java, Spring Boot, PostgreSQL, CSS,
          and JavaScript / Vue, and also applied what I learned to Python OOP
          structures and React for the `election.py` side project. Tech Elevator
          also exposes its students to pair programming and using Agile to work
          through a two week final capstone where scrum masters and product
          managers scrutinize your work and give actionable feedback.
        </Text>
        <Image
          mt="lg"
          src="https://assets.sxflynn.net/covermyshiftdashboard.jpeg"
        />
        <Card withBorder mt="sm">
          <Text>
            Over two weeks I built Cover My Shift on an Agile team alongside
            Gregg Sanders, Anisa Mohamud and Niko Tatakis, to automate critical
            workflows in schools. Pictured above is a{" "}
            <Anchor
              href="https://vuetifyjs.com/en/components/data-tables/basics/"
              target="_blank"
            >
              Vuetify data table
            </Anchor>
            , with data cards and tabs to give school administrators rich
            information on teacher absences.
          </Text>
        </Card>
        <Title id="whatsnext" mt="lg" order={3}>
          What's next?
        </Title>
        <Text size="lg">
          I want to continue building projects that expand my skills and make a
          real world impact. While I explore various opportunities to become a
          professional developer, here are some of the projects I'm working on:
        </Text>
        <List withPadding mt="sm" size="lg">
          <ListItem>
            BallotBear updates - Add authentication, custom profiles, refresh
            the UI using a UI library
          </ListItem>
          <ListItem>
            TeacherGPT - An AI chatbot for teachers that knows about their
            students
          </ListItem>
          <ListItem>
            ParentGPT - An AI chatbot for parents that knows about their child's
            school
          </ListItem>
          <ListItem>
            VideoDeets - A cross platform desktop GUI application for video
            professionals and enthusiasts that can display, sort and filter
            video files with technical metadata using <Code>ffprobe</Code>
          </ListItem>
          <ListItem>
            A manual entry budgeting application that helps consumers manage
            their spending by pacing on a daily basis
          </ListItem>
        </List>
        <Text size="lg" mt="lg" >
          Stay tuned!
        </Text>
        <Space h="xl" />
      </Container>
    </>
  );
};

export default About;
