/* Labour law and statutory compliance articles. Authored by Vipin. */
window.ARTICLES = window.ARTICLES || [];

var LABOUR_TRANSITION_NOTE = '<div class="callout warn"><strong>Read this first: the four Labour Codes are in force.</strong> The Code on Wages, 2019, the Industrial Relations Code, 2020, the Code on Social Security, 2020 and the Occupational Safety, Health and Working Conditions Code, 2020 were brought into force with effect from 21 November 2025. The Code on Social Security subsumes the EPF Act, the ESI Act, the Payment of Gratuity Act and the Maternity Benefit Act, among others. The existing schemes (the EPF Scheme, 1952, the Employees\' Pension Scheme, 1995 and the EDLI Scheme, 1976) and ESIC procedures continue to operate under the Code, and rules framed under the earlier laws continue to the extent they are not inconsistent until replaced by rules under the Codes, which the Centre and the States are notifying in stages. This guide therefore uses the familiar section numbers of the earlier Acts as reference labels and points out where the Codes change the position. Always check the rules notified by your State for FY 2026-27.</div>';

window.ARTICLES.push({
  id: "labour-epf-esic-pt-gratuity-manual",
  domain: "labour",
  domainLabel: "Labour Laws",
  title: "EPF, ESIC, Professional Tax and Gratuity Compliance Manual: Coverage, Contribution Rates, ECR Due Dates, PT Slabs and the 15/26 Gratuity Formula",
  summary: "A payroll compliance manual for employers in FY 2026-27: provident fund and pension coverage and the 12% split, ESIC coverage and the 3.25% plus 0.75% rates, State professional tax, and gratuity eligibility, computation and payment.",
  author: "Authored by Vipin",
  date: "2026-07-14",
  readTime: "13 min read",
  tags: ["EPF", "EPS", "ESIC", "Professional Tax", "Gratuity", "ECR", "Code on Social Security"],
  body: LABOUR_TRANSITION_NOTE + `
<h2>1. Statutory Overview and Legislative Intent</h2>
<p>India's social security architecture for organised sector employees rests on four pillars: a retirement savings and pension system (EPFO), a health insurance and cash benefits system (ESIC), a lump-sum terminal benefit for long service (gratuity), and a State-level tax on employment (professional tax). The first three were governed by separate central laws for decades and are now consolidated in the Code on Social Security, 2020. Professional tax is levied by States under Article 276 of the Constitution.</p>
<h3>Legacy laws and their place in the Code</h3>
<table class="data">
  <thead><tr><th>Subject</th><th>Earlier law (reference)</th><th>Code on Social Security, 2020</th><th>Scheme or rules that continue</th></tr></thead>
  <tbody>
    <tr><td>Provident fund, pension and deposit-linked insurance</td><td>Employees' Provident Funds and Miscellaneous Provisions Act, 1952 (EPF Act)</td><td>Chapter III (Employees' Provident Fund)</td><td>EPF Scheme, 1952; EPS, 1995; EDLI Scheme, 1976</td></tr>
    <tr><td>Health insurance and cash benefits</td><td>Employees' State Insurance Act, 1948 (ESI Act)</td><td>Chapter IV (Employees' State Insurance Corporation)</td><td>ESI (General) Regulations, 1950 and ESIC procedures</td></tr>
    <tr><td>Gratuity</td><td>Payment of Gratuity Act, 1972</td><td>Chapter V (Gratuity), including Section 53</td><td>Payment of Gratuity (Central) Rules to the extent not inconsistent</td></tr>
    <tr><td>Professional tax</td><td>State Acts under Article 276 (for example the Gujarat and Maharashtra professional tax Acts)</td><td>Not part of the Codes</td><td>State rules</td></tr>
  </tbody>
</table>
<h3>"Wages" under the Codes</h3>
<p>The Code on Social Security (Section 2(88)) and the Code on Wages (Section 2(y)) define wages to include basic pay, dearness allowance and retaining allowance, and exclude items such as HRA, conveyance, statutory bonus, overtime, commission, employer's PF contribution and gratuity. Where the excluded components exceed 50% of total remuneration, the excess is added back to wages. This "50% rule" increases the base for PF (where contributions are on actual wages), gratuity and other wage-linked benefits for many salary structures.</p>

<h2>2. Applicability and Threshold Matrix</h2>
<table class="data">
  <thead><tr><th>Item</th><th>EPF and EPS</th><th>ESIC</th><th>Gratuity</th><th>Professional Tax</th></tr></thead>
  <tbody>
    <tr><td>Establishment coverage</td><td>20 or more employees (voluntary coverage below 20 by agreement with majority of employees); once covered, continues even if headcount falls</td><td>10 or more employees in notified areas (practically all districts); hazardous establishments may be covered even with one employee where notified</td><td>10 or more employees on any day in the preceding 12 months; once covered, continues</td><td>All employers in States that levy PT; registration as employer (deductor) and enrolment as entity</td></tr>
    <tr><td>Employee eligibility</td><td>Mandatory for employees with wages up to Rs. 15,000 per month; those above may join if not an "excluded employee"</td><td>Employees with wages up to Rs. 21,000 per month (Rs. 25,000 for persons with disability)</td><td>All employees with 5 years of continuous service (no minimum for death or disablement); fixed-term employees after 1 year under the Code</td><td>Salary or wage above the State threshold</td></tr>
    <tr><td>Contribution base</td><td>Basic wages, dearness allowance and retaining allowance (with the 50% rule under the Code); allowances paid universally form part of basic wages (Supreme Court, Regional Provident Fund Commissioner v. Vivekananda Vidyamandir, 2019)</td><td>Gross wages paid in cash</td><td>Last drawn wages (basic plus DA under the old Act; Code wages under the new framework)</td><td>Monthly salary or wages</td></tr>
    <tr><td>Rates</td><td>Employee 12%; employer 12% (8.33% to EPS on wages up to Rs. 15,000, i.e. maximum Rs. 1,250, and the balance 3.67% plus any excess to EPF); 10% for specified classes. Administration charges 0.5% of EPF wages (minimum Rs. 500 per month); EDLI 0.5% of wages up to Rs. 15,000</td><td>Employee 0.75%; employer 3.25%. Employees earning average daily wages up to Rs. 176 are exempt from the employee share</td><td>15 days' wages for each completed year (or part above 6 months)</td><td>State slabs; constitutional cap of Rs. 2,500 per person per year</td></tr>
    <tr><td>Ceiling</td><td>Wage ceiling of Rs. 15,000 for mandatory coverage and EPS</td><td>Rs. 21,000 coverage ceiling</td><td>Rs. 20 lakh (Notification S.O. 1420(E) dated 29 March 2018, unless revised under the Code)</td><td>Rs. 2,500 per year</td></tr>
  </tbody>
</table>
<h3>Professional tax: illustrative State slabs</h3>
<table class="data">
  <thead><tr><th>State</th><th>Monthly salary</th><th>PT per month</th></tr></thead>
  <tbody>
    <tr><td>Gujarat</td><td>Below Rs. 12,000</td><td>Nil</td></tr>
    <tr><td>Gujarat</td><td>Rs. 12,000 and above</td><td>Rs. 200</td></tr>
    <tr><td>Maharashtra (men)</td><td>Up to Rs. 7,500</td><td>Nil</td></tr>
    <tr><td>Maharashtra (men)</td><td>Rs. 7,501 to Rs. 10,000</td><td>Rs. 175</td></tr>
    <tr><td>Maharashtra (men and women)</td><td>Above Rs. 10,000 (women: above Rs. 25,000)</td><td>Rs. 200, and Rs. 300 in February</td></tr>
    <tr><td>Karnataka</td><td>Rs. 25,000 and above</td><td>Rs. 200 (with a higher February instalment where the State Act so provides)</td></tr>
  </tbody>
</table>
<p>PT slabs change through State budgets. Confirm the current slabs on the State commercial tax portal at the start of the year.</p>

<h2>3. Step-by-Step Compliance and Filing Workflow</h2>
<h3>A. EPF</h3>
<ol class="steps">
  <li><strong>Registration:</strong> register the establishment on the EPFO Unified Portal (or through the Shram Suvidha portal or SPICe+ for new companies) to obtain the establishment code.</li>
  <li><strong>Onboard employees:</strong> collect Form 11 (declaration), generate or link the Universal Account Number (UAN), and seed Aadhaar, PAN and bank account (KYC). Encourage e-nomination.</li>
  <li><strong>Monthly payroll:</strong> compute contributions on PF wages, prepare the Electronic Challan cum Return (ECR) text file with member-wise wages and contributions, upload on the Unified Portal, verify, and pay the challan (TRRN) through internet banking by the 15th of the following month.</li>
  <li><strong>Exits and claims:</strong> update date of exit and reason on the portal; employees file claims (Form 19 for PF, 10C or 10D for pension, 31 for advances) online with UAN.</li>
  <li><strong>Records:</strong> maintain wage registers, contribution cards and ECR acknowledgements. Annual returns are subsumed into monthly ECR filings.</li>
</ol>
<h3>B. ESIC</h3>
<ol class="steps">
  <li><strong>Registration:</strong> register on the ESIC portal (or via SPICe+ or Shram Suvidha) to obtain the 17-digit employer code.</li>
  <li><strong>Register employees</strong> within 10 days of joining through e-Pehchan, generating the insured person (IP) number; family details are added for medical benefits.</li>
  <li><strong>Monthly contributions:</strong> file the monthly contribution online (employee-wise days worked and wages) and pay by the 15th of the following month.</li>
  <li><strong>Contribution and benefit periods:</strong> contribution periods run from 1 April to 30 September and 1 October to 31 March. An employee covered at the start of a contribution period remains covered for the whole period even if wages rise above the ceiling.</li>
  <li><strong>Accidents:</strong> report employment injuries in the accident report form within the prescribed time (24 hours for serious injuries), and maintain the accident book.</li>
</ol>
<h3>C. Professional tax (Gujarat and Maharashtra examples)</h3>
<ol class="steps">
  <li>Obtain the employer registration certificate (RC) for deduction from salaries and the enrolment certificate (EC) for the entity's own PT, on the State commercial tax portal.</li>
  <li>Deduct PT from salaries every month according to the slab.</li>
  <li>Pay and file returns as per the State's periodicity. In Maharashtra, PTRC returns are monthly where the previous year's liability was Rs. 1 lakh or more and annual (by 31 March) where it was below Rs. 50,000; the PTEC amount for the entity is generally payable by 30 June. Gujarat prescribes its own payment and return schedule on the State portal.</li>
</ol>
<h3>D. Gratuity</h3>
<ol class="steps">
  <li><strong>Display and notice:</strong> display the abstract of the Act or Code provisions, and send the notice of opening (Form A under the Payment of Gratuity (Central) Rules) to the controlling authority within 30 days of applicability.</li>
  <li><strong>Nomination:</strong> obtain nomination in Form F from each employee within 30 days of completing one year of service.</li>
  <li><strong>Funding:</strong> provide for gratuity on an actuarial basis under AS 15 or Ind AS 19. Many employers fund through a gratuity trust with an insurer; States may mandate insurance under Section 4A of the Payment of Gratuity Act.</li>
  <li><strong>Computation on exit:</strong> Gratuity = Last drawn wages x 15 / 26 x Completed years of service. A part year of more than six months counts as a full year. For seasonal establishments, 7 days' wages per season; for piece-rated employees, average wages of the last three months.</li>
  <li><strong>Payment:</strong> pay within 30 days from the date it becomes payable. Issue a written notice of the amount (Form L) and pay through banking channels.</li>
</ol>
<div class="callout tip"><strong>Worked example:</strong> an employee resigns after 7 years and 8 months of service with last drawn basic plus DA of Rs. 52,000 per month. Completed years = 8 (the 8 months exceed six months). Gratuity = 52,000 x 15 / 26 x 8 = Rs. 2,40,000. It is within the Rs. 20 lakh ceiling and, for a covered employee, exempt from income tax up to the statutory limit.</div>

<h2>4. Statutory Due Dates and Frequency Table</h2>
<table class="data">
  <thead><tr><th>Compliance</th><th>Frequency</th><th>Due date</th></tr></thead>
  <tbody>
    <tr><td>EPF ECR upload and payment</td><td>Monthly</td><td>15th of the following month</td></tr>
    <tr><td>ESIC contribution filing and payment</td><td>Monthly</td><td>15th of the following month</td></tr>
    <tr><td>Registration of new employees on ESIC</td><td>Event</td><td>Within 10 days of joining</td></tr>
    <tr><td>Professional tax deduction and payment</td><td>Monthly or as per State</td><td>As prescribed by the State (for example, end of the month or the 15th of the next month)</td></tr>
    <tr><td>Maharashtra PTEC (entity)</td><td>Annual</td><td>30 June</td></tr>
    <tr><td>Gratuity nomination (Form F)</td><td>Event</td><td>Within 30 days of completing one year of service</td></tr>
    <tr><td>Gratuity payment</td><td>Event</td><td>Within 30 days from the date it becomes payable</td></tr>
    <tr><td>Notice of opening (gratuity)</td><td>One time</td><td>Within 30 days of the law becoming applicable</td></tr>
    <tr><td>Actuarial valuation of gratuity</td><td>Annual</td><td>At each balance sheet date</td></tr>
  </tbody>
</table>

<h2>5. Interest, Late Fees and Penal Consequences</h2>
<table class="data">
  <thead><tr><th>Default</th><th>Provision (earlier Act reference)</th><th>Consequence</th></tr></thead>
  <tbody>
    <tr><td>Late payment of PF dues: interest</td><td>EPF Act, Section 7Q</td><td>Simple interest at 12% per annum</td></tr>
    <tr><td>Late payment of PF dues: damages</td><td>EPF Act, Section 14B; EPF Scheme, Paragraph 32A</td><td>Damages on arrears; the rates were rationalised in June 2024 to a uniform 1% per month of default (12% per annum), replacing the earlier graded scale that went up to 25% per annum</td></tr>
    <tr><td>Employee share deducted but not deposited</td><td>EPF Act, Section 14(1A) and criminal breach of trust under the Bharatiya Nyaya Sanhita</td><td>Imprisonment and fine; prosecution is common in such cases</td></tr>
    <tr><td>Late employee contribution: income tax</td><td>Income-tax Act, 1961, Section 36(1)(va) read with Section 2(24)(x)</td><td>Employee contribution deposited after the due date under the EPF or ESI law is income of the employer and the deduction is permanently lost (Checkmate Services Pvt. Ltd. v. CIT, Supreme Court, 12 October 2022)</td></tr>
    <tr><td>Late payment of ESI contribution: interest</td><td>ESI Act, Section 39(5)</td><td>Simple interest at 12% per annum</td></tr>
    <tr><td>Late payment of ESI contribution: damages</td><td>ESI (General) Regulations, Regulation 82</td><td>Graded damages: 5% per annum for delay below 2 months, 10% for 2 to 4 months, 15% for 4 to 6 months, 25% for 6 months and above</td></tr>
    <tr><td>ESI employee share deducted but not paid</td><td>ESI Act, Section 85</td><td>Imprisonment of 1 to 3 years and fine of Rs. 10,000</td></tr>
    <tr><td>Delayed gratuity payment</td><td>Payment of Gratuity Act, Section 7(3A)</td><td>Simple interest at the rate notified by the Central Government for long-term deposits</td></tr>
    <tr><td>Avoiding gratuity payment by false statement</td><td>Payment of Gratuity Act, Section 9</td><td>Imprisonment up to 6 months or fine up to Rs. 10,000, or both; for non-payment of gratuity under an order, imprisonment from 6 months to 2 years with fine</td></tr>
    <tr><td>PT default</td><td>State PT Acts</td><td>Interest (for example 1.25% per month in Maharashtra) and penalties as prescribed by the State</td></tr>
  </tbody>
</table>
<p>The Code on Social Security restates these consequences with revised penalties, and introduces compounding for many first offences that are punishable only with fine. Repeat offences attract enhanced punishment.</p>

<h2>6. Practical Audit Pitfalls and Best Practices</h2>
<ul class="checklist">
  <li><strong>Test salary structures against the 50% rule.</strong> If allowances excluded from wages exceed half of total pay, PF and gratuity costs rise. Model the impact and communicate changes to employees.</li>
  <li><strong>Do not split basic pay artificially.</strong> Following the Vivekananda Vidyamandir judgment, universally paid allowances are part of basic wages for PF.</li>
  <li><strong>Pay employee contributions before the 15th.</strong> One day's delay makes the employee share permanently non-deductible for income tax.</li>
  <li><strong>Reconcile ECR and ESIC data with payroll every month.</strong> Mismatched employee counts are a common inspection trigger.</li>
  <li><strong>Cover contract workers.</strong> Principal employers are liable for PF and ESI of contractors' employees if the contractor defaults. Obtain monthly challans from contractors and verify them on the portals.</li>
  <li><strong>Seed Aadhaar and KYC early.</strong> Unseeded UANs delay claims and transfers and generate employee grievances.</li>
  <li><strong>Track gratuity eligibility dates</strong> including the one-year rule for fixed-term employees under the Code.</li>
  <li><strong>Watch State notifications</strong> on PT slab changes and on the State rules under the Labour Codes.</li>
</ul>

<h2>7. Statutory References and Official Sources</h2>
<div class="sources">
<ul>
  <li>Code on Social Security, 2020: Sections 2(88) (wages), Chapter III (EPF), Chapter IV (ESIC), Chapter V (gratuity, including Section 53), and the savings and repeal provisions; Ministry of Labour and Employment notification bringing the Code into force from 21 November 2025.</li>
  <li>Code on Wages, 2019: Section 2(y).</li>
  <li>Employees' Provident Funds and Miscellaneous Provisions Act, 1952 (reference): Sections 1, 6, 7Q, 14, 14B; EPF Scheme, 1952 (including Paragraph 32A); Employees' Pension Scheme, 1995; EDLI Scheme, 1976.</li>
  <li>Employees' State Insurance Act, 1948 (reference): Sections 2(9), 39, 85; ESI (General) Regulations, 1950, Regulation 82.</li>
  <li>Payment of Gratuity Act, 1972 (reference): Sections 1(3), 2A, 4, 4A, 7, 9; Payment of Gratuity (Central) Rules, 1972 (Forms A, F, L); Notification S.O. 1420(E) dated 29 March 2018 (Rs. 20 lakh ceiling).</li>
  <li>Constitution of India, Article 276; Gujarat State Tax on Professions, Traders, Callings and Employments Act, 1976; Maharashtra State Tax on Professions, Trades, Callings and Employments Act, 1975; Karnataka Tax on Professions, Trades, Callings and Employments Act, 1976.</li>
  <li>Regional Provident Fund Commissioner (II) West Bengal v. Vivekananda Vidyamandir and others, Supreme Court, 28 February 2019; Checkmate Services Pvt. Ltd. v. Commissioner of Income Tax, Supreme Court, 12 October 2022.</li>
  <li>Official portals: epfindia.gov.in and unifiedportal-emp.epfindia.gov.in; esic.gov.in; labour.gov.in; shramsuvidha.gov.in; State commercial tax portals (for example commercialtax.gujarat.gov.in and mahagst.gov.in).</li>
</ul>
</div>
`
});

window.ARTICLES.push({
  id: "labour-posh-maternity-labour-codes",
  domain: "labour",
  domainLabel: "Labour Laws",
  title: "POSH Act, Maternity Benefit and the Four Labour Codes: ICC Constitution, Annual Reports, 26-Week Leave and an Executive Readiness Analysis",
  summary: "Workplace protection and the new labour architecture: internal committees and annual reporting under the POSH Act, maternity benefit entitlements and employer duties, and a practical readiness plan for the Code on Wages, the IR Code, the Social Security Code and the OSH Code.",
  author: "Authored by Vipin",
  date: "2026-07-28",
  readTime: "15 min read",
  tags: ["POSH", "Internal Committee", "Maternity Benefit", "Code on Wages", "IR Code", "Social Security Code", "OSH Code"],
  body: LABOUR_TRANSITION_NOTE + `
<h2>1. Statutory Overview and Legislative Intent</h2>
<h3>Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act)</h3>
<p>The POSH Act gives statutory form to the guidelines laid down by the Supreme Court in Vishaka v. State of Rajasthan (1997). It recognises that sexual harassment violates a woman's fundamental rights to equality, life and dignity and to practise any profession. It places the duty to prevent and redress harassment squarely on the employer. In Aureliano Fernandes v. State of Goa (2023), the Supreme Court found widespread gaps in implementation and directed authorities to verify that committees are constituted and functioning.</p>
<ul>
  <li><strong>Section 2:</strong> definitions of aggrieved woman, employee (including temporary, ad hoc, daily wage, trainees, interns and contract workers), employer and workplace (including places visited arising out of employment and transport provided by the employer).</li>
  <li><strong>Section 4:</strong> Internal Committee (IC, widely called the ICC) at every office or branch with 10 or more employees.</li>
  <li><strong>Section 6:</strong> Local Committee constituted by the District Officer for establishments with fewer than 10 employees and for complaints against the employer.</li>
  <li><strong>Sections 9 to 18:</strong> complaint, conciliation, inquiry, interim relief, report, action, confidentiality and appeal.</li>
  <li><strong>Section 19:</strong> duties of employer.</li>
  <li><strong>Section 21 and Rule 14:</strong> annual report of the committee.</li>
  <li><strong>Section 26:</strong> penalties.</li>
</ul>
<h3>Maternity benefit</h3>
<p>The Maternity Benefit Act, 1961, substantially enhanced by the Maternity Benefit (Amendment) Act, 2017, is now consolidated in Chapter VI of the Code on Social Security, 2020. Its purpose is to protect the employment of women during maternity and to ensure income and health support before and after childbirth.</p>
<h3>The four Labour Codes</h3>
<table class="data">
  <thead><tr><th>Code</th><th>Laws subsumed (principal)</th><th>Core purpose</th></tr></thead>
  <tbody>
    <tr><td>Code on Wages, 2019</td><td>Payment of Wages Act, 1936; Minimum Wages Act, 1948; Payment of Bonus Act, 1965; Equal Remuneration Act, 1976</td><td>Universal minimum wage, national floor wage, timely payment, bonus, and gender equality in pay and recruitment</td></tr>
    <tr><td>Industrial Relations Code, 2020</td><td>Trade Unions Act, 1926; Industrial Employment (Standing Orders) Act, 1946; Industrial Disputes Act, 1947</td><td>Unions, standing orders, dispute resolution, strikes and lock-outs, lay-off, retrenchment and closure, fixed-term employment</td></tr>
    <tr><td>Code on Social Security, 2020</td><td>EPF Act, ESI Act, Employees' Compensation Act, Maternity Benefit Act, Payment of Gratuity Act, Building and Other Construction Workers Cess Act, Cine Workers Welfare Fund Act, Employment Exchanges Act, Unorganised Workers' Social Security Act</td><td>Universal social security including gig and platform workers</td></tr>
    <tr><td>Occupational Safety, Health and Working Conditions Code, 2020</td><td>Thirteen laws including the Factories Act, 1948, Contract Labour (Regulation and Abolition) Act, 1970, Inter-State Migrant Workmen Act, 1979, Mines Act, Plantations Labour Act and others</td><td>Safety, health, working hours, leave, welfare, contract and migrant labour, and registration and licensing</td></tr>
  </tbody>
</table>

<h2>2. Applicability and Threshold Matrix</h2>
<h3>A. POSH Act</h3>
<table class="data">
  <thead><tr><th>Requirement</th><th>Applies to</th><th>Composition or detail</th></tr></thead>
  <tbody>
    <tr><td>Internal Committee</td><td>Every office, branch or unit with 10 or more employees (all genders counted)</td><td>Presiding Officer: a woman employed at a senior level. At least two members from among employees committed to the cause of women, or with legal knowledge or social work experience. One external member from an NGO or association committed to the cause of women, or a person familiar with issues of sexual harassment. At least one half of the members must be women. Term: up to three years</td></tr>
    <tr><td>Local Committee</td><td>Workplaces with fewer than 10 employees, informal sector, and complaints against the employer</td><td>Constituted by the District Officer</td></tr>
    <tr><td>Board's report disclosure</td><td>Companies</td><td>Statement that the company has complied with provisions relating to constitution of the Internal Committee (Companies (Accounts) Rules, 2014, Rule 8(5)(x))</td></tr>
  </tbody>
</table>
<h3>B. Maternity benefit</h3>
<table class="data">
  <thead><tr><th>Entitlement</th><th>Rule</th></tr></thead>
  <tbody>
    <tr><td>Coverage</td><td>Factories, mines, plantations, and shops and establishments with 10 or more employees</td></tr>
    <tr><td>Eligibility</td><td>Actual work of at least 80 days in the 12 months immediately preceding the expected date of delivery</td></tr>
    <tr><td>Maternity leave: first two children</td><td>26 weeks, of which not more than 8 weeks before the expected date of delivery</td></tr>
    <tr><td>Maternity leave: third child onwards</td><td>12 weeks, of which not more than 6 weeks before delivery</td></tr>
    <tr><td>Adoption of a child below 3 months, and commissioning mothers</td><td>12 weeks from the date the child is handed over</td></tr>
    <tr><td>Miscarriage or medical termination of pregnancy</td><td>6 weeks immediately following the day of miscarriage or termination</td></tr>
    <tr><td>Tubectomy operation</td><td>2 weeks</td></tr>
    <tr><td>Illness arising out of pregnancy, delivery or related causes</td><td>Additional leave of up to 1 month</td></tr>
    <tr><td>Rate of benefit</td><td>Average daily wage for the period of actual absence</td></tr>
    <tr><td>Medical bonus</td><td>Rs. 3,500 (or as revised by notification) if no free pre-natal and post-natal care is provided by the employer</td></tr>
    <tr><td>Nursing breaks</td><td>Two breaks a day until the child is 15 months old</td></tr>
    <tr><td>Creche</td><td>Establishments with 50 or more employees, within prescribed distance, with four visits a day allowed</td></tr>
    <tr><td>Work from home</td><td>May be allowed after maternity leave where the nature of work permits, on mutually agreed terms</td></tr>
    <tr><td>Information to women employees</td><td>Every woman must be informed in writing and electronically of maternity benefits at the time of appointment</td></tr>
  </tbody>
</table>
<h3>C. Labour Code thresholds that change compliance</h3>
<table class="data">
  <thead><tr><th>Area</th><th>Earlier position</th><th>Position under the Codes</th></tr></thead>
  <tbody>
    <tr><td>Definition of wages</td><td>Different in each Act</td><td>Uniform definition; excluded components above 50% of remuneration are added back</td></tr>
    <tr><td>Minimum wages</td><td>Only scheduled employments</td><td>All employees, subject to the national floor wage</td></tr>
    <tr><td>Time of wage payment</td><td>Varied</td><td>Monthly wages by the 7th of the following month; on separation, within 2 working days</td></tr>
    <tr><td>Standing orders</td><td>100 or more workers (50 in some States)</td><td>300 or more workers</td></tr>
    <tr><td>Prior permission for lay-off, retrenchment and closure</td><td>100 or more workers</td><td>300 or more workers (States may notify a higher number)</td></tr>
    <tr><td>Fixed-term employment</td><td>Limited</td><td>Permitted across sectors, with parity in wages and benefits and gratuity after one year</td></tr>
    <tr><td>Retrenched workers</td><td>Retrenchment compensation only</td><td>Retrenchment compensation plus contribution of 15 days' last drawn wages to a Worker Re-skilling Fund</td></tr>
    <tr><td>Strikes and lock-outs</td><td>Notice mainly in public utility services</td><td>Notice required in all industrial establishments: within 60 days before the strike and not within 14 days of giving notice</td></tr>
    <tr><td>Grievance Redressal Committee</td><td>20 or more workers</td><td>20 or more workers</td></tr>
    <tr><td>Factory definition</td><td>10 workers with power, 20 without</td><td>20 workers with power, 40 without</td></tr>
    <tr><td>Contract labour coverage</td><td>20 or more contract workers</td><td>50 or more contract workers</td></tr>
    <tr><td>Appointment letters</td><td>Not universal</td><td>Mandatory for every employee</td></tr>
    <tr><td>Women at night</td><td>Restricted</td><td>Permitted in all establishments with consent and prescribed safeguards</td></tr>
    <tr><td>Gig and platform workers</td><td>Not covered</td><td>Social security schemes funded by aggregators contributing 1% to 2% of annual turnover, capped at 5% of amounts paid to such workers</td></tr>
  </tbody>
</table>

<h2>3. Step-by-Step Compliance and Filing Workflow</h2>
<h3>A. Setting up and running the POSH framework</h3>
<ol class="steps">
  <li><strong>Constitute the Internal Committee</strong> at each office or branch with 10 or more employees, by written order of the employer, with the composition required by Section 4. Pay the external member's fees as prescribed in Rule 4.</li>
  <li><strong>Adopt a policy</strong> on prevention of sexual harassment, covering the definition, examples, procedure, confidentiality, and consequences.</li>
  <li><strong>Display</strong> the penal consequences of sexual harassment and the order constituting the Committee at conspicuous places (Section 19(b)).</li>
  <li><strong>Train</strong> employees and Committee members through workshops and awareness programmes at regular intervals (Section 19(c)).</li>
  <li><strong>Register details</strong> of the Committee on the SHe-Box portal of the Ministry of Women and Child Development where required, and with the District Officer as the State directs.</li>
  <li><strong>Handle complaints:</strong> receive a written complaint within three months of the incident (or the last incident in a series), extendable by three months for reasons recorded. Offer conciliation at the complainant's request (without monetary settlement). Otherwise conduct the inquiry following natural justice, complete within 90 days, and give the report within 10 days of completion. The employer acts on recommendations within 60 days.</li>
  <li><strong>Interim relief:</strong> during inquiry, on the complainant's request, recommend transfer, leave of up to three months, or restraint on the respondent reporting on the complainant's work (Section 12).</li>
  <li><strong>Annual report:</strong> the Committee prepares an annual report for each calendar year under Rule 14 with the number of complaints received, disposed of, pending for more than 90 days, workshops conducted, and the nature of action taken. Submit it to the employer and the District Officer. The employer includes the information in its annual report or, where no annual report is required, informs the District Officer.</li>
</ol>
<h3>B. Administering maternity benefit</h3>
<ol class="steps">
  <li>Inform every woman employee in writing and by email of maternity entitlements at appointment.</li>
  <li>On notice of pregnancy (in the prescribed form), confirm eligibility (80 days) and schedule leave.</li>
  <li>Pay maternity benefit at the average daily wage for the period of absence, in advance for the pre-delivery period on request, and the balance within 48 hours of proof of delivery.</li>
  <li>Provide nursing breaks, creche access (50 or more employees) and consider work from home arrangements.</li>
  <li>Do not dismiss or discharge, or change conditions of service to her disadvantage, during the maternity absence (Section 12 of the 1961 Act, carried into the Code).</li>
  <li>Where the woman is an ESIC insured person, maternity benefit is paid by ESIC instead of the employer, subject to ESIC conditions.</li>
</ol>
<h3>C. An executive readiness plan for the Labour Codes</h3>
<ol class="steps">
  <li><strong>Governance:</strong> appoint a cross-functional owner (HR, payroll, legal, finance, administration) and report progress to the board or audit committee.</li>
  <li><strong>Wage structure test:</strong> for each grade, compute the share of excluded components. Where it exceeds 50%, quantify the increase in PF, gratuity, leave encashment and bonus costs, and decide on restructuring.</li>
  <li><strong>Actuarial update:</strong> revalue gratuity and leave liabilities under AS 15 or Ind AS 19 using the Code wage definition, and assess the impact on the financial statements (past service cost).</li>
  <li><strong>Documentation:</strong> issue appointment letters to all employees in the prescribed form, update standing orders or service rules, and revise fixed-term contracts for parity and one-year gratuity eligibility.</li>
  <li><strong>Registrations and licences:</strong> migrate to the single registration under the OSH Code where required, and update contractor licences under the revised contract labour thresholds.</li>
  <li><strong>Payroll and processes:</strong> configure payment timelines (7th of the month, full and final settlement within two working days of separation), overtime at twice the wage rate, and leave accrual rules.</li>
  <li><strong>Safety and health:</strong> set up annual health check-ups for employees above the prescribed age, safety committees where required, and women's night shift safeguards.</li>
  <li><strong>Gig and platform workers:</strong> aggregators should map engagement models and set up processes for contribution and worker registration as schemes are notified.</li>
  <li><strong>Track State rules:</strong> labour is in the Concurrent List. States notify their own rules on many matters, so multi-State employers need a State-wise tracker.</li>
</ol>

<h2>4. Statutory Due Dates and Frequency Table</h2>
<table class="data">
  <thead><tr><th>Compliance</th><th>Frequency</th><th>Time limit</th></tr></thead>
  <tbody>
    <tr><td>POSH complaint by aggrieved woman</td><td>Event</td><td>Within 3 months of the incident, extendable by 3 months</td></tr>
    <tr><td>Copy of complaint to respondent</td><td>Event</td><td>Within 7 working days of receipt (Rule 7)</td></tr>
    <tr><td>Respondent's reply</td><td>Event</td><td>Within 10 working days of receipt of complaint copy</td></tr>
    <tr><td>Completion of inquiry</td><td>Event</td><td>Within 90 days</td></tr>
    <tr><td>Inquiry report to employer</td><td>Event</td><td>Within 10 days of completion of inquiry</td></tr>
    <tr><td>Employer action on report</td><td>Event</td><td>Within 60 days of receipt</td></tr>
    <tr><td>Appeal against recommendations</td><td>Event</td><td>Within 90 days of the recommendations</td></tr>
    <tr><td>Committee annual report</td><td>Annual (calendar year)</td><td>After the end of each calendar year, by the date fixed by the District Officer or State</td></tr>
    <tr><td>Disclosure in Board's report</td><td>Annual</td><td>With the Board's report for the financial year</td></tr>
    <tr><td>Maternity benefit payment for the pre-delivery period</td><td>Event</td><td>In advance on production of proof of pregnancy</td></tr>
    <tr><td>Balance maternity benefit</td><td>Event</td><td>Within 48 hours of production of proof of delivery</td></tr>
    <tr><td>Monthly wage payment under the Code on Wages</td><td>Monthly</td><td>By the 7th of the following month</td></tr>
    <tr><td>Full and final settlement</td><td>Event</td><td>Within 2 working days of removal, dismissal, retrenchment or resignation</td></tr>
    <tr><td>Statutory bonus payment</td><td>Annual</td><td>Within 8 months from the close of the accounting year</td></tr>
  </tbody>
</table>

<h2>5. Interest, Late Fees and Penal Consequences</h2>
<table class="data">
  <thead><tr><th>Default</th><th>Provision</th><th>Consequence</th></tr></thead>
  <tbody>
    <tr><td>Failure to constitute the Internal Committee, act on recommendations, or contravention of the POSH Act</td><td>POSH Act, Section 26</td><td>Fine up to Rs. 50,000. On repeat conviction, twice the punishment, and cancellation of licence or withdrawal or non-renewal of registration needed for carrying on business</td></tr>
    <tr><td>Breach of confidentiality of POSH proceedings</td><td>POSH Act, Section 17 and Rule 12</td><td>Penalty recoverable from the person in breach (Rs. 5,000 under Rule 12)</td></tr>
    <tr><td>Contravention of maternity benefit provisions</td><td>Maternity Benefit Act, Section 21 (carried into the Code with revised penalties)</td><td>Imprisonment and fine; for failure to pay maternity benefit or for wrongful dismissal, imprisonment of not less than 3 months extendable to 1 year and fine of Rs. 2,000 to Rs. 5,000 under the earlier Act</td></tr>
    <tr><td>Wage-related contravention</td><td>Code on Wages, Section 54</td><td>First offence: fine up to Rs. 50,000. Repeat within 5 years: imprisonment up to 3 months, or fine up to Rs. 1 lakh, or both. Paying less than the due amount: fine up to Rs. 50,000</td></tr>
    <tr><td>Compounding</td><td>Code on Wages, Section 56 and corresponding provisions in other Codes</td><td>First offences punishable only with fine may be compounded at 50% of the maximum fine (75% where punishable with imprisonment or fine, as specified)</td></tr>
    <tr><td>Inspector-cum-facilitator notices</td><td>All four Codes</td><td>An opportunity to comply within a specified period is given before prosecution for many first contraventions</td></tr>
  </tbody>
</table>

<h2>6. Practical Audit Pitfalls and Best Practices</h2>
<ul class="checklist">
  <li><strong>Constitute a committee at every location with 10 or more employees,</strong> not only at the head office. Count employees including contract workers, interns and trainees.</li>
  <li><strong>Choose a genuinely independent external member</strong> and record the basis for selection. Courts have set aside inquiries conducted without a properly constituted committee.</li>
  <li><strong>Keep inquiry files confidential and complete:</strong> complaint, notices, statements, evidence, minutes of each sitting, report and action taken.</li>
  <li><strong>Prepare the annual report even if there are no complaints.</strong> A nil report is still required and is evidence of compliance.</li>
  <li><strong>Train the committee in natural justice.</strong> Most challenges to POSH outcomes succeed on procedural grounds such as denial of opportunity to cross-examine or a biased member.</li>
  <li><strong>Coordinate maternity benefit with ESIC.</strong> For insured women, ensure the claim is made through ESIC to avoid paying twice or not at all.</li>
  <li><strong>Treat the Codes as a payroll project, not a legal memo.</strong> The largest impacts are on wage structures, gratuity valuation and full and final settlement timelines.</li>
  <li><strong>Keep a State-wise rule tracker.</strong> Thresholds such as those for lay-off permission, factory registration and shops and establishments vary by State notification.</li>
</ul>

<h2>7. Statutory References and Official Sources</h2>
<div class="sources">
<ul>
  <li>Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013: Sections 2, 4, 6, 9 to 19, 21 and 26; Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Rules, 2013, Rules 4, 7, 12 and 14.</li>
  <li>Companies (Accounts) Rules, 2014, Rule 8(5)(x).</li>
  <li>Vishaka v. State of Rajasthan, (1997) 6 SCC 241; Aureliano Fernandes v. State of Goa, Supreme Court, judgment dated 12 May 2023.</li>
  <li>Maternity Benefit Act, 1961 (reference), as amended by the Maternity Benefit (Amendment) Act, 2017: Sections 4, 5, 5(3), 8, 11, 11A, 12 and 21; Code on Social Security, 2020, Chapter VI.</li>
  <li>Code on Wages, 2019: Sections 2(y), 6, 9, 17, 26, 54 and 56.</li>
  <li>Industrial Relations Code, 2020: provisions on the Grievance Redressal Committee, negotiating union, standing orders, notice of strikes and lock-outs, retrenchment and the Worker Re-skilling Fund, and the special provisions on lay-off, retrenchment and closure (Chapter X).</li>
  <li>Code on Social Security, 2020: Sections 2(88), 53, 114 and Chapter VI.</li>
  <li>Occupational Safety, Health and Working Conditions Code, 2020: definitions (factory and contract labour thresholds), registration of establishments, duties of employers including appointment letters and health check-ups, hours of work and overtime, and employment of women at night.</li>
  <li>Ministry of Labour and Employment, notifications bringing the four Labour Codes into force from 21 November 2025, and draft and final rules under each Code.</li>
  <li>Official portals: labour.gov.in; shramsuvidha.gov.in; shebox.wcd.gov.in; epfindia.gov.in; esic.gov.in.</li>
</ul>
</div>
`
});
