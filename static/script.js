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
    pdfUrl: "pdfs/case3.pdf",

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
    pdfUrl: "pdfs/case3.pdf",

    keyTopics: [
        "User-centered design",
        "Effective survey/questionnaire design",
        "Systems analysis and data gathering",
        "Communication clarity",
        "Form tone and professionalism",
        "Human-computer interaction (HCI) principles"
    ],
    context: "“I love my work,” Tennys says, beginning the interview with a volley. “It’s a lot like a game. I keep my eye on the ball and never look back,” he continues. Tennyson “Tennys” Courts is a manager for Global Health Spas, Inc., which has popular health and recreation spas worldwide. “Now that I’ve finished my MBA, I feel like I’m on top of the world with Global,” Tennys says. “I think I can really help this outfit shape up with its computers and health spas.” Tennys is attempting to help your systems group, which is developing a cloud-based system to be used by all 80 outlets. “Can I bounce this off you?” he asks Terri Towell, a member of your team of systems analysts. “It’s a questionnaire I designed for distribution to all spa managers.” Ever the good sport, Terri tells Tennys that she’d love to take a look at the form. But back in the office, Terri puts the ball in your court. Systematically critique Tennys’s technique, as depicted in Figure 4.C2, and explain to him point by point what it needs to be a matchless questionnaire with a winning form. Building on your critique, tell Tennys what he should do to rewrite the form as a Web survey instead.",
    
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

  questions: [
    "Should the clearance webpage display a lot of items with minimal info or fewer items with detailed info? Defend your decision in a short paragraph.",
    "Should the company test this approach on women’s clothing first? What if men and women shop differently online? Write a paragraph justifying your decision.",
    "Should the team use a prototype to gather customer input? If so, which type of prototype would you use and why? Explain which types may not apply to this problem."
  ]
    },
{
    id: "6",
    title: "CASE STUDY 6",
    subtitle: "Catching a Summer Code",
    description: "Join Vicky and Shelly at their data entry department as they navigate a sudden change in city coding standards meant to accommodate temporary summer hires. Analyze the unintended consequences of management decisions on full-time staff efficiency and explore how to balance training needs with operational productivity.",
    objective: "Evaluate the impact of coding changes on data entry processes and recommend improvements to prevent productivity losses during seasonal staffing changes.",
    duration: "15-20 minutes",
    taughtBy: "Shelly Overseer and Assistant Bot ALMA",
    format: "Interactive chat featuring written responses, reflections, and memo-style recommendations.",
    completion: "Completion requires answering all reflection and recommendation questions, with confirmation from both agents.",
    questionOverview: "5–7 total questions",
    prerequisite: "Read Chapter 3",
    previewImg: "../static/casestudy6.png",
    pdfUrl: "pdfs/case3.pdf",

    keyTopics: [
        "Business process management",
        "Human factors in system design",
        "Temporary staffing impacts",
        "Coding standardization",
        "Data entry efficiency",
        "Operational change management"
    ],

    questions: [
        "List general guidelines of coding management that were overlooked when introducing a summer code for cities.",
        "Describe how changing city codes affects full-time data entry personnel. How does this impact productivity and morale?",
        "What future complications could result from the temporary change in city codes? Consider data retrieval and sorting during the summer period.",
        "Suggest changes to the data entry procedures that could prevent confusion for part-time hires without disrupting full-time staff.",
        "What short-term and long-term solutions would you recommend in a memo to the supervisor to avoid similar issues in future summer periods?",
        "How can these solutions be implemented without harming the productivity of existing staff?",
        "Reflect: Do you believe management prioritized temporary needs over operational efficiency? Why or why not?"
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
    console.log("Case Study 2 triggered");
    updateCaseHeader("CASE STUDY 2");
}

function caseStudy3() {
    console.log("Case Study 3 triggered");
    updateCaseHeader("CASE STUDY 3");
}

function caseStudy4() {
    console.log("Case Study 4 triggered");
    updateCaseHeader("CASE STUDY 4");
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

function wrapTextByWords(text, wordsPerLine = 20) {
    const words = text.split(' ');
    let lines = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(' '));
    }
    return lines.join('<br>');
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
  

function setupChat() {
    // ✅ REVERT visual changes here
    document.body.style.backgroundImage = 'none';
  
    const dotsLoader = document.querySelector('.dots-loader');
    const backArrow = document.querySelector('.back-arrow');

    dotsLoader.style.display = 'none';

    

    backArrow.style.display = 'block';
    
}  

  
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

            const subtitle = document.getElementById('case-subtitle');
            if (subtitle) {
                subtitle.style.display = 'none';
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



        fetch('http://localhost:8080/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ caseId: window.activeCaseData.id }) 
          })
          .then(res => res.json())
          .then(data => {
            console.log("ALMA says:", data.reply);

            
             // ✅ Clean up UI
            setupChat();

            
          
            // 👇 Chain another fetch based on GPT's reply
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
