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
} from "@mantine/core";
import {
  IconApi,
  IconBrandJavascript,
  IconBrandPython,
  IconCloudComputing,
  IconDashboard,
} from "@tabler/icons-react";

const jsIcon = <IconBrandJavascript/>

const plainMedCode = `// Titanium Mobile SDK -- create search bar with OS targeting
if (Ti.Platform.name == 'iPhone OS'){
	var search = Titanium.UI.createSearchBar({
	showCancel:false,
	hintText: "Type a medical term"
}); } else {
	var search = Titanium.UI.createSearchBar({
	showCancel:true,
	hintText: "Type a medical term"});
	}

// create table view
var tableview = Titanium.UI.createTableView({
	data:data,
	search:search,
	color:'#000',
	filterAttribute:'title'
});

`;

const kickstartCode = `
//Function: this is the main function that checks if the ISSN is a journal which permits publisher PDF archiving
function pubpdf(issn) {  
 var text = getXML(issn);
   // checks to see if the issn is invalid
  var failText=text.search("<outcome>failed</outcome>");
  var notfound=text.search("<outcome>notFound</outcome>");
  // checks to see if the issn is missing
  if (issn == 00000000 || issn == 0000-0000 || issn == "") { return ("blank ISSN")
  } else if (failText > 0){
    return ("ISSN invalid") }
  else if (notfound > -1){
    return ("not found") }
  else if (failText == -1) {  
  return permPdfGet(text);
  }
}
`;

const schoolProbabilityCode = `=SUM(
    (B9 * (1 - $R$12)),     // Weighs the previous trimester completion average at 20% (1 - 0.8)
    IFNA(
        IF(                 // Checks if yesterday's assignment is completed. 
            VLOOKUP(A9, Grades!$A$2:$CK$78, ($R$6-2), 0) = "✔️", 
            1
        ), 
        0
    ) * ($R$12 / 2),        // Adds to the weight 40% 
    IFNA(
        IF(                 // Checks if the assignment from 4 days ago is completed.
            VLOOKUP(A9, Grades!$A$2:$CK$78, ($R$6-8), 0) = "✔️", 
            1
        ), 
        0
    ) * ($R$12 / 2)         //  If yes, adds the remaining half of the weight (40%) 
                            
)

`;

const schoolAlertModelCode = 
`
=IFNA(
    IFS(
        N9=O9, "",                                  
        AND(OR(N9="❌")=True, O9="✔️")=True, "🥳",  // If the projection was "❌" and the actual result was "✔️". 
                                                  // Returns "🥳"

        AND(N9="✔️", O9="❌")=True, "😡"  // If the projection was "✔️" and the actual result was "❌". 
                                         // Returns "😡"
    )
)
`;

const About = () => {
  return (
    <Container size="md" mt="xl">
      <Title order={1}>My Software Development Journey</Title>
      <Text size="xl" mt="lg">
        Software development is the latest chapter in my professional goal to
        help solve real-world problems with technology. My coding life started
        with calculating pi in my introductory computer science
        course at Lawrence University. 14 years, two careers and two masters
        degrees later, I'm embarking on a journey to build tools, troubleshoot,
        and create new efficiencies for the software community.
      </Text>

      <Title mt="lg" order={3}>
        University of Michigan: Plain Language Medical Dictionary -- 2010
      </Title>
      <Text size="xl">
        I worked a reference desk student job at Michigan's Health Science
        Library, helping patrons find research resources. While I enjoyed
        helping students power up their research, my supervisors recognized my
        strong affinity for coding and assigned me a project to build a mobile
        web version of a pre-existing medical dictionary. In addition to JQuery
        and HTML5, I taught myself{" "}
        <Anchor href="https://github.com/tidev/titanium-sdk" target="_blank">
          Appcelerator's Titanium Mobile
        </Anchor>{" "}
        which was the React Native / Flutter of 2010. It let you use a
        JavaScript API to render native iOS UI widgets into a compiled XCode
        project. I eventually deployed the app to the iOS App Store under
        Michigan's official account, navigating organizational infrastructure
        through communication and due diligence.
      </Text>

      <Group mt="lg" justify="center">
        <Image src="https://pub-0d39c7af531f4456b2a0bb4b5d58306e.r2.dev/plainmed-left.png" />
        <Image src="https://pub-0d39c7af531f4456b2a0bb4b5d58306e.r2.dev/plainmed-right.png" />
      </Group>

      <CodeHighlightTabs code={[{
        code: plainMedCode,
        language: "js",
        fileName:"app.js"
        }]} />
      <Title mt="lg" order={3}>
        Kickstarting Institutional Repositories -- 2011-2013
      </Title>
      <Text size="xl">
        In my new career as Emerging Technologies Librarian, I used my coding
        skills to automate workflows for institutional repositories. The College
        of Wooster had recently invested in an institutional repository that was
        in need of high quality content. I successfully led the effort to create
        a digital submission requirement for Senior Independent Study Theses,
        undergraduate capstone projects that would find a permanent digital home
        in our repository. Next, we began to recruit faculty members to upload
        their research to promote open access publishing. Many journals allow
        their authors to publish their peer reviewed drafts (aka post-prints) to
        institutional repositories, which could be low-hanging fruit in
        recruiting content. The challenge is figuring out which journals do
        that, and which faculty publish in those journals. I authored a custom
        Google Sheet function in JavaScript that streamlined identifying Wooster
        faculty publications in journals with friendly open access policies,
        allowing us to take a 12 hour project and automate it in 15 minutes. I
        published my findings in Code4Lib and presented a poster at the
        Association of College & Research Libraries conference.
      </Text>

      <CodeHighlightTabs mt="lg" 
      code={[
        {
        fileName: 'SHERPARoMEOScript.js',
        code: kickstartCode,
        language:'js',
        icon: jsIcon
        }
    ]} />

      <Title mt="lg" order={3}>
        Teachers Are So Busy! -- 2016-2023
      </Title>
      <Text size="xl">
        When I first arrived at my middle school, almost every major workflow
        was paper-based. Absent student for a test? -- paper ticket goes into
        folder. Major comprehensive exams? -- printed on paper, scanned and fed
        through software to produce reports. Paper has some wonderful use cases,
        but this definitely wasn't one of them. I quickly worked to digitize
        many school processes, and became a go-to resource for other teachers
        wanting to do the same. I spearheaded the adoption of Edulastic, so all
        quizzes, tests and comprehensive exams could be completed on Chromebooks
        with computer-based grading. I created Google Sheets with query formulas
        so each grade level could keep a central spreadsheet to track students
        missing tests.
      </Text>
      <Text mt="lg" size="xl">
        During remote learning, there arose a heightened imperative for teachers
        to regularly contact families to report on their student's progress. I
        created a Google spreadsheet that used a model to predict a student's
        daily academic activity, and when their behavior was not as expected,
        used that occasion to start a dialog with the family. I had some
        straight A students, which the model would predict a {">"}95%
        probability of completing their daily work. If one of those students
        didn't turn in their work, the model would alert me to the unexpected
        behavior, allowing me to make my communication home much more targeted
        and based on real-time data.
      </Text>

      <CodeHighlightTabs mt="lg" 
      code={[
        {
            code:schoolProbabilityCode,
            language: "xls",
            fileName:"probabilityEngine.gsheets"
        },
        {
            code:schoolAlertModelCode,
            language: "xls",
            fileName:"alertModel.gsheets"
        }
      ]}
       />
      <Card withBorder mt="sm">
          <Text>
            This model assigns a probability to a student completing today's work by
            weighing yesterday and 4 day's ago completion at 40% each, and their
            previous trimester average at 20%
          </Text>
      </Card>
      <Title mt="lg" order={3}>
        Local Elections Needed More Attention -- 2021 - 2023
      </Title>
      <Text size="xl">
        In 2021 Upper Arlington's contentious school board election received
        increased attention due to political polarization. Voters wanted to know
        if certain candidates were likely to win. I wanted a framework for
        discussing that possibility, so I created a Python script called{" "}
        <Code>election.py</Code> that generated hundreds of election simulations. If you gave
        it the list of candidates and the likelihood of Democrats, Republicans
        and Independents voting for each one, it told you who was likely to win
        the election. In 2021, <Code>election.py</Code> correctly predicted the two school
        board election winners.
      </Text>
      <Text mt="lg" size="xl">
        I revived <Code>election.py</Code> for the 2023 school board election, but wanted to
        create a tool that was web-based so others could make their own
        predictions. I set a deadline of the Friday before the November 7
        election so that voters could use it and give feedback. Within a 2-3
        weeks I worked extremely hard on these deliverables:
      </Text>
      <List type="ordered" withPadding mt="sm" size="xl">
        <ListItem icon={<IconBrandPython />}>
          Refactored <Code>election.py</Code> from a script with global variables into fully
          encapsulated object oriented code with classes.
        </ListItem>
        <ListItem icon={<IconApi />}>
          Implemented FastAPI to execute the <Code>election.py</Code> engine through a
          RESTful API
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
      <Text mt="lg" size="xl">
        I publicized the app within the Upper Arlington community and received
        over 200 visitors over the weekend before the election. My prediction
        model ended up correctly predicting 2 out of 3 of the eventual winners.
      </Text>
      <Title mt="lg" order={3}>
        It's time to finally become a software developer - 2023
      </Title>
      <Text size="xl">
        The move to pursue a software developer career felt like the logical
        next step after over a decade of working in fast paced environments,
        collaborating in teams, mentoring others, and using code to automate and
        enhance workflows. I decided to enroll in Tech Elevator, a full time
        in-person full stack software development bootcamp on Ohio State's west
        campus, where I became immersed in objective oriented programming,
        RESTful API design, model view controller design and test-driven
        development. I learned Java, Spring Boot, PostgreSQL, CSS, and
        JavaScript / Vue.js. Tech Elevator also exposes its students to the
        softer side of programming, like pair programming and using Agile to
        work through a two week final capstone where scrum masters and product
        managers scrutinize your work and give actionable feedback.
      </Text>
    </Container>
  );
};

export default About;
