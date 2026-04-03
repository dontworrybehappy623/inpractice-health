document.addEventListener('DOMContentLoaded', () => {

// ══════════════════════════════════════
//  INSIGHT DATA (18 insights)
// ══════════════════════════════════════

const CATEGORY_LABELS = {
    treatment_outcomes: 'Treatment Outcomes',
    provider_intelligence: 'Provider Intelligence',
    product_substance: 'Product & Substance',
    patient_cohorts: 'Patient Cohorts',
    market_trends: 'Market Trends',
};

const INSIGHTS = [
    // ── Treatment Outcomes (4) ──
    {
        id: 'treatment-001',
        category: 'treatment_outcomes',
        tier: 'free',
        title: 'Botulinum Toxin Forehead Line Reduction: 6-Month Multi-Clinic Analysis',
        summary: 'Analysis of 340 patients across 12 clinics shows consistent wrinkle severity reduction of 62% at the 4-week mark, with durability varying significantly by injection depth and dilution ratio.',
        preview: 'Analysis of 340 patients across 12 clinics shows consistent wrinkle severity reduction of 62% at the 4-week mark.',
        content: {
            keyFinding: 'Clinics using a higher dilution ratio (2.5 mL per 100U) achieved 18% longer duration of effect compared to standard dilution, without increased adverse events.',
            supportingFindings: [
                'Mean wrinkle severity score dropped from 3.2 to 1.2 (Fitzpatrick scale) at 4 weeks across all sites.',
                'Duration of effect ranged from 3.1 to 4.8 months, strongly correlated with injection technique depth.',
                'Patient satisfaction (FACE-Q) exceeded 85% across all participating clinics.',
                'No statistically significant difference in outcomes between male and female patients after controlling for muscle mass.',
            ],
            recommendation: 'Consider standardizing dilution protocols to 2.5 mL per 100U for forehead treatments. Clinics currently using lower dilution ratios may see improved patient retention through longer-lasting results.',
            limitations: 'Follow-up data beyond 6 months is limited to 40% of the cohort. Injection depth was self-reported by providers, not independently verified.',
        },
        evidence: {
            score: 7.2,
            breakdown: { sample_size: 1.8, clinic_diversity: 2.0, follow_up: 1.2, completeness: 1.4, image_validation: 0.8 },
            clinicCount: 12,
            patientCount: 340,
            imageCount: 89,
        },
        provingData: [
            { clinic: 'Aesthetic Medical Center', patients: 42, avg_reduction: '64%', avg_duration: '4.2 mo', dilution: '2.5 mL/100U', satisfaction: '88%' },
            { clinic: 'Glow Dermatology', patients: 31, avg_reduction: '59%', avg_duration: '3.6 mo', dilution: '2.0 mL/100U', satisfaction: '82%' },
            { clinic: 'Elevate Aesthetics', patients: 38, avg_reduction: '66%', avg_duration: '4.5 mo', dilution: '2.5 mL/100U', satisfaction: '91%' },
            { clinic: 'Peak Performance Health', patients: 28, avg_reduction: '61%', avg_duration: '3.8 mo', dilution: '2.0 mL/100U', satisfaction: '85%' },
            { clinic: 'RenewMD Partners', patients: 35, avg_reduction: '63%', avg_duration: '4.1 mo', dilution: '2.5 mL/100U', satisfaction: '87%' },
        ],
        tags: ['botox', 'forehead', 'wrinkle-reduction', 'multi-clinic'],
        entities: ['Botulinum Toxin A', 'Frontalis', 'Glabellar Complex'],
        publishedAt: '2026-03-28',
        isFeatured: true,
        trendScore: 92,
    },
    {
        id: 'treatment-002',
        category: 'treatment_outcomes',
        tier: 'standard',
        title: 'Hyaluronic Acid Filler Longevity by Injection Site: Nasolabial vs. Marionette Lines',
        summary: 'Comparative analysis of 218 filler sessions reveals that nasolabial fold treatments retain 74% of volume correction at 9 months, while marionette line treatments drop to 51% by the same time point.',
        preview: 'Comparative analysis of 218 filler sessions reveals that nasolabial fold treatments retain 74% of volume correction at 9 months.',
        content: {
            keyFinding: 'Nasolabial treatments with cross-linked HA fillers show 23% greater volume retention at 9 months compared to marionette line treatments, independent of product brand.',
            supportingFindings: [
                'Volume retention at 6 months: nasolabial 82%, marionette 64%, measured via 3D imaging.',
                'Retreatment rates were 2.1x higher for marionette lines within the observation period.',
                'No significant difference between Juvederm and Restylane product families for nasolabial outcomes.',
                'Patient-reported satisfaction was higher for nasolabial treatments at every time point.',
            ],
            recommendation: 'Set patient expectations for marionette line treatments accordingly — plan for a maintenance schedule of 6-7 months vs. 9-10 months for nasolabial folds.',
            limitations: 'All measurements relied on 3D volumetric scanning available at only 5 of the 8 participating clinics. Remaining sites used clinical grading scales.',
        },
        evidence: {
            score: 6.8,
            breakdown: { sample_size: 1.5, clinic_diversity: 1.6, follow_up: 1.5, completeness: 1.4, image_validation: 0.8 },
            clinicCount: 8,
            patientCount: 218,
            imageCount: 156,
        },
        provingData: [
            { site: 'Nasolabial', sessions: 124, retention_6mo: '82%', retention_9mo: '74%', retreatment_rate: '18%' },
            { site: 'Marionette', sessions: 94, retention_6mo: '64%', retention_9mo: '51%', retreatment_rate: '38%' },
        ],
        tags: ['filler', 'hyaluronic-acid', 'nasolabial', 'longevity'],
        entities: ['Hyaluronic Acid', 'Nasolabial Fold', 'Marionette Lines'],
        publishedAt: '2026-03-22',
        isFeatured: false,
        trendScore: 78,
    },
    {
        id: 'treatment-003',
        category: 'treatment_outcomes',
        tier: 'standard',
        title: 'Combined IPL + Chemical Peel Protocol: 12-Week Melasma Outcomes',
        summary: 'A structured protocol combining IPL at 2-week intervals with 20% TCA peels shows 47% MASI score reduction in Fitzpatrick III-IV patients — outperforming either modality alone by 19%.',
        preview: 'A structured protocol combining IPL at 2-week intervals with 20% TCA peels shows 47% MASI score reduction.',
        content: {
            keyFinding: 'The combination protocol achieved nearly double the MASI improvement of IPL-only treatments (47% vs. 28%) with no increase in post-inflammatory hyperpigmentation rates.',
            supportingFindings: [
                'IPL-only cohort achieved 28% MASI reduction; peel-only achieved 31%.',
                'Post-inflammatory hyperpigmentation occurred in 4.2% of combination patients vs. 5.1% for IPL-only.',
                'Fitzpatrick IV patients showed the most dramatic improvement differential (combination 52% vs. IPL-only 22%).',
                'Treatment adherence was highest in the combination group (91% completed all sessions).',
            ],
            recommendation: 'For Fitzpatrick III-IV patients with moderate melasma, the combined protocol should be considered first-line. Space IPL and peel sessions by at least 10 days.',
            limitations: 'Study size is modest (89 patients). Longer-term recurrence data beyond 12 weeks is not yet available.',
        },
        evidence: {
            score: 5.8,
            breakdown: { sample_size: 1.0, clinic_diversity: 1.2, follow_up: 1.0, completeness: 1.6, image_validation: 1.0 },
            clinicCount: 5,
            patientCount: 89,
            imageCount: 267,
        },
        provingData: [
            { protocol: 'IPL + Peel', patients: 32, masi_reduction: '47%', pih_rate: '4.2%', adherence: '91%' },
            { protocol: 'IPL Only', patients: 30, masi_reduction: '28%', pih_rate: '5.1%', adherence: '83%' },
            { protocol: 'Peel Only', patients: 27, masi_reduction: '31%', pih_rate: '3.8%', adherence: '88%' },
        ],
        tags: ['IPL', 'chemical-peel', 'melasma', 'combination-therapy'],
        entities: ['IPL Device', 'Trichloroacetic Acid', 'Melasma'],
        publishedAt: '2026-03-15',
        isFeatured: false,
        trendScore: 71,
    },
    {
        id: 'treatment-004',
        category: 'treatment_outcomes',
        tier: 'premium',
        title: 'Microneedling Depth Optimization for Atrophic Acne Scars: Multi-Device Comparison',
        summary: 'Controlled comparison of three needle depth settings (0.5mm, 1.0mm, 1.5mm) across 156 patients shows 1.0mm as the optimal depth for acne scar improvement with the lowest adverse event profile.',
        preview: 'Controlled comparison of three needle depth settings across 156 patients shows 1.0mm as the optimal depth.',
        content: {
            keyFinding: '1.0mm needle depth achieved 71% of the scar improvement seen at 1.5mm, while reducing erythema duration by 40% and eliminating all punctate bleeding events.',
            supportingFindings: [
                'Scar severity (Goodman-Baron scale) improved by 1.8 grades at 1.5mm, 1.3 grades at 1.0mm, and 0.6 grades at 0.5mm.',
                'Mean erythema resolution: 1.5mm = 5.2 days, 1.0mm = 3.1 days, 0.5mm = 1.4 days.',
                'Patient willingness to repeat treatment: 1.0mm = 94%, 1.5mm = 72%, 0.5mm = 88%.',
                'No significant difference between SkinPen and Dermapen devices at matched depths.',
            ],
            recommendation: 'Default to 1.0mm for most acne scar patients. Reserve 1.5mm for severe scarring where patients accept longer downtime. The 0.5mm setting is insufficient for meaningful structural remodeling.',
            limitations: 'All treatments were performed by experienced providers. Results may differ with less experienced operators. Scar type distribution (ice pick vs. rolling vs. boxcar) was not evenly controlled.',
        },
        evidence: {
            score: 7.6,
            breakdown: { sample_size: 1.6, clinic_diversity: 1.8, follow_up: 1.4, completeness: 1.6, image_validation: 1.2 },
            clinicCount: 7,
            patientCount: 156,
            imageCount: 468,
        },
        provingData: [
            { depth: '0.5 mm', patients: 52, improvement: '0.6 grades', erythema_days: 1.4, repeat_willing: '88%' },
            { depth: '1.0 mm', patients: 54, improvement: '1.3 grades', erythema_days: 3.1, repeat_willing: '94%' },
            { depth: '1.5 mm', patients: 50, improvement: '1.8 grades', erythema_days: 5.2, repeat_willing: '72%' },
        ],
        tags: ['microneedling', 'acne-scars', 'needle-depth', 'device-comparison'],
        entities: ['Microneedling Device', 'Acne Scarring', 'Collagen Induction'],
        publishedAt: '2026-03-10',
        isFeatured: true,
        trendScore: 85,
    },

    // ── Provider Intelligence (3) ──
    {
        id: 'provider-001',
        category: 'provider_intelligence',
        tier: 'free',
        title: 'Clinic Retention Drivers: What Predicts Repeat Visits in Aesthetic Medicine',
        summary: 'Multi-clinic analysis of 2,840 patient journeys reveals that structured follow-up scheduling at the point of treatment is the strongest predictor of return visits — more impactful than satisfaction scores or pricing.',
        preview: 'Multi-clinic analysis of 2,840 patient journeys reveals that structured follow-up scheduling is the strongest predictor of return visits.',
        content: {
            keyFinding: 'Patients who left their appointment with a next visit already scheduled had a 73% return rate, versus 34% for those told to "call when ready."',
            supportingFindings: [
                'Satisfaction scores (FACE-Q) above 80 did not predict return visits when follow-up was not scheduled (return rate: 38%).',
                'Clinics in the top quartile for retention all used pre-scheduled follow-ups as standard protocol.',
                'Price sensitivity was a factor only when satisfaction scores were below 70 — above that threshold, scheduling dominated.',
                'The average interval between treatments for retained patients was 4.3 months across all treatment types.',
            ],
            recommendation: 'Implement mandatory follow-up scheduling before checkout for all treatment types. This single operational change is the highest-leverage retention intervention available.',
            limitations: 'Data does not capture patients who returned to different clinics. Retention is measured within the same practice only.',
        },
        evidence: {
            score: 8.4,
            breakdown: { sample_size: 2.0, clinic_diversity: 2.0, follow_up: 1.8, completeness: 1.6, image_validation: 1.0 },
            clinicCount: 14,
            patientCount: 2840,
            imageCount: 0,
        },
        provingData: [
            { scheduling: 'Pre-scheduled', patients: 1620, return_rate: '73%', avg_interval: '4.1 mo', satisfaction: '86' },
            { scheduling: 'Call when ready', patients: 890, return_rate: '34%', avg_interval: '7.8 mo', satisfaction: '84' },
            { scheduling: 'Reminder sent', patients: 330, return_rate: '52%', avg_interval: '5.6 mo', satisfaction: '85' },
        ],
        tags: ['retention', 'scheduling', 'patient-journey', 'operational'],
        entities: ['Encounter', 'Person', 'Provider'],
        publishedAt: '2026-03-30',
        isFeatured: true,
        trendScore: 95,
    },
    {
        id: 'provider-002',
        category: 'provider_intelligence',
        tier: 'standard',
        title: 'Provider Technique Variation: Impact on Botox Duration Across 9 Clinics',
        summary: 'Standardized outcome tracking across 9 clinics reveals a 42% spread in average botox duration — from 2.8 to 4.8 months — driven primarily by injection depth and post-treatment instructions rather than product brand.',
        preview: 'Standardized outcome tracking across 9 clinics reveals a 42% spread in average botox duration.',
        content: {
            keyFinding: 'The top 3 clinics by duration consistently used intramuscular (not subdermal) injection technique and provided written post-treatment activity restrictions.',
            supportingFindings: [
                'Mean duration across all clinics: 3.7 months. Standard deviation: 0.6 months.',
                'Clinics using identical products but different techniques showed duration differences of up to 1.4 months.',
                'Post-treatment instruction compliance correlated with 0.4 months additional duration on average.',
                'Provider experience (years in practice) did not correlate with outcomes once technique was controlled for.',
            ],
            recommendation: 'Develop and distribute standardized injection depth guidelines and post-treatment instruction sheets. This can normalize outcomes without requiring product changes.',
            limitations: 'Patient self-reporting of duration introduces recall bias. Independent measurement at follow-up was available at only 4 clinics.',
        },
        evidence: {
            score: 6.4,
            breakdown: { sample_size: 1.4, clinic_diversity: 1.8, follow_up: 1.2, completeness: 1.2, image_validation: 0.8 },
            clinicCount: 9,
            patientCount: 412,
            imageCount: 45,
        },
        provingData: [
            { clinic: 'Clinic A', technique: 'Intramuscular', avg_duration: '4.6 mo', instructions: 'Written', patients: 52 },
            { clinic: 'Clinic B', technique: 'Intramuscular', avg_duration: '4.8 mo', instructions: 'Written', patients: 48 },
            { clinic: 'Clinic C', technique: 'Subdermal', avg_duration: '3.1 mo', instructions: 'Verbal', patients: 44 },
            { clinic: 'Clinic D', technique: 'Subdermal', avg_duration: '2.8 mo', instructions: 'None', patients: 39 },
        ],
        tags: ['botox', 'technique', 'provider-variation', 'duration'],
        entities: ['Botulinum Toxin A', 'Provider', 'InterventionSession'],
        publishedAt: '2026-03-18',
        isFeatured: false,
        trendScore: 74,
    },
    {
        id: 'provider-003',
        category: 'provider_intelligence',
        tier: 'premium',
        title: 'Top-Performing Clinics for Non-Surgical Rhinoplasty: Outcome Benchmarks',
        summary: 'Benchmarking analysis of 11 clinics performing non-surgical rhinoplasty identifies the key process differentiators of top-quartile performers — including 3D imaging consultation, standardized consent, and revision protocols.',
        preview: 'Benchmarking analysis of 11 clinics performing non-surgical rhinoplasty identifies the key process differentiators.',
        content: {
            keyFinding: 'Clinics using 3D pre-visualization during consultation had 45% fewer revision requests and 28% higher satisfaction scores compared to those using photo-only planning.',
            supportingFindings: [
                'Top-quartile clinics averaged 96% satisfaction vs. 78% for bottom quartile.',
                'Revision rates: top quartile 4%, bottom quartile 18%.',
                'All top-quartile clinics used a standardized consent process that included visual outcome expectations.',
                'Complication rates (vascular events) were uniformly low (<0.5%) across all clinics regardless of performance tier.',
            ],
            recommendation: 'Invest in 3D imaging technology for rhinoplasty consultations. The ROI through reduced revisions and higher satisfaction likely outweighs equipment costs within 12-18 months for medium-volume practices.',
            limitations: 'Sample includes only clinics performing 20+ non-surgical rhinoplasty procedures per quarter. Results may not generalize to lower-volume practices.',
        },
        evidence: {
            score: 7.0,
            breakdown: { sample_size: 1.4, clinic_diversity: 1.8, follow_up: 1.2, completeness: 1.4, image_validation: 1.2 },
            clinicCount: 11,
            patientCount: 384,
            imageCount: 576,
        },
        provingData: [
            { quartile: 'Top (3 clinics)', satisfaction: '96%', revision_rate: '4%', uses_3d: 'Yes', consent_std: 'Yes' },
            { quartile: 'Middle (5 clinics)', satisfaction: '85%', revision_rate: '11%', uses_3d: 'Mixed', consent_std: 'Partial' },
            { quartile: 'Bottom (3 clinics)', satisfaction: '78%', revision_rate: '18%', uses_3d: 'No', consent_std: 'No' },
        ],
        tags: ['rhinoplasty', 'benchmarking', 'non-surgical', '3D-imaging'],
        entities: ['Hyaluronic Acid', 'Nasal Dorsum', 'Provider', 'ClinicalImage'],
        publishedAt: '2026-03-05',
        isFeatured: false,
        trendScore: 68,
    },

    // ── Product & Substance (4) ──
    {
        id: 'product-001',
        category: 'product_substance',
        tier: 'free',
        title: 'Retinoid Formulation Comparison: Tretinoin vs. Adapalene for Anti-Aging in Clinical Practice',
        summary: 'Real-world comparison of 520 patients prescribed either tretinoin (0.025-0.05%) or adapalene (0.3%) for photoaging shows comparable efficacy at 6 months, with adapalene demonstrating significantly better tolerability.',
        preview: 'Real-world comparison of 520 patients shows comparable efficacy at 6 months, with adapalene demonstrating significantly better tolerability.',
        content: {
            keyFinding: 'At 6 months, both formulations achieved similar wrinkle depth reduction (tretinoin 34%, adapalene 31%), but adapalene patients had 60% fewer irritation-related discontinuations.',
            supportingFindings: [
                'Discontinuation due to irritation: tretinoin 22%, adapalene 9%.',
                'Time to visible improvement: tretinoin 8.2 weeks, adapalene 9.1 weeks (not statistically significant).',
                'Patient preference at 6 months: 71% of adapalene patients rated their experience as "good" or "excellent" vs. 58% for tretinoin.',
                'Pigmentation improvement was slightly superior with tretinoin (38% vs. 29% improvement in melanin index).',
            ],
            recommendation: 'For treatment-naive patients and those with sensitive skin, adapalene 0.3% offers a more favorable risk-benefit ratio for anti-aging. Reserve tretinoin for patients with specific hyperpigmentation goals who have demonstrated retinoid tolerance.',
            limitations: 'Retrospective analysis of clinical records. Product formulations varied by manufacturer and vehicle. Sun protection compliance was not controlled.',
        },
        evidence: {
            score: 7.8,
            breakdown: { sample_size: 1.8, clinic_diversity: 1.8, follow_up: 1.6, completeness: 1.6, image_validation: 1.0 },
            clinicCount: 10,
            patientCount: 520,
            imageCount: 312,
        },
        provingData: [
            { substance: 'Tretinoin 0.025%', patients: 180, wrinkle_reduction: '32%', discontinuation: '20%', satisfaction: '60%' },
            { substance: 'Tretinoin 0.05%', patients: 142, wrinkle_reduction: '36%', discontinuation: '24%', satisfaction: '56%' },
            { substance: 'Adapalene 0.3%', patients: 198, wrinkle_reduction: '31%', discontinuation: '9%', satisfaction: '71%' },
        ],
        tags: ['retinoid', 'tretinoin', 'adapalene', 'anti-aging'],
        entities: ['Tretinoin', 'Adapalene', 'Photoaging'],
        publishedAt: '2026-03-25',
        isFeatured: true,
        trendScore: 88,
    },
    {
        id: 'product-002',
        category: 'product_substance',
        tier: 'standard',
        title: 'HA Filler Brand Performance: Volume Retention Across Three Product Families',
        summary: 'Head-to-head volumetric analysis of 310 treatments using Juvederm Voluma, Restylane Lyft, and RHA 4 for midface augmentation shows statistically significant differences in 12-month volume retention.',
        preview: 'Head-to-head volumetric analysis of 310 treatments shows significant differences in 12-month volume retention.',
        content: {
            keyFinding: 'RHA 4 demonstrated the highest 12-month volume retention (68%) compared to Juvederm Voluma (62%) and Restylane Lyft (54%), likely due to its dynamic cross-linking technology.',
            supportingFindings: [
                '6-month retention: RHA 4 82%, Voluma 78%, Lyft 71%.',
                'Patient satisfaction at 12 months correlated directly with volume retention measurements.',
                'Injection pain scores were similar across all three products when using lidocaine premixed formulations.',
                'Cost per month of maintained correction favored RHA 4 despite higher unit price.',
            ],
            recommendation: 'For patients prioritizing longevity, RHA 4 offers the best value proposition for midface volumization. Restylane Lyft may still be preferred where initial cost sensitivity is paramount.',
            limitations: '3D scanning was performed at only 6 of 10 sites. Remaining sites used photographic assessment with clinical grading. Provider technique variation is a confound.',
        },
        evidence: {
            score: 6.6,
            breakdown: { sample_size: 1.6, clinic_diversity: 1.6, follow_up: 1.4, completeness: 1.2, image_validation: 0.8 },
            clinicCount: 10,
            patientCount: 310,
            imageCount: 186,
        },
        provingData: [
            { product: 'RHA 4', treatments: 108, retention_6mo: '82%', retention_12mo: '68%', satisfaction: '89%' },
            { product: 'Juvederm Voluma', treatments: 112, retention_6mo: '78%', retention_12mo: '62%', satisfaction: '84%' },
            { product: 'Restylane Lyft', treatments: 90, retention_6mo: '71%', retention_12mo: '54%', satisfaction: '76%' },
        ],
        tags: ['filler', 'HA', 'brand-comparison', 'midface'],
        entities: ['Hyaluronic Acid', 'Malar Region', 'Brand'],
        publishedAt: '2026-03-12',
        isFeatured: false,
        trendScore: 76,
    },
    {
        id: 'product-003',
        category: 'product_substance',
        tier: 'standard',
        title: 'LED Device Wavelength Efficacy: Red (630nm) vs. Near-Infrared (830nm) for Collagen Stimulation',
        summary: 'Controlled comparison of 178 patients using home LED devices shows near-infrared (830nm) outperforms red (630nm) for measurable collagen density improvement, while red light shows superior results for superficial skin texture.',
        preview: 'Controlled comparison of 178 patients shows near-infrared outperforms red light for collagen density improvement.',
        content: {
            keyFinding: 'Near-infrared (830nm) achieved 22% improvement in dermal collagen density (measured via ultrasound) vs. 14% for red (630nm) over 12 weeks of consistent daily use.',
            supportingFindings: [
                'Red light patients showed greater improvement in skin surface texture (roughness index: -18% vs. -11%).',
                'Combination panels (630nm + 830nm) showed additive benefits for both metrics.',
                'Compliance dropped 30% after week 6 for all groups — daily use protocols may need reassessment.',
                'No adverse events reported in any group.',
            ],
            recommendation: 'For structural anti-aging, prioritize devices with 830nm capability. For surface-level texture concerns, 630nm is sufficient. Combination devices offer the most versatile value.',
            limitations: 'Home-use compliance was tracked via app check-ins, not device sensors. Collagen density measurements require specialized ultrasound equipment not available at all sites.',
        },
        evidence: {
            score: 5.4,
            breakdown: { sample_size: 1.2, clinic_diversity: 1.0, follow_up: 1.2, completeness: 1.2, image_validation: 0.8 },
            clinicCount: 4,
            patientCount: 178,
            imageCount: 0,
        },
        provingData: [
            { wavelength: '630 nm (Red)', patients: 62, collagen_change: '+14%', texture_change: '-18%', compliance: '64%' },
            { wavelength: '830 nm (NIR)', patients: 58, collagen_change: '+22%', texture_change: '-11%', compliance: '61%' },
            { wavelength: 'Combination', patients: 58, collagen_change: '+24%', texture_change: '-16%', compliance: '58%' },
        ],
        tags: ['LED', 'phototherapy', 'collagen', 'device'],
        entities: ['LED Device', 'Collagen', 'Dermis'],
        publishedAt: '2026-03-08',
        isFeatured: false,
        trendScore: 64,
    },
    {
        id: 'product-004',
        category: 'product_substance',
        tier: 'premium',
        title: 'Topical Growth Factor Serums: Clinical Outcomes vs. Marketing Claims',
        summary: 'Independent analysis of 240 patients using four market-leading EGF serums reveals that only two of four products produced measurable improvement above vehicle control, with efficacy varying by growth factor concentration.',
        preview: 'Independent analysis of 240 patients using four EGF serums reveals that only two of four produced measurable improvement.',
        content: {
            keyFinding: 'Products with verified EGF concentration above 0.5 ppm showed statistically significant improvements in fine line depth (-19%) and skin firmness (+12%). Products below this threshold performed no better than vehicle.',
            supportingFindings: [
                'Two of four products tested had actual EGF concentrations below their labeled claims by >40%.',
                'Price did not predict efficacy — the second most expensive product was one of the non-performers.',
                'Patient-reported improvement did not correlate with measured improvement, highlighting placebo response.',
                'All four products showed mild improvements in hydration metrics regardless of EGF content.',
            ],
            recommendation: 'Request third-party concentration verification from vendors before adding EGF serums to retail inventory. The market has significant quality variation that directly impacts clinical outcomes.',
            limitations: 'Product brands are anonymized per agreement with the data-contributing clinics. Specific brand identification requires a data partnership agreement.',
        },
        evidence: {
            score: 6.2,
            breakdown: { sample_size: 1.4, clinic_diversity: 1.2, follow_up: 1.2, completeness: 1.6, image_validation: 0.8 },
            clinicCount: 6,
            patientCount: 240,
            imageCount: 120,
        },
        provingData: [
            { product: 'Product A', egf_verified: '0.8 ppm', fine_line_change: '-21%', firmness: '+14%', vs_vehicle: 'Significant' },
            { product: 'Product B', egf_verified: '0.6 ppm', fine_line_change: '-17%', firmness: '+10%', vs_vehicle: 'Significant' },
            { product: 'Product C', egf_verified: '0.2 ppm', fine_line_change: '-5%', firmness: '+2%', vs_vehicle: 'Not significant' },
            { product: 'Product D', egf_verified: '0.1 ppm', fine_line_change: '-3%', firmness: '+1%', vs_vehicle: 'Not significant' },
        ],
        tags: ['growth-factor', 'EGF', 'serum', 'efficacy-audit'],
        entities: ['Epidermal Growth Factor', 'Product', 'Substance'],
        publishedAt: '2026-02-28',
        isFeatured: false,
        trendScore: 72,
    },

    // ── Patient Cohorts (3) ──
    {
        id: 'cohort-001',
        category: 'patient_cohorts',
        tier: 'free',
        title: 'Age-Stratified Response to PRP Therapy: Under-40 vs. Over-40 Outcomes',
        summary: 'Analysis of 420 PRP therapy sessions stratified by age reveals that patients under 40 show 2.3x faster visible improvement, but patients over 40 show greater absolute improvement at 6 months when adherent to a 3-session protocol.',
        preview: 'Analysis of 420 PRP sessions stratified by age reveals patients under 40 show 2.3x faster visible improvement.',
        content: {
            keyFinding: 'Patients over 40 who completed all 3 sessions achieved 38% improvement in skin quality metrics — surpassing under-40 patients (29%) — likely due to greater room for improvement at baseline.',
            supportingFindings: [
                'Time to first visible improvement: under-40 = 2.1 weeks, over-40 = 4.8 weeks.',
                'Protocol adherence (3 sessions): under-40 = 74%, over-40 = 82%.',
                'Collagen density improvement was significantly higher in over-40 cohort (+26% vs. +15%).',
                'Hair density improvement (when PRP was applied to scalp) showed no age-stratified difference.',
            ],
            recommendation: 'Set expectations with under-40 patients that PRP improvements are incremental and may be subtle. For over-40 patients, emphasize the importance of completing the full 3-session protocol for maximum benefit.',
            limitations: 'PRP preparation protocols varied across clinics (single vs. double spin). Platelet concentration was not standardized.',
        },
        evidence: {
            score: 7.4,
            breakdown: { sample_size: 1.8, clinic_diversity: 1.6, follow_up: 1.4, completeness: 1.6, image_validation: 1.0 },
            clinicCount: 9,
            patientCount: 420,
            imageCount: 210,
        },
        provingData: [
            { age_group: 'Under 40', patients: 185, improvement_6mo: '29%', time_to_visible: '2.1 wk', adherence: '74%' },
            { age_group: '40-55', patients: 148, improvement_6mo: '38%', time_to_visible: '4.8 wk', adherence: '82%' },
            { age_group: 'Over 55', patients: 87, improvement_6mo: '34%', time_to_visible: '5.4 wk', adherence: '85%' },
        ],
        tags: ['PRP', 'age-stratified', 'regenerative', 'skin-quality'],
        entities: ['Platelet-Rich Plasma', 'Person', 'ObservationEvent'],
        publishedAt: '2026-03-26',
        isFeatured: true,
        trendScore: 86,
    },
    {
        id: 'cohort-002',
        category: 'patient_cohorts',
        tier: 'standard',
        title: 'Fitzpatrick IV-VI Laser Treatment Safety: Real-World Complication Rates',
        summary: 'Aggregated safety data from 680 laser treatments on Fitzpatrick IV-VI skin types across 8 clinics demonstrates that Nd:YAG and diode platforms maintain complication rates below 2% — challenging the assumption that laser is broadly contraindicated.',
        preview: 'Aggregated safety data from 680 laser treatments on Fitzpatrick IV-VI skin demonstrates complication rates below 2%.',
        content: {
            keyFinding: 'Post-inflammatory hyperpigmentation (PIH) rates for Nd:YAG on Fitzpatrick V-VI patients were 1.8% — comparable to the 1.5% rate observed in Fitzpatrick III patients with the same device.',
            supportingFindings: [
                'IPL had the highest complication rate on darker skin (7.2%) and should be avoided in Fitzpatrick V-VI.',
                'Diode laser (810nm) showed a 1.2% PIH rate with appropriate cooling protocols.',
                'Pre-treatment with hydroquinone 4% for 2 weeks reduced PIH incidence from 3.1% to 0.9% across all laser types.',
                'Provider experience with darker skin types was the strongest predictor of complication avoidance.',
            ],
            recommendation: 'Nd:YAG and diode lasers are safe for Fitzpatrick IV-VI when used by experienced providers with appropriate settings. Implement pre-treatment hydroquinone protocols as standard for these skin types.',
            limitations: 'This is retrospective observational data, not a controlled trial. Settings and protocols varied by provider. Long-term PIH resolution data is limited.',
        },
        evidence: {
            score: 8.0,
            breakdown: { sample_size: 2.0, clinic_diversity: 1.6, follow_up: 1.6, completeness: 1.6, image_validation: 1.2 },
            clinicCount: 8,
            patientCount: 680,
            imageCount: 340,
        },
        provingData: [
            { device: 'Nd:YAG', fitz: 'IV', treatments: 210, pih_rate: '1.2%', complication: '1.4%' },
            { device: 'Nd:YAG', fitz: 'V-VI', treatments: 128, pih_rate: '1.8%', complication: '2.0%' },
            { device: 'Diode 810nm', fitz: 'IV-VI', treatments: 184, pih_rate: '1.2%', complication: '1.5%' },
            { device: 'IPL', fitz: 'IV-VI', treatments: 158, pih_rate: '7.2%', complication: '8.1%' },
        ],
        tags: ['laser', 'safety', 'fitzpatrick', 'skin-of-color'],
        entities: ['Nd:YAG Laser', 'Diode Laser', 'Post-Inflammatory Hyperpigmentation'],
        publishedAt: '2026-03-20',
        isFeatured: false,
        trendScore: 80,
    },
    {
        id: 'cohort-003',
        category: 'patient_cohorts',
        tier: 'premium',
        title: 'Treatment Compliance and Goal Achievement: Predictive Factors from 1,200 Patient Journeys',
        summary: 'Longitudinal analysis of 1,200 patients with documented aesthetic goals reveals that early treatment response (within first 2 sessions) is the strongest predictor of full protocol completion — not demographics, price, or motivation level.',
        preview: 'Longitudinal analysis of 1,200 patients reveals that early treatment response is the strongest predictor of protocol completion.',
        content: {
            keyFinding: 'Patients showing measurable improvement after their first or second session completed their full treatment plan at a rate of 88%, compared to 41% for those with no early visible change.',
            supportingFindings: [
                'Demographic factors (age, income, gender) had <5% predictive power for compliance.',
                'Goal specificity mattered: patients with SMART-formatted goals completed protocols at 76% vs. 52% for vague goals.',
                'Provider communication style (measured via visit note sentiment) correlated with 12% higher completion rates.',
                'Cost was a discontinuation factor in only 8% of cases where early improvement was visible.',
            ],
            recommendation: 'Prioritize treatments where early visible results are achievable. For treatments with delayed onset, invest in before/after imaging to demonstrate subtle improvements that patients may not perceive on their own.',
            limitations: 'Goal achievement was assessed by the treating provider, not an independent evaluator. Visit note sentiment analysis uses LLM-based scoring, not validated instruments.',
        },
        evidence: {
            score: 8.2,
            breakdown: { sample_size: 2.0, clinic_diversity: 2.0, follow_up: 1.6, completeness: 1.6, image_validation: 1.0 },
            clinicCount: 15,
            patientCount: 1200,
            imageCount: 480,
        },
        provingData: [
            { early_response: 'Yes (session 1-2)', patients: 540, completion_rate: '88%', goal_achieved: '72%' },
            { early_response: 'Partial', patients: 380, completion_rate: '64%', goal_achieved: '48%' },
            { early_response: 'None visible', patients: 280, completion_rate: '41%', goal_achieved: '22%' },
        ],
        tags: ['compliance', 'goal-achievement', 'predictive', 'longitudinal'],
        entities: ['Person', 'Goal', 'Encounter', 'ObservationEvent'],
        publishedAt: '2026-02-25',
        isFeatured: false,
        trendScore: 70,
    },

    // ── Market Trends (4) ──
    {
        id: 'market-001',
        category: 'market_trends',
        tier: 'free',
        title: 'Regenerative Aesthetics Adoption: PRP and Exosome Treatment Volume 2024-2026',
        summary: 'Treatment volume data from 18 clinics shows regenerative aesthetic procedures (PRP, exosome, stem cell) grew 140% over 24 months, now representing 12% of all non-surgical procedures — up from 5% in early 2024.',
        preview: 'Treatment volume data from 18 clinics shows regenerative procedures grew 140% over 24 months.',
        content: {
            keyFinding: 'PRP treatments grew 85% while exosome-based treatments grew 340% from a smaller base — exosomes are the fastest-growing modality in aesthetic medicine by percentage.',
            supportingFindings: [
                'Average revenue per regenerative session ($650) exceeds that of neurotoxin sessions ($420) by 55%.',
                'Patient acquisition for regenerative treatments is 62% word-of-mouth — the highest of any treatment category.',
                'Clinics offering regenerative treatments saw 18% higher overall revenue growth than those that did not.',
                'Regulatory uncertainty around exosome sourcing has not measurably slowed adoption.',
            ],
            recommendation: 'Clinics not yet offering regenerative treatments should consider adding PRP as a low-barrier entry point. The revenue premium and patient demand trajectory make this a strategic priority.',
            limitations: 'Data represents primarily urban and suburban clinics. Rural practice adoption patterns may differ. Exosome product sourcing and quality varies significantly.',
        },
        evidence: {
            score: 8.6,
            breakdown: { sample_size: 2.0, clinic_diversity: 2.0, follow_up: 2.0, completeness: 1.6, image_validation: 1.0 },
            clinicCount: 18,
            patientCount: 4200,
            imageCount: 0,
        },
        provingData: [
            { period: 'Q1 2024', prp_volume: 320, exosome_volume: 45, pct_of_total: '5.1%' },
            { period: 'Q3 2024', prp_volume: 420, exosome_volume: 95, pct_of_total: '7.2%' },
            { period: 'Q1 2025', prp_volume: 510, exosome_volume: 140, pct_of_total: '9.1%' },
            { period: 'Q3 2025', prp_volume: 560, exosome_volume: 175, pct_of_total: '10.5%' },
            { period: 'Q1 2026', prp_volume: 592, exosome_volume: 198, pct_of_total: '12.0%' },
        ],
        tags: ['regenerative', 'PRP', 'exosome', 'growth-trend'],
        entities: ['Platelet-Rich Plasma', 'Exosome Therapy', 'Intervention'],
        publishedAt: '2026-04-01',
        isFeatured: true,
        trendScore: 96,
    },
    {
        id: 'market-002',
        category: 'market_trends',
        tier: 'free',
        title: 'GLP-1 Receptor Agonist Impact on Aesthetic Treatment Volume',
        summary: 'Cross-referencing weight loss medication records with aesthetic treatment data reveals that patients on GLP-1 agonists (semaglutide, tirzepatide) are 2.4x more likely to seek facial volume restoration procedures within 12 months.',
        preview: 'Patients on GLP-1 agonists are 2.4x more likely to seek facial volume restoration procedures within 12 months.',
        content: {
            keyFinding: 'GLP-1-associated facial volume loss ("Ozempic face") is driving a measurable shift in treatment mix: filler volume per session for GLP-1 patients averages 2.8 mL vs. 1.6 mL for non-GLP-1 patients.',
            supportingFindings: [
                'Clinics reporting the highest GLP-1 patient volume saw a 32% increase in filler revenue over 12 months.',
                'Body contouring procedure volume declined 15% at clinics with high GLP-1 patient penetration.',
                'GLP-1 patients represent a new demographic: 40% are first-time aesthetic patients with no prior treatment history.',
                'Average age of GLP-1 patients seeking aesthetics is 47, vs. 38 for the general aesthetic patient population.',
            ],
            recommendation: 'Develop specific consultation protocols for GLP-1 patients. This is a net-new patient segment with distinct needs (volume restoration > wrinkle treatment) and high lifetime value potential.',
            limitations: 'GLP-1 medication status was documented in clinical notes and may be underreported. Cross-referencing with prescription data was not available.',
        },
        evidence: {
            score: 7.0,
            breakdown: { sample_size: 1.6, clinic_diversity: 1.8, follow_up: 1.4, completeness: 1.4, image_validation: 0.8 },
            clinicCount: 12,
            patientCount: 860,
            imageCount: 215,
        },
        provingData: [
            { cohort: 'GLP-1 patients', patients: 310, filler_ml_avg: 2.8, first_time: '40%', avg_age: 47 },
            { cohort: 'Non-GLP-1 patients', patients: 550, filler_ml_avg: 1.6, first_time: '15%', avg_age: 38 },
        ],
        tags: ['GLP-1', 'semaglutide', 'volume-loss', 'market-shift'],
        entities: ['Semaglutide', 'Hyaluronic Acid', 'Facial Volume Loss'],
        publishedAt: '2026-03-29',
        isFeatured: true,
        trendScore: 94,
    },
    {
        id: 'market-003',
        category: 'market_trends',
        tier: 'standard',
        title: 'Non-Invasive Body Contouring Procedure Volume: 2-Year Trend Analysis',
        summary: 'Body contouring procedure volume across 14 clinics has plateaued in the last two quarters after 3 years of growth — coinciding with GLP-1 medication adoption. CoolSculpting leads in volume but shows the sharpest decline.',
        preview: 'Body contouring volume has plateaued in the last two quarters, coinciding with GLP-1 medication adoption.',
        content: {
            keyFinding: 'CoolSculpting volume dropped 22% year-over-year while radiofrequency-based devices (Morpheus8, TruSculpt) grew 15%, driven by skin tightening demand from rapid weight loss patients.',
            supportingFindings: [
                'Overall body contouring is flat (+1% YoY) after growing 25% annually from 2022-2024.',
                'Clinics that added skin tightening protocols alongside fat reduction saw 18% higher body contouring revenue.',
                'EMSculpt and muscle-toning devices maintained 12% growth, suggesting body composition (not just fat reduction) remains in demand.',
                'The 35-50 age segment showed the steepest body contouring decline (-18%), aligning with peak GLP-1 adoption.',
            ],
            recommendation: 'Pivot body contouring positioning from "fat reduction" to "body composition and skin quality." Add skin tightening protocols to existing body contouring packages to capture the post-weight-loss segment.',
            limitations: 'Device utilization data was self-reported by clinics. Some clinics may underreport declining treatments.',
        },
        evidence: {
            score: 7.4,
            breakdown: { sample_size: 1.8, clinic_diversity: 1.8, follow_up: 1.6, completeness: 1.4, image_validation: 0.8 },
            clinicCount: 14,
            patientCount: 3100,
            imageCount: 0,
        },
        provingData: [
            { device: 'CoolSculpting', volume_2025: 820, yoy_change: '-22%', avg_revenue: '$1,200' },
            { device: 'Morpheus8 Body', volume_2025: 440, yoy_change: '+18%', avg_revenue: '$1,800' },
            { device: 'TruSculpt', volume_2025: 310, yoy_change: '+12%', avg_revenue: '$1,400' },
            { device: 'EMSculpt', volume_2025: 580, yoy_change: '+12%', avg_revenue: '$900' },
        ],
        tags: ['body-contouring', 'CoolSculpting', 'trend', 'GLP-1-impact'],
        entities: ['CoolSculpting', 'Morpheus8', 'EMSculpt', 'Device'],
        publishedAt: '2026-03-14',
        isFeatured: false,
        trendScore: 75,
    },
    {
        id: 'market-004',
        category: 'market_trends',
        tier: 'premium',
        title: 'Male Aesthetics: Treatment Preferences and Growth Trajectory',
        summary: 'Male patients now represent 18% of aesthetic procedures across the network — up from 11% two years ago. Their treatment preferences, price sensitivity, and retention patterns differ substantially from the female patient base.',
        preview: 'Male patients now represent 18% of aesthetic procedures — up from 11% two years ago.',
        content: {
            keyFinding: 'Male patients show a strong preference for "no-downtime, no-discussion" treatments — 78% of male aesthetic visits are for neurotoxin or laser, vs. 52% for female patients.',
            supportingFindings: [
                'Male patient growth rate (28% CAGR) far outpaces overall market growth (12% CAGR).',
                'Price sensitivity is lower for male patients: average spend per visit is 15% higher than female patients for equivalent treatments.',
                'Retention is lower: 62% male vs. 74% female at 12 months — but retention improves sharply when male-specific scheduling (lunch-hour appointments) is offered.',
                'Referral source differs: 45% of male patients cite online research vs. 28% for female patients.',
            ],
            recommendation: 'Develop male-specific marketing and scheduling. Offer streamlined "express" appointment formats. The male segment is underpenetrated and growing rapidly — early investment in male-friendly patient experience will compound.',
            limitations: 'Gender data is based on EMR intake forms and may not capture full gender diversity. Analysis uses binary classification per available data.',
        },
        evidence: {
            score: 7.8,
            breakdown: { sample_size: 2.0, clinic_diversity: 2.0, follow_up: 1.6, completeness: 1.4, image_validation: 0.8 },
            clinicCount: 16,
            patientCount: 5400,
            imageCount: 0,
        },
        provingData: [
            { metric: 'Share of procedures', yr_2024: '11%', yr_2025: '15%', yr_2026: '18%' },
            { metric: 'Avg spend per visit', yr_2024: '$380', yr_2025: '$410', yr_2026: '$435' },
            { metric: '12-month retention', yr_2024: '58%', yr_2025: '60%', yr_2026: '62%' },
            { metric: 'Top treatment', yr_2024: 'Botox', yr_2025: 'Botox', yr_2026: 'Botox' },
        ],
        tags: ['male-aesthetics', 'growth', 'demographics', 'gender-trends'],
        entities: ['Person', 'Botulinum Toxin A', 'Encounter'],
        publishedAt: '2026-03-02',
        isFeatured: false,
        trendScore: 66,
    },
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

const COHORT_CONFIGS = {
    'treatment-001': {
        age: [28, 65], female: 0.72, months: 6,
        clinics: ['Aesthetic Medical Center', 'Glow Dermatology', 'Elevate Aesthetics', 'Peak Performance Health', 'RenewMD Partners', 'Radiance Skin Clinic', 'Vitality Med Spa', 'Luxe Aesthetics', 'Horizon Dermatology', 'Clarity Skin Center', 'Pure Aesthetics', 'Rejuvenate Clinic'],
        fields: {
            treatment_area: ['Forehead', 'Glabellar', 'Forehead + Glabellar'],
            dilution: ['2.0 mL/100U', '2.5 mL/100U'],
            units_injected: { range: [15, 30], dp: 0 },
            wrinkle_reduction_pct: { range: [42, 82], dp: 0, fmt: '%' },
            effect_duration_mo: { range: [2.8, 4.8], dp: 1 },
            satisfaction: { range: [72, 98], dp: 0 },
        },
    },
    'treatment-002': {
        age: [30, 68], female: 0.78, months: 9,
        fields: {
            injection_site: ['Nasolabial Fold', 'Marionette Lines'],
            product: ['Juvederm Voluma XC', 'Restylane Defyne', 'Juvederm Vollure'],
            volume_ml: { range: [0.8, 2.0], dp: 1 },
            retention_6mo_pct: (row, _r, _p, ri) => (row.injection_site === 'Nasolabial Fold' ? ri(72, 92) : ri(54, 74)) + '%',
            retention_9mo_pct: (row, _r, _p, ri) => (row.injection_site === 'Nasolabial Fold' ? ri(64, 84) : ri(38, 62)) + '%',
        },
    },
    'treatment-003': {
        age: [28, 58], female: 0.82, months: 3,
        fields: {
            fitzpatrick: ['III', 'IV'],
            protocol: ['IPL + Peel', 'IPL Only', 'Peel Only'],
            baseline_masi: { range: [12, 28], dp: 0 },
            masi_reduction_pct: (row, _r, _p, ri) => {
                if (row.protocol === 'IPL + Peel') return ri(35, 58) + '%';
                if (row.protocol === 'IPL Only') return ri(16, 38) + '%';
                return ri(18, 42) + '%';
            },
            pih_event: (_row, rng) => rng() < 0.05 ? 'Yes' : 'No',
            sessions_completed: { range: [2, 6], dp: 0 },
        },
    },
    'treatment-004': {
        age: [20, 52], female: 0.64, months: 6,
        fields: {
            device: ['SkinPen', 'Dermapen'],
            needle_depth_mm: ['0.5', '1.0', '1.5'],
            scar_type: ['Ice Pick', 'Rolling', 'Boxcar', 'Mixed'],
            improvement_grades: { range: [0.2, 2.1], dp: 1 },
            erythema_days: { range: [0.5, 7.0], dp: 1 },
            would_repeat: (_row, rng) => rng() < 0.85 ? 'Yes' : 'No',
        },
    },
    'provider-001': {
        age: [24, 72], female: 0.68, months: 18,
        fields: {
            scheduling_type: ['Pre-scheduled', 'Call when ready', 'Reminder sent'],
            treatment_type: ['Neurotoxin', 'Filler', 'Laser', 'PRP', 'Chemical Peel'],
            satisfaction_score: { range: [62, 98], dp: 0 },
            return_visit: (row, rng) => {
                if (row.scheduling_type === 'Pre-scheduled') return rng() < 0.73 ? 'Yes' : 'No';
                if (row.scheduling_type === 'Reminder sent') return rng() < 0.52 ? 'Yes' : 'No';
                return rng() < 0.34 ? 'Yes' : 'No';
            },
            days_to_return: (row, _r, _p, ri) => row.return_visit === 'Yes' ? ri(60, 280) : '',
        },
    },
    'provider-002': {
        age: [26, 65], female: 0.70, months: 12,
        clinics: ['Clinic A', 'Clinic B', 'Clinic C', 'Clinic D', 'Clinic E', 'Clinic F', 'Clinic G', 'Clinic H', 'Clinic I'],
        fields: {
            injection_technique: ['Intramuscular', 'Subdermal'],
            post_instructions: ['Written', 'Verbal', 'None'],
            units_injected: { range: [18, 35], dp: 0 },
            effect_duration_mo: (row, _r, _p, _ri, rf) => {
                const base = row.injection_technique === 'Intramuscular' ? rf(3.8, 5.2, 1) : rf(2.4, 3.6, 1);
                const bonus = row.post_instructions === 'Written' ? 0.4 : 0;
                return +(base + bonus).toFixed(1);
            },
        },
    },
    'provider-003': {
        age: [25, 55], female: 0.74, months: 12,
        fields: {
            consultation_type: ['3D Imaging', 'Photo Only'],
            consent_process: ['Standardized', 'Non-standardized'],
            product_volume_ml: { range: [0.4, 1.8], dp: 1 },
            satisfaction: { range: [68, 99], dp: 0 },
            revision_needed: (row, rng) => rng() < (row.consultation_type === '3D Imaging' ? 0.04 : 0.18) ? 'Yes' : 'No',
        },
    },
    'product-001': {
        age: [30, 68], female: 0.80, months: 6,
        fields: {
            product_prescribed: ['Tretinoin 0.025%', 'Tretinoin 0.05%', 'Adapalene 0.3%'],
            baseline_wrinkle_depth_mm: { range: [0.8, 2.4], dp: 1 },
            wrinkle_reduction_pct: (row, _r, _p, ri) => {
                if (row.product_prescribed.includes('Adapalene')) return ri(22, 40) + '%';
                if (row.product_prescribed.includes('0.05')) return ri(26, 46) + '%';
                return ri(22, 42) + '%';
            },
            discontinued_irritation: (row, rng) => {
                if (row.product_prescribed.includes('Adapalene')) return rng() < 0.09 ? 'Yes' : 'No';
                return rng() < 0.22 ? 'Yes' : 'No';
            },
            experience_rating: ['Poor', 'Fair', 'Good', 'Excellent'],
        },
    },
    'product-002': {
        age: [32, 65], female: 0.76, months: 12,
        fields: {
            product: ['RHA 4', 'Juvederm Voluma', 'Restylane Lyft'],
            volume_injected_ml: { range: [1.0, 3.0], dp: 1 },
            retention_6mo_pct: (row, _r, _p, ri) => {
                if (row.product === 'RHA 4') return ri(74, 90) + '%';
                if (row.product === 'Juvederm Voluma') return ri(70, 86) + '%';
                return ri(62, 80) + '%';
            },
            retention_12mo_pct: (row, _r, _p, ri) => {
                if (row.product === 'RHA 4') return ri(58, 78) + '%';
                if (row.product === 'Juvederm Voluma') return ri(52, 72) + '%';
                return ri(44, 64) + '%';
            },
            satisfaction: { range: [68, 95], dp: 0 },
        },
    },
    'product-003': {
        age: [28, 62], female: 0.82, months: 3,
        fields: {
            wavelength: ['630 nm (Red)', '830 nm (NIR)', 'Combination'],
            weeks_completed: { range: [4, 12], dp: 0 },
            daily_compliance_pct: { range: [40, 95], dp: 0, fmt: '%' },
            collagen_density_change: (row, _r, _p, ri) => {
                if (row.wavelength.includes('NIR')) return '+' + ri(14, 30) + '%';
                if (row.wavelength.includes('Combination')) return '+' + ri(16, 32) + '%';
                return '+' + ri(6, 22) + '%';
            },
            texture_improvement: (row, _r, _p, ri) => {
                if (row.wavelength.includes('Red')) return ri(10, 26) + '%';
                if (row.wavelength.includes('Combination')) return ri(8, 24) + '%';
                return ri(4, 18) + '%';
            },
        },
    },
    'product-004': {
        age: [32, 65], female: 0.80, months: 3,
        fields: {
            product: ['Product A', 'Product B', 'Product C', 'Product D'],
            weeks_used: { range: [4, 12], dp: 0 },
            fine_line_change: (row, _r, _p, ri) => {
                if (row.product <= 'Product B') return '-' + ri(12, 28) + '%';
                return '-' + ri(1, 8) + '%';
            },
            firmness_change: (row, _r, _p, ri) => {
                if (row.product <= 'Product B') return '+' + ri(6, 18) + '%';
                return '+' + ri(0, 4) + '%';
            },
            hydration_change_pct: { range: [2, 15], dp: 0, fmt: '%' },
        },
    },
    'cohort-001': {
        age: [22, 68], female: 0.66, months: 6,
        fields: {
            age_group: (row) => row.age < 40 ? 'Under 40' : (row.age <= 55 ? '40-55' : 'Over 55'),
            treatment_area: ['Face', 'Scalp', 'Decolletage'],
            prp_sessions: { range: [1, 3], dp: 0 },
            improvement_6mo_pct: (row, _r, _p, ri) => {
                if (row.age < 40) return ri(16, 42) + '%';
                if (row.age <= 55) return ri(24, 52) + '%';
                return ri(20, 48) + '%';
            },
            weeks_to_visible: (row, _r, _p, _ri, rf) => {
                if (row.age < 40) return rf(1.2, 3.5, 1);
                if (row.age <= 55) return rf(3.0, 6.5, 1);
                return rf(3.5, 7.5, 1);
            },
        },
    },
    'cohort-002': {
        age: [20, 58], female: 0.72, months: 12,
        fields: {
            fitzpatrick: ['IV', 'V', 'VI'],
            device: ['Nd:YAG', 'Diode 810nm', 'IPL'],
            treatment_area: ['Face', 'Legs', 'Bikini', 'Underarms'],
            pih_event: (row, rng) => {
                if (row.device === 'IPL') return rng() < 0.072 ? 'Yes' : 'No';
                return rng() < 0.018 ? 'Yes' : 'No';
            },
            pre_hydroquinone: (_row, rng) => rng() < 0.45 ? 'Yes' : 'No',
            sessions: { range: [1, 6], dp: 0 },
        },
    },
    'cohort-003': {
        age: [22, 68], female: 0.70, months: 24,
        fields: {
            treatment_type: ['Neurotoxin', 'Filler', 'Laser', 'Skin Care Protocol', 'PRP'],
            goal_type: ['SMART', 'Vague'],
            early_response: ['Yes', 'Partial', 'None visible'],
            sessions_planned: { range: [2, 8], dp: 0 },
            sessions_completed: (row, _r, _p, ri) => {
                const planned = typeof row.sessions_planned === 'number' ? row.sessions_planned : parseInt(row.sessions_planned);
                if (row.early_response === 'Yes') return ri(Math.max(1, planned - 1), planned);
                if (row.early_response === 'Partial') return ri(Math.max(1, planned - 3), planned);
                return ri(1, Math.max(1, planned - 2));
            },
            goal_achieved: (row, rng) => {
                if (row.early_response === 'Yes') return rng() < 0.72 ? 'Yes' : 'No';
                if (row.early_response === 'Partial') return rng() < 0.48 ? 'Yes' : 'No';
                return rng() < 0.22 ? 'Yes' : 'No';
            },
        },
    },
    'market-001': {
        age: [26, 65], female: 0.68, months: 24,
        fields: {
            procedure_type: ['PRP', 'Exosome', 'Stem Cell'],
            referral_source: ['Word of mouth', 'Online research', 'Provider referral', 'Social media'],
            quarter: ['Q1 2024', 'Q3 2024', 'Q1 2025', 'Q3 2025', 'Q1 2026'],
            session_revenue: (_row, _r, _p, ri) => ri(350, 950),
        },
    },
    'market-002': {
        age: [28, 68], female: 0.72, months: 12,
        fields: {
            glp1_status: (_row, rng) => rng() < 0.36 ? (rng() < 0.6 ? 'Semaglutide' : 'Tirzepatide') : 'None',
            treatment_type: ['Filler', 'Neurotoxin', 'Laser', 'Skin Tightening'],
            filler_volume_ml: (row, _r, _p, _ri, rf) => row.glp1_status !== 'None' ? rf(1.4, 4.5, 1) : rf(0.5, 2.2, 1),
            first_time_patient: (row, rng) => row.glp1_status !== 'None' ? (rng() < 0.40 ? 'Yes' : 'No') : (rng() < 0.15 ? 'Yes' : 'No'),
        },
    },
    'market-003': {
        age: [25, 62], female: 0.76, months: 12,
        fields: {
            device: ['CoolSculpting', 'Morpheus8 Body', 'TruSculpt', 'EMSculpt'],
            treatment_area: ['Abdomen', 'Flanks', 'Thighs', 'Arms', 'Submental'],
            sessions: { range: [1, 4], dp: 0 },
            revenue: (row, _r, _p, ri) => {
                if (row.device === 'Morpheus8 Body') return ri(1200, 2400);
                if (row.device === 'CoolSculpting') return ri(800, 1600);
                if (row.device === 'TruSculpt') return ri(900, 1800);
                return ri(500, 1200);
            },
        },
    },
    'market-004': {
        age: [25, 65], female: 0.82, months: 24,
        fields: {
            treatment_type: ['Neurotoxin', 'Laser Hair Removal', 'Filler', 'Skin Resurfacing', 'Body Contouring'],
            appointment_type: ['Express (lunch-hour)', 'Standard'],
            referral_source: ['Online research', 'Friend/family', 'Provider referral', 'Social media'],
            spend: { range: [180, 650], dp: 0 },
            return_12mo: (_row, rng) => rng() < 0.62 ? 'Yes' : 'No',
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
    ${renderCohortSection(insight)}`;
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

document.getElementById('teaser-cta').addEventListener('click', (e) => {
    e.preventDefault();
    openClinicModal();
});


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
//  KEYBOARD
// ══════════════════════════════════════

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (detailModal.classList.contains('open')) closeDetailModal();
        else if (clinicModal.classList.contains('open')) closeClinicModal();
    }
});

});
