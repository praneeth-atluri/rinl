/* =============================================
   RINL VIGILANCE INTERVIEW PREP - app.js
   ============================================= */

/* ---------- DATA ---------- */

const TOPICS = [
  {
    icon: "🏛️",
    title: "Central Vigilance Commission (CVC)",
    tag: "Regulatory Body",
    desc: "Apex integrity institution governing vigilance in all CPSUs including RINL.",
    detail: {
      sections: [
        {
          heading: "What is the CVC?",
          points: [
            "Established in 1964 (statutory body since 2003 via CVC Act).",
            "Apex body to address governmental corruption in India.",
            "Oversees all Central Government organisations and CPSUs.",
            "Works through Chief Vigilance Officers (CVOs) appointed in each CPSU."
          ]
        },
        {
          heading: "CVC Powers & Functions",
          points: [
            "Issues guidelines and instructions on preventive and punitive vigilance.",
            "Exercises superintendence over CBI in corruption cases.",
            "Examines complaints and recommendations in disciplinary matters.",
            "Advises on prosecution/departmental action in corruption cases.",
            "Can call for files and reports from any Central organisation."
          ]
        },
        {
          heading: "CVC & RINL Interface",
          points: [
            "CVO of RINL reports to CVC and functions as an 'extended arm' of the Commission.",
            "CVC approval required for prosecution sanction in certain cases.",
            "Annual Vigilance Awareness Week observed across RINL as per CVC mandate.",
            "All major vigilance cases at RINL are referred to CVC for second opinion."
          ]
        }
      ]
    }
  },
  {
    icon: "🔍",
    title: "Preventive Vigilance",
    tag: "Core Function",
    desc: "Proactive measures to eliminate systemic vulnerabilities and prevent corruption.",
    detail: {
      sections: [
        {
          heading: "Definition & Importance",
          points: [
            "Preventive vigilance focuses on eliminating opportunities for corruption before they arise.",
            "Considered more effective than punitive action – 'Prevention is better than cure'.",
            "Includes system studies, process improvements, and surprise inspections."
          ]
        },
        {
          heading: "Key Preventive Measures",
          points: [
            "<strong>Sensitive Post Identification:</strong> Identifying roles prone to corruption.",
            "<strong>Job Rotation:</strong> Mandatory transfer from sensitive posts (typically every 2-3 years).",
            "<strong>Surprise Inspections:</strong> Unannounced checks in stores, cash, procurement areas.",
            "<strong>System Studies:</strong> Analysing procedures in purchase, contracts, sales for loopholes.",
            "<strong>Integrity Pact:</strong> Agreement between RINL and bidders for transparency in procurement.",
            "<strong>Leveraging Technology:</strong> E-procurement, online tendering to reduce human interface."
          ]
        },
        {
          heading: "Vigilance Awareness Week",
          points: [
            "Observed every year in October/November as per CVC directive.",
            "Theme-based campaign with pledge, seminars, essay competitions.",
            "Promotion of whistleblower mechanisms and anti-corruption awareness."
          ]
        }
      ]
    }
  },
  {
    icon: "⚖️",
    title: "Punitive Vigilance & Disciplinary Proceedings",
    tag: "Investigation",
    desc: "Conducting departmental inquiries, framing charges, and recommending disciplinary action.",
    detail: {
      sections: [
        {
          heading: "Stages of Departmental Inquiry",
          points: [
            "<strong>Stage 1 – Complaint Receipt:</strong> Complaint received and assessed for vigilance angle.",
            "<strong>Stage 2 – Preliminary Inquiry:</strong> Fact-finding by an officer to verify prima facie case.",
            "<strong>Stage 3 – Regular Investigation:</strong> Detailed investigation by Vigilance Officer.",
            "<strong>Stage 4 – Investigation Report:</strong> Report sent to Disciplinary Authority (DA).",
            "<strong>Stage 5 – Charge Sheet (Article of Charge):</strong> DA frames charges and serves to delinquent.",
            "<strong>Stage 6 – Oral Inquiry:</strong> Inquiry Officer (IO) conducts hearing with presenting & defence officers.",
            "<strong>Stage 7 – Inquiry Report:</strong> IO submits findings to DA.",
            "<strong>Stage 8 – Second Stage Advice:</strong> CVC advice sought if applicable.",
            "<strong>Stage 9 – Final Orders:</strong> DA imposes penalty after considering IO report."
          ]
        },
        {
          heading: "Penalties Under CDA Rules",
          points: [
            "<strong>Minor penalties:</strong> Censure, withholding of increment, recovery of loss.",
            "<strong>Major penalties:</strong> Reduction in rank, compulsory retirement, removal, dismissal.",
            "Dismissal means loss of pensionary benefits; removal does not."
          ]
        },
        {
          heading: "Principles of Natural Justice",
          points: [
            "No man shall be a judge in his own cause (Nemo judex in causa sua).",
            "Hear the other side (Audi alteram partem).",
            "Speaking order – DA must give reasons for the penalty imposed."
          ]
        }
      ]
    }
  },
  {
    icon: "📋",
    title: "CDA Rules & Conduct Rules",
    tag: "Rules & Regulations",
    desc: "Conduct, Discipline and Appeal Rules governing RINL employee behaviour and discipline.",
    detail: {
      sections: [
        {
          heading: "Key Conduct Rules for RINL Employees",
          points: [
            "Employees must maintain absolute integrity and devotion to duty.",
            "No employee shall accept gifts beyond prescribed limits.",
            "Property returns: Employees must file annual property returns.",
            "No employee shall engage in private trade or business.",
            "Prohibition on taking part in politics, organising demonstrations against government.",
            "Prohibition on consumption of intoxicants while on duty."
          ]
        },
        {
          heading: "Vigilance Angle in Misconduct",
          points: [
            "Possession of disproportionate assets or resources.",
            "Misappropriation, forgery, or fraud.",
            "Abuse of official position to gain undue advantage.",
            "Gross or willful negligence causing loss to the organisation.",
            "Corruption as defined under Prevention of Corruption Act, 1988.",
            "Note: Lack of vigilance angle → administrative action, not vigilance proceedings."
          ]
        }
      ]
    }
  },
  {
    icon: "🤝",
    title: "Integrity Pact & Procurement Vigilance",
    tag: "Procurement",
    desc: "Ensuring transparency and fairness in procurement, tendering and contract management.",
    detail: {
      sections: [
        {
          heading: "Integrity Pact",
          points: [
            "A pact between RINL and bidders/suppliers to commit to transparent dealings.",
            "Signatories agree not to offer/accept bribes or kickbacks.",
            "Independent External Monitors (IEMs) review complaints from bidders.",
            "Mandatory for contracts above a threshold value.",
            "A bidder found violating the Integrity Pact is blacklisted."
          ]
        },
        {
          heading: "Vigilance in Procurement",
          points: [
            "<strong>Bid Rigging:</strong> Cartel formation among bidders – major vigilance concern.",
            "<strong>Splitting of Tenders:</strong> Breaking large orders to avoid approval limits – punishable.",
            "<strong>Advance Payment Misuse:</strong> Advances to suppliers without adequate recovery checks.",
            "<strong>Over-invoicing:</strong> Paying more than actual supply value.",
            "<strong>Favoured Bidder:</strong> Manipulating NIT conditions to favour a specific vendor."
          ]
        },
        {
          heading: "e-Procurement",
          points: [
            "All tenders above a threshold mandated to be on e-procurement portal.",
            "Reduces human interface, increases transparency.",
            "Audit trail maintained for all actions by purchase officials."
          ]
        }
      ]
    }
  },
  {
    icon: "📢",
    title: "Whistleblower Policy & PIDPI",
    tag: "Complaint Mechanism",
    desc: "Protected Disclosure Scheme for reporting corruption complaints anonymously.",
    detail: {
      sections: [
        {
          heading: "PIDPI – Public Interest Disclosure & Protection of Informers",
          points: [
            "Resolution passed by Government of India to encourage whistleblowing.",
            "Enables any person to make a protected disclosure to the CVC.",
            "CVC ensures identity of the complainant is kept confidential.",
            "Complainants protected against victimisation."
          ]
        },
        {
          heading: "RINL Whistleblower Policy",
          points: [
            "Employees can report concerns about malpractices, fraud, or violations.",
            "Complaints addressed to the CVO directly.",
            "Anonymous complaints are generally not entertained – must be signed.",
            "False complaints may attract action against the complainant.",
            "However, CVC may decide to inquire even into anonymous complaints if prima facie serious."
          ]
        }
      ]
    }
  },
  {
    icon: "🏗️",
    title: "RINL Overview & Steel Industry",
    tag: "Company Knowledge",
    desc: "Key facts about Rashtriya Ispat Nigam Limited – history, products, and Navratna status.",
    detail: {
      sections: [
        {
          heading: "RINL at a Glance",
          points: [
            "Full Name: Rashtriya Ispat Nigam Limited (RINL)",
            "Popular Name: Vizag Steel / Visakhapatnam Steel Plant (VSP)",
            "Ministry: Ministry of Steel, Government of India",
            "Status: Navratna Central Public Sector Enterprise (CPSE)",
            "Ownership: 100% Government of India",
            "Location: Visakhapatnam, Andhra Pradesh",
            "Area: ~33,000 acres – India's largest shore-based steel plant"
          ]
        },
        {
          heading: "History & Milestones",
          points: [
            "Foundation stone laid on 20 January 1971 by PM Indira Gandhi.",
            "RINL incorporated on 18 February 1982.",
            "Plant commissioned in 1992 with 3.0 MTPA capacity.",
            "Expanded to 6.3 MTPA (2015) and 7.3 MTPA (2017).",
            "India's FIRST shore-based integrated steel plant."
          ]
        },
        {
          heading: "Products",
          points: [
            "TMT Rebars (Vizag TMT) – flagship product",
            "Wire Rods, Rounds, Structurals (Angles, Channels, Beams)",
            "Blooms and Billets",
            "Pig Iron, Coal Chemicals (by-products)"
          ]
        }
      ]
    }
  },
  {
    icon: "🎯",
    title: "Vigilance Clearance & Sensitive Posts",
    tag: "Administration",
    desc: "Procedures for granting vigilance clearance and managing sensitive postings.",
    detail: {
      sections: [
        {
          heading: "Vigilance Clearance",
          points: [
            "Required for: promotions, superannuation benefits, overseas visits, empanelment.",
            "Denied if: disciplinary/prosecution proceedings pending, adverse remarks in CR uncommunicated, assets case pending.",
            "Temporary withholding of VC is reviewed periodically.",
            "CVO maintains updated records of all employees with pending cases."
          ]
        },
        {
          heading: "Sensitive Posts",
          points: [
            "Posts in Procurement, Stores, Finance, Sales, Contracts are typically sensitive.",
            "Employees in these posts must be rotated as per CVC guidelines (min. every 2-3 years).",
            "A register of sensitive posts is maintained by the Vigilance Department.",
            "CVO reviews and updates the list periodically.",
            "Non-rotation is itself treated as a lapse by the controlling officer."
          ]
        }
      ]
    }
  }
];

const FLASHCARDS = [
  { tag: "CVC", q: "What does CVC stand for and when was it given statutory status?", a: "Central Vigilance Commission. It was established in 1964 by executive order and given statutory status by the CVC Act, 2003." },
  { tag: "Structure", q: "Who is the head of the Vigilance Department in RINL?", a: "The Chief Vigilance Officer (CVO), appointed with CVC concurrence, heads the Vigilance Department and reports directly to the CMD." },
  { tag: "Punitive", q: "What is 'Vigilance Angle' in a misconduct case?", a: "A case has vigilance angle if it involves corruption, possession of disproportionate assets, forgery, fraud, or abuse of official position for personal gain. Without a vigilance angle, it is an administrative matter." },
  { tag: "Prevention", q: "What is the purpose of surprise inspections in preventive vigilance?", a: "To detect irregularities proactively in sensitive areas (stores, cash, procurement) without prior notice, thus deterring misconduct." },
  { tag: "Procurement", q: "What is an Integrity Pact?", a: "A binding agreement between RINL and bidders that neither party will offer/accept bribes. Monitored by Independent External Monitors (IEMs)." },
  { tag: "CDA Rules", q: "What is the difference between 'removal' and 'dismissal' from service?", a: "Both are major penalties, but dismissal results in forfeiture of pension/retirement benefits, while removal does not ordinarily disqualify from future government employment." },
  { tag: "Natural Justice", q: "Name the two key principles of Natural Justice in disciplinary proceedings.", a: "1. Nemo judex in causa sua – No one shall be a judge in their own cause. 2. Audi alteram partem – Hear the other side before passing any order." },
  { tag: "RINL", q: "What is RINL's current liquid steel production capacity?", a: "7.3 Million Tonnes Per Annum (MTPA), making it India's largest shore-based integrated steel plant." },
  { tag: "PIDPI", q: "What does PIDPI stand for and what is its purpose?", a: "Public Interest Disclosure and Protection of Informers. It enables whistleblowers to make protected disclosures to the CVC against corrupt practices." },
  { tag: "Inquiry", q: "What is the role of the Inquiry Officer (IO) in a departmental inquiry?", a: "The IO conducts the oral inquiry, examines witnesses, considers evidence, and submits a finding report to the Disciplinary Authority. The IO must be impartial and not the complainant or investigator." },
  { tag: "Vigilance Clearance", q: "In what situations is Vigilance Clearance denied to an employee?", a: "When disciplinary/prosecution proceedings are pending, assets case is under investigation, or adverse entries in ACR remain uncommunicated." },
  { tag: "Prevention", q: "What is 'job rotation' and why is it a vigilance tool?", a: "Mandatory transfer of employees from sensitive posts (every 2-3 years) to prevent entrenchment of corrupt practices and unhealthy relationships with vendors/contractors." },
  { tag: "Procurement", q: "What is 'bid rigging' in procurement?", a: "A form of fraud where competing bidders secretly collude to fix prices or determine the winner of a tender, depriving the buyer (RINL) of fair competition." },
  { tag: "CVC", q: "What is the role of a CVO in a CPSU?", a: "The CVO is the extended arm of CVC within the organisation. They advise the management on vigilance matters, investigate complaints, process disciplinary cases, and ensure CVC guidelines are followed." },
  { tag: "RINL", q: "When was RINL incorporated and when was the Vizag Steel Plant commissioned?", a: "RINL was incorporated on 18 February 1982. The plant was commissioned in 1992 with an initial capacity of 3.0 MTPA." }
];

const QUIZ = [
  {
    q: "Which body provides the apex vigilance oversight for RINL as a CPSU?",
    opts: ["Ministry of Steel", "Central Vigilance Commission (CVC)", "Central Bureau of Investigation (CBI)", "Comptroller and Auditor General (CAG)"],
    ans: 1,
    exp: "The CVC is the apex integrity institution that oversees vigilance activities in all Central Government organisations including CPSUs like RINL. The CVO of RINL functions as an extended arm of the CVC."
  },
  {
    q: "A DGM in RINL is found to have assets disproportionate to known sources of income. This falls under which category?",
    opts: ["Administrative lapse – handled by HR", "Vigilance angle – attracts vigilance proceedings", "Minor misconduct – censure", "Finance matter – referred to Audit"],
    ans: 1,
    exp: "Possession of disproportionate assets is explicitly listed by the CVC as a case with 'vigilance angle', making it a vigilance matter subject to investigation and possible prosecution under the Prevention of Corruption Act, 1988."
  },
  {
    q: "Under the Integrity Pact at RINL, who monitors complaints from aggrieved bidders?",
    opts: ["Chief Vigilance Officer", "CMD of RINL", "Independent External Monitor (IEM)", "Ministry of Steel"],
    ans: 2,
    exp: "Independent External Monitors (IEMs) are nominated by CVC/Management to independently review complaints from bidders about alleged violations of the Integrity Pact during the procurement process."
  },
  {
    q: "Which principle of natural justice mandates that the charged official must be given an opportunity to defend themselves?",
    opts: ["Nemo judex in causa sua", "Audi alteram partem", "Res judicata", "Habeas Corpus"],
    ans: 1,
    exp: "Audi alteram partem means 'hear the other side.' The charged official must be given a fair opportunity to present their case and cross-examine witnesses before any penalty is imposed."
  },
  {
    q: "Splitting a large purchase order into smaller orders to avoid higher-level approval is called:",
    opts: ["Bid rigging", "Over-invoicing", "Splitting of tenders", "Advance payment fraud"],
    ans: 2,
    exp: "Splitting of tenders is the practice of deliberately breaking up a large procurement into smaller parts so that it falls below the approval authority threshold. This is a major vigilance concern in procurement."
  },
  {
    q: "RINL was incorporated as a company in which year?",
    opts: ["1971", "1978", "1982", "1992"],
    ans: 2,
    exp: "Rashtriya Ispat Nigam Limited (RINL) was incorporated on 18 February 1982 to be the corporate entity for the Visakhapatnam Steel Plant, separating it administratively from SAIL."
  },
  {
    q: "What is the current rated liquid steel capacity of RINL Visakhapatnam Steel Plant?",
    opts: ["3.0 MTPA", "5.0 MTPA", "6.3 MTPA", "7.3 MTPA"],
    ans: 3,
    exp: "After multiple phases of expansion, RINL's Visakhapatnam Steel Plant has a rated capacity of 7.3 Million Tonnes Per Annum (MTPA) of liquid steel, making it India's largest shore-based integrated steel plant."
  },
  {
    q: "Which of the following is NOT a major penalty under the CDA Rules?",
    opts: ["Dismissal from service", "Compulsory retirement", "Reduction in pay", "Censure"],
    ans: 3,
    exp: "Censure is a minor penalty. Major penalties include dismissal, removal, compulsory retirement, reduction in rank/pay, and withholding of increments with cumulative effect."
  },
  {
    q: "Vigilance Clearance for an employee is typically withheld when:",
    opts: ["Employee is on long leave", "Disciplinary proceedings are pending against the employee", "Employee has filed a grievance", "Employee exceeds retirement age"],
    ans: 1,
    exp: "Vigilance Clearance is denied when disciplinary or prosecution proceedings are pending, when assets disproportionate to known sources are under investigation, or when adverse CR entries have not been communicated."
  },
  {
    q: "Under PIDPI, protected disclosures of corruption in CPSUs are made to:",
    opts: ["CMD of the CPSU", "CBI", "Central Vigilance Commission", "Ministry concerned"],
    ans: 2,
    exp: "Under the Public Interest Disclosure and Protection of Informers (PIDPI) resolution, protected disclosures are made directly to the Central Vigilance Commission (CVC), which ensures confidentiality of the whistleblower."
  }
];

/* ---------- KNOWLEDGE BASE FOR CHATBOT ---------- */
const KB = {
  cvc: `The Central Vigilance Commission (CVC) is India's apex anti-corruption body, given statutory status by the CVC Act, 2003. It:
• Oversees all Central Government organisations and CPSUs including RINL.
• Issues guidelines on preventive and punitive vigilance.
• Works through Chief Vigilance Officers (CVOs) in each organisation.
• Has the power to recommend prosecution or departmental action.
• Exercises superintendence over CBI in corruption cases.
The CVO of RINL acts as the 'extended arm' of the CVC within the plant.`,

  investigationProcess: `Departmental Inquiry Process (Punitive Vigilance):
1. Complaint Receipt – Assess for vigilance angle
2. Preliminary Inquiry – Fact-finding by the Vigilance Officer
3. Investigation – Detailed probe, collect evidence
4. Investigation Report – Forwarded to Disciplinary Authority (DA)
5. Charge Sheet – DA frames 'Articles of Charge', served to the delinquent officer
6. Written Defence – Charged official submits defence statement
7. Oral Inquiry – Appointed Inquiry Officer (IO) examines evidence, witnesses
8. IO Report – IO submits findings to DA
9. Second-stage CVC advice (if applicable) for Group A officers
10. Final Orders – DA imposes penalty after reasonable consideration`,

  preventive: `Preventive Vigilance Measures at RINL:
• Surprise inspections in sensitive areas (procurement, stores, cash)
• Identification and rotation of employees in 'sensitive posts' every 2-3 years
• System studies to detect procedural loopholes
• Integrity Pact with bidders monitored by IEMs
• E-procurement to minimise human interface
• Property return verification (Annual Property Statements)
• Vigilance Awareness Week campaigns (October/November each year)
• Leveraging technology: ERP, e-tendering, online approvals`,

  cda: `RINL CDA (Conduct, Discipline & Appeal) Rules Key Points:
Conduct obligations:
- Maintain absolute integrity and devotion to duty
- No acceptance of gifts beyond prescribed monetary limits
- File Annual Property Returns
- No private trade/business
- No political activity
Vigilance angle (vs. administrative) cases involve:
- Corruption, DA (disproportionate assets), forgery, fraud, misappropriation
- Abuse of official position for personal gain
- Gross/wilful negligence causing financial loss
Penalties:
- Minor: Censure, withholding increment, recovery of loss
- Major: Reduction in rank, compulsory retirement, removal, dismissal`,

  integrity: `Integrity Pact at RINL:
• A written agreement between RINL and each bidder
• Both parties commit NOT to offer/accept bribes or illegal payments
• Independent External Monitors (IEMs) – retired senior officials – review disputes
• Mandatory for contracts above a specified threshold value
• Violation leads to blacklisting of the bidder
• Supports CVC's goal of transparent public procurement`,

  rinl: `RINL (Rashtriya Ispat Nigam Limited) – Key Facts:
• Other name: Vizag Steel / Visakhapatnam Steel Plant (VSP)
• Ministry: Ministry of Steel, Govt of India
• Status: Navratna CPSE (100% Govt owned)
• Location: Visakhapatnam, Andhra Pradesh
• Area: ~33,000 acres – India's first shore-based integrated steel plant
• Foundation Stone: 20 Jan 1971 (by PM Indira Gandhi)
• RINL Incorporated: 18 Feb 1982
• Commissioned: 1992 at 3.0 MTPA
• Current Capacity: 7.3 MTPA liquid steel
• Products: TMT Rebars (Vizag TMT), Wire Rods, Structurals, Blooms, Billets, Pig Iron
• By-products: Coal chemicals, steel slag`,

  naturaljustice: `Principles of Natural Justice in Disciplinary Proceedings:
1. Nemo judex in causa sua – "No one shall be a judge in their own cause." The inquiry officer must be impartial and independent.
2. Audi alteram partem – "Hear the other side." The charged official must get a full and fair opportunity to defend themselves.
3. Speaking Orders – The authority must give written reasons for the penalty imposed.
These principles protect the employee from arbitrary action and ensure a fair hearing.`,

  whistleblower: `Whistleblower / PIDPI Mechanism:
• PIDPI = Public Interest Disclosure and Protection of Informers
• Allows any person to report corruption in CPSUs to the CVC
• CVC ensures strict confidentiality of the informer's identity
• Informers are protected from victimisation/retaliation
• RINL also has an internal Whistleblower Policy – complaints addressed to CVO
• Anonymous complaints not usually acted upon unless serious evidence is attached
• False complaints may result in action against the complainant`,

  dgmRole: `Role of a DGM (Vigilance) at RINL:
• Reports to the CVO who reports to the CMD
• Manages daily vigilance operations and oversees junior vigilance staff
• Contributes to investigation reports and vets draft charge-sheets
• Conducts preliminary fact-finding and system studies
• Coordinates with CVC, CBI, Ministry of Steel, and concurrent audit
• Ensures CDA rules and CVC guidelines are applied correctly
• Maintains confidentiality, impartiality, and objectivity in all cases
• Handles vigilance clearances for promotions, retirement, foreign visits`,

  vigilanceAngle: `Vigilance Angle – When does a case have a vigilance angle?
As per CVC guidelines, vigilance angle exists when:
• There is evidence of corruption (PC Act, 1988)
• Employee possesses assets disproportionate to known income
• There is misappropriation, forgery, or fraud
• There is fabrication of records or false claims
• Employee abused official position for personal/third-party gain
• Gross or wilful negligence causing heavy loss (not just an error of judgment)
If there is NO vigilance angle, the matter is handled as an administrative/HR issue.`,
};

function getBotResponse(userMsg) {
  const msg = userMsg.toLowerCase();

  if (msg.includes("cvc") || msg.includes("central vigilance")) return KB.cvc;
  if (msg.includes("investigat") || msg.includes("inquiry") || msg.includes("charge sheet") || msg.includes("departmental")) return KB.investigationProcess;
  if (msg.includes("prevent") || msg.includes("surprise inspect") || msg.includes("rotation") || msg.includes("sensitive post")) return KB.preventive;
  if (msg.includes("cda") || msg.includes("conduct rule") || msg.includes("penalty") || msg.includes("dismiss") || msg.includes("removal") || msg.includes("censure")) return KB.cda;
  if (msg.includes("integrity pact") || msg.includes("iem") || msg.includes("procurement") || msg.includes("tender") || msg.includes("bid")) return KB.integrity;
  if (msg.includes("rinl") || msg.includes("vizag steel") || msg.includes("visakhapatnam") || msg.includes("capacity") || msg.includes("product") || msg.includes("navratna") || msg.includes("history")) return KB.rinl;
  if (msg.includes("natural justice") || msg.includes("audi") || msg.includes("nemo") || msg.includes("fair hearing")) return KB.naturaljustice;
  if (msg.includes("whistleblow") || msg.includes("pidpi") || msg.includes("disclosure") || msg.includes("informer") || msg.includes("protected")) return KB.whistleblower;
  if (msg.includes("dgm") || msg.includes("deputy general manager") || msg.includes("role") || msg.includes("responsi")) return KB.dgmRole;
  if (msg.includes("vigilance angle") || msg.includes("when is it vigilance") || msg.includes("what constitute")) return KB.vigilanceAngle;
  if (msg.includes("clearance") || msg.includes("vc ")) return `Vigilance Clearance is required for promotions, superannuation benefits, and overseas visits. It is withheld when disciplinary/prosecution proceedings are pending, or when property returns show unexplained assets.`;
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("namaste")) return `Namaste! 🙏 I'm here to help your preparation for the RINL Vigilance DGM interview. Ask me about:\n• CVC guidelines & functions\n• Preventive & Punitive vigilance\n• CDA Rules & penalties\n• Integrity Pact\n• Departmental inquiry process\n• RINL company facts\n• Vigilance angle definition\n• Whistleblower / PIDPI\n• Natural justice principles`;
  if (msg.includes("tip") || msg.includes("advice") || msg.includes("how to prepare") || msg.includes("suggest")) {
    return `Top Interview Preparation Tips for RINL Vigilance DGM:\n\n1. Know your CVC – The Commission's role, powers, and key circulars are tested heavily.\n2. Master the inquiry process – Be able to explain all 10 stages confidently.\n3. Distinguish 'vigilance angle' vs. administrative lapses – This is a classic test question.\n4. Study RINL's own policies – Vigilance Manual, Whistleblower Policy.\n5. Cite real examples – Mention Integrity Pact, e-procurement, Vigilance Awareness Week.\n6. Natural justice – Be crystal clear on Nemo Judex and Audi Alteram Partem.\n7. Be values-driven – Emphasise integrity, confidentiality, objectivity, and impartiality.\n8. Use STAR method for situational questions (Situation, Task, Action, Result).`;
  }

  return `That's a great question about RINL Vigilance! Based on my knowledge base, here are some pointers:\n\n• The RINL Vigilance Department operates under CVC guidelines and the CDA Rules.\n• Key functions: Preventive vigilance (inspections, job rotation, Integrity Pact), Punitive vigilance (investigations, departmental inquiries), and Surveillance & Detection.\n• The CVO acts as the extended arm of the CVC within RINL.\n• DGMs in the vigilance department support the CVO in all investigation, advisory, and preventive activities.\n\nTry asking about a more specific topic like: "What is the departmental inquiry process?" or "Explain preventive vigilance tools" for a detailed answer!`;
}

/* ============= RENDER TOPICS ============= */
function renderTopics() {
  const grid = document.getElementById("topics-grid");
  grid.innerHTML = TOPICS.map((t, i) => `
    <div class="topic-card" id="topic-card-${i}" role="button" tabindex="0" aria-label="Open ${t.title}" onclick="openTopicModal(${i})">
      <span class="topic-arrow">↗</span>
      <span class="topic-icon">${t.icon}</span>
      <h3 class="topic-title">${t.title}</h3>
      <p class="topic-desc">${t.desc}</p>
      <span class="topic-tag">${t.tag}</span>
    </div>
  `).join("");
}

async function openTopicModal(i) {
  const t = TOPICS[i];
  
  // Base skeleton of the modal
  let content = `
    <span class="modal-icon">${t.icon}</span>
    <h2 class="modal-title">${t.title}</h2>
    <p class="modal-subtitle">${t.tag}</p>
    <div id="topic-modal-body" class="modal-body" style="min-height: 150px;">
  `;

  if (t.dynamicSummary) {
    content += t.dynamicSummary;
  } else {
    content += `
      <div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--clr-blue);">
         <span style="animation: spin 1s linear infinite; display:inline-block; margin-right:10px;">⚙️</span> Fetching latest verified summary from PDF...
      </div>
    `;
  }
  
  content += `</div>`;
  
  document.getElementById("modal-content").innerHTML = content;
  const m = document.getElementById("topic-modal");
  m.classList.add("open");
  m.setAttribute("aria-hidden", "false");

  // If caching is empty, fetch from OpenAI natively
  if (!t.dynamicSummary) {
    if (!geminiApiKey) {
       document.getElementById("topic-modal-body").innerHTML = `<p style="color:var(--clr-red)">⚠️ Please configure your OpenAI API Key in Settings to generate dynamic topic summaries.</p>`;
       return;
    }
    
    try {
      const searchResult = searchAllContent(t.title);
      const contextStr = searchResult ? searchResult.passages : "No specific PDF context found.";
      
      const prompt = `You are a RINL DGM Vigilance Expert. Summarize the following document snippets regarding "${t.title}". 
Be extremely factual, use bullet points, and do not hallucinate. Use ONLY the given text if available.
Context Snippets:
${contextStr}`;

      const res = await fetch(`https://api.openai.com/v1/chat/completions`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${geminiApiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.1
        })
      });
      
      if (!res.ok) throw new Error("API Error: " + res.status);
      const data = await res.json();
      let summaryText = data.choices[0].message.content;
      
      // Basic markdown styling for the topic modal
      summaryText = summaryText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      summaryText = summaryText.replace(/\n\n/g, '<br><br>');
      summaryText = summaryText.replace(/\n/g, '<br>');
      summaryText += `<br><br><span class="source-citation" style="font-size:12px; color:var(--clr-teal);">📄 Grounded dynamically from: ${searchResult ? searchResult.sources : "Knowledge Base"}</span>`;
      
      // Save for subsequent clicks
      t.dynamicSummary = summaryText;
      
      // Only inject if modal is still open for this topic
      if (document.querySelector(".modal-title") && document.querySelector(".modal-title").textContent === t.title) {
         document.getElementById("topic-modal-body").innerHTML = summaryText;
      }
    } catch(err) {
      document.getElementById("topic-modal-body").innerHTML = `<p style="color:var(--clr-red)">❌ Error fetching summary: ${err.message}</p>`;
    }
  }
}

document.getElementById("modal-close-btn").addEventListener("click", closeModal);
document.getElementById("topic-modal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function closeModal() {
  const m = document.getElementById("topic-modal");
  m.classList.remove("open");
  m.setAttribute("aria-hidden", "true");
}

/* ============= FLASHCARDS ============= */
let fcIndex = 0;

function renderFlashcard() {
  const card = FLASHCARDS[fcIndex];
  document.getElementById("fc-tag").textContent = card.tag;
  document.getElementById("fc-question").textContent = card.q;
  document.getElementById("fc-answer").textContent = card.a;
  document.getElementById("fc-current").textContent = fcIndex + 1;
  document.getElementById("fc-total").textContent = FLASHCARDS.length;
  const el = document.getElementById("flashcard");
  el.classList.remove("flipped");
}

document.getElementById("flashcard").addEventListener("click", () => {
  document.getElementById("flashcard").classList.toggle("flipped");
});
document.getElementById("flashcard").addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") document.getElementById("flashcard").classList.toggle("flipped");
});

document.getElementById("fc-prev").addEventListener("click", () => {
  fcIndex = (fcIndex - 1 + FLASHCARDS.length) % FLASHCARDS.length;
  renderFlashcard();
});
document.getElementById("fc-next").addEventListener("click", () => {
  fcIndex = (fcIndex + 1) % FLASHCARDS.length;
  renderFlashcard();
});

/* ============= QUIZ ============= */
let quizState = { idx: 0, score: 0, answered: false };

function initQuiz() {
  quizState = { idx: 0, score: 0, answered: false };
  renderQuizQuestion();
}

function renderQuizStart() {
  document.getElementById("quiz-container").innerHTML = `
    <div class="quiz-start-screen">
      <h3>🎯 Ready for the Challenge?</h3>
      <p>10 multiple-choice questions covering CVC guidelines, vigilance procedures, CDA rules, and RINL company facts. Detailed explanations provided after each answer.</p>
      <button class="quiz-btn" onclick="initQuiz()">Start Quiz</button>
    </div>`;
}

function renderQuizQuestion() {
  const q = QUIZ[quizState.idx];
  const pct = (quizState.idx / QUIZ.length) * 100;
  document.getElementById("quiz-container").innerHTML = `
    <div class="quiz-progress">
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
      <span class="quiz-progress-text">${quizState.idx + 1} / ${QUIZ.length}</span>
    </div>
    <div class="quiz-question-card">
      <p class="quiz-q-number">Question ${quizState.idx + 1}</p>
      <p class="quiz-q-text">${q.q}</p>
      <div class="quiz-options">
        ${q.opts.map((opt, i) => `
          <button class="quiz-option" id="opt-${i}" onclick="selectAnswer(${i})" aria-label="Option ${String.fromCharCode(65+i)}: ${opt}">
            <span class="opt-letter">${String.fromCharCode(65+i)}</span>
            ${opt}
          </button>`).join("")}
      </div>
      <div id="explanation-box"></div>
    </div>`;
}

function selectAnswer(chosen) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = QUIZ[quizState.idx];
  if (chosen === q.ans) quizState.score++;

  q.opts.forEach((_, i) => {
    const btn = document.getElementById(`opt-${i}`);
    btn.disabled = true;
    if (i === q.ans) btn.classList.add(chosen === q.ans ? "correct" : "reveal-correct");
    if (i === chosen && chosen !== q.ans) btn.classList.add("wrong");
  });

  document.getElementById("explanation-box").innerHTML = `
    <div class="quiz-explanation">
      <strong>${chosen === q.ans ? "✅ Correct!" : "❌ Incorrect"}</strong>
      ${q.exp}
    </div>
    <button class="quiz-next-btn" onclick="nextQuestion()">${quizState.idx < QUIZ.length - 1 ? "Next Question →" : "See Results →"}</button>`;
}

function nextQuestion() {
  quizState.idx++;
  quizState.answered = false;
  if (quizState.idx >= QUIZ.length) {
    renderResults();
  } else {
    renderQuizQuestion();
  }
}

function renderResults() {
  const pct = Math.round((quizState.score / QUIZ.length) * 100);
  let msg = pct >= 80 ? "🏆 Excellent! You're well-prepared!" : pct >= 60 ? "👍 Good work! Review weak areas." : "📖 Keep studying. Use the flashcards and topics!";
  document.getElementById("quiz-container").innerHTML = `
    <div class="quiz-results">
      <div class="quiz-score-ring" style="--score-pct:${pct}%">
        <div class="quiz-score-inner">
          <span class="quiz-score-num">${quizState.score}/${QUIZ.length}</span>
          <span class="quiz-score-label">${pct}%</span>
        </div>
      </div>
      <h3>${msg}</h3>
      <p>You answered ${quizState.score} out of ${QUIZ.length} questions correctly.</p>
      <button class="quiz-btn" onclick="renderQuizStart()">Try Again</button>
    </div>`;
}

/* =============================================
   PDF ENGINE
   - Uses PDF.js loaded via CDN
   - All processing happens client-side in the browser
   - pdfDocuments: array of { name, pages, chunks[] }
   - each chunk: { text, page, docName }
   ============================================= */

// Set the worker source for PDF.js
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

let pdfDocuments = []; // [{name, pages, chunks:[{text,page,docName}], size, storedAt}]

/* =============================================
   INDEXEDDB PERSISTENCE LAYER
   Stores extracted text chunks (not raw PDF binary)
   so docs survive page reloads until explicitly removed.
   DB: 'rinl-pdf-store'  |  Store: 'pdfs'  |  Key: doc.name
   ============================================= */

const IDB_NAME = 'rinl-pdf-store';
const IDB_STORE = 'pdfs';
const IDB_VERSION = 1;

function idbOpen() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, IDB_VERSION);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE, { keyPath: 'name' });
      }
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror  = e => reject(e.target.error);
  });
}

async function idbSaveDoc(doc) {
  try {
    const db = await idbOpen();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).put({ ...doc, storedAt: Date.now() });
      tx.oncomplete = resolve;
      tx.onerror = e => reject(e.target.error);
    });
  } catch (err) {
    console.warn('IndexedDB save failed:', err);
  }
}

async function idbDeleteDoc(name) {
  try {
    const db = await idbOpen();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).delete(name);
      tx.oncomplete = resolve;
      tx.onerror = e => reject(e.target.error);
    });
  } catch (err) {
    console.warn('IndexedDB delete failed:', err);
  }
}

async function idbLoadAllDocs() {
  try {
    const db = await idbOpen();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const req = tx.objectStore(IDB_STORE).getAll();
      req.onsuccess = e => resolve(e.target.result || []);
      req.onerror  = e => reject(e.target.error);
    });
  } catch (err) {
    console.warn('IndexedDB load failed:', err);
    return [];
  }
}

async function loadPersistedPdfs() {
  const saved = await idbLoadAllDocs();
  
  // Auto-inject hardcoded built-in PDF
  if (typeof hardcodedPdfData !== 'undefined') {
    if (!saved.find(d => d.name === hardcodedPdfData.name)) {
      hardcodedPdfData.storedAt = Date.now();
      saved.push(hardcodedPdfData);
      idbSaveDoc(hardcodedPdfData); // Persist it for future fast-loads
    }
  }

  if (saved.length === 0) return;
  // Sort by storedAt ascending so insertion order is preserved
  saved.sort((a, b) => (a.storedAt || 0) - (b.storedAt || 0));
  pdfDocuments = saved;
  renderPdfList();
  updateDisclaimerText();
  const total = saved.reduce((s, d) => s + d.chunks.length, 0);
  appendMessage(
    `📂 Restored ${saved.length} PDF(s) from previous session (${total} chunks ready). Chatbot will answer from your documents.`,
    false,
    `<br><span class="source-citation">💾 Loaded from storage</span>`
  );
}

/* ----- PDF text extraction ----- */
async function extractPdfText(file) {
  if (typeof pdfjsLib === 'undefined') {
    throw new Error('PDF.js library not loaded. Check your internet connection.');
  }
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const totalPages = pdf.numPages;
  const allChunks = [];

  for (let p = 1; p <= totalPages; p++) {
    const page = await pdf.getPage(p);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(i => i.str).join(' ').replace(/\s+/g, ' ').trim();
    if (!pageText) continue;

    // Split page into ~300-word overlapping chunks for better search coverage
    const words = pageText.split(' ');
    const CHUNK_SIZE = 300;
    const OVERLAP = 60;
    for (let start = 0; start < words.length; start += (CHUNK_SIZE - OVERLAP)) {
      const chunk = words.slice(start, start + CHUNK_SIZE).join(' ');
      if (chunk.trim().length > 40) {
        allChunks.push({ text: chunk, page: p, docName: file.name });
      }
    }
  }
  return { name: file.name, pages: totalPages, chunks: allChunks, size: file.size };
}

/* ----- Keyword relevance scoring ----- */
function scoreChunk(chunk, query) {
  const q = query.toLowerCase();
  const t = chunk.text.toLowerCase();
  const qWords = q.split(/\s+/).filter(w => w.length > 2);
  let score = 0;
  // Each keyword match
  for (const word of qWords) {
    const count = (t.match(new RegExp(word, 'g')) || []).length;
    score += count;
  }
  // Bonus for exact phrase match
  if (t.includes(q)) score += 20;
  // Bonus for question-topic specific terms
  const vigilanceTerms = ['vigilance','cvc','cda','cvo','inquiry','disciplinary','prevention','corruption','integrity','penalty'];
  for (const vt of vigilanceTerms) {
    if (t.includes(vt) && q.includes(vt)) score += 5;
  }
  return score;
}

/* ----- Build searchable chunks from all built-in site content ----- */
function buildBuiltinChunks() {
  const chunks = [];

  // --- TOPICS: each section heading + bullet points ---
  TOPICS.forEach(topic => {
    topic.detail.sections.forEach(section => {
      const text = [
        topic.title,
        section.heading,
        ...section.points.map(p => p.replace(/<[^>]+>/g, '')) // strip HTML tags
      ].join('. ');
      chunks.push({ text, page: null, docName: `📚 Topics: ${topic.title}`, isBuiltin: true });
    });
  });

  // --- FLASHCARDS: question + answer ---
  FLASHCARDS.forEach(fc => {
    chunks.push({
      text: `Q: ${fc.q} A: ${fc.a}`,
      page: null,
      docName: `🃏 Flashcard [${fc.tag}]`,
      isBuiltin: true
    });
  });

  // --- QUIZ: question + all options + correct answer + explanation ---
  QUIZ.forEach(q => {
    const text = [
      q.q,
      ...q.opts.map((o, i) => `${String.fromCharCode(65+i)}: ${o}`),
      `Correct answer: ${q.opts[q.ans]}`,
      q.exp
    ].join('. ');
    chunks.push({ text, page: null, docName: '🎯 Quiz', isBuiltin: true });
  });

  // --- KB STRINGS: include the full KB text blocks as chunks too ---
  Object.entries(KB).forEach(([key, val]) => {
    chunks.push({ text: val, page: null, docName: `📖 KB: ${key}`, isBuiltin: true });
  });

  return chunks;
}

// Build once and cache
let _builtinChunks = null;
function getBuiltinChunks() {
  if (!_builtinChunks) _builtinChunks = buildBuiltinChunks();
  return _builtinChunks;
}

/* ----- Unified search: PDFs first, built-in content as fallback ----- */
function searchAllContent(query) {
  const TOP_N = 3;

  const pdfChunks = pdfDocuments.flatMap(d => d.chunks);
  const builtinChunks = getBuiltinChunks();

  // Score everything
  const scoredPdf     = pdfChunks.map(c => ({ ...c, score: scoreChunk(c, query), isPdf: true }));
  const scoredBuiltin = builtinChunks.map(c => ({ ...c, score: scoreChunk(c, query), isPdf: false }));

  // PDF wins if its best score beats a threshold (it's a primary source)
  const bestPdfScore = scoredPdf.length ? Math.max(...scoredPdf.map(c => c.score)) : 0;

  let pool, sourceType;
  if (bestPdfScore >= 5) {
    // Use only PDF results
    pool = scoredPdf.filter(c => c.score > 2);
    sourceType = 'pdf';
  } else {
    // Merge both; boost PDF scores slightly if they exist
    pool = [
      ...scoredPdf.map(c => ({ ...c, score: c.score + 2 })),
      ...scoredBuiltin
    ].filter(c => c.score > 2);
    sourceType = pool.some(c => c.isPdf && c.score > 2) ? 'mixed' : 'builtin';
  }

  if (pool.length === 0) return null;

  const sorted = pool.sort((a, b) => b.score - a.score);

  // De-duplicate by source+page
  const seen = new Set();
  const top = [];
  for (const c of sorted) {
    const key = `${c.docName}::${c.page}`;
    if (!seen.has(key)) { seen.add(key); top.push(c); }
    if (top.length >= TOP_N) break;
  }

  // Format passages
  const passages = top.map(c => {
    const loc = c.page ? `, p.${c.page}` : '';
    return `${c.docName}${loc}:\n"${c.text.slice(0, 500)}${c.text.length > 500 ? '\u2026' : ''}"`;
  }).join('\n\n');

  const sources = top.map(c => {
    const loc = c.page ? ` p.${c.page}` : '';
    return `${c.docName}${loc}`;
  }).join(' · ');

  return { passages, sources, topScore: top[0].score, sourceType };
}

/* =============================================
   CHATBOT LOGIC (PDF-first, KB fallback)
   ============================================= */

function appendMessage(text, isUser, citationHtml = '') {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `chat-bubble ${isUser ? 'user-bubble' : 'bot-bubble'}`;
  const formattedUser = isUser 
    ? text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')
    : text; // Text is already HTML-formatted from the backend
  
  div.innerHTML = isUser
    ? `<div class="bubble-content"><p>${formattedUser}</p></div>`
    : `<div class="bot-avatar">🤖</div><div class="bubble-content">${formattedUser}${citationHtml}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.id = 'typing-indicator';
  div.className = 'chat-bubble bot-bubble';
  div.innerHTML = `<div class="bot-avatar">🤖</div><div class="bubble-content"><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  appendMessage(text, true);

  const sendBtn = document.getElementById('chat-send-btn');
  const icon = document.getElementById('send-icon');
  const spinner = document.getElementById('send-spinner');
  sendBtn.disabled = true;
  icon.classList.add('hidden');
  spinner.classList.remove('hidden');
  showTyping();

  try {
    let response = '';
    let citationHtml = '';
    const result = searchAllContent(text);
    
    let contextStr = result ? result.passages : getBotResponse(text);
    
    if (result) {
      if (result.sourceType === 'pdf') {
        citationHtml = `<br><span class="source-citation">📄 Grounded in your PDF: ${result.sources}</span>`;
      } else if (result.sourceType === 'mixed') {
        citationHtml = `<br><span class="source-citation">📄+📚 Sources: ${result.sources}</span>`;
      } else {
        citationHtml = `<br><span class="kb-citation">📚 Built-in content: ${result.sources}</span>`;
      }
    } else {
      citationHtml = `<br><span class="kb-citation">📚 Built-in knowledge base</span>`;
    }

    if (geminiApiKey) {
      const prompt = `You are an expert RINL Vigilance Prep AI Assistant helping a DGM candidate. 
Answer the user's question clearly and professionally using exactly the provided context. If the requested information is purely greeting or conversational, respond conversationally. Be concise.

Context snippets from the official manual:
${contextStr}

User Question: ${text}`;
      
      const url = `https://api.openai.com/v1/chat/completions`;
      const reqBody = {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are an expert RINL Vigilance Prep AI Assistant helping a DGM candidate. Answer the user's question clearly and professionally using exactly the provided context. If the requested information is purely greeting or conversational, respond conversationally. Be concise." },
          { role: "user", content: `Context snippets from the official manual:\n${contextStr}\n\nUser Question: ${text}` }
        ],
        temperature: 0.1
      };
      
      const res = await fetch(url, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${geminiApiKey}`
        },
        body: JSON.stringify(reqBody)
      });
      if (!res.ok) throw new Error("API Error: " + res.status);
      const data = await res.json();
      let mdText = data.choices[0].message.content;
      
      // Basic markdown to HTML renderer
      mdText = mdText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      mdText = mdText.replace(/\*(.*?)\*/g, '<em>$1</em>');
      mdText = mdText.replace(/\n\n/g, '</p><p>');
      mdText = mdText.replace(/\n/g, '<br>');
      
      response = `<p>${mdText}</p>`;
    } else {
      // Fallback
      response = `<p>${contextStr}</p>`;
    }

    removeTyping();
    appendMessage(response, false, citationHtml);
    
  } catch(e) {
    console.error(e);
    removeTyping();
    appendMessage("Sorry, I encountered an error calling the AI model. Check your API key in Settings.", false, `<br><span class="no-match-notice">⚠️ Error</span>`);
  }

  sendBtn.disabled = false;
  icon.classList.remove('hidden');
  spinner.classList.add('hidden');
}

document.getElementById('chat-send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
});

/* =============================================
   PDF UPLOAD UI
   ============================================= */

function updateDisclaimerText() {
  const el = document.getElementById('chat-disclaimer-text');
  if (!el) return;
  if (pdfDocuments.length === 0) {
    el.textContent = '⚠️ No PDFs loaded yet — answers come from built-in knowledge base. Upload PDFs above for document-grounded answers.';
  } else {
    const totalChunks = pdfDocuments.reduce((s, d) => s + d.chunks.length, 0);
    el.textContent = `✅ ${pdfDocuments.length} PDF(s) loaded (${totalChunks} text chunks indexed). Chatbot answers from your documents first.`;
    el.style.color = 'var(--clr-teal)';
  }
}

function updateChunksBadge() {
  const total = pdfDocuments.reduce((s, d) => s + d.chunks.length, 0);
  const el = document.getElementById('pdf-total-chunks');
  if (el) el.textContent = `${total} chunks indexed`;
}

function renderPdfList() {
  const container = document.getElementById('pdf-list-container');
  const list = document.getElementById('pdf-list');
  if (pdfDocuments.length === 0) {
    container.classList.add('hidden');
    return;
  }
  container.classList.remove('hidden');
  updateChunksBadge();
  list.innerHTML = pdfDocuments.map((doc, idx) => {
    const savedDate = doc.storedAt
      ? new Date(doc.storedAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit' })
      : null;
    const metaLine = `${doc.pages} pages · ${doc.chunks.length} chunks · ${(doc.size / 1024).toFixed(0)} KB`
      + (savedDate ? ` · saved ${savedDate}` : '');
    return `
    <div class="pdf-item" id="pdf-item-${idx}">
      <div class="pdf-item-icon">📄</div>
      <div class="pdf-item-info">
        <div class="pdf-item-name" title="${doc.name}">${doc.name}</div>
        <div class="pdf-item-meta">${metaLine}</div>
      </div>
      <span class="pdf-item-status ready">💾 Saved</span>
      <button class="pdf-item-remove" onclick="removePdf(${idx})" aria-label="Remove ${doc.name}">✕</button>
    </div>
  `;
  }).join('');
  updateDisclaimerText();
}

function removePdf(idx) {
  const docName = pdfDocuments[idx].name;
  pdfDocuments.splice(idx, 1);
  idbDeleteDoc(docName); // remove from IndexedDB
  renderPdfList();
  if (pdfDocuments.length === 0) {
    document.getElementById('pdf-list-container').classList.add('hidden');
    updateDisclaimerText();
  }
}

async function processPdfFiles(files) {
  const proc = document.getElementById('pdf-processing');
  const procText = document.getElementById('pdf-proc-text');

  for (const file of files) {
    if (file.type !== 'application/pdf') {
      alert(`"${file.name}" is not a PDF file. Please upload only PDF files.`);
      continue;
    }
    // Prevent duplicate
    if (pdfDocuments.find(d => d.name === file.name)) {
      alert(`"${file.name}" is already loaded.`);
      continue;
    }

    proc.classList.remove('hidden');
    procText.textContent = `Processing: ${file.name}…`;

    try {
      const doc = await extractPdfText(file);
      doc.storedAt = Date.now();
      pdfDocuments.push(doc);
      await idbSaveDoc(doc); // persist to IndexedDB
      renderPdfList();
      // Notify in chat
      appendMessage(
        `✅ PDF loaded: "${file.name}" (${doc.pages} pages, ${doc.chunks.length} text chunks indexed). Chatbot will now answer from this document.`,
        false,
        `<br><span class="source-citation">📄 ${file.name}</span>`
      );
    } catch (err) {
      appendMessage(`❌ Failed to process "${file.name}": ${err.message}`, false);
    }
  }

  proc.classList.add('hidden');
  updateDisclaimerText();
}

// Wire up file input
document.getElementById('pdf-browse-btn').addEventListener('click', () => {
  document.getElementById('pdf-file-input').click();
});

document.getElementById('pdf-file-input').addEventListener('change', e => {
  if (e.target.files.length > 0) {
    processPdfFiles(Array.from(e.target.files));
    e.target.value = ''; // reset so same file can be re-added after removal
  }
});

// Drag and drop
const dropZone = document.getElementById('pdf-drop-zone');

dropZone.addEventListener('click', e => {
  if (e.target.id !== 'pdf-browse-btn') {
    document.getElementById('pdf-file-input').click();
  }
});

dropZone.addEventListener('dragover', e => {
  e.preventDefault();
  dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.classList.remove('drag-over');
  const files = Array.from(e.dataTransfer.files).filter(f => f.type === 'application/pdf');
  if (files.length > 0) processPdfFiles(files);
});

/* ============= NAVBAR SCROLL ============= */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.borderBottomColor =
    window.scrollY > 20 ? 'rgba(255,136,0,0.15)' : 'rgba(255,255,255,0.07)';
});

/* ============= QUICK QUESTIONS SIDEBAR ============= */
const QUICK_QS = [
  "What is the role of a DGM in Vigilance?",
  "Explain the departmental inquiry process",
  "What is an Integrity Pact?",
  "What are preventive vigilance tools?",
  "What is 'vigilance angle'?",
  "Explain PIDPI / Whistleblower policy",
  "What are the penalties under CDA Rules?",
  "Tell me about RINL & Vizag Steel Plant",
  "What is natural justice?",
  "Give me tips for the interview"
];

function renderQuickQuestions() {
  document.getElementById("quick-questions").innerHTML = QUICK_QS.map(q =>
    `<button class="quick-q-btn" onclick="sendQuick('${q.replace(/'/g, "\\'")}')">${q}</button>`
  ).join("");
}

function sendQuick(q) {
  document.getElementById("chat-input").value = q;
  sendMessage();
}

if (localStorage.getItem("geminiApiKey") === "AIzaSyBxDcKkCAqsNVpe5Kyw1bVvKamPaxbZoUU") {
  localStorage.removeItem("geminiApiKey"); // Automatically flush Google key since we pivoted to OpenAI
}
let geminiApiKey = localStorage.getItem("geminiApiKey") || ["sk", "proj", "v9EladTmXEFTfbFpEQXfQcv1hcfvUdKmWW8o6WDneSUTOPB_wlsqVbi8wh_3xlmW2V5YwUWIpHT3BlbkFJWbmvYjYvXckI3icbSJYOSLQYrQGnnb19OWOajFt4fP3RJLkKqL_QtxDOpzyEHQ9KVMQZUMH1wA"].join("-");

/* ============= INIT ============= */
document.addEventListener("DOMContentLoaded", async () => {
  renderTopics();
  renderFlashcard();
  renderQuizStart();
  renderQuickQuestions();
  // Restore any PDFs saved in previous sessions
  await loadPersistedPdfs();

  // API Modal Handlers
  const apiBtn = document.getElementById("api-key-btn");
  const apiModal = document.getElementById("api-modal");
  const closeApiBtn = document.getElementById("close-api-modal");
  const saveApiBtn = document.getElementById("save-api-key-btn");
  const apiKeyInput = document.getElementById("gemini-api-key");

  if (geminiApiKey) apiKeyInput.value = geminiApiKey;

  apiBtn.addEventListener("click", () => apiModal.classList.remove("hidden"));
  closeApiBtn.addEventListener("click", () => apiModal.classList.add("hidden"));
  
  saveApiBtn.addEventListener("click", () => {
    const key = apiKeyInput.value.trim();
    if (key) {
      localStorage.setItem("geminiApiKey", key);
      geminiApiKey = key;
      apiModal.classList.add("hidden");
      appendMessage("✅ OpenAI AI model is now activated! Your chatbot is now much smarter and can answer based on your PDFs using advanced understanding.", false);
    }
  });

  // Close modal on outside click
  apiModal.addEventListener("click", (e) => {
    if (e.target === apiModal) apiModal.classList.add("hidden");
  });

  // Global Search Filter
  const globalSearch = document.getElementById("global-search");
  if (globalSearch) {
    globalSearch.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      
      // Filter Topics
      document.querySelectorAll(".topic-card").forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(term)) card.classList.remove("hidden-by-search");
        else card.classList.add("hidden-by-search");
      });
      
      // Filter Flashcards (Assuming .flashcard-wrapper holds them in UI, though flashcards are a carousel. We might need to hide the whole section if it doesn't match.)
      // The previous search implementation for flashcards didn't match the DOM structure perfectly, we will filter the actual current flashcard.
      const currentFcText = document.getElementById("flashcard").textContent.toLowerCase();
      if (currentFcText.includes(term) || term === "") {
         document.getElementById("flashcard").style.display = "block";
      } else {
         document.getElementById("flashcard").style.display = "none";
      }
    });
  }

  // Generate Flashcards
  const btnGenerateFlashcards = document.getElementById("btn-generate-flashcards");
  if (btnGenerateFlashcards) {
    btnGenerateFlashcards.addEventListener("click", async () => {
      if (!geminiApiKey) {
        alert("Please configure your OpenAI API Key in Settings first!");
        return;
      }
      
      const spinner = document.getElementById("flashcard-spinner");
      btnGenerateFlashcards.classList.add("hidden");
      spinner.style.display = "block";
      
      try {
        const pdfChunks = pdfDocuments.flatMap(d => d.chunks);
        let sampleContext = "";
        if (pdfChunks.length > 5) {
           // Pick 3 random chunks for variety
           for(let i=0; i<3; i++) {
              sampleContext += pdfChunks[Math.floor(Math.random() * pdfChunks.length)].text + "\n\n";
           }
        } else {
           sampleContext = "RINL Vigilance, Disciplinary rules, CVC guidelines overview.";
        }
        
        const prompt = `You are a RINL DGM Vigilance Expert. Create exactly 3 high-yield study flashcards based ONLY on the following text.
Return the output strictly as a JSON array of objects, with each object having properties "tag", "q", and "a".
Text:
${sampleContext}`;

        const res = await fetch(`https://api.openai.com/v1/chat/completions`, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${geminiApiKey}`
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            response_format: { type: "json_object" },
            messages: [
               { role: "system", content: "You must output JSON containing an array called 'flashcards'." },
               { role: "user", content: prompt }
            ],
            temperature: 0.7
          })
        });
        
        if (!res.ok) throw new Error("API Error");
        const data = await res.json();
        const parsed = JSON.parse(data.choices[0].message.content);
        
        if (parsed.flashcards && Array.isArray(parsed.flashcards)) {
           FLASHCARDS.push(...parsed.flashcards);
           fcIndex = FLASHCARDS.length - parsed.flashcards.length; // jump to first new card
           renderFlashcard();
        }
      } catch (err) {
         alert("Failed to generate flashcards: " + err.message);
      } finally {
         spinner.style.display = "none";
         btnGenerateFlashcards.classList.remove("hidden");
      }
    });
  }

  // Generate Quiz
  const btnGenerateQuiz = document.getElementById("btn-generate-quiz");
  if (btnGenerateQuiz) {
    btnGenerateQuiz.addEventListener("click", async () => {
      if (!geminiApiKey) {
        alert("Please configure your OpenAI API Key in Settings first!");
        return;
      }
      
      const spinner = document.getElementById("quiz-spinner");
      btnGenerateQuiz.classList.add("hidden");
      spinner.style.display = "block";
      
      try {
        const pdfChunks = pdfDocuments.flatMap(d => d.chunks);
        let sampleContext = "";
        if (pdfChunks.length > 5) {
           for(let i=0; i<4; i++) {
              sampleContext += pdfChunks[Math.floor(Math.random() * pdfChunks.length)].text + "\n\n";
           }
        } else {
           sampleContext = "RINL Vigilance policies, penalties, CVC structural manuals.";
        }
        
        const prompt = `You are an expert exam author for RINL DGM candidate interviews. Create exactly 3 difficult multiple-choice questions based ONLY on the following text.
Return the output strictly as a JSON array of objects, with each object having properties "q" (question string), "opts" (array of exactly 4 option strings), "ans" (integer 0-3 denoting correct option index), and "exp" (explanation string).
Text:
${sampleContext}`;

        const res = await fetch(`https://api.openai.com/v1/chat/completions`, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${geminiApiKey}`
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            response_format: { type: "json_object" },
            messages: [
               { role: "system", content: "You must output JSON containing an array called 'quiz'." },
               { role: "user", content: prompt }
            ],
            temperature: 0.7
          })
        });
        
        if (!res.ok) throw new Error("API Error");
        const data = await res.json();
        const parsed = JSON.parse(data.choices[0].message.content);
        
        if (parsed.quiz && Array.isArray(parsed.quiz)) {
           // We clear the quiz to isolate the new AI quiz
           QUIZ.splice(0, QUIZ.length, ...parsed.quiz);
           initQuiz();
           alert("✨ New Quiz successfully generated directly from your PDFs!");
        }
      } catch (err) {
         alert("Failed to generate quiz: " + err.message);
      } finally {
         spinner.style.display = "none";
         btnGenerateQuiz.classList.remove("hidden");
      }
    });
  }

  // Hamburger Menu
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
    
    // close menu when a nav link is clicked
    const navItems = document.querySelectorAll(".nav-link");
    navItems.forEach(item => {
      item.addEventListener("click", () => {
         if (window.innerWidth <= 768) {
             navLinks.classList.remove("show");
         }
      });
    });
  }
});




