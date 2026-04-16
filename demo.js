document.addEventListener('DOMContentLoaded', () => {

// ══════════════════════════════════════
//  INSIGHT DATA (16 insights)
// ══════════════════════════════════════

const CATEGORY_LABELS = {
    treatment_outcomes: 'Treatment Outcomes',
    provider_intelligence: 'Provider Intelligence',
    product_substance: 'Product & Substance',
    patient_cohorts: 'Patient Cohorts',
    market_trends: 'Market Trends',
};

const INSIGHTS = [
    {
        "id": "market-neuro-switch",
        "category": "market_trends",
        "tier": "free",
        "title": "Neuromodulator Brand Switching: Real-World Migration Patterns Across 5 Toxins",
        "summary": "Longitudinal tracking of 3,600 neuromodulator patients over 18 months reveals distinct brand migration corridors, with Botox-to-Dysport as the highest-volume switch path driven by cost sensitivity and onset preference. DAXXIFY captures a disproportionate share of multi-brand cyclers but shows 22% reverse migration back to legacy toxins, predominantly among patients whose event-driven treatment timing conflicts with its longer onset window.",
        "preview": "Longitudinal tracking of 3,600 neuromodulator patients over 18 months reveals distinct brand migration corridors, with Botox-to-Dysport as the highest-volume switch path.",
        "content": {
            "keyFinding": "Botox-to-Dysport is the dominant migration corridor in the network, while DAXXIFY over-indexes among multi-brand cyclers yet loses nearly a quarter back to legacy toxins when onset timing does not match patient expectations.",
            "supportingFindings": [
                "Eighteen-month follow-up across 22 clinics shows structured switch paths rather than random churn, with economics and perceived speed of onset as the most cited drivers in chart review.",
                "Patients who rotate among three or more brands are disproportionately represented in DAXXIFY episodes but also show the highest rate of return to established neurotoxins within two treatment cycles.",
                "Event-driven injectors (pre-wedding, photos, travel) correlate with earlier dissatisfaction when peak effect does not align with the event calendar, amplifying reverse migration from longer-onset options.",
                "Cost-sensitive cohorts cluster on switches toward brands positioned with lower per-unit effective pricing, independent of absolute unit counts documented in billing data."
            ],
            "recommendation": "Counsel multi-brand and event-driven patients explicitly on onset and duration tradeoffs before switching to DAXXIFY or similar constructs. Monitor cyclers for rebound to legacy toxins and adjust scheduling templates to reduce mismatch between expected peak and social calendar.",
            "limitations": "Brand labels rely on billing and inventory feeds; covert product substitution cannot be ruled out. Migration reasons are partially inferred from structured notes and are not uniformly coded across sites."
        },
        "evidence": {
            "score": 8.3,
            "breakdown": {
                "sample_size": 1.9,
                "clinic_diversity": 1.8,
                "follow_up": 1.8,
                "completeness": 1.5,
                "image_validation": 1.3
            },
            "clinicCount": 22,
            "patientCount": 3600,
            "imageCount": 1800
        },
        "provingData": [
            {
                "switch_path": "Botox to Dysport",
                "share_of_switches_pct": "31%",
                "top_driver": "Cost / onset"
            },
            {
                "switch_path": "Dysport to Botox",
                "share_of_switches_pct": "12%",
                "top_driver": "Duration preference"
            },
            {
                "switch_path": "Any to DAXXIFY",
                "share_of_switches_pct": "18%",
                "top_driver": "Marketing / trial"
            },
            {
                "switch_path": "DAXXIFY to legacy",
                "share_of_switches_pct": "22%",
                "top_driver": "Onset vs. events"
            },
            {
                "switch_path": "Xeomin / Jeuveau mixed",
                "share_of_switches_pct": "17%",
                "top_driver": "Promotional bundling"
            }
        ],
        "tags": [
            "toxin",
            "switching",
            "daxxify",
            "brand-loyalty",
            "market-share"
        ],
        "entities": [
            "Botox",
            "Dysport",
            "DAXXIFY",
            "Xeomin",
            "Jeuveau"
        ],
        "publishedAt": "2026-03-28",
        "isFeatured": true,
        "trendScore": 94
    },
    {
        "id": "product-biostim-ha",
        "category": "product_substance",
        "tier": "standard",
        "title": "Biostimulator vs. HA Filler: 12-Month Volume Restoration Durability",
        "summary": "CV-measured volume retention comparing biostimulatory agents (Sculptra PLLA, dilute Radiesse CaHA) against hyaluronic acid fillers (Juvederm Voluma, Restylane Lyft) for midface restoration shows HA fillers leading at Month 6 (82% vs. 71%), but the curves cross between Months 7-9 as enzymatic HA degradation overtakes ongoing neocollagenesis. By Month 12, Sculptra patients retain 68% of peak correction versus 41% for Voluma.",
        "preview": "CV-measured volume retention shows HA fillers leading at Month 6 (82% vs. 71%), but curves cross between Months 7-9; by Month 12, Sculptra retains 68% of peak correction versus 41% for Voluma.",
        "content": {
            "keyFinding": "Hyaluronic acid leads midface volume retention through Month 6, then biostimulators surpass HA between Months 7-9 as collagen remodeling continues while HA thins, producing a late crossover in favor of PLLA by Month 12.",
            "supportingFindings": [
                "Structured CV surface maps show mean 82% vs. 71% of peak midface correction at Month 6 for HA versus biostimulator arms.",
                "Month 7-9 is the inflection band where mean HA loss from enzymatic turnover exceeds incremental biostimulator-driven neocollagenesis gains.",
                "At Month 12, Sculptra cohorts retain a mean 68% of peak correction compared with 41% for Juvederm Voluma in the same anatomic ROI definitions.",
                "Dilute Radiesse occupies an intermediate trajectory, with slower early lift than HA but better late retention than non-CaHA controls in the pooled biostimulator arm."
            ],
            "recommendation": "Set dual time horizons in consults: prioritize HA when patients need early shape control, and document biostimulator timelines where late durability matters more than Month 6 fullness. Plan touch-up HA conservatively after Month 6 when patients are also on biostimulator schedules.",
            "limitations": "ROI definitions and lighting protocols varied slightly across camera systems. Mixed sequential treatments (HA layered onto prior biostimulator) were excluded but reduce generalizability to real-world stacking."
        },
        "evidence": {
            "score": 7.9,
            "breakdown": {
                "sample_size": 1.6,
                "clinic_diversity": 1.6,
                "follow_up": 1.8,
                "completeness": 1.5,
                "image_validation": 1.4
            },
            "clinicCount": 15,
            "patientCount": 620,
            "imageCount": 1240
        },
        "provingData": [
            {
                "agent": "Juvederm Voluma",
                "retention_mo6": "82%",
                "retention_mo12": "41%"
            },
            {
                "agent": "Restylane Lyft",
                "retention_mo6": "79%",
                "retention_mo12": "44%"
            },
            {
                "agent": "Sculptra PLLA",
                "retention_mo6": "71%",
                "retention_mo12": "68%"
            },
            {
                "agent": "Dilute Radiesse CaHA",
                "retention_mo6": "73%",
                "retention_mo12": "59%"
            }
        ],
        "tags": [
            "biostimulator",
            "sculptra",
            "radiesse",
            "collagen",
            "durability"
        ],
        "entities": [
            "Sculptra",
            "Radiesse",
            "Juvederm Voluma",
            "Restylane Lyft"
        ],
        "publishedAt": "2026-03-24",
        "isFeatured": false,
        "trendScore": 81
    },
    {
        "id": "treatment-daxxify-intervals",
        "category": "treatment_outcomes",
        "tier": "free",
        "title": "DAXXIFY Real-World Retreatment Intervals: Duration Claims vs. Clinical Practice",
        "summary": "CV-tracked wrinkle recurrence across 2,400 DAXXIFY patients shows median time to clinically meaningful return of movement at 4.7 months in the glabellar complex and 4.1 months in the frontalis, shorter than the 6-month duration reported in SAKURA pivotal trials. A distinct subpopulation (~28%) does achieve 6+ month duration, correlating with lower baseline muscle mass and first-time toxin use.",
        "preview": "CV-tracked recurrence across 2,400 DAXXIFY patients shows median return of movement at 4.7 months glabella and 4.1 months frontalis, shorter than SAKURA 6-month claims.",
        "content": {
            "keyFinding": "Real-world median time to meaningful movement return is 4.7 months glabella and 4.1 months frontalis, below labeled trial duration, while about 28% of patients still reach or exceed six months.",
            "supportingFindings": [
                "Glabellar CV curves cross the pre-defined recurrence threshold at a median of 4.7 months network-wide.",
                "Frontalis returns faster on average (median 4.1 months), consistent with higher dynamic recruitment and thinner muscle bulk in many patients.",
                "Roughly 28% of patients meet or exceed six months before recurrence criteria trigger, clustering with lower baseline corrugator mass and first-time neurotoxin status.",
                "Retreatment booking behavior peaks at 4-5 months for glabella and 3-4 months for frontalis, ahead of manufacturer duration messaging."
            ],
            "recommendation": "Anchor expectations to real-world medians while reserving longer-interval messaging for patients who match the low-mass, naive-user profile. Build scheduling defaults that avoid unintentional undertreatment when patients assume a fixed six-month clock.",
            "limitations": "CV recurrence thresholds are standardized but still a proxy for patient satisfaction. Chart-based muscle grading is incomplete for a subset of charts."
        },
        "evidence": {
            "score": 8.5,
            "breakdown": {
                "sample_size": 1.9,
                "clinic_diversity": 1.7,
                "follow_up": 1.8,
                "completeness": 1.6,
                "image_validation": 1.5
            },
            "clinicCount": 16,
            "patientCount": 2400,
            "imageCount": 4800
        },
        "provingData": [
            {
                "region": "Glabella",
                "median_months_to_recurrence": "4.7",
                "pct_6mo_plus": "28%"
            },
            {
                "region": "Frontalis",
                "median_months_to_recurrence": "4.1",
                "pct_6mo_plus": "22%"
            },
            {
                "region": "Combined upper face",
                "median_months_to_recurrence": "4.4",
                "pct_6mo_plus": "26%"
            }
        ],
        "tags": [
            "daxxify",
            "duration",
            "retreatment",
            "peptide-toxin",
            "post-market"
        ],
        "entities": [
            "DAXXIFY",
            "Glabellar Complex",
            "Frontalis"
        ],
        "publishedAt": "2026-03-26",
        "isFeatured": true,
        "trendScore": 96
    },
    {
        "id": "provider-device-utilization",
        "category": "provider_intelligence",
        "tier": "premium",
        "title": "Energy-Based Device Utilization Rates: Post-Purchase Treatment Volume by Platform",
        "summary": "Anonymized scheduling data from 24 clinics reveals stark disparities in post-purchase device utilization. Top-quartile platforms average 18+ treatments per week within six months of acquisition while bottom-quartile platforms average fewer than four, often correlating with steep learning curves or consumable costs that erode per-treatment margins. Devices that have not found workflow fit by Week 4 rarely recover to steady-state adoption.",
        "preview": "Scheduling data from 24 clinics shows top-quartile energy devices at 18+ treatments per week within six months of purchase versus fewer than four for the bottom quartile.",
        "content": {
            "keyFinding": "Post-purchase utilization splits sharply by quartile, and platforms that fail to reach steady workflow integration by Week 4 seldom recover to healthy weekly volumes.",
            "supportingFindings": [
                "Six-month post-go-live windows separate top-quartile platforms at 18+ weekly treatments from bottom-quartile platforms under four.",
                "High consumable cost per pulse or tip maps to depressed utilization when clinics cannot maintain target margin per session.",
                "Training burden and room turnover time cluster among the bottom quartile even when demand indicators were strong at purchase.",
                "Week 4 throughput predicts six-month utilization better than early marketing lead counts."
            ],
            "recommendation": "Mandate a four-week utilization review with vendor and clinical leads; retrain or re-room devices that sit below target curves before capital is stranded. Model consumable costs explicitly in pro formas before signing.",
            "limitations": "Scheduling extracts omit some med-spa block bookings that bundle device time; revenue per pulse is inferred, not directly cost-accounted."
        },
        "evidence": {
            "score": 7.2,
            "breakdown": {
                "sample_size": 1.8,
                "clinic_diversity": 1.8,
                "follow_up": 1.4,
                "completeness": 1.4,
                "image_validation": 0.6
            },
            "clinicCount": 24,
            "patientCount": 8400,
            "imageCount": 0
        },
        "provingData": [
            {
                "utilization_quartile": "Top",
                "avg_tx_per_week_mo6": "18+",
                "week4_on_track_pct": "86%"
            },
            {
                "utilization_quartile": "Upper-mid",
                "avg_tx_per_week_mo6": "11",
                "week4_on_track_pct": "68%"
            },
            {
                "utilization_quartile": "Lower-mid",
                "avg_tx_per_week_mo6": "6",
                "week4_on_track_pct": "41%"
            },
            {
                "utilization_quartile": "Bottom",
                "avg_tx_per_week_mo6": "<4",
                "week4_on_track_pct": "18%"
            }
        ],
        "tags": [
            "device-utilization",
            "roi",
            "clinic-operations",
            "capital-equipment"
        ],
        "entities": [
            "Energy Device",
            "Clinic Operations",
            "Treatment Session"
        ],
        "publishedAt": "2026-03-18",
        "isFeatured": false,
        "trendScore": 72
    },
    {
        "id": "treatment-morpheus8-acne",
        "category": "treatment_outcomes",
        "tier": "standard",
        "title": "Morpheus8 vs. Energy-Based Competitors: Acne Scar Volume Reduction at 90 Days",
        "summary": "Controlled comparison of four energy platforms (Morpheus8, Exceed Microneedling, CO2RE Fractional Laser, and Halo Hybrid Fractional Laser) across 380 patients shows Morpheus8 with a statistically significant advantage in rolling scar volume reduction (34% vs. 26% for CO2RE and 28% for Exceed), likely attributable to its deeper RF penetration depth of up to 8mm. For boxcar scars, the gap narrows to non-significance across all four platforms.",
        "preview": "Across 380 patients, Morpheus8 leads rolling scar volume reduction at 90 days (34% vs. 26% CO2RE and 28% Exceed); boxcar scars show no significant separation.",
        "content": {
            "keyFinding": "Morpheus8 delivers materially greater rolling scar volume reduction at 90 days than CO2RE or Exceed, while boxcar scars respond similarly across platforms.",
            "supportingFindings": [
                "Mean rolling scar volume reduction at day 90 is 34% for Morpheus8 versus 26% (CO2RE) and 28% (Exceed) under unified CV segmentation.",
                "Depth capability up to 8mm aligns with the rolling scar cohort where deeper fibrotic bands are common.",
                "Halo Hybrid trails Morpheus8 on rolling scars but remains within the mid-pack cluster.",
                "Boxcar scar endpoints show overlapping confidence intervals for all four devices."
            ],
            "recommendation": "Prioritize Morpheus8 when rolling scars dominate the treatment plan; choose among the four more on downtime and pricing when boxcar morphology predominates.",
            "limitations": "Operator settings and pass counts were standardized by protocol but not blinded. Fitzpatrick distribution was uneven across sites."
        },
        "evidence": {
            "score": 7.8,
            "breakdown": {
                "sample_size": 1.5,
                "clinic_diversity": 1.5,
                "follow_up": 1.5,
                "completeness": 1.5,
                "image_validation": 1.6
            },
            "clinicCount": 11,
            "patientCount": 380,
            "imageCount": 760
        },
        "provingData": [
            {
                "platform": "Morpheus8",
                "rolling_scar_reduction_90d": "34%",
                "boxcar_sig": "NS"
            },
            {
                "platform": "Exceed Microneedling",
                "rolling_scar_reduction_90d": "28%",
                "boxcar_sig": "NS"
            },
            {
                "platform": "CO2RE Fractional Laser",
                "rolling_scar_reduction_90d": "26%",
                "boxcar_sig": "NS"
            },
            {
                "platform": "Halo Hybrid Fractional Laser",
                "rolling_scar_reduction_90d": "25%",
                "boxcar_sig": "NS"
            }
        ],
        "tags": [
            "morpheus8",
            "rf-microneedling",
            "acne-scar",
            "device-comparison"
        ],
        "entities": [
            "Morpheus8",
            "Exceed Microneedling",
            "CO2RE Fractional Laser",
            "Halo Hybrid Fractional Laser"
        ],
        "publishedAt": "2026-03-21",
        "isFeatured": false,
        "trendScore": 79
    },
    {
        "id": "treatment-ipl-rf-rosacea",
        "category": "treatment_outcomes",
        "tier": "standard",
        "title": "Combination Energy Protocols: Radiofrequency Added to IPL for Rosacea",
        "summary": "Multi-modality protocol analysis of 290 rosacea patients comparing IPL-only series (BBL HERO, Lumecca IPL) against IPL plus radiofrequency (TempSure Envi, XERF) shows combination protocols deliver 31% greater erythema score improvement at 12 weeks. The incremental gain concentrates almost entirely in moderate-to-severe baseline cases. Mild rosacea (grade 1-2) shows no statistically significant benefit from adding RF.",
        "preview": "Among 290 rosacea patients, IPL plus RF yields 31% greater erythema improvement at 12 weeks versus IPL alone, driven by moderate-to-severe baselines; mild disease shows no significant RF benefit.",
        "content": {
            "keyFinding": "Adding RF to IPL improves erythema scores at 12 weeks by about a third versus IPL alone, but only moderate-to-severe baselines meaningfully benefit.",
            "supportingFindings": [
                "Twelve-week mean erythema index improvement is 31% higher for combination arms versus IPL-only when pooling BBL HERO and Lumecca cohorts.",
                "Moderate-to-severe IGA strata account for the majority of the incremental effect size.",
                "Mild (grades 1-2) cohorts show overlapping confidence intervals between IPL-only and IPL+RF.",
                "RF adjuncts were primarily TempSure Envi and XERF under conservative temperature caps."
            ],
            "recommendation": "Reserve combination IPL+RF for erythematous moderate-to-severe rosacea. For mild presentations, default to IPL-only series to reduce cost, time, and thermal load.",
            "limitations": "Concurrent topical prescriptions were not fully controlled. RF device assignment was partially site-driven."
        },
        "evidence": {
            "score": 6.9,
            "breakdown": {
                "sample_size": 1.3,
                "clinic_diversity": 1.3,
                "follow_up": 1.4,
                "completeness": 1.4,
                "image_validation": 1.5
            },
            "clinicCount": 9,
            "patientCount": 290,
            "imageCount": 580
        },
        "provingData": [
            {
                "baseline_severity": "Mild (IGA 1-2)",
                "ipl_only_improvement": "42%",
                "ipl_rf_improvement": "45%",
                "delta_sig": "NS"
            },
            {
                "baseline_severity": "Moderate (IGA 3)",
                "ipl_only_improvement": "38%",
                "ipl_rf_improvement": "52%",
                "delta_sig": "Yes"
            },
            {
                "baseline_severity": "Severe (IGA 4)",
                "ipl_only_improvement": "31%",
                "ipl_rf_improvement": "48%",
                "delta_sig": "Yes"
            }
        ],
        "tags": [
            "combination-therapy",
            "ipl",
            "radiofrequency",
            "rosacea",
            "protocol"
        ],
        "entities": [
            "BBL HERO",
            "Lumecca IPL",
            "TempSure Envi",
            "XERF"
        ],
        "publishedAt": "2026-03-12",
        "isFeatured": false,
        "trendScore": 68
    },
    {
        "id": "cohort-filler-ae",
        "category": "patient_cohorts",
        "tier": "free",
        "title": "Real-World Adverse Event Rates by Filler Brand and Injection Zone",
        "summary": "Aggregated safety data from 4,800 filler treatments stratified by product family (Juvederm, Restylane, RHA, Belotero, Radiesse) and anatomic zone shows vascular occlusion incidence varying threefold between highest- and lowest-risk brands within the same zone, driven primarily by rheological properties (G prime, cohesivity) rather than HA concentration alone. Delayed-onset nodules cluster in lip augmentation with high-cohesivity fillers, suggesting immune-mediated responses amplified by the lip's unique lymphatic anatomy.",
        "preview": "Across 4,800 filler treatments, vascular occlusion incidence varies threefold between highest- and lowest-risk brands within the same zone, tied more to rheology than HA concentration.",
        "content": {
            "keyFinding": "Within-zone vascular occlusion risk spans a threefold range across product families, and delayed nodules concentrate in lips treated with high-cohesivity HA matrices.",
            "supportingFindings": [
                "Stratification by both brand family and zone prevents masking when a brand looks safer overall but risky in specific compartments.",
                "G-prime and cohesivity buckets explain more variance than HA mg/mL alone in multivariate logistic screening.",
                "Lip high-cohesivity cases contribute disproportionately to delayed-onset nodule clusters beyond the first 30 days.",
                "Radiesse and HA families remain separated in modeling because event semantics differ, but HA-only head-to-head still shows brand-level spread."
            ],
            "recommendation": "Maintain zone-specific consent addenda and ultrasound availability for high-G' products, especially in high-risk angiosome intersections. Track delayed lip nodules as a distinct signal distinct from early vascular events.",
            "limitations": "Passive surveillance underestimates minor events. Brand naming follows family labels; specific SKUs within families are partially pooled."
        },
        "evidence": {
            "score": 8.7,
            "breakdown": {
                "sample_size": 1.9,
                "clinic_diversity": 1.7,
                "follow_up": 1.6,
                "completeness": 1.6,
                "image_validation": 1.3
            },
            "clinicCount": 20,
            "patientCount": 4800,
            "imageCount": 960
        },
        "provingData": [
            {
                "zone": "Nasolabial",
                "highest_risk_family": "Varies",
                "occlusion_rate_ratio": "3.0x across brands"
            },
            {
                "zone": "Lip",
                "delayed_nodule_cluster": "High-cohesivity HA",
                "early_vascular_share": "Lower vs NLF"
            },
            {
                "zone": "Temple",
                "occlusion_rate_ratio": "2.1x across brands",
                "driver": "G', vessel depth"
            },
            {
                "zone": "Perioral",
                "delayed_nodule_cluster": "Moderate",
                "driver": "Product rheology"
            }
        ],
        "tags": [
            "safety",
            "adverse-events",
            "filler",
            "pharmacovigilance",
            "post-market"
        ],
        "entities": [
            "Juvederm",
            "Restylane",
            "RHA",
            "Belotero",
            "Radiesse"
        ],
        "publishedAt": "2026-03-27",
        "isFeatured": true,
        "trendScore": 93
    },
    {
        "id": "cohort-coolsculpting-pah",
        "category": "patient_cohorts",
        "tier": "standard",
        "title": "CoolSculpting Paradoxical Adipose Hyperplasia: Incidence and Risk Factor Analysis",
        "summary": "Real-world incidence tracking across 1,800 cryolipolysis treatments identifies a paradoxical adipose hyperplasia rate of 0.39%, higher than manufacturer-cited ~0.025% but lower than many patient-advocacy estimates. Risk factors cluster around male sex (4.2x), abdominal treatment site (3.1x vs. flanks), and repeated treatment of the same zone within eight weeks (2.8x). A modified protocol excluding the highest-risk combination could reduce incidence by an estimated 60%.",
        "preview": "Among 1,800 cryolipolysis treatments, PAH incidence is 0.39%, with strongest risk clustering in male patients, abdominal sites, and repeat same-zone treatment within eight weeks.",
        "content": {
            "keyFinding": "Network PAH incidence is 0.39%, materially above manufacturer rates but below extreme advocacy figures, with multiplicative risk when male sex, abdomen, and rapid repeat treatment co-occur.",
            "supportingFindings": [
                "Crude PAH rate 0.39% across chart-confirmed cases with photographic correlation where available.",
                "Male sex carries 4.2x adjusted odds versus female patients in the same era cohort.",
                "Abdomen vs. flanks shows 3.1x relative risk after controlling for applicator generation.",
                "Repeat same-zone treatment within eight weeks contributes 2.8x risk and frequently overlaps the other two factors."
            ],
            "recommendation": "Institute cooling-off intervals for repeat abdomen treatments in male patients unless anatomy strongly favors retreatment. Document PAH counseling explicitly in high-risk combinations.",
            "limitations": "Case ascertainment relies on return visits; subclinical thickening may be missed. Applicator generation mix changed during the observation window."
        },
        "evidence": {
            "score": 7.6,
            "breakdown": {
                "sample_size": 1.6,
                "clinic_diversity": 1.5,
                "follow_up": 1.5,
                "completeness": 1.4,
                "image_validation": 1.2
            },
            "clinicCount": 14,
            "patientCount": 1800,
            "imageCount": 450
        },
        "provingData": [
            {
                "factor": "Male sex",
                "odds_ratio": "4.2x",
                "note": "Adjusted"
            },
            {
                "factor": "Abdomen vs flanks",
                "odds_ratio": "3.1x",
                "note": "Same applicator class"
            },
            {
                "factor": "Repeat same zone <8 wk",
                "odds_ratio": "2.8x",
                "note": "Overlaps other risks"
            },
            {
                "factor": "Combined high-risk profile",
                "estimated_pah_share": "~35% of cases",
                "protocol_fix_potential": "~60% reduction est."
            }
        ],
        "tags": [
            "coolsculpting",
            "pah",
            "adverse-event",
            "body-contouring",
            "risk-factor"
        ],
        "entities": [
            "CoolSculpting",
            "Paradoxical Adipose Hyperplasia",
            "Cryolipolysis"
        ],
        "publishedAt": "2026-03-16",
        "isFeatured": false,
        "trendScore": 76
    },
    {
        "id": "market-glp1-demand",
        "category": "market_trends",
        "tier": "free",
        "title": "Post-GLP-1 Aesthetic Demand Shift: Procedure Volume Changes After Significant Weight Loss",
        "summary": "Cross-referencing patient intake records with self-reported GLP-1 agonist use (semaglutide, tirzepatide) across 2,200 patients reveals a predictable demand cascade: skin tightening consultations surge 3.1x at months 6-9 of GLP-1 use, facial revolumizing 2.4x at months 9-12, and body contouring refinement 1.8x at months 12-18. The sequential pattern suggests an emerging post-GLP-1 aesthetic journey with distinct treatment windows.",
        "preview": "Among 2,200 patients, self-reported GLP-1 use aligns with a demand cascade: skin tightening up 3.1x at months 6-9, revolumizing 2.4x at 9-12, and body refinement 1.8x at 12-18.",
        "content": {
            "keyFinding": "GLP-1-associated weight change produces a time-ordered surge in tightening, revolumizing, and body refinement consults rather than a single undifferentiated spike.",
            "supportingFindings": [
                "Months 6-9 show a 3.1x lift in skin tightening consultations versus matched non-GLP controls.",
                "Months 9-12 show a 2.4x lift in facial revolumizing consults as facial fat shifts become more visible.",
                "Months 12-18 show a 1.8x lift in body contouring refinement visits as stabilization and skin redundancy dominate concerns.",
                "Sequence persistence holds when excluding patients who also underwent bariatric surgery."
            ],
            "recommendation": "Bundle educational content and service lines into a staged post-GLP pathway instead of a one-size package. Train schedulers to anticipate tightening-heavy intakes in the second half of the first year of use.",
            "limitations": "GLP-1 exposure is self-reported and dose data are sparse. Matching controls are propensity-based, not randomized."
        },
        "evidence": {
            "score": 8.4,
            "breakdown": {
                "sample_size": 1.8,
                "clinic_diversity": 1.7,
                "follow_up": 1.7,
                "completeness": 1.5,
                "image_validation": 1.1
            },
            "clinicCount": 18,
            "patientCount": 2200,
            "imageCount": 550
        },
        "provingData": [
            {
                "window": "Mo 6-9",
                "consult_type": "Skin tightening",
                "lift_vs_control": "3.1x"
            },
            {
                "window": "Mo 9-12",
                "consult_type": "Facial revolumizing",
                "lift_vs_control": "2.4x"
            },
            {
                "window": "Mo 12-18",
                "consult_type": "Body contour refinement",
                "lift_vs_control": "1.8x"
            }
        ],
        "tags": [
            "glp-1",
            "demand-shift",
            "skin-tightening",
            "body-contouring",
            "market-sizing"
        ],
        "entities": [
            "Semaglutide",
            "Tirzepatide",
            "Skin Tightening",
            "Facial Volume"
        ],
        "publishedAt": "2026-03-25",
        "isFeatured": false,
        "trendScore": 90
    },
    {
        "id": "market-wallet-share",
        "category": "market_trends",
        "tier": "standard",
        "title": "Aesthetic Spending per Patient: Annual Wallet Share by Treatment Category",
        "summary": "De-identified billing analysis across 16 clinics shows median annual aesthetic spend of $3,200 per active patient, with neurotoxins capturing 31% of wallet share, dermal fillers 28%, energy-based devices 22%, medical-grade skincare 12%, and regenerative treatments 7%. Patients using three or more treatment categories spend 2.7x more annually than single-category patients and show 84% year-over-year retention versus 52% for single-category.",
        "preview": "Billing across 16 clinics shows $3,200 median annual spend per active patient; neurotoxin 31%, filler 28%, energy 22%, skincare 12%, regenerative 7%. Multi-category patients spend 2.7x more with 84% YoY retention vs 52% single-category.",
        "content": {
            "keyFinding": "Wallet share concentrates on neurotoxin and filler, but multi-category patients dramatically outspend and retain at much higher rates than single-modality patients.",
            "supportingFindings": [
                "Median annual spend is $3,200 among active patients with at least one paid aesthetic encounter in the year.",
                "Category shares: neurotoxin 31%, filler 28%, energy devices 22%, medical-grade skincare 12%, regenerative 7%.",
                "Patients active in three or more categories spend 2.7x more annually than those confined to one category.",
                "Year-over-year retention is 84% for multi-category patients versus 52% for single-category patients."
            ],
            "recommendation": "Design intentional cross-sell pathways that move stable toxin patients into energy or skincare within the first two quarters to capture higher LTV before churn.",
            "limitations": "Billing may miss cash-pay bundles run through retail POS. Skincare capture depends on inventory integration quality."
        },
        "evidence": {
            "score": 7.8,
            "breakdown": {
                "sample_size": 1.8,
                "clinic_diversity": 1.6,
                "follow_up": 1.5,
                "completeness": 1.5,
                "image_validation": 0.6
            },
            "clinicCount": 16,
            "patientCount": 5400,
            "imageCount": 0
        },
        "provingData": [
            {
                "category": "Neurotoxin",
                "wallet_share_pct": "31%"
            },
            {
                "category": "Dermal filler",
                "wallet_share_pct": "28%"
            },
            {
                "category": "Energy devices",
                "wallet_share_pct": "22%"
            },
            {
                "category": "Medical-grade skincare",
                "wallet_share_pct": "12%"
            },
            {
                "category": "Regenerative",
                "wallet_share_pct": "7%"
            }
        ],
        "tags": [
            "wallet-share",
            "spending",
            "cross-sell",
            "patient-economics"
        ],
        "entities": [
            "Neurotoxin",
            "Dermal Filler",
            "Energy Device",
            "Skincare"
        ],
        "publishedAt": "2026-03-19",
        "isFeatured": false,
        "trendScore": 80
    },
    {
        "id": "treatment-skincare-compliance",
        "category": "treatment_outcomes",
        "tier": "standard",
        "title": "Skincare Compliance Impact on Procedure Outcomes: Pre- and Post-Treatment Regimen Analysis",
        "summary": "Matched comparison of 1,100 patients undergoing laser resurfacing, chemical peels, and RF microneedling, half with documented medical-grade skincare compliance (Obagi, SkinMedica, ZO Skin Health) and half without, shows compliant patients achieving 23% greater improvement in CV-measured texture scores at 12 weeks and 31% fewer post-inflammatory hyperpigmentation events. The effect is dose-dependent: combined pre-treatment priming and post-treatment maintenance delivers nearly double the benefit of post-treatment products alone.",
        "preview": "Among 1,100 matched procedural patients, documented medical-grade skincare compliance yields 23% greater texture improvement at 12 weeks and 31% fewer PIH events.",
        "content": {
            "keyFinding": "Documented compliance with medical-grade regimens amplifies texture gains and cuts PIH events, with pre plus post protocols nearly doubling the marginal benefit versus post alone.",
            "supportingFindings": [
                "CV texture scores at 12 weeks improve 23% more in compliant versus non-compliant matches.",
                "PIH event rates drop 31% in the compliant arm under the same device settings and Fitzpatrick strata.",
                "Pre-treatment priming plus post-treatment maintenance approximates twice the incremental gain of post-treatment-only counseling.",
                "Effects hold across laser resurfacing, medium-depth peels, and RF microneedling subsamples."
            ],
            "recommendation": "Operationalize compliance tracking (pickup verification or digital check-ins) and default to pre+post bundles for higher-Fitzpatrick resurfacing patients.",
            "limitations": "Compliance is partly inferred from retail pickup logs; true at-home usage is not directly observed."
        },
        "evidence": {
            "score": 7.5,
            "breakdown": {
                "sample_size": 1.6,
                "clinic_diversity": 1.5,
                "follow_up": 1.5,
                "completeness": 1.4,
                "image_validation": 1.5
            },
            "clinicCount": 12,
            "patientCount": 1100,
            "imageCount": 2200
        },
        "provingData": [
            {
                "regimen": "None documented",
                "texture_improvement_index": "100",
                "pih_events_per_100": "4.1"
            },
            {
                "regimen": "Post-tx only",
                "texture_improvement_index": "123",
                "pih_events_per_100": "3.3"
            },
            {
                "regimen": "Pre + post",
                "texture_improvement_index": "146",
                "pih_events_per_100": "2.8"
            }
        ],
        "tags": [
            "skincare",
            "compliance",
            "pre-treatment",
            "post-treatment",
            "protocol"
        ],
        "entities": [
            "Obagi",
            "SkinMedica",
            "ZO Skin Health",
            "PIH"
        ],
        "publishedAt": "2026-03-14",
        "isFeatured": false,
        "trendScore": 74
    },
    {
        "id": "provider-injector-learning",
        "category": "provider_intelligence",
        "tier": "premium",
        "title": "Injector Experience vs. Outcome Quality: Learning Curve Analysis Across 3,200 Treatments",
        "summary": "Correlating injector treatment volume with CV-assessed aesthetic outcome scores reveals a steep learning curve through the first 500 lifetime procedures, a plateau between 500-1,500, and no further gains beyond 1,500, suggesting that after roughly 18-24 months of full-time injecting, additional volume adds consistency rather than quality improvement. Injectors who completed structured cadaver-based training programs reached the plateau approximately 200 procedures earlier than self-taught peers.",
        "preview": "Across 3,200 treatments, CV outcome scores climb through the first 500 injector lifetime procedures, plateau 500-1,500, and flatten after 1,500; cadaver-trained injectors hit plateau ~200 procedures sooner.",
        "content": {
            "keyFinding": "Aesthetic quality scores improve rapidly until about 500 lifetime procedures, level through 1,500, and do not meaningfully rise thereafter; formal cadaver courses shift the plateau left by ~200 cases.",
            "supportingFindings": [
                "Marginal CV score gain per 100 cases is highest below 500 lifetime procedures.",
                "Between 500 and 1,500 cases, gains narrow to consistency improvements rather than mean score jumps.",
                "Beyond 1,500 cases, central tendency of scores is flat though variance tightens slightly.",
                "Structured cadaver-based training predicts reaching the plateau band roughly 200 procedures earlier than self-taught injectors with similar annual throughput."
            ],
            "recommendation": "Front-load supervised case banks and cadaver labs before independent billing thresholds. Avoid using raw case volume alone as a proxy for mastery after the plateau band.",
            "limitations": "Procedure mix differs by injector seniority; case difficulty is not fully normalized."
        },
        "evidence": {
            "score": 7.1,
            "breakdown": {
                "sample_size": 1.8,
                "clinic_diversity": 1.5,
                "follow_up": 1.3,
                "completeness": 1.3,
                "image_validation": 1.4
            },
            "clinicCount": 14,
            "patientCount": 3200,
            "imageCount": 3200
        },
        "provingData": [
            {
                "lifetime_cases": "0-500",
                "median_outcome_score": "6.4",
                "marginal_gain": "High"
            },
            {
                "lifetime_cases": "500-1500",
                "median_outcome_score": "7.8",
                "marginal_gain": "Moderate"
            },
            {
                "lifetime_cases": "1500+",
                "median_outcome_score": "7.9",
                "marginal_gain": "Flat"
            },
            {
                "training_path": "Cadaver-based formal",
                "procedures_to_plateau_band": "~300-450 est."
            },
            {
                "training_path": "Self-taught typical",
                "procedures_to_plateau_band": "~500-650 est."
            }
        ],
        "tags": [
            "injector",
            "experience",
            "learning-curve",
            "benchmarking",
            "training"
        ],
        "entities": [
            "Injector",
            "Treatment Session",
            "Outcome Score"
        ],
        "publishedAt": "2026-03-11",
        "isFeatured": false,
        "trendScore": 70
    },
    {
        "id": "provider-filler-variance",
        "category": "provider_intelligence",
        "tier": "premium",
        "title": "Same Product, Different Hands: Provider Variability in Filler Aesthetic Scores",
        "summary": "Holding product constant (Juvederm Ultra Plus XC for nasolabial folds) across 460 treatments by 32 injectors at 10 clinics, top-quartile injectors achieve aesthetic scores 41% higher than bottom-quartile using identical product, dose, and indication. The variance correlates with three measurable technique factors: injection plane consistency, linear threading percentage versus bolus, and symmetry of volume placement.",
        "preview": "With Juvederm Ultra Plus XC for nasolabial folds held constant, top-quartile injectors score 41% higher than bottom-quartile; variance tracks plane consistency, threading vs bolus, and symmetry.",
        "content": {
            "keyFinding": "After controlling for product, dose, and indication, top-quartile injectors still produce CV aesthetic scores 41% above bottom quartile, explained largely by plane discipline, threading ratio, and bilateral symmetry.",
            "supportingFindings": [
                "460 treatments across 32 injectors and 10 clinics isolate product to Ultra Plus XC in the nasolabial indication.",
                "Top vs bottom quartile spread remains 41% when clustering standard errors by injector.",
                "Injection plane consistency scores explain the largest share of between-injector variance.",
                "Higher linear threading fraction and balanced left-right volumetric maps associate with higher aesthetic scores at fixed total volume."
            ],
            "recommendation": "Use ultrasound or standardized photography audits to coach plane consistency and threading preference rather than only reviewing VAS satisfaction. Pair junior injectors with mentors who score high on symmetry metrics.",
            "limitations": "Blinding of photographers to injector identity was imperfect at some sites."
        },
        "evidence": {
            "score": 7.3,
            "breakdown": {
                "sample_size": 1.5,
                "clinic_diversity": 1.4,
                "follow_up": 1.3,
                "completeness": 1.4,
                "image_validation": 1.5
            },
            "clinicCount": 10,
            "patientCount": 460,
            "imageCount": 920
        },
        "provingData": [
            {
                "injector_quartile": "Top",
                "mean_aesthetic_score": "8.5",
                "plane_consistency_index": "High"
            },
            {
                "injector_quartile": "Bottom",
                "mean_aesthetic_score": "6.0",
                "plane_consistency_index": "Low"
            },
            {
                "technique_factor": "Threading vs bolus",
                "correlation_with_score": "Strong+"
            },
            {
                "technique_factor": "Bilateral symmetry",
                "correlation_with_score": "Strong"
            }
        ],
        "tags": [
            "provider-variation",
            "filler",
            "technique",
            "skill-gap",
            "quality"
        ],
        "entities": [
            "Juvederm Ultra Plus XC",
            "Nasolabial Fold",
            "Injector"
        ],
        "publishedAt": "2026-03-09",
        "isFeatured": false,
        "trendScore": 71
    },
    {
        "id": "treatment-xerf-neck",
        "category": "treatment_outcomes",
        "tier": "premium",
        "title": "XERF Dual-Frequency RF vs. Ultherapy, TempSure Envi, and NuFACE Trinity+ for Neck Laxity: 6-Month Outcomes",
        "summary": "Standardized CV analysis of cervicomental angle improvement across 540 patients compares Cynosure Lutronic XERF, FDA-cleared August 2025 using dual-frequency monopolar RF (6.78 MHz + 2 MHz), against Ultherapy, TempSure Envi, and NuFACE Trinity+ at six months post-treatment. XERF delivers comparable lifting to Ultherapy in mild-to-moderate laxity with significantly lower pain scores, while NuFACE Trinity+'s microcurrent-only approach leaves it trailing on true submental tightening.",
        "preview": "At six months across 540 patients, XERF matches Ultherapy lifting for mild-to-moderate neck laxity with lower pain scores; NuFACE Trinity+ lags on submental tightening due to shallower energy delivery.",
        "content": {
            "keyFinding": "XERF achieves Ultherapy-comparable cervicomental angle gains for mild-to-moderate laxity with better tolerability, while NuFACE Trinity+ underperforms on submental tightening.",
            "supportingFindings": [
                "Six-month CV cervicomental angle deltas for XERF overlap Ultherapy confidence intervals in mild-to-moderate strata.",
                "Patient-reported pain peaks are lower for XERF than Ultherapy under protocolized analgesia rules.",
                "TempSure Envi remains competitive but trends slightly behind Ultherapy/XERF in the submental vector specifically.",
                "NuFACE Trinity+'s microcurrent delivery corresponds with weaker submental tightening despite acceptable jawline skin quality gains."
            ],
            "recommendation": "Position XERF where patients prioritize lifting with lower pain burden; reserve Ultherapy for cases needing micro-focused depth that XERF protocols have not yet matched in your hands.",
            "limitations": "Six-month horizon misses longer durability questions. Operators had uneven prior device experience."
        },
        "evidence": {
            "score": 7.4,
            "breakdown": {
                "sample_size": 1.6,
                "clinic_diversity": 1.5,
                "follow_up": 1.5,
                "completeness": 1.4,
                "image_validation": 1.4
            },
            "clinicCount": 12,
            "patientCount": 540,
            "imageCount": 1080
        },
        "provingData": [
            {
                "device": "XERF",
                "cma_improvement_mo6": "Strong",
                "pain_score": "Lower"
            },
            {
                "device": "Ultherapy",
                "cma_improvement_mo6": "Strong",
                "pain_score": "Higher"
            },
            {
                "device": "TempSure Envi",
                "cma_improvement_mo6": "Moderate+",
                "pain_score": "Moderate"
            },
            {
                "device": "NuFACE Trinity+",
                "submental_tightening": "Trailing",
                "modality": "Microcurrent"
            }
        ],
        "tags": [
            "xerf",
            "neck-laxity",
            "ultherapy",
            "thermage",
            "device-comparison"
        ],
        "entities": [
            "XERF",
            "Ultherapy",
            "TempSure Envi",
            "NuFACE Trinity+"
        ],
        "publishedAt": "2026-03-07",
        "isFeatured": false,
        "trendScore": 73
    },
    {
        "id": "treatment-bbl-acne-iga",
        "category": "treatment_outcomes",
        "tier": "premium",
        "title": "Sciton BBL Forever Clear Acne Clearance Rates Stratified by Baseline IGA Score",
        "summary": "Severity-stratified analysis of 860 acne patients treated with Sciton's three-step Forever Clear BBL protocol (420nm blue light, yellow light, infrared) across six sessions shows IGA-2 (mild) patients reaching clearance at 92% by session four, but IGA-4 (severe) patients plateau at 58% even after the full course. The gap suggests BBL HEROic processing speed gains do not translate to efficacy gains for severe inflammatory acne, where bacterial load and sebaceous activity may exceed phototherapy's therapeutic ceiling.",
        "preview": "Among 860 Forever Clear BBL patients, mild (IGA-2) cases hit 92% clearance by session four, while severe (IGA-4) cases plateau at 58% after six sessions.",
        "content": {
            "keyFinding": "Forever Clear achieves very high early clearance for mild IGA-2 acne but severe IGA-4 patients stall near 58% despite full protocols, implying a phototherapy ceiling for heavy inflammatory disease.",
            "supportingFindings": [
                "IGA-2 cohorts reach 92% investigator-assessed clearance by the fourth of six sessions.",
                "IGA-4 cohorts plateau near 58% clearance even after completing all six sessions.",
                "Intermediate severities fall on a graded slope between those anchors.",
                "Faster HEROic pulse workflows improve throughput without shifting severe-acne efficacy endpoints in this dataset."
            ],
            "recommendation": "Combine pharmacologic escalation for IGA-4 patients rather than relying on BBL alone. Use early session response to re-triage severe patients before investing the full phototherapy bundle.",
            "limitations": "Adjunct topicals and oral therapies were not held constant. Teen vs adult mix may bias clearance definitions."
        },
        "evidence": {
            "score": 8.1,
            "breakdown": {
                "sample_size": 1.7,
                "clinic_diversity": 1.6,
                "follow_up": 1.6,
                "completeness": 1.5,
                "image_validation": 1.5
            },
            "clinicCount": 14,
            "patientCount": 860,
            "imageCount": 1720
        },
        "provingData": [
            {
                "baseline_iga": "2 (mild)",
                "clearance_by_session_4": "92%",
                "clearance_full_course": "96%"
            },
            {
                "baseline_iga": "3 (moderate)",
                "clearance_by_session_4": "71%",
                "clearance_full_course": "82%"
            },
            {
                "baseline_iga": "4 (severe)",
                "clearance_by_session_4": "44%",
                "clearance_full_course": "58%"
            }
        ],
        "tags": [
            "bbl",
            "acne",
            "iga-score",
            "severity-stratification",
            "forever-clear"
        ],
        "entities": [
            "BBL Forever Clear",
            "IGA",
            "Acne Vulgaris"
        ],
        "publishedAt": "2026-03-22",
        "isFeatured": false,
        "trendScore": 88
    },
    {
        "id": "product-dysport-onset",
        "category": "product_substance",
        "tier": "free",
        "title": "Dysport Onset and Duration: CV-Quantified Wrinkle Reduction Curves vs. Four Competing Neurotoxins",
        "summary": "Frame-by-frame CV analysis plotting glabellar wrinkle severity from Day 1 through Month 6 across Dysport, Botox, Xeomin, DAXXIFY, and Jeuveau confirms Dysport's faster onset, with measurable reduction at Day 2 versus Day 5 for Botox, and reveals a crossover point where DAXXIFY, lagging all competitors through Week 2, overtakes them by Month 4 and sustains reduction through Month 6. At peak efficacy (Weeks 4-8), all five neurotoxins converge within 6% of each other.",
        "preview": "CV curves from Day 1 to Month 6 show Dysport onset at Day 2 vs Day 5 for Botox; DAXXIFY lags through Week 2 then leads from Month 4 onward; peak Weeks 4-8 shows all five within 6%.",
        "content": {
            "keyFinding": "Dysport separates on early onset, DAXXIFY separates on late durability after a slow start, and the five brands converge within a tight band at peak weeks 4-8.",
            "supportingFindings": [
                "Mean time to first meaningful glabellar reduction is Day 2 for Dysport versus Day 5 for Botox under the same imaging cadence.",
                "DAXXIFY remains the slowest to initial response through Week 2 but surpasses competitors by Month 4 and holds through Month 6.",
                "Xeomin and Jeuveau track mid-pack early, without replicating Dysport's Day 2 signal.",
                "Between weeks 4 and 8, maximal effect estimates for all five toxins fall within a 6% band, indicating class-comparable peaks once onset differences wash out."
            ],
            "recommendation": "Match product choice to scheduling: Dysport for rapid social deadlines, DAXXIFY when patients tolerate slower onset for extended late benefit, Botox/Xeomin/Jeuveau for conventional timelines.",
            "limitations": "Dilution and unit ratio conversions across brands are standardized analytically but remain clinically debated."
        },
        "evidence": {
            "score": 8.8,
            "breakdown": {
                "sample_size": 1.9,
                "clinic_diversity": 1.7,
                "follow_up": 1.8,
                "completeness": 1.6,
                "image_validation": 1.6
            },
            "clinicCount": 18,
            "patientCount": 1640,
            "imageCount": 4920
        },
        "provingData": [
            {
                "toxin": "Dysport",
                "first_meaningful_reduction": "Day 2",
                "peak_weeks_4_8": "Within 6% class mean"
            },
            {
                "toxin": "Botox",
                "first_meaningful_reduction": "Day 5",
                "peak_weeks_4_8": "Within 6% class mean"
            },
            {
                "toxin": "DAXXIFY",
                "week_2_rank": "Slowest",
                "month_4_onward": "Leads"
            },
            {
                "toxin": "Xeomin",
                "first_meaningful_reduction": "Day 3-4",
                "peak_weeks_4_8": "Within 6% class mean"
            },
            {
                "toxin": "Jeuveau",
                "first_meaningful_reduction": "Day 3-4",
                "peak_weeks_4_8": "Within 6% class mean"
            }
        ],
        "tags": [
            "dysport",
            "neurotoxin",
            "onset",
            "cv-analysis",
            "head-to-head"
        ],
        "entities": [
            "Dysport",
            "Botox",
            "DAXXIFY",
            "Xeomin",
            "Jeuveau"
        ],
        "publishedAt": "2026-03-29",
        "isFeatured": true,
        "trendScore": 97
    }
];


// ══════════════════════════════════════
//  COHORT DATA GENERATOR
// ══════════════════════════════════════

function mulberry32(seed) {
    return function() {
        seed |= 0; seed = seed + 0x6D2B79F5 | 0;
        let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

function hashStr(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i) | 0;
    return h;
}

const CLINIC_POOL = [
    'Radiance Skin Clinic', 'Vitality Med Spa', 'Luxe Aesthetics',
    'Horizon Dermatology', 'Clarity Skin Center', 'Pure Aesthetics',
    'Rejuvenate Clinic', 'Prime Skin Studio', 'Evolve Med Spa',
    'SkinScience Institute', 'Elite Aesthetic Medicine', 'The Derm Collective',
    'Artistry Aesthetics', 'Nova Skin Lab', 'Beacon Aesthetics',
    'Atlas Dermatology', 'Summit Skin Clinic', 'Crest Med Spa',
];

// ══════════════════════════════════════
//  SYNTHETIC POOL (Insight Generator)
// ══════════════════════════════════════

const POOL_CONDITIONS = [
    'Acne vulgaris', 'Actinic damage', 'Androgenetic alopecia', 'Atopic dermatitis',
    'Cellulite', 'Diffuse hair thinning', 'Enlarged pores', 'Hormonal acne',
    'Hyperlipidemia', 'Hyperpigmentation', 'Hypertrophic scarring', 'Insulin resistance',
    'Keratosis pilaris', 'Melasma', 'Nasolabial fold laxity', 'Neck skin laxity',
    'Periorbital wrinkles', 'Photoaging', 'Rosacea', 'Submental fullness',
    'Uneven skin texture', 'Vitamin D deficiency', 'Wrinkles',
];
const POOL_SUBSTANCES = [
    'Alpha hydroxy acid', 'Azelaic acid', 'BPC-157', 'Botulinum toxin type A',
    'Coenzyme Q10', 'Copper peptide complex', 'Deoxycholic acid', 'Exosome complex',
    'Glutathione', 'Hydroquinone', 'Hyaluronic acid booster', 'Hyaluronic acid filler',
    'L-Ascorbic acid', 'Minoxidil', 'NAD+', 'Niacinamide', 'Nicotinamide mononucleotide',
    'Omega-3 fatty acids', 'Platelet-rich plasma', 'Retinol', 'Semaglutide',
    'Spironolactone', 'Testosterone cypionate', 'Tirzepatide', 'Tranexamic acid',
    'Tretinoin', 'Vitamin D3',
];
const POOL_DEVICES = [
    'BBL HERO', 'CO2RE Fractional Laser', 'CoolSculpting Elite', 'DermLite DL4',
    'EmSculpt NEO', 'Exceed Microneedling', 'Halo Hybrid Fractional Laser',
    'HydraFacial Elite', 'Hologic Horizon DXA', 'Lumecca IPL', 'Morpheus8',
    'NuFACE Trinity+', 'Celluma Pro LED', 'PicoSure Pro', 'TempSure Envi',
    'Ultherapy', 'VISIA Skin Analysis', 'XERF',
];
const POOL_ANATOMY = [
    'Abdomen', 'Cheeks', 'Chin', 'Decolletage', 'Flanks', 'Forehead', 'Full Face',
    'Hands', 'Inner thighs', 'Jawline', 'Lips', 'Nasolabial folds', 'Neck',
    'Periorbital area', 'Scalp', 'Submental area', 'Temples', 'Thighs', 'Upper arms',
];
const POOL_ENCOUNTER_TYPES = ['consultation', 'follow_up', 'lab_visit', 'procedure_visit', 'telehealth', 'other'];
const POOL_INTERVENTION_CATS = ['lifestyle_plan', 'procedure', 'product_regimen', 'therapy_protocol'];

// Weighted correlation tables: condition -> likely substances/devices/anatomy (indices into POOL_* arrays)
// POOL_SUBSTANCES: 0=Alpha hydroxy acid 1=Azelaic acid 2=BPC-157 3=Botulinum toxin type A
//   4=Coenzyme Q10 5=Copper peptide complex 6=Deoxycholic acid 7=Exosome complex
//   8=Glutathione 9=Hydroquinone 10=HA booster 11=HA filler 12=L-Ascorbic acid
//   13=Minoxidil 14=NAD+ 15=Niacinamide 16=NMN 17=Omega-3 18=PRP 19=Retinol
//   20=Semaglutide 21=Spironolactone 22=Testosterone cypionate 23=Tirzepatide
//   24=Tranexamic acid 25=Tretinoin 26=Vitamin D3
// POOL_DEVICES: 0=BBL HERO 1=CO2RE Frac 2=CoolSculpting Elite 3=DermLite DL4
//   4=EmSculpt NEO 5=Exceed Microneedling 6=Halo Hybrid Frac 7=HydraFacial Elite
//   8=Hologic DXA 9=Lumecca IPL 10=Morpheus8 11=NuFACE Trinity+ 12=Celluma Pro LED
//   13=PicoSure Pro 14=TempSure Envi 15=Ultherapy 16=VISIA 17=XERF
// POOL_ANATOMY: 0=Abdomen 1=Cheeks 2=Chin 3=Decolletage 4=Flanks 5=Forehead
//   6=Full Face 7=Hands 8=Inner thighs 9=Jawline 10=Lips 11=Nasolabial folds
//   12=Neck 13=Periorbital area 14=Scalp 15=Submental area 16=Temples 17=Thighs 18=Upper arms
const CONDITION_PROFILES = {
    'Acne vulgaris':            { substances: [1,15,21,25],       devices: [7,13],              anatomy: [1,6] },
    'Actinic damage':           { substances: [0,12,19,25],       devices: [0,6,13],            anatomy: [3,6,7] },
    'Androgenetic alopecia':    { substances: [13,18,21],         devices: [12],                anatomy: [14] },
    'Atopic dermatitis':        { substances: [15,19,26],         devices: [12],                anatomy: [6,18] },
    'Cellulite':                { substances: [2,5],              devices: [4,10,14],           anatomy: [0,8,17] },
    'Diffuse hair thinning':    { substances: [13,18,22,26],      devices: [12],                anatomy: [14] },
    'Enlarged pores':           { substances: [0,15,19,25],       devices: [7,10],              anatomy: [1,6] },
    'Hormonal acne':            { substances: [1,21,25],          devices: [7,12],              anatomy: [1,6,9] },
    'Hyperlipidemia':           { substances: [17,20,23],         devices: [],                  anatomy: [] },
    'Hyperpigmentation':        { substances: [9,12,24,25],       devices: [0,9,13],            anatomy: [1,5,6] },
    'Hypertrophic scarring':    { substances: [3,5,11],           devices: [1,5,10],            anatomy: [1,6] },
    'Insulin resistance':       { substances: [16,20,23],         devices: [8],                 anatomy: [] },
    'Keratosis pilaris':        { substances: [0,19,25],          devices: [7],                 anatomy: [18] },
    'Melasma':                  { substances: [9,12,24],          devices: [0,13],              anatomy: [1,5,6] },
    'Nasolabial fold laxity':   { substances: [3,11],             devices: [10,15,17],          anatomy: [11] },
    'Neck skin laxity':         { substances: [3,7,11],           devices: [10,15,17],          anatomy: [12] },
    'Periorbital wrinkles':     { substances: [3,5,19,25],        devices: [11,13],             anatomy: [13,16] },
    'Photoaging':               { substances: [12,19,25],         devices: [0,6,13],            anatomy: [3,6,7] },
    'Rosacea':                  { substances: [1,15],             devices: [0,9],               anatomy: [1,6] },
    'Submental fullness':       { substances: [6],                devices: [2],                 anatomy: [2,15] },
    'Uneven skin texture':      { substances: [0,19,25],          devices: [5,7,10],            anatomy: [1,3,6] },
    'Vitamin D deficiency':     { substances: [26],               devices: [],                  anatomy: [] },
    'Wrinkles':                 { substances: [3,11,19,25],       devices: [10,15,17],          anatomy: [5,6,13,16] },
};

function generateSyntheticPool() {
    const rng = mulberry32(20260414);
    const pick = (arr) => arr[Math.floor(rng() * arr.length)];
    const ri = (min, max) => Math.floor(rng() * (max - min + 1)) + min;

    const SIZE = 8247;
    const pool = new Array(SIZE);
    const now = new Date('2026-04-14');

    for (let i = 0; i < SIZE; i++) {
        const condition = pick(POOL_CONDITIONS);
        const profile = CONDITION_PROFILES[condition];

        // Correlated substance: 70% from profile, 30% random
        let substance;
        if (profile.substances.length && rng() < 0.7) {
            substance = POOL_SUBSTANCES[pick(profile.substances)];
        } else {
            substance = pick(POOL_SUBSTANCES);
        }

        // Correlated device: 70% from profile, 30% random (null 20% of time if no profile devices)
        let device;
        if (profile.devices.length && rng() < 0.7) {
            device = POOL_DEVICES[pick(profile.devices)];
        } else {
            device = rng() < 0.8 ? pick(POOL_DEVICES) : null;
        }

        // Correlated anatomy: 75% from profile
        let anatomy;
        if (profile.anatomy.length && rng() < 0.75) {
            anatomy = POOL_ANATOMY[pick(profile.anatomy)];
        } else {
            anatomy = pick(POOL_ANATOMY);
        }

        const d = new Date(now);
        d.setDate(d.getDate() - ri(1, 730));

        const sexRoll = rng();
        pool[i] = {
            patient_id: 'PT-' + String(i + 1).padStart(5, '0'),
            age: ri(18, 82),
            sex_at_birth: sexRoll < 0.75 ? 'female' : 'male',
            clinic: pick(CLINIC_POOL),
            encounter_type: pick(POOL_ENCOUNTER_TYPES),
            occurred_at: d.toISOString().split('T')[0],
            condition,
            intervention_category: pick(POOL_INTERVENTION_CATS),
            substance,
            device,
            anatomy_region: anatomy,
        };
    }
    return pool;
}

const SYNTHETIC_POOL = generateSyntheticPool();

const COHORT_CONFIGS = {
    'market-neuro-switch': {
        age: [22, 72], female: 0.78, months: 18,
        fields: {
            current_brand: ['Botox', 'Dysport', 'Xeomin', 'Jeuveau', 'DAXXIFY'],
            prior_brand: ['Botox', 'Dysport', 'Xeomin', 'Jeuveau', 'DAXXIFY', 'Naive'],
            switch_driver: ['Cost', 'Onset', 'Duration', 'Trial offer', 'Provider rec'],
            multi_brand_cycler: (_row, rng) => (rng() < 0.22 ? 'Yes' : 'No'),
            months_on_brand: { range: [1, 18], dp: 0 },
        },
    },
    'product-biostim-ha': {
        age: [35, 72], female: 0.85, months: 12,
        fields: {
            agent: ['Sculptra PLLA', 'Dilute Radiesse', 'Juvederm Voluma', 'Restylane Lyft'],
            retention_mo6_pct: (row, _r, _p, ri) => {
                if (row.agent.includes('Voluma') || row.agent.includes('Lyft')) return ri(76, 86) + '%';
                if (row.agent.includes('Sculptra')) return ri(64, 78) + '%';
                return ri(68, 80) + '%';
            },
            retention_mo12_pct: (row, _r, _p, ri) => {
                if (row.agent.includes('Voluma')) return ri(36, 48) + '%';
                if (row.agent.includes('Lyft')) return ri(38, 50) + '%';
                if (row.agent.includes('Sculptra')) return ri(62, 74) + '%';
                return ri(54, 64) + '%';
            },
            midface_roi: ['Lateral cheek', 'Medial cheek', 'Anterior cheek vector'],
        },
    },
    'treatment-daxxify-intervals': {
        age: [28, 68], female: 0.81, months: 8,
        fields: {
            region: ['Glabella', 'Frontalis'],
            months_to_recurrence: (row, _r, _p, _ri, rf) =>
                row.region === 'Glabella' ? rf(3.5, 5.8, 1) : rf(3.0, 5.0, 1),
            first_time_toxin: (_row, rng) => (rng() < 0.35 ? 'Yes' : 'No'),
            reached_6mo_plus: (row, rng) => {
                const base = row.first_time_toxin === 'Yes' ? 0.36 : 0.2;
                return rng() < base ? 'Yes' : 'No';
            },
        },
    },
    'provider-device-utilization': {
        age: [25, 65], female: 0.75, months: 8,
        fields: {
            platform: ['BBL HERO', 'Morpheus8', 'HydraFacial Elite', 'Ultherapy', 'Lumecca IPL'],
            utilization_quartile: ['Top', 'Upper-mid', 'Lower-mid', 'Bottom'],
            tx_per_week_mo6: (row, _r, _p, ri) => {
                if (row.utilization_quartile === 'Top') return ri(16, 24);
                if (row.utilization_quartile === 'Upper-mid') return ri(9, 14);
                if (row.utilization_quartile === 'Lower-mid') return ri(4, 8);
                return ri(1, 4);
            },
            week4_on_track: (row, rng) => {
                if (row.utilization_quartile === 'Top') return rng() < 0.86 ? 'Yes' : 'No';
                if (row.utilization_quartile === 'Upper-mid') return rng() < 0.68 ? 'Yes' : 'No';
                if (row.utilization_quartile === 'Lower-mid') return rng() < 0.41 ? 'Yes' : 'No';
                return rng() < 0.18 ? 'Yes' : 'No';
            },
        },
    },
    'treatment-morpheus8-acne': {
        age: [19, 48], female: 0.58, months: 4,
        fields: {
            platform: ['Morpheus8', 'Exceed Microneedling', 'CO2RE Fractional Laser', 'Halo Hybrid Fractional Laser'],
            scar_morphology: ['Rolling', 'Boxcar', 'Mixed'],
            reduction_90d_pct: (row, _r, _p, ri) => {
                if (row.scar_morphology !== 'Rolling') return ri(22, 32) + '%';
                if (row.platform === 'Morpheus8') return ri(28, 40) + '%';
                return ri(22, 30) + '%';
            },
            max_depth_mm_setting: (row, _r, _p, ri) =>
                row.platform === 'Morpheus8' ? ri(4, 8) : ri(2, 5),
        },
    },
    'treatment-ipl-rf-rosacea': {
        age: [24, 62], female: 0.77, months: 4,
        fields: {
            baseline_iga: ['1', '2', '3', '4'],
            protocol: ['IPL only', 'IPL + RF'],
            erythema_improvement_12wk_pct: (row, _r, _p, ri) => {
                const sev = parseInt(row.baseline_iga, 10);
                const base = row.protocol.includes('RF') ? 12 : 0;
                if (sev <= 2) return ri(32 + base, 48 + base) + '%';
                if (sev === 3) return ri(38 + base, 56 + base) + '%';
                return ri(28 + base, 52 + base) + '%';
            },
            device_ipl: ['BBL HERO', 'Lumecca IPL'],
        },
    },
    'cohort-filler-ae': {
        age: [22, 72], female: 0.82, months: 14,
        fields: {
            product_family: ['Juvederm', 'Restylane', 'RHA', 'Belotero', 'Radiesse'],
            zone: ['Lip', 'Nasolabial', 'Temple', 'Perioral', 'Chin'],
            event_type: ['None', 'Early vascular', 'Delayed nodule', 'Tyndall'],
            high_cohesivity: (_row, rng) => (rng() < 0.18 ? 'Yes' : 'No'),
        },
    },
    'cohort-coolsculpting-pah': {
        age: [22, 58], female: 0.62, months: 24,
        fields: {
            sex: (_row, rng) => (rng() < 0.38 ? 'M' : 'F'),
            zone: ['Abdomen', 'Flanks', 'Thighs', 'Chin'],
            repeat_within_8wk: (_row, rng) => (rng() < 0.08 ? 'Yes' : 'No'),
            pah_case: (row, rng) => {
                let risk = 0.0025;
                if (row.sex === 'M') risk *= 4.2;
                if (row.zone === 'Abdomen') risk *= 3.1;
                if (row.repeat_within_8wk === 'Yes') risk *= 2.8;
                return rng() < Math.min(risk * 8, 0.04) ? 'Yes' : 'No';
            },
        },
    },
    'market-glp1-demand': {
        age: [28, 62], female: 0.71, months: 20,
        fields: {
            glp1: ['Semaglutide', 'Tirzepatide', 'None'],
            months_on_glp1: (row, _r, _p, ri) => (row.glp1 === 'None' ? 0 : ri(1, 20)),
            consult_type: ['Skin tightening', 'Facial revolumizing', 'Body refinement', 'Other aesthetic'],
            consult_lift_flag: (row, rng) => {
                if (row.glp1 === 'None') return rng() < 0.12 ? 'Elevated vs control' : 'Baseline';
                const m = row.months_on_glp1;
                if (m >= 6 && m <= 9 && row.consult_type === 'Skin tightening') return rng() < 0.62 ? 'Elevated vs control' : 'Baseline';
                if (m >= 9 && m <= 12 && row.consult_type === 'Facial revolumizing') return rng() < 0.55 ? 'Elevated vs control' : 'Baseline';
                if (m >= 12 && m <= 18 && row.consult_type === 'Body refinement') return rng() < 0.42 ? 'Elevated vs control' : 'Baseline';
                return 'Baseline';
            },
        },
    },
    'market-wallet-share': {
        age: [24, 72], female: 0.79, months: 12,
        fields: {
            active_categories: { range: [1, 5], dp: 0 },
            annual_spend_usd: (row, _r, _p, ri) => {
                const n = row.active_categories;
                const base = ri(1800, 4200);
                if (n >= 3) return Math.round(base * 2.5);
                return base;
            },
            yoy_retained: (row, rng) => {
                if (row.active_categories >= 3) return rng() < 0.84 ? 'Yes' : 'No';
                return rng() < 0.52 ? 'Yes' : 'No';
            },
            top_category: ['Neurotoxin', 'Filler', 'Energy', 'Skincare', 'Regenerative'],
        },
    },
    'treatment-skincare-compliance': {
        age: [28, 68], female: 0.76, months: 4,
        fields: {
            procedure: ['Laser resurfacing', 'Chemical peel', 'RF microneedling'],
            regimen: ['None', 'Post-tx only', 'Pre + post'],
            fitzpatrick: ['II', 'III', 'IV', 'V'],
            texture_score_week12: (row, _r, _p, ri) => {
                if (row.regimen === 'Pre + post') return ri(72, 94);
                if (row.regimen === 'Post-tx only') return ri(62, 86);
                return ri(52, 78);
            },
            pih_event: (row, rng) => {
                let p = 0.041;
                if (row.regimen === 'Pre + post') p *= 0.69;
                else if (row.regimen === 'Post-tx only') p *= 0.8;
                if (row.fitzpatrick === 'V' || row.fitzpatrick === 'IV') p *= 1.35;
                return rng() < p ? 'Yes' : 'No';
            },
        },
    },
    'provider-injector-learning': {
        age: [25, 68], female: 0.73, months: 18,
        fields: {
            lifetime_cases: { range: [120, 2200], dp: 0 },
            training: ['Cadaver-based formal', 'Self-taught typical', 'Hybrid'],
            cv_outcome_score: (row, _r, _p, _ri, rf) => {
                let c = row.lifetime_cases;
                if (row.training === 'Cadaver-based formal') c += 200;
                if (c < 500) return rf(5.8, 7.2, 1);
                if (c < 1500) return rf(7.4, 8.2, 1);
                return rf(7.7, 8.3, 1);
            },
        },
    },
    'provider-filler-variance': {
        age: [32, 74], female: 0.84, months: 6,
        fields: {
            injector_tier: ['Top quartile', 'Mid', 'Bottom quartile'],
            plane_consistency: ['High', 'Medium', 'Low'],
            threading_pct: (row, _r, _p, ri) =>
                row.injector_tier === 'Top quartile' ? ri(62, 88) + '%' : row.injector_tier === 'Bottom quartile' ? ri(18, 42) + '%' : ri(40, 65) + '%',
            aesthetic_score: (row, _r, _p, ri) =>
                row.injector_tier === 'Top quartile' ? ri(78, 92) : row.injector_tier === 'Bottom quartile' ? ri(52, 68) : ri(64, 82),
        },
    },
    'treatment-xerf-neck': {
        age: [38, 72], female: 0.81, months: 7,
        fields: {
            device: ['XERF', 'Ultherapy', 'TempSure Envi', 'NuFACE Trinity+'],
            laxity_grade: ['Mild', 'Moderate'],
            cma_improvement_score: (row, _r, _p, ri) => {
                if (row.device === 'NuFACE Trinity+') return ri(52, 68);
                if (row.device === 'TempSure Envi') return ri(62, 78);
                return ri(70, 88);
            },
            peak_pain_0_10: (row, _r, _p, ri) =>
                row.device === 'Ultherapy' ? ri(5, 9) : row.device === 'XERF' ? ri(3, 6) : ri(4, 7),
        },
    },
    'treatment-bbl-acne-iga': {
        age: [14, 38], female: 0.55, months: 5,
        fields: {
            baseline_iga: ['2', '3', '4'],
            session_number: { range: [1, 6], dp: 0 },
            clearance_achieved: (row, rng) => {
                const iga = parseInt(row.baseline_iga, 10);
                const s = row.session_number;
                if (iga === 2 && s >= 4) return rng() < 0.92 ? 'Yes' : 'No';
                if (iga === 4 && s >= 6) return rng() < 0.58 ? 'Yes' : 'No';
                if (iga === 4) return rng() < 0.35 + s * 0.05 ? 'Yes' : 'No';
                return rng() < 0.5 + s * 0.06 ? 'Yes' : 'No';
            },
        },
    },
    'product-dysport-onset': {
        age: [26, 65], female: 0.8, months: 6,
        fields: {
            toxin: ['Dysport', 'Botox', 'Xeomin', 'Jeuveau', 'DAXXIFY'],
            day_first_reduction: (row, _r, _p, ri) => {
                if (row.toxin === 'Dysport') return ri(1, 3);
                if (row.toxin === 'Botox') return ri(4, 7);
                if (row.toxin === 'DAXXIFY') return ri(6, 14);
                return ri(3, 6);
            },
            peak_band_vs_class_mean_pct: { range: [-5, 5], dp: 0, fmt: '%' },
            late_duration_leader: ['DAXXIFY', 'Botox', 'Dysport'],
        },
    },
};


function generateCohort(insight, count) {
    const rng = mulberry32(hashStr(insight.id));
    const pick = (arr) => arr[Math.floor(rng() * arr.length)];
    const ri = (min, max) => Math.floor(rng() * (max - min + 1)) + min;
    const rf = (min, max, dp) => +(min + rng() * (max - min)).toFixed(dp);

    const cfg = COHORT_CONFIGS[insight.id];
    if (!cfg) return [];

    const clinics = cfg.clinics || CLINIC_POOL.slice(0, insight.evidence.clinicCount);
    const pubDate = new Date(insight.publishedAt);
    const rows = [];

    for (let i = 0; i < count; i++) {
        const row = { patient_id: 'PT-' + String(i + 1).padStart(4, '0') };
        row.age = ri(cfg.age[0], cfg.age[1]);
        row.sex = rng() < (cfg.female ?? 0.65) ? 'F' : 'M';
        row.clinic = pick(clinics);
        const d = new Date(pubDate);
        d.setMonth(d.getMonth() - ri(1, cfg.months || 18));
        d.setDate(ri(1, 28));
        row.treatment_date = d.toISOString().split('T')[0];

        for (const [key, def] of Object.entries(cfg.fields)) {
            if (typeof def === 'function') {
                row[key] = def(row, rng, pick, ri, rf);
            } else if (Array.isArray(def)) {
                row[key] = pick(def);
            } else if (def.range) {
                const val = rf(def.range[0], def.range[1], def.dp ?? 1);
                row[key] = def.fmt ? val + def.fmt : val;
            }
        }
        rows.push(row);
    }
    return rows;
}

function downloadCSV(rows, filename) {
    if (!rows.length) return;
    const keys = Object.keys(rows[0]);
    const esc = (v) => {
        const s = String(v ?? '');
        return s.includes(',') || s.includes('"') || s.includes('\n') ? '"' + s.replace(/"/g, '""') + '"' : s;
    };
    const csv = keys.join(',') + '\n' + rows.map(r => keys.map(k => esc(r[k])).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function renderCohortSection(insight) {
    const count = insight.evidence.patientCount;
    const previewCount = Math.min(25, count);
    const sample = generateCohort(insight, previewCount);
    if (!sample.length) return '';

    const keys = Object.keys(sample[0]);
    const headers = keys.map(k => `<th>${k.replace(/_/g, ' ')}</th>`).join('');
    const body = sample.map(row =>
        '<tr>' + keys.map(k => `<td>${row[k]}</td>`).join('') + '</tr>'
    ).join('');

    return `
    <div class="cohort-section">
        <button class="cohort-toggle" type="button">
            <span class="cohort-toggle-label">Patient Cohort</span>
            <span class="cohort-toggle-count">${count.toLocaleString()} patients</span>
            <span class="cohort-chevron">&#9662;</span>
        </button>
        <div class="cohort-body">
            <div class="cohort-table-wrap">
                <table class="proving-table cohort-table">
                    <thead><tr>${headers}</tr></thead>
                    <tbody>${body}</tbody>
                </table>
            </div>
            <div class="cohort-footer">
                <span class="cohort-showing">Showing ${previewCount} of ${count.toLocaleString()}</span>
                <button class="cohort-download" type="button">&#8615; Download full cohort (CSV)</button>
            </div>
        </div>
    </div>`;
}


// ══════════════════════════════════════
//  PASSWORD GATE
// ══════════════════════════════════════

const PASS_HASH = '3e019bc4de92fcac62dae45638bf2e22afdc0ce5a04a946fa25ea233d787cb11';

async function sha256(text) {
    const data = new TextEncoder().encode(text);
    const buf = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const gate = document.getElementById('gate');
const demoApp = document.getElementById('demo-app');
const gateForm = document.getElementById('gate-form');
const gateInput = document.getElementById('gate-password');
const gateError = document.getElementById('gate-error');

let demoShown = false;
let activeCategory = 'all';
let activeSort = 'featured';
let searchQuery = '';

function showDemo(instant) {
    if (instant) {
        gate.style.display = 'none';
    } else {
        gate.classList.add('hidden');
    }
    demoApp.style.display = 'block';
    if (!demoShown) {
        initFeed();
        initObserver();
        demoShown = true;
    }
}

function checkAuthAndShow(instant) {
    if (localStorage.getItem('demo_auth') === 'true') {
        showDemo(instant);
    }
}

checkAuthAndShow(true);

// Re-initialize on bfcache restore (browser back/forward navigation)
window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
        checkAuthAndShow(true);
    }
});

gateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const val = gateInput.value.trim();
    if (!val) return;

    const hash = await sha256(val);
    if (hash === PASS_HASH) {
        localStorage.setItem('demo_auth', 'true');
        gateError.textContent = '';
        gateInput.classList.remove('error');
        showDemo(false);
    } else {
        gateError.textContent = 'Invalid access code. Please try again.';
        gateInput.classList.add('error');
        gateInput.focus();
    }
});


// ══════════════════════════════════════
//  RENDERING
// ══════════════════════════════════════

function scoreClass(score) {
    if (score >= 7) return 'score-high';
    if (score >= 5) return 'score-mid';
    return 'score-low';
}

function renderCard(insight) {
    const tags = insight.tags.slice(0, 4).map(t => `<span class="card-tag">${t}</span>`).join('');
    return `
    <div class="insight-card" data-id="${insight.id}">
        <div class="card-top">
            <span class="category-badge" data-cat="${insight.category}">
                <span class="badge-dot"></span>${CATEGORY_LABELS[insight.category]}
            </span>
        </div>
        <h3 class="card-title">${insight.title}</h3>
        <p class="card-summary">${insight.summary}</p>
        <div class="card-metrics">
            <div class="card-metric">
                <div class="metric-value ${scoreClass(insight.evidence.score)}">${insight.evidence.score}</div>
                <div class="metric-label">Score</div>
            </div>
            <div class="card-metric">
                <div class="metric-value">${insight.evidence.clinicCount}</div>
                <div class="metric-label">Clinics</div>
            </div>
            <div class="card-metric">
                <div class="metric-value">${insight.evidence.patientCount.toLocaleString()}</div>
                <div class="metric-label">Patients</div>
            </div>
            ${insight.evidence.imageCount > 0 ? `
            <div class="card-metric">
                <div class="metric-value">${insight.evidence.imageCount}</div>
                <div class="metric-label">Images</div>
            </div>` : ''}
        </div>
        <div class="card-bottom">
            <div class="card-tags">${tags}</div>
            <span class="card-view">View <span class="arrow">&rarr;</span></span>
        </div>
    </div>`;
}

function getFiltered() {
    let list = [...INSIGHTS];

    if (activeCategory !== 'all') {
        list = list.filter(i => i.category === activeCategory);
    }

    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        list = list.filter(i =>
            i.title.toLowerCase().includes(q) ||
            i.summary.toLowerCase().includes(q) ||
            i.tags.some(t => t.toLowerCase().includes(q)) ||
            i.entities.some(e => e.toLowerCase().includes(q))
        );
    }

    if (activeSort === 'featured') {
        list.sort((a, b) => (b.isFeatured - a.isFeatured) || (b.trendScore - a.trendScore));
    } else if (activeSort === 'newest') {
        list.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
    } else {
        list.sort((a, b) => b.trendScore - a.trendScore);
    }

    return list;
}

function renderFeed() {
    const grid = document.getElementById('insight-grid');
    const count = document.getElementById('result-count');
    const filtered = getFiltered();

    count.textContent = `Showing ${filtered.length} insight${filtered.length !== 1 ? 's' : ''}`;

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="empty-state"><p>No insights match your filters. Try adjusting your search or category.</p></div>';
        return;
    }

    grid.innerHTML = filtered.map(renderCard).join('');

    grid.querySelectorAll('.insight-card').forEach(card => {
        card.addEventListener('click', () => openDetail(card.dataset.id));
    });
}

function initFeed() {
    renderFeed();
}


// ══════════════════════════════════════
//  CATEGORY CHIPS
// ══════════════════════════════════════

document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeCategory = chip.dataset.category;
        renderFeed();
    });
});


// ══════════════════════════════════════
//  SORT PILLS
// ══════════════════════════════════════

document.querySelectorAll('.sort-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        document.querySelectorAll('.sort-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeSort = pill.dataset.sort;
        renderFeed();
    });
});


// ══════════════════════════════════════
//  SEARCH
// ══════════════════════════════════════

const searchInput = document.getElementById('search-input');
let searchTimeout;
searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchQuery = searchInput.value.trim();
        renderFeed();
    }, 200);
});


// ══════════════════════════════════════
//  DETAIL MODAL
// ══════════════════════════════════════

const detailModal = document.getElementById('detail-modal');
const detailContent = document.getElementById('detail-content');

function renderProvingTable(rows) {
    if (!rows || rows.length === 0) return '';
    const keys = Object.keys(rows[0]);
    const headers = keys.map(k => `<th>${k.replace(/_/g, ' ')}</th>`).join('');
    const body = rows.map(row =>
        '<tr>' + keys.map(k => `<td>${row[k]}</td>`).join('') + '</tr>'
    ).join('');
    return `
    <div class="proving-table-wrap">
        <table class="proving-table">
            <thead><tr>${headers}</tr></thead>
            <tbody>${body}</tbody>
        </table>
    </div>`;
}

function renderBreakdownBars(breakdown) {
    const labels = {
        sample_size: 'Sample Size',
        clinic_diversity: 'Clinic Diversity',
        follow_up: 'Follow-up Duration',
        completeness: 'Data Completeness',
        image_validation: 'Image Validation',
    };
    return Object.entries(breakdown).map(([key, val]) => `
        <div class="breakdown-row">
            <div class="breakdown-row-header">
                <span class="breakdown-label">${labels[key] || key}</span>
                <span class="breakdown-value">${val} / 2</span>
            </div>
            <div class="breakdown-bar">
                <div class="breakdown-bar-fill" style="width:${(val / 2) * 100}%"></div>
            </div>
        </div>`).join('');
}

function renderDetailFull(insight) {
    const findings = insight.content.supportingFindings.map(f => `<li>${f}</li>`).join('');
    const entities = insight.entities.map(e => `<span class="entity-pill">${e}</span>`).join('');

    return `
    <div class="detail-badges">
        <span class="category-badge" data-cat="${insight.category}">
            <span class="badge-dot"></span>${CATEGORY_LABELS[insight.category]}
        </span>
    </div>
    <h2 class="detail-title">${insight.title}</h2>
    <div class="detail-layout">
        <div class="detail-main">
            <p class="detail-summary">${insight.summary}</p>
            <div class="detail-key-finding">
                <h4>Key Finding</h4>
                <p>${insight.content.keyFinding}</p>
            </div>
            <h4 style="font-size:0.8rem;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-text-tertiary);margin-bottom:0.75rem;font-weight:600">Supporting Findings</h4>
            <ul class="detail-findings-list">${findings}</ul>
            <div class="detail-card-block">
                <h4>Limitations</h4>
                <p>${insight.content.limitations}</p>
            </div>
            <div class="detail-entities">${entities}</div>
        </div>
        <div class="evidence-sidebar">
            <div class="evidence-score-display">
                <span class="evidence-score-number ${scoreClass(insight.evidence.score)}">${insight.evidence.score}</span>
                <span class="evidence-score-max"> / 10</span>
                <div class="evidence-score-label">Evidence Score</div>
            </div>
            <div class="breakdown-rows">${renderBreakdownBars(insight.evidence.breakdown)}</div>
            <div class="sidebar-metrics">
                <div class="sidebar-metric">
                    <div class="sidebar-metric-value">${insight.evidence.clinicCount}</div>
                    <div class="sidebar-metric-label">Clinics</div>
                </div>
                <div class="sidebar-metric">
                    <div class="sidebar-metric-value">${insight.evidence.patientCount.toLocaleString()}</div>
                    <div class="sidebar-metric-label">Patients</div>
                </div>
                ${insight.evidence.imageCount > 0 ? `
                <div class="sidebar-metric">
                    <div class="sidebar-metric-value">${insight.evidence.imageCount}</div>
                    <div class="sidebar-metric-label">Images</div>
                </div>` : ''}
            </div>
        </div>
    </div>
    ${renderProvingTable(insight.provingData)}
    <div class="detail-card-block recommendation">
        <h4>Recommendation</h4>
        <p>${insight.content.recommendation}</p>
    </div>
    ${renderCohortSection(insight)}
    <div class="detail-disclaimer">
        <strong>Data Disclaimer</strong> — These findings are derived from de-identified data across InPractice Health's participating clinic network, representing a subset of all real-world clinical activity. InPractice Health is a neutral data infrastructure layer and does not endorse, promote, or disparage any brand, product, or provider. All findings are observational and subject to selection bias, confounding, and the limitations inherent in retrospective analysis. Not intended as a medical device. This is not intended to cure or treat any disease. Please consult your medical practitioner.
    </div>`;
}

function renderDetailLocked(insight) {
    const entities = insight.entities.map(e => `<span class="entity-pill">${e}</span>`).join('');

    return `
    <div class="detail-badges">
        <span class="category-badge" data-cat="${insight.category}">
            <span class="badge-dot"></span>${CATEGORY_LABELS[insight.category]}
        </span>
    </div>
    <h2 class="detail-title">${insight.title}</h2>
    <p class="detail-summary">${insight.preview}</p>
    <div class="detail-entities" style="margin-bottom:1.5rem">${entities}</div>
    <div class="locked-content">
        <div class="locked-blur">
            <div style="padding:2rem 0">
                <div style="height:16px;background:var(--color-bg-alt);border-radius:var(--radius-sm);margin-bottom:0.75rem;width:90%"></div>
                <div style="height:16px;background:var(--color-bg-alt);border-radius:var(--radius-sm);margin-bottom:0.75rem;width:75%"></div>
                <div style="height:16px;background:var(--color-bg-alt);border-radius:var(--radius-sm);margin-bottom:0.75rem;width:85%"></div>
                <div style="height:80px;background:var(--color-accent-light);border-radius:var(--radius-xl);margin-bottom:1rem"></div>
                <div style="height:16px;background:var(--color-bg-alt);border-radius:var(--radius-sm);margin-bottom:0.75rem;width:80%"></div>
                <div style="height:16px;background:var(--color-bg-alt);border-radius:var(--radius-sm);margin-bottom:0.75rem;width:70%"></div>
                <div style="height:16px;background:var(--color-bg-alt);border-radius:var(--radius-sm);margin-bottom:0.75rem;width:90%"></div>
                <div style="display:flex;gap:0.75rem;margin-top:1.5rem">
                    <div style="flex:1;height:80px;background:var(--color-bg-alt);border-radius:var(--radius-lg)"></div>
                    <div style="flex:1;height:80px;background:var(--color-bg-alt);border-radius:var(--radius-lg)"></div>
                    <div style="flex:1;height:80px;background:var(--color-bg-alt);border-radius:var(--radius-lg)"></div>
                </div>
            </div>
        </div>
        <div class="locked-overlay">
            <div class="locked-box">
                <span class="locked-icon">&#128274;</span>
                <h3>Unlock Full Analysis</h3>
                <p>Get access to the complete findings, evidence breakdown, and source data.</p>
                <button class="btn btn-primary locked-cta">Request Access</button>
            </div>
        </div>
    </div>
    <div class="detail-disclaimer">
        <strong>Data Disclaimer</strong> — These findings are derived from de-identified data across InPractice Health's participating clinic network, representing a subset of all real-world clinical activity. InPractice Health is a neutral data infrastructure layer and does not endorse, promote, or disparage any brand, product, or provider. All findings are observational and subject to selection bias, confounding, and the limitations inherent in retrospective analysis. Not intended as a medical device. This is not intended to cure or treat any disease. Please consult your medical practitioner.
    </div>`;
}

function openDetail(id) {
    const insight = INSIGHTS.find(i => i.id === id);
    if (!insight) return;

    if (insight.tier === 'free') {
        detailContent.innerHTML = renderDetailFull(insight);
        const cohortToggle = detailContent.querySelector('.cohort-toggle');
        if (cohortToggle) {
            cohortToggle.addEventListener('click', () => {
                cohortToggle.closest('.cohort-section').classList.toggle('open');
            });
        }
        const cohortDl = detailContent.querySelector('.cohort-download');
        if (cohortDl) {
            cohortDl.addEventListener('click', () => {
                const rows = generateCohort(insight, insight.evidence.patientCount);
                downloadCSV(rows, 'cohort-' + insight.id + '.csv');
            });
        }
    } else {
        detailContent.innerHTML = renderDetailLocked(insight);
        const cta = detailContent.querySelector('.locked-cta');
        if (cta) cta.addEventListener('click', () => { closeDetailModal(); openClinicModal(); });
    }

    detailModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
    detailModal.classList.remove('open');
    document.body.style.overflow = '';
}

detailModal.querySelector('.modal-close').addEventListener('click', closeDetailModal);
detailModal.addEventListener('click', (e) => { if (e.target === detailModal) closeDetailModal(); });


// ══════════════════════════════════════
//  CLINIC SIGNUP MODAL
// ══════════════════════════════════════

const clinicModal = document.getElementById('modal-clinic');

function openClinicModal() {
    clinicModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeClinicModal() {
    clinicModal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
        const form = clinicModal.querySelector('form');
        const content = clinicModal.querySelector('.modal-content');
        const success = clinicModal.querySelector('.modal-success');
        if (form) form.reset();
        if (content) content.style.display = 'block';
        if (success) success.style.display = 'none';
    }, 300);
}

document.querySelectorAll('a[href="#clinic-signup"]').forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); openClinicModal(); });
});

clinicModal.querySelector('.modal-close').addEventListener('click', closeClinicModal);
clinicModal.querySelector('.close-success-btn').addEventListener('click', closeClinicModal);
clinicModal.addEventListener('click', (e) => { if (e.target === clinicModal) closeClinicModal(); });

const clinicForm = document.getElementById('form-clinic');
clinicForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = clinicModal.querySelector('.modal-content');
    const success = clinicModal.querySelector('.modal-success');
    content.style.display = 'none';
    success.style.display = 'block';
});

const teaserCta = document.getElementById('teaser-cta');
if (teaserCta) {
    teaserCta.addEventListener('click', (e) => {
        e.preventDefault();
        openClinicModal();
    });
}


// ══════════════════════════════════════
//  SCROLL ANIMATIONS (same as main site)
// ══════════════════════════════════════

function initObserver() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });

    requestAnimationFrame(() => {
        document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                observer.observe(el);
            }
        });
    });
}


// ══════════════════════════════════════
//  MOBILE MENU
// ══════════════════════════════════════

const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const spans = mobileToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}


// ══════════════════════════════════════
//  COOKIE CONSENT
// ══════════════════════════════════════

const cookieBanner = document.getElementById('cookie-banner');
const cookieModal = document.getElementById('modal-cookie');
const cookieToggle = document.getElementById('cookie-nonessential');

function getCookieConsent() {
    try { return JSON.parse(localStorage.getItem('cookie_consent')); }
    catch { return null; }
}

function saveCookieConsent(prefs) {
    localStorage.setItem('cookie_consent', JSON.stringify(prefs));
    if (cookieBanner) cookieBanner.classList.remove('visible');
    if (cookieModal) {
        cookieModal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function openCookieModal() {
    if (!cookieModal) return;
    const prefs = getCookieConsent();
    if (cookieToggle) cookieToggle.checked = prefs ? prefs.nonEssential : true;
    if (cookieBanner) cookieBanner.classList.remove('visible');
    cookieModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

if (!getCookieConsent() && cookieBanner) {
    setTimeout(() => cookieBanner.classList.add('visible'), 800);
}

if (document.getElementById('cookie-accept-all')) {
    document.getElementById('cookie-accept-all').addEventListener('click', () => {
        saveCookieConsent({ essential: true, nonEssential: true });
    });
}

if (document.getElementById('cookie-manage')) {
    document.getElementById('cookie-manage').addEventListener('click', openCookieModal);
}

if (document.getElementById('cookie-save')) {
    document.getElementById('cookie-save').addEventListener('click', () => {
        saveCookieConsent({
            essential: true,
            nonEssential: cookieToggle ? cookieToggle.checked : false
        });
    });
}

if (cookieModal) {
    cookieModal.querySelector('.modal-close').addEventListener('click', () => {
        cookieModal.classList.remove('open');
        document.body.style.overflow = '';
        if (!getCookieConsent() && cookieBanner) cookieBanner.classList.add('visible');
    });

    cookieModal.addEventListener('click', (e) => {
        if (e.target === cookieModal) {
            cookieModal.classList.remove('open');
            document.body.style.overflow = '';
            if (!getCookieConsent() && cookieBanner) cookieBanner.classList.add('visible');
        }
    });
}

document.querySelectorAll('[href="#cookie-preferences"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openCookieModal();
    });
});

// ══════════════════════════════════════
//  KEYBOARD
// ══════════════════════════════════════

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (cookieModal && cookieModal.classList.contains('open')) {
            cookieModal.classList.remove('open');
            document.body.style.overflow = '';
            if (!getCookieConsent() && cookieBanner) cookieBanner.classList.add('visible');
        } else if (detailModal.classList.contains('open')) closeDetailModal();
        else if (clinicModal.classList.contains('open')) closeClinicModal();
    }
});


// ══════════════════════════════════════
//  INSIGHT GENERATOR (3-step wizard)
// ══════════════════════════════════════

(function initGenerator() {
    const counterNum = document.getElementById('gen-counter-num');
    const counterTotal = document.getElementById('gen-counter-total');
    if (!counterNum) return;

    const TOTAL = SYNTHETIC_POOL.length;
    counterTotal.textContent = TOTAL.toLocaleString();

    // ── State ──
    let currentStep = 1;
    let animatedCount = TOTAL;
    let targetCount = TOTAL;
    let animFrame = null;

    // Filter state — Step 1
    const selectedEncounters = new Set(POOL_ENCOUNTER_TYPES);
    const selectedSex = new Set(['female', 'male']);
    let ageLo = 18, ageHi = 85;
    let dateFrom = '', dateTo = '';

    // Filter state — Step 2 (empty = all)
    const selectedConditions = new Set();
    const selectedInterventions = new Set();
    const selectedSubstances = new Set();
    const selectedDevices = new Set();
    const selectedAnatomy = new Set();

    // ── Chip renderer helper ──
    function renderChips(containerId, values, selectedSet, opts) {
        if (typeof opts === 'function') opts = { labelFn: opts };
        opts = opts || {};
        const labelFn = opts.labelFn;
        const searchable = opts.searchable === true;

        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';

        const filterGroup = container.closest('.gen-filter-group');
        const existingSearchRow = filterGroup && filterGroup.querySelector('.gen-search-row');
        if (existingSearchRow) existingSearchRow.remove();

        const chipEls = [];
        const chipValues = [];

        values.forEach(v => {
            const label = labelFn ? labelFn(v) : v;
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'gen-chip' + (selectedSet.has(v) ? ' selected' : '');
            btn.textContent = label;
            btn.dataset.value = v;
            btn.dataset.label = label.toLowerCase();
            btn.addEventListener('click', () => {
                if (selectedSet.has(v)) selectedSet.delete(v);
                else selectedSet.add(v);
                btn.classList.toggle('selected');
                if (countEl) updateCount();
                applyFilters();
            });
            container.appendChild(btn);
            chipEls.push(btn);
            chipValues.push({ value: v, label: label.toLowerCase(), el: btn });
        });

        let countEl = null;

        if (searchable && filterGroup) {
            const row = document.createElement('div');
            row.className = 'gen-search-row';

            const wrap = document.createElement('div');
            wrap.className = 'gen-search-wrap';
            const icon = document.createElement('span');
            icon.className = 'gen-search-icon';
            icon.textContent = '\u2315';
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'gen-search-input';
            input.placeholder = 'Filter\u2026';
            wrap.appendChild(icon);
            wrap.appendChild(input);

            countEl = document.createElement('span');
            countEl.className = 'gen-chip-count';

            const actions = document.createElement('span');
            actions.className = 'gen-chip-actions';
            const selAllBtn = document.createElement('button');
            selAllBtn.type = 'button';
            selAllBtn.className = 'gen-chip-action';
            selAllBtn.textContent = 'Select All';
            const sep = document.createElement('span');
            sep.className = 'gen-chip-action-sep';
            sep.textContent = '|';
            const clearBtn = document.createElement('button');
            clearBtn.type = 'button';
            clearBtn.className = 'gen-chip-action';
            clearBtn.textContent = 'Clear';
            actions.appendChild(selAllBtn);
            actions.appendChild(sep);
            actions.appendChild(clearBtn);

            row.appendChild(wrap);
            row.appendChild(countEl);
            row.appendChild(actions);
            filterGroup.insertBefore(row, container);

            function getVisible() {
                return chipValues.filter(c => !c.el.classList.contains('gen-chip-hidden'));
            }

            function updateCount() {
                const visible = getVisible();
                const selCount = visible.filter(c => selectedSet.has(c.value)).length;
                countEl.textContent = selCount
                    ? selCount + ' sel \u00B7 ' + visible.length + ' of ' + values.length
                    : visible.length + ' of ' + values.length;
            }

            let debounceTimer = null;
            input.addEventListener('input', () => {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    const q = input.value.trim().toLowerCase();
                    chipValues.forEach(c => {
                        c.el.classList.toggle('gen-chip-hidden', q !== '' && !c.label.includes(q));
                    });
                    updateCount();
                }, 80);
            });

            selAllBtn.addEventListener('click', () => {
                getVisible().forEach(c => {
                    selectedSet.add(c.value);
                    c.el.classList.add('selected');
                });
                updateCount();
                applyFilters();
            });

            clearBtn.addEventListener('click', () => {
                chipValues.forEach(c => {
                    selectedSet.delete(c.value);
                    c.el.classList.remove('selected');
                });
                updateCount();
                applyFilters();
            });

            updateCount();
        }
    }

    const ENCOUNTER_LABELS = {
        consultation: 'Consultation', follow_up: 'Follow-up',
        procedure_visit: 'Procedure', lab_visit: 'Lab Visit',
        telehealth: 'Telehealth', other: 'Other',
    };

    // ── Initialize Step 1 chips ──
    renderChips('gen-encounter-chips', POOL_ENCOUNTER_TYPES, selectedEncounters, { labelFn: v => ENCOUNTER_LABELS[v] || v });
    renderChips('gen-sex-chips', ['female', 'male'], selectedSex,
        { labelFn: v => v.charAt(0).toUpperCase() + v.slice(1) });

    // ── Initialize Step 2 chips (searchable for large groups) ──
    renderChips('gen-condition-chips', POOL_CONDITIONS, selectedConditions, { searchable: true });
    renderChips('gen-intervention-chips', POOL_INTERVENTION_CATS, selectedInterventions,
        { labelFn: v => v.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) });
    renderChips('gen-substance-chips', POOL_SUBSTANCES, selectedSubstances, { searchable: true });
    renderChips('gen-device-chips', POOL_DEVICES, selectedDevices, { searchable: true });
    renderChips('gen-anatomy-chips', POOL_ANATOMY, selectedAnatomy, { searchable: true });

    // ── Date inputs ──
    const earliest = SYNTHETIC_POOL.reduce((m, r) => r.occurred_at < m ? r.occurred_at : m, '9999');
    const latest = SYNTHETIC_POOL.reduce((m, r) => r.occurred_at > m ? r.occurred_at : m, '0000');

    const dateFromEl = document.getElementById('gen-date-from');
    const dateToEl = document.getElementById('gen-date-to');
    dateFromEl.min = earliest; dateFromEl.max = latest;
    dateToEl.min = earliest; dateToEl.max = latest;

    dateFromEl.addEventListener('change', () => { dateFrom = dateFromEl.value; applyFilters(); });
    dateToEl.addEventListener('change', () => { dateTo = dateToEl.value; applyFilters(); });

    // ── Dual range slider ──
    const sliderLo = document.getElementById('gen-age-slider-lo');
    const sliderHi = document.getElementById('gen-age-slider-hi');
    const ageMinInput = document.getElementById('gen-age-min');
    const ageMaxInput = document.getElementById('gen-age-max');
    const rangeFill = document.getElementById('gen-range-fill');

    function updateRangeFill() {
        const lo = parseInt(sliderLo.value), hi = parseInt(sliderHi.value);
        const pctLo = ((lo - 18) / 67) * 100;
        const pctHi = ((hi - 18) / 67) * 100;
        rangeFill.style.left = pctLo + '%';
        rangeFill.style.width = (pctHi - pctLo) + '%';
    }

    function syncSliders(source) {
        let lo = parseInt(sliderLo.value), hi = parseInt(sliderHi.value);
        if (source === 'lo' && lo > hi) { sliderLo.value = hi; lo = hi; }
        if (source === 'hi' && hi < lo) { sliderHi.value = lo; hi = lo; }
        ageLo = lo; ageHi = hi;
        ageMinInput.value = lo; ageMaxInput.value = hi;
        updateRangeFill();
        applyFilters();
    }

    sliderLo.addEventListener('input', () => syncSliders('lo'));
    sliderHi.addEventListener('input', () => syncSliders('hi'));
    ageMinInput.addEventListener('change', () => {
        let v = Math.max(18, Math.min(85, parseInt(ageMinInput.value) || 18));
        sliderLo.value = v; ageMinInput.value = v;
        syncSliders('lo');
    });
    ageMaxInput.addEventListener('change', () => {
        let v = Math.max(18, Math.min(85, parseInt(ageMaxInput.value) || 85));
        sliderHi.value = v; ageMaxInput.value = v;
        syncSliders('hi');
    });
    updateRangeFill();

    // ── Filter engine ──
    let filteredPool = SYNTHETIC_POOL;

    function applyFilters() {
        filteredPool = SYNTHETIC_POOL.filter(r => {
            if (!selectedEncounters.has(r.encounter_type)) return false;
            if (!selectedSex.has(r.sex_at_birth)) return false;
            if (r.age < ageLo || r.age > ageHi) return false;
            if (dateFrom && r.occurred_at < dateFrom) return false;
            if (dateTo && r.occurred_at > dateTo) return false;
            if (selectedConditions.size && !selectedConditions.has(r.condition)) return false;
            if (selectedInterventions.size && !selectedInterventions.has(r.intervention_category)) return false;
            if (selectedSubstances.size && !selectedSubstances.has(r.substance)) return false;
            if (selectedDevices.size && !(r.device && selectedDevices.has(r.device))) return false;
            if (selectedAnatomy.size && !selectedAnatomy.has(r.anatomy_region)) return false;
            return true;
        });
        targetCount = filteredPool.length;
        animateCounter();
    }

    // ── Animated counter ──
    function animateCounter() {
        if (animFrame) cancelAnimationFrame(animFrame);
        const start = animatedCount;
        const diff = targetCount - start;
        if (diff === 0) return;
        const duration = 280;
        const t0 = performance.now();

        function tick(now) {
            const elapsed = now - t0;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            animatedCount = Math.round(start + diff * ease);
            counterNum.textContent = animatedCount.toLocaleString();
            if (progress < 1) animFrame = requestAnimationFrame(tick);
        }
        animFrame = requestAnimationFrame(tick);
    }

    // ── Step navigation ──
    const panels = document.querySelectorAll('.gen-panel');
    const dots = document.querySelectorAll('.gen-step-dot');
    const lines = document.querySelectorAll('.gen-step-line');

    function goToStep(step) {
        currentStep = step;
        panels.forEach(p => p.classList.toggle('active', parseInt(p.dataset.panel) === step));
        dots.forEach(d => {
            const s = parseInt(d.dataset.step);
            d.classList.toggle('active', s === step);
            d.classList.toggle('done', s < step);
        });
        lines.forEach((l, i) => l.classList.toggle('done', i + 1 < step));

        if (step === 3) buildSummaryBar();
    }

    document.querySelectorAll('.gen-next, .gen-back').forEach(btn => {
        btn.addEventListener('click', () => goToStep(parseInt(btn.dataset.to)));
    });
    dots.forEach(d => {
        d.addEventListener('click', () => {
            const s = parseInt(d.dataset.step);
            if (s <= currentStep || s === currentStep + 1) goToStep(s);
        });
    });

    // ── Step 3: Summary bar ──
    function buildSummaryBar() {
        const bar = document.getElementById('gen-summary-bar');
        const n = filteredPool.length;
        const clinics = new Set(filteredPool.map(r => r.clinic));
        const topConditions = topN(filteredPool, 'condition', 3);
        const topSubs = topN(filteredPool, 'substance', 3);
        bar.innerHTML = `Analyzing <strong>${n.toLocaleString()}</strong> patients across <strong>${clinics.size}</strong> clinics.`
            + (topConditions.length ? `<br>Top conditions: ${topConditions.join(', ')}.` : '')
            + (topSubs.length ? ` Top substances: ${topSubs.join(', ')}.` : '');
    }

    function topN(arr, key, n) {
        const counts = {};
        arr.forEach(r => { const v = r[key]; if (v) counts[v] = (counts[v] || 0) + 1; });
        return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, n).map(e => e[0]);
    }

    // ── Step 3: Generate insight ──
    const generateBtn = document.getElementById('gen-generate-btn');
    const loadingEl = document.getElementById('gen-loading');
    const promptEl = document.getElementById('gen-prompt');
    const apiKeyEl = document.getElementById('gen-api-key');

    // Restore saved API key
    const savedKey = localStorage.getItem('gen_openai_key');
    if (savedKey && apiKeyEl) apiKeyEl.value = savedKey;

    // Build a cohort section from the actual filteredPool rows
    function renderGeneratedCohortSection(pool) {
        const count = pool.length;
        if (!count) return '';
        const previewCount = Math.min(25, count);
        const sample = pool.slice(0, previewCount);
        const keys = Object.keys(sample[0]);
        const headers = keys.map(k => `<th>${k.replace(/_/g, ' ')}</th>`).join('');
        const body = sample.map(row =>
            '<tr>' + keys.map(k => `<td>${row[k] ?? ''}</td>`).join('') + '</tr>'
        ).join('');

        return `
        <div class="cohort-section">
            <button class="cohort-toggle" type="button">
                <span class="cohort-toggle-label">Patient Cohort</span>
                <span class="cohort-toggle-count">${count.toLocaleString()} patients</span>
                <span class="cohort-chevron">&#9662;</span>
            </button>
            <div class="cohort-body">
                <div class="cohort-table-wrap">
                    <table class="proving-table cohort-table">
                        <thead><tr>${headers}</tr></thead>
                        <tbody>${body}</tbody>
                    </table>
                </div>
                <div class="cohort-footer">
                    <span class="cohort-showing">Showing ${previewCount} of ${count.toLocaleString()}</span>
                    <button class="cohort-download" type="button">&#8615; Download full cohort (CSV)</button>
                </div>
            </div>
        </div>`;
    }

    generateBtn.addEventListener('click', async () => {
        const prompt = promptEl.value.trim();
        if (!prompt) { promptEl.focus(); return; }

        const apiKey = apiKeyEl.value.trim();
        if (apiKey) localStorage.setItem('gen_openai_key', apiKey);

        loadingEl.style.display = 'block';
        generateBtn.disabled = true;

        const cohortSummary = buildCohortContext();
        let insight;

        if (apiKey) {
            try {
                insight = await callOpenAI(apiKey, prompt, cohortSummary);
            } catch (err) {
                console.warn('OpenAI call failed, falling back to simulation:', err);
                insight = simulateInsight(prompt, cohortSummary);
            }
        } else {
            await fakePause(1800);
            insight = simulateInsight(prompt, cohortSummary);
        }

        loadingEl.style.display = 'none';
        generateBtn.disabled = false;

        // Snapshot the current filtered pool for the cohort
        const cohortSnapshot = [...filteredPool];

        // Render into the same detail modal used by all insights
        // Use renderDetailFull but replace the empty cohort section with our pool-based one
        let html = renderDetailFull(insight);
        const poolCohortHtml = renderGeneratedCohortSection(cohortSnapshot);
        if (poolCohortHtml) {
            // renderDetailFull ends with renderCohortSection(insight) which returns ''
            // for generated insights (no COHORT_CONFIGS entry). Append the pool cohort.
            html += poolCohortHtml;
        }

        detailContent.innerHTML = html;

        // Wire cohort toggle
        const cohortToggle = detailContent.querySelector('.cohort-toggle');
        if (cohortToggle) {
            cohortToggle.addEventListener('click', () => {
                cohortToggle.closest('.cohort-section').classList.toggle('open');
            });
        }

        // Wire CSV download from the actual filtered pool
        const cohortDl = detailContent.querySelector('.cohort-download');
        if (cohortDl) {
            cohortDl.addEventListener('click', () => {
                downloadCSV(cohortSnapshot, 'cohort-generated-insight.csv');
            });
        }

        detailModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    function fakePause(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function buildCohortContext() {
        const n = filteredPool.length;
        const clinics = new Set(filteredPool.map(r => r.clinic));
        const ages = filteredPool.map(r => r.age);
        const meanAge = ages.length ? Math.round(ages.reduce((a, b) => a + b, 0) / ages.length) : 0;
        const female = filteredPool.filter(r => r.sex_at_birth === 'female').length;
        const femalePct = n ? Math.round((female / n) * 100) : 0;
        const topCond = topN(filteredPool, 'condition', 5);
        const topSub = topN(filteredPool, 'substance', 5);
        const topDev = topN(filteredPool, 'device', 5);
        const topAnat = topN(filteredPool, 'anatomy_region', 5);

        return {
            patientCount: n,
            clinicCount: clinics.size,
            meanAge,
            femalePct,
            topConditions: topCond,
            topSubstances: topSub,
            topDevices: topDev,
            topAnatomy: topAnat,
            text: `Cohort: ${n} patients, ${clinics.size} clinics, mean age ${meanAge}, ${femalePct}% female. `
                + `Top conditions: ${topCond.join(', ')}. Top substances: ${topSub.join(', ')}. `
                + `Top devices: ${topDev.join(', ')}. Top anatomy: ${topAnat.join(', ')}.`,
        };
    }

    // ── OpenAI call ──
    async function callOpenAI(apiKey, userPrompt, ctx) {
        const systemPrompt = `You are a clinical data analyst for an aesthetic medicine analytics platform. Given a patient cohort summary and a user request, generate a structured JSON insight. Return ONLY valid JSON with this exact schema:
{
  "id": "generated-insight",
  "category": "treatment_outcomes|provider_intelligence|product_substance|patient_cohorts|market_trends",
  "tier": "free",
  "title": "string (concise, specific title)",
  "summary": "string (2-3 sentences, data-driven)",
  "preview": "string (1 sentence preview)",
  "content": {
    "keyFinding": "string",
    "supportingFindings": ["string", "string", "string"],
    "recommendation": "string",
    "limitations": "string"
  },
  "evidence": {
    "score": number (6.0-9.0),
    "breakdown": { "sample_size": number (0-2), "clinic_diversity": number (0-2), "follow_up": number (0-2), "completeness": number (0-2), "image_validation": number (0-2) },
    "clinicCount": number,
    "patientCount": number,
    "imageCount": number
  },
  "provingData": [{"column1": "value", ...}, ...],
  "tags": ["string"],
  "entities": ["string"],
  "publishedAt": "YYYY-MM-DD",
  "isFeatured": false,
  "trendScore": number
}
Use the actual cohort numbers provided. Make findings specific and quantitative. provingData should have 4-6 rows with columns relevant to the analysis.`;

        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey,
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                temperature: 0.7,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: `Cohort context:\n${ctx.text}\n\nUser request: ${userPrompt}` },
                ],
            }),
        });

        if (!res.ok) throw new Error('API ' + res.status);
        const data = await res.json();
        const raw = data.choices[0].message.content;
        const jsonStr = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(jsonStr);
    }

    // ── Simulated fallback ──
    function simulateInsight(userPrompt, ctx) {
        const topCond = ctx.topConditions[0] || 'Wrinkles';
        const topSub = ctx.topSubstances[0] || 'Botulinum toxin type A';
        const secondSub = ctx.topSubstances[1] || 'Hyaluronic acid filler';
        const topDev = ctx.topDevices[0] || 'Morpheus8';
        const topAnat = ctx.topAnatomy[0] || 'Full Face';

        const rng = mulberry32(hashStr(userPrompt + ctx.patientCount));
        const rf = (min, max) => +(min + rng() * (max - min)).toFixed(1);
        const ri = (min, max) => Math.floor(rng() * (max - min + 1)) + min;
        const pct = () => ri(12, 68) + '%';

        const improvementPct = ri(28, 54);
        const retentionPct = ri(62, 88);

        return {
            id: 'generated-insight',
            category: detectCategory(userPrompt, topCond, topSub),
            tier: 'free',
            title: `${topSub} and ${secondSub} Comparative Outcomes for ${topCond}: ${ctx.patientCount.toLocaleString()}-Patient Analysis`,
            summary: `Analysis of ${ctx.patientCount.toLocaleString()} patients across ${ctx.clinicCount} clinics reveals ${topSub} achieves ${improvementPct}% mean improvement in ${topCond.toLowerCase()} outcomes at the ${topAnat.toLowerCase()} region over the observation period, with ${secondSub} trailing by ${ri(4, 12)} percentage points. Patient retention at 12 months is ${retentionPct}% for ${topSub} versus ${retentionPct - ri(8, 18)}% for ${secondSub}, suggesting durability advantages beyond initial efficacy.`,
            preview: `${topSub} shows ${improvementPct}% improvement for ${topCond.toLowerCase()} across ${ctx.clinicCount} clinics.`,
            content: {
                keyFinding: `${topSub} demonstrates statistically meaningful superiority over ${secondSub} in ${topCond.toLowerCase()} outcomes targeting the ${topAnat.toLowerCase()}, with the difference widening after the initial treatment cycle.`,
                supportingFindings: [
                    `Mean improvement scores at Week 12 for ${topSub} reach ${improvementPct}% versus ${improvementPct - ri(5, 12)}% for ${secondSub}, measured via standardized clinical photography and CV analysis across ${ctx.clinicCount} participating sites.`,
                    `Patients in the ${ctx.meanAge - 5}–${ctx.meanAge + 5} age band show the strongest response differential (${ri(8, 18)} percentage point gap favoring ${topSub}), suggesting age-dependent treatment selection may optimize outcomes.`,
                    `${ctx.femalePct}% of the cohort is female, and subgroup analysis reveals no statistically significant sex-based difference in primary outcome, though male patients show slightly faster initial onset.`,
                    `${topDev}-assisted treatments in combination with ${topSub} correlate with a ${ri(6, 15)}% incremental improvement over ${topSub} monotherapy in the ${topAnat.toLowerCase()} region.`,
                ],
                recommendation: `Consider ${topSub} as the first-line agent for ${topCond.toLowerCase()} targeting the ${topAnat.toLowerCase()}, particularly in patients aged ${ctx.meanAge - 5}–${ctx.meanAge + 5}. Evaluate ${topDev} combination protocols for patients seeking enhanced outcomes. Monitor and re-evaluate ${secondSub} candidates at Week 8 for potential switch optimization.`,
                limitations: `This is an observational analysis of synthetic demo data and does not represent real clinical evidence. In production, confounders such as provider technique variance, patient compliance, and concomitant treatments would need to be controlled. Cross-site calibration of imaging protocols introduces measurement variability.`,
            },
            evidence: {
                score: rf(7.0, 8.8),
                breakdown: {
                    sample_size: rf(1.2, 1.9),
                    clinic_diversity: rf(1.3, 1.8),
                    follow_up: rf(1.2, 1.7),
                    completeness: rf(1.1, 1.6),
                    image_validation: rf(0.9, 1.5),
                },
                clinicCount: ctx.clinicCount,
                patientCount: ctx.patientCount,
                imageCount: Math.round(ctx.patientCount * (0.3 + rng() * 0.4)),
            },
            provingData: [
                { substance: topSub, patients: ri(Math.round(ctx.patientCount * 0.3), Math.round(ctx.patientCount * 0.4)), improvement_pct: improvementPct + '%', retention_12mo: retentionPct + '%', top_anatomy: topAnat },
                { substance: secondSub, patients: ri(Math.round(ctx.patientCount * 0.2), Math.round(ctx.patientCount * 0.3)), improvement_pct: (improvementPct - ri(5, 12)) + '%', retention_12mo: (retentionPct - ri(8, 18)) + '%', top_anatomy: topAnat },
                { substance: ctx.topSubstances[2] || 'Hyaluronic acid filler', patients: ri(Math.round(ctx.patientCount * 0.1), Math.round(ctx.patientCount * 0.2)), improvement_pct: pct(), retention_12mo: pct(), top_anatomy: ctx.topAnatomy[1] || 'Lips' },
                { substance: ctx.topSubstances[3] || 'Retinol', patients: ri(Math.round(ctx.patientCount * 0.05), Math.round(ctx.patientCount * 0.15)), improvement_pct: pct(), retention_12mo: pct(), top_anatomy: ctx.topAnatomy[2] || 'Chin' },
            ],
            tags: [topCond.toLowerCase().replace(/ /g, '-'), topSub.toLowerCase(), secondSub.toLowerCase(), 'comparative', 'outcomes'],
            entities: [topSub, secondSub, topDev, topAnat, topCond],
            publishedAt: new Date().toISOString().split('T')[0],
            isFeatured: false,
            trendScore: ri(70, 95),
        };
    }

    function detectCategory(prompt, cond, sub) {
        const p = prompt.toLowerCase();
        if (p.includes('market') || p.includes('trend') || p.includes('switch') || p.includes('migration')) return 'market_trends';
        if (p.includes('provider') || p.includes('injector') || p.includes('technique')) return 'provider_intelligence';
        if (p.includes('product') || p.includes('brand') || p.includes('substance') || p.includes('compound')) return 'product_substance';
        if (p.includes('cohort') || p.includes('demographic') || p.includes('population')) return 'patient_cohorts';
        return 'treatment_outcomes';
    }
})();


});
