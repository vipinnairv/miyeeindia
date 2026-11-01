/* Income Tax articles (FY 2026-27, the first tax year under the Income-tax Act, 2025). Authored by Vipin. */
window.ARTICLES = window.ARTICLES || [];

var IT_TRANSITION_NOTE = '<div class="callout warn"><strong>Read this first: the law changed on 1 April 2026.</strong> The Income-tax Act, 2025 replaced the Income-tax Act, 1961 with effect from 1 April 2026. FY 2026-27 is therefore the first <em>tax year</em> under the new Act; the separate concepts of "previous year" and "assessment year" have been replaced by a single "tax year", so what practitioners would have called AY 2027-28 is now simply the tax year 2026-27, with returns filed in 2027. The new Act largely carries forward the substance of the old provisions but renumbers and regroups them. In this guide, section numbers of the 1961 Act are used as familiar reference labels (for example "Section 44AD") because most forms, case law, software and professionals still use them; the corresponding provision in the 2025 Act should be confirmed using the official section mapping published on incometax.gov.in. Returns for FY 2025-26 filed during 2026 remain governed by the 1961 Act.</div>';

window.ARTICLES.push({
  id: "it-new-vs-old-regime-corporate-rates",
  domain: "income-tax",
  domainLabel: "Income Tax",
  title: "New Tax Regime vs Old Tax Regime for FY 2026-27 and Corporate Tax Rates: Slabs, Standard Deduction, Rebate, Deductions Foregone, Section 115BAA and 115BAB",
  summary: "A slab-by-slab comparison of the default new regime and the optional old regime for individuals and HUFs, worked examples, the switching rules for salaried and business taxpayers, and the full menu of corporate tax rates.",
  author: "Authored by Vipin",
  date: "2026-08-18",
  readTime: "14 min read",
  tags: ["Section 115BAC", "Old Regime", "Section 87A", "Standard Deduction", "Section 115BAA", "Section 115BAB", "Corporate Tax"],
  body: IT_TRANSITION_NOTE + `
<h2>1. Statutory Overview and Legislative Intent</h2>
<p>For decades, India's personal income tax system combined relatively high slab rates with a long list of exemptions and deductions that rewarded particular kinds of saving and spending. The Finance Act, 2020 introduced an alternative concessional regime in Section 115BAC with lower rates but almost no deductions. The Finance Act, 2023 made it the <strong>default regime</strong> from FY 2023-24, and the Finance Act, 2025 reworked the slabs and raised the rebate so that resident individuals with total income up to Rs. 12 lakh pay no tax. The policy intent is to simplify, reduce compliance and leave saving decisions to the taxpayer.</p>
<p>The Income-tax Act, 2025 carries the new regime forward as the default (in Section 202 of the new Act), with the old structure available by choice subject to conditions. For companies, the Taxation Laws (Amendment) Act, 2019 introduced concessional rates in Sections 115BAA (22% for existing domestic companies that forgo specified incentives) and 115BAB (15% for new manufacturing companies, a window that has now closed for new entrants).</p>
<h3>Who the regimes apply to</h3>
<ul>
  <li><strong>New regime (default):</strong> individuals, HUFs, associations of persons (other than co-operative societies), bodies of individuals and artificial juridical persons.</li>
  <li><strong>Old regime (optional):</strong> available on exercising the option within the prescribed time and manner.</li>
  <li><strong>Companies:</strong> normal rates, or the concessional regimes on exercising the option in the prescribed form.</li>
</ul>

<h2>2. Applicability and Threshold Matrix</h2>
<h3>A. Slab rates for individuals and HUFs (as carried forward from the Finance Act, 2025)</h3>
<table class="data">
  <thead><tr><th>Total income slab (Rs.)</th><th>New regime rate</th><th>Old regime rate (below 60 years)</th><th>Old regime (60 to 79 years)</th><th>Old regime (80 years and above)</th></tr></thead>
  <tbody>
    <tr><td>0 to 2,50,000</td><td>Nil</td><td>Nil</td><td>Nil</td><td>Nil</td></tr>
    <tr><td>2,50,001 to 3,00,000</td><td>Nil</td><td>5%</td><td>Nil</td><td>Nil</td></tr>
    <tr><td>3,00,001 to 4,00,000</td><td>Nil</td><td>5%</td><td>5%</td><td>Nil</td></tr>
    <tr><td>4,00,001 to 5,00,000</td><td>5%</td><td>5%</td><td>5%</td><td>Nil</td></tr>
    <tr><td>5,00,001 to 8,00,000</td><td>5%</td><td>20%</td><td>20%</td><td>20%</td></tr>
    <tr><td>8,00,001 to 10,00,000</td><td>10%</td><td>20%</td><td>20%</td><td>20%</td></tr>
    <tr><td>10,00,001 to 12,00,000</td><td>10%</td><td>30%</td><td>30%</td><td>30%</td></tr>
    <tr><td>12,00,001 to 16,00,000</td><td>15%</td><td>30%</td><td>30%</td><td>30%</td></tr>
    <tr><td>16,00,001 to 20,00,000</td><td>20%</td><td>30%</td><td>30%</td><td>30%</td></tr>
    <tr><td>20,00,001 to 24,00,000</td><td>25%</td><td>30%</td><td>30%</td><td>30%</td></tr>
    <tr><td>Above 24,00,000</td><td>30%</td><td>30%</td><td>30%</td><td>30%</td></tr>
  </tbody>
</table>
<p>Health and Education Cess at 4% applies on tax plus surcharge in both regimes. The rates and rebate above are those in force for FY 2025-26 and carried into the new law; confirm against the rates applicable to tax year 2026-27 as finally enacted, including any change made by the Finance Act, 2026.</p>
<h3>B. Key features compared</h3>
<table class="data">
  <thead><tr><th>Feature</th><th>New regime</th><th>Old regime</th></tr></thead>
  <tbody>
    <tr><td>Standard deduction (salary and pension)</td><td>Rs. 75,000</td><td>Rs. 50,000</td></tr>
    <tr><td>Family pension deduction</td><td>Rs. 25,000 or one-third of pension, whichever is lower</td><td>Rs. 15,000 or one-third, whichever is lower</td></tr>
    <tr><td>Rebate (Section 87A, resident individuals)</td><td>Up to Rs. 60,000 where total income does not exceed Rs. 12 lakh, with marginal relief just above Rs. 12 lakh; not available against tax on special-rate incomes such as capital gains under Sections 111A and 112A</td><td>Up to Rs. 12,500 where total income does not exceed Rs. 5 lakh</td></tr>
    <tr><td>Effective nil-tax salary</td><td>Rs. 12.75 lakh (Rs. 12 lakh plus standard deduction), where there is no special-rate income</td><td>Depends on deductions</td></tr>
    <tr><td>Maximum surcharge</td><td>25% (income above Rs. 2 crore)</td><td>37% (income above Rs. 5 crore)</td></tr>
    <tr><td>Section 80C (Rs. 1.5 lakh), 80D, 80E, 80G, 80TTA and 80TTB, 80CCD(1B)</td><td>Not allowed</td><td>Allowed</td></tr>
    <tr><td>Section 80CCD(2): employer contribution to NPS</td><td>Allowed up to 14% of salary</td><td>Allowed up to 10% of salary (14% for Government employees)</td></tr>
    <tr><td>Section 80CCH (Agnipath) and 80JJAA (new employment)</td><td>Allowed</td><td>Allowed</td></tr>
    <tr><td>House rent allowance (Section 10(13A)) and leave travel concession (Section 10(5))</td><td>Not allowed</td><td>Allowed</td></tr>
    <tr><td>Interest on housing loan, self-occupied property (Section 24(b), up to Rs. 2 lakh)</td><td>Not allowed (allowed for let-out property against that income)</td><td>Allowed</td></tr>
    <tr><td>Professional tax (Section 16(iii)) and entertainment allowance</td><td>Not allowed</td><td>Allowed</td></tr>
    <tr><td>Gratuity, leave encashment on retirement, VRS compensation, commuted pension exemptions</td><td>Allowed</td><td>Allowed</td></tr>
  </tbody>
</table>
<h3>C. Surcharge rates</h3>
<table class="data">
  <thead><tr><th>Total income</th><th>New regime</th><th>Old regime</th></tr></thead>
  <tbody>
    <tr><td>Above Rs. 50 lakh up to Rs. 1 crore</td><td>10%</td><td>10%</td></tr>
    <tr><td>Above Rs. 1 crore up to Rs. 2 crore</td><td>15%</td><td>15%</td></tr>
    <tr><td>Above Rs. 2 crore up to Rs. 5 crore</td><td>25%</td><td>25%</td></tr>
    <tr><td>Above Rs. 5 crore</td><td>25%</td><td>37%</td></tr>
  </tbody>
</table>
<p>Surcharge on dividend income and on capital gains under Sections 111A, 112 and 112A is capped at 15%.</p>
<h3>D. Corporate tax rates</h3>
<table class="data">
  <thead><tr><th>Category</th><th>Base rate</th><th>Surcharge</th><th>Effective maximum rate (with 4% cess)</th><th>MAT</th></tr></thead>
  <tbody>
    <tr><td>Domestic company with turnover or gross receipts up to Rs. 400 crore in the reference year</td><td>25%</td><td>7% above Rs. 1 crore; 12% above Rs. 10 crore</td><td>29.12%</td><td>15% of book profit (Section 115JB)</td></tr>
    <tr><td>Other domestic companies</td><td>30%</td><td>7% above Rs. 1 crore; 12% above Rs. 10 crore</td><td>34.944%</td><td>15% of book profit</td></tr>
    <tr><td>Section 115BAA (any domestic company opting)</td><td>22%</td><td>10% flat</td><td>25.168%</td><td>Not applicable</td></tr>
    <tr><td>Section 115BAB (new manufacturing companies incorporated on or after 1 October 2019 that commenced manufacturing by 31 March 2024)</td><td>15%</td><td>10% flat</td><td>17.16%</td><td>Not applicable</td></tr>
    <tr><td>Foreign company</td><td>35%</td><td>2% above Rs. 1 crore; 5% above Rs. 10 crore</td><td>38.22%</td><td>15% of book profit where applicable</td></tr>
    <tr><td>Firms and LLPs</td><td>30%</td><td>12% above Rs. 1 crore</td><td>34.944%</td><td>Alternate Minimum Tax at 18.5% where applicable</td></tr>
  </tbody>
</table>
<p><strong>Conditions for Section 115BAA:</strong> the company must compute income without deductions such as Section 10AA (SEZ units), additional depreciation under Section 32(1)(iia), Section 32AD, 33AB, 33ABA, 35(1)(ii), (iia), (iii) and 35(2AA), 35AD, 35CCC and 35CCD, and Chapter VI-A deductions other than Section 80JJAA and 80M; it cannot set off losses or unabsorbed depreciation attributable to these deductions. The option, once exercised in Form 10-IC, cannot be withdrawn.</p>

<h2>3. Step-by-Step Compliance and Filing Workflow</h2>
<h3>A. Salaried employees</h3>
<ol class="steps">
  <li><strong>April:</strong> declare the intended regime to the employer. If no declaration is made, the employer deducts TDS under Section 192 as per the new (default) regime, as clarified by CBDT Circular No. 04/2023.</li>
  <li><strong>During the year:</strong> under the old regime, submit investment declarations and, by January or February, proofs in Form 12BB (rent receipts and landlord PAN where rent exceeds Rs. 1 lakh a year, LTC bills, home loan interest certificate, 80C and 80D proofs).</li>
  <li><strong>After year end:</strong> obtain Form 16 by 15 June, download the Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) from incometax.gov.in, and reconcile salary, interest, dividends and capital gains.</li>
  <li><strong>Choose the final regime in the return.</strong> A salaried person without business income may choose either regime afresh each year in the return of income, filed by the due date, even if a different regime was declared to the employer.</li>
  <li><strong>File the return</strong> on the e-filing portal (ITR-1 or ITR-2 as applicable), and e-verify within 30 days using Aadhaar OTP, net banking, bank or demat account EVC, or DSC.</li>
</ol>
<h3>B. Individuals and HUFs with business or professional income</h3>
<ol class="steps">
  <li>The new regime applies by default. To opt for the old regime, file <strong>Form 10-IEA</strong> on or before the due date for filing the return of income for that year.</li>
  <li>Once opted out, the taxpayer can re-enter the new regime only once in a lifetime (by withdrawing the option in Form 10-IEA). After that, the old regime cannot be chosen again while business income exists.</li>
  <li>Compute advance tax liability under the chosen regime and pay instalments on time to avoid interest under Sections 234B and 234C.</li>
</ol>
<h3>C. Companies</h3>
<ol class="steps">
  <li>Evaluate the 115BAA option: compare normal tax with MAT, available MAT credit, and the deductions that would be lost (especially SEZ and Section 80-IA type incentives).</li>
  <li>File <strong>Form 10-IC</strong> on or before the due date of filing the return for the first year in which the option is exercised. Form 10-ID applied for Section 115BAB.</li>
  <li>Report the option in the return (ITR-6) and in the tax audit report. Advance tax and MAT computations change accordingly.</li>
</ol>
<h3>D. A worked comparison (salaried resident, below 60 years)</h3>
<table class="data">
  <thead><tr><th>Item</th><th>New regime (Rs.)</th><th>Old regime (Rs.)</th></tr></thead>
  <tbody>
    <tr><td>Gross salary</td><td>15,00,000</td><td>15,00,000</td></tr>
    <tr><td>Standard deduction</td><td>75,000</td><td>50,000</td></tr>
    <tr><td>HRA exemption (assumed)</td><td>Nil</td><td>1,50,000</td></tr>
    <tr><td>Section 80C</td><td>Nil</td><td>1,50,000</td></tr>
    <tr><td>Section 80D (self and family)</td><td>Nil</td><td>25,000</td></tr>
    <tr><td>Section 80CCD(1B)</td><td>Nil</td><td>50,000</td></tr>
    <tr><td><strong>Taxable income</strong></td><td><strong>14,25,000</strong></td><td><strong>10,75,000</strong></td></tr>
    <tr><td>Tax on slabs</td><td>93,750 (20,000 + 40,000 + 33,750)</td><td>1,35,000 (12,500 + 1,00,000 + 22,500)</td></tr>
    <tr><td>Cess at 4%</td><td>3,750</td><td>5,400</td></tr>
    <tr><td><strong>Total tax</strong></td><td><strong>97,500</strong></td><td><strong>1,40,400</strong></td></tr>
  </tbody>
</table>
<p>In this example the new regime saves Rs. 42,900 despite deductions of Rs. 4.25 lakh under the old regime. As a rule of thumb, the old regime becomes competitive only for taxpayers with very large deductions, typically substantial HRA together with home loan interest on a self-occupied house. Always run both computations every year.</p>

<h3>E. Marginal relief just above Rs. 12 lakh</h3>
<p>Assume a resident salaried individual under the new regime with gross salary of Rs. 12,85,000 and no other income. Taxable income after the standard deduction of Rs. 75,000 is Rs. 12,10,000, which is just above the rebate limit, so the Section 87A rebate is not available in the normal way. Tax on slabs would be Rs. 61,500 (Rs. 20,000 on the 4 to 8 lakh slab, Rs. 40,000 on the 8 to 12 lakh slab, and Rs. 1,500 at 15% on the Rs. 10,000 above Rs. 12 lakh). Marginal relief limits the tax to the income exceeding Rs. 12 lakh, that is Rs. 10,000. Tax payable is therefore Rs. 10,000 plus cess of Rs. 400, a total of Rs. 10,400, not Rs. 63,960. Payroll software must apply this relief in TDS computations, otherwise employees near the threshold suffer excess deduction.</p>
<h3>F. When the old regime still wins</h3>
<p>Consider gross salary of Rs. 24 lakh with HRA exemption of Rs. 3,60,000 (high rent in a metro), Section 80C of Rs. 1,50,000, Section 80D of Rs. 75,000 (self and senior citizen parents), Section 80CCD(1B) of Rs. 50,000 and interest on a self-occupied home loan of Rs. 2,00,000. Under the old regime the deductions, including the standard deduction of Rs. 50,000, total Rs. 8,85,000 and taxable income is Rs. 15,15,000. Under the new regime, taxable income is Rs. 23,25,000. Old regime tax: Rs. 1,12,500 on income up to Rs. 10 lakh plus Rs. 1,54,500 at 30% on Rs. 5,15,000, total Rs. 2,67,000 before cess. New regime tax: Rs. 20,000 plus Rs. 40,000 plus Rs. 60,000 plus Rs. 80,000 plus Rs. 81,250 (25% on Rs. 3,25,000), total Rs. 2,81,250 before cess. Here the old regime saves about Rs. 14,250 before cess. The lesson: taxpayers with large HRA, home loan interest and full use of other deductions should compute both.</p>

<h2>4. Statutory Due Dates and Frequency Table</h2>
<table class="data">
  <thead><tr><th>Action</th><th>Who</th><th>Due date for FY 2026-27</th></tr></thead>
  <tbody>
    <tr><td>Regime intimation to employer</td><td>Salaried employees</td><td>At the start of the year (on joining for new employees); default applies otherwise</td></tr>
    <tr><td>Advance tax instalments</td><td>All taxpayers with liability of Rs. 10,000 or more</td><td>15 June 2026, 15 September 2026, 15 December 2026 and 15 March 2027</td></tr>
    <tr><td>Form 16 to employees</td><td>Employers</td><td>15 June 2027</td></tr>
    <tr><td>Form 10-IEA (opt out of new regime)</td><td>Individuals and HUFs with business income</td><td>On or before the due date of the return</td></tr>
    <tr><td>Return of income, non-audit cases</td><td>Individuals, HUFs and others not liable to audit</td><td>31 July 2027, unless a different date is prescribed under the new Act or extended by CBDT</td></tr>
    <tr><td>Return of income, audit cases and companies</td><td>Companies and taxpayers liable to tax audit</td><td>31 October 2027 (30 November 2027 where transfer pricing reports are required)</td></tr>
    <tr><td>Form 10-IC (Section 115BAA)</td><td>Domestic companies opting</td><td>On or before the due date of return of the first year of option</td></tr>
  </tbody>
</table>

<h2>5. Interest, Late Fees and Penal Consequences</h2>
<table class="data">
  <thead><tr><th>Default</th><th>Provision (1961 Act reference)</th><th>Consequence</th></tr></thead>
  <tbody>
    <tr><td>Late filing of return</td><td>Section 234A</td><td>Simple interest at 1% per month or part on unpaid tax from the due date to the date of filing</td></tr>
    <tr><td>Shortfall in advance tax</td><td>Sections 234B and 234C</td><td>1% per month; see the companion article on advance tax for computation</td></tr>
    <tr><td>Late filing fee</td><td>Section 234F</td><td>Rs. 5,000; Rs. 1,000 where total income does not exceed Rs. 5 lakh</td></tr>
    <tr><td>Form 10-IEA not filed in time</td><td>Section 115BAC(6)</td><td>Taxpayer with business income remains in the new regime for that year</td></tr>
    <tr><td>Wrong claim of deductions in the new regime, or of rebate against special-rate income</td><td>Section 143(1) adjustments; Section 270A</td><td>Disallowance in processing with demand and interest; penalty for under-reporting at 50% of tax on under-reported income, or 200% for misreporting</td></tr>
    <tr><td>Bogus deduction claims (for example fictitious rent receipts or donations)</td><td>Section 270A(9); Section 276C</td><td>Misreporting penalty of 200% and possible prosecution</td></tr>
  </tbody>
</table>

<h2>6. Practical Audit Pitfalls and Best Practices</h2>
<ul class="checklist">
  <li><strong>Run both computations every year.</strong> Changes in salary, rent, loans and family health insurance can flip the answer.</li>
  <li><strong>Remember special-rate incomes and rebate.</strong> A taxpayer with Rs. 11 lakh of salary income and Rs. 2 lakh of short-term capital gains under Section 111A cannot use the Section 87A rebate against tax on the capital gains.</li>
  <li><strong>Business taxpayers must calendar Form 10-IEA.</strong> Missing the form means the default regime applies, and the switch-back rule limits future flexibility.</li>
  <li><strong>Check employer NPS structuring.</strong> Section 80CCD(2) is one of the few deductions available in the new regime and can be built into salary structures.</li>
  <li><strong>For companies, model MAT credit.</strong> A company with large MAT credit may benefit from deferring the move to Section 115BAA until the credit is used.</li>
  <li><strong>Keep evidence for old regime claims.</strong> The department matches HRA claims with landlord PANs, and deduction claims with AIS data. Unsupported claims are a major source of notices under the e-verification scheme.</li>
  <li><strong>Watch transition mapping.</strong> From tax year 2026-27, cite the provisions of the Income-tax Act, 2025 in declarations and correspondence, using the official mapping, especially in employer forms and board resolutions.</li>
</ul>

<h2>7. Statutory References and Official Sources</h2>
<div class="sources">
<ul>
  <li>Income-tax Act, 2025 (in force from 1 April 2026), including the provisions on the default concessional regime for individuals and others (Section 202) and on rates of tax; and the official section mapping utility on incometax.gov.in.</li>
  <li>Income-tax Act, 1961 (for FY 2025-26 and earlier): Sections 10(5), 10(13A), 16, 24(b), 80C, 80CCD, 80CCH, 80D, 80JJAA, 87A, 111A, 112, 112A, 115BAA, 115BAB, 115BAC, 115JB, 234A, 234B, 234C, 234F and 270A.</li>
  <li>Finance Act, 2020 (introduction of Section 115BAC); Finance Act, 2023 (new regime as default); Finance (No. 2) Act, 2024 (standard deduction of Rs. 75,000 and capital gains rates); Finance Act, 2025 (revised slabs and Rs. 60,000 rebate).</li>
  <li>Taxation Laws (Amendment) Act, 2019 (Sections 115BAA and 115BAB).</li>
  <li>CBDT Circular No. 04/2023 dated 5 April 2023 (TDS on salary and choice of regime).</li>
  <li>Income-tax Rules: Forms 10-IEA, 10-IC, 10-ID, 12BB and 16 (or their successors under the Rules framed under the 2025 Act).</li>
  <li>Official portals: incometax.gov.in (e-filing, AIS, forms and section mapping); cbdt circulars and notifications at incometaxindia.gov.in.</li>
</ul>
</div>
`
});

window.ARTICLES.push({
  id: "it-tds-tcs-master-matrix",
  domain: "income-tax",
  domainLabel: "Income Tax",
  title: "TDS and TCS Master Matrix with Return Schedules: Sections 192 to 195, 206C, Challan Due Dates and Forms 24Q, 26Q, 27Q and 27EQ",
  summary: "A practitioner's matrix of TDS and TCS sections, thresholds and rates as rationalised from 1 April 2025 and carried into the consolidated provisions of the Income-tax Act, 2025, with deposit dates, quarterly returns, certificates, interest, fees and disallowances.",
  author: "Authored by Vipin",
  date: "2026-08-25",
  readTime: "14 min read",
  tags: ["TDS", "TCS", "Section 194J", "Section 194Q", "Section 195", "Form 26Q", "Form 24Q", "Section 234E"],
  body: IT_TRANSITION_NOTE + `
<h2>1. Statutory Overview and Legislative Intent</h2>
<p>Tax deduction at source (TDS) and tax collection at source (TCS) make the payer or seller an agent of the Government. Tax is collected at the point where income arises, which brings payees into the tax net, spreads collections across the year and creates a data trail that now feeds the Annual Information Statement. Chapter XVII-B (deduction) and Chapter XVII-BB (collection) of the 1961 Act contained over thirty separate sections. The Income-tax Act, 2025 consolidates them into tabular provisions (Section 393 for deduction and Section 394 for collection, with related provisions for certificates, statements and consequences), but the payment categories, thresholds and rates largely continue from the position after the Finance Act, 2025.</p>
<p>The Finance Act, 2025 rationalised many thresholds with effect from 1 April 2025, removed the higher-rate provisions for non-filers (Sections 206AB and 206CCA), and omitted TCS on sale of goods under Section 206C(1H). These changes are reflected below.</p>

<h2>2. Applicability and Threshold Matrix</h2>
<h3>A. TDS matrix (resident payees unless stated)</h3>
<table class="data">
  <thead><tr><th>Section (1961 reference)</th><th>Nature of payment</th><th>Threshold</th><th>Rate</th></tr></thead>
  <tbody>
    <tr><td>192</td><td>Salary</td><td>Income above the basic exemption under the regime applicable</td><td>Average rate at slab rates</td></tr>
    <tr><td>192A</td><td>Premature withdrawal from EPF</td><td>Above Rs. 50,000</td><td>10%</td></tr>
    <tr><td>193</td><td>Interest on securities</td><td>Specified thresholds for certain securities (for example Rs. 10,000 for debentures to resident individuals and HUFs)</td><td>10%</td></tr>
    <tr><td>194</td><td>Dividend</td><td>Above Rs. 10,000 in a financial year (for individual shareholders)</td><td>10%</td></tr>
    <tr><td>194A</td><td>Interest other than on securities</td><td>Banks, co-operative banks and post office: Rs. 50,000 (Rs. 1,00,000 for senior citizens). Others: Rs. 10,000</td><td>10%</td></tr>
    <tr><td>194B and 194BB</td><td>Lottery, crossword puzzle, card game, horse race winnings</td><td>Above Rs. 10,000 in a single transaction</td><td>30%</td></tr>
    <tr><td>194C</td><td>Payments to contractors and sub-contractors</td><td>Single payment above Rs. 30,000, or aggregate above Rs. 1,00,000 in a year</td><td>1% (individual or HUF payee); 2% (others). Nil for transporters owning up to 10 goods carriages who furnish PAN and declaration</td></tr>
    <tr><td>194D</td><td>Insurance commission</td><td>Above Rs. 20,000</td><td>2% (non-company); 10% (company)</td></tr>
    <tr><td>194DA</td><td>Payment under life insurance policy (income component)</td><td>Rs. 1,00,000 or more</td><td>2%</td></tr>
    <tr><td>194G</td><td>Commission on sale of lottery tickets</td><td>Above Rs. 20,000</td><td>2%</td></tr>
    <tr><td>194H</td><td>Commission or brokerage</td><td>Above Rs. 20,000 in a year</td><td>2%</td></tr>
    <tr><td>194-I</td><td>Rent</td><td>Above Rs. 50,000 for a month or part of a month</td><td>2% (plant, machinery, equipment); 10% (land, building, furniture)</td></tr>
    <tr><td>194-IA</td><td>Transfer of immovable property (other than agricultural land)</td><td>Consideration or stamp duty value of Rs. 50 lakh or more</td><td>1% of the higher of consideration and stamp duty value</td></tr>
    <tr><td>194-IB</td><td>Rent paid by individuals or HUFs not liable to audit</td><td>Above Rs. 50,000 per month</td><td>2%</td></tr>
    <tr><td>194-IC</td><td>Monetary consideration under joint development agreement</td><td>No threshold</td><td>10%</td></tr>
    <tr><td>194J</td><td>Fees for technical services, royalty for sale, distribution or exhibition of films, call centre operations</td><td>Above Rs. 50,000 in a year (per category)</td><td>2%</td></tr>
    <tr><td>194J</td><td>Fees for professional services, other royalty, non-compete fees</td><td>Above Rs. 50,000 in a year (per category)</td><td>10%</td></tr>
    <tr><td>194J</td><td>Remuneration, fees or commission to a director (not salary)</td><td>No threshold</td><td>10%</td></tr>
    <tr><td>194K</td><td>Income from units of mutual funds</td><td>Above Rs. 10,000</td><td>10%</td></tr>
    <tr><td>194LA</td><td>Compensation on compulsory acquisition of immovable property</td><td>Above Rs. 5 lakh</td><td>10%</td></tr>
    <tr><td>194M</td><td>Contract work, commission or professional fees paid by individuals or HUFs not required to deduct under 194C, 194H or 194J</td><td>Above Rs. 50 lakh in a year</td><td>2%</td></tr>
    <tr><td>194N</td><td>Cash withdrawals from banks</td><td>Above Rs. 1 crore (Rs. 3 crore for co-operative societies); lower limits for persons who have not filed returns</td><td>2% (higher rates for non-filers above the specified limits)</td></tr>
    <tr><td>194-O</td><td>Payments by e-commerce operators to participants</td><td>Gross sales; Rs. 5 lakh threshold for resident individual or HUF participants furnishing PAN</td><td>0.1%</td></tr>
    <tr><td>194Q</td><td>Purchase of goods by a buyer whose turnover exceeded Rs. 10 crore in the preceding year</td><td>On the amount exceeding Rs. 50 lakh paid or credited to a seller in a year</td><td>0.1%</td></tr>
    <tr><td>194R</td><td>Benefit or perquisite arising from business or profession</td><td>Above Rs. 20,000 in a year</td><td>10%</td></tr>
    <tr><td>194S</td><td>Transfer of virtual digital assets</td><td>Rs. 50,000 for specified persons; Rs. 10,000 for others</td><td>1%</td></tr>
    <tr><td>194T</td><td>Salary, remuneration, commission, bonus or interest paid by a firm to its partners</td><td>Above Rs. 20,000 in a year</td><td>10%</td></tr>
    <tr><td>195</td><td>Any sum chargeable to tax paid to a non-resident (other than salary covered by Section 192)</td><td>No threshold</td><td>Rates in force (Finance Act), or the beneficial treaty rate on furnishing a Tax Residency Certificate, Form 10F and no permanent establishment declaration; plus surcharge and cess where the Act rate applies</td></tr>
  </tbody>
</table>
<p>Where the payee does not furnish PAN, Section 206AA requires deduction at the higher of the specified rate or 20% (5% for Sections 194-O and 194Q).</p>
<h3>B. TCS matrix (Section 206C)</h3>
<table class="data">
  <thead><tr><th>Nature of receipt</th><th>Threshold</th><th>Rate</th></tr></thead>
  <tbody>
    <tr><td>Alcoholic liquor for human consumption</td><td>No threshold</td><td>1%</td></tr>
    <tr><td>Tendu leaves</td><td>No threshold</td><td>5%</td></tr>
    <tr><td>Timber and other forest produce (not tendu leaves)</td><td>No threshold</td><td>2.5%</td></tr>
    <tr><td>Scrap</td><td>No threshold</td><td>1%</td></tr>
    <tr><td>Minerals (coal, lignite, iron ore)</td><td>No threshold</td><td>1%</td></tr>
    <tr><td>Parking lot, toll plaza, mining and quarrying licences</td><td>No threshold</td><td>2%</td></tr>
    <tr><td>Motor vehicle and notified luxury goods</td><td>Value exceeding Rs. 10 lakh</td><td>1%</td></tr>
    <tr><td>Foreign remittance under the Liberalised Remittance Scheme and overseas tour programme packages (Section 206C(1G))</td><td>Rs. 10 lakh for LRS remittances (lower or nil rates for education financed by loan and for medical treatment)</td><td>Rates as specified in the Finance Act for the year (confirm the current schedule before collecting)</td></tr>
  </tbody>
</table>

<h2>3. Step-by-Step Compliance and Filing Workflow</h2>
<ol class="steps">
  <li><strong>Obtain a TAN</strong> by applying in Form 49B through the Protean (formerly NSDL) or UTIITSL portal. Every deductor and collector must quote TAN in challans, returns and certificates.</li>
  <li><strong>Register</strong> the TAN on the e-filing portal (incometax.gov.in) and on TRACES (tdscpc.gov.in).</li>
  <li><strong>Configure vendor and payee masters</strong> with PAN, status (individual, company, firm), residential status, section mapping and lower deduction certificate details (Section 197 certificates are verified on TRACES).</li>
  <li><strong>Deduct at the earlier of credit or payment</strong> for most sections (Sections 194A, 194C, 194H, 194-I, 194J); at the time of payment for Sections 192, 194-IA, 194-IB and 194M; and on credit or payment of amounts exceeding the threshold for Section 194Q. Credit to a suspense or provision account counts as credit.</li>
  <li><strong>Deposit</strong> through the e-Pay Tax service on the e-filing portal using Challan ITNS 281 (minor head 200 for TDS payable by taxpayer, 400 for TDS on regular assessment). Use Form 26QB, 26QC, 26QD or 26QE challan-cum-statements for Sections 194-IA, 194-IB, 194M and 194S respectively.</li>
  <li><strong>Prepare quarterly statements</strong> using the Return Preparation Utility and validate with the File Validation Utility (FVU). Form 24Q for salary, 26Q for other resident payments, 27Q for non-residents and 27EQ for TCS. Salary details for the full year are reported in Annexure II of the fourth quarter Form 24Q.</li>
  <li><strong>Upload</strong> the validated file on the e-filing portal with DSC or EVC.</li>
  <li><strong>Process defaults:</strong> download the justification report from TRACES, correct short deduction, short payment, interest and PAN errors through correction statements, and pay outstanding demands.</li>
  <li><strong>Issue certificates:</strong> Form 16 (salary, annual), Form 16A (non-salary, quarterly), Form 16B, 16C, 16D and 16E for the challan-cum-statement sections, and Form 27D for TCS. Certificates must be downloaded from TRACES.</li>
  <li><strong>For payments to non-residents,</strong> file Form 15CA online before remittance, with Form 15CB from a Chartered Accountant where the remittance is chargeable to tax and exceeds Rs. 5 lakh (unless exempted under Rule 37BB).</li>
</ol>

<h3>Worked example: classification, year-end provision and interest</h3>
<p>A company engages an IT vendor for software maintenance at Rs. 40,000 a month and a lawyer for a one-time opinion at Rs. 60,000 in March.</p>
<ul>
  <li><strong>IT maintenance:</strong> routine maintenance and support is generally treated as fees for technical services, attracting 2% under Section 194J once the annual payments in that category exceed Rs. 50,000. The first two months (Rs. 80,000 cumulative) cross the threshold in the second month, so TDS applies on the full amount credited from that point onwards, including the first month's credit, which should be covered when deduction is made on the second credit.</li>
  <li><strong>Legal opinion:</strong> fees for professional services attract 10% under Section 194J as the Rs. 60,000 exceeds the Rs. 50,000 threshold. If the invoice is received in April but the expense is provided for in the March books, TDS is due on the provision credited on 31 March, and the deposit date is 30 April.</li>
  <li><strong>Interest on delay:</strong> if the company deducts Rs. 6,000 on 31 March but deposits it on 15 June, interest under Section 201(1A)(ii) runs at 1.5% per month from the date of deduction to the date of payment, counting a part of a month as a full month: March (part), April, May and June (part), that is 4 months. Interest is Rs. 6,000 x 1.5% x 4 = Rs. 360, payable before the statement is filed. The Q4 statement is due on 31 May; if it is filed on 15 June, the fee under Section 234E is Rs. 200 x 15 days = Rs. 3,000.</li>
  <li><strong>Disallowance:</strong> because the tax was deposited before the due date of the return, the expense is not disallowed under Section 40(a)(ia).</li>
</ul>

<h2>4. Statutory Due Dates and Frequency Table</h2>
<table class="data">
  <thead><tr><th>Compliance</th><th>Period</th><th>Due date</th></tr></thead>
  <tbody>
    <tr><td>Deposit of TDS and TCS (non-Government deductors)</td><td>April to February</td><td>7th of the following month</td></tr>
    <tr><td>Deposit of TDS (non-Government deductors)</td><td>March</td><td>30 April</td></tr>
    <tr><td>Deposit of TDS (Government, through book entry)</td><td>Any month</td><td>Same day as deduction</td></tr>
    <tr><td>Deposit under quarterly permission (Sections 192, 194A, 194D, 194H with approval)</td><td>Quarters ending June, September, December, March</td><td>7 July, 7 October, 7 January, 30 April</td></tr>
    <tr><td>Challan-cum-statement 26QB, 26QC, 26QD, 26QE</td><td>Per transaction</td><td>Within 30 days from the end of the month of deduction</td></tr>
    <tr><td>Quarterly TDS and TCS statements (24Q, 26Q, 27Q, 27EQ)</td><td>Q1 (April to June)</td><td>31 July</td></tr>
    <tr><td>Quarterly statements</td><td>Q2 (July to September)</td><td>31 October</td></tr>
    <tr><td>Quarterly statements</td><td>Q3 (October to December)</td><td>31 January</td></tr>
    <tr><td>Quarterly statements</td><td>Q4 (January to March)</td><td>31 May</td></tr>
    <tr><td>Form 16</td><td>Annual</td><td>15 June following the financial year</td></tr>
    <tr><td>Form 16A</td><td>Quarterly</td><td>15 August, 15 November, 15 February and 15 June</td></tr>
    <tr><td>Form 27D (TCS certificate)</td><td>Quarterly</td><td>Within 15 days from the due date of the quarterly TCS statement</td></tr>
    <tr><td>Form 16B, 16C, 16D, 16E</td><td>Per transaction</td><td>Within 15 days from the due date of the challan-cum-statement</td></tr>
  </tbody>
</table>

<h2>5. Interest, Late Fees and Penal Consequences</h2>
<table class="data">
  <thead><tr><th>Default</th><th>Provision (1961 Act reference)</th><th>Consequence</th></tr></thead>
  <tbody>
    <tr><td>Failure to deduct</td><td>Section 201(1A)(i)</td><td>Interest at 1% per month or part from the date tax was deductible to the date it is actually deducted</td></tr>
    <tr><td>Failure to deposit after deduction</td><td>Section 201(1A)(ii)</td><td>Interest at 1.5% per month or part from the date of deduction to the date of payment</td></tr>
    <tr><td>Failure to collect or deposit TCS</td><td>Section 206C(7)</td><td>Interest at 1% per month or part</td></tr>
    <tr><td>Late filing of quarterly statement</td><td>Section 234E</td><td>Fee of Rs. 200 per day until the statement is filed, not exceeding the amount of TDS or TCS</td></tr>
    <tr><td>Non-filing or incorrect statement</td><td>Section 271H</td><td>Penalty from Rs. 10,000 to Rs. 1,00,000; no penalty if the statement is filed within one year of the due date after paying tax, fee and interest</td></tr>
    <tr><td>Failure to deduct or collect</td><td>Sections 271C and 271CA</td><td>Penalty equal to the amount not deducted or collected</td></tr>
    <tr><td>Disallowance of expense (resident payee)</td><td>Section 40(a)(ia)</td><td>30% of the expenditure disallowed in the year; allowed in the year in which TDS is deposited</td></tr>
    <tr><td>Disallowance of expense (non-resident payee)</td><td>Section 40(a)(i)</td><td>100% of the expenditure disallowed until tax is deducted and paid</td></tr>
    <tr><td>Failure to pay deducted tax to the Government</td><td>Section 276B</td><td>Rigorous imprisonment from 3 months to 7 years and fine; the Finance Act, 2025 provided relief where the tax is paid within the time allowed for filing the quarterly statement</td></tr>
    <tr><td>Deductee in default status</td><td>Section 201(1)</td><td>The deductor is treated as an assessee in default for the tax not deducted or paid. Relief is available if the payee has included the income and paid tax (first proviso, with a CA certificate in Form 26A)</td></tr>
  </tbody>
</table>

<h2>6. Practical Audit Pitfalls and Best Practices</h2>
<ul class="checklist">
  <li><strong>Distinguish technical from professional services correctly.</strong> The 2% versus 10% split under Section 194J depends on the nature of the service. Document the basis for classification in the vendor master; short deduction attracts interest and disallowance.</li>
  <li><strong>Avoid double deduction under Sections 194Q and 194-O.</strong> Where 194-O applies, 194Q does not. Where the seller collects TCS on goods and the buyer is also liable under 194Q, the buyer's TDS takes precedence (relevant for earlier years when 206C(1H) existed).</li>
  <li><strong>Year-end provisions:</strong> TDS applies on provisions credited to payee accounts or expense provisions where the payee is identifiable. Deduct and deposit by 30 April to avoid disallowance.</li>
  <li><strong>Reconcile Form 26AS and AIS of the company as a deductee.</strong> Customers' TDS must appear in the company's Form 26AS before credit is claimed in the return.</li>
  <li><strong>Match the books with TRACES every quarter.</strong> Pay small interest defaults immediately rather than letting them accumulate into demands with additional interest.</li>
  <li><strong>Keep Form 10F, TRC and no-PE declarations current</strong> for treaty claims, renewed each year, and conduct a principal purpose test review under the Multilateral Instrument where relevant.</li>
  <li><strong>Lower deduction certificates</strong> under Section 197 must be validated on TRACES for the period and amount. Deduct at normal rates once the certificate amount is exhausted.</li>
  <li><strong>Plan the transition.</strong> From tax year 2026-27, form and section numbers in software change under the 2025 Act and its Rules. Test the updated utilities before the first quarterly statement is due on 31 July 2026.</li>
</ul>

<h2>7. Statutory References and Official Sources</h2>
<div class="sources">
<ul>
  <li>Income-tax Act, 2025: consolidated provisions on deduction of tax at source (Section 393) and collection of tax at source (Section 394), and related provisions on statements, certificates and consequences; official section mapping on incometax.gov.in.</li>
  <li>Income-tax Act, 1961: Sections 192 to 196D (Chapter XVII-B), 197, 200, 200A, 201, 203, 206AA, 206C, 234E, 271C, 271CA, 271H, 276B, 40(a)(i) and 40(a)(ia).</li>
  <li>Finance Act, 2025 (threshold rationalisation from 1 April 2025, omission of Sections 206AB, 206CCA and 206C(1H), changes to Section 276B).</li>
  <li>Finance (No. 2) Act, 2024 (rate reductions under Sections 194D, 194DA, 194G, 194H, 194-IB and 194-O, and introduction of Section 194T).</li>
  <li>Income-tax Rules, 1962: Rules 30, 31, 31A, 37BB and 37CA, and Forms 16, 16A, 24Q, 26Q, 27Q, 27EQ, 15CA, 15CB and 49B (and corresponding Rules and forms under the 2025 Act).</li>
  <li>Official portals: incometax.gov.in (e-pay tax, statements, Form 15CA); tdscpc.gov.in (TRACES); protean-tinpan.com (TAN and return preparation utility).</li>
</ul>
</div>
`
});

window.ARTICLES.push({
  id: "it-presumptive-tax-audit-advance-tax-itru",
  domain: "income-tax",
  domainLabel: "Income Tax",
  title: "Presumptive Taxation, Tax Audit, Advance Tax and Updated Returns: Sections 44AD, 44ADA, 44AE, 44AB, 43B(h), 234A, 234B, 234C and ITR-U",
  summary: "The small business and professional's compliance core: who can use presumptive schemes and the 5% cash test, when a tax audit is compulsory, the MSME payment disallowance, advance tax instalments and interest, and the four-year updated return window.",
  author: "Authored by Vipin",
  date: "2026-09-01",
  readTime: "13 min read",
  tags: ["Section 44AD", "Section 44ADA", "Section 44AE", "Section 44AB", "Section 43B(h)", "Advance Tax", "ITR-U"],
  body: IT_TRANSITION_NOTE + `
<h2>1. Statutory Overview and Legislative Intent</h2>
<p>Small businesses and professionals form the majority of taxpayers with business income, yet many cannot afford full bookkeeping and audit. Presumptive taxation offers a deal: declare income at a fixed percentage of turnover, and the law dispenses with books of account and audit. Larger businesses get the opposite deal: a tax audit by a Chartered Accountant, reported in a detailed form that gives the department structured data. Advance tax ensures that tax is paid as income is earned, and the updated return gives taxpayers a paid route to correct omissions without litigation.</p>
<ul>
  <li><strong>Section 44AD:</strong> presumptive income for eligible businesses at 8% of turnover (6% for digital receipts).</li>
  <li><strong>Section 44ADA:</strong> presumptive income for specified professionals at 50% of gross receipts.</li>
  <li><strong>Section 44AE:</strong> presumptive income for owners of goods carriages.</li>
  <li><strong>Section 44AA:</strong> maintenance of books of account.</li>
  <li><strong>Section 44AB:</strong> compulsory tax audit.</li>
  <li><strong>Section 43B(h):</strong> deduction for payments to micro and small enterprises only on actual payment when made beyond the time allowed by Section 15 of the MSMED Act, 2006.</li>
  <li><strong>Sections 207 to 211:</strong> advance tax liability and instalments; <strong>Sections 234A, 234B and 234C:</strong> interest.</li>
  <li><strong>Section 139(8A) and Section 140B:</strong> updated return and additional tax.</li>
</ul>

<h2>2. Applicability and Threshold Matrix</h2>
<h3>A. Presumptive schemes compared</h3>
<table class="data">
  <thead><tr><th>Parameter</th><th>Section 44AD</th><th>Section 44ADA</th><th>Section 44AE</th></tr></thead>
  <tbody>
    <tr><td>Eligible persons</td><td>Resident individual, resident HUF, resident partnership firm (not LLP)</td><td>Resident individual, resident partnership firm (not LLP)</td><td>Any person (including companies) owning goods carriages</td></tr>
    <tr><td>Activity</td><td>Any business other than plying of goods carriages, agency business, and commission or brokerage income; not available to professionals referred to in Section 44AA(1)</td><td>Legal, medical, engineering, architectural, accountancy, technical consultancy, interior decoration, and other notified professions (including authorised representatives, film artists, company secretaries and information technology)</td><td>Plying, hiring or leasing goods carriages</td></tr>
    <tr><td>Turnover or size limit</td><td>Rs. 2 crore; Rs. 3 crore where cash receipts do not exceed 5% of total turnover (that is, at least 95% received through banking or digital channels)</td><td>Rs. 50 lakh; Rs. 75 lakh where cash receipts do not exceed 5% of gross receipts</td><td>Not more than 10 goods carriages owned at any time during the year</td></tr>
    <tr><td>Deemed income</td><td>8% of turnover; 6% of turnover received by account payee cheque, draft, ECS or other prescribed electronic modes on or before the due date of return</td><td>50% of gross receipts</td><td>Heavy goods vehicle (gross vehicle weight above 12,000 kg): Rs. 1,000 per tonne of gross vehicle weight per month or part. Other goods carriages: Rs. 7,500 per vehicle per month or part</td></tr>
    <tr><td>Higher income</td><td>May declare higher income</td><td>May declare higher income</td><td>May declare higher income</td></tr>
    <tr><td>Books of account</td><td>Not required while in the scheme</td><td>Not required while in the scheme</td><td>Not required while in the scheme</td></tr>
    <tr><td>Advance tax</td><td>Single instalment by 15 March</td><td>Single instalment by 15 March</td><td>Normal instalments</td></tr>
    <tr><td>Lock-in</td><td>If the taxpayer opts out in any of the five years following a year of opting in, he cannot opt in again for the next five years (Section 44AD(4))</td><td>No similar lock-in</td><td>No similar lock-in</td></tr>
  </tbody>
</table>
<h3>B. Tax audit applicability under Section 44AB</h3>
<table class="data">
  <thead><tr><th>Case</th><th>Audit required if</th></tr></thead>
  <tbody>
    <tr><td>Person carrying on business (not opting for presumptive scheme)</td><td>Total sales, turnover or gross receipts exceed Rs. 1 crore</td></tr>
    <tr><td>Business with low cash transactions</td><td>Limit is Rs. 10 crore where aggregate cash receipts do not exceed 5% of total receipts and aggregate cash payments do not exceed 5% of total payments</td></tr>
    <tr><td>Profession</td><td>Gross receipts exceed Rs. 50 lakh</td></tr>
    <tr><td>Section 44AD lock-in breach</td><td>Taxpayer covered by Section 44AD(4) whose income exceeds the basic exemption limit</td></tr>
    <tr><td>Section 44ADA profession declaring lower income</td><td>Income declared below 50% and total income exceeds the basic exemption limit</td></tr>
    <tr><td>Section 44AE declaring lower income</td><td>Income declared below the presumptive amount</td></tr>
  </tbody>
</table>
<h3>C. Section 43B(h): payments to micro and small enterprises</h3>
<table class="data">
  <thead><tr><th>Element</th><th>Rule</th></tr></thead>
  <tbody>
    <tr><td>Covered suppliers</td><td>Micro and small enterprises registered under the Udyam framework as manufacturers or service providers. Medium enterprises are outside the provision. Traders registered on Udyam only for priority sector lending are not covered by the delayed payment provisions of the MSMED Act</td></tr>
    <tr><td>Time limit (MSMED Act, Section 15)</td><td>Payment on or before the agreed date, which cannot exceed 45 days from the day of acceptance; where there is no written agreement, within 15 days</td></tr>
    <tr><td>Tax consequence</td><td>If payment is made after the time limit, the expense is allowed only in the year of actual payment, regardless of the method of accounting</td></tr>
    <tr><td>Year-end position</td><td>An amount outstanding on 31 March is allowed in that year only if paid within the 15 or 45 day time limit</td></tr>
    <tr><td>Effective from</td><td>FY 2023-24 onwards (introduced by the Finance Act, 2023)</td></tr>
  </tbody>
</table>
<h3>D. Updated return (ITR-U) additional tax</h3>
<table class="data">
  <thead><tr><th>Updated return filed</th><th>Additional tax (Section 140B)</th></tr></thead>
  <tbody>
    <tr><td>Within 12 months from the end of the relevant assessment year</td><td>25% of aggregate of tax and interest payable</td></tr>
    <tr><td>After 12 months but within 24 months</td><td>50%</td></tr>
    <tr><td>After 24 months but within 36 months</td><td>60%</td></tr>
    <tr><td>After 36 months but within 48 months</td><td>70%</td></tr>
  </tbody>
</table>
<p>The 36 and 48 month windows were added by the Finance Act, 2025 with effect from 1 April 2025. Earlier, the window was 24 months with additional tax of 25% or 50%.</p>

<h2>3. Step-by-Step Compliance and Filing Workflow</h2>
<h3>A. Using a presumptive scheme</h3>
<ol class="steps">
  <li>Confirm eligibility: entity type, nature of activity and turnover. Compute the share of cash receipts to test the higher limits.</li>
  <li>Track receipts by mode. Digital receipts received by the due date of return qualify for the 6% rate under Section 44AD.</li>
  <li>Even without books, keep bank statements, sales invoices, GST returns and a simple record of cash receipts. GST turnover and AIS data are matched with the turnover declared.</li>
  <li>Pay advance tax in full by 15 March.</li>
  <li>File ITR-4 (Sugam) where eligible (resident individual, HUF or firm other than LLP with total income up to Rs. 50 lakh), or ITR-3 or ITR-5 otherwise. Report the turnover, presumptive income, and balance sheet items (sundry debtors, creditors, stock and cash) in the presumptive schedule.</li>
</ol>
<h3>B. Tax audit</h3>
<ol class="steps">
  <li>The assessee maintains books under Section 44AA and Rule 6F (for professionals), and appoints a Chartered Accountant for the tax audit. ICAI limits a CA to 60 tax audit assignments in a year.</li>
  <li>The auditor prepares Form 3CA (where accounts are already audited under another law, such as the Companies Act) or Form 3CB (other cases), along with Form 3CD, a statement of particulars covering more than 40 clauses: nature of business, method of accounting, changes in stock valuation, depreciation, Section 40A(3) cash payments, Section 43B items including MSME payments under 43B(h) (clause 26) and MSME interest disclosure (clause 22), TDS compliance, loans and deposits under Sections 269SS and 269T, and quantitative details.</li>
  <li>The auditor uploads the report on the e-filing portal with UDIN and DSC; the assessee accepts it from his login.</li>
  <li>The return is filed after the audit report, by the due date.</li>
</ol>
<h3>C. Advance tax</h3>
<ol class="steps">
  <li>Estimate total income for the year, including capital gains and other income, and compute tax after TDS and TCS.</li>
  <li>If the remaining liability is Rs. 10,000 or more, pay advance tax through Challan 280 on the e-Pay Tax service, selecting minor head 100 (advance tax). Resident senior citizens without business or professional income are exempt (Section 207(2)).</li>
  <li>Revise the estimate each quarter and pay instalments as per the schedule. Capital gains or dividend arising after an instalment date are included in subsequent instalments, without interest for the earlier shortfall attributable to them.</li>
</ol>
<h3>D. Filing an updated return</h3>
<ol class="steps">
  <li>Check eligibility. An updated return cannot be filed where it is a return of loss, reduces the tax liability, increases a refund, results in or increases a loss, where search or survey has been initiated, where assessment or reassessment is pending or completed for that year, or where the department has information under specified laws. Where a notice under Section 148A has been issued and an order has been passed holding that it is not a fit case for reassessment, an updated return may be filed (as clarified by the Finance Act, 2025).</li>
  <li>Compute tax and interest on the updated income, then compute additional tax under Section 140B.</li>
  <li>Pay tax, interest, fee and additional tax through Challan 280 under self-assessment.</li>
  <li>File the applicable ITR form with Form ITR-U on the e-filing portal, with the reason for updating (income not reported, wrong head, wrong rate, reduction of carried-forward loss, and so on). Only one updated return may be filed for an assessment year.</li>
</ol>

<h2>4. Statutory Due Dates and Frequency Table</h2>
<table class="data">
  <thead><tr><th>Compliance</th><th>Due date for FY 2026-27</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Advance tax, first instalment</td><td>15 June 2026</td><td>At least 15% of estimated tax</td></tr>
    <tr><td>Advance tax, second instalment</td><td>15 September 2026</td><td>At least 45% cumulative</td></tr>
    <tr><td>Advance tax, third instalment</td><td>15 December 2026</td><td>At least 75% cumulative</td></tr>
    <tr><td>Advance tax, fourth instalment</td><td>15 March 2027</td><td>100% cumulative; the only instalment for Sections 44AD and 44ADA</td></tr>
    <tr><td>Tax audit report (Forms 3CA or 3CB and 3CD)</td><td>30 September 2027</td><td>One month before the due date of return for audit cases</td></tr>
    <tr><td>Transfer pricing report (Form 3CEB)</td><td>31 October 2027</td><td>For international or specified domestic transactions</td></tr>
    <tr><td>Return of income, non-audit cases</td><td>31 July 2027</td><td>Subject to the dates prescribed under the 2025 Act and any CBDT extension</td></tr>
    <tr><td>Return of income, audit cases</td><td>31 October 2027</td><td>30 November 2027 where Form 3CEB is required</td></tr>
    <tr><td>Belated or revised return</td><td>31 December 2027</td><td>Three months before the end of the relevant year, unless the 2025 Act or Finance Act provides otherwise</td></tr>
    <tr><td>Updated return for FY 2026-27</td><td>Within 48 months from the end of the period that corresponds to the relevant assessment year</td><td>Additional tax rises with time</td></tr>
  </tbody>
</table>

<h2>5. Interest, Late Fees and Penal Consequences</h2>
<table class="data">
  <thead><tr><th>Default</th><th>Provision (1961 Act reference)</th><th>Computation</th></tr></thead>
  <tbody>
    <tr><td>Late filing of return</td><td>Section 234A</td><td>Simple interest at 1% per month or part on the tax unpaid on the due date, from the day after the due date to the date of filing</td></tr>
    <tr><td>Advance tax paid is less than 90% of assessed tax</td><td>Section 234B</td><td>Simple interest at 1% per month or part on the shortfall, from 1 April following the financial year to the date of determination of income</td></tr>
    <tr><td>Deferment of advance tax instalments</td><td>Section 234C</td><td>Simple interest at 1% per month on the shortfall: for 3 months each for the June, September and December instalments, and 1 month for the March instalment. No interest if at least 12% is paid by 15 June and 36% by 15 September. For Sections 44AD and 44ADA, 1% for 1 month on any shortfall on 15 March</td></tr>
    <tr><td>Late filing fee</td><td>Section 234F</td><td>Rs. 5,000; Rs. 1,000 if total income does not exceed Rs. 5 lakh</td></tr>
    <tr><td>Failure to get accounts audited</td><td>Section 271B</td><td>0.5% of turnover or gross receipts, or Rs. 1,50,000, whichever is less; not levied if reasonable cause is shown (Section 273B)</td></tr>
    <tr><td>Failure to maintain books</td><td>Section 271A</td><td>Rs. 25,000</td></tr>
    <tr><td>Section 43B(h) breach</td><td>Section 43B(h)</td><td>Disallowance of the expense in the current year, with tax and interest on the increased income</td></tr>
    <tr><td>Under-reporting discovered later</td><td>Section 270A</td><td>Penalty of 50% of tax on under-reported income, or 200% for misreporting. An updated return avoids this for the income it covers</td></tr>
  </tbody>
</table>

<h2>6. Practical Audit Pitfalls and Best Practices</h2>
<ul class="checklist">
  <li><strong>Turnover consistency.</strong> GST turnover, bank credits and the turnover in the return must reconcile. Differences explained by exempt supplies, advances or reimbursements should be documented.</li>
  <li><strong>Test the 5% cash condition early.</strong> The higher limits for Sections 44AD, 44ADA and 44AB depend on the share of cash. A few large cash receipts near year end can push a business into audit.</li>
  <li><strong>Do not combine Sections 44AD and 44ADA</strong> for the same activity, and remember that LLPs and companies cannot use either.</li>
  <li><strong>Build a vendor MSME register.</strong> Collect Udyam certificates, tag micro and small vendors, track payment terms and ensure payment within 15 or 45 days, especially around 31 March, to avoid Section 43B(h) disallowance.</li>
  <li><strong>Keep advance tax workings.</strong> A short memo with the estimate at each instalment date helps defend interest computations and supports any claim of income arising after the instalment.</li>
  <li><strong>Use the updated return proactively.</strong> If AIS shows income that was missed, an updated return within 12 months costs 25% additional tax, which is usually far less than penalty and litigation.</li>
  <li><strong>Plan for the new Act.</strong> Clauses of Form 3CD and the presumptive schedules in the ITR are being aligned with the Income-tax Act, 2025. Review the updated forms before planning the audit timetable for tax year 2026-27.</li>
</ul>

<h2>7. Statutory References and Official Sources</h2>
<div class="sources">
<ul>
  <li>Income-tax Act, 2025 (from 1 April 2026), provisions corresponding to presumptive taxation, books of account, audit, advance tax, interest and updated returns; official section mapping on incometax.gov.in.</li>
  <li>Income-tax Act, 1961: Sections 43B(h), 44AA, 44AB, 44AD, 44ADA, 44AE, 139(4), 139(5), 139(8A), 140B, 207 to 211, 234A, 234B, 234C, 234F, 270A, 271A, 271B and 273B.</li>
  <li>Finance Act, 2023 (Section 43B(h) and higher limits under Sections 44AD and 44ADA); Finance Act, 2021 (Rs. 10 crore audit limit); Finance Act, 2022 (updated return); Finance Act, 2025 (extension of the updated return window to 48 months).</li>
  <li>Income-tax Rules, 1962: Rules 6F and 6G, Forms 3CA, 3CB and 3CD, and the ITR-U form.</li>
  <li>Micro, Small and Medium Enterprises Development Act, 2006: Sections 15 to 17 and 22.</li>
  <li>ICAI Council guidelines on the limit of tax audit assignments.</li>
  <li>Official portals: incometax.gov.in (e-filing, e-pay tax, AIS); udyamregistration.gov.in.</li>
</ul>
</div>
`
});
