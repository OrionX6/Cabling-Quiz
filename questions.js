// questions.js

const questionBank = [
    {
      question: "When drilling through wood siding, which of the following is the best practice?",
      options: [
        "Drill from outside in at a downward angle",
        "Drill from inside out at a slight downward angle",
        "Drill from outside in at an upward angle",
        "Drill from inside out at a slight upward angle"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "For wood siding, it's recommended to drill from inside out at a slight downward angle to facilitate water runoff and avoid damaging the siding."
    },
    {
      question: "Which drill bit size should be used for drilling holes for fiber cable?",
      options: [
        '1/2"',
        '3/8"',
        '1/4"',
        '5/8"'
      ],
      correctAnswerIndex: 0, // Option A
      explanation: 'A 1/2" drill bit is appropriate for fiber cable to ensure the cable can fit through without removing the cap.'
    },
    {
      question: "What is the primary consideration when drilling through masonry surfaces like brick or stone?",
      options: [
        "Drill into the stones or bricks directly",
        "Drill from inside out",
        "Drill into the mortar, not the stones or bricks",
        "Use a wood drill bit only"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "Drilling into the mortar rather than the stones or bricks minimizes damage and makes the process easier."
    },
    {
      question: "Before drilling through asbestos shingles, what precautions should you take?",
      options: [
        "Wear protective gear and follow safety procedures",
        "Drill quickly to minimize exposure",
        "Soak the shingles with water first",
        "No special precautions are needed"
      ],
      correctAnswerIndex: 0, // Option A
      explanation: "Asbestos shingles are hazardous; proper safety procedures must be followed to prevent inhalation of carcinogenic fibers."
    },
    {
      question: "When drilling through aluminum or vinyl siding, what is a key consideration?",
      options: [
        "Drill from outside in using heavy pressure",
        "Drill from inside out using light pressure",
        "Use a masonry bit",
        "Drill at a steep upward angle"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Both aluminum and vinyl siding can crack under pressure; drilling from inside out using light pressure helps prevent damage."
    },
    {
      question: "How should you handle drilling in cold weather conditions for vinyl siding?",
      options: [
        "Use extra force to penetrate the brittle siding",
        "Avoid drilling altogether",
        "Use a sharp bit on the highest setting without forcing it",
        "Preheat the siding before drilling"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "Cold temperatures make vinyl brittle; using a sharp bit on a high setting without forcing it minimizes the risk of cracking."
    },
    {
      question: "What should you avoid when you encounter rotting wood during a drill?",
      options: [
        "Drill slowly through the rot",
        "Look for an alternate area",
        "Use a larger drill bit",
        "Apply extra pressure to get through the rot"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Drilling through rotting wood is unsafe; it's best to find a more stable area with stronger wood."
    },
    {
      question: "Which surface should you never drill through?",
      options: [
        "Front of the house",
        "The premise's foundation",
        "Stucco siding",
        "Interior drywall"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Drilling through the foundation can compromise the structural integrity of the building and should be avoided."
    },
    {
      question: 'When connecting a Fiber patch and you have "No Light," what is the correct procedure?',
      options: [
        "Proceed with the install",
        "Contact dispatch in the chat with a picture to create an OSP ticket",
        "Ignore the issue and reconnect existing service",
        "Scan equipment onto the account immediately"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: '"No Light" indicates a problem; you must contact dispatch to escalate to OSP.'
    },
    {
      question: "How much slack is allowed inside the NIU enclosure when installing a Fiber patch?",
      options: [
        "No slack is allowed",
        "Up to 2 feet",
        "Up to 5 feet",
        "Unlimited slack is acceptable"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "A maximum of 5 feet of cable slack may be coiled and stored inside the NIU enclosure."
    },
    {
      question: "When should you consider re-running a Fiber patch cable during an install?",
      options: [
        "When the customer demands faster service",
        "If the pre-existing Fiber Jack needs relocation",
        "If the light reading is good",
        "When equipment is functioning properly"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Re-running the fiber is necessary if the ONT needs to be relocated or if there are issues like low light at the ONT or damage to the cable."
    },
    {
      question: "What tool is used to trace an ethernet or coax cable to locate its other end?",
      options: [
        "Stud finder",
        "Klein Scout Tester",
        "Voltage meter",
        "Hammer drill"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "The Klein Scout Tester helps locate and match cable ends."
    },
    {
      question: "Which steps are involved in testing if lines pass with a Klein Scout Tester?",
      options: [
        "Connect both ends to the Tester and press the appropriate test button",
        "Use a voltage meter to measure resistance",
        "Visually inspect the cable for damage",
        "Apply a tone and listen for signal"
      ],
      correctAnswerIndex: 0, // Option A
      explanation: "Testing if lines pass involves connecting both ends to the Tester and pressing the appropriate button to read results."
    },
    {
      question: "When installing a mud ring, how far from a power outlet should you position it?",
      options: [
        "Directly above the outlet",
        "At least 6 inches away",
        "It doesn't matter",
        "Exactly 12 inches away"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Position the mud ring at least 6 inches away from a power outlet to avoid electrical interference."
    },
    {
      question: "In an upper wall fish, where do you drill the hole for cable entry?",
      options: [
        "Through the floor",
        "In the center of the upper wall plate in the attic",
        "Through the exterior siding",
        "At the baseboard level"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "For an upper wall fish, drill the hole in the center of the upper wall plate from the attic."
    },
    {
      question: "Before making a cut out, what tool should you use to find the center of the wall cavity?",
      options: [
        "Hammer",
        "Stud locator",
        "Measuring tape",
        "Flashlight"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "A stud locator helps find the center of the wall cavity or a spot away from power outlets."
    },
    {
      question: "When terminating Ethernet with a Keystone Jack, which wiring standard should you use?",
      options: [
        "Standard A",
        "Standard B",
        "Crossover wiring",
        "Custom wiring"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Standard B wiring is commonly used for Ethernet terminations in keystone jacks."
    },
    {
      question: "What is the correct wire color for the first wire when wiring to Standard B code in an RJ45 connector?",
      options: [
        "White/Green",
        "White/Orange",
        "Orange",
        "Green"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "In Standard B wiring, the first wire is White/Orange."
    },
    {
      question: "Which Ethernet cable type should be used for 5 Gig or 8 Gig customers?",
      options: [
        "CAT5e",
        "CAT6",
        "CAT6A",
        "CAT3"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "CAT6A Ethernet cable is required for higher speeds like 5 Gig or 8 Gig."
    },
    {
      question: "What common issue might you encounter with CAT6A Ethernet cables?",
      options: [
        "They are too flexible",
        "Sensitivity to cable termination",
        "They cannot handle high speeds",
        "They are incompatible with RJ45 connectors"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "CAT6A cables are sensitive to termination quality; improper terminations can affect performance."
    },
    {
      question: "In Standard B wiring for Ethernet termination, which color wire corresponds to the third wire?",
      options: [
        "White/Orange",
        "White/Green",
        "Orange",
        "Green"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "In Standard B wiring, the third wire is assigned to the White/Green wire, following the T568B wiring standard."
    },
    {
      question: "What is a common issue with Fiber patch cables that technicians should be aware of during installation?",
      options: [
        "Over-insertion of the cable into connectors",
        "The connector tip may be scratched, causing signal loss",
        "The cables are too long for residential installations",
        "Fiber cables are immune to physical damage"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Fiber patch cables can suffer from scratches on the connector tip, leading to signal loss. Technicians should check for scratches and measure light loss across the cable to ensure proper functionality."
    },
    {
      question: "How should you handle a fiber patch cable with a damaged green cap?",
      options: [
        "Tape it back together",
        "Continue using it",
        "Replace the entire run",
        "Ignore the damage"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "If the cap is damaged or removed, the entire fiber patch cable should be replaced."
    },
    {
      question: "When using existing wiring in a network panel, what is a key consideration?",
      options: [
        "The age of the cables",
        "The color of the wires",
        "The condition of the existing cabling infrastructure",
        "The brand of the cables"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "The existing cabling must be in good condition to be reused effectively."
    },
    {
      question: "When should you add a new FPC during troubleshooting?",
      options: [
        "When lines are in perfect condition",
        "When you need a temporary line for testing",
        "When the customer insists",
        "Only during initial installation"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Adding a temporary line can help isolate issues during troubleshooting."
    },
    {
      question: "Which tool is essential for performing a lower wall fish?",
      options: [
        "Stud finder",
        "Flex bit and wall fish angle tool",
        "Masonry drill bit",
        "Hammer"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "A flex bit and wall fish angle tool are necessary to drill through the base floor stud during a lower wall fish."
    },
    {
      question: "What is the maximum amount of cable slack allowed in-wall at the ONT location for a Fiber patch?",
      options: [
        "5 feet",
        "10 feet",
        "15 feet",
        "No slack is allowed"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Up to 10 feet of cable slack may be stored in-wall at the ONT location."
    },
    {
      question: "When toning lines, what is the purpose of the toner and probe tool?",
      options: [
        "To physically clean the cable",
        "To send a signal along the cable to identify it",
        "To measure cable length",
        "To secure the cable to the wall"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "The toner sends a signal through the cable, and the probe detects it to identify the line."
    },
    {
      question: "Why should you avoid drilling through a fireplace?",
      options: [
        "It's too difficult",
        "It may be illegal",
        "It can compromise structural integrity and pose safety risks",
        "It takes too much time"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "Drilling through a fireplace can weaken the structure and create fire hazards."
    },
    {
      question: "What should you do if you detect asbestos shingles during a drill?",
      options: [
        "Proceed as usual",
        "Drill faster to minimize exposure",
        "Stop and follow all vendor procedures for hazardous materials",
        "Ignore and continue the job"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "Asbestos is hazardous; you must follow safety procedures to protect yourself and others."
    },
    {
      question: "When performing an upper wall fish, why do you drill at the center of the upper wall plate?",
      options: [
        "It's the easiest spot to drill",
        "To avoid electrical wiring and ensure proper cable placement",
        "Because it's closest to the customer equipment",
        "To make the job quicker"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Drilling at the center avoids studs and electrical wiring, ensuring a safe and effective cable path. It also reduces the risk of a pop-out in the drywall."
    },
    {
      question: "In which scenario should you re-run a Fiber patch on a service/repair visit?",
      options: [
        "When the customer wants a new color",
        "If the line is damaged or you have low/no light",
        "If the customer is upgrading their service package",
        "Only during initial installation"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Re-running the FPC is necessary if the Fiber patch is damaged or experiencing signal issues."
    },
    {
      question: "What is the recommended action if you encounter loose vinyl siding during a drill?",
      options: [
        "Drill faster to get through it",
        "Secure the siding before drilling",
        "Use a sharp 1/4\" wood bit with light pressure",
        "Skip drilling and find another location"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "Using a sharp bit with light pressure prevents the siding from bending or cracking."
    },
    {
      question: "When terminating Ethernet cables, what tool is used to ensure wires are securely seated in a Keystone Jack?",
      options: [
        "Hammer",
        "Screwdriver",
        "Punch down tool",
        "Crimping tool"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "A punch down tool is used to seat the wires securely into the Keystone Jack terminals."
    },
    {
      question: "Why should you avoid untwisting Ethernet wire pairs more than necessary?",
      options: [
        "It makes the job harder",
        "It can lead to signal interference and degrade performance",
        "It looks unprofessional",
        "It's against industry standards"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Maintaining the twist in wire pairs minimizes electromagnetic interference, preserving signal integrity."
    },
    {
      question: 'What does a "Pass" result indicate when testing an Ethernet cable with a Klein Scout Tester?',
      options: [
        "The cable is too long",
        "The cable has failed",
        "The cable is terminated properly and functioning correctly",
        "The tester is malfunctioning"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: 'A "Pass" result confirms that the cable is correctly terminated and operational.'
    },
    {
      question: "Why should you not disconnect existing service until directed when dealing with low or no light in a Fiber patch?",
      options: [
        "To save time",
        "Because the customer may still need their current service",
        "To make the installation easier",
        "Company policy prohibits disconnection"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Keeping existing services active ensures the customer isn't left without connectivity during troubleshooting."
    },
    {
      question: "What is the purpose of installing a mud ring when starting inside on interior drywall?",
      options: [
        "To hold the cable in place",
        "To prevent debris from damaging the wall or Ethernet cable",
        "For aesthetic purposes",
        "To mount heavy equipment"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "A mud ring provides access to cables and protects both the wall and the cables from damage."
    },
    {
      question: "When should you replace Ethernet fittings that aren't Standard B?",
      options: [
        "Only if the customer requests it",
        "During any troubleshooting or installation",
        "Never, they are acceptable",
        "Only if they are damaged"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Non-standard fittings can cause issues and should be replaced during installations or repairs."
    },
    {
      question: "In which situation might you need to run a new fiber cable during a repair appointment?",
      options: [
        "When upgrading the customer's service package",
        "If the customer wants a different cable color",
        "If you're experiencing a signal loss or drops in connection",
        "Only during initial installation"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "Signal loss or connection issues indicate that existing cables may be faulty and need replacement."
    },
    {
      question: "During an install, when should you consider running a new Ethernet cable instead of using existing wiring?",
      options: [
        "When the existing Ethernet line is CAT5e or higher",
        "If the existing Ethernet line shows physical damage or is not CAT5e or higher",
        "Only if the customer specifically requests new wiring",
        "When the existing Ethernet line passes all tests"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "You should run a new Ethernet cable during an install if the existing line shows physical damage or isn't CAT5e or higher. Using higher-grade cables ensures optimal performance."
    },
    {
      question: "Why is it important to drill at a slight upward angle when drilling from outside in on masonry surfaces?",
      options: [
        "To make drilling easier",
        "To ensure water runs off and doesn't enter the hole",
        "It's the fastest method",
        "To avoid hitting electrical wires"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Drilling at an upward angle prevents water from entering the hole, protecting the interior."
    },
    {
      question: "When toning lines, what indicates that a signal is present?",
      options: [
        "A visual light",
        "An audible tone from the probe",
        "The cable heats up",
        "The probe vibrates"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "An audible tone from the probe indicates a signal is being transmitted through the cable."
    },
    {
      question: "What is a common issue with RJ45 connectors that can cause Ethernet problems?",
      options: [
        "Over-crimping the connector",
        "The connector is too large",
        "Not fully crimping the connector",
        "Using metal connectors"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "An improperly crimped RJ45 connector can cause connectivity issues."
    },
    {
      question: "Why should you use a stud locator before cutting a hole for a mud ring?",
      options: [
        "To find the best aesthetic location",
        "To avoid cutting into studs or electrical wires",
        "To measure wall thickness",
        "It's required by law"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Using a stud locator helps prevent damage to structural elements and electrical hazards."
    },
    {
      question: "What is the first step when terminating Ethernet with an RJ45 connector?",
      options: [
        "Crimp the connector",
        "Strip the cable sheath",
        "Insert wires into the connector",
        "Test the cable"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Stripping the cable sheath exposes the wires for termination."
    },
    {
      question: "When is it acceptable to store 10 feet of cable slack in-wall for a Fiber patch?",
      options: [
        "Only at the ONT location",
        "Anywhere in the wall",
        "Under no circumstances",
        "At the customer's request"
      ],
      correctAnswerIndex: 0, // Option A
      explanation: "Up to 10 feet of slack may be stored in-wall only at the Optical Network Terminal (ONT) location."
    },
    {
      question: "If you notice the fiber patch cable has sharp bends or kinks, what should you do?",
      options: [
        "Straighten it out and continue",
        "Replace the cable",
        "Ignore it if the signal is fine",
        "Tape it to reinforce"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Sharp bends or kinks can cause signal loss; the cable should be replaced."
    },
    {
      question: "During a cable run, why is it important to attach the cable to floor joists in a crawl space?",
      options: [
        "To keep the cable off the ground and organized",
        "For aesthetic purposes",
        "It's required by building codes",
        "To make future repairs easier"
      ],
      correctAnswerIndex: 0, // Option A
      explanation: "Securing the cable prevents damage and maintains an organized installation."
    },
    {
      question: 'What should you do if you encounter lines that don\'t "pass" on a mapper during troubleshooting?',
      options: [
        "Ignore and proceed with the installation",
        "Assume they are functional",
        "Replace or repair the lines as necessary",
        "Use them anyway"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "Lines that fail mapping tests may be faulty and should be replaced or repaired to ensure proper functionality."
    },
    {
      question: "What is the proper Ethernet configuration for wiring Standard B?",
      options: [
        "White/Orange, Orange, White/Blue, Green, White/Green, Blue, White/Brown, Brown",
        "White/Green, Green, White/Orange, Blue, White/Blue, Orange, White/Brown, Brown",
        "White/Orange, Orange, White/Green, Blue, White/Blue, Green, White/Brown, Brown",
        "White/Green, Green, White/Blue, Orange, White/Orange, Blue, White/Brown, Brown"
      ],
      correctAnswerIndex: 2, // Option C
      explanation: "Wiring Standard B is: White/Orange, Orange, White/Green, Blue, White/Blue, Green, White/Brown, Brown."
    },
    {
      question: "What is the proper Ethernet configuration for wiring Standard A?",
      options: [
        "White/Orange, Orange, White/Blue, Green, White/Green, Blue, White/Brown, Brown",
        "White/Green, Green, White/Orange, Blue, White/Blue, Orange, White/Brown, Brown",
        "White/Orange, Orange, White/Green, Blue, White/Blue, Green, White/Brown, Brown",
        "White/Green, Green, White/Blue, Orange, White/Orange, Blue, White/Brown, Brown"
      ],
      correctAnswerIndex: 1, // Option B
      explanation: "Wiring Standard A is: White/Green, Green, White/Orange, Blue, White/Blue, Orange, White/Brown, Brown."
    },
    {
      question: "What is the purpose of the cut out during an install?",
      options: [
        "To provide better ventilation for the ONT",
        "To properly secure the ONT to the wall",
        "To make the installation process faster",
        "To ensure that there are no pipes or wiring behind the wall before drilling"
      ],
      correctAnswerIndex: 3, // Option D
      explanation: "Making a cutout is important to ensure we're not drilling into anything that could cause damage or injury."
    },
    {
      question: "In which situation might you need to run a new Ethernet cable during a repair or install appointment?",
      options: [
        "If the customer prefers a round cable over a flat one",
        "If the customer wants a different cable color",
        "If the current Ethernet cable is too old but still working",
        "If Wi-Fi speeds are slow and you can’t get a good mesh connection wirelessly"
      ],
      correctAnswerIndex: 3, // Option D
      explanation: "If you cannot get a good connection over wireless mesh and the Wi-Fi speeds are slow in that area, you should run a hardline Ethernet connection."
    },
    {
      question: "When is it acceptable to get on a roof to run a line?",
      options: [
        "It is never acceptable to get on a roof",
        "Only if the customer provides written consent",
        "If the roof is flat and there is no risk of falling",
        "If you are wearing proper safety gear and the roof isn’t too steep"
      ],
      correctAnswerIndex: 0, // Option A
      explanation: "Technicians are not allowed to get on a residential roof under any circumstances."
    }
  ];
  
  // Expose questionBank globally
  window.questionBank = questionBank;
  
