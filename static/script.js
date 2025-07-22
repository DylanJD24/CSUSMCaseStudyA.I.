let currentQuestionIndex = 0;
let currentQuestions = [];

const caseStudyData = [
    {
        id: "1",
        title: "CASE STUDY 1",
        subtitle: "Healthy Hiring: Ecommerce Help Wanted",
        description: "Join a systems analysis team at Marathon Vitamin Shops as they navigate the challenge of hiring a new team member for an ecommerce initiative. Weigh technical skills, personality traits, and business knowledge to recommend the ideal candidate.",
        objective: "Analyze the hiring needs of a systems analysis team and recommend an ideal candidate by evaluating technical skills, personality traits, and business knowledge.",
        duration: "35-40 minutes",
        taughtBy: "Dr. Vernon Wells and Assistant Bot ALMA",
        format: "A mix of multiple choice and short written responses in an interactive chat.",
        completion: "You’ll finish once all required questions are answered and both agents confirm your understanding.",
        questionOverview: "6–8 total questions",
        prerequisite: "Read Chapter 1",
        previewImg: "../static/casestudy1.png",
    
        // ✅ Add this field
        keyTopics: [
          "Bias in training data",
          "Ethical decision-making",
          "AI hiring practices",
          "Technical vs. soft skills",
          "Team collaboration",
          "Ideal candidate profiling"
        ],

        context: "Youll be happy to know that we made a strong case to management that we should hire a new systems analyst to specialize in ecommerce development, says Al Falfa, a systems analyst for the multioutlet international chain Marathon Vitamin Shops. He is meeting with his large team of systems analysts to decide on the qualifications that their new team member should possess. Al continues, saying, In fact, they were so excited by the possibility of our team helping to move Marathon into an ecommerce strategy that theyve said we should start our search now and not wait until the fall. Ginger Rute, another analyst, agrees, saying, The demand for website developers is still outstripping the supply. We should move quickly. I think our new person should be knowledgeable in system modeling, JavaScript, C++, and Rational Rose and familiar with Ajax, just to name a few. Al looks surprised at Gingers long list of skills but then replies, Well, thats certainly one way we could go. But I would also like to see a person with some business savvy. Most of the people coming out of school will have solid programming skills, but they should know about accounting, inventory, and distribution of goods and services, too. The newest member of the systems analysis group, Vita Ming, finally breaks into the discussion. She says, One of the reasons I chose to come to work with all of you was that I thought we all got along quite well together. Because I had some other opportunities, I looked very carefully at what the atmosphere was here. From what Ive seen, were a friendly group. Lets be sure to hire someone who has a good personality and who fits in well with us. Al concurs, continuing, Vitas right. The new person should be able to communicate well with us, and with business clients, too. We are always communicating in some way, through formal presentations, drawing diagrams, or interviewing users. If they understand decision making, it will make their job easier, too. Also, Marathon is interested in integrating ecommerce into the entire business. We need someone who at least grasps the strategic importance of the Web. Page design is such a small part of it. Ginger interjects again with a healthy dose of practicality, saying, Leave that to management. I still say the new person should be a good programmer. Then she ponders aloud, I wonder how important UML will be? After listening patiently to everyones wish list, one of the senior analysts, Cal Siem, speaks up, joking, Wed better see if Superman is available! As the group shares a laugh, Al sees an opportunity to try for some consensus, saying, Weve had a chance to hear a number of different qualifications. Lets each take a moment and make a list of the qualifications we personally think are essential for the new ecommerce development person to possess. Well share them and continue discussing until we can describe the person in enough detail to turn a description over to the human resources group for processing.",

    
        questions: [
          "What qualifications should the systems analysis team prioritize when hiring for this ecommerce role?",
          "Is it more important to know specific languages (like JavaScript, C++) or to have a strong aptitude for learning quickly?",
          "Should the new hire have business knowledge (like accounting, inventory, or distribution)? Why or why not?",
          "Do all team members need the same skill set, or should they have complementary strengths?",
          "What personality or character traits should the ideal candidate have for this role?",
          "How would you summarize your ideal candidate profile in one sentence?"
        ]
      },
    {
        id: "2",
        title: "CASE STUDY 2",
        subtitle: "The E in Vitamin E Stands for Ecommerce",
        description: "Help the owners of Marathon Vitamin Shops identify, evaluate, and prioritize the essential components of an ecommerce system. Analyze the interdependence of tasks and determine which responsibilities should be kept in-house or outsourced.",
        objective: "Assess the key components of an ecommerce system and recommend an implementation strategy that balances control, efficiency, and scalability.",
        duration: "25–30 minutes",
        taughtBy: "Dr. Eliza Kincaid and Assistant Bot VERA",
        format: "Short essays, critical thinking prompts, and system planning discussions in a guided chat format.",
        completion: "You’ll finish once you’ve submitted your strategic recommendation and all tasks have been reviewed by both guides.",
        questionOverview: "3 total tasks, each requiring a written response",
        prerequisite: "Read Chapter 2",
        previewImg: "../static/casestudy2.png",
      
        keyTopics: [
          "Ecommerce system components",
          "Customer experience design",
          "In-house vs. outsourced operations",
          "Strategic prioritization",
          "System interdependence",
          "Digital service scalability"
        ],

        context: `“Our retail shops and mail-order division are quite healthy,” says Bill Berry, one of the owners of Marathon Vitamin Shops, “but to be competitive, we must establish an ecommerce website.” His father, a co-owner, exclaims, “I agree, but where do we start?” The elder Berry knew, of course, that it wasn’t a case of setting up a website and asking customers to order off the website. He identified eight different parts to ecommerce and realized that they were all part of a larger system. In other words, all the parts had to work together to create a strong package. His list of elements essential to ecommerce included the following:

1. Attracting customers to an ecommerce website  
2. Informing customers about products and services offered  
3. Allowing customers to customize products online  
4. Completing transactions with customers  
5. Accepting payment from customers in a variety of forms  
6. Supporting customers after the sale via the website  
7. Arranging for the delivery of goods and services  
8. Personalizing the look and feel of the website for different customers

Bill Berry read the list and contemplated it for a while. “It is obvious that ecommerce is more complex than I thought,” he says.`,
      
        questions: [
            "Make a list of the elements that are interrelated or interdependent. Then write a paragraph stating why it is critical to monitor these elements closely.",
            "Decide on the boundaries and ultimate scope of the system. Write a paragraph expressing an opinion on which elements are critical for Marathon Vitamin Shops and which elements can be explored at a later date.",
            "Suggest which elements should be handled in-house and which should be outsourced to another company that may be better able to handle the job. Justify your suggestions in two paragraphs, one for the in-house jobs and one for the outsourced tasks."
          ]
    },
    {
      id: "3",
      title: "CASE STUDY 3",
      subtitle: "We’re Off to See the Wizards",
      description: "Join Elphaba and Glinda, owners of Emerald City Beautyscapes, as they navigate a critical business decision: should they build their own software system, buy a commercial off-the-shelf (COTS) package like QuickBooks Pro, or outsource to a service like Lawn Wizards? Explore the trade-offs between customization, cost, and scalability in software solutions.",
      objective: "Analyze and compare the advantages and disadvantages of building proprietary software, purchasing COTS software, or outsourcing services, and recommend a suitable path for Emerald City Beautyscapes.",
      duration: "30-35 minutes",
      taughtBy: "Glinda K. Chenoweth and Assistant Bot ALMA",
      format: "Interactive chat featuring short written reflections, scenario discussions, and a final recommendation memo.",
      completion: "You’ll complete this case once you’ve responded to all comparison questions and provided a written recommendation.",
      questionOverview: "5–7 total questions",
      prerequisite: "Read Chapter 3",
      previewImg: "../static/casestudy3.png",
  
      keyTopics: [
          "Build vs. buy analysis",
          "Commercial Off-The-Shelf (COTS) software",
          "Outsourcing decisions",
          "Customization vs. scalability",
          "Software licensing models",
          "Cost-benefit analysis in IT projects"
      ],
      context: "Elphaba I. Menzel and Glinda K. Chenoweth are the owners of Emerald City Beautyscapes, a commercial landscaping company. They are trying to decide whether to write their own software, perhaps using Microsoft Access as a basis; adopt a COTS software package such as QuickBooks Pro; or hire a service called Lawn Wizards, Inc., to perform all their bookkeeping functions. Elphaba turns to Glinda and asks, “Is it possible for us to create a system of our own?” Glinda replies, “I suppose we could, but it would take forever. We would need to define all our fields, our queries, and our reports. We would need to know who hasn’t paid us yet and how long it has been since we last billed them.” “Yes,” says Elphaba, “and we would also have to create product descriptions, service descriptions, and codes for everything we sell and provide.” “If that were all we needed, we could probably do it,” says Glinda. “But we also need to include a scheduling system. We need to know when we can provide the services to our customers and what to do if we fall behind schedule. Maybe it just isn’t worth it.” “Still,” reflects Glinda, “my mother used to say ‘There’s no place like home.’ Maybe there’s no software like homegrown.” “You see both sides of everything,” remarks Elphaba. “But the path you want to take is too long and risky. We need a software package that is ready for us to use now. I hear that there are products they call commercial off-the-shelf software that we can buy and adapt to our lawn service business. I’ll investigate.” So, Elphaba sets out to look for software that may be suitable. “I’ve found something,” cries Elphaba. “I found this software called QuickBooks Pro at www.quickbooks.intuit.com, and it looks like we can afford it. There are numerous versions of the software already—one for accounting, one for construction, one for health services. Maybe we can find a package that suits us. If not, it looks like we can customize the generic version of QuickBooks Pro to fit our needs. “Our system could grow, too. QuickBooks Pro is readily scalable. We can add customers, suppliers, or products easily. I just wanted to plant the idea of buying a ready-made package on you.” “That’s interesting,” says Glinda, “but I’ve been doing my own research. Some of our competitors have told me they let a company do all the work for them. The company is called Lawn Wizards. They do landscaping, but they also maintain accounts receivable and scheduling packages.” So off they went to see the Wizards. Joel Green, the owner and creator of Lawn Wizards, is proud of his software. “I spent a great deal of time working with my suppliers, that is, nurseries, in the area, and we have developed a coding system for everything,” he brags. “All the trees, sizes of trees, shrubs, flowers, mulch, and even lawn care tools have numbers.  “I started with a small firm, but when customers realized I paid attention to every little detail, my business blossomed.” He adds, “My suppliers love my system because it cuts down on confusion. “I noticed that my competitors were working with the same suppliers but were getting less preferential treatment because they couldn’t communicate about products very effectively. So I decided I would offer my software for hire. I would make money by renting out my software and demand even greater respect from my suppliers. I can even deliver it over the cloud. My end-user license agreement states that I own the software, product codes, and data generated by the system. “Using my unique Wizards software, I can customize the package a bit for the customer, but essentially all the lawn services in the state will be using my database, codes, and B2B features. I maintain my software. If you could see the software code, it would look just like a manicured lawn.” Now Glinda and Elphaba are even more confused than before. They have three distinct options: create a custom package on their own, buy COTS software such as QuickBooks Pro, or outsource their needs to Lawn Wizards. Help them learn the true secret of (software) happiness by helping them articulate the pros and cons of each of their alternatives. What would you recommend? In two paragraphs, write a recommendation that grows out of your consideration of their specific business situation.",
      questions: [
          "What are the main advantages of building custom software for Emerald City Beautyscapes? What are the risks?",
          "What benefits does COTS software like QuickBooks Pro offer compared to custom development?",
          "What are the pros and cons of outsourcing to a service provider like Lawn Wizards?",
          "Considering Emerald City’s needs (e.g., product tracking, scheduling, customer billing), which solution seems most scalable?",
          "What role does cost play in making this decision? Should initial affordability outweigh long-term flexibility?",
          "If you were in Elphaba’s position, what would you recommend: building, buying, or outsourcing? Justify your recommendation.",
          "Draft a short memo outlining the recommendation to Elphaba and Glinda, including key reasons for your choice."
      ]
    },
  {
      id: "4",
      title: "CASE STUDY 4",
      subtitle: "Order in the Courts",
      description: "Assist Tennyson 'Tennys' Courts, a manager at Global Health Spas, as he works to improve a questionnaire designed for all spa managers. Analyze the flaws in his current survey approach and help redesign the form to gather clearer, more actionable feedback from 80 outlets worldwide.",
      objective: "Evaluate the effectiveness of data collection forms in large organizations and recommend improvements to enhance usability, tone, and clarity of system feedback gathering.",
      duration: "20-25 minutes",
      taughtBy: "Terri Towell and Assistant Bot ALMA",
      format: "Interactive chat with form critiques, short written suggestions, and Web form design analysis.",
      completion: "You’ll complete this case study after critiquing the original form, proposing key revisions, and outlining how to implement an improved version digitally.",
      questionOverview: "5–6 total questions",
      prerequisite: "Read Chapter 4",
      previewImg: "../static/casestudy4.png",
  
      keyTopics: [
          "User-centered design",
          "Effective survey/questionnaire design",
          "Systems analysis and data gathering",
          "Communication clarity",
          "Form tone and professionalism",
          "Human-computer interaction (HCI) principles"
      ],
      context: "“I love my work,” Tennys says, beginning the interview with a volley. “It’s a lot like a game. I keep my eye on the ball and never look back,” he continues. Tennyson “Tennys” Courts is a manager for Global Health Spas, Inc., which has popular health and recreation spas worldwide. “Now that I’ve finished my MBA, I feel like I’m on top of the world with Global,” Tennys says. “I think I can really help this outfit shape up with its computers and health spas.” Tennys is attempting to help your systems group, which is developing a cloud-based system to be used by all 80 outlets. “Can I bounce this off you?” he asks Terri Towell, a member of your team of systems analysts. “It’s a questionnaire I designed for distribution to all spa managers.” Ever the good sport, Terri tells Tennys that she’d love to take a look at the form. But back in the office, Terri puts the ball in your court. Systematically critique Tennys’s technique, as depicted in Figure 4.C2, and explain to him point by point what it needs to be a matchless questionnaire with a winning form. Building on your critique, tell Tennys what he should do to rewrite the form as a Web survey instead.\n" +

      "+--------------------------------------------------------------+-----------------------------+\n" +
      "| QUESTIONNAIRE FOR ALL MANAGERS OF HEALTH SPAS                | What is the biggest problem|\n" +
      "| ***URGENT*** FILL OUT IMMEDIATELY AND RETURN                 | you have when communicating|\n" +
      "| PERSONALLY TO YOUR DIVISION MANAGER. YOUR NEXT               | your information           |\n" +
      "| PAYCHECK WILL BE WITHHELD UNTIL IT IS CONFIRMED              | requirements to            |\n" +
      "| THAT YOU HAVE TURNED THIS IN.                                | headquarters? Describe it  |\n" +
      "|                                                              | briefly.                   |\n" +
      "| In 10 words or fewer, what complaints have you lodged about  |                             |\n" +
      "| the current computer system in the last six months to a year?|                             |\n" +
      "|                                                              | How much computer downtime |\n" +
      "| Are there others who feel the same way in your outlet as     | did you experience last    |\n" +
      "| you do? Who? List their names and positions.                 | year?                      |\n" +
      "|                                                              | 1-2-3-4-5-6-7-8-9-10       |\n" +
      "| 1.                                                           |                             |\n" +
      "| 2.                                                           | Is there any computer      |\n" +
      "| 3.                                                           | equipment you never use?   |\n" +
      "| 4.                                                           |                             |\n" +
      "| 5.                                                           | Description Serial Number   |\n" +
      "| 6.                                                           |                             |\n" +
      "| 7.                                                           | Do you want it removed?    |\n" +
      "|                          [Sticky Note:]                      | Agree   Neutral   Disagree  |\n" +
      "|                          Terri                               |                             |\n" +
      "|                          Please help me improve this form.   | In your opinion, what’s    |\n" +
      "|                          Tennys                              | next as far as computers   |\n" +
      "|                                                              | and Global Health Spas are |\n" +
      "|                                                              | concerned?                 |\n" +
      "|                                                              |                             |\n" +
      "|                                                              | Thanks for filling this    |\n" +
      "|                                                              | out. ...................... |\n" +
      "+--------------------------------------------------------------+-----------------------------+\n",
      
      questions: [
          "Critique the tone and urgency of Tennys’ current questionnaire. How might this tone affect responses from spa managers?",
          "Identify at least three improvements to make the questionnaire clearer and easier for managers to complete.",
          "What problems arise from mixing open-ended and scaled questions within the same form? How could this confuse respondents?",
          "How could the form be adapted into a web-based survey? What are the benefits of a digital format?",
          "Rewrite two problematic questions from the original form to demonstrate your recommended improvements.",
          "Propose a brief outline for a revised feedback form suitable for collecting data from all 80 spa managers effectively."
      ]
  },
    {
        id: "5",
        title: "CASE STUDY 5",
        subtitle: "Clearing the Way for Customer Links",
        description: "Join the World’s Trend web development team as they strategize how to present clearance merchandise online. Navigate decisions around how much information to display, the user flow, and the use of customer prototypes.",
        objective: "Determine the best method to organize and present clearance items on an ecommerce site based on user needs, merchandise categories, and user interface considerations.",
        duration: "20–25 minutes",
        taughtBy: "Dr. Everett Lang and Assistant Bot SYRA",
        format: "Critical thinking prompts and short responses in a guided assistant chat.",
        completion: "You’ll finish after submitting structured responses to each question and both instructors provide approval.",
        questionOverview: "3 total questions requiring paragraph-length written responses",
        prerequisite: "Read Chapter 6",
        previewImg: "../static/casestudy5.png",

        keyTopics: [
        "Ecommerce user experience (UX)",
        "Information presentation on clearance pages",
        "Customer browsing behavior",
        "Content organization and structure",
        "Men’s vs. women’s shopping habits",
        "Prototype types and testing methods"
      ],
      
context: "World’s Trend is building a website on which to sell clearance merchandise usually sold through the Web and through its catalog operation. As a newly hired Web consultant, Lincoln Cerf finds himself in a very cold, wintry city, fighting his way through several inches of snow to meet with one of the systems team members, Mary Maye, at World’s Trend headquarters. Mary welcomes Lincoln, saying, “At least the weather doesn’t seem to affect our Web sales! They’re brisk no matter what.” Lincoln groans appreciatively at her weak attempt at humor, smiles, and says, “I gathered from your email last week that you are trying to determine the type of information that needs to be displayed on your clearance website.” Mary replies, “Yes, I’m trying to get it organized in the best possible way. Our customers are all so busy. I know photos of all our merchandise can take a long time to appear on the page if a customer is accessing the Web via a slower modem from home.” Mary continues, saying, “Linc, I’m not even that concerned about how we design our clearance site at this time. I am worried, though, about how much information we need to include on a page. For example, when items are on clearance, not all colors and sizes are available. Which do you think is better, to include some basic information and let the customer click a button to ask for more information, or to be as complete as possible on one page? If I use the linking method, then I could fit more items on the screen...but it might be too orderly. Customers like the look and feel of a sale in which merchandise is kind of jumbled together.” Linc counters her line of thought, saying, “Yeah, I wonder how customers want the information organized. Have you actually watched them use the Web? I mean, do they look for shoes when they buy a suit? If so, should shoes appear on the suit page or be linked in some way?” Mary comments, “Those are my questions, too. Then I wonder if we should just try this approach for men’s clothing before we implement it for women’s clothing. What if men’s and women’s approaches to shopping on the Web are different?” As a third member of the World’s Trend website development group, respond in a brief written report to Lincoln and Mary about whether they should use a prototype to elicit recommendations from potential customers about the proposed website. What type of prototype is appropriate? Consider each form of prototype and explain why each type would apply (or would not apply) to this problem. Devote a paragraph to each explanation.",

    questions: [
      "What type of information needs to be displayed on the clearance website?",
      "Should photos of merchandise be limited due to slow internet connections?",
      "Should basic information with clickable links be used, or should all information appear directly on the page?",
      "Do customers prefer information to be organized or presented in a more jumbled, sale-like layout?",
      "Have customers’ behaviors on the current website been observed directly?",
      "Should related items (e.g., shoes with suits) appear together on the same page or as separate links?",
      "Should the proposed approach be tested only with men's clothing before applying it to women's?",
      "Could men's and women's online shopping behaviors be different?",
      "Should a prototype be used to gather customer feedback about the website design?",
      "Which type of prototype (low-fidelity, high-fidelity, horizontal, vertical) is most appropriate for this project?"
  ]
    },
    {
      "id": "6",
      "title": "CASE STUDY 6",
      "subtitle": "Catching a Summer Code",
      "description": "This case study explores the challenges faced by a data entry team during the summer months, when temporary workers are brought in and coding systems are changed for ease of use. Students will analyze the effects of altering data standards, consider the long-term consequences of such decisions, and recommend improvements to maintain consistency and accuracy in data management.",
      "objective": "Evaluate the impact of temporary operational changes on full-time staff, data integrity, and long-term retrieval. Recommend strategies for integrating short-term employees without disrupting workflows or reducing data quality.",
      "duration": "30–40 minutes",
      "taughtBy": "Dr. Elena Strauss and Assistant TIA (ALMA)",
      "format": "Critical thinking prompts and short responses in a guided assistant chat.",
      "completion": "You’ll finish after submitting structured responses to each question and both instructors provide approval.",
      "questionOverview": "3 total questions requiring paragraph-length written responses",
      "prerequisite": "Read Chapter 15",
      "previewImg": "../static/casestudy6.png",
      "keyTopics": [
        "Data entry standards",
        "Short-term staffing impact",
        "Code consistency and retrieval",
        "Employee productivity",
        "System design for scalability",
        "Human error in data operations"
      ],
      "context": "Vicky takes her fingers off her keyboard and bends over her workstation to verify the letters on the invoices stacked in front of her. \"What on earth?\" Vicky asks aloud as she further scrutinizes the letters that encode cities where orders are to be shipped.\n\nShelly Overseer, her supervisor, who usually sits a couple of workstations away, is passing by and sees Vicky's consternation. \"What's the matter? Did the sales rep forget to write in the city code again?\"\n\nVicky swings around in her chair to face Shelly. \"No, there are codes here, but they're weird. We usually use a three-letter code, right? Like CIN for Cincinnati, SEA for Seattle, MIN for Minneapolis, BUF for Buffalo. They're all five-letter codes here, though.\"\n\n\"Look,\" Vicky says, lifting the invoice to show Shelly. \"CINNC, SEATT, MINNE. It'll take me all day to enter these. No kidding, it's really slowing me down. Maybe there's a mistake. Can't I just use the standard?\"\n\nShelly backs away from Vicky's workstation as if the problem were contagious. Excusing herself apologetically, Shelly says, \"It's the part-timers. They are learning sales now, and management was worried that they'd get messed up on their cities. I think it has something to do with mixing up Newark and New Orleans on the last orders. So, a committee decided to make the cities more recognizable by having them add two letters. Those kids can't learn everything we know overnight, even though they try. It's just until August 19, though, when the part-timers go back to school.\"\n\nAs Vicky glumly turns back to her keyboard, Shelly shakes her head sympathetically and says, \"I know it's a strain and it's making you feel miserable, but don't worry. You'll get over it. It's just a summer code.\"",
      "questions": [
        "What general guidelines of coding has management over- looked in its decision to use a summer code for cities? Make a list of them.",
        "What is the effect on full-time data entry personnel of changing codes for the ease of temporary help? Respond in two paragraphs.",
        "What future impact could the temporary change in codes have on sorting and retrieving data entered during the summer period? Take two paragraphs to discuss these implications.",
        "What changes can you suggest so that the part-timers don't get mixed up on codes in the short term?",
        "In a memo to the supervisor of this work group, make a list of five to seven changes in the data capture or data entry procedures that can be made to accommodate short-term hires without disrupting normal business.",
        "In a paragraph, indicate how this goal can be accomplished without marring the productivity of data entry personnel."
      ]
    }
    

];

const caseStudies = [caseStudy1, caseStudy2, caseStudy3, caseStudy4, caseStudy5, caseStudy6];


function caseStudy1() {
  const caseData = caseStudyData.find(cs => cs.id === "1");
  if (caseData) {
    console.log("Case Study 1 triggered");
    updateCaseHeader(caseData.title, caseData);
  }
}

function caseStudy2() {
    const caseData = caseStudyData.find(cs => cs.id === "2");
  if (caseData) {
    console.log("Case Study 2 triggered");
    updateCaseHeader(caseData.title, caseData);
  } 
}

function caseStudy3() {
  const caseData = caseStudyData.find(cs => cs.id === "3");
  if (caseData) {
    console.log("Case Study 3 triggered");
    updateCaseHeader(caseData.title, caseData);
  } 
}

function caseStudy4() {
  const caseData = caseStudyData.find(cs => cs.id === "4");
  if (caseData) {
    console.log("Case Study 4 triggered");
    updateCaseHeader(caseData.title, caseData);
  } 
    
}

function caseStudy5() {
    const caseData = caseStudyData.find(cs => cs.id === "5");
  if (caseData) {
    console.log("Case Study 5 triggered");
    updateCaseHeader(caseData.title, caseData);
  }
    
}

function caseStudy6() {
    console.log("Case Study 6 triggered");
    updateCaseHeader("CASE STUDY 6");
}

function showCurrentQuestion() {
  const container = document.getElementById('question-container');
  if (currentQuestions.length === 0) {
    container.innerText = 'No questions available.';
    return;
  }

  const question = currentQuestions[currentQuestionIndex];
  container.innerText = `Q${currentQuestionIndex + 1}: ${question}`;
  submitBtn.disabled = true; 
}




function typeText(element, fullText, delay = 10) {
    return new Promise(resolve => {
      element.innerHTML = '';
      element.style.display = 'block';
  
      let i = 0;
  
      const interval = setInterval(() => {
        element.innerHTML += fullText.charAt(i);
        i++;
        if (i >= fullText.length) {
          clearInterval(interval);
          resolve(); // ✅ done typing
        }
      }, delay);
    });
}
  
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');

    // Toggle button styles
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Toggle tab contents
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    const activeTab = document.getElementById(`tab-${target}`);
    if (activeTab) activeTab.classList.add('active');
  });
});


function setupTabSwitching() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      // Toggle button styles
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show the selected tab content, hide others
      document.querySelectorAll('.tab-content').forEach(tab => {
        if (tab.id === `tab-${target}`) {
          tab.style.display = 'block';
        } else {
          tab.style.display = 'none';
        }
      });

      // ✅ If "questions" tab is selected, show the current question
      if (target === 'questions') {
        showCurrentQuestion();
      }
    });
  });
}




function setupChat({ caseId, caseSubtitle, caseContext }) {
  console.log("[setupChat] Running with:", { caseId, caseSubtitle, caseContext });

  document.body.style.backgroundImage = 'none';

  const dotsLoader = document.querySelector('.dots-loader');
  const backArrow = document.querySelector('.back-arrow');
  const contextEl = document.getElementById('case-context');
  const tabSection = document.getElementById('tab-section');

  if (dotsLoader) dotsLoader.style.display = 'none';
  if (backArrow) backArrow.style.display = 'block';

  // ✅ Fill case context
  if (contextEl && caseContext) {
    contextEl.textContent = ''; // clear first
    contextEl.textContent = `Case Study\n> ${caseContext}`;

  } else {
    console.warn("[setupChat] ⚠️ Missing context or contextEl");
  }

  // ✅ Show tab UI section
  if (tabSection) {
    tabSection.style.display = 'block';
    console.log("[setupChat] ✅ Showing tab section");
  }

  // ✅ Set only 'context' tab as active
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('[data-tab="context"]').classList.add('active');

  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-context').classList.add('active');
}

const textarea = document.getElementById('user-answer');
const wordCountDisplay = document.getElementById('word-count');
const submitBtn = document.getElementById('submit-question-btn');

// Disable the submit button by default
submitBtn.disabled = true;

textarea.addEventListener('input', () => {
  const text = textarea.value.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;

  wordCountDisplay.textContent = `Words: ${wordCount}`;

  // Enable or disable the submit button
  submitBtn.disabled = wordCount === 0;
});




document.getElementById('ask-professor-btn').addEventListener('click', () => {
  const question = currentQuestions[currentQuestionIndex];
  const container = document.getElementById('question-container');
  const loader = document.querySelector('.dots-loader');

  const askTutorBtn = document.getElementById('ask-tutor-btn');
  const askProfBtn = document.getElementById('ask-professor-btn');
  const submitBtn = document.getElementById('submit-question-btn');

  // 🔒 Disable buttons
  askTutorBtn.disabled = true;
  askProfBtn.disabled = true;
  submitBtn.disabled = true;

  // ⏳ Show loading indicator
  textarea.disabled = true;
  loader.style.display = 'flex';

  fetch('http://localhost:8080/askProfForHelp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      caseId: window.activeCaseData.id,
      question: question
    })
  })
  .then(res => res.json())
  .then(data => {
    container.textContent += `\n\n> Professor\n\n> ${data.reply}`;

    // ✅ Chain log-question call
    return fetch('http://localhost:8080/log-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        caseId: window.activeCaseData.id,
        question: question,
        answer: data.reply,
        responder: 'Professor'
      })
    });
  })
  .then(res => res.json())
  .then(logData => {
    console.log("📝 Question logged:", logData.status);
  })
  .catch(err => {
    console.error("❌ Error with professor help or logging:", err);
  })
  .finally(() => {
    // ✅ Hide loader
    loader.style.display = 'none';

    // 🔓 Re-enable buttons
    textarea.disabled = false;
    askTutorBtn.disabled = false;
    askProfBtn.disabled = false;
    
    const currentText = textarea.value.trim();
submitBtn.disabled = currentText.length === 0;
    
  });
});



document.getElementById('ask-tutor-btn').addEventListener('click', () => {
  const question = currentQuestions[currentQuestionIndex];
  const container = document.getElementById('question-container');
  const loader = document.querySelector('.dots-loader');

  const askTutorBtn = document.getElementById('ask-tutor-btn');
  const askProfBtn = document.getElementById('ask-professor-btn');
  const submitBtn = document.getElementById('submit-question-btn');

  // 🔒 Disable buttons
  askTutorBtn.disabled = true;
  askProfBtn.disabled = true;
  submitBtn.disabled = true;

  // ⏳ Show loader
  textarea.disabled = true;
  loader.style.display = 'flex';

  fetch('http://localhost:8080/askTutorForHelp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      caseId: window.activeCaseData.id,
      question: question
    })
  })
  .then(res => res.json())
  .then(data => {
    container.textContent += `\n\n> Tutor\n> ${data.reply}\n>`;

    return fetch('http://localhost:8080/log-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        caseId: window.activeCaseData.id,
        question: question,
        reply: data.reply,
        askedBy: 'tutor'
      })
    });
  })
  .then(() => {
    console.log("✅ Tutor reply logged.");
  })
  .catch(err => {
    console.error("❌ Error fetching tutor help:", err);
  })
  .finally(() => {
    // ✅ Hide loader
    loader.style.display = 'none';

    // 🔓 Re-enable buttons
    textarea.disabled = false;
    askTutorBtn.disabled = false;
    askProfBtn.disabled = false;
    
    const currentText = textarea.value.trim();
submitBtn.disabled = currentText.length === 0;

  });
});




document.getElementById('submit-question-btn').addEventListener('click', () => {
  console.log("Submitting answer for:", currentQuestions[currentQuestionIndex]);

  // Advance to the next question if available
  if (currentQuestionIndex < currentQuestions.length - 1) {
    document.getElementById('user-answer').value = ''; // ✅ Clear textarea
    const wordCountEl = document.getElementById('word-count');
    const submitBtn = document.getElementById('submit-question-btn');
    submitBtn.disabled = true;               
    wordCountEl.textContent = 'Word Count: 0'; 
    currentQuestionIndex++;
    showCurrentQuestion();
  } else {
    document.getElementById('question-container').innerText = "> All questions completed!";
    document.getElementById('question-buttons').style.display = 'none'; // Optionally hide buttons

      // ✅ Hide the textarea and word count when done
      document.getElementById('user-answer').style.display = 'none';
      document.getElementById('word-count').style.display = 'none';
  }
});


  
  
  
  

  
function updateCaseHeader(text, caseData) {
    const header = document.getElementById('case-header');

    if (header) {
        header.textContent = text;
        header.style.display = 'block';
    }

    // ✅ Store globally if needed in other places like beginBtn click
  window.activeCaseData = caseData;

    const beginBtn = document.getElementById('begin-case-btn');
    const dotsLoader = document.querySelector('.dots-loader');
    const backArrow = document.querySelector('.back-arrow');


  // Example: log or use the caseData.subtitle
  console.log("Subtitle:", caseData.subtitle);



    if (beginBtn) {
        //beginBtn.style.display = 'block';

        // ✅ attach listener (safe to add multiple times because it's idempotent)
        beginBtn.onclick = () => {

            const caseInfo = window.activeCaseData;
  if (caseInfo) {
    console.log(caseInfo);
    
  }

  console.log("Begin clicked for case:", caseInfo.title);
            document.body.style.backgroundImage = "url('../static/csbackground6_recolored.png')";
            
            if (dotsLoader) {
                dotsLoader.style.display = 'flex';
            }

            beginBtn.style.display = 'none';
            backArrow.style.display = 'none';
            //header.style.display = 'none';

            

            // hide description, objective, and duration sections
        const desc = document.getElementById('case-description');
        if (desc) {
            desc.style.display = 'none';
        }

        const obj = document.getElementById('case-objective');
        if (obj) {
            obj.style.display = 'none';
        }

        const dur = document.getElementById('case-duration');
        if (dur) {
            dur.style.display = 'none';
        }

        const taught = document.getElementById('case-taught-by');
        if (taught) {
         taught.style.display = 'none';
        }

        const format = document.getElementById('case-format');
        if (format) {
             format.style.display = 'none';
        }

        const completion = document.getElementById('case-completion');
        if (completion) {
        completion.style.display = 'none';
        }

        const overview = document.getElementById('case-question-overview');
        if (overview) {
        overview.style.display = 'none';
        }

        const prerequisite = document.getElementById('case-prerequisite');
        if (prerequisite) {
        prerequisite.style.display = 'none';
        }

        const topics = document.getElementById('case-key-topics');
        if (topics) {
                  topics.style.display = 'none';
        }

            const questions = document.getElementById('case-questions');
            if (questions) {
             questions.style.display = 'none';
            }

        // optionally hide PDF link too
        const pdf = document.getElementById('case-pdf');
        if (pdf) {
            pdf.style.display = 'none';
        }

        fetch('http://localhost:8080/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    caseId: window.activeCaseData.id,
    caseSubtitle: window.activeCaseData.subtitle,
    caseContext: window.activeCaseData.context
  }) 
})
.then(res => res.json())
.then(data => {
  const almaMessage = data.profReply;
  const tiaMessage = data.tutorPrompt;

  // Step 1: Assign raw text (quietly, no animation)
  document.getElementById('prof-overview').textContent = `Professor\n> ${almaMessage}`;
  document.getElementById('tutor-overview').textContent = `Tutor\n> ${tiaMessage}`;

  // Step 2: Set up tabs FIRST (hides others)
  document.getElementById('tab-section').style.display = 'block';

  // Show only context tab by default
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-tab="context"]').classList.add('active');

  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-context').classList.add('active');

  // Step 3: Animate case context only
  setupChat({
    caseId: window.activeCaseData.id,
    caseSubtitle: window.activeCaseData.subtitle,
    caseContext: window.activeCaseData.context
  });

  // 👇 NEW: load questions
currentQuestions = window.activeCaseData.questions || [];
currentQuestionIndex = 0;

  // Optionally initialize tab switching
  setupTabSwitching();

  // Chain second fetch
  return fetch('http://localhost:8080/log-chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ logMessage: data.reply })
  });

                

            
          })
          .then(res => res.json())
          .then(logData => {
            console.log("Chat log saved:", logData);
          })
          .catch(err => console.error("Error in chat chain:", err));
        
        
        };
          
        
    }
}


  
// ✅ Define the async function outside (so it's not redefined every time)
async function showCaseStudyDetails(caseData) {
    const header = document.getElementById('case-header');
    const subtitle = document.getElementById('case-subtitle');
    const desc = document.getElementById('case-description');
    const obj = document.getElementById('case-objective');
    const dur = document.getElementById('case-duration');
    const taughtBy = document.getElementById('case-taught-by');
    const format = document.getElementById('case-format');
    const completion = document.getElementById('case-completion');
    const questionOverview = document.getElementById('case-question-overview');
    const keyTopics = document.getElementById('case-key-topics');
    const prerequisite = document.getElementById('case-prerequisite');
    const pdf = document.getElementById('case-pdf');
    const beginBtn = document.getElementById('begin-case-btn');
    const backArrow = document.getElementById('back-arrow');
  
    if (header) {
        
        header.innerText = caseData.title;
        header.style.display = 'block';
      }

    if (subtitle) {
        subtitle.textContent = caseData.subtitle;
        subtitle.style.display = 'block';
      }

    if (desc) {
      desc.style.display = 'none';
      await typeText(desc, `> Description: ${caseData.description}`);
    }
  
    if (obj) {
      obj.style.display = 'none';
      await typeText(obj, `> Objective: ${caseData.objective}`);
    }
  
    if (dur) {
      dur.style.display = 'none';
      await typeText(dur, `> Duration: ${caseData.duration}`);
    }
  
    if (taughtBy) {
      taughtBy.style.display = 'none';
      await typeText(taughtBy, `> Taught By: ${caseData.taughtBy}`);
    }
  
    if (format) {
      format.style.display = 'none';
      await typeText(format, `> Format: ${caseData.format}`);
    }
  
    if (completion) {
      completion.style.display = 'none';
      await typeText(completion, `> Completion: ${caseData.completion}`);
    }
  
    if (questionOverview) {
      questionOverview.style.display = 'none';
      await typeText(questionOverview, `> Questions: ${caseData.questionOverview}`);
    }
  
    if (keyTopics) {
      keyTopics.style.display = 'none';
      const topicsText = caseData.keyTopics.map(topic => `    > ${topic}`).join('\n');
      await typeText(keyTopics, `> Key Topics Covered:\n${topicsText}`);
    }
  
    if (prerequisite) {
      prerequisite.style.display = 'none';
      await typeText(prerequisite, `> Prerequisite: ${caseData.prerequisite}`);
    }

    // ✅ Add these three at the end
  if (pdf) {
    pdf.style.display = 'none';
    
      pdf.innerHTML = `
        <span class="terminal-button" onclick="window.open('${caseData.previewImg}', '_blank')">&gt; Open Case</span>
      `;
      pdf.style.display = 'block';
    
  }

 

  if (beginBtn) {
    beginBtn.style.display = 'none';
    
      beginBtn.style.display = 'block';
    
  }
}
    



window.addEventListener('DOMContentLoaded', () => {

  const tabSection = document.getElementById('tab-section');
  if (tabSection) tabSection.style.display = 'none';

    setTimeout(() => {
        document.body.style.backgroundImage = "url('../static/csCasebg_recolored.png')";
        
        const spinner = document.querySelector('.spinner');
        if (spinner) {
            spinner.style.display = 'none';
        }

        const dotsLoader = document.querySelector('.dots-loader');
        if (dotsLoader) {
            dotsLoader.style.display = 'none';
        }

        const button = document.querySelector('.custom-btn');
        if (button) {
            button.style.display = 'block';
        }


        const buttonRow = document.querySelector('.button-row');
        if (buttonRow) {
            buttonRow.classList.add('show');
        }

         // ✅ attach click listeners to ALL buttons
         const buttons = document.querySelectorAll('.custom-btn');

         const backArrow = document.querySelector('.back-arrow');
 

         buttons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
          
              document.body.style.backgroundImage = 'none';
          
              if (buttonRow) {
                buttonRow.style.display = 'none';
              }
          
          
            
          
              // ✅ STEP 2: Use ID to find the correct object in caseStudyData
              const caseData = caseStudyData[index];
          
              
          
              // ✅ Async call to display case info
              (async () => {
                await showCaseStudyDetails(caseData);
          
                if (backArrow) {
                  backArrow.style.display = 'block';
                }
              })();
          
              // ✅ Call the function in caseStudies[index]
              caseStudies[index]?.();
            });
          });
          
          

         // ✅ now add a click listener to the back arrow
        if (backArrow) {
        backArrow.addEventListener('click', () => {
        // show the background image again
        document.body.style.backgroundImage = "url('../static/csCasebg_recolored.png')";
        
        // show the button row again
        if (buttonRow) {
            buttonRow.style.display = 'flex';
        }

        document.getElementById('collapsible-wrapper').style.display = 'none';

        // hide the back arrow again
        backArrow.style.display = 'none';

        // ✅ Now inside the click handler
        const header = document.getElementById('case-header');
        if (header) {
            header.style.display = 'none';
        }


        const subtitle = document.getElementById('case-subtitle');
        if (subtitle) {
            subtitle.style.display = 'none';
        }

      // ✅ Hide the tab buttons as well
const tabButtons = document.querySelector('.tab-buttons');
if (tabButtons) {
  tabButtons.style.display = 'none';
}

// Optionally hide all tab contents too
document.querySelectorAll('.tab-content').forEach(tab => {
  tab.style.display = 'none';
});


        const context = document.getElementById('case-context');
        if (context) {
            context.style.display = 'none';
        }

        const beginBtn = document.getElementById('begin-case-btn');
        if (beginBtn) {
            beginBtn.style.display = 'none';
        }

        // hide description, objective, and duration sections
        const desc = document.getElementById('case-description');
        if (desc) {
            desc.style.display = 'none';
        }

        const obj = document.getElementById('case-objective');
        if (obj) {
            obj.style.display = 'none';
        }

        const dur = document.getElementById('case-duration');
        if (dur) {
            dur.style.display = 'none';
        }

        const taught = document.getElementById('case-taught-by');
        if (taught) {
            taught.style.display = 'none';
        }

        const format = document.getElementById('case-format');
        if (format) {
            format.style.display = 'none';
        }

        const completion = document.getElementById('case-completion');
        if (completion) {
         completion.style.display = 'none';
        }

        const overview = document.getElementById('case-question-overview');
        if (overview) {
            overview.style.display = 'none';
        }

        const prerequisite = document.getElementById('case-prerequisite');
        if (prerequisite) {
            prerequisite.style.display = 'none';
        }

        const topics = document.getElementById('case-key-topics');
        if (topics) {
            topics.style.display = 'none';
        }

    const questions = document.getElementById('case-questions');
    if (questions) {
    questions.style.display = 'none';
    }

        // optionally hide PDF link too
        const pdf = document.getElementById('case-pdf');
        if (pdf) {
            pdf.style.display = 'none';
        }

        });

        

        }

    }, 3000);
});
