
# Comprehensive Testing & Design Manual — Epinephrine Auto-Injector Functional Requirements
**Revision:** 2025-08-07  
**Purpose:** Beginner-friendly, practical training manual that explains the five FDA-designated in‑vitro functional requirements for epinephrine auto‑injectors and gives step‑by‑step test methods, sample plans, acceptance criteria, standards references, templates, and troubleshooting. This file is written in Markdown so you can edit, version, and export it easily.

> **Important regulatory note:** This manual synthesizes FDA draft guidance and ISO/ASTM standards to provide practical testing recipes and project guidance. It is educational and not a substitute for regulatory advice. For an ANDA or a submission, follow the FDA guidance documents, consult a regulatory/statistics expert, and request a pre-ANDA meeting with FDA when in doubt.

---

## Table of contents
1. Project startup checklist (quick road‑map)
2. How to read a standard and build a verification protocol
3. General lab & traceability rules (calibration, environment, documentation)
4. **Requirement A — Delivered Volume** (definition, rationale, standards, detailed test protocol, sampling, statistical analysis, pass/fail, example)
5. **Requirement B — Ejection Time** (ditto)
6. **Requirement C — Trigger (Actuation) Force** (ditto)
7. **Requirement D — Extended Needle Length** (ditto)
8. **Requirement E — Needle Integrity Post‑Injection** (ditto)
9. Human factors, risk mapping (FMEA), and linking test results to IFU changes
10. Test report template and example data tables
11. Quick reference: standards & FDA links (for the curious)

---

## 1) Project startup checklist (road‑map)
A beginner-friendly sequence you can follow to run from concept → lab verification:
1. **Assemble team:** mechanical engineer, device engineer, test engineer, QA, statistician, human factors specialist, regulatory lead. (If you can’t hire a statistician right away, budget for one during protocol design — PBE statistics are non-trivial.)
2. **Collect references:** FDA Draft Guidance on Epinephrine, ISO 11608 (parts 1,2,5), ISO 9626, ISO 7864, ASTM standards for needle testing and puncture resistance, and FDA statistical guidance. (Key sources listed at the end.)
3. **Write verification plan:** One protocol per primary function. Each protocol = Purpose, Scope, Equipment, Sample Plan, Procedures, Data Capture, Acceptance Criteria, Analysis, and Release Decision.
4. **Procure calibrated equipment:** analytical balance (0.1 mg), universal testing machine (force resolution ≤0.1 N), high-speed camera (≥1,000 fps) or displacement/pressure sensors, microscope (10–40×), digital calipers (0.01 mm), environmental chamber (23±2 °C, 50±5% RH).
5. **Prepare test materials:** RLD (reference listed device) purchase plan, test product lots (3+ production lots for T product), synthetic skin materials and clothing substrates for needle integrity, collection vessels and waste handling.
6. **Document control:** Master Test Plan, SOPs for each instrument, calibrated equipment logs, sample traceability sheets (unique IDs), raw data files, photos/video repository, and statistical analysis script (R or Python notebook).
7. **Run pilot tests:** 5–10 units as “method development” to refine fixtures and timing; freeze the protocol after pilot passes review.
8. **Execute verification:** follow sampling plan and capture raw data, images, and video.
9. **Analyze, write report:** include PBE or other equivalence analysis, plots, failure mode breakdown, and recommendations.
10. **Human factors linkage:** if differences observed, run comparative use/human factors tests per FDA guidance before changing IFU or design.

---

## 2) How to read a standard and build a verification protocol (quick primer)
- **Standards are prescriptive about *methods* and often leave acceptance to the manufacturer** (unless the FDA product-specific guidance sets PBE or specific acceptance rules). When a standard gives a test method but no acceptance criteria, you must **document and justify** your acceptance criteria using risk analysis (ISO 14971) and clinical rationale (e.g., how much change in delivered volume would clinically matter for epinephrine). ISO 11608-1 and -5 are the base test-method buckets for autoinjectors.
- **Protocol structure** (must include): objective, acceptance criteria, lot/sample plan, environmental conditions, instrumentation & calibration, steps (detailed), data to record, pass/fail decision rules, and change control for deviations.
- **Traceability & audit readiness:** link every data point to equipment calibration certificate (with dates) and a unique sample ID. Keep raw data (camera files, force logs, balance outputs) and a derived CSV with human-readable columns for statistical work.
- **Pre-define outliers and retest rules** (e.g., contaminated unit due to mechanical handling error): decide whether to exclude, retest, and how many. Document thoroughly and get QA signoff.

---

## 3) General lab & traceability rules (applies to all five functions)
- **Environmental conditioning:** Test at lab standard 23 ± 2 °C and 50 ± 5% RH unless you are purposely challenging (cold or hot) conditions. Precondition devices for ≥24 hours at test environment.
- **Lot plan (FDA minimum for epinephrine PSG):** use **≥3 production batches** of Test (T) and ≥3 batches of Reference (R), with **no fewer than 10 units per batch** (i.e., minimum 30 units per product). This is the baseline sampling plan FDA recommends for ANDA in vitro bioequivalence testing. *(See Regulatory refs at the end.)*
- **Reserve samples:** retain at least 60 units total across T and R (industry practice) and maintain at least 10 retained units per batch when feasible for re-testing and forensic examinations.
- **Instrument calibration:** analytical balances and force gauges must have calibration certificates traceable to national standards (e.g., NIST) and be within calibration period. Daily "daily check" weights before runs are recommended.
- **Data capture:** use time-synced acquisition when capturing multi-sensor data (video + force + displacement). Store timestamps in ISO 8601.
- **Data backup & QA:** nightly backups of raw data; QA sample check of 10% of result spreadsheets vs raw logs.
- **Ethics/regulatory:** RLDs must be purchased and documented with lot numbers and expiry dates; don’t open vials beyond shelf-life. Follow local waste and sharps disposal rules.

---

## 4) Requirement A — **Delivered Volume** (in‑depth)
### Short definition & why it matters
**Delivered volume** = the actual liquid volume expelled from the auto‑injector during activation (the clinically delivered dose). For epinephrine (fixed small bolus doses), small deviations can change clinical effect during anaphylaxis—FDA expects equivalence to the RLD and recommends population bioequivalence (PBE) analysis for delivered volume comparisons.

### Regulatory & standards context
- FDA Draft Guidance on Epinephrine (Aug 2023) specifically lists **Delivered Volume** as a required in‑vitro bioequivalence study type and recommends **PBE analysis**, with a sampling baseline of at least three batches × ≥10 units each. (FDA Draft PSG). citeturn1view0
- **ISO 11608‑1 (2022)** provides methods and definitions for dose accuracy, delivery efficiency, sample selection, and acceptance calculations for needle-based injection systems. Use it for apparatus, the "dose accuracy" definitions, and sampling theory. citeturn2view0
- When available, follow companion FDA product-specific statistical guidance (e.g., guidance referenced in the epinephrine PSG and the FDA's statistical BE guidance) for PBE test-design and analysis. citeturn4search4

### Design inputs to control (things your engineers should instrument or monitor)
- Fill volume specification and container fill tolerance
- Plunger geometry and seals (leak/backflow)
- Spring force and travel profile
- Fluid pathway friction/resistance
- Viscosity of formulation (Q1/Q2 requirements)
- Environmental susceptibility (temperature effect on viscosity and spring)

### Objective of the test
Demonstrate that the test (T) auto‑injector delivers an equivalent distribution of delivered volumes to the reference (R) across manufacturing variability — statistically via **Population Bioequivalence (PBE)**.

### Acceptance criteria (recommended & regulatory minimums)
- **Regulatory minimum:** perform PBE per FDA draft PSG (no explicit simple ± limit is given; the statistical PBE pass criterion is used). See the FDA PSG for batch and sample plan. citeturn1view0
- **Industry practical target:** set preliminary internal spec of **mean within ±5%** of R and pooled variability similar to R (this is a practical bench target and helps meet PBE). Use risk analysis to justify final internal limits.
- Reserve the final "pass/fail" decision to the PBE calculation and the protocol-defined PBE threshold (agree with statistician).

### Sample plan (detailed)
- **Minimum (FDA):** ≥3 batches × ≥10 units per batch for both T and R (i.e., ≥30 units/T, ≥30 units/R). citeturn1view0  
- **Recommended for robust power:** aim for 3–6 batches and 10–20 units per batch depending on preliminary SD. Use a statistician to do a power analysis (simple approximation shown below).

### Equipment & apparatus
- Analytical balance with 0.1 mg readability and suitable pan for collection vessel (calibrated). Keep a magnetically shielded area if necessary to avoid drafts.
- Device fixture that holds the autoinjector in the same orientation as IFU and drops the expelled fluid into a tared collection vessel (glass vial) mounted on the balance.
- High-resolution video optional to verify complete ejection and to timestamp the event. If using mass → convert to volume using measured density (ρ) at test temperature (measure with pycnometer or use validated density value).

### Step‑by‑step test procedure (protocol template)
**Preconditions:** Condition devices and RLDs at 23 ± 2 °C and 50 ± 5% RH for ≥24 hours. Verify balance calibration with certified weights before each run.
1. **Assign sample IDs** (e.g., T1‑B1‑U01 where B1 = batch 1, U01 = unit 1).
2. **Tare collection vessel** on the balance and zero. Record tare mass.
3. **Mount auto‑injector** in fixture to replicate user orientation per IFU (upright vs perpendicular). If RLD IFU says perpendicular to thigh, align perpendicular to a flat surface and collector below.
4. **Activate** the device exactly per IFU (push with the same fixture). Use a stepper or controlled plunger actuator if possible for consistency.
5. **Capture mass** on the balance until mass stabilizes (many autoinjector tests measure mass at 30 s post-activation to capture any drips). Record final mass. Save raw balance output.
6. **Convert mass → volume** using measured density ρ (g/mL) at test temperature: `volume (mL) = mass (g) / ρ (g/mL)`.
7. **Repeat** for all units in the sample plan across batches. Make batch order randomized (to avoid run‑order bias).
8. **Quality checks:** visually inspect the device for failed mechanical operation (e.g., cap not removed) and mark as protocol deviation if required. Document and photograph failures.
9. **Data backup:** export balance logs to CSV; store with video if used.

### Statistical analysis (practical workflow)
- **Primary analysis:** PBE comparing T and R delivered volumes using the study design (batches nested within product). PBE delivers a test statistic that combines mean and variance differences. Submit PBE technical details in the report; compute bootstrapped confidence intervals where helpful.
- **Simplified approximation** (for rough planning): if you want to estimate a starting sample size, for a two-sample equivalence of means (approximation) use:
  \[ n \approx 2\frac{(Z_{1-\alpha/2} + Z_{1-\beta})^2 \sigma^2}{\Delta^2} \]
  where `Δ` = tolerable difference (e.g., 5% of nominal volume), `σ` = expected pooled SD of single-unit delivered volume, `α` = 0.05, `power` = 80%. As an example, for a 0.3 mL RLD, Δ=0.015 mL and σ=0.02 mL, the rough `n` comes out ≈ **28** per group — which is consistent with the FDA minimum of 30 units (3 × 10). (This is an approximation — PBE is the regulatory method.)

**Note:** PBE uses a variance decomposition approach and different critical values; always run the formal PBE script (R or SAS) with your statistician. See FDA statistical approaches guidance. citeturn4search4

### Common failure modes and troubleshooting
- **Low delivered volume:** trapped air in fluid path, seat/seal leakage, partially stuck plunger, contaminated cap.
- **High variability:** inconsistent activation technique, fragility in manufacturing, inconsistent spring force.
- **Remedies:** improve fixture repeatability, tighten component tolerances, increase batch process control, re-run method validation with more replicates, add life-cycle testing to confirm

### Reporting outputs (what to put in the report)
- Table of raw masses and derived volumes per unit with timestamps
- Batch means, pooled SD, variance decomposition
- PBE test statistic and pass/fail decision
- Photographs/videos and balance calibration certificates
- Recommendation: accept/reject + CAPA if required

---

## 5) Requirement B — **Ejection Time** (detailed)
### Definition & rationale
**Ejection time** = interval from initiation of delivery (first plunger/actuator movement or device audible cue) to completion of dose ejection (when fluid flow stops). It affects how the patient holds the device on the skin and can change drug deposition kinetics. FDA lists this as a supportive comparative characterization study for epinephrine products. citeturn1view0

### Standards & context
- ISO 11608 series (Part 1 and Part 5) includes procedures and test equipment guidance for measuring injection times of automated NIS. Use ISO 11608‑5 for automated test descriptions. citeturn2view0turn3search2

### Objective
Compare T and R ejection time distributions and ensure the T product's injection time does not deviate in a way that could change clinical performance or user handling (e.g., make patient hold device longer).

### Acceptance criteria (practical guidance)
- **Regulatory:** FDA expects a comparative study (no hard universal numerical acceptance specified in the PSG). Use equivalence testing with clinically justified margins. citeturn1view0
- **Practical bench target:** aim for **mean ejection time within ±10%** of R and similar variance. Document clinical rationale and FMEA if a larger deviation exists.

### Sample plan & preconditioning
- Minimum sampling: follow FDA’s batch sampling plan (3+ batches, ≥10 units/batch) as a baseline for supportive studies — but many labs run this test on the same units used for delivered volume to minimize material use. citeturn1view0
- Precondition: 23 ± 2 °C, 50 ± 5% RH for ≥24 hours.

### Equipment & measurement approaches
- **High-speed camera**: 500–5,000 fps depending on duration (if ejection is very fast, use higher fps). Use a fixed reference scale in frame and a timestamp overlay or synced TTL trigger. Preferred when visual verification of dose ejection is needed.
- **Displacement sensor or linear encoder**: measure plunger travel vs time and determine fluid ejection by plunger motion flagged by slope changes.
- **Pressure/flow sensor**: place inline or in a surrogate fluid path to measure flow onset/end (more complicated because device is sealed).
- **Triggered data acquisition:** synchronize force/torque sensor, displacement and camera using a TTL or software trigger.
- **Example instrumentation:** Photron FASTCAM, Instron displacement transducers, or a low-latency digital encoder + camera.

### Step‑by‑step procedure (protocol template)
1. **Instrument sync:** set camera and data acquisition to a common trigger (software or TTL). Validate sync with a stopwatch or test pulse.
2. **Mount & align:** fixture the autoinjector and collection medium if desired. If camera is used, choose a lateral view showing plunger and needle guard action plus a close-up of the ejection port if possible.
3. **Baseline recording:** capture 1–2 s of baseline before activation to capture the moment of actuation and background noise.
4. **Activate device per IFU** (fixture-driven push) and record until flow stops + 1–2 s buffer.
5. **Determine timestamps:** using the frame-by-frame video or displacement data, define `t0` (first detectable plunger movement or needle insertion event) and `t_end` (last observable droplet leaving the tip or last significant plunger motion related to dosing). The difference `t_end - t0` is the ejection time.
6. **Repeat** per sample plan and randomize run order.
7. **Quality check:** flag any partial injections or malfunctioning actuations and photograph the device.

### Analysis & output
- Report mean, SD, median, and range of ejection times. Plot overlayed histograms or boxplots of T vs R.
- Use equivalence testing (e.g., two one‑sided tests or a PBE style approach) with clinically justified margins.
- Include time‑series traces for representative units and annotated video stills showing start/end frames.

### Common issues & fixes
- **Very short ejection times (~<50 ms):** need higher fps or alternative sensors (displacement/accelerometer).
- **Ambiguous end-of-ejection:** use a small dye in surrogate tests or use post-collection mass flow trace to identify last mass increment.
- **High variability:** look for leaking, partial blockages, or mixed lots with damaged springs.

---

## 6) Requirement C — **Trigger (Actuation) Force** (detailed)
### Definition & rationale
**Trigger force** = the mechanical force a user must apply to initiate the device. Too large a force creates a usability hazard (elderly or weak users won't actuate), too small a force risks accidental activation. The FDA lists trigger force as a supportive comparative characterization test. citeturn1view0

### Standards & context
- ISO 11608‑5 describes actuation/activation force testing for autoinjectors. Use ISO 11608‑1 for sampling & general test conditions. citeturn3search2turn2view0
- If the device includes needle guard systems, ISO 11608‑5 requires guard override force to be **≥2×** the set maximum activation force in some cases — consult the standard. (See ISO 11608‑5 commentary.) citeturn3search11

### Objective
Demonstrate that the force needed to activate the T product is functionally equivalent to R and within the range appropriate for target users (i.e., consistent with human factors strength data).

### Acceptance criteria & human factor tie‑in
- **Regulatory baseline:** comparative descriptive study per FDA PSG; justify any differences with human factors data.
- **Human factors requirement:** set maximum allowable activation force based on the weakest intended user group's pinch/press strength (use human factors data; elderly grip/press capability metrics).
- **Bench target:** mean activation force within ±15% of R is commonly used internally (document your rationale).

### Sample plan
- Follow the FDA batch plan as the default for ANDA supportive tests (3+ batches, ≥10 units/batch). These tests are shorter and can often be performed on the same set of units used for delivered volume/ejection time.

### Equipment & fixture
- **Force gauge** with resolution ≤0.1 N (load cell + data logger) or an Instron/universal testing machine (UTM) with appropriate low‑force load cell.
- **Custom fixture** to replicate human button/pressure contact (flat plate or hemisphere, depending on device) and to apply force along the intended actuation vector. Ensure alignment to avoid bending or torsion artifacts.
- **Actuation speed:** if the standard prescribes a rate, use it; otherwise pick a controlled rate (e.g., 10–50 mm/min or ~5–20 N/s ramp) and justify in the protocol. (If the device is pressure‑activated by the thigh, consider a ramp similar to human push dynamics or use a single-rate to ensure consistency.)

### Step‑by‑step procedure (protocol template)
1. **Calibrate the load cell** and zero the instrument in the test fixture.
2. **Place the device** in the fixture with the activation surface exposed. Record orientation.
3. **Apply load** at a controlled displacement/force rate until the device actuates (audible click or measured drop in force followed by plunger motion). The **peak force immediately prior to actuation** is commonly recorded as trigger force.
4. **Record** the peak force and force-vs-time trace. Save raw data for analysis.
5. **Repeat** across the sample plan with randomized order.

### Data analysis
- Report mean, SD, range, and % difference vs R. Plot force traces for representative units.
- If you detect bimodality or outliers, inspect for batch/process anomalies.

### Common failure modes & mitigations
- **High activation force:** stiction at button, poor spring preload, or damaged surface coatings. Consider design changes: larger contact pad, better lever ratio, or reduced friction components.
- **Low or inconsistent activation:** loose parts, premature triggers, or manufacturing defect—tighten assembly tolerances and add in-line torque/force control.

---

## 7) Requirement D — **Extended Needle Length** (detailed)
### Definition & rationale
**Extended needle length** is the length the needle protrudes beyond the device tip after activation (effective penetration length). For IM epinephrine, achieving intramuscular depth is critical; needle extension must match the RLD to achieve similar clinical delivery. FDA requires PBE analysis of extended needle length as a primary in‑vitro study for epinephrine autoinjectors. citeturn1view0

### Standards & context
- ISO 11608‑5 includes methods for measuring needle extension and needle insertion tests (automated functions). citeturn3search2
- ISO 7864 and ISO 9626 govern needle manufacture and tubing mechanical properties (useful for needle selection and mechanical expectations). citeturn0search6turn0search5

### Objective
Verify that the effective extended needle length (as deployed in the device) is equivalent to R across manufacturing variability and that it reliably reaches intended depth for IM delivery.

### Acceptance criteria
- **Regulatory:** use PBE to compare extended needle lengths. The FDA PSG lists PBE for needle length. citeturn1view0
- **Bench target:** mean length within ±0.5 mm of R is a practical rule-of-thumb for early design decisions; justify final acceptance limits with clinical rationale (e.g., thigh tissue thickness data).

### Sample plan & angle considerations
- Follow the FDA sampling baseline (≥3 batches × ≥10 units). citeturn1view0
- FDA requests the needle integrity/penetration tests include **at least three materials** of different penetration challenge and **at least three angles of incidence** when testing needle integrity (covered in needle integrity section). Use the same or similar set of materials for measuring extension against substrates that simulate compression against clothing or skin. citeturn1view0

### Measurement equipment & fixtures
- **Digital calipers** (0.01 mm) with a fixture that permits activation and locking the plunger at full extension to measure from device tip to the needle end reproducibly.
- **Optical comparator or microscope** for high‑precision measurement and photographic record.
- **Automated fixture** (preferred) that performs cap removal (if relevant), triggers the device, and then places a mechanical gauge to measure protrusion to reduce operator variability.
- **Calibration:** calibrate calipers against gauge blocks and verify at multiple ranges before runs.

### Step‑by‑step procedure (protocol template)
1. **Condition devices** to test environment 23 ± 2 °C / 50 ± 5% RH for ≥24 hours.
2. **Mark measurement datum** on device (e.g., the outermost face of device tip) for consistency.
3. **Place device** in a jig that replicates IFU orientation and that can both trigger and then hold the device at full extension without compressing the needle.
4. **Trigger** the device per IFU using the actuator. Immediately lock or immobilize the device to prevent retraction during measurement.
5. **Measure** the protrusion distance from the datum to the needle tip using calipers or via calibrated optical measurement. Record to 0.01 mm accuracy.
6. **Repeat** per sample plan and across angles/materials if testing under clothing compression simulations.
7. **Document** any partial retractions or crooked deployment and photograph each unit's needle profile.

### Data analysis & reporting
- Report mean, SD, and batch variability; include images for representative and failed units.
- PBE analysis for needle length equivalence (as per FDA PSG). citeturn1view0

### Common problems & fixes
- **Needle not reaching full extension:** check actuator travel, internal stops, or manufacturing tolerances on plunger travel.
- **Bent needle after extension:** may indicate shear or misalignment — inspect needle hub gluing/bonding and tolerances (see ISO 11608‑2 for hub tests). citeturn5search0

---

## 8) Requirement E — **Needle Integrity Post‑Injection** (detailed)
### Definition & rationale
**Needle integrity post‑injection** = the condition of the needle after it has been used to inject through typical clothing substrates and at angles described in IFU; the needle must remain intact, undamaged, and still able to penetrate when tested to the same challenge conditions. FDA requires testing the needle after injection through at least three materials and three angles of incidence and comparing T vs R. citeturn1view0

### Standards & related tests
- **ISO 11608‑2** (Needles) and **ISO 9626** (stainless steel needle tubing) help define mechanical expectations and test methods for needle integrity (hub pull, bend). citeturn5search1turn0search5
- **ISO 7864** defines sterile hypodermic needle requirements (dimensions, sharpness). citeturn0search6
- **ASTM F2878** gives a method for measuring puncture resistance of materials (useful when you want to define the challenge materials). citeturn6search0
- **ASTM bend and penetration tests** (e.g., ASTM F1874, F3014) can inform bench methods for post-injection bend testing and tip integrity checks. citeturn6search2turn6search16

### Objective
Demonstrate the T product's needle sustains a realistic use challenge (through clothing, at ±angled insertions) and remains functionally equivalent to R (able to penetrate, not fractured or blunt).

### Materials & angles (recommended)
- **Materials:** Select at least three garments representing the RLD labeling and common real‑world clothing: e.g., (A) light cotton T-shirt (low challenge), (B) denim or heavy cotton (medium challenge), (C) multilayer synthetic/insulated jacket material (high challenge). Document GSM (g/m²), weave, and thickness for each. FDA requires at least three different materials — justify selections relative to RIFU. citeturn1view0
- **Angles of incidence:** test at **90° (perpendicular)** plus two oblique angles (e.g., 60° and 30°) or as appropriate to RLD labeling; FDA requires at least 3 angles. Document and justify angle choices. citeturn1view0
- **Penetration surrogate:** use calibrated synthetic skin or ballistic gel to collect the needle and test post-injection performance (e.g., penetration force on re‑use in surrogate).

### Sample plan & test sequencing
- **Batch plan:** use the FDA minimum sampling approach (3+ batches × ≥10 units/batch) and rotate the challenge materials and angles across units so each batch contains a spread of conditions.
- **Sequence:** activate the device through the chosen material into the surrogate (synthetic skin or gel). After injection, remove the device and capture needle condition.

### Test equipment & inspection methods
- **Microscopy:** stereo microscope (e.g., 10–40×) and digital photomicrography to document tip deformation or burrs.
- **Penetration test:** optionally measure penetration force post-use by pressing the used needle into standardized substrate (ASTM F2878 method or a surrogate) and comparing to a new unused needle of the same specification — this detects dulling or tip damage.
- **Bend test:** measure straightness or use a bend moment test (ASTM F1874 style) to quantify yield or maximum moment if fracture or significant bending suspected.

### Step‑by‑step procedure (protocol template)
1. **Choose challenge material & angle** per protocol table (randomize order to avoid run order bias).
2. **Place substrate** on test jig that replicates clothing on the thigh (including a small air gap or simulated soft tissue underlay if required).
3. **Activate device** through the substrate into standardized surrogate (e.g., ballistic gel block or synthetic skin) with controlled displacement (simulate a perpendicular press to emulate user behavior).
4. **Record** the injection event on camera; photograph the substrate post injection and the device/needle immediately after removal (10× macro photo + microscopic photo).
5. **Inspect needle** under microscope for bending, tip damage, burrs, fracture, or occlusion. Grade damage according to an a priori scale (e.g., Grade 0 = no visible damage, Grade 1 = minor tip dulling, Grade 2 = visible bending <5°, Grade 3 = bent/fractured).
6. **Penetration re-test** (optional but recommended): using the used needle, perform a controlled penetration into a standard test substrate and measure force vs an unused needle; compare metrics.
7. **Document** all images, comments, and any units that fail to penetrate properly.

### Pass/fail and analysis
- **Regulatory pivot:** the FDA requires head‑to‑head comparisons; demonstrate that T's needle integrity results are equivalent to R under the same materials/angles. Use descriptive tables and if feasible a statistical comparison of proportion of failures across products.
- **Internal specs:** define a zero‑failure or ≤1% failure rate target at the planned sampling level; justify with risk analysis.

### Examples & common failure investigations
- **Bent needle after thick fabric:** inspect hub fixation and manufacturing alignment; check for hub bonding strength (ISO 11608‑2 hub removal/bond tests).
- **Fracture:** metallurgy issue, improper heat treatment, or microcracks — escalate to supplier control and raw material testing (ISO 9626 / ASTM tubing specs). citeturn0search5

---

## 9) Human factors, risk mapping (FMEA), and linking test results to IFU changes
- **Human factors:** tie trigger force and ejection time results to usability: if activation force increases, run human factors comparative tests to ensure target users can still activate device. Use FDA "Comparative Analyses and Related Comparative Use Human Factors Studies" guidance for ANDAs.
- **FMEA mapping:** for each failure mode (delivered volume low, failed actuation, bent needle), estimate severity (clinical consequence) and occurrence (observed frequency in tests). Use FMEA to drive CAPA and updated acceptance criteria.
- **IFU consideration:** any design differences that change operation (e.g., different activation gesture) require a human factors justification and possibly a training/trainer device; document training steps and labeling changes in the submission.

---

## 10) Test report template & example data tables
**(Deliverable checklist for each protocol)**:
- Title, protocol ID, dates, operator, lab, equipment used, calibration certificates, environmental conditions, R and T lot numbers, sample IDs, raw data attachments (CSV + video), analysis script, results, pass/fail decision, CAPA recommendations, QA signoff.

**Minimal table format (CSV-friendly)**:
`Product,Batch,Unit,Test,MeasuredValue,Unit,Timestamp,Operator,Notes`

**Example columns for delivered volume CSV**: `Product,Batch,Unit,Mass_g,Tare_g,NetMass_g,Density_g_per_mL,Volume_mL,StartTime,EndTime,Operator,VideoFile`

---

## 11) Quick reference: regulatory & standards sources (selected)
- FDA Draft Guidance: **Epinephrine — Intramuscular/Subcutaneous Solution** (Draft PSG, Aug 2023) — lists Delivered Volume and Extended Needle Length as PBE endpoints; supportive tests: ejection time, trigger force, needle integrity. citeturn1view0
- **ISO 11608‑1:2022** — Needle‑based injection systems — dose accuracy, sampling, and test method guidance for primary functions. citeturn2view0
- **ISO 11608‑5:2022** — Needle‑based injection systems — automated functions (autoinjector test methods: actuation, injection time, needle extension). citeturn3search2
- **ISO 9626:2016** — Stainless steel needle tubing. citeturn0search5
- **ISO 7864:2016** — Sterile hypodermic needles for single use. citeturn0search6
- **FDA Statistical guidance:** *Statistical Approaches to Establishing Bioequivalence* — guidance on using equivalence frameworks such as PBE for in‑vitro endpoints. citeturn4search4
- **ASTM F2878** — Standard test method for protective clothing resistance to hypodermic needle puncture (useful to choose challenge materials). citeturn6search0

---

### Final notes for beginners
- Start small: run pilot method development with **5–10 units** to validate fixtures and data capture before committing full lot resources.
- Keep your statistician involved from protocol design; PBE equivalence testing is not plug‑and‑play.
- Document everything: industry and regulators expect reproducible, traceable records. Good documentation speeds review and reduces questions.

---
**Prepared by:** Your friendly testing guide (assembled from FDA Draft PSG and ISO/ASTM standards references).

