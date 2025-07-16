const caseStudyData = [
    {
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
      title: "CASE STUDY 3",
      description: "Examine how AI-driven chatbots impact academic integrity.",
      objective: "Design responsible usage policies to protect academic values.",
      duration: "15 minutes",
      pdfUrl: "pdfs/case3.pdf"
    },
    {
        title: "CASE STUDY 4",
        description: "Examine how AI-driven chatbots impact academic integrity.",
        objective: "Design responsible usage policies to protect academic values.",
        duration: "15 minutes",
        pdfUrl: "pdfs/case3.pdf"
    },
    {
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
        title: "CASE STUDY 6",
        description: "Examine how AI-driven chatbots impact academic integrity.",
        objective: "Design responsible usage policies to protect academic values.",
        duration: "15 minutes",
        pdfUrl: "pdfs/case3.pdf"
    }

];

function wrapTextByWords(text, wordsPerLine = 20) {
    const words = text.split(' ');
    let lines = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(' '));
    }
    return lines.join('<br>');
  }

  
function updateCaseHeader(text) {
    const header = document.getElementById('case-header');
    if (header) {
        header.textContent = text;
        header.style.display = 'block';
    }

    const beginBtn = document.getElementById('begin-case-btn');
    const dotsLoader = document.querySelector('.dots-loader');
    const backArrow = document.querySelector('.back-arrow');


    if (beginBtn) {
        //beginBtn.style.display = 'block';

        // ✅ attach listener (safe to add multiple times because it's idempotent)
        beginBtn.onclick = () => {
            document.body.style.backgroundImage = "url('../static/csbackground6_recolored.png')";
            
            if (dotsLoader) {
                dotsLoader.style.display = 'flex';
            }

            beginBtn.style.display = 'none';
            backArrow.style.display = 'none';
            header.style.display = 'none';

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

        };
        
    }
}

function caseStudy1() {
    console.log("Case Study 1 triggered");
    updateCaseHeader("CASE STUDY 1");
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
    console.log("Case Study 5 triggered");
    updateCaseHeader("CASE STUDY 5");
}

function caseStudy6() {
    console.log("Case Study 6 triggered");
    updateCaseHeader("CASE STUDY 6");
}

function typeText(element, fullText, delay = 30, callback = null) {
    element.innerHTML = ''; // Clear content and allow HTML like <br>
    element.style.display = 'block';
    let i = 0;
  
    const interval = setInterval(() => {
      element.innerHTML += fullText.charAt(i);  // ✅ Use innerHTML here
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, delay);
  }
  

const caseStudies = [caseStudy1, caseStudy2, caseStudy3, caseStudy4, caseStudy5, caseStudy6];

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
          
              // ✅ show the back arrow
              // ✅ show the back arrow after 12 seconds
            if (backArrow) {
                setTimeout(() => {
                backArrow.style.display = 'block';
            }, 11000);
            }
          
              // ✅ Get case study data
              const caseData = caseStudyData[index];
          
              if (caseData) {
                const header = document.getElementById('case-header');
                const desc = document.getElementById('case-description');
                const obj = document.getElementById('case-objective');
                const dur = document.getElementById('case-duration');
                const pdf = document.getElementById('case-pdf');
                const beginBtn = document.getElementById('begin-case-btn');
          
                if (header) {
                  header.innerText = caseData.title;
                  header.style.display = 'block';
                }

                const subtitle = document.getElementById('case-subtitle');
                if (subtitle) {
                subtitle.textContent = caseData.subtitle;
                subtitle.style.display = 'block';
                }
          
                if (desc) {
                    desc.style.display = 'none';
                    setTimeout(() => {
                      typeText(desc, `> Description: ${caseData.description}`);
                    }, 200);
                  }

                  if (obj) {
                    obj.style.display = 'none';
                    setTimeout(() => {
                      typeText(obj, `> Objective: ${caseData.objective}`);
                    }, 1000);
                  }
                  
                  if (dur) {
                    dur.style.display = 'none';
                    setTimeout(() => {
                      typeText(dur, `> Duration: ${caseData.duration}`);
                    }, 1800);
                  }

                  // New Field: Taught By
const taughtBy = document.getElementById('case-taught-by');
if (taughtBy) {
  taughtBy.style.display = 'none';
  setTimeout(() => {
    typeText(taughtBy, `> Taught By: ${caseData.taughtBy}`);
  }, 2600);
}

// New Field: Format
const format = document.getElementById('case-format');
if (format) {
  format.style.display = 'none';
  setTimeout(() => {
    typeText(format, `> Format: ${caseData.format}`);
  }, 3400);
}

// New Field: Completion
const completion = document.getElementById('case-completion');
if (completion) {
  completion.style.display = 'none';
  setTimeout(() => {
    typeText(completion, `> Completion: ${caseData.completion}`);
  }, 4200);
}

// ✅ Question Overview
const questionOverview = document.getElementById('case-question-overview');
if (questionOverview) {
  questionOverview.style.display = 'none';
  setTimeout(() => {
    typeText(questionOverview, `> Questions: ${caseData.questionOverview}`);
  }, 4600);
}

// ✅ Key Topics
const keyTopics = document.getElementById('case-key-topics');
if (keyTopics) {
  keyTopics.style.display = 'none';
  setTimeout(() => {
    // Format topics as a comma-separated list with bullets
    const topicsText = caseData.keyTopics.map(topic => `    > ${topic}`).join('\n');
    typeText(keyTopics, `> Key Topics Covered:\n${topicsText}`);
  }, 4800);
}

// New Field: Format
const prerequisite = document.getElementById('case-prerequisite');
if (prerequisite) {
  prerequisite.style.display = 'none';
  setTimeout(() => {
    typeText(prerequisite, `> Prerequisite: ${caseData.prerequisite}`);
  }, 5000);
}         


    if (pdf) {
        pdf.style.display = 'none';
        setTimeout(() => {
         pdf.innerHTML = `
          <span class="terminal-button" onclick="window.open('${caseData.previewImg}', '_blank')">&gt; Open Case</span>
        `;
         pdf.style.display = 'block';
        }, 11000);
    }
  
    if (beginBtn) {
        beginBtn.style.display = 'none';
        setTimeout(() => {
            beginBtn.style.display = 'block';
        }, 11000);
    }
                  
                  
              }
          
              // ✅ call the matching caseStudy function
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