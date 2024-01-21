const codeSnippets = {
  calculatePi: `//Authored by Stephen Flynn for CMSC 150, April 2009
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
    }`,
  plainMedCode: `// Titanium Mobile SDK — create search bar with OS targeting
  if (Ti.Platform.name == "iPhone OS") {
    // Created in 2010, before ES6 let/const
    var search = Titanium.UI.createSearchBar({
      showCancel: false,
      hintText: "Type a medical term",
    });
  } else {
    var search = Titanium.UI.createSearchBar({
      showCancel: true,
      hintText: "Type a medical term",
    });
  }
  // create table view
  var tableview = Titanium.UI.createTableView({
    data: data,
    search: search,
    color: "#000",
    filterAttribute: "title",
  });
  `,
  kickstartCode: `// Returns whether ISSN is a journal which permits publisher PDF archiving
  function pubpdf(issn) {
    // Created in 2013, before ES6 let/const
    var text = getXML(issn);
    // checks to see if the issn is invalid
    var failText = text.search("<outcome>failed</outcome>");
    var notfound = text.search("<outcome>notFound</outcome>");
    // checks to see if the issn is missing
    if (issn == 00000000 || issn == 0000 - 0000 || issn == "") {
      return "blank ISSN";
    } else if (failText > 0) {
      return "ISSN invalid";
    } else if (notfound > -1) {
      return "not found";
    } else if (failText == -1) {
      return permPdfGet(text);
    }
  }
  `,
  schoolProbabilityCode: `= SUM(
    (B9 * (1 - $R$12)), // Weighs the previous trimester completion average at 20% (1 - 0.8)
    IFNA(
        IF( // Checks if yesterday's assignment is completed. 
            VLOOKUP(A9, Grades!$A$2: $CK$78, ($R$6 - 2), 0) = "✔️",
            1
        ),
        0
    ) * ($R$12 / 2), // Adds to the weight 40% 
    IFNA(
        IF( // Checks if the assignment from 4 days ago is completed.
            VLOOKUP(A9, Grades!$A$2: $CK$78, ($R$6 - 8), 0) = "✔️",
            1
        ),
        0
    ) * ($R$12 / 2) //  If yes, adds the remaining half of the weight (40%)                         
)`,
  schoolAlertModelCode: `= IFNA(
    IFS(
        N9 = O9, "",
        AND(OR(N9 = "❌") = True, O9 = "✔️") = True, "🥳", 
        // If the projection was "❌" and the actual result was "✔️". 
        // Returns "🥳"

        AND(N9 = "✔️", O9 = "❌") = True, "😡" 
        // If the projection was "✔️" and the actual result was "❌". 
        // Returns "😡"
    )
)`,
  electionOriginal: `# first iteration of election script
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
    voteCastDict = dict(prefSorted[0:2])
    voteCast = list(voteCastDict.keys())
    return voteCast`,
  electionMain: `# FastAPI entrypoint with Pydantic validation for the ElectionSimulator class
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
`,
  appJsx: `// calls POST request and processes response from FastAPI function
  const performSimulation = async () => {
    console.log("Load submit animation");
    let endpoint;
    if (predictionType === "single") {
      endpoint = "/one_election";
      console.log("single election");
    } else if (predictionType === "multi") {
      endpoint = "/election";
      console.log("multi election");
    }
    try {
      if (predictionType === "single") {
        endpoint = "/one_election";
        console.log("single election");
      } else if (predictionType === "multi") {
        endpoint = "/election";
        console.log("multi election");
      }
      const response = await fetch(
        \`https://fastapi-election.fly.dev\${endpoint}\`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      setResponse(responseData);
      console.log("Successful fetch");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error making POST request:", error);
      setError("Error making POST request. Please try again.");
    }
    setIsLoading(false);
    console.log("Loading state ended");
  };`,
};

export default codeSnippets;