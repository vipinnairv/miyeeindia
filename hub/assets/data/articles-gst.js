/* Goods and Services Tax articles. Authored by Vipin. */
window.ARTICLES = window.ARTICLES || [];

window.ARTICLES.push({
  id: "gst-registration-returns-qrmp",
  domain: "gst",
  domainLabel: "GST",
  title: "GST Registration, Return Architecture and the QRMP Scheme: Thresholds, Section 24, GSTR-1, IFF, GSTR-3B, GSTR-9 and GSTR-9C",
  summary: "Everything a business needs to get on to the GST system and stay compliant through FY 2026-27: registration thresholds and compulsory cases, Aadhaar and biometric authentication, the monthly and quarterly return cycle, annual return slabs, late fees and the three-year time bar.",
  author: "Authored by Vipin",
  date: "2026-09-22",
  readTime: "14 min read",
  tags: ["Registration", "Section 22", "Section 24", "QRMP", "GSTR-1", "IFF", "GSTR-3B", "GSTR-9", "GSTR-9C"],
  body: `
<div class="callout info"><strong>Context for FY 2026-27:</strong> GST rates were rationalised following the 56th GST Council meeting, with a predominantly two-rate structure (5% and 18%) and a higher rate for specified goods, effective from 22 September 2025. The registration and return architecture explained here continues to apply; it is the backbone on which those rates are reported.</div>

<h2>1. Statutory Overview and Legislative Intent</h2>
<p>GST is a destination-based tax on supply, levied concurrently by the Centre (CGST) and the States (SGST) or Union Territories (UTGST) on intra-State supplies, and by the Centre as IGST on inter-State supplies and imports. Registration is the gateway: only a registered person can collect tax, issue tax invoices and pass on input tax credit. Returns are the mechanism by which the tax collected is reported and the credit chain is validated.</p>
<ul>
  <li><strong>Section 22, CGST Act, 2017:</strong> every supplier whose aggregate turnover in a financial year exceeds the threshold must register in the State or UT from which taxable supplies are made.</li>
  <li><strong>Section 23:</strong> persons not liable to register (for example those dealing exclusively in exempt or non-taxable supplies, and agriculturists for produce from cultivation).</li>
  <li><strong>Section 24:</strong> categories that must register irrespective of turnover.</li>
  <li><strong>Section 25:</strong> procedure for registration, separate registration for each State and optional separate registrations for business verticals; voluntary registration.</li>
  <li><strong>Section 2(6):</strong> aggregate turnover means the value of all taxable supplies (excluding inward supplies on reverse charge), exempt supplies, exports and inter-State supplies of persons having the same PAN, computed on an all-India basis, excluding taxes.</li>
  <li><strong>Sections 37, 39 and 44:</strong> outward supply statement (GSTR-1), summary return with tax payment (GSTR-3B) and annual return (GSTR-9), with the reconciliation statement (GSTR-9C) under Section 44 read with Rule 80.</li>
  <li><strong>CGST Rules, 2017:</strong> Rules 8 to 26 (registration), Rule 59 (GSTR-1 and IFF), Rule 61 (GSTR-3B and QRMP), Rule 61A (option for quarterly return), Rule 80 (annual return and reconciliation statement).</li>
</ul>

<h2>2. Applicability and Threshold Matrix</h2>
<h3>Registration thresholds (Section 22 read with Notification No. 10/2019-Central Tax)</h3>
<table class="data">
  <thead><tr><th>Category of supplier</th><th>General States</th><th>Special category States</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Exclusively supplying goods</td><td>Rs. 40 lakh</td><td>Rs. 10 lakh or Rs. 20 lakh depending on the State</td><td>The Rs. 40 lakh limit is not available for persons supplying ice cream, pan masala and tobacco products, persons making intra-State supplies in States that did not adopt the higher limit, and persons registered voluntarily</td></tr>
    <tr><td>Supplying services, or both goods and services</td><td>Rs. 20 lakh</td><td>Rs. 10 lakh (Manipur, Mizoram, Nagaland and Tripura)</td><td>Exempt services count towards aggregate turnover</td></tr>
  </tbody>
</table>
<div class="callout warn">States that did not adopt the Rs. 40 lakh limit for goods, and the special category States, apply lower thresholds. Confirm the State-specific position on the State GST portal or the CBIC website before relying on a threshold.</div>
<h3>Compulsory registration irrespective of turnover (Section 24)</h3>
<table class="data">
  <thead><tr><th>Category</th><th>Relaxation, where available</th></tr></thead>
  <tbody>
    <tr><td>Persons making inter-State taxable supplies</td><td>Service providers making inter-State supplies are exempt up to the threshold (Notification No. 10/2017-Integrated Tax). Small suppliers of goods through e-commerce operators may register under the relaxed framework notified in 2023, subject to conditions</td></tr>
    <tr><td>Casual taxable persons</td><td>Handicraft goods suppliers relaxed by notification</td></tr>
    <tr><td>Persons liable to pay tax under reverse charge</td><td>None</td></tr>
    <tr><td>Electronic commerce operators liable to pay tax under Section 9(5)</td><td>None</td></tr>
    <tr><td>Non-resident taxable persons</td><td>None</td></tr>
    <tr><td>Persons required to deduct tax at source (Section 51)</td><td>Registration as a TDS deductor</td></tr>
    <tr><td>Persons who supply goods or services on behalf of other registered persons as agents</td><td>None</td></tr>
    <tr><td>Input Service Distributors (mandatory ISD registration for distribution of common input services from 1 April 2025)</td><td>None</td></tr>
    <tr><td>Persons supplying through an e-commerce operator who collects TCS under Section 52 (other than specified exemptions)</td><td>Service providers through ECO are exempt up to the threshold</td></tr>
    <tr><td>Every e-commerce operator required to collect TCS</td><td>None</td></tr>
    <tr><td>Persons supplying online information and database access or retrieval services from outside India to unregistered persons in India</td><td>None</td></tr>
  </tbody>
</table>
<h3>Return filing options</h3>
<table class="data">
  <thead><tr><th>Taxpayer profile</th><th>GSTR-1</th><th>GSTR-3B</th><th>Annual return</th></tr></thead>
  <tbody>
    <tr><td>Regular taxpayer, aggregate turnover above Rs. 5 crore</td><td>Monthly</td><td>Monthly</td><td>GSTR-9 mandatory; GSTR-9C (self-certified) mandatory</td></tr>
    <tr><td>Regular taxpayer, aggregate turnover up to Rs. 5 crore, not opting for QRMP</td><td>Monthly</td><td>Monthly</td><td>GSTR-9 mandatory above Rs. 2 crore; optional up to Rs. 2 crore</td></tr>
    <tr><td>QRMP taxpayer (aggregate turnover up to Rs. 5 crore)</td><td>Quarterly, with optional IFF for the first two months</td><td>Quarterly, with monthly tax payment in PMT-06</td><td>As above</td></tr>
    <tr><td>Composition taxpayer (Section 10)</td><td>Not applicable</td><td>CMP-08 quarterly statement-cum-challan</td><td>GSTR-4 annual return</td></tr>
  </tbody>
</table>

<h2>3. Step-by-Step Compliance and Filing Workflow</h2>
<h3>A. Obtaining registration</h3>
<ol class="steps">
  <li><strong>Part A of REG-01:</strong> on gst.gov.in, go to Services, then Registration, then New Registration. Enter legal name as per PAN, PAN, State, mobile number and email. Verify both through OTP to obtain a Temporary Reference Number (TRN).</li>
  <li><strong>Part B:</strong> log in with the TRN and complete business details, promoters or partners, authorised signatory, principal place of business, additional places, goods and services (HSN and SAC), bank account (or later within 30 days under Rule 10A), and State-specific information.</li>
  <li><strong>Documents:</strong> constitution document (partnership deed, certificate of incorporation), photographs, proof of principal place of business (ownership document, rent agreement with consent letter, electricity bill), and authorisation for the signatory.</li>
  <li><strong>Aadhaar authentication:</strong> opt for Aadhaar authentication for the promoters and authorised signatory. Under Rule 8(4A), applicants identified on the basis of data analytics and risk parameters must undergo biometric-based Aadhaar authentication and have their photograph taken, along with verification of original documents, at a designated GST Suvidha Kendra.</li>
  <li><strong>Verification and submission:</strong> sign with DSC (mandatory for companies and LLPs) or EVC. An Application Reference Number (ARN) is generated.</li>
  <li><strong>Processing:</strong> the officer may seek clarification in REG-03, to which the applicant replies in REG-04 within seven working days. Where Aadhaar authentication is completed and no physical verification is required, the application is deemed approved if not acted upon within seven working days. Where physical verification is required or Aadhaar authentication is not done, the period extends to 30 days.</li>
  <li><strong>Certificate:</strong> the registration certificate is issued in REG-06 with the 15-character GSTIN. Display it at the principal and every additional place of business (Rule 18).</li>
</ol>
<div class="callout tip"><strong>Simplified registration for small suppliers:</strong> the CGST Rules were amended in 2025 to introduce Rule 14A, an optional simplified registration for applicants whose output tax liability on supplies to registered persons does not exceed Rs. 2.5 lakh per month, with quicker electronic approval. Persons under this option must remain within the limit or withdraw from it.</div>
<h3>B. Monthly cycle for a regular taxpayer</h3>
<ol class="steps">
  <li><strong>Invoices and e-invoices:</strong> issue tax invoices under Section 31 and Rule 46. E-invoicing taxpayers obtain an IRN for every B2B invoice, and the details flow into GSTR-1 automatically.</li>
  <li><strong>GSTR-1 by the 11th:</strong> report B2B invoices (invoice-wise), B2C large inter-State invoices above the specified value, B2C others (rate-wise and State-wise), exports, credit and debit notes, amendments, advances, nil-rated and exempt supplies, HSN-wise summary (Table 12, with HSN digits as per turnover) and documents issued (Table 13). Use GSTR-1A to correct before GSTR-3B is filed, where needed.</li>
  <li><strong>Invoice Management System (IMS):</strong> review inward invoices uploaded by suppliers, and accept, reject or keep them pending. GSTR-2B for the month is generated from IMS actions.</li>
  <li><strong>GSTR-2B on the 14th:</strong> download and reconcile with the purchase register.</li>
  <li><strong>GSTR-3B by the 20th:</strong> the system auto-populates outward liability from GSTR-1 and ITC from GSTR-2B. Report outward supplies (Table 3.1), inter-State supplies to unregistered persons (3.2), ITC availed and reversed (Table 4), exempt inward supplies (Table 5) and interest and late fee (5.1). Offset liability using the electronic credit ledger in the order prescribed by Section 49 and Rule 88A, pay the balance in cash through PMT-06, and file with DSC or EVC.</li>
</ol>
<h3>C. Quarterly Return Monthly Payment (QRMP) scheme</h3>
<ol class="steps">
  <li><strong>Eligibility:</strong> registered persons (other than composition taxpayers) with aggregate turnover up to Rs. 5 crore in the preceding financial year, or new registrants expecting turnover within the limit.</li>
  <li><strong>Opting in:</strong> select the quarterly option on the portal from the first day of the second month of the preceding quarter to the last day of the first month of the quarter. The option continues until changed.</li>
  <li><strong>Invoice Furnishing Facility (IFF):</strong> optionally upload B2B invoices for the first and second months of the quarter by the 13th of the following month (value of invoices up to Rs. 50 lakh per month), so that customers get credit in their GSTR-2B.</li>
  <li><strong>Monthly payment by the 25th</strong> for the first two months through PMT-06, using either the Fixed Sum Method (system-computed: 35% of the cash tax paid in the last quarter, or the tax paid in cash in the last month where the preceding quarter was filed monthly) or the Self-Assessment Method (actual liability less ITC). No payment is needed if the balance in the ledgers covers the liability, or if liability is nil.</li>
  <li><strong>Quarterly GSTR-1</strong> by the 13th of the month after the quarter, and <strong>quarterly GSTR-3B</strong> by the 22nd or 24th of that month depending on the State.</li>
</ol>
<h3>D. Annual return and reconciliation</h3>
<ol class="steps">
  <li>Prepare GSTR-9 by aggregating outward supplies, ITC (with reconciliation against GSTR-2B and books), tax paid and amendments reported in the following year up to the cut-off. Use the auto-drafted values as a starting point only.</li>
  <li>Taxpayers with aggregate turnover above Rs. 5 crore also file GSTR-9C, a self-certified reconciliation between audited financial statements and GSTR-9 (certification by a Chartered Accountant or Cost Accountant was removed by the Finance Act, 2021 and Notification No. 30/2021-Central Tax).</li>
  <li>Pay any additional liability through DRC-03 with interest before filing.</li>
</ol>

<h2>4. Statutory Due Dates and Frequency Table</h2>
<table class="data">
  <thead><tr><th>Return or payment</th><th>Who</th><th>Frequency</th><th>Due date</th></tr></thead>
  <tbody>
    <tr><td>GSTR-1</td><td>Monthly filers</td><td>Monthly</td><td>11th of the following month</td></tr>
    <tr><td>IFF</td><td>QRMP taxpayers (optional)</td><td>Months 1 and 2 of each quarter</td><td>13th of the following month</td></tr>
    <tr><td>GSTR-1</td><td>QRMP taxpayers</td><td>Quarterly</td><td>13th of the month after the quarter</td></tr>
    <tr><td>GSTR-2B</td><td>System generated</td><td>Monthly</td><td>14th of the following month</td></tr>
    <tr><td>GSTR-3B</td><td>Monthly filers</td><td>Monthly</td><td>20th of the following month</td></tr>
    <tr><td>PMT-06</td><td>QRMP taxpayers</td><td>Months 1 and 2 of each quarter</td><td>25th of the following month</td></tr>
    <tr><td>GSTR-3B</td><td>QRMP taxpayers in Category X States (Chhattisgarh, Madhya Pradesh, Gujarat, Maharashtra, Karnataka, Goa, Kerala, Tamil Nadu, Telangana, Andhra Pradesh and specified UTs)</td><td>Quarterly</td><td>22nd of the month after the quarter</td></tr>
    <tr><td>GSTR-3B</td><td>QRMP taxpayers in other States and UTs</td><td>Quarterly</td><td>24th of the month after the quarter</td></tr>
    <tr><td>CMP-08</td><td>Composition taxpayers</td><td>Quarterly</td><td>18th of the month after the quarter</td></tr>
    <tr><td>GSTR-4</td><td>Composition taxpayers</td><td>Annual</td><td>30 April following the financial year</td></tr>
    <tr><td>GSTR-9 and GSTR-9C for FY 2025-26</td><td>Regular taxpayers as applicable</td><td>Annual</td><td>31 December 2026</td></tr>
    <tr><td>GSTR-9 and GSTR-9C for FY 2026-27</td><td>Regular taxpayers as applicable</td><td>Annual</td><td>31 December 2027</td></tr>
  </tbody>
</table>
<div class="callout warn"><strong>Three-year time bar:</strong> the Finance Act, 2023 amended Sections 37, 39, 44 and 52 so that a return cannot be filed after three years from its due date. The GST portal has enforced this restriction since 2025. Old returns that are not filed can no longer be regularised; the only route left is departmental proceedings.</div>

<h2>5. Interest, Late Fees and Penal Consequences</h2>
<table class="data">
  <thead><tr><th>Default</th><th>Provision</th><th>Amount</th></tr></thead>
  <tbody>
    <tr><td>Late GSTR-3B or GSTR-1 (with tax liability)</td><td>Section 47; Notification Nos. 19/2021 and 20/2021-Central Tax</td><td>Rs. 50 per day (Rs. 25 CGST plus Rs. 25 SGST). Maximum per return: Rs. 2,000 where aggregate turnover is up to Rs. 1.5 crore; Rs. 5,000 for Rs. 1.5 crore to Rs. 5 crore; Rs. 10,000 above Rs. 5 crore</td></tr>
    <tr><td>Late GSTR-3B or GSTR-1 (nil return)</td><td>Same</td><td>Rs. 20 per day (Rs. 10 plus Rs. 10), maximum Rs. 500 per return</td></tr>
    <tr><td>Late GSTR-9</td><td>Section 47(2); Notification No. 07/2023-Central Tax</td><td>Aggregate turnover up to Rs. 5 crore: Rs. 50 per day, maximum 0.04% of turnover in the State. Rs. 5 crore to Rs. 20 crore: Rs. 100 per day, maximum 0.04%. Above Rs. 20 crore: Rs. 200 per day, maximum 0.5%</td></tr>
    <tr><td>Late GSTR-4</td><td>Section 47</td><td>Rs. 50 per day, maximum Rs. 2,000; Rs. 500 for nil returns</td></tr>
    <tr><td>Delayed payment of tax</td><td>Section 50(1); Notification No. 13/2017-Central Tax</td><td>Interest at 18% per annum on the portion of tax paid in cash (net cash liability) for the period of delay</td></tr>
    <tr><td>Wrongly availed and utilised ITC</td><td>Section 50(3)</td><td>Interest at 18% per annum</td></tr>
    <tr><td>Failure to register when liable</td><td>Section 122(1)(xi)</td><td>Rs. 10,000 or the tax evaded, whichever is higher</td></tr>
    <tr><td>General contravention</td><td>Section 125</td><td>Up to Rs. 25,000 under each Act</td></tr>
    <tr><td>Non-filing for six months (three periods for composition)</td><td>Section 29(2)(c); Rule 21</td><td>Cancellation of registration by the proper officer</td></tr>
    <tr><td>GSTR-3B not filed for previous period</td><td>Rule 59(6)</td><td>GSTR-1 and IFF cannot be filed</td></tr>
    <tr><td>GSTR-3B not filed for two consecutive periods</td><td>Rule 138E</td><td>E-way bill generation blocked</td></tr>
  </tbody>
</table>

<h2>6. Practical Audit Pitfalls and Best Practices</h2>
<ul class="checklist">
  <li><strong>Reconcile GSTR-1 with GSTR-3B every month.</strong> Under Rule 88C, if liability in GSTR-1 exceeds GSTR-3B beyond the prescribed limit, the system issues DRC-01B and blocks the next GSTR-1 until the difference is paid or explained.</li>
  <li><strong>Reconcile e-invoice and e-way bill data with GSTR-1.</strong> Department analytics compare these three sources automatically.</li>
  <li><strong>Get HSN reporting right.</strong> Table 12 now uses a validated drop-down of HSN codes; mismatches with invoice data are flagged.</li>
  <li><strong>Keep registration data current.</strong> Amend core fields (address, partners, directors) through REG-14 within 15 days of change. An unregistered additional place of business is a frequent audit observation.</li>
  <li><strong>Track turnover across all registrations.</strong> Aggregate turnover is PAN-wide; QRMP eligibility, e-invoicing, HSN digits and GSTR-9C applicability all depend on it.</li>
  <li><strong>File nil returns too.</strong> A nil return missed for months triggers cancellation and blocks e-way bills.</li>
  <li><strong>Maintain records for 72 months</strong> from the due date of the annual return under Section 35 and Section 36, or longer if proceedings are pending.</li>
</ul>

<h2>7. Statutory References and Official Sources</h2>
<div class="sources">
<ul>
  <li>Central Goods and Services Tax Act, 2017: Sections 2(6), 9, 10, 22, 23, 24, 25, 29, 31, 35, 37, 39, 44, 47, 49, 50, 52, 122 and 125.</li>
  <li>Integrated Goods and Services Tax Act, 2017: Section 5 and Section 20.</li>
  <li>Central Goods and Services Tax Rules, 2017: Rules 8, 8(4A), 9, 10A, 14A, 18, 21, 46, 59, 61, 61A, 80, 88A, 88C and 138E.</li>
  <li>Notification No. 10/2019-Central Tax dated 7 March 2019 (Rs. 40 lakh threshold for goods).</li>
  <li>Notification No. 10/2017-Integrated Tax dated 13 October 2017 (exemption for inter-State service suppliers).</li>
  <li>Notification No. 13/2017-Central Tax dated 28 June 2017, as amended (interest rates).</li>
  <li>Notification Nos. 19/2021 and 20/2021-Central Tax dated 1 June 2021 (late fee caps for GSTR-3B and GSTR-1).</li>
  <li>Notification No. 07/2023-Central Tax dated 31 March 2023 (GSTR-9 late fee).</li>
  <li>Notification No. 30/2021-Central Tax dated 30 July 2021 (self-certification of GSTR-9C).</li>
  <li>Finance Act, 2023 (three-year time bar under Sections 37(5), 39(11), 44(2) and 52(15)).</li>
  <li>Press release of the 56th GST Council meeting, 3 September 2025 (rate rationalisation).</li>
  <li>Official portals: gst.gov.in (filing and GSTN advisories); cbic-gst.gov.in (Acts, Rules, notifications and circulars).</li>
</ul>
</div>
`
});

window.ARTICLES.push({
  id: "gst-itc-eligibility-gstr2b-rule86b",
  domain: "gst",
  domainLabel: "GST",
  title: "Input Tax Credit: Section 16 Conditions, GSTR-2B Matching, Section 17(5) Blocked Credits and the Rule 86B Cash Payment Restriction",
  summary: "The complete ITC playbook: entitlement conditions including the 180-day payment rule and time limit, the IMS and GSTR-2B workflow, reversals under Rules 37, 37A, 42 and 43, blocked credits after the Safari Retreats judgment and the 2025 amendment, and the 1% cash mandate.",
  author: "Authored by Vipin",
  date: "2026-09-29",
  readTime: "14 min read",
  tags: ["ITC", "Section 16", "GSTR-2B", "IMS", "Section 17(5)", "Rule 86B", "Rule 37A"],
  body: `
<div class="callout info"><strong>Principle:</strong> input tax credit is not an automatic right. It is a statutory entitlement that exists only when every condition in Section 16 is satisfied and no restriction in Section 17 applies. Most GST disputes in India are about ITC.</div>

<h2>1. Statutory Overview and Legislative Intent</h2>
<p>ITC removes the cascading effect of tax: tax paid on inputs, input services and capital goods used in the course or furtherance of business can be set off against output tax. Chapter V of the CGST Act (Sections 16 to 21) and Chapter V of the CGST Rules (Rules 36 to 45) govern eligibility, apportionment, reversal and utilisation. Since 2022 the law has moved firmly towards matching: credit is available only when the supplier has reported the invoice and paid the tax, as reflected in the recipient's GSTR-2B.</p>
<h3>Section 16(2): conditions for taking ITC</h3>
<ol>
  <li><strong>(a) Document:</strong> the registered person is in possession of a tax invoice or debit note issued by a registered supplier, or other prescribed tax-paying documents (for example a bill of entry for imports).</li>
  <li><strong>(aa) Reporting by supplier:</strong> the details of the invoice or debit note have been furnished by the supplier in GSTR-1 or IFF and communicated to the recipient in GSTR-2B under Section 38.</li>
  <li><strong>(b) Receipt:</strong> the goods or services have been received. Goods delivered to a third party on the direction of the registered person (bill to ship to) are deemed received. Where goods are received in lots, credit is available on receipt of the last lot.</li>
  <li><strong>(ba) No restriction in GSTR-2B:</strong> the details are not restricted under Section 38(2)(b) (for example, supplies by newly registered suppliers or defaulting suppliers flagged by the system).</li>
  <li><strong>(c) Tax paid by supplier:</strong> the tax charged has actually been paid to the Government, in cash or through ITC.</li>
  <li><strong>(d) Return filed:</strong> the registered person has furnished the return under Section 39.</li>
</ol>
<p>These are commonly summarised as the four classic conditions (document, receipt, tax paid, return filed), now supplemented by the two matching conditions (aa) and (ba).</p>
<h3>The 180-day payment rule (second proviso to Section 16(2))</h3>
<p>Where the recipient fails to pay the supplier the value of supply plus tax within 180 days from the date of invoice, ITC availed must be paid back with interest. Under Rule 37 as amended in 2022, the amount of ITC proportionate to the unpaid value is reversed in GSTR-3B for the tax period immediately following the 180 days. The credit can be re-availed when payment is made. The rule does not apply to supplies on reverse charge and to deemed supplies without consideration in Schedule I.</p>
<h3>The time limit (Section 16(4))</h3>
<p>ITC on an invoice or debit note cannot be taken after <strong>30 November</strong> following the end of the financial year to which the invoice relates, or the date of furnishing the annual return, whichever is earlier. Relief provisions were inserted by the Finance (No. 2) Act, 2024 as Section 16(5) (for FY 2017-18 to 2020-21, credit taken in returns filed up to 30 November 2021) and Section 16(6) (on revocation of cancelled registration).</p>

<h2>2. Applicability and Threshold Matrix</h2>
<h3>Section 17(5): blocked credits</h3>
<table class="data">
  <thead><tr><th>Clause</th><th>Blocked item</th><th>Exceptions where credit is allowed</th></tr></thead>
  <tbody>
    <tr><td>(a)</td><td>Motor vehicles for transportation of persons with approved seating capacity of not more than 13 persons (including the driver)</td><td>When used for further supply of such vehicles, transportation of passengers, or imparting training on driving such vehicles</td></tr>
    <tr><td>(aa)</td><td>Vessels and aircraft</td><td>Further supply, transportation of passengers, training, transportation of goods</td></tr>
    <tr><td>(ab)</td><td>General insurance, servicing, repair and maintenance for vehicles, vessels and aircraft blocked under (a) and (aa)</td><td>Where the vehicle itself is eligible, or for manufacturers and insurers of such vehicles</td></tr>
    <tr><td>(b)(i)</td><td>Food and beverages, outdoor catering, beauty treatment, health services, cosmetic and plastic surgery, leasing or hiring of blocked vehicles, life and health insurance</td><td>Where used for making an outward taxable supply of the same category, or as an element of a taxable composite or mixed supply; and where provision is obligatory for an employer under any law (for example canteen facilities under the Factories Act or the OSH Code)</td></tr>
    <tr><td>(b)(ii)</td><td>Membership of a club, health and fitness centre</td><td>None</td></tr>
    <tr><td>(b)(iii)</td><td>Travel benefits extended to employees on vacation such as leave or home travel concession</td><td>None</td></tr>
    <tr><td>(c)</td><td>Works contract services supplied for construction of immovable property (other than plant and machinery)</td><td>Where it is an input service for further supply of works contract service</td></tr>
    <tr><td>(d)</td><td>Goods or services received for construction of an immovable property (other than plant and machinery) on own account, including when used in the course or furtherance of business</td><td>Plant and machinery (as defined in the Explanation to Section 17); see the note on Safari Retreats below</td></tr>
    <tr><td>(e)</td><td>Goods or services on which tax has been paid under the composition scheme</td><td>None</td></tr>
    <tr><td>(f)</td><td>Goods or services received by a non-resident taxable person</td><td>Goods imported by him</td></tr>
    <tr><td>(fa)</td><td>Goods or services used for activities relating to Corporate Social Responsibility obligations under Section 135 of the Companies Act</td><td>None</td></tr>
    <tr><td>(g)</td><td>Goods or services used for personal consumption</td><td>None</td></tr>
    <tr><td>(h)</td><td>Goods lost, stolen, destroyed, written off, or disposed of by way of gift or free samples</td><td>None</td></tr>
    <tr><td>(i)</td><td>Tax paid in accordance with orders under Section 74 (for periods up to FY 2023-24), and Sections 129 and 130</td><td>None</td></tr>
  </tbody>
</table>
<div class="callout warn"><strong>Safari Retreats and the 2025 retrospective amendment.</strong> In Chief Commissioner of CGST v. Safari Retreats Pvt. Ltd. (Supreme Court, 3 October 2024), the Court held that the expression "plant or machinery" in Section 17(5)(d) is different from "plant and machinery", and that whether a building qualifies as a "plant" must be decided on a functionality test case by case. The Finance Act, 2025 then amended Section 17(5)(d) retrospectively from 1 July 2017 to read "plant and machinery", aligning it with the definition in the Explanation to Section 17. Taxpayers who had relied on the judgment for buildings such as malls or warehouses should reassess their positions in light of the amendment.</div>
<h3>Rule 86B: when 1% of output tax must be paid in cash</h3>
<table class="data">
  <thead><tr><th>Test</th><th>Position</th></tr></thead>
  <tbody>
    <tr><td>Who is covered</td><td>A registered person whose value of taxable supply (other than exempt supplies and zero-rated supplies) in a month exceeds Rs. 50 lakh</td></tr>
    <tr><td>Restriction</td><td>Cannot use the electronic credit ledger to discharge more than 99% of output tax liability; at least 1% must be paid through the electronic cash ledger</td></tr>
    <tr><td>Exemption: income tax paid</td><td>Where the registered person, or the proprietor, karta, managing director, any of its two partners, whole-time directors or members of managing committee, has paid income tax exceeding Rs. 1 lakh in each of the last two financial years for which the return due date has expired</td></tr>
    <tr><td>Exemption: refunds</td><td>Where the registered person received a refund of unutilised ITC exceeding Rs. 1 lakh in the preceding financial year on account of zero-rated supplies without payment of tax or inverted duty structure</td></tr>
    <tr><td>Exemption: cash already paid</td><td>Where the registered person has discharged more than 1% of total output tax liability through cash, cumulatively up to the month in the current financial year</td></tr>
    <tr><td>Exemption: entity type</td><td>Government departments, public sector undertakings, local authorities and statutory bodies</td></tr>
    <tr><td>Commissioner's power</td><td>The Commissioner or an authorised officer may remove the restriction after verification and safeguards</td></tr>
  </tbody>
</table>

<h2>3. Step-by-Step Compliance and Filing Workflow</h2>
<h3>A. Monthly ITC reconciliation cycle</h3>
<ol class="steps">
  <li><strong>Day 1 to 10, vendor discipline:</strong> remind key suppliers to file GSTR-1 by the 11th (or IFF by the 13th) with correct GSTIN, invoice number, date and tax values.</li>
  <li><strong>Day 11 to 13, IMS review:</strong> in the Invoice Management System, accept invoices that match the purchase register, reject invoices that are wrong or not received, and keep pending those awaiting receipt (for example goods in transit). Remember that accepting or keeping pending does not by itself establish eligibility; Section 16 and 17 still apply.</li>
  <li><strong>Day 14, GSTR-2B:</strong> download GSTR-2B in Excel or JSON. It contains ITC available, ITC not available (for example time-barred invoices or place of supply mismatches), and ITC to be reversed (credit notes).</li>
  <li><strong>Reconcile at invoice level:</strong> match supplier GSTIN, invoice number (normalise prefixes and leading zeros), date, taxable value and each tax head. Classify each line as matched, value mismatch, available in books but not in GSTR-2B, or available in GSTR-2B but not in books.</li>
  <li><strong>Apply eligibility filters:</strong> remove blocked credits under Section 17(5), personal use, items not yet received, and invoices older than the Section 16(4) limit.</li>
  <li><strong>Apportion common credits</strong> under Rule 42 (inputs and input services) and Rule 43 (capital goods) where the business makes both taxable and exempt supplies, with the annual true-up by the due date of the September return of the following year.</li>
  <li><strong>Fill GSTR-3B Table 4:</strong> Table 4A (all ITC available as per GSTR-2B, with imports and reverse charge separately), 4B(1) reversals that are permanent (Rule 38, 42, 43 and Section 17(5)), 4B(2) reversals that may be reclaimed (Rule 37, 37A, invoices not received), 4C net ITC, and 4D(1) ITC reclaimed in this period that was earlier reversed under 4B(2). Track the reclaimable balance in the Electronic Credit Reversal and Re-claimed Statement on the portal.</li>
  <li><strong>Utilise credit</strong> in the order under Section 49(5) and Rule 88A: IGST credit first against IGST, then against CGST and SGST in any order; CGST credit cannot be used for SGST and vice versa.</li>
</ol>
<h3>B. Year-end and periodic controls</h3>
<ol class="steps">
  <li><strong>180-day tracker:</strong> from accounts payable ageing, list invoices unpaid beyond 180 days, reverse proportionate ITC in Table 4B(2) with interest under Section 50(3) where the credit had been utilised, and reclaim on payment in Table 4D(1).</li>
  <li><strong>Rule 37A:</strong> if a supplier has not filed GSTR-3B for the period in which the invoice was reported, by 30 September of the following year, reverse that credit by 30 November and reclaim when the supplier files.</li>
  <li><strong>Section 16(4) cut-off:</strong> by 30 November, take all pending eligible credits of the previous year, including those of late-filing vendors.</li>
  <li><strong>Rule 88D alerts:</strong> if ITC claimed in GSTR-3B exceeds GSTR-2B by more than the threshold notified (for example Rs. 25 lakh and 20%), the system issues DRC-01C; reply within seven days by reversing excess or explaining the difference.</li>
  <li><strong>Rule 86B check:</strong> each month, compute taxable supplies; if above Rs. 50 lakh and no exemption applies, pay at least 1% of output tax in cash.</li>
</ol>

<h2>4. Statutory Due Dates and Frequency Table</h2>
<table class="data">
  <thead><tr><th>Event</th><th>Provision</th><th>Time limit</th></tr></thead>
  <tbody>
    <tr><td>IMS action on inward invoices</td><td>Section 38; GSTN advisory</td><td>Before generation of GSTR-2B on the 14th (pending invoices carry forward)</td></tr>
    <tr><td>GSTR-2B generation</td><td>Rule 60</td><td>14th of the following month (quarterly for QRMP)</td></tr>
    <tr><td>ITC claim in GSTR-3B</td><td>Section 39</td><td>20th (or 22nd or 24th for QRMP)</td></tr>
    <tr><td>Last date to claim ITC of FY 2025-26</td><td>Section 16(4)</td><td>30 November 2026, or date of filing GSTR-9 for FY 2025-26 if earlier</td></tr>
    <tr><td>Last date to claim ITC of FY 2026-27</td><td>Section 16(4)</td><td>30 November 2027, or date of filing GSTR-9 for FY 2026-27 if earlier</td></tr>
    <tr><td>Reversal for non-payment to supplier</td><td>Second proviso to Section 16(2); Rule 37</td><td>GSTR-3B for the period following the 180th day from invoice date</td></tr>
    <tr><td>Reversal where supplier did not file GSTR-3B</td><td>Rule 37A</td><td>By 30 November of the following year</td></tr>
    <tr><td>Annual reversal true-up for common credit</td><td>Rules 42(2) and 43(2)</td><td>By the due date of the September return of the following year</td></tr>
    <tr><td>Reply to DRC-01C</td><td>Rule 88D</td><td>Within 7 days</td></tr>
    <tr><td>Rule 86B check</td><td>Rule 86B</td><td>Every month</td></tr>
  </tbody>
</table>

<h2>5. Interest, Late Fees and Penal Consequences</h2>
<table class="data">
  <thead><tr><th>Situation</th><th>Provision</th><th>Consequence</th></tr></thead>
  <tbody>
    <tr><td>ITC wrongly availed and utilised</td><td>Section 50(3), read with Rule 88B</td><td>Interest at 18% per annum from the date of utilisation until reversal. Utilisation is determined by comparing the balance in the electronic credit ledger with the wrongly availed amount</td></tr>
    <tr><td>ITC wrongly availed but not utilised</td><td>Section 50(3)</td><td>No interest if the balance in the electronic credit ledger never fell below the wrongly availed amount; reversal still required</td></tr>
    <tr><td>Taking ITC without receipt of goods or services, or on fake invoices</td><td>Section 122(1)(ii), (iii) and (vii)</td><td>Penalty of Rs. 10,000 or an amount equal to the ITC wrongly availed, whichever is higher</td></tr>
    <tr><td>Demand for FY 2024-25 onwards (non-fraud)</td><td>Section 74A</td><td>Tax, interest, and penalty of 10% of tax or Rs. 10,000, whichever is higher; no penalty if tax and interest paid within 60 days of the show cause notice</td></tr>
    <tr><td>Demand for FY 2024-25 onwards (fraud or suppression)</td><td>Section 74A</td><td>Penalty equal to 100% of tax, reduced to 15% if paid before notice, 25% within 60 days of notice, and 50% within 60 days of the order</td></tr>
    <tr><td>Credit ledger blocked</td><td>Rule 86A</td><td>The Commissioner may disallow debit of the credit ledger for up to one year where there is reason to believe ITC is fraudulently availed or ineligible</td></tr>
    <tr><td>Fraudulent ITC above monetary limits</td><td>Section 132</td><td>Prosecution with imprisonment depending on the amount involved; offences involving fake invoices are treated most seriously</td></tr>
  </tbody>
</table>

<h2>6. Practical Audit Pitfalls and Best Practices</h2>
<ul class="checklist">
  <li><strong>Never claim on the purchase register alone.</strong> Since 1 January 2022, Rule 36(4) and Section 16(2)(aa) allow ITC only to the extent it appears in GSTR-2B. Provisional credit is no longer permitted.</li>
  <li><strong>Watch place of supply mismatches.</strong> A hotel in another State charging that State's CGST and SGST will appear in GSTR-2B as ineligible for you. Ensure the supplier charges IGST where your registration is in a different State, or register in that State.</li>
  <li><strong>Document receipt.</strong> Keep goods receipt notes, transporter documents and e-way bills. For services, keep contracts, deliverables and acceptance emails. Departmental audits frequently challenge receipt.</li>
  <li><strong>Vendor due diligence.</strong> Check the GST status of new vendors before the first payment. Cancelled or suspended GSTINs, and suppliers who file GSTR-1 but not GSTR-3B, are the main source of later demands.</li>
  <li><strong>Separate employee-related costs.</strong> Food, health insurance, club memberships and leave travel need a classification at the expense ledger level so that blocked credits are not claimed by default.</li>
  <li><strong>Capital work in progress review.</strong> For construction projects, segregate plant and machinery from building costs at the purchase order stage to avoid blocked credit disputes under Section 17(5)(c) and (d).</li>
  <li><strong>Reconcile GSTR-9 Table 8.</strong> The difference between GSTR-2B values and ITC claimed is examined closely in scrutiny under Section 61. Prepare a reasoned reconciliation in advance.</li>
</ul>

<h2>7. Statutory References and Official Sources</h2>
<div class="sources">
<ul>
  <li>Central Goods and Services Tax Act, 2017: Sections 16 (including 16(2)(aa), 16(2)(ba), 16(4), 16(5) and 16(6)), 17 (including 17(5)), 38, 39, 41, 49, 50, 74, 74A, 122 and 132.</li>
  <li>Central Goods and Services Tax Rules, 2017: Rules 36(4), 37, 37A, 38, 42, 43, 60, 86A, 86B, 88A, 88B and 88D.</li>
  <li>Finance Act, 2022 (Section 16(2)(aa) and (ba), amendment to Section 50(3)); Finance (No. 2) Act, 2024 (Sections 16(5), 16(6) and 74A); Finance Act, 2025 (retrospective amendment to Section 17(5)(d)).</li>
  <li>Notification No. 13/2017-Central Tax, as amended (rate of interest under Section 50).</li>
  <li>Chief Commissioner of Central Goods and Service Tax v. Safari Retreats Private Limited, Supreme Court of India, judgment dated 3 October 2024.</li>
  <li>GSTN advisories on the Invoice Management System (2024) and on the Electronic Credit Reversal and Re-claimed Statement (2023).</li>
  <li>Official portals: gst.gov.in; cbic-gst.gov.in.</li>
</ul>
</div>
`
});

window.ARTICLES.push({
  id: "gst-einvoice-ewaybill-rcm-notices",
  domain: "gst",
  domainLabel: "GST",
  title: "e-Invoicing, e-Way Bills, Reverse Charge and Departmental Notices: IRN Rules, the 30-Day IRP Limit, e-Way Bill Validity, Notified RCM Services, ASMT-10 and DRC-01",
  summary: "The operational controls that decide whether invoices are valid and goods can move, the reverse charge obligations businesses most often miss, and a practical method for answering scrutiny and demand notices.",
  author: "Authored by Vipin",
  date: "2026-10-02",
  readTime: "14 min read",
  tags: ["e-Invoice", "IRN", "e-Way Bill", "RCM", "ASMT-10", "DRC-01", "Section 74A"],
  body: `
<div class="callout info"><strong>Three systems, one data trail:</strong> the e-invoice (IRP), the e-way bill system and the GST return system now talk to each other. Department analytics compare all three automatically. Errors in one surface as notices in another.</div>

<h2>1. Statutory Overview and Legislative Intent</h2>
<h3>e-Invoicing</h3>
<p>Rule 48(4) of the CGST Rules requires notified classes of registered persons to prepare invoices by uploading specified particulars to the Invoice Registration Portal (IRP) and obtaining an Invoice Reference Number (IRN). Under Rule 48(5), an invoice issued without following this procedure is not a valid invoice. The intent is to capture B2B transactions at source, reduce fake invoicing, and pre-fill returns.</p>
<h3>e-Way bills</h3>
<p>Section 68 of the CGST Act and Rules 138 to 138E require a person in charge of a conveyance carrying goods beyond a specified value to carry prescribed documents and an electronic way bill. The system tracks movement of goods and supports verification on the road.</p>
<h3>Reverse charge mechanism (RCM)</h3>
<p>Ordinarily the supplier pays tax. Under Section 9(3) of the CGST Act (and Section 5(3) of the IGST Act), the Government notifies goods and services on which the recipient pays tax. Under Section 9(4), specified registered recipients pay tax on supplies from unregistered persons. RCM shifts the liability where suppliers are numerous, unorganised or outside the tax net.</p>
<h3>Departmental notices</h3>
<p>Section 61 (scrutiny of returns), Section 65 (departmental audit), Section 66 (special audit), Section 67 (inspection and search), and the demand provisions in Sections 73, 74 and, for FY 2024-25 onwards, Section 74A, together with Rule 142 for show cause notices and orders.</p>

<h2>2. Applicability and Threshold Matrix</h2>
<h3>e-Invoicing</h3>
<table class="data">
  <thead><tr><th>Item</th><th>Position</th></tr></thead>
  <tbody>
    <tr><td>Who must issue e-invoices</td><td>Registered persons whose aggregate turnover in any financial year from 2017-18 onwards exceeded Rs. 5 crore (from 1 August 2023, Notification No. 10/2023-Central Tax)</td></tr>
    <tr><td>Documents covered</td><td>B2B tax invoices, credit notes and debit notes; supplies to SEZ units and developers; exports; deemed exports</td></tr>
    <tr><td>Not covered</td><td>B2C invoices (dynamic QR code required for entities with aggregate turnover above Rs. 500 crore), and specified sectors such as SEZ units, insurance companies, banking companies and financial institutions including NBFCs, goods transport agencies supplying transport of goods by road, passenger transport services, and admission to cinema exhibitions, as notified</td></tr>
    <tr><td>30-day reporting limit</td><td>Taxpayers with aggregate turnover of Rs. 10 crore or more cannot report invoices and credit or debit notes to the IRP if the document date is more than 30 days old (applicable from 1 April 2025 under the GSTN advisory; earlier this applied to turnover of Rs. 100 crore and above)</td></tr>
    <tr><td>Cancellation</td><td>Within 24 hours on the IRP; partial cancellation is not allowed. After 24 hours, issue a credit note or amend in GSTR-1</td></tr>
  </tbody>
</table>
<h3>e-Way bills</h3>
<table class="data">
  <thead><tr><th>Item</th><th>Position</th></tr></thead>
  <tbody>
    <tr><td>Consignment value threshold</td><td>Rs. 50,000 per consignment for inter-State movement; States notify their own intra-State limits (some at Rs. 1 lakh or for specified goods)</td></tr>
    <tr><td>Mandatory regardless of value</td><td>Inter-State movement of goods by a principal to a job worker, and inter-State movement of handicraft goods by exempted dealers</td></tr>
    <tr><td>Who generates</td><td>Registered supplier or recipient (Part A); transporter updates vehicle details (Part B). Unregistered transporters enrol on the portal</td></tr>
    <tr><td>Part B exemption</td><td>Movement within the same State up to 50 km between the place of business and the transporter's place (Part A still required)</td></tr>
    <tr><td>Validity (Rule 138(10))</td><td>Normal cargo: 1 day for up to 200 km, plus 1 day for every further 200 km or part. Over-dimensional cargo: 1 day for up to 20 km, plus 1 day for every further 20 km or part. The day ends at midnight of the following day</td></tr>
    <tr><td>Extension</td><td>Within 8 hours before or after expiry, if goods cannot be transported within validity due to exceptional circumstances</td></tr>
    <tr><td>Document age and validity caps</td><td>From 1 January 2025, e-way bills cannot be generated for documents older than 180 days, and the total validity including extensions is capped at 360 days from original generation</td></tr>
    <tr><td>Blocking (Rule 138E)</td><td>Generation is blocked for a GSTIN that has not filed GSTR-3B for two consecutive tax periods (two quarters for QRMP), or CMP-08 for two consecutive quarters for composition taxpayers</td></tr>
  </tbody>
</table>
<h3>Notified reverse charge supplies (most common for businesses)</h3>
<table class="data">
  <thead><tr><th>Supply</th><th>Supplier</th><th>Recipient who pays tax</th></tr></thead>
  <tbody>
    <tr><td>Goods Transport Agency (GTA) services</td><td>GTA not opting to pay tax under forward charge</td><td>Factory, society, co-operative society, registered person, body corporate, partnership firm or casual taxable person located in the taxable territory</td></tr>
    <tr><td>Legal services</td><td>Individual advocate including senior advocate, or firm of advocates</td><td>Any business entity located in the taxable territory (exempted where turnover is below the threshold in the exemption notification)</td></tr>
    <tr><td>Services by a director (sitting fees and remuneration other than as employee)</td><td>Director of a company or body corporate</td><td>The company or body corporate</td></tr>
    <tr><td>Security services (supply of security personnel)</td><td>Any person other than a body corporate</td><td>Registered person (excluding persons registered only for TDS, and composition taxpayers)</td></tr>
    <tr><td>Sponsorship services</td><td>Any person</td><td>Body corporate or partnership firm</td></tr>
    <tr><td>Services by an insurance agent</td><td>Insurance agent</td><td>Insurance company</td></tr>
    <tr><td>Services by a recovery agent</td><td>Recovery agent</td><td>Banking company, financial institution or NBFC</td></tr>
    <tr><td>Renting of residential dwelling</td><td>Any person</td><td>Registered person</td></tr>
    <tr><td>Renting of immovable property other than residential dwelling (from 10 October 2024)</td><td>Unregistered person</td><td>Registered person (composition taxpayers excluded from 16 January 2025)</td></tr>
    <tr><td>Services by Government or local authority (other than excluded services)</td><td>Central Government, State Government, UT or local authority</td><td>Business entity</td></tr>
    <tr><td>Import of services</td><td>Person located outside India</td><td>Recipient in India (IGST under Section 5(3))</td></tr>
    <tr><td>Metal scrap (goods, from 10 October 2024)</td><td>Unregistered person</td><td>Registered person</td></tr>
  </tbody>
</table>

<h2>3. Step-by-Step Compliance and Filing Workflow</h2>
<h3>A. Generating an e-invoice</h3>
<ol class="steps">
  <li>Raise the invoice in your ERP or billing software with all mandatory fields of the e-invoice schema (INV-01): supplier and recipient GSTINs, document type, number and date, item details with HSN, taxable value, tax rates, and place of supply.</li>
  <li>Convert to JSON and upload to an IRP (through the portal, offline utility, API, or a GST Suvidha Provider). Turnover above the notified limit requires two-factor authentication.</li>
  <li>The IRP validates the data, checks for duplicates, computes a hash to generate the IRN, digitally signs the invoice and returns the signed JSON with a QR code.</li>
  <li>Print the QR code on the invoice. The data flows to GSTR-1 and, if transport details are given, to Part A of the e-way bill.</li>
  <li>Report within 30 days of the document date if your turnover is Rs. 10 crore or more.</li>
</ol>
<h3>B. Generating an e-way bill</h3>
<ol class="steps">
  <li>Log in to ewaybillgst.gov.in (or use the API). Choose Generate New, enter transaction type, document details, item details with HSN and value, and transporter ID or vehicle number.</li>
  <li>For e-invoiced documents, generate the e-way bill directly from the IRN.</li>
  <li>Hand the e-way bill number to the transporter. Update Part B for change of vehicle or transhipment.</li>
  <li>The recipient can reject within 72 hours of generation (or before delivery if earlier); otherwise acceptance is deemed.</li>
</ol>
<h3>C. Discharging reverse charge</h3>
<ol class="steps">
  <li>Identify RCM transactions at the purchase entry stage through vendor and expense master tagging (advocate, director, GTA, security, rent from unregistered person, import of services).</li>
  <li>Determine time of supply: for goods, the earliest of receipt of goods, payment, or 31 days from the supplier's invoice (Section 12(3)); for services, the earlier of payment or 60 days from the supplier's invoice (Section 13(3)).</li>
  <li>Where the supplier is unregistered, issue a self-invoice under Section 31(3)(f) within 30 days of receipt of supply (Rule 47A, from 1 November 2024), and a payment voucher at the time of payment.</li>
  <li>Report RCM liability in GSTR-3B Table 3.1(d) and pay it in cash only (Section 49(4) prohibits use of ITC for RCM liability).</li>
  <li>Claim ITC on the RCM tax paid in Table 4A(2) (imports of services) or 4A(3) (other RCM), subject to Section 16 and 17. Keep the RCM liability and ITC statement on the portal aligned.</li>
</ol>
<h3>D. Responding to ASMT-10 (scrutiny of returns)</h3>
<ol class="steps">
  <li>Read the discrepancy carefully. Common items: GSTR-1 versus GSTR-3B liability, GSTR-2B versus GSTR-3B ITC, e-way bill values versus returns, and ITC from cancelled suppliers.</li>
  <li>Prepare a reconciliation with supporting documents (invoices, credit notes, amendments in later periods, GSTR-9 data).</li>
  <li>Reply in Form ASMT-11 on the portal within 30 days of the notice, or within the period allowed by the officer. Where the discrepancy is accepted, pay tax and interest through DRC-03 and mention it in the reply.</li>
  <li>If the officer accepts the explanation, he issues ASMT-12 closing the proceeding. If not, he may initiate audit, special audit, inspection or demand proceedings.</li>
</ol>
<h3>E. Responding to a show cause notice (DRC-01)</h3>
<ol class="steps">
  <li>Check for a prior intimation in DRC-01A under Rule 142(1A). It gives an opportunity to pay or object before the notice is issued.</li>
  <li>On receiving the notice and its summary in DRC-01, check the jurisdiction, limitation (is the notice within the time limit?), the computation, and whether the right section (73, 74 or 74A) has been invoked.</li>
  <li>File the reply in DRC-06 within the time stated (usually 30 days), with documents and legal submissions. Request a personal hearing; under Section 75(4), it must be granted where requested or where an adverse decision is contemplated. Not more than three adjournments are allowed under Section 75(5).</li>
  <li>The order is issued in DRC-07. If aggrieved, appeal under Section 107 within three months, with the pre-deposit.</li>
</ol>

<h2>4. Statutory Due Dates and Frequency Table</h2>
<table class="data">
  <thead><tr><th>Event</th><th>Provision</th><th>Time limit</th></tr></thead>
  <tbody>
    <tr><td>Reporting e-invoice to IRP (turnover of Rs. 10 crore or more)</td><td>Rule 48(4); GSTN advisory</td><td>Within 30 days of document date</td></tr>
    <tr><td>Cancellation of IRN</td><td>Rule 48</td><td>Within 24 hours of generation</td></tr>
    <tr><td>Cancellation of e-way bill</td><td>Rule 138(9)</td><td>Within 24 hours, if goods not transported or not as per details</td></tr>
    <tr><td>Rejection by recipient</td><td>Rule 138(12)</td><td>Within 72 hours or delivery, whichever is earlier</td></tr>
    <tr><td>RCM self-invoice from unregistered supplier</td><td>Section 31(3)(f); Rule 47A</td><td>Within 30 days of receipt of supply</td></tr>
    <tr><td>RCM payment</td><td>Section 9(3); GSTR-3B</td><td>With the GSTR-3B for the tax period in which time of supply falls</td></tr>
    <tr><td>Reply to ASMT-10</td><td>Rule 99</td><td>30 days, or as extended</td></tr>
    <tr><td>SCN under Section 73 (up to FY 2023-24)</td><td>Section 73(2), 73(10)</td><td>Order within 3 years from the due date of the annual return; SCN at least 3 months before</td></tr>
    <tr><td>SCN under Section 74 (up to FY 2023-24)</td><td>Section 74(2), 74(10)</td><td>Order within 5 years from the due date of the annual return; SCN at least 6 months before</td></tr>
    <tr><td>SCN under Section 74A (FY 2024-25 onwards)</td><td>Section 74A(2), 74A(10)</td><td>SCN within 42 months from the due date of the annual return; order within 12 months of SCN, extendable by up to 6 months</td></tr>
    <tr><td>First appeal</td><td>Section 107</td><td>3 months from communication of order, plus 1 month condonable</td></tr>
    <tr><td>Appeal to GST Appellate Tribunal</td><td>Section 112</td><td>3 months from the appellate order (with transitional timelines for older orders as notified when GSTAT became operational in 2025)</td></tr>
  </tbody>
</table>

<h2>5. Interest, Late Fees and Penal Consequences</h2>
<table class="data">
  <thead><tr><th>Default</th><th>Provision</th><th>Consequence</th></tr></thead>
  <tbody>
    <tr><td>Invoice issued without IRN where e-invoicing applies</td><td>Rule 48(5); Section 122(1)(ii)</td><td>Invoice is invalid; recipient cannot claim ITC; penalty of Rs. 10,000 or tax due, whichever is higher; general penalty of up to Rs. 25,000 under Section 125</td></tr>
    <tr><td>Goods moved without e-way bill or with wrong particulars</td><td>Section 129</td><td>Detention of goods and conveyance. Release on payment of penalty equal to 200% of tax where the owner comes forward; where the owner does not, the higher of 50% of the value of goods or 200% of tax. For exempt goods, 2% of value or Rs. 25,000, whichever is lower (owner)</td></tr>
    <tr><td>Minor discrepancies in e-way bill (spelling, PIN code, one digit errors)</td><td>Section 125; CBIC Circular No. 64/38/2018-GST</td><td>Penalty of Rs. 500 under each Act; goods not detained for such errors</td></tr>
    <tr><td>Non-payment of goods detained</td><td>Section 130</td><td>Confiscation of goods and conveyance after notice</td></tr>
    <tr><td>RCM not paid</td><td>Section 50(1); Section 73, 74 or 74A</td><td>Interest at 18% per annum; tax demand with penalty as per the applicable section</td></tr>
    <tr><td>Demand under Section 73 (non-fraud, up to FY 2023-24)</td><td>Section 73</td><td>No penalty if paid with interest before SCN or within 30 days of SCN; otherwise 10% of tax or Rs. 10,000, whichever is higher</td></tr>
    <tr><td>Demand under Section 74 (fraud, up to FY 2023-24)</td><td>Section 74</td><td>15% before SCN, 25% within 30 days of SCN, 50% within 30 days of order, otherwise 100% of tax</td></tr>
    <tr><td>Appeal pre-deposit</td><td>Sections 107(6) and 112(8)</td><td>10% of disputed tax for the first appeal (capped at Rs. 20 crore each for CGST and SGST), and a further 10% for the Tribunal (capped at Rs. 20 crore each). For appeals against penalty-only orders, 10% of the penalty, as introduced by the Finance Act, 2025</td></tr>
  </tbody>
</table>

<h2>6. Practical Audit Pitfalls and Best Practices</h2>
<ul class="checklist">
  <li><strong>Check e-invoice applicability every April.</strong> The test is aggregate turnover in any preceding financial year from 2017-18. Once crossed, the obligation continues even if turnover later falls.</li>
  <li><strong>Configure the 30-day block in your ERP.</strong> Prevent invoices from being backdated or held, and run a daily exception report of documents nearing 30 days.</li>
  <li><strong>Train dispatch staff on e-way bills.</strong> Most detentions arise from expired validity, a missing Part B, or a vehicle change not updated. Keep the transporter's contact in the dispatch file.</li>
  <li><strong>Build an RCM register.</strong> Map every vendor master to forward charge or RCM. Directors' sitting fees, legal fees and rent paid to unregistered landlords are the most frequent misses in audits.</li>
  <li><strong>Pay RCM in cash, then take credit.</strong> Using ITC to pay RCM liability leads to a demand even though the net effect is revenue neutral.</li>
  <li><strong>Treat every notice as a deadline.</strong> Notices appear under "View Additional Notices and Orders" on the portal, not only by email. Check it weekly.</li>
  <li><strong>Argue limitation first.</strong> Many demands are time-barred or invoke Section 74 without evidence of fraud. A reasoned objection on jurisdiction and limitation can dispose of the case.</li>
  <li><strong>Keep a litigation tracker</strong> with notice dates, reply dates, hearing dates, pre-deposits and appeal deadlines.</li>
</ul>

<h2>7. Statutory References and Official Sources</h2>
<div class="sources">
<ul>
  <li>Central Goods and Services Tax Act, 2017: Sections 9(3), 9(4), 12, 13, 31, 49(4), 50, 61, 65, 66, 67, 68, 73, 74, 74A, 75, 107, 112, 122, 125, 129 and 130.</li>
  <li>Integrated Goods and Services Tax Act, 2017: Section 5(3).</li>
  <li>Central Goods and Services Tax Rules, 2017: Rules 47A, 48(4), 48(5), 99, 138 to 138E and 142.</li>
  <li>Notification No. 13/2020-Central Tax dated 21 March 2020, as amended, including Notification No. 10/2023-Central Tax dated 10 May 2023 (e-invoicing above Rs. 5 crore).</li>
  <li>Notification No. 14/2020-Central Tax (dynamic QR code for B2C).</li>
  <li>Notification No. 13/2017-Central Tax (Rate) dated 28 June 2017, as amended (RCM on services), including amendments effective 10 October 2024 and 16 January 2025.</li>
  <li>Notification No. 4/2017-Central Tax (Rate), as amended (RCM on goods).</li>
  <li>Notification No. 10/2017-Integrated Tax (Rate) (RCM on import of services).</li>
  <li>CBIC Circular No. 64/38/2018-GST dated 14 September 2018 (minor e-way bill discrepancies).</li>
  <li>GSTN advisories on the 30-day IRP reporting limit and on e-way bill document age and validity limits.</li>
  <li>Finance (No. 2) Act, 2024 (Section 74A and changes to pre-deposit); Finance Act, 2025 (pre-deposit for penalty-only appeals).</li>
  <li>Official portals: gst.gov.in; einvoice1.gst.gov.in; ewaybillgst.gov.in; cbic-gst.gov.in.</li>
</ul>
</div>
`
});
