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

const jsIcon = <IconBrandJavascript />;
const excelIcon = <IconFileSpreadsheet />;
const pythonIcon = <IconBrandPython />;
const cloudIcon = <IconCloudComputing />;
const jsxIcon = <IconFileTypeJsx />;
const coffeeIcon = <IconCoffee />;

const calculatePi = 
`//Authored by Stephen Flynn for CMSC 150, April 2009
public static void main(String[] args) {
    double x = Math.sqrt(0.5 + (0.5 * Math.sqrt(0.5)));
    int N = 0;
    double product = x;
    while (N < 2000) {
        x = Math.sqrt(0.5 + (0.5 * x));
        product = product * x;
        N++;
    }
    // this multiplies the first part of the formula with the product
    product = (product * Math.sqrt(0.5));
    double pi = (2.0 / product);
    System.out.println("Pi is approxiately: " + pi);
}
`;

const plainMedCode = 
`// Titanium Mobile SDK -- create search bar with OS targeting
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

const kickstartCode = 
`//Function: this is the main function that checks if the ISSN is a journal which permits publisher PDF archiving
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

const schoolProbabilityCode = 
`=SUM(
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
)`;

const schoolAlertModelCode = 
`=IFNA(
    IFS(
        N9=O9, "",                                  
        AND(OR(N9="❌")=True, O9="✔️")=True, "🥳",  // If the projection was "❌" and the actual result was "✔️". 
                                                  // Returns "🥳"

        AND(N9="✔️", O9="❌")=True, "😡"  // If the projection was "✔️" and the actual result was "❌". 
                                         // Returns "😡"
    )
)
`;

const electionOriginal = 
`# first iteration of election script
def vote(profile):
    if profile=='Dem':
        voterPref = demPrefs
    elif profile=='Ind':
        voterPref = indPrefs
    elif profile=='GOP':
        voterPref = gopPrefs
    else:
        print("ERROR!the vote function didn't work!!")
    ballotChoice = {'Liz': 0, 'Lou': 0, 'Nidhi':0, 'Scott':0, 'Carol':0}
    for i in range(5):
        for k, v in ballotChoice.items():
            if random.SystemRandom().uniform(0,1) < voterPref.get(k):
                ballotChoice[k]+=1
                
    prefSorted = sorted(ballotChoice.items(), key=lambda x: x[1], reverse=True)
#     for k, v in prefSorted:
#         print (k + ' is receiving ' + str(v))

    voteCastDict = dict(prefSorted[0:2])
    voteCast = list(voteCastDict.keys())
    return voteCast`;

const electionMain = 
`# FastAPI entrypoint with Pydantic validation for the ElectionSimulator class
@app.post("/election", response_model=ElectionResponse)
def multielection(config: Config):
    election_simulator = ElectionSimulator(config)
    wins_sorted = election_simulator.run_elections()
    candidates_dict = {}    
    for candidate, wins in wins_sorted:
        probability_to_win = (wins / config.electionSettings.numOfSims) * 100
        candidates_dict[candidate] = {
            "numberOfWins": wins,
            "probabilityToWin": f"{probability_to_win:.1f}%"
        }
    datetime_str = time.strftime("%Y-%m-%d %H:%M:%S", time.gmtime())
    election_settings = ElectionSettings(
        numOfSims=config.electionSettings.numOfSims,
        totalVoters=config.electionSettings.totalVoters,
        ballotWinners=config.electionSettings.ballotWinners
    )
    response_data = {
        "datetime": datetime_str,
        "candidates": candidates_dict,
        "voterProfiles": config.voterProfiles,
        "electorate": config.electorate,
        "electionSettings": election_settings
    }
    election_response = ElectionResponse(**response_data)
    return election_response
`;

const appJsx = `// calls POST request and processes response from FastAPI function
const performSimulation = async () => {
    console.log('Load submit animation');
let endpoint;
if (predictionType === 'single') {
    endpoint = '/one_election';
    console.log('single election');
} else if (predictionType === 'multi') {
    endpoint = '/election';
    console.log('multi election');
}
  try {
    if (predictionType === 'single') {
        endpoint = '/one_election';
        console.log('single election');
    } else if (predictionType === 'multi') {
        endpoint = '/election';
        console.log('multi election');
    }
    const response = await fetch(\`https://fastapi-election.fly.dev\${endpoint}\`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });
      const responseData = await response.json();
      setResponse(responseData);
      console.log('Successful fetch'); 
      setIsSubmitted(true);
  } catch (error) {
      console.error('Error making POST request:', error);
      setError('Error making POST request. Please try again.');
  }
  setIsLoading(false);
  console.log('Loading state ended');
}
`;

const About = () => {
  return (
    <Container size="md" mt="xl" mb="xl">
      <Title order={1}>My Software Development Journey</Title>
      <Text size="xl" mt="lg">
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
            code: calculatePi,
            language: "java",
            fileName: "exercise2.java",
            icon: coffeeIcon,
          },
        ]}
      />

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
        Michigan's official account.
      </Text>

      <Group mt="lg" justify="center">
        <Image src="https://pub-0d39c7af531f4456b2a0bb4b5d58306e.r2.dev/plainmed-left.png" />
        <Image src="https://pub-0d39c7af531f4456b2a0bb4b5d58306e.r2.dev/plainmed-right.png" />
      </Group>

      <CodeHighlightTabs
        code={[
          {
            code: plainMedCode,
            language: "js",
            fileName: "app.js",
            icon: jsIcon,
          },
        ]}
      />
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

      <CodeHighlightTabs
        mt="lg"
        code={[
          {
            fileName: "SHERPARoMEOScript.js",
            code: kickstartCode,
            language: "js",
            icon: jsIcon,
          },
        ]}
      />

      <Title mt="lg" order={3}>
        Teachers Are So Busy! -- 2016-2023
      </Title>
      <Text size="xl">
        I wanted to pursue a passion for teaching, and took a position as an 8th
        Grade History teacher in Columbus. When I started, almost every major
        workflow was paper-based. Absent student for a test? -- paper ticket
        goes into folder. Major comprehensive exams? -- printed on paper,
        scanned and fed through software to produce reports. Paper has some
        wonderful use cases, but this definitely wasn't one of them. I quickly
        worked to digitize many school processes, and became a go-to resource
        for other teachers wanting to do the same. I spearheaded the adoption of
        {" "}<Anchor href="http://www.edulastic.com" target="_blank">
          Edulastic
        </Anchor>
        , so all quizzes, tests and comprehensive exams could be completed on
        Chromebooks with automatic grading. I created Google Sheets with query
        formulas so each grade level could keep a central spreadsheet to track
        students missing tests.
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

      <CodeHighlightTabs
        mt="lg"
        code={[
          {
            code: schoolProbabilityCode,
            language: "js",
            fileName: "probabilityEngine.gsheets",
            icon: excelIcon,
          },
          {
            code: schoolAlertModelCode,
            language: "js",
            fileName: "alertModel.gsheets",
            icon: excelIcon,
          },
        ]}
      />
      <Card withBorder mt="sm">
        <Text>
          This model assigns a probability to a student completing today's work
          by weighing yesterday and 4 day's ago completion at 40% each, and
          their previous trimester average at 20%
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
        <Code>election.py</Code> that generated hundreds of election
        simulations. If you gave it the list of candidates and the likelihood of
        Democrats, Republicans and Independents voting for each one, it told you
        who was likely to win the election. In 2021, <Code>election.py</Code>{" "}
        correctly predicted the two school board election winners.
      </Text>
      <CodeHighlightTabs
        mt="lg"
        code={[
          {
            code: electionOriginal,
            language: "py",
            fileName: "election.py",
            icon: pythonIcon,
          },
        ]}
      />
      <Text mt="lg" size="xl">
        I revived <Code>election.py</Code> for the 2023 school board election,
        but wanted to create a tool that was web-based so others could make
        their own predictions. I set a deadline of the Friday before the
        November 7 election so that voters could use it and give feedback.
        Within a 2-3 weeks I worked extremely hard on these deliverables:
      </Text>
      <List type="ordered" withPadding mt="sm" size="xl">
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
            code: electionMain,
            language: "py",
            fileName: "main.py",
            icon: cloudIcon,
          },
          {
            code: appJsx,
            language: "jsx",
            fileName: "app.jsx",
            icon: jsxIcon,
          },
        ]}
      />
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
      <Image
        mt="lg"
        src="https://pub-0d39c7af531f4456b2a0bb4b5d58306e.r2.dev/covermyshiftdashboard.jpeg"
      />
      <Card withBorder mt="sm">
        <Text>
          Over two weeks I built Cover My Shift on an Agile team, using my new
          development skills to automate workflows in schools. Pictured above is
          a{" "}
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
      <Title mt="lg" order={3}>
        What's next?
      </Title>
      <Text size="xl">
        I’m currently searching for my first role as a full time software
        developer. While I network and apply to jobs, I will be continuing to
        build projects that can make a real world impact. Here are some of the
        ideas I will make progress on:
      </Text>
      <List withPadding mt="sm" size="xl">
        <ListItem>
          BallotBear updates - Add authentication, custom profiles, refresh the
          UI using a UI library,
        </ListItem>
        <ListItem>
          TeacherGPT - An AI chatbot for teachers that knows about their
          students.
        </ListItem>
        <ListItem>
          ParentGPT - An AI chatbot for parents that knows about their child's
          school
        </ListItem>
        <ListItem>
          VideoDeets - a cross platform desktop GUI application for video
          professionals and enthusiasts that can display, sort and filter video
          files using technical metadata.
        </ListItem>
        <ListItem>
          A manual entry budgeting application that helps consumers manage their
          spending by pacing on a daily basis.
        </ListItem>
      </List>
      <Text mt="lg" size="lg">Stay tuned!</Text>
      <Space h="xl" />
    </Container>
  );
};

export default About;
