
// Master JS for State: BA - Persona: Cultural Vibrant
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 800;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const ba_index_form_immigrate_to_bahia = document.getElementById('ba-index-form-immigrate-to-bahia');
  if (ba_index_form_immigrate_to_bahia) {
    gsap.from('#ba-index-form-immigrate-to-bahia input, #ba-index-form-immigrate-to-bahia textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_index_list__immigration_assistance_for_cultural_enthusiasts_in_bahia_ = document.getElementById('ba-index-list--immigration-assistance-for-cultural-enthusiasts-in-bahia-');
  if (ba_index_list__immigration_assistance_for_cultural_enthusiasts_in_bahia_) {
    gsap.from('#ba-index-list--immigration-assistance-for-cultural-enthusiasts-in-bahia- li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_index_list_immigration_legal_services_in_brazil = document.getElementById('ba-index-list-immigration-legal-services-in-brazil');
  if (ba_index_list_immigration_legal_services_in_brazil) {
    gsap.from('#ba-index-list-immigration-legal-services-in-brazil li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_index_section_why_bahia = document.getElementById('ba-index-section-why-bahia');
  if (ba_index_section_why_bahia) {
    gsap.fromTo('#ba-index-section-why-bahia', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_index_list_how_the_process_works = document.getElementById('ba-index-list-how-the-process-works');
  if (ba_index_list_how_the_process_works) {
    gsap.from('#ba-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_index_section__frequently_asked_questions_about_living_in_bahia_ = document.getElementById('ba-index-section--frequently-asked-questions-about-living-in-bahia-');
  if (ba_index_section__frequently_asked_questions_about_living_in_bahia_) {
    gsap.fromTo('#ba-index-section--frequently-asked-questions-about-living-in-bahia-', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('ba-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (ba_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#ba-renouncingcitizenship-form-renounce-brazilian-citizenship input, #ba-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_list_quick_facts = document.getElementById('ba-renouncingcitizenship-list-quick-facts');
  if (ba_renouncingcitizenship_list_quick_facts) {
    gsap.from('#ba-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('ba-renouncingcitizenship-list-common-challenges-applicants-face');
  if (ba_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ba-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('ba-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (ba_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ba-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_section_renunciation_overview = document.getElementById('ba-renouncingcitizenship-section-renunciation-overview');
  if (ba_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#ba-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_form_who_is_this_for = document.getElementById('ba-renouncingcitizenship-form-who-is-this-for');
  if (ba_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#ba-renouncingcitizenship-form-who-is-this-for input, #ba-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_list_required_documents = document.getElementById('ba-renouncingcitizenship-list-required-documents');
  if (ba_renouncingcitizenship_list_required_documents) {
    gsap.from('#ba-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_list_process = document.getElementById('ba-renouncingcitizenship-list-process');
  if (ba_renouncingcitizenship_list_process) {
    gsap.from('#ba-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_section_timelines_deadlines = document.getElementById('ba-renouncingcitizenship-section-timelines-deadlines');
  if (ba_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ba-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_section_fees_costs = document.getElementById('ba-renouncingcitizenship-section-fees-costs');
  if (ba_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#ba-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('ba-renouncingcitizenship-list-risks-common-mistakes');
  if (ba_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#ba-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('ba-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (ba_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_section_bahia_specific_context = document.getElementById('ba-renouncingcitizenship-section-bahia-specific-context');
  if (ba_renouncingcitizenship_section_bahia_specific_context) {
    gsap.fromTo('#ba-renouncingcitizenship-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_section_what_our_clients_say = document.getElementById('ba-renouncingcitizenship-section-what-our-clients-say');
  if (ba_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ba-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('ba-renouncingcitizenship-section-frequently-asked-questions');
  if (ba_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ba-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_section_international_support = document.getElementById('ba-renouncingcitizenship-section-international-support');
  if (ba_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#ba-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_list_our_credentials = document.getElementById('ba-renouncingcitizenship-list-our-credentials');
  if (ba_renouncingcitizenship_list_our_credentials) {
    gsap.from('#ba-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_list_related_services = document.getElementById('ba-renouncingcitizenship-list-related-services');
  if (ba_renouncingcitizenship_list_related_services) {
    gsap.from('#ba-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('ba-renouncingcitizenship-section-youre-in-good-hands');
  if (ba_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ba-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_renouncingcitizenship_section_21 = document.getElementById('ba-renouncingcitizenship-section-21');
  if (ba_renouncingcitizenship_section_21) {
    gsap.fromTo('#ba-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('ba-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (ba_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#ba-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #ba-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_list_quick_facts = document.getElementById('ba-provisional-list-quick-facts');
  if (ba_provisional_list_quick_facts) {
    gsap.from('#ba-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_list_common_challenges_applicants_face = document.getElementById('ba-provisional-list-common-challenges-applicants-face');
  if (ba_provisional_list_common_challenges_applicants_face) {
    gsap.from('#ba-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_list_how_we_solve_these_challenges = document.getElementById('ba-provisional-list-how-we-solve-these-challenges');
  if (ba_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#ba-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_section_naturalisation_overview = document.getElementById('ba-provisional-section-naturalisation-overview');
  if (ba_provisional_section_naturalisation_overview) {
    gsap.fromTo('#ba-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_form_who_is_this_naturalisation_for = document.getElementById('ba-provisional-form-who-is-this-naturalisation-for');
  if (ba_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#ba-provisional-form-who-is-this-naturalisation-for input, #ba-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_list_required_documents = document.getElementById('ba-provisional-list-required-documents');
  if (ba_provisional_list_required_documents) {
    gsap.from('#ba-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_list_application_process = document.getElementById('ba-provisional-list-application-process');
  if (ba_provisional_list_application_process) {
    gsap.from('#ba-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_section_timelines_deadlines = document.getElementById('ba-provisional-section-timelines-deadlines');
  if (ba_provisional_section_timelines_deadlines) {
    gsap.fromTo('#ba-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_section_fees_costs = document.getElementById('ba-provisional-section-fees-costs');
  if (ba_provisional_section_fees_costs) {
    gsap.fromTo('#ba-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_list_risks_common_mistakes = document.getElementById('ba-provisional-list-risks-common-mistakes');
  if (ba_provisional_list_risks_common_mistakes) {
    gsap.from('#ba-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_section_diy_vs_professional_assistance = document.getElementById('ba-provisional-section-diy-vs-professional-assistance');
  if (ba_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_section_bahia_specific_context = document.getElementById('ba-provisional-section-bahia-specific-context');
  if (ba_provisional_section_bahia_specific_context) {
    gsap.fromTo('#ba-provisional-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_section_what_our_clients_say = document.getElementById('ba-provisional-section-what-our-clients-say');
  if (ba_provisional_section_what_our_clients_say) {
    gsap.fromTo('#ba-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_section_frequently_asked_questions = document.getElementById('ba-provisional-section-frequently-asked-questions');
  if (ba_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#ba-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_section_international_support = document.getElementById('ba-provisional-section-international-support');
  if (ba_provisional_section_international_support) {
    gsap.fromTo('#ba-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_list_our_credentials = document.getElementById('ba-provisional-list-our-credentials');
  if (ba_provisional_list_our_credentials) {
    gsap.from('#ba-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_list_related_services = document.getElementById('ba-provisional-list-related-services');
  if (ba_provisional_list_related_services) {
    gsap.from('#ba-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_section_youre_in_good_hands = document.getElementById('ba-provisional-section-youre-in-good-hands');
  if (ba_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#ba-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_provisional_section_21 = document.getElementById('ba-provisional-section-21');
  if (ba_provisional_section_21) {
    gsap.fromTo('#ba-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('ba-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (ba_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#ba-special-form-special-naturalisation-in-brazil-for-particular-cases input, #ba-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_list_quick_facts = document.getElementById('ba-special-list-quick-facts');
  if (ba_special_list_quick_facts) {
    gsap.from('#ba-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_list_common_challenges_applicants_face = document.getElementById('ba-special-list-common-challenges-applicants-face');
  if (ba_special_list_common_challenges_applicants_face) {
    gsap.from('#ba-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_list_how_we_solve_these_challenges = document.getElementById('ba-special-list-how-we-solve-these-challenges');
  if (ba_special_list_how_we_solve_these_challenges) {
    gsap.from('#ba-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_section_naturalisation_overview = document.getElementById('ba-special-section-naturalisation-overview');
  if (ba_special_section_naturalisation_overview) {
    gsap.fromTo('#ba-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_form_who_is_this_naturalisation_for = document.getElementById('ba-special-form-who-is-this-naturalisation-for');
  if (ba_special_form_who_is_this_naturalisation_for) {
    gsap.from('#ba-special-form-who-is-this-naturalisation-for input, #ba-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_list_required_documents = document.getElementById('ba-special-list-required-documents');
  if (ba_special_list_required_documents) {
    gsap.from('#ba-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_list_application_process = document.getElementById('ba-special-list-application-process');
  if (ba_special_list_application_process) {
    gsap.from('#ba-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_section_timelines_deadlines = document.getElementById('ba-special-section-timelines-deadlines');
  if (ba_special_section_timelines_deadlines) {
    gsap.fromTo('#ba-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_section_fees_costs = document.getElementById('ba-special-section-fees-costs');
  if (ba_special_section_fees_costs) {
    gsap.fromTo('#ba-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_list_risks_common_mistakes = document.getElementById('ba-special-list-risks-common-mistakes');
  if (ba_special_list_risks_common_mistakes) {
    gsap.from('#ba-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_section_diy_vs_professional_assistance = document.getElementById('ba-special-section-diy-vs-professional-assistance');
  if (ba_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_section_bahia_specific_context = document.getElementById('ba-special-section-bahia-specific-context');
  if (ba_special_section_bahia_specific_context) {
    gsap.fromTo('#ba-special-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_section_what_our_clients_say = document.getElementById('ba-special-section-what-our-clients-say');
  if (ba_special_section_what_our_clients_say) {
    gsap.fromTo('#ba-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_section_frequently_asked_questions = document.getElementById('ba-special-section-frequently-asked-questions');
  if (ba_special_section_frequently_asked_questions) {
    gsap.fromTo('#ba-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_section_international_support = document.getElementById('ba-special-section-international-support');
  if (ba_special_section_international_support) {
    gsap.fromTo('#ba-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_list_our_credentials = document.getElementById('ba-special-list-our-credentials');
  if (ba_special_list_our_credentials) {
    gsap.from('#ba-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_list_related_services = document.getElementById('ba-special-list-related-services');
  if (ba_special_list_related_services) {
    gsap.from('#ba-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_section_youre_in_good_hands = document.getElementById('ba-special-section-youre-in-good-hands');
  if (ba_special_section_youre_in_good_hands) {
    gsap.fromTo('#ba-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_special_section_21 = document.getElementById('ba-special-section-21');
  if (ba_special_section_21) {
    gsap.fromTo('#ba-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('ba-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (ba_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#ba-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #ba-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_list_quick_facts = document.getElementById('ba-ordinary-list-quick-facts');
  if (ba_ordinary_list_quick_facts) {
    gsap.from('#ba-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_list_common_challenges_applicants_face = document.getElementById('ba-ordinary-list-common-challenges-applicants-face');
  if (ba_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#ba-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_list_how_we_solve_these_challenges = document.getElementById('ba-ordinary-list-how-we-solve-these-challenges');
  if (ba_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ba-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_section_naturalisation_overview = document.getElementById('ba-ordinary-section-naturalisation-overview');
  if (ba_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#ba-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_form_who_is_this_naturalisation_for = document.getElementById('ba-ordinary-form-who-is-this-naturalisation-for');
  if (ba_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ba-ordinary-form-who-is-this-naturalisation-for input, #ba-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_list_required_documents = document.getElementById('ba-ordinary-list-required-documents');
  if (ba_ordinary_list_required_documents) {
    gsap.from('#ba-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_list_application_process = document.getElementById('ba-ordinary-list-application-process');
  if (ba_ordinary_list_application_process) {
    gsap.from('#ba-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_section_timelines_deadlines = document.getElementById('ba-ordinary-section-timelines-deadlines');
  if (ba_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#ba-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_section_fees_costs = document.getElementById('ba-ordinary-section-fees-costs');
  if (ba_ordinary_section_fees_costs) {
    gsap.fromTo('#ba-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_list_risks_common_mistakes = document.getElementById('ba-ordinary-list-risks-common-mistakes');
  if (ba_ordinary_list_risks_common_mistakes) {
    gsap.from('#ba-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_section_diy_vs_professional_assistance = document.getElementById('ba-ordinary-section-diy-vs-professional-assistance');
  if (ba_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_section_bahia_specific_context = document.getElementById('ba-ordinary-section-bahia-specific-context');
  if (ba_ordinary_section_bahia_specific_context) {
    gsap.fromTo('#ba-ordinary-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_section_what_our_clients_say = document.getElementById('ba-ordinary-section-what-our-clients-say');
  if (ba_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#ba-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_section_frequently_asked_questions = document.getElementById('ba-ordinary-section-frequently-asked-questions');
  if (ba_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ba-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_section_international_support = document.getElementById('ba-ordinary-section-international-support');
  if (ba_ordinary_section_international_support) {
    gsap.fromTo('#ba-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_list_our_credentials = document.getElementById('ba-ordinary-list-our-credentials');
  if (ba_ordinary_list_our_credentials) {
    gsap.from('#ba-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_list_related_services = document.getElementById('ba-ordinary-list-related-services');
  if (ba_ordinary_list_related_services) {
    gsap.from('#ba-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_section_youre_in_good_hands = document.getElementById('ba-ordinary-section-youre-in-good-hands');
  if (ba_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ba-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_ordinary_section_21 = document.getElementById('ba-ordinary-section-21');
  if (ba_ordinary_section_21) {
    gsap.fromTo('#ba-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('ba-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (ba_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#ba-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #ba-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_list_quick_facts = document.getElementById('ba-extraordinary-list-quick-facts');
  if (ba_extraordinary_list_quick_facts) {
    gsap.from('#ba-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_list_common_challenges_applicants_face = document.getElementById('ba-extraordinary-list-common-challenges-applicants-face');
  if (ba_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#ba-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_list_how_we_solve_these_challenges = document.getElementById('ba-extraordinary-list-how-we-solve-these-challenges');
  if (ba_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ba-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_section_naturalisation_overview = document.getElementById('ba-extraordinary-section-naturalisation-overview');
  if (ba_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#ba-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('ba-extraordinary-form-who-is-this-naturalisation-for');
  if (ba_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ba-extraordinary-form-who-is-this-naturalisation-for input, #ba-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_list_required_documents = document.getElementById('ba-extraordinary-list-required-documents');
  if (ba_extraordinary_list_required_documents) {
    gsap.from('#ba-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_list_application_process = document.getElementById('ba-extraordinary-list-application-process');
  if (ba_extraordinary_list_application_process) {
    gsap.from('#ba-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_section_timelines_deadlines = document.getElementById('ba-extraordinary-section-timelines-deadlines');
  if (ba_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#ba-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_section_fees_costs = document.getElementById('ba-extraordinary-section-fees-costs');
  if (ba_extraordinary_section_fees_costs) {
    gsap.fromTo('#ba-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_list_risks_common_mistakes = document.getElementById('ba-extraordinary-list-risks-common-mistakes');
  if (ba_extraordinary_list_risks_common_mistakes) {
    gsap.from('#ba-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_section_diy_vs_professional_assistance = document.getElementById('ba-extraordinary-section-diy-vs-professional-assistance');
  if (ba_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_section_bahia_specific_context = document.getElementById('ba-extraordinary-section-bahia-specific-context');
  if (ba_extraordinary_section_bahia_specific_context) {
    gsap.fromTo('#ba-extraordinary-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_section_what_our_clients_say = document.getElementById('ba-extraordinary-section-what-our-clients-say');
  if (ba_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#ba-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_section_frequently_asked_questions = document.getElementById('ba-extraordinary-section-frequently-asked-questions');
  if (ba_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ba-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_section_international_support = document.getElementById('ba-extraordinary-section-international-support');
  if (ba_extraordinary_section_international_support) {
    gsap.fromTo('#ba-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_list_our_credentials = document.getElementById('ba-extraordinary-list-our-credentials');
  if (ba_extraordinary_list_our_credentials) {
    gsap.from('#ba-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_list_related_services = document.getElementById('ba-extraordinary-list-related-services');
  if (ba_extraordinary_list_related_services) {
    gsap.from('#ba-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_section_youre_in_good_hands = document.getElementById('ba-extraordinary-section-youre-in-good-hands');
  if (ba_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ba-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extraordinary_section_21 = document.getElementById('ba-extraordinary-section-21');
  if (ba_extraordinary_section_21) {
    gsap.fromTo('#ba-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('ba-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (ba_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#ba-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #ba-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_list_quick_facts = document.getElementById('ba-reacquisitioncitizenship-list-quick-facts');
  if (ba_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#ba-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('ba-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (ba_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ba-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('ba-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (ba_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ba-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('ba-reacquisitioncitizenship-section-reacquisition-overview');
  if (ba_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#ba-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('ba-reacquisitioncitizenship-form-who-is-this-for');
  if (ba_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#ba-reacquisitioncitizenship-form-who-is-this-for input, #ba-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_list_required_documents = document.getElementById('ba-reacquisitioncitizenship-list-required-documents');
  if (ba_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#ba-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_list_process = document.getElementById('ba-reacquisitioncitizenship-list-process');
  if (ba_reacquisitioncitizenship_list_process) {
    gsap.from('#ba-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('ba-reacquisitioncitizenship-section-timelines-deadlines');
  if (ba_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ba-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_section_fees_costs = document.getElementById('ba-reacquisitioncitizenship-section-fees-costs');
  if (ba_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#ba-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('ba-reacquisitioncitizenship-list-risks-common-mistakes');
  if (ba_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#ba-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('ba-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (ba_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_section_bahia_specific_context = document.getElementById('ba-reacquisitioncitizenship-section-bahia-specific-context');
  if (ba_reacquisitioncitizenship_section_bahia_specific_context) {
    gsap.fromTo('#ba-reacquisitioncitizenship-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('ba-reacquisitioncitizenship-section-what-our-clients-say');
  if (ba_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ba-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('ba-reacquisitioncitizenship-section-frequently-asked-questions');
  if (ba_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ba-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_section_international_support = document.getElementById('ba-reacquisitioncitizenship-section-international-support');
  if (ba_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#ba-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_list_our_credentials = document.getElementById('ba-reacquisitioncitizenship-list-our-credentials');
  if (ba_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#ba-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_list_related_services = document.getElementById('ba-reacquisitioncitizenship-list-related-services');
  if (ba_reacquisitioncitizenship_list_related_services) {
    gsap.from('#ba-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('ba-reacquisitioncitizenship-section-youre-in-good-hands');
  if (ba_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ba-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_reacquisitioncitizenship_section_21 = document.getElementById('ba-reacquisitioncitizenship-section-21');
  if (ba_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#ba-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('ba-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (ba_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#ba-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #ba-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_list_quick_facts = document.getElementById('ba-scientificresearch-list-quick-facts');
  if (ba_scientificresearch_list_quick_facts) {
    gsap.from('#ba-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_list_common_challenges_applicants_face = document.getElementById('ba-scientificresearch-list-common-challenges-applicants-face');
  if (ba_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#ba-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('ba-scientificresearch-list-how-we-solve-these-challenges');
  if (ba_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#ba-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_section_residency_overview = document.getElementById('ba-scientificresearch-section-residency-overview');
  if (ba_scientificresearch_section_residency_overview) {
    gsap.fromTo('#ba-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_form_who_is_this_residency_for = document.getElementById('ba-scientificresearch-form-who-is-this-residency-for');
  if (ba_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#ba-scientificresearch-form-who-is-this-residency-for input, #ba-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_list_required_documents = document.getElementById('ba-scientificresearch-list-required-documents');
  if (ba_scientificresearch_list_required_documents) {
    gsap.from('#ba-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_list_application_process = document.getElementById('ba-scientificresearch-list-application-process');
  if (ba_scientificresearch_list_application_process) {
    gsap.from('#ba-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_section_timelines_deadlines = document.getElementById('ba-scientificresearch-section-timelines-deadlines');
  if (ba_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#ba-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_section_fees_costs = document.getElementById('ba-scientificresearch-section-fees-costs');
  if (ba_scientificresearch_section_fees_costs) {
    gsap.fromTo('#ba-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_list_risks_common_mistakes = document.getElementById('ba-scientificresearch-list-risks-common-mistakes');
  if (ba_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#ba-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('ba-scientificresearch-section-diy-vs-professional-assistance');
  if (ba_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_section_bahia_specific_context = document.getElementById('ba-scientificresearch-section-bahia-specific-context');
  if (ba_scientificresearch_section_bahia_specific_context) {
    gsap.fromTo('#ba-scientificresearch-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_section_what_our_clients_say = document.getElementById('ba-scientificresearch-section-what-our-clients-say');
  if (ba_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#ba-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_section_frequently_asked_questions = document.getElementById('ba-scientificresearch-section-frequently-asked-questions');
  if (ba_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#ba-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_section_international_support = document.getElementById('ba-scientificresearch-section-international-support');
  if (ba_scientificresearch_section_international_support) {
    gsap.fromTo('#ba-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_list_our_credentials = document.getElementById('ba-scientificresearch-list-our-credentials');
  if (ba_scientificresearch_list_our_credentials) {
    gsap.from('#ba-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_list_related_services = document.getElementById('ba-scientificresearch-list-related-services');
  if (ba_scientificresearch_list_related_services) {
    gsap.from('#ba-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_section_youre_in_good_hands = document.getElementById('ba-scientificresearch-section-youre-in-good-hands');
  if (ba_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#ba-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_scientificresearch_section_21 = document.getElementById('ba-scientificresearch-section-21');
  if (ba_scientificresearch_section_21) {
    gsap.fromTo('#ba-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_form_study_in_brazil_with_study_residency = document.getElementById('ba-study-form-study-in-brazil-with-study-residency');
  if (ba_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#ba-study-form-study-in-brazil-with-study-residency input, #ba-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_list_quick_facts = document.getElementById('ba-study-list-quick-facts');
  if (ba_study_list_quick_facts) {
    gsap.from('#ba-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_list_common_challenges_applicants_face = document.getElementById('ba-study-list-common-challenges-applicants-face');
  if (ba_study_list_common_challenges_applicants_face) {
    gsap.from('#ba-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_list_how_we_solve_these_challenges = document.getElementById('ba-study-list-how-we-solve-these-challenges');
  if (ba_study_list_how_we_solve_these_challenges) {
    gsap.from('#ba-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_section_residency_overview = document.getElementById('ba-study-section-residency-overview');
  if (ba_study_section_residency_overview) {
    gsap.fromTo('#ba-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_form_who_is_this_residency_for = document.getElementById('ba-study-form-who-is-this-residency-for');
  if (ba_study_form_who_is_this_residency_for) {
    gsap.from('#ba-study-form-who-is-this-residency-for input, #ba-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_list_required_documents = document.getElementById('ba-study-list-required-documents');
  if (ba_study_list_required_documents) {
    gsap.from('#ba-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_list_application_process = document.getElementById('ba-study-list-application-process');
  if (ba_study_list_application_process) {
    gsap.from('#ba-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_section_timelines_deadlines = document.getElementById('ba-study-section-timelines-deadlines');
  if (ba_study_section_timelines_deadlines) {
    gsap.fromTo('#ba-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_section_fees_costs = document.getElementById('ba-study-section-fees-costs');
  if (ba_study_section_fees_costs) {
    gsap.fromTo('#ba-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_list_risks_common_mistakes = document.getElementById('ba-study-list-risks-common-mistakes');
  if (ba_study_list_risks_common_mistakes) {
    gsap.from('#ba-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_section_diy_vs_professional_assistance = document.getElementById('ba-study-section-diy-vs-professional-assistance');
  if (ba_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_section_bahia_specific_context = document.getElementById('ba-study-section-bahia-specific-context');
  if (ba_study_section_bahia_specific_context) {
    gsap.fromTo('#ba-study-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_section_what_our_clients_say = document.getElementById('ba-study-section-what-our-clients-say');
  if (ba_study_section_what_our_clients_say) {
    gsap.fromTo('#ba-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_section_frequently_asked_questions = document.getElementById('ba-study-section-frequently-asked-questions');
  if (ba_study_section_frequently_asked_questions) {
    gsap.fromTo('#ba-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_section_international_support = document.getElementById('ba-study-section-international-support');
  if (ba_study_section_international_support) {
    gsap.fromTo('#ba-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_list_our_credentials = document.getElementById('ba-study-list-our-credentials');
  if (ba_study_list_our_credentials) {
    gsap.from('#ba-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_list_related_services = document.getElementById('ba-study-list-related-services');
  if (ba_study_list_related_services) {
    gsap.from('#ba-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_section_youre_in_good_hands = document.getElementById('ba-study-section-youre-in-good-hands');
  if (ba_study_section_youre_in_good_hands) {
    gsap.fromTo('#ba-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_study_section_21 = document.getElementById('ba-study-section-21');
  if (ba_study_section_21) {
    gsap.fromTo('#ba-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('ba-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (ba_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#ba-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #ba-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_list_quick_facts = document.getElementById('ba-educationalexchange-list-quick-facts');
  if (ba_educationalexchange_list_quick_facts) {
    gsap.from('#ba-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_list_common_challenges_applicants_face = document.getElementById('ba-educationalexchange-list-common-challenges-applicants-face');
  if (ba_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#ba-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('ba-educationalexchange-list-how-we-solve-these-challenges');
  if (ba_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ba-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_section_residency_overview = document.getElementById('ba-educationalexchange-section-residency-overview');
  if (ba_educationalexchange_section_residency_overview) {
    gsap.fromTo('#ba-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_form_who_is_this_residency_for = document.getElementById('ba-educationalexchange-form-who-is-this-residency-for');
  if (ba_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#ba-educationalexchange-form-who-is-this-residency-for input, #ba-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_list_required_documents = document.getElementById('ba-educationalexchange-list-required-documents');
  if (ba_educationalexchange_list_required_documents) {
    gsap.from('#ba-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_list_application_process = document.getElementById('ba-educationalexchange-list-application-process');
  if (ba_educationalexchange_list_application_process) {
    gsap.from('#ba-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_section_timelines_deadlines = document.getElementById('ba-educationalexchange-section-timelines-deadlines');
  if (ba_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#ba-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_section_fees_costs = document.getElementById('ba-educationalexchange-section-fees-costs');
  if (ba_educationalexchange_section_fees_costs) {
    gsap.fromTo('#ba-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_list_risks_common_mistakes = document.getElementById('ba-educationalexchange-list-risks-common-mistakes');
  if (ba_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#ba-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('ba-educationalexchange-section-diy-vs-professional-assistance');
  if (ba_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_section_bahia_specific_context = document.getElementById('ba-educationalexchange-section-bahia-specific-context');
  if (ba_educationalexchange_section_bahia_specific_context) {
    gsap.fromTo('#ba-educationalexchange-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_section_what_our_clients_say = document.getElementById('ba-educationalexchange-section-what-our-clients-say');
  if (ba_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#ba-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_section_frequently_asked_questions = document.getElementById('ba-educationalexchange-section-frequently-asked-questions');
  if (ba_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ba-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_section_international_support = document.getElementById('ba-educationalexchange-section-international-support');
  if (ba_educationalexchange_section_international_support) {
    gsap.fromTo('#ba-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_list_our_credentials = document.getElementById('ba-educationalexchange-list-our-credentials');
  if (ba_educationalexchange_list_our_credentials) {
    gsap.from('#ba-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_list_related_services = document.getElementById('ba-educationalexchange-list-related-services');
  if (ba_educationalexchange_list_related_services) {
    gsap.from('#ba-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_section_youre_in_good_hands = document.getElementById('ba-educationalexchange-section-youre-in-good-hands');
  if (ba_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ba-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_educationalexchange_section_21 = document.getElementById('ba-educationalexchange-section-21');
  if (ba_educationalexchange_section_21) {
    gsap.fromTo('#ba-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('ba-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (ba_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#ba-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #ba-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_list_quick_facts = document.getElementById('ba-humanitarian-list-quick-facts');
  if (ba_humanitarian_list_quick_facts) {
    gsap.from('#ba-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_list_common_challenges_applicants_face = document.getElementById('ba-humanitarian-list-common-challenges-applicants-face');
  if (ba_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#ba-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_list_how_we_solve_these_challenges = document.getElementById('ba-humanitarian-list-how-we-solve-these-challenges');
  if (ba_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#ba-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_section_residency_overview = document.getElementById('ba-humanitarian-section-residency-overview');
  if (ba_humanitarian_section_residency_overview) {
    gsap.fromTo('#ba-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_form_who_is_this_residency_for = document.getElementById('ba-humanitarian-form-who-is-this-residency-for');
  if (ba_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#ba-humanitarian-form-who-is-this-residency-for input, #ba-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_list_required_documents = document.getElementById('ba-humanitarian-list-required-documents');
  if (ba_humanitarian_list_required_documents) {
    gsap.from('#ba-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_list_application_process = document.getElementById('ba-humanitarian-list-application-process');
  if (ba_humanitarian_list_application_process) {
    gsap.from('#ba-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_section_timelines_deadlines = document.getElementById('ba-humanitarian-section-timelines-deadlines');
  if (ba_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#ba-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_section_fees_costs = document.getElementById('ba-humanitarian-section-fees-costs');
  if (ba_humanitarian_section_fees_costs) {
    gsap.fromTo('#ba-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_list_risks_common_mistakes = document.getElementById('ba-humanitarian-list-risks-common-mistakes');
  if (ba_humanitarian_list_risks_common_mistakes) {
    gsap.from('#ba-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_section_diy_vs_professional_assistance = document.getElementById('ba-humanitarian-section-diy-vs-professional-assistance');
  if (ba_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_section_bahia_specific_context = document.getElementById('ba-humanitarian-section-bahia-specific-context');
  if (ba_humanitarian_section_bahia_specific_context) {
    gsap.fromTo('#ba-humanitarian-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_section_what_our_clients_say = document.getElementById('ba-humanitarian-section-what-our-clients-say');
  if (ba_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#ba-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_section_frequently_asked_questions = document.getElementById('ba-humanitarian-section-frequently-asked-questions');
  if (ba_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#ba-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_section_international_support = document.getElementById('ba-humanitarian-section-international-support');
  if (ba_humanitarian_section_international_support) {
    gsap.fromTo('#ba-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_list_our_credentials = document.getElementById('ba-humanitarian-list-our-credentials');
  if (ba_humanitarian_list_our_credentials) {
    gsap.from('#ba-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_list_related_services = document.getElementById('ba-humanitarian-list-related-services');
  if (ba_humanitarian_list_related_services) {
    gsap.from('#ba-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_section_youre_in_good_hands = document.getElementById('ba-humanitarian-section-youre-in-good-hands');
  if (ba_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#ba-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_humanitarian_section_21 = document.getElementById('ba-humanitarian-section-21');
  if (ba_humanitarian_section_21) {
    gsap.fromTo('#ba-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('ba-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (ba_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#ba-digitalnomad-form-digital-nomad-residency-in-brazil input, #ba-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_list_quick_facts = document.getElementById('ba-digitalnomad-list-quick-facts');
  if (ba_digitalnomad_list_quick_facts) {
    gsap.from('#ba-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_list_common_challenges_applicants_face = document.getElementById('ba-digitalnomad-list-common-challenges-applicants-face');
  if (ba_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#ba-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('ba-digitalnomad-list-how-we-solve-these-challenges');
  if (ba_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#ba-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_section_residency_overview = document.getElementById('ba-digitalnomad-section-residency-overview');
  if (ba_digitalnomad_section_residency_overview) {
    gsap.fromTo('#ba-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_form_who_is_this_residency_for = document.getElementById('ba-digitalnomad-form-who-is-this-residency-for');
  if (ba_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#ba-digitalnomad-form-who-is-this-residency-for input, #ba-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_list_required_documents = document.getElementById('ba-digitalnomad-list-required-documents');
  if (ba_digitalnomad_list_required_documents) {
    gsap.from('#ba-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_list_application_process = document.getElementById('ba-digitalnomad-list-application-process');
  if (ba_digitalnomad_list_application_process) {
    gsap.from('#ba-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_section_timelines_deadlines = document.getElementById('ba-digitalnomad-section-timelines-deadlines');
  if (ba_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#ba-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_section_fees_costs = document.getElementById('ba-digitalnomad-section-fees-costs');
  if (ba_digitalnomad_section_fees_costs) {
    gsap.fromTo('#ba-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_list_risks_common_mistakes = document.getElementById('ba-digitalnomad-list-risks-common-mistakes');
  if (ba_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#ba-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('ba-digitalnomad-section-diy-vs-professional-assistance');
  if (ba_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_section_bahia_specific_context = document.getElementById('ba-digitalnomad-section-bahia-specific-context');
  if (ba_digitalnomad_section_bahia_specific_context) {
    gsap.fromTo('#ba-digitalnomad-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_section_what_our_clients_say = document.getElementById('ba-digitalnomad-section-what-our-clients-say');
  if (ba_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#ba-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_section_frequently_asked_questions = document.getElementById('ba-digitalnomad-section-frequently-asked-questions');
  if (ba_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#ba-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_section_international_support = document.getElementById('ba-digitalnomad-section-international-support');
  if (ba_digitalnomad_section_international_support) {
    gsap.fromTo('#ba-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_list_our_credentials = document.getElementById('ba-digitalnomad-list-our-credentials');
  if (ba_digitalnomad_list_our_credentials) {
    gsap.from('#ba-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_list_related_services = document.getElementById('ba-digitalnomad-list-related-services');
  if (ba_digitalnomad_list_related_services) {
    gsap.from('#ba-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_section_youre_in_good_hands = document.getElementById('ba-digitalnomad-section-youre-in-good-hands');
  if (ba_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#ba-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_digitalnomad_section_21 = document.getElementById('ba-digitalnomad-section-21');
  if (ba_digitalnomad_section_21) {
    gsap.fromTo('#ba-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('ba-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (ba_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#ba-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #ba-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_list_quick_facts = document.getElementById('ba-familyreunion-list-quick-facts');
  if (ba_familyreunion_list_quick_facts) {
    gsap.from('#ba-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_list_common_challenges_applicants_face = document.getElementById('ba-familyreunion-list-common-challenges-applicants-face');
  if (ba_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#ba-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_list_how_we_solve_these_challenges = document.getElementById('ba-familyreunion-list-how-we-solve-these-challenges');
  if (ba_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#ba-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_section_residency_overview = document.getElementById('ba-familyreunion-section-residency-overview');
  if (ba_familyreunion_section_residency_overview) {
    gsap.fromTo('#ba-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_form_who_is_this_residency_for = document.getElementById('ba-familyreunion-form-who-is-this-residency-for');
  if (ba_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#ba-familyreunion-form-who-is-this-residency-for input, #ba-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_list_required_documents = document.getElementById('ba-familyreunion-list-required-documents');
  if (ba_familyreunion_list_required_documents) {
    gsap.from('#ba-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_list_application_process = document.getElementById('ba-familyreunion-list-application-process');
  if (ba_familyreunion_list_application_process) {
    gsap.from('#ba-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_section_timelines_deadlines = document.getElementById('ba-familyreunion-section-timelines-deadlines');
  if (ba_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#ba-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_section_fees_costs = document.getElementById('ba-familyreunion-section-fees-costs');
  if (ba_familyreunion_section_fees_costs) {
    gsap.fromTo('#ba-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_list_risks_common_mistakes = document.getElementById('ba-familyreunion-list-risks-common-mistakes');
  if (ba_familyreunion_list_risks_common_mistakes) {
    gsap.from('#ba-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_section_diy_vs_professional_assistance = document.getElementById('ba-familyreunion-section-diy-vs-professional-assistance');
  if (ba_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_section_bahia_specific_context = document.getElementById('ba-familyreunion-section-bahia-specific-context');
  if (ba_familyreunion_section_bahia_specific_context) {
    gsap.fromTo('#ba-familyreunion-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_section_what_our_clients_say = document.getElementById('ba-familyreunion-section-what-our-clients-say');
  if (ba_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#ba-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_section_frequently_asked_questions = document.getElementById('ba-familyreunion-section-frequently-asked-questions');
  if (ba_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#ba-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_section_international_support = document.getElementById('ba-familyreunion-section-international-support');
  if (ba_familyreunion_section_international_support) {
    gsap.fromTo('#ba-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_list_our_credentials = document.getElementById('ba-familyreunion-list-our-credentials');
  if (ba_familyreunion_list_our_credentials) {
    gsap.from('#ba-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_list_related_services = document.getElementById('ba-familyreunion-list-related-services');
  if (ba_familyreunion_list_related_services) {
    gsap.from('#ba-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_section_youre_in_good_hands = document.getElementById('ba-familyreunion-section-youre-in-good-hands');
  if (ba_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#ba-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_familyreunion_section_21 = document.getElementById('ba-familyreunion-section-21');
  if (ba_familyreunion_section_21) {
    gsap.fromTo('#ba-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('ba-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (ba_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#ba-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #ba-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_list_quick_facts = document.getElementById('ba-mercosul-list-quick-facts');
  if (ba_mercosul_list_quick_facts) {
    gsap.from('#ba-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_list_common_challenges_applicants_face = document.getElementById('ba-mercosul-list-common-challenges-applicants-face');
  if (ba_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#ba-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_list_how_we_solve_these_challenges = document.getElementById('ba-mercosul-list-how-we-solve-these-challenges');
  if (ba_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#ba-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_section_residency_overview = document.getElementById('ba-mercosul-section-residency-overview');
  if (ba_mercosul_section_residency_overview) {
    gsap.fromTo('#ba-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_form_who_is_this_residency_for = document.getElementById('ba-mercosul-form-who-is-this-residency-for');
  if (ba_mercosul_form_who_is_this_residency_for) {
    gsap.from('#ba-mercosul-form-who-is-this-residency-for input, #ba-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_list_required_documents = document.getElementById('ba-mercosul-list-required-documents');
  if (ba_mercosul_list_required_documents) {
    gsap.from('#ba-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_list_application_process = document.getElementById('ba-mercosul-list-application-process');
  if (ba_mercosul_list_application_process) {
    gsap.from('#ba-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_section_timelines_deadlines = document.getElementById('ba-mercosul-section-timelines-deadlines');
  if (ba_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#ba-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_section_fees_costs = document.getElementById('ba-mercosul-section-fees-costs');
  if (ba_mercosul_section_fees_costs) {
    gsap.fromTo('#ba-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_list_risks_common_mistakes = document.getElementById('ba-mercosul-list-risks-common-mistakes');
  if (ba_mercosul_list_risks_common_mistakes) {
    gsap.from('#ba-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_section_diy_vs_professional_assistance = document.getElementById('ba-mercosul-section-diy-vs-professional-assistance');
  if (ba_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_section_bahia_specific_context = document.getElementById('ba-mercosul-section-bahia-specific-context');
  if (ba_mercosul_section_bahia_specific_context) {
    gsap.fromTo('#ba-mercosul-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_section_what_our_clients_say = document.getElementById('ba-mercosul-section-what-our-clients-say');
  if (ba_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#ba-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_section_frequently_asked_questions = document.getElementById('ba-mercosul-section-frequently-asked-questions');
  if (ba_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#ba-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_section_international_support = document.getElementById('ba-mercosul-section-international-support');
  if (ba_mercosul_section_international_support) {
    gsap.fromTo('#ba-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_list_our_credentials = document.getElementById('ba-mercosul-list-our-credentials');
  if (ba_mercosul_list_our_credentials) {
    gsap.from('#ba-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_list_related_services = document.getElementById('ba-mercosul-list-related-services');
  if (ba_mercosul_list_related_services) {
    gsap.from('#ba-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_section_youre_in_good_hands = document.getElementById('ba-mercosul-section-youre-in-good-hands');
  if (ba_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#ba-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_mercosul_section_21 = document.getElementById('ba-mercosul-section-21');
  if (ba_mercosul_section_21) {
    gsap.fromTo('#ba-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('ba-retiree-form-retire-in-brazil-with-retiree-residency');
  if (ba_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#ba-retiree-form-retire-in-brazil-with-retiree-residency input, #ba-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_list_quick_facts = document.getElementById('ba-retiree-list-quick-facts');
  if (ba_retiree_list_quick_facts) {
    gsap.from('#ba-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_list_common_challenges_applicants_face = document.getElementById('ba-retiree-list-common-challenges-applicants-face');
  if (ba_retiree_list_common_challenges_applicants_face) {
    gsap.from('#ba-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_list_how_we_solve_these_challenges = document.getElementById('ba-retiree-list-how-we-solve-these-challenges');
  if (ba_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#ba-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_section_residency_overview = document.getElementById('ba-retiree-section-residency-overview');
  if (ba_retiree_section_residency_overview) {
    gsap.fromTo('#ba-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_form_who_is_this_residency_for = document.getElementById('ba-retiree-form-who-is-this-residency-for');
  if (ba_retiree_form_who_is_this_residency_for) {
    gsap.from('#ba-retiree-form-who-is-this-residency-for input, #ba-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_list_required_documents = document.getElementById('ba-retiree-list-required-documents');
  if (ba_retiree_list_required_documents) {
    gsap.from('#ba-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_list_application_process = document.getElementById('ba-retiree-list-application-process');
  if (ba_retiree_list_application_process) {
    gsap.from('#ba-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_section_timelines_deadlines = document.getElementById('ba-retiree-section-timelines-deadlines');
  if (ba_retiree_section_timelines_deadlines) {
    gsap.fromTo('#ba-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_section_fees_costs = document.getElementById('ba-retiree-section-fees-costs');
  if (ba_retiree_section_fees_costs) {
    gsap.fromTo('#ba-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_list_risks_common_mistakes = document.getElementById('ba-retiree-list-risks-common-mistakes');
  if (ba_retiree_list_risks_common_mistakes) {
    gsap.from('#ba-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_section_diy_vs_professional_assistance = document.getElementById('ba-retiree-section-diy-vs-professional-assistance');
  if (ba_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_section_bahia_specific_context = document.getElementById('ba-retiree-section-bahia-specific-context');
  if (ba_retiree_section_bahia_specific_context) {
    gsap.fromTo('#ba-retiree-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_section_what_our_clients_say = document.getElementById('ba-retiree-section-what-our-clients-say');
  if (ba_retiree_section_what_our_clients_say) {
    gsap.fromTo('#ba-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_section_frequently_asked_questions = document.getElementById('ba-retiree-section-frequently-asked-questions');
  if (ba_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#ba-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_section_international_support = document.getElementById('ba-retiree-section-international-support');
  if (ba_retiree_section_international_support) {
    gsap.fromTo('#ba-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_list_our_credentials = document.getElementById('ba-retiree-list-our-credentials');
  if (ba_retiree_list_our_credentials) {
    gsap.from('#ba-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_list_related_services = document.getElementById('ba-retiree-list-related-services');
  if (ba_retiree_list_related_services) {
    gsap.from('#ba-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_section_youre_in_good_hands = document.getElementById('ba-retiree-section-youre-in-good-hands');
  if (ba_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#ba-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_retiree_section_21 = document.getElementById('ba-retiree-section-21');
  if (ba_retiree_section_21) {
    gsap.fromTo('#ba-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('ba-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (ba_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#ba-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #ba-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_list_quick_facts = document.getElementById('ba-volunteer-list-quick-facts');
  if (ba_volunteer_list_quick_facts) {
    gsap.from('#ba-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_list_common_challenges_applicants_face = document.getElementById('ba-volunteer-list-common-challenges-applicants-face');
  if (ba_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#ba-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_list_how_we_solve_these_challenges = document.getElementById('ba-volunteer-list-how-we-solve-these-challenges');
  if (ba_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#ba-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_section_residency_overview = document.getElementById('ba-volunteer-section-residency-overview');
  if (ba_volunteer_section_residency_overview) {
    gsap.fromTo('#ba-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_form_who_is_this_residency_for = document.getElementById('ba-volunteer-form-who-is-this-residency-for');
  if (ba_volunteer_form_who_is_this_residency_for) {
    gsap.from('#ba-volunteer-form-who-is-this-residency-for input, #ba-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_list_required_documents = document.getElementById('ba-volunteer-list-required-documents');
  if (ba_volunteer_list_required_documents) {
    gsap.from('#ba-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_list_application_process = document.getElementById('ba-volunteer-list-application-process');
  if (ba_volunteer_list_application_process) {
    gsap.from('#ba-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_section_timelines_deadlines = document.getElementById('ba-volunteer-section-timelines-deadlines');
  if (ba_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#ba-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_section_fees_costs = document.getElementById('ba-volunteer-section-fees-costs');
  if (ba_volunteer_section_fees_costs) {
    gsap.fromTo('#ba-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_list_risks_common_mistakes = document.getElementById('ba-volunteer-list-risks-common-mistakes');
  if (ba_volunteer_list_risks_common_mistakes) {
    gsap.from('#ba-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_section_diy_vs_professional_assistance = document.getElementById('ba-volunteer-section-diy-vs-professional-assistance');
  if (ba_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_section_bahia_specific_context = document.getElementById('ba-volunteer-section-bahia-specific-context');
  if (ba_volunteer_section_bahia_specific_context) {
    gsap.fromTo('#ba-volunteer-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_section_what_our_clients_say = document.getElementById('ba-volunteer-section-what-our-clients-say');
  if (ba_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#ba-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_section_frequently_asked_questions = document.getElementById('ba-volunteer-section-frequently-asked-questions');
  if (ba_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#ba-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_section_international_support = document.getElementById('ba-volunteer-section-international-support');
  if (ba_volunteer_section_international_support) {
    gsap.fromTo('#ba-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_list_our_credentials = document.getElementById('ba-volunteer-list-our-credentials');
  if (ba_volunteer_list_our_credentials) {
    gsap.from('#ba-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_list_related_services = document.getElementById('ba-volunteer-list-related-services');
  if (ba_volunteer_list_related_services) {
    gsap.from('#ba-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_section_youre_in_good_hands = document.getElementById('ba-volunteer-section-youre-in-good-hands');
  if (ba_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#ba-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_volunteer_section_21 = document.getElementById('ba-volunteer-section-21');
  if (ba_volunteer_section_21) {
    gsap.fromTo('#ba-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('ba-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (ba_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#ba-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #ba-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_list_quick_facts = document.getElementById('ba-skilledworker-list-quick-facts');
  if (ba_skilledworker_list_quick_facts) {
    gsap.from('#ba-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_list_common_challenges_applicants_face = document.getElementById('ba-skilledworker-list-common-challenges-applicants-face');
  if (ba_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#ba-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_list_how_we_solve_these_challenges = document.getElementById('ba-skilledworker-list-how-we-solve-these-challenges');
  if (ba_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#ba-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_section_residency_overview = document.getElementById('ba-skilledworker-section-residency-overview');
  if (ba_skilledworker_section_residency_overview) {
    gsap.fromTo('#ba-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_form_who_is_this_residency_for = document.getElementById('ba-skilledworker-form-who-is-this-residency-for');
  if (ba_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#ba-skilledworker-form-who-is-this-residency-for input, #ba-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_list_required_documents = document.getElementById('ba-skilledworker-list-required-documents');
  if (ba_skilledworker_list_required_documents) {
    gsap.from('#ba-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_list_application_process = document.getElementById('ba-skilledworker-list-application-process');
  if (ba_skilledworker_list_application_process) {
    gsap.from('#ba-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_section_timelines_deadlines = document.getElementById('ba-skilledworker-section-timelines-deadlines');
  if (ba_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#ba-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_section_fees_costs = document.getElementById('ba-skilledworker-section-fees-costs');
  if (ba_skilledworker_section_fees_costs) {
    gsap.fromTo('#ba-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_list_risks_common_mistakes = document.getElementById('ba-skilledworker-list-risks-common-mistakes');
  if (ba_skilledworker_list_risks_common_mistakes) {
    gsap.from('#ba-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_section_diy_vs_professional_assistance = document.getElementById('ba-skilledworker-section-diy-vs-professional-assistance');
  if (ba_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_section_bahia_specific_context = document.getElementById('ba-skilledworker-section-bahia-specific-context');
  if (ba_skilledworker_section_bahia_specific_context) {
    gsap.fromTo('#ba-skilledworker-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_section_what_our_clients_say = document.getElementById('ba-skilledworker-section-what-our-clients-say');
  if (ba_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#ba-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_section_frequently_asked_questions = document.getElementById('ba-skilledworker-section-frequently-asked-questions');
  if (ba_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#ba-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_section_international_support = document.getElementById('ba-skilledworker-section-international-support');
  if (ba_skilledworker_section_international_support) {
    gsap.fromTo('#ba-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_list_our_credentials = document.getElementById('ba-skilledworker-list-our-credentials');
  if (ba_skilledworker_list_our_credentials) {
    gsap.from('#ba-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_list_related_services = document.getElementById('ba-skilledworker-list-related-services');
  if (ba_skilledworker_list_related_services) {
    gsap.from('#ba-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_section_youre_in_good_hands = document.getElementById('ba-skilledworker-section-youre-in-good-hands');
  if (ba_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#ba-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_skilledworker_section_21 = document.getElementById('ba-skilledworker-section-21');
  if (ba_skilledworker_section_21) {
    gsap.fromTo('#ba-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('ba-religious-form-religious-residency-in-brazil-for-missions');
  if (ba_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#ba-religious-form-religious-residency-in-brazil-for-missions input, #ba-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_list_quick_facts = document.getElementById('ba-religious-list-quick-facts');
  if (ba_religious_list_quick_facts) {
    gsap.from('#ba-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_list_common_challenges_applicants_face = document.getElementById('ba-religious-list-common-challenges-applicants-face');
  if (ba_religious_list_common_challenges_applicants_face) {
    gsap.from('#ba-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_list_how_we_solve_these_challenges = document.getElementById('ba-religious-list-how-we-solve-these-challenges');
  if (ba_religious_list_how_we_solve_these_challenges) {
    gsap.from('#ba-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_section_residency_overview = document.getElementById('ba-religious-section-residency-overview');
  if (ba_religious_section_residency_overview) {
    gsap.fromTo('#ba-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_form_who_is_this_residency_for = document.getElementById('ba-religious-form-who-is-this-residency-for');
  if (ba_religious_form_who_is_this_residency_for) {
    gsap.from('#ba-religious-form-who-is-this-residency-for input, #ba-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_list_required_documents = document.getElementById('ba-religious-list-required-documents');
  if (ba_religious_list_required_documents) {
    gsap.from('#ba-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_list_application_process = document.getElementById('ba-religious-list-application-process');
  if (ba_religious_list_application_process) {
    gsap.from('#ba-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_section_timelines_deadlines = document.getElementById('ba-religious-section-timelines-deadlines');
  if (ba_religious_section_timelines_deadlines) {
    gsap.fromTo('#ba-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_section_fees_costs = document.getElementById('ba-religious-section-fees-costs');
  if (ba_religious_section_fees_costs) {
    gsap.fromTo('#ba-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_list_risks_common_mistakes = document.getElementById('ba-religious-list-risks-common-mistakes');
  if (ba_religious_list_risks_common_mistakes) {
    gsap.from('#ba-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_section_diy_vs_professional_assistance = document.getElementById('ba-religious-section-diy-vs-professional-assistance');
  if (ba_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_section_bahia_specific_context = document.getElementById('ba-religious-section-bahia-specific-context');
  if (ba_religious_section_bahia_specific_context) {
    gsap.fromTo('#ba-religious-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_section_what_our_clients_say = document.getElementById('ba-religious-section-what-our-clients-say');
  if (ba_religious_section_what_our_clients_say) {
    gsap.fromTo('#ba-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_section_frequently_asked_questions = document.getElementById('ba-religious-section-frequently-asked-questions');
  if (ba_religious_section_frequently_asked_questions) {
    gsap.fromTo('#ba-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_section_international_support = document.getElementById('ba-religious-section-international-support');
  if (ba_religious_section_international_support) {
    gsap.fromTo('#ba-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_list_our_credentials = document.getElementById('ba-religious-list-our-credentials');
  if (ba_religious_list_our_credentials) {
    gsap.from('#ba-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_list_related_services = document.getElementById('ba-religious-list-related-services');
  if (ba_religious_list_related_services) {
    gsap.from('#ba-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_section_youre_in_good_hands = document.getElementById('ba-religious-section-youre-in-good-hands');
  if (ba_religious_section_youre_in_good_hands) {
    gsap.fromTo('#ba-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_religious_section_21 = document.getElementById('ba-religious-section-21');
  if (ba_religious_section_21) {
    gsap.fromTo('#ba-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('ba-investor-form-gain-residency-in-brazil-through-investment');
  if (ba_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#ba-investor-form-gain-residency-in-brazil-through-investment input, #ba-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_list_quick_facts = document.getElementById('ba-investor-list-quick-facts');
  if (ba_investor_list_quick_facts) {
    gsap.from('#ba-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_list_common_challenges_applicants_face = document.getElementById('ba-investor-list-common-challenges-applicants-face');
  if (ba_investor_list_common_challenges_applicants_face) {
    gsap.from('#ba-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_list_how_we_solve_these_challenges = document.getElementById('ba-investor-list-how-we-solve-these-challenges');
  if (ba_investor_list_how_we_solve_these_challenges) {
    gsap.from('#ba-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_section_residency_overview = document.getElementById('ba-investor-section-residency-overview');
  if (ba_investor_section_residency_overview) {
    gsap.fromTo('#ba-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_form_who_is_this_residency_for = document.getElementById('ba-investor-form-who-is-this-residency-for');
  if (ba_investor_form_who_is_this_residency_for) {
    gsap.from('#ba-investor-form-who-is-this-residency-for input, #ba-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_list_required_documents = document.getElementById('ba-investor-list-required-documents');
  if (ba_investor_list_required_documents) {
    gsap.from('#ba-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_list_application_process = document.getElementById('ba-investor-list-application-process');
  if (ba_investor_list_application_process) {
    gsap.from('#ba-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_section_timelines_deadlines = document.getElementById('ba-investor-section-timelines-deadlines');
  if (ba_investor_section_timelines_deadlines) {
    gsap.fromTo('#ba-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_section_fees_costs = document.getElementById('ba-investor-section-fees-costs');
  if (ba_investor_section_fees_costs) {
    gsap.fromTo('#ba-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_list_risks_common_mistakes = document.getElementById('ba-investor-list-risks-common-mistakes');
  if (ba_investor_list_risks_common_mistakes) {
    gsap.from('#ba-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_section_diy_vs_professional_assistance = document.getElementById('ba-investor-section-diy-vs-professional-assistance');
  if (ba_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_section_bahia_specific_context = document.getElementById('ba-investor-section-bahia-specific-context');
  if (ba_investor_section_bahia_specific_context) {
    gsap.fromTo('#ba-investor-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_section_what_our_clients_say = document.getElementById('ba-investor-section-what-our-clients-say');
  if (ba_investor_section_what_our_clients_say) {
    gsap.fromTo('#ba-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_section_frequently_asked_questions = document.getElementById('ba-investor-section-frequently-asked-questions');
  if (ba_investor_section_frequently_asked_questions) {
    gsap.fromTo('#ba-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_section_international_support = document.getElementById('ba-investor-section-international-support');
  if (ba_investor_section_international_support) {
    gsap.fromTo('#ba-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_list_our_credentials = document.getElementById('ba-investor-list-our-credentials');
  if (ba_investor_list_our_credentials) {
    gsap.from('#ba-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_list_related_services = document.getElementById('ba-investor-list-related-services');
  if (ba_investor_list_related_services) {
    gsap.from('#ba-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_section_youre_in_good_hands = document.getElementById('ba-investor-section-youre-in-good-hands');
  if (ba_investor_section_youre_in_good_hands) {
    gsap.fromTo('#ba-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_investor_section_21 = document.getElementById('ba-investor-section-21');
  if (ba_investor_section_21) {
    gsap.fromTo('#ba-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('ba-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (ba_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#ba-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #ba-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_list_quick_facts = document.getElementById('ba-healthtreatment-list-quick-facts');
  if (ba_healthtreatment_list_quick_facts) {
    gsap.from('#ba-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_list_common_challenges_applicants_face = document.getElementById('ba-healthtreatment-list-common-challenges-applicants-face');
  if (ba_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#ba-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('ba-healthtreatment-list-how-we-solve-these-challenges');
  if (ba_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#ba-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_section_residency_overview = document.getElementById('ba-healthtreatment-section-residency-overview');
  if (ba_healthtreatment_section_residency_overview) {
    gsap.fromTo('#ba-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_form_who_is_this_residency_for = document.getElementById('ba-healthtreatment-form-who-is-this-residency-for');
  if (ba_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#ba-healthtreatment-form-who-is-this-residency-for input, #ba-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_list_required_documents = document.getElementById('ba-healthtreatment-list-required-documents');
  if (ba_healthtreatment_list_required_documents) {
    gsap.from('#ba-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_list_application_process = document.getElementById('ba-healthtreatment-list-application-process');
  if (ba_healthtreatment_list_application_process) {
    gsap.from('#ba-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_section_timelines_deadlines = document.getElementById('ba-healthtreatment-section-timelines-deadlines');
  if (ba_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#ba-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_section_fees_costs = document.getElementById('ba-healthtreatment-section-fees-costs');
  if (ba_healthtreatment_section_fees_costs) {
    gsap.fromTo('#ba-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_list_risks_common_mistakes = document.getElementById('ba-healthtreatment-list-risks-common-mistakes');
  if (ba_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#ba-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('ba-healthtreatment-section-diy-vs-professional-assistance');
  if (ba_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_section_bahia_specific_context = document.getElementById('ba-healthtreatment-section-bahia-specific-context');
  if (ba_healthtreatment_section_bahia_specific_context) {
    gsap.fromTo('#ba-healthtreatment-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_section_what_our_clients_say = document.getElementById('ba-healthtreatment-section-what-our-clients-say');
  if (ba_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#ba-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_section_frequently_asked_questions = document.getElementById('ba-healthtreatment-section-frequently-asked-questions');
  if (ba_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#ba-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_section_international_support = document.getElementById('ba-healthtreatment-section-international-support');
  if (ba_healthtreatment_section_international_support) {
    gsap.fromTo('#ba-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_list_our_credentials = document.getElementById('ba-healthtreatment-list-our-credentials');
  if (ba_healthtreatment_list_our_credentials) {
    gsap.from('#ba-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_list_related_services = document.getElementById('ba-healthtreatment-list-related-services');
  if (ba_healthtreatment_list_related_services) {
    gsap.from('#ba-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_section_youre_in_good_hands = document.getElementById('ba-healthtreatment-section-youre-in-good-hands');
  if (ba_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#ba-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_healthtreatment_section_21 = document.getElementById('ba-healthtreatment-section-21');
  if (ba_healthtreatment_section_21) {
    gsap.fromTo('#ba-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('ba-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (ba_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#ba-cplp-form-residency-for-cplp-citizens-in-brazil input, #ba-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_list_quick_facts = document.getElementById('ba-cplp-list-quick-facts');
  if (ba_cplp_list_quick_facts) {
    gsap.from('#ba-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_list_common_challenges_applicants_face = document.getElementById('ba-cplp-list-common-challenges-applicants-face');
  if (ba_cplp_list_common_challenges_applicants_face) {
    gsap.from('#ba-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_list_how_we_solve_these_challenges = document.getElementById('ba-cplp-list-how-we-solve-these-challenges');
  if (ba_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#ba-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_section_residency_overview = document.getElementById('ba-cplp-section-residency-overview');
  if (ba_cplp_section_residency_overview) {
    gsap.fromTo('#ba-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_form_who_is_this_residency_for = document.getElementById('ba-cplp-form-who-is-this-residency-for');
  if (ba_cplp_form_who_is_this_residency_for) {
    gsap.from('#ba-cplp-form-who-is-this-residency-for input, #ba-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_list_required_documents = document.getElementById('ba-cplp-list-required-documents');
  if (ba_cplp_list_required_documents) {
    gsap.from('#ba-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_list_application_process = document.getElementById('ba-cplp-list-application-process');
  if (ba_cplp_list_application_process) {
    gsap.from('#ba-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_section_timelines_deadlines = document.getElementById('ba-cplp-section-timelines-deadlines');
  if (ba_cplp_section_timelines_deadlines) {
    gsap.fromTo('#ba-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_section_fees_costs = document.getElementById('ba-cplp-section-fees-costs');
  if (ba_cplp_section_fees_costs) {
    gsap.fromTo('#ba-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_list_risks_common_mistakes = document.getElementById('ba-cplp-list-risks-common-mistakes');
  if (ba_cplp_list_risks_common_mistakes) {
    gsap.from('#ba-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_section_diy_vs_professional_assistance = document.getElementById('ba-cplp-section-diy-vs-professional-assistance');
  if (ba_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_section_bahia_specific_context = document.getElementById('ba-cplp-section-bahia-specific-context');
  if (ba_cplp_section_bahia_specific_context) {
    gsap.fromTo('#ba-cplp-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_section_what_our_clients_say = document.getElementById('ba-cplp-section-what-our-clients-say');
  if (ba_cplp_section_what_our_clients_say) {
    gsap.fromTo('#ba-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_section_frequently_asked_questions = document.getElementById('ba-cplp-section-frequently-asked-questions');
  if (ba_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#ba-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_section_international_support = document.getElementById('ba-cplp-section-international-support');
  if (ba_cplp_section_international_support) {
    gsap.fromTo('#ba-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_list_our_credentials = document.getElementById('ba-cplp-list-our-credentials');
  if (ba_cplp_list_our_credentials) {
    gsap.from('#ba-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_list_related_services = document.getElementById('ba-cplp-list-related-services');
  if (ba_cplp_list_related_services) {
    gsap.from('#ba-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_section_youre_in_good_hands = document.getElementById('ba-cplp-section-youre-in-good-hands');
  if (ba_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#ba-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_cplp_section_21 = document.getElementById('ba-cplp-section-21');
  if (ba_cplp_section_21) {
    gsap.fromTo('#ba-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('ba-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (ba_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#ba-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #ba-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_list_quick_facts = document.getElementById('ba-youthexchange-list-quick-facts');
  if (ba_youthexchange_list_quick_facts) {
    gsap.from('#ba-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_list_common_challenges_applicants_face = document.getElementById('ba-youthexchange-list-common-challenges-applicants-face');
  if (ba_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#ba-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_list_how_we_solve_these_challenges = document.getElementById('ba-youthexchange-list-how-we-solve-these-challenges');
  if (ba_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ba-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_section_residency_overview = document.getElementById('ba-youthexchange-section-residency-overview');
  if (ba_youthexchange_section_residency_overview) {
    gsap.fromTo('#ba-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_form_who_is_this_residency_for = document.getElementById('ba-youthexchange-form-who-is-this-residency-for');
  if (ba_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#ba-youthexchange-form-who-is-this-residency-for input, #ba-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_list_required_documents = document.getElementById('ba-youthexchange-list-required-documents');
  if (ba_youthexchange_list_required_documents) {
    gsap.from('#ba-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_list_application_process = document.getElementById('ba-youthexchange-list-application-process');
  if (ba_youthexchange_list_application_process) {
    gsap.from('#ba-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_section_timelines_deadlines = document.getElementById('ba-youthexchange-section-timelines-deadlines');
  if (ba_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#ba-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_section_fees_costs = document.getElementById('ba-youthexchange-section-fees-costs');
  if (ba_youthexchange_section_fees_costs) {
    gsap.fromTo('#ba-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_list_risks_common_mistakes = document.getElementById('ba-youthexchange-list-risks-common-mistakes');
  if (ba_youthexchange_list_risks_common_mistakes) {
    gsap.from('#ba-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_section_diy_vs_professional_assistance = document.getElementById('ba-youthexchange-section-diy-vs-professional-assistance');
  if (ba_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_section_bahia_specific_context = document.getElementById('ba-youthexchange-section-bahia-specific-context');
  if (ba_youthexchange_section_bahia_specific_context) {
    gsap.fromTo('#ba-youthexchange-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_section_what_our_clients_say = document.getElementById('ba-youthexchange-section-what-our-clients-say');
  if (ba_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#ba-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_section_frequently_asked_questions = document.getElementById('ba-youthexchange-section-frequently-asked-questions');
  if (ba_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ba-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_section_international_support = document.getElementById('ba-youthexchange-section-international-support');
  if (ba_youthexchange_section_international_support) {
    gsap.fromTo('#ba-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_list_our_credentials = document.getElementById('ba-youthexchange-list-our-credentials');
  if (ba_youthexchange_list_our_credentials) {
    gsap.from('#ba-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_list_related_services = document.getElementById('ba-youthexchange-list-related-services');
  if (ba_youthexchange_list_related_services) {
    gsap.from('#ba-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_section_youre_in_good_hands = document.getElementById('ba-youthexchange-section-youre-in-good-hands');
  if (ba_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ba-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_youthexchange_section_21 = document.getElementById('ba-youthexchange-section-21');
  if (ba_youthexchange_section_21) {
    gsap.fromTo('#ba-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('ba-work-form-work-and-reside-in-brazil-with-work-residency');
  if (ba_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#ba-work-form-work-and-reside-in-brazil-with-work-residency input, #ba-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_list_quick_facts = document.getElementById('ba-work-list-quick-facts');
  if (ba_work_list_quick_facts) {
    gsap.from('#ba-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_list_common_challenges_applicants_face = document.getElementById('ba-work-list-common-challenges-applicants-face');
  if (ba_work_list_common_challenges_applicants_face) {
    gsap.from('#ba-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_list_how_we_solve_these_challenges = document.getElementById('ba-work-list-how-we-solve-these-challenges');
  if (ba_work_list_how_we_solve_these_challenges) {
    gsap.from('#ba-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_section_residency_overview = document.getElementById('ba-work-section-residency-overview');
  if (ba_work_section_residency_overview) {
    gsap.fromTo('#ba-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_form_who_is_this_residency_for = document.getElementById('ba-work-form-who-is-this-residency-for');
  if (ba_work_form_who_is_this_residency_for) {
    gsap.from('#ba-work-form-who-is-this-residency-for input, #ba-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_list_required_documents = document.getElementById('ba-work-list-required-documents');
  if (ba_work_list_required_documents) {
    gsap.from('#ba-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_list_application_process = document.getElementById('ba-work-list-application-process');
  if (ba_work_list_application_process) {
    gsap.from('#ba-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_section_timelines_deadlines = document.getElementById('ba-work-section-timelines-deadlines');
  if (ba_work_section_timelines_deadlines) {
    gsap.fromTo('#ba-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_section_fees_costs = document.getElementById('ba-work-section-fees-costs');
  if (ba_work_section_fees_costs) {
    gsap.fromTo('#ba-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_list_risks_common_mistakes = document.getElementById('ba-work-list-risks-common-mistakes');
  if (ba_work_list_risks_common_mistakes) {
    gsap.from('#ba-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_section_diy_vs_professional_assistance = document.getElementById('ba-work-section-diy-vs-professional-assistance');
  if (ba_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_section_bahia_specific_context = document.getElementById('ba-work-section-bahia-specific-context');
  if (ba_work_section_bahia_specific_context) {
    gsap.fromTo('#ba-work-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_section_what_our_clients_say = document.getElementById('ba-work-section-what-our-clients-say');
  if (ba_work_section_what_our_clients_say) {
    gsap.fromTo('#ba-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_section_frequently_asked_questions = document.getElementById('ba-work-section-frequently-asked-questions');
  if (ba_work_section_frequently_asked_questions) {
    gsap.fromTo('#ba-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_section_international_support = document.getElementById('ba-work-section-international-support');
  if (ba_work_section_international_support) {
    gsap.fromTo('#ba-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_list_our_credentials = document.getElementById('ba-work-list-our-credentials');
  if (ba_work_list_our_credentials) {
    gsap.from('#ba-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_list_related_services = document.getElementById('ba-work-list-related-services');
  if (ba_work_list_related_services) {
    gsap.from('#ba-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_section_youre_in_good_hands = document.getElementById('ba-work-section-youre-in-good-hands');
  if (ba_work_section_youre_in_good_hands) {
    gsap.fromTo('#ba-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_work_section_21 = document.getElementById('ba-work-section-21');
  if (ba_work_section_21) {
    gsap.fromTo('#ba-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('ba-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (ba_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#ba-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #ba-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_list_quick_facts = document.getElementById('ba-startup-list-quick-facts');
  if (ba_startup_list_quick_facts) {
    gsap.from('#ba-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_list_common_challenges_applicants_face = document.getElementById('ba-startup-list-common-challenges-applicants-face');
  if (ba_startup_list_common_challenges_applicants_face) {
    gsap.from('#ba-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_list_how_we_solve_these_challenges = document.getElementById('ba-startup-list-how-we-solve-these-challenges');
  if (ba_startup_list_how_we_solve_these_challenges) {
    gsap.from('#ba-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_section_visa_overview = document.getElementById('ba-startup-section-visa-overview');
  if (ba_startup_section_visa_overview) {
    gsap.fromTo('#ba-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_form_who_is_this_visa_for = document.getElementById('ba-startup-form-who-is-this-visa-for');
  if (ba_startup_form_who_is_this_visa_for) {
    gsap.from('#ba-startup-form-who-is-this-visa-for input, #ba-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_list_required_documents = document.getElementById('ba-startup-list-required-documents');
  if (ba_startup_list_required_documents) {
    gsap.from('#ba-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_list_application_process = document.getElementById('ba-startup-list-application-process');
  if (ba_startup_list_application_process) {
    gsap.from('#ba-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_section_timelines_deadlines = document.getElementById('ba-startup-section-timelines-deadlines');
  if (ba_startup_section_timelines_deadlines) {
    gsap.fromTo('#ba-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_section_fees_costs = document.getElementById('ba-startup-section-fees-costs');
  if (ba_startup_section_fees_costs) {
    gsap.fromTo('#ba-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_list_risks_common_mistakes = document.getElementById('ba-startup-list-risks-common-mistakes');
  if (ba_startup_list_risks_common_mistakes) {
    gsap.from('#ba-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_section_diy_vs_professional_assistance = document.getElementById('ba-startup-section-diy-vs-professional-assistance');
  if (ba_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_section_bahia_specific_context = document.getElementById('ba-startup-section-bahia-specific-context');
  if (ba_startup_section_bahia_specific_context) {
    gsap.fromTo('#ba-startup-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_section_what_our_clients_say = document.getElementById('ba-startup-section-what-our-clients-say');
  if (ba_startup_section_what_our_clients_say) {
    gsap.fromTo('#ba-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_section_frequently_asked_questions = document.getElementById('ba-startup-section-frequently-asked-questions');
  if (ba_startup_section_frequently_asked_questions) {
    gsap.fromTo('#ba-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_section_international_support = document.getElementById('ba-startup-section-international-support');
  if (ba_startup_section_international_support) {
    gsap.fromTo('#ba-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_list_our_credentials = document.getElementById('ba-startup-list-our-credentials');
  if (ba_startup_list_our_credentials) {
    gsap.from('#ba-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_list_related_services = document.getElementById('ba-startup-list-related-services');
  if (ba_startup_list_related_services) {
    gsap.from('#ba-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_section_youre_in_good_hands = document.getElementById('ba-startup-section-youre-in-good-hands');
  if (ba_startup_section_youre_in_good_hands) {
    gsap.fromTo('#ba-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_startup_section_21 = document.getElementById('ba-startup-section-21');
  if (ba_startup_section_21) {
    gsap.fromTo('#ba-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('ba-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (ba_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#ba-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #ba-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_list_quick_facts = document.getElementById('ba-family-list-quick-facts');
  if (ba_family_list_quick_facts) {
    gsap.from('#ba-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_list_common_challenges_applicants_face = document.getElementById('ba-family-list-common-challenges-applicants-face');
  if (ba_family_list_common_challenges_applicants_face) {
    gsap.from('#ba-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_list_how_we_solve_these_challenges = document.getElementById('ba-family-list-how-we-solve-these-challenges');
  if (ba_family_list_how_we_solve_these_challenges) {
    gsap.from('#ba-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_section_visa_overview = document.getElementById('ba-family-section-visa-overview');
  if (ba_family_section_visa_overview) {
    gsap.fromTo('#ba-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_form_who_is_this_visa_for = document.getElementById('ba-family-form-who-is-this-visa-for');
  if (ba_family_form_who_is_this_visa_for) {
    gsap.from('#ba-family-form-who-is-this-visa-for input, #ba-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_list_required_documents = document.getElementById('ba-family-list-required-documents');
  if (ba_family_list_required_documents) {
    gsap.from('#ba-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_list_application_process = document.getElementById('ba-family-list-application-process');
  if (ba_family_list_application_process) {
    gsap.from('#ba-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_section_timelines_deadlines = document.getElementById('ba-family-section-timelines-deadlines');
  if (ba_family_section_timelines_deadlines) {
    gsap.fromTo('#ba-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_section_fees_costs = document.getElementById('ba-family-section-fees-costs');
  if (ba_family_section_fees_costs) {
    gsap.fromTo('#ba-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_list_risks_common_mistakes = document.getElementById('ba-family-list-risks-common-mistakes');
  if (ba_family_list_risks_common_mistakes) {
    gsap.from('#ba-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_section_diy_vs_professional_assistance = document.getElementById('ba-family-section-diy-vs-professional-assistance');
  if (ba_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_section_bahia_specific_context = document.getElementById('ba-family-section-bahia-specific-context');
  if (ba_family_section_bahia_specific_context) {
    gsap.fromTo('#ba-family-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_section_what_our_clients_say = document.getElementById('ba-family-section-what-our-clients-say');
  if (ba_family_section_what_our_clients_say) {
    gsap.fromTo('#ba-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_section_frequently_asked_questions = document.getElementById('ba-family-section-frequently-asked-questions');
  if (ba_family_section_frequently_asked_questions) {
    gsap.fromTo('#ba-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_section_international_support = document.getElementById('ba-family-section-international-support');
  if (ba_family_section_international_support) {
    gsap.fromTo('#ba-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_list_our_credentials = document.getElementById('ba-family-list-our-credentials');
  if (ba_family_list_our_credentials) {
    gsap.from('#ba-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_list_related_services = document.getElementById('ba-family-list-related-services');
  if (ba_family_list_related_services) {
    gsap.from('#ba-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_section_youre_in_good_hands = document.getElementById('ba-family-section-youre-in-good-hands');
  if (ba_family_section_youre_in_good_hands) {
    gsap.fromTo('#ba-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_family_section_21 = document.getElementById('ba-family-section-21');
  if (ba_family_section_21) {
    gsap.fromTo('#ba-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('ba-sports-form-compete-in-brazil-with-the-sports-visa');
  if (ba_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#ba-sports-form-compete-in-brazil-with-the-sports-visa input, #ba-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_list_quick_facts = document.getElementById('ba-sports-list-quick-facts');
  if (ba_sports_list_quick_facts) {
    gsap.from('#ba-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_list_common_challenges_applicants_face = document.getElementById('ba-sports-list-common-challenges-applicants-face');
  if (ba_sports_list_common_challenges_applicants_face) {
    gsap.from('#ba-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_list_how_we_solve_these_challenges = document.getElementById('ba-sports-list-how-we-solve-these-challenges');
  if (ba_sports_list_how_we_solve_these_challenges) {
    gsap.from('#ba-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_section_visa_overview = document.getElementById('ba-sports-section-visa-overview');
  if (ba_sports_section_visa_overview) {
    gsap.fromTo('#ba-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_form_who_is_this_visa_for = document.getElementById('ba-sports-form-who-is-this-visa-for');
  if (ba_sports_form_who_is_this_visa_for) {
    gsap.from('#ba-sports-form-who-is-this-visa-for input, #ba-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_list_required_documents = document.getElementById('ba-sports-list-required-documents');
  if (ba_sports_list_required_documents) {
    gsap.from('#ba-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_list_application_process = document.getElementById('ba-sports-list-application-process');
  if (ba_sports_list_application_process) {
    gsap.from('#ba-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_section_timelines_deadlines = document.getElementById('ba-sports-section-timelines-deadlines');
  if (ba_sports_section_timelines_deadlines) {
    gsap.fromTo('#ba-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_section_fees_costs = document.getElementById('ba-sports-section-fees-costs');
  if (ba_sports_section_fees_costs) {
    gsap.fromTo('#ba-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_list_risks_common_mistakes = document.getElementById('ba-sports-list-risks-common-mistakes');
  if (ba_sports_list_risks_common_mistakes) {
    gsap.from('#ba-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_section_diy_vs_professional_assistance = document.getElementById('ba-sports-section-diy-vs-professional-assistance');
  if (ba_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_section_bahia_specific_context = document.getElementById('ba-sports-section-bahia-specific-context');
  if (ba_sports_section_bahia_specific_context) {
    gsap.fromTo('#ba-sports-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_section_what_our_clients_say = document.getElementById('ba-sports-section-what-our-clients-say');
  if (ba_sports_section_what_our_clients_say) {
    gsap.fromTo('#ba-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_section_frequently_asked_questions = document.getElementById('ba-sports-section-frequently-asked-questions');
  if (ba_sports_section_frequently_asked_questions) {
    gsap.fromTo('#ba-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_section_international_support = document.getElementById('ba-sports-section-international-support');
  if (ba_sports_section_international_support) {
    gsap.fromTo('#ba-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_list_our_credentials = document.getElementById('ba-sports-list-our-credentials');
  if (ba_sports_list_our_credentials) {
    gsap.from('#ba-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_list_related_services = document.getElementById('ba-sports-list-related-services');
  if (ba_sports_list_related_services) {
    gsap.from('#ba-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_section_youre_in_good_hands = document.getElementById('ba-sports-section-youre-in-good-hands');
  if (ba_sports_section_youre_in_good_hands) {
    gsap.fromTo('#ba-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_sports_section_21 = document.getElementById('ba-sports-section-21');
  if (ba_sports_section_21) {
    gsap.fromTo('#ba-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('ba-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (ba_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#ba-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #ba-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_list_quick_facts = document.getElementById('ba-medical-list-quick-facts');
  if (ba_medical_list_quick_facts) {
    gsap.from('#ba-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_list_common_challenges_applicants_face = document.getElementById('ba-medical-list-common-challenges-applicants-face');
  if (ba_medical_list_common_challenges_applicants_face) {
    gsap.from('#ba-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_list_how_we_solve_these_challenges = document.getElementById('ba-medical-list-how-we-solve-these-challenges');
  if (ba_medical_list_how_we_solve_these_challenges) {
    gsap.from('#ba-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_section_visa_overview = document.getElementById('ba-medical-section-visa-overview');
  if (ba_medical_section_visa_overview) {
    gsap.fromTo('#ba-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_form_who_is_this_visa_for = document.getElementById('ba-medical-form-who-is-this-visa-for');
  if (ba_medical_form_who_is_this_visa_for) {
    gsap.from('#ba-medical-form-who-is-this-visa-for input, #ba-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_list_required_documents = document.getElementById('ba-medical-list-required-documents');
  if (ba_medical_list_required_documents) {
    gsap.from('#ba-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_list_application_process = document.getElementById('ba-medical-list-application-process');
  if (ba_medical_list_application_process) {
    gsap.from('#ba-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_section_timelines_deadlines = document.getElementById('ba-medical-section-timelines-deadlines');
  if (ba_medical_section_timelines_deadlines) {
    gsap.fromTo('#ba-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_section_fees_costs = document.getElementById('ba-medical-section-fees-costs');
  if (ba_medical_section_fees_costs) {
    gsap.fromTo('#ba-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_list_risks_common_mistakes = document.getElementById('ba-medical-list-risks-common-mistakes');
  if (ba_medical_list_risks_common_mistakes) {
    gsap.from('#ba-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_section_diy_vs_professional_assistance = document.getElementById('ba-medical-section-diy-vs-professional-assistance');
  if (ba_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_section_bahia_specific_context = document.getElementById('ba-medical-section-bahia-specific-context');
  if (ba_medical_section_bahia_specific_context) {
    gsap.fromTo('#ba-medical-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_section_what_our_clients_say = document.getElementById('ba-medical-section-what-our-clients-say');
  if (ba_medical_section_what_our_clients_say) {
    gsap.fromTo('#ba-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_section_frequently_asked_questions = document.getElementById('ba-medical-section-frequently-asked-questions');
  if (ba_medical_section_frequently_asked_questions) {
    gsap.fromTo('#ba-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_section_international_support = document.getElementById('ba-medical-section-international-support');
  if (ba_medical_section_international_support) {
    gsap.fromTo('#ba-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_list_our_credentials = document.getElementById('ba-medical-list-our-credentials');
  if (ba_medical_list_our_credentials) {
    gsap.from('#ba-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_list_related_services = document.getElementById('ba-medical-list-related-services');
  if (ba_medical_list_related_services) {
    gsap.from('#ba-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_section_youre_in_good_hands = document.getElementById('ba-medical-section-youre-in-good-hands');
  if (ba_medical_section_youre_in_good_hands) {
    gsap.fromTo('#ba-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_medical_section_21 = document.getElementById('ba-medical-section-21');
  if (ba_medical_section_21) {
    gsap.fromTo('#ba-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('ba-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (ba_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#ba-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #ba-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_list_quick_facts = document.getElementById('ba-tourist-list-quick-facts');
  if (ba_tourist_list_quick_facts) {
    gsap.from('#ba-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_list_common_challenges_applicants_face = document.getElementById('ba-tourist-list-common-challenges-applicants-face');
  if (ba_tourist_list_common_challenges_applicants_face) {
    gsap.from('#ba-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_list_how_we_solve_these_challenges = document.getElementById('ba-tourist-list-how-we-solve-these-challenges');
  if (ba_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#ba-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_section_visa_overview = document.getElementById('ba-tourist-section-visa-overview');
  if (ba_tourist_section_visa_overview) {
    gsap.fromTo('#ba-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_form_who_is_this_visa_for = document.getElementById('ba-tourist-form-who-is-this-visa-for');
  if (ba_tourist_form_who_is_this_visa_for) {
    gsap.from('#ba-tourist-form-who-is-this-visa-for input, #ba-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_list_required_documents = document.getElementById('ba-tourist-list-required-documents');
  if (ba_tourist_list_required_documents) {
    gsap.from('#ba-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_list_application_process = document.getElementById('ba-tourist-list-application-process');
  if (ba_tourist_list_application_process) {
    gsap.from('#ba-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_section_timelines_deadlines = document.getElementById('ba-tourist-section-timelines-deadlines');
  if (ba_tourist_section_timelines_deadlines) {
    gsap.fromTo('#ba-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_section_fees_costs = document.getElementById('ba-tourist-section-fees-costs');
  if (ba_tourist_section_fees_costs) {
    gsap.fromTo('#ba-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_list_risks_common_mistakes = document.getElementById('ba-tourist-list-risks-common-mistakes');
  if (ba_tourist_list_risks_common_mistakes) {
    gsap.from('#ba-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_section_diy_vs_professional_assistance = document.getElementById('ba-tourist-section-diy-vs-professional-assistance');
  if (ba_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_section_bahia_specific_context = document.getElementById('ba-tourist-section-bahia-specific-context');
  if (ba_tourist_section_bahia_specific_context) {
    gsap.fromTo('#ba-tourist-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_section_what_our_clients_say = document.getElementById('ba-tourist-section-what-our-clients-say');
  if (ba_tourist_section_what_our_clients_say) {
    gsap.fromTo('#ba-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_section_frequently_asked_questions = document.getElementById('ba-tourist-section-frequently-asked-questions');
  if (ba_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#ba-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_section_international_support = document.getElementById('ba-tourist-section-international-support');
  if (ba_tourist_section_international_support) {
    gsap.fromTo('#ba-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_list_our_credentials = document.getElementById('ba-tourist-list-our-credentials');
  if (ba_tourist_list_our_credentials) {
    gsap.from('#ba-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_list_related_services = document.getElementById('ba-tourist-list-related-services');
  if (ba_tourist_list_related_services) {
    gsap.from('#ba-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_section_youre_in_good_hands = document.getElementById('ba-tourist-section-youre-in-good-hands');
  if (ba_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#ba-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_tourist_section_21 = document.getElementById('ba-tourist-section-21');
  if (ba_tourist_section_21) {
    gsap.fromTo('#ba-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('ba-transit-form-transit-through-brazil-with-the-transit-visa');
  if (ba_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#ba-transit-form-transit-through-brazil-with-the-transit-visa input, #ba-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_list_quick_facts = document.getElementById('ba-transit-list-quick-facts');
  if (ba_transit_list_quick_facts) {
    gsap.from('#ba-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_list_common_challenges_applicants_face = document.getElementById('ba-transit-list-common-challenges-applicants-face');
  if (ba_transit_list_common_challenges_applicants_face) {
    gsap.from('#ba-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_list_how_we_solve_these_challenges = document.getElementById('ba-transit-list-how-we-solve-these-challenges');
  if (ba_transit_list_how_we_solve_these_challenges) {
    gsap.from('#ba-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_section_visa_overview = document.getElementById('ba-transit-section-visa-overview');
  if (ba_transit_section_visa_overview) {
    gsap.fromTo('#ba-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_form_who_is_this_visa_for = document.getElementById('ba-transit-form-who-is-this-visa-for');
  if (ba_transit_form_who_is_this_visa_for) {
    gsap.from('#ba-transit-form-who-is-this-visa-for input, #ba-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_list_required_documents = document.getElementById('ba-transit-list-required-documents');
  if (ba_transit_list_required_documents) {
    gsap.from('#ba-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_list_application_process = document.getElementById('ba-transit-list-application-process');
  if (ba_transit_list_application_process) {
    gsap.from('#ba-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_section_timelines_deadlines = document.getElementById('ba-transit-section-timelines-deadlines');
  if (ba_transit_section_timelines_deadlines) {
    gsap.fromTo('#ba-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_section_fees_costs = document.getElementById('ba-transit-section-fees-costs');
  if (ba_transit_section_fees_costs) {
    gsap.fromTo('#ba-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_list_risks_common_mistakes = document.getElementById('ba-transit-list-risks-common-mistakes');
  if (ba_transit_list_risks_common_mistakes) {
    gsap.from('#ba-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_section_diy_vs_professional_assistance = document.getElementById('ba-transit-section-diy-vs-professional-assistance');
  if (ba_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_section_bahia_specific_context = document.getElementById('ba-transit-section-bahia-specific-context');
  if (ba_transit_section_bahia_specific_context) {
    gsap.fromTo('#ba-transit-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_section_what_our_clients_say = document.getElementById('ba-transit-section-what-our-clients-say');
  if (ba_transit_section_what_our_clients_say) {
    gsap.fromTo('#ba-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_section_frequently_asked_questions = document.getElementById('ba-transit-section-frequently-asked-questions');
  if (ba_transit_section_frequently_asked_questions) {
    gsap.fromTo('#ba-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_section_international_support = document.getElementById('ba-transit-section-international-support');
  if (ba_transit_section_international_support) {
    gsap.fromTo('#ba-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_list_our_credentials = document.getElementById('ba-transit-list-our-credentials');
  if (ba_transit_list_our_credentials) {
    gsap.from('#ba-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_list_related_services = document.getElementById('ba-transit-list-related-services');
  if (ba_transit_list_related_services) {
    gsap.from('#ba-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_section_youre_in_good_hands = document.getElementById('ba-transit-section-youre-in-good-hands');
  if (ba_transit_section_youre_in_good_hands) {
    gsap.fromTo('#ba-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_transit_section_21 = document.getElementById('ba-transit-section-21');
  if (ba_transit_section_21) {
    gsap.fromTo('#ba-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_form_study_in_brazil_with_the_student_visa = document.getElementById('ba-student-form-study-in-brazil-with-the-student-visa');
  if (ba_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#ba-student-form-study-in-brazil-with-the-student-visa input, #ba-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_list_quick_facts = document.getElementById('ba-student-list-quick-facts');
  if (ba_student_list_quick_facts) {
    gsap.from('#ba-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_list_common_challenges_applicants_face = document.getElementById('ba-student-list-common-challenges-applicants-face');
  if (ba_student_list_common_challenges_applicants_face) {
    gsap.from('#ba-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_list_how_we_solve_these_challenges = document.getElementById('ba-student-list-how-we-solve-these-challenges');
  if (ba_student_list_how_we_solve_these_challenges) {
    gsap.from('#ba-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_section_visa_overview = document.getElementById('ba-student-section-visa-overview');
  if (ba_student_section_visa_overview) {
    gsap.fromTo('#ba-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_form_who_is_this_visa_for = document.getElementById('ba-student-form-who-is-this-visa-for');
  if (ba_student_form_who_is_this_visa_for) {
    gsap.from('#ba-student-form-who-is-this-visa-for input, #ba-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_list_required_documents = document.getElementById('ba-student-list-required-documents');
  if (ba_student_list_required_documents) {
    gsap.from('#ba-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_list_application_process = document.getElementById('ba-student-list-application-process');
  if (ba_student_list_application_process) {
    gsap.from('#ba-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_section_timelines_deadlines = document.getElementById('ba-student-section-timelines-deadlines');
  if (ba_student_section_timelines_deadlines) {
    gsap.fromTo('#ba-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_section_fees_costs = document.getElementById('ba-student-section-fees-costs');
  if (ba_student_section_fees_costs) {
    gsap.fromTo('#ba-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_list_risks_common_mistakes = document.getElementById('ba-student-list-risks-common-mistakes');
  if (ba_student_list_risks_common_mistakes) {
    gsap.from('#ba-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_section_diy_vs_professional_assistance = document.getElementById('ba-student-section-diy-vs-professional-assistance');
  if (ba_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_section_bahia_specific_context = document.getElementById('ba-student-section-bahia-specific-context');
  if (ba_student_section_bahia_specific_context) {
    gsap.fromTo('#ba-student-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_section_what_our_clients_say = document.getElementById('ba-student-section-what-our-clients-say');
  if (ba_student_section_what_our_clients_say) {
    gsap.fromTo('#ba-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_section_frequently_asked_questions = document.getElementById('ba-student-section-frequently-asked-questions');
  if (ba_student_section_frequently_asked_questions) {
    gsap.fromTo('#ba-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_section_international_support = document.getElementById('ba-student-section-international-support');
  if (ba_student_section_international_support) {
    gsap.fromTo('#ba-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_list_our_credentials = document.getElementById('ba-student-list-our-credentials');
  if (ba_student_list_our_credentials) {
    gsap.from('#ba-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_list_related_services = document.getElementById('ba-student-list-related-services');
  if (ba_student_list_related_services) {
    gsap.from('#ba-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_section_youre_in_good_hands = document.getElementById('ba-student-section-youre-in-good-hands');
  if (ba_student_section_youre_in_good_hands) {
    gsap.fromTo('#ba-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_student_section_21 = document.getElementById('ba-student-section-21');
  if (ba_student_section_21) {
    gsap.fromTo('#ba-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('ba-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (ba_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#ba-business-form-conduct-business-in-brazil-with-the-business-visa input, #ba-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_list_quick_facts = document.getElementById('ba-business-list-quick-facts');
  if (ba_business_list_quick_facts) {
    gsap.from('#ba-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_list_common_challenges_applicants_face = document.getElementById('ba-business-list-common-challenges-applicants-face');
  if (ba_business_list_common_challenges_applicants_face) {
    gsap.from('#ba-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_list_how_we_solve_these_challenges = document.getElementById('ba-business-list-how-we-solve-these-challenges');
  if (ba_business_list_how_we_solve_these_challenges) {
    gsap.from('#ba-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_section_visa_overview = document.getElementById('ba-business-section-visa-overview');
  if (ba_business_section_visa_overview) {
    gsap.fromTo('#ba-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_form_who_is_this_visa_for = document.getElementById('ba-business-form-who-is-this-visa-for');
  if (ba_business_form_who_is_this_visa_for) {
    gsap.from('#ba-business-form-who-is-this-visa-for input, #ba-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_list_required_documents = document.getElementById('ba-business-list-required-documents');
  if (ba_business_list_required_documents) {
    gsap.from('#ba-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_list_application_process = document.getElementById('ba-business-list-application-process');
  if (ba_business_list_application_process) {
    gsap.from('#ba-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_section_timelines_deadlines = document.getElementById('ba-business-section-timelines-deadlines');
  if (ba_business_section_timelines_deadlines) {
    gsap.fromTo('#ba-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_section_fees_costs = document.getElementById('ba-business-section-fees-costs');
  if (ba_business_section_fees_costs) {
    gsap.fromTo('#ba-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_list_risks_common_mistakes = document.getElementById('ba-business-list-risks-common-mistakes');
  if (ba_business_list_risks_common_mistakes) {
    gsap.from('#ba-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_section_diy_vs_professional_assistance = document.getElementById('ba-business-section-diy-vs-professional-assistance');
  if (ba_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_section_bahia_specific_context = document.getElementById('ba-business-section-bahia-specific-context');
  if (ba_business_section_bahia_specific_context) {
    gsap.fromTo('#ba-business-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_section_what_our_clients_say = document.getElementById('ba-business-section-what-our-clients-say');
  if (ba_business_section_what_our_clients_say) {
    gsap.fromTo('#ba-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_section_frequently_asked_questions = document.getElementById('ba-business-section-frequently-asked-questions');
  if (ba_business_section_frequently_asked_questions) {
    gsap.fromTo('#ba-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_section_international_support = document.getElementById('ba-business-section-international-support');
  if (ba_business_section_international_support) {
    gsap.fromTo('#ba-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_list_our_credentials = document.getElementById('ba-business-list-our-credentials');
  if (ba_business_list_our_credentials) {
    gsap.from('#ba-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_list_related_services = document.getElementById('ba-business-list-related-services');
  if (ba_business_list_related_services) {
    gsap.from('#ba-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_section_youre_in_good_hands = document.getElementById('ba-business-section-youre-in-good-hands');
  if (ba_business_section_youre_in_good_hands) {
    gsap.fromTo('#ba-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_business_section_21 = document.getElementById('ba-business-section-21');
  if (ba_business_section_21) {
    gsap.fromTo('#ba-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('ba-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (ba_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#ba-research-form-conduct-research-in-brazil-with-the-research-visa input, #ba-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_list_quick_facts = document.getElementById('ba-research-list-quick-facts');
  if (ba_research_list_quick_facts) {
    gsap.from('#ba-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_list_common_challenges_applicants_face = document.getElementById('ba-research-list-common-challenges-applicants-face');
  if (ba_research_list_common_challenges_applicants_face) {
    gsap.from('#ba-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_list_how_we_solve_these_challenges = document.getElementById('ba-research-list-how-we-solve-these-challenges');
  if (ba_research_list_how_we_solve_these_challenges) {
    gsap.from('#ba-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_section_visa_overview = document.getElementById('ba-research-section-visa-overview');
  if (ba_research_section_visa_overview) {
    gsap.fromTo('#ba-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_form_who_is_this_visa_for = document.getElementById('ba-research-form-who-is-this-visa-for');
  if (ba_research_form_who_is_this_visa_for) {
    gsap.from('#ba-research-form-who-is-this-visa-for input, #ba-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_list_required_documents = document.getElementById('ba-research-list-required-documents');
  if (ba_research_list_required_documents) {
    gsap.from('#ba-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_list_application_process = document.getElementById('ba-research-list-application-process');
  if (ba_research_list_application_process) {
    gsap.from('#ba-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_section_timelines_deadlines = document.getElementById('ba-research-section-timelines-deadlines');
  if (ba_research_section_timelines_deadlines) {
    gsap.fromTo('#ba-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_section_fees_costs = document.getElementById('ba-research-section-fees-costs');
  if (ba_research_section_fees_costs) {
    gsap.fromTo('#ba-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_list_risks_common_mistakes = document.getElementById('ba-research-list-risks-common-mistakes');
  if (ba_research_list_risks_common_mistakes) {
    gsap.from('#ba-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_section_diy_vs_professional_assistance = document.getElementById('ba-research-section-diy-vs-professional-assistance');
  if (ba_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_section_bahia_specific_context = document.getElementById('ba-research-section-bahia-specific-context');
  if (ba_research_section_bahia_specific_context) {
    gsap.fromTo('#ba-research-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_section_what_our_clients_say = document.getElementById('ba-research-section-what-our-clients-say');
  if (ba_research_section_what_our_clients_say) {
    gsap.fromTo('#ba-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_section_frequently_asked_questions = document.getElementById('ba-research-section-frequently-asked-questions');
  if (ba_research_section_frequently_asked_questions) {
    gsap.fromTo('#ba-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_section_international_support = document.getElementById('ba-research-section-international-support');
  if (ba_research_section_international_support) {
    gsap.fromTo('#ba-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_list_our_credentials = document.getElementById('ba-research-list-our-credentials');
  if (ba_research_list_our_credentials) {
    gsap.from('#ba-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_list_related_services = document.getElementById('ba-research-list-related-services');
  if (ba_research_list_related_services) {
    gsap.from('#ba-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_section_youre_in_good_hands = document.getElementById('ba-research-section-youre-in-good-hands');
  if (ba_research_section_youre_in_good_hands) {
    gsap.fromTo('#ba-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_research_section_21 = document.getElementById('ba-research-section-21');
  if (ba_research_section_21) {
    gsap.fromTo('#ba-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('ba-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (ba_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#ba-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #ba-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_list_quick_facts = document.getElementById('ba-diplomatic-list-quick-facts');
  if (ba_diplomatic_list_quick_facts) {
    gsap.from('#ba-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_list_common_challenges_applicants_face = document.getElementById('ba-diplomatic-list-common-challenges-applicants-face');
  if (ba_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#ba-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_list_how_we_solve_these_challenges = document.getElementById('ba-diplomatic-list-how-we-solve-these-challenges');
  if (ba_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#ba-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_section_visa_overview = document.getElementById('ba-diplomatic-section-visa-overview');
  if (ba_diplomatic_section_visa_overview) {
    gsap.fromTo('#ba-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_form_who_is_this_visa_for = document.getElementById('ba-diplomatic-form-who-is-this-visa-for');
  if (ba_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#ba-diplomatic-form-who-is-this-visa-for input, #ba-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_list_required_documents = document.getElementById('ba-diplomatic-list-required-documents');
  if (ba_diplomatic_list_required_documents) {
    gsap.from('#ba-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_list_application_process = document.getElementById('ba-diplomatic-list-application-process');
  if (ba_diplomatic_list_application_process) {
    gsap.from('#ba-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_section_timelines_deadlines = document.getElementById('ba-diplomatic-section-timelines-deadlines');
  if (ba_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#ba-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_section_fees_costs = document.getElementById('ba-diplomatic-section-fees-costs');
  if (ba_diplomatic_section_fees_costs) {
    gsap.fromTo('#ba-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_list_risks_common_mistakes = document.getElementById('ba-diplomatic-list-risks-common-mistakes');
  if (ba_diplomatic_list_risks_common_mistakes) {
    gsap.from('#ba-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_section_diy_vs_professional_assistance = document.getElementById('ba-diplomatic-section-diy-vs-professional-assistance');
  if (ba_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_section_bahia_specific_context = document.getElementById('ba-diplomatic-section-bahia-specific-context');
  if (ba_diplomatic_section_bahia_specific_context) {
    gsap.fromTo('#ba-diplomatic-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_section_what_our_clients_say = document.getElementById('ba-diplomatic-section-what-our-clients-say');
  if (ba_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#ba-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_section_frequently_asked_questions = document.getElementById('ba-diplomatic-section-frequently-asked-questions');
  if (ba_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#ba-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_section_international_support = document.getElementById('ba-diplomatic-section-international-support');
  if (ba_diplomatic_section_international_support) {
    gsap.fromTo('#ba-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_list_our_credentials = document.getElementById('ba-diplomatic-list-our-credentials');
  if (ba_diplomatic_list_our_credentials) {
    gsap.from('#ba-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_list_related_services = document.getElementById('ba-diplomatic-list-related-services');
  if (ba_diplomatic_list_related_services) {
    gsap.from('#ba-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_section_youre_in_good_hands = document.getElementById('ba-diplomatic-section-youre-in-good-hands');
  if (ba_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#ba-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_diplomatic_section_21 = document.getElementById('ba-diplomatic-section-21');
  if (ba_diplomatic_section_21) {
    gsap.fromTo('#ba-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('ba-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (ba_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#ba-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #ba-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_list_quick_facts = document.getElementById('ba-journalist-list-quick-facts');
  if (ba_journalist_list_quick_facts) {
    gsap.from('#ba-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_list_common_challenges_applicants_face = document.getElementById('ba-journalist-list-common-challenges-applicants-face');
  if (ba_journalist_list_common_challenges_applicants_face) {
    gsap.from('#ba-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_list_how_we_solve_these_challenges = document.getElementById('ba-journalist-list-how-we-solve-these-challenges');
  if (ba_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#ba-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_section_visa_overview = document.getElementById('ba-journalist-section-visa-overview');
  if (ba_journalist_section_visa_overview) {
    gsap.fromTo('#ba-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_form_who_is_this_visa_for = document.getElementById('ba-journalist-form-who-is-this-visa-for');
  if (ba_journalist_form_who_is_this_visa_for) {
    gsap.from('#ba-journalist-form-who-is-this-visa-for input, #ba-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_list_required_documents = document.getElementById('ba-journalist-list-required-documents');
  if (ba_journalist_list_required_documents) {
    gsap.from('#ba-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_list_application_process = document.getElementById('ba-journalist-list-application-process');
  if (ba_journalist_list_application_process) {
    gsap.from('#ba-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_section_timelines_deadlines = document.getElementById('ba-journalist-section-timelines-deadlines');
  if (ba_journalist_section_timelines_deadlines) {
    gsap.fromTo('#ba-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_section_fees_costs = document.getElementById('ba-journalist-section-fees-costs');
  if (ba_journalist_section_fees_costs) {
    gsap.fromTo('#ba-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_list_risks_common_mistakes = document.getElementById('ba-journalist-list-risks-common-mistakes');
  if (ba_journalist_list_risks_common_mistakes) {
    gsap.from('#ba-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_section_diy_vs_professional_assistance = document.getElementById('ba-journalist-section-diy-vs-professional-assistance');
  if (ba_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_section_bahia_specific_context = document.getElementById('ba-journalist-section-bahia-specific-context');
  if (ba_journalist_section_bahia_specific_context) {
    gsap.fromTo('#ba-journalist-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_section_what_our_clients_say = document.getElementById('ba-journalist-section-what-our-clients-say');
  if (ba_journalist_section_what_our_clients_say) {
    gsap.fromTo('#ba-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_section_frequently_asked_questions = document.getElementById('ba-journalist-section-frequently-asked-questions');
  if (ba_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#ba-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_section_international_support = document.getElementById('ba-journalist-section-international-support');
  if (ba_journalist_section_international_support) {
    gsap.fromTo('#ba-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_list_our_credentials = document.getElementById('ba-journalist-list-our-credentials');
  if (ba_journalist_list_our_credentials) {
    gsap.from('#ba-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_list_related_services = document.getElementById('ba-journalist-list-related-services');
  if (ba_journalist_list_related_services) {
    gsap.from('#ba-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_section_youre_in_good_hands = document.getElementById('ba-journalist-section-youre-in-good-hands');
  if (ba_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#ba-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_journalist_section_21 = document.getElementById('ba-journalist-section-21');
  if (ba_journalist_section_21) {
    gsap.fromTo('#ba-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('ba-fines-form-resolve-immigration-fines-in-brazil');
  if (ba_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#ba-fines-form-resolve-immigration-fines-in-brazil input, #ba-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_list_quick_facts = document.getElementById('ba-fines-list-quick-facts');
  if (ba_fines_list_quick_facts) {
    gsap.from('#ba-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_list_common_challenges_applicants_face = document.getElementById('ba-fines-list-common-challenges-applicants-face');
  if (ba_fines_list_common_challenges_applicants_face) {
    gsap.from('#ba-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_list_how_we_solve_these_challenges = document.getElementById('ba-fines-list-how-we-solve-these-challenges');
  if (ba_fines_list_how_we_solve_these_challenges) {
    gsap.from('#ba-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_section_service_overview = document.getElementById('ba-fines-section-service-overview');
  if (ba_fines_section_service_overview) {
    gsap.fromTo('#ba-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_form_who_is_this_service_for = document.getElementById('ba-fines-form-who-is-this-service-for');
  if (ba_fines_form_who_is_this_service_for) {
    gsap.from('#ba-fines-form-who-is-this-service-for input, #ba-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_list_required_documents = document.getElementById('ba-fines-list-required-documents');
  if (ba_fines_list_required_documents) {
    gsap.from('#ba-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_list_process = document.getElementById('ba-fines-list-process');
  if (ba_fines_list_process) {
    gsap.from('#ba-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_section_timelines_deadlines = document.getElementById('ba-fines-section-timelines-deadlines');
  if (ba_fines_section_timelines_deadlines) {
    gsap.fromTo('#ba-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_section_fees_costs = document.getElementById('ba-fines-section-fees-costs');
  if (ba_fines_section_fees_costs) {
    gsap.fromTo('#ba-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_list_risks_common_mistakes = document.getElementById('ba-fines-list-risks-common-mistakes');
  if (ba_fines_list_risks_common_mistakes) {
    gsap.from('#ba-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_section_diy_vs_professional_assistance = document.getElementById('ba-fines-section-diy-vs-professional-assistance');
  if (ba_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_section_bahia_specific_context = document.getElementById('ba-fines-section-bahia-specific-context');
  if (ba_fines_section_bahia_specific_context) {
    gsap.fromTo('#ba-fines-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_section_what_our_clients_say = document.getElementById('ba-fines-section-what-our-clients-say');
  if (ba_fines_section_what_our_clients_say) {
    gsap.fromTo('#ba-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_section_frequently_asked_questions = document.getElementById('ba-fines-section-frequently-asked-questions');
  if (ba_fines_section_frequently_asked_questions) {
    gsap.fromTo('#ba-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_section_international_support = document.getElementById('ba-fines-section-international-support');
  if (ba_fines_section_international_support) {
    gsap.fromTo('#ba-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_list_our_credentials = document.getElementById('ba-fines-list-our-credentials');
  if (ba_fines_list_our_credentials) {
    gsap.from('#ba-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_list_related_services = document.getElementById('ba-fines-list-related-services');
  if (ba_fines_list_related_services) {
    gsap.from('#ba-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_section_youre_in_good_hands = document.getElementById('ba-fines-section-youre-in-good-hands');
  if (ba_fines_section_youre_in_good_hands) {
    gsap.fromTo('#ba-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_fines_section_21 = document.getElementById('ba-fines-section-21');
  if (ba_fines_section_21) {
    gsap.fromTo('#ba-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_form_deportation_assistance_in_brazil = document.getElementById('ba-deportation-form-deportation-assistance-in-brazil');
  if (ba_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#ba-deportation-form-deportation-assistance-in-brazil input, #ba-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_list_quick_facts = document.getElementById('ba-deportation-list-quick-facts');
  if (ba_deportation_list_quick_facts) {
    gsap.from('#ba-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_list_common_challenges_applicants_face = document.getElementById('ba-deportation-list-common-challenges-applicants-face');
  if (ba_deportation_list_common_challenges_applicants_face) {
    gsap.from('#ba-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_list_how_we_solve_these_challenges = document.getElementById('ba-deportation-list-how-we-solve-these-challenges');
  if (ba_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#ba-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_section_service_overview = document.getElementById('ba-deportation-section-service-overview');
  if (ba_deportation_section_service_overview) {
    gsap.fromTo('#ba-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_form_who_is_this_service_for = document.getElementById('ba-deportation-form-who-is-this-service-for');
  if (ba_deportation_form_who_is_this_service_for) {
    gsap.from('#ba-deportation-form-who-is-this-service-for input, #ba-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_list_required_documents = document.getElementById('ba-deportation-list-required-documents');
  if (ba_deportation_list_required_documents) {
    gsap.from('#ba-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_list_process = document.getElementById('ba-deportation-list-process');
  if (ba_deportation_list_process) {
    gsap.from('#ba-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_section_timelines_deadlines = document.getElementById('ba-deportation-section-timelines-deadlines');
  if (ba_deportation_section_timelines_deadlines) {
    gsap.fromTo('#ba-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_section_fees_costs = document.getElementById('ba-deportation-section-fees-costs');
  if (ba_deportation_section_fees_costs) {
    gsap.fromTo('#ba-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_list_risks_common_mistakes = document.getElementById('ba-deportation-list-risks-common-mistakes');
  if (ba_deportation_list_risks_common_mistakes) {
    gsap.from('#ba-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_section_diy_vs_professional_assistance = document.getElementById('ba-deportation-section-diy-vs-professional-assistance');
  if (ba_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_section_bahia_specific_context = document.getElementById('ba-deportation-section-bahia-specific-context');
  if (ba_deportation_section_bahia_specific_context) {
    gsap.fromTo('#ba-deportation-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_section_what_our_clients_say = document.getElementById('ba-deportation-section-what-our-clients-say');
  if (ba_deportation_section_what_our_clients_say) {
    gsap.fromTo('#ba-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_section_frequently_asked_questions = document.getElementById('ba-deportation-section-frequently-asked-questions');
  if (ba_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#ba-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_section_international_support = document.getElementById('ba-deportation-section-international-support');
  if (ba_deportation_section_international_support) {
    gsap.fromTo('#ba-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_list_our_credentials = document.getElementById('ba-deportation-list-our-credentials');
  if (ba_deportation_list_our_credentials) {
    gsap.from('#ba-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_list_related_services = document.getElementById('ba-deportation-list-related-services');
  if (ba_deportation_list_related_services) {
    gsap.from('#ba-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_section_youre_in_good_hands = document.getElementById('ba-deportation-section-youre-in-good-hands');
  if (ba_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#ba-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_deportation_section_21 = document.getElementById('ba-deportation-section-21');
  if (ba_deportation_section_21) {
    gsap.fromTo('#ba-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('ba-translation-form-sworn-document-translation-services-in-brazil');
  if (ba_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#ba-translation-form-sworn-document-translation-services-in-brazil input, #ba-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_list_quick_facts = document.getElementById('ba-translation-list-quick-facts');
  if (ba_translation_list_quick_facts) {
    gsap.from('#ba-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_list_common_challenges_applicants_face = document.getElementById('ba-translation-list-common-challenges-applicants-face');
  if (ba_translation_list_common_challenges_applicants_face) {
    gsap.from('#ba-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_list_how_we_solve_these_challenges = document.getElementById('ba-translation-list-how-we-solve-these-challenges');
  if (ba_translation_list_how_we_solve_these_challenges) {
    gsap.from('#ba-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_section_service_overview = document.getElementById('ba-translation-section-service-overview');
  if (ba_translation_section_service_overview) {
    gsap.fromTo('#ba-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_form_who_is_this_service_for = document.getElementById('ba-translation-form-who-is-this-service-for');
  if (ba_translation_form_who_is_this_service_for) {
    gsap.from('#ba-translation-form-who-is-this-service-for input, #ba-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_list_required_documents = document.getElementById('ba-translation-list-required-documents');
  if (ba_translation_list_required_documents) {
    gsap.from('#ba-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_list_process = document.getElementById('ba-translation-list-process');
  if (ba_translation_list_process) {
    gsap.from('#ba-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_section_timelines_deadlines = document.getElementById('ba-translation-section-timelines-deadlines');
  if (ba_translation_section_timelines_deadlines) {
    gsap.fromTo('#ba-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_section_fees_costs = document.getElementById('ba-translation-section-fees-costs');
  if (ba_translation_section_fees_costs) {
    gsap.fromTo('#ba-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_list_risks_common_mistakes = document.getElementById('ba-translation-list-risks-common-mistakes');
  if (ba_translation_list_risks_common_mistakes) {
    gsap.from('#ba-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_section_diy_vs_professional_assistance = document.getElementById('ba-translation-section-diy-vs-professional-assistance');
  if (ba_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_section_bahia_specific_context = document.getElementById('ba-translation-section-bahia-specific-context');
  if (ba_translation_section_bahia_specific_context) {
    gsap.fromTo('#ba-translation-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_section_what_our_clients_say = document.getElementById('ba-translation-section-what-our-clients-say');
  if (ba_translation_section_what_our_clients_say) {
    gsap.fromTo('#ba-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_section_frequently_asked_questions = document.getElementById('ba-translation-section-frequently-asked-questions');
  if (ba_translation_section_frequently_asked_questions) {
    gsap.fromTo('#ba-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_section_international_support = document.getElementById('ba-translation-section-international-support');
  if (ba_translation_section_international_support) {
    gsap.fromTo('#ba-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_list_our_credentials = document.getElementById('ba-translation-list-our-credentials');
  if (ba_translation_list_our_credentials) {
    gsap.from('#ba-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_list_related_services = document.getElementById('ba-translation-list-related-services');
  if (ba_translation_list_related_services) {
    gsap.from('#ba-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_section_youre_in_good_hands = document.getElementById('ba-translation-section-youre-in-good-hands');
  if (ba_translation_section_youre_in_good_hands) {
    gsap.fromTo('#ba-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_translation_section_21 = document.getElementById('ba-translation-section-21');
  if (ba_translation_section_21) {
    gsap.fromTo('#ba-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('ba-expulsion-form-expulsion-assistance-in-brazil');
  if (ba_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#ba-expulsion-form-expulsion-assistance-in-brazil input, #ba-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_list_quick_facts = document.getElementById('ba-expulsion-list-quick-facts');
  if (ba_expulsion_list_quick_facts) {
    gsap.from('#ba-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_list_common_challenges_applicants_face = document.getElementById('ba-expulsion-list-common-challenges-applicants-face');
  if (ba_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#ba-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_list_how_we_solve_these_challenges = document.getElementById('ba-expulsion-list-how-we-solve-these-challenges');
  if (ba_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#ba-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_section_service_overview = document.getElementById('ba-expulsion-section-service-overview');
  if (ba_expulsion_section_service_overview) {
    gsap.fromTo('#ba-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_form_who_is_this_service_for = document.getElementById('ba-expulsion-form-who-is-this-service-for');
  if (ba_expulsion_form_who_is_this_service_for) {
    gsap.from('#ba-expulsion-form-who-is-this-service-for input, #ba-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_list_required_documents = document.getElementById('ba-expulsion-list-required-documents');
  if (ba_expulsion_list_required_documents) {
    gsap.from('#ba-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_list_process = document.getElementById('ba-expulsion-list-process');
  if (ba_expulsion_list_process) {
    gsap.from('#ba-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_section_timelines_deadlines = document.getElementById('ba-expulsion-section-timelines-deadlines');
  if (ba_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#ba-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_section_fees_costs = document.getElementById('ba-expulsion-section-fees-costs');
  if (ba_expulsion_section_fees_costs) {
    gsap.fromTo('#ba-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_list_risks_common_mistakes = document.getElementById('ba-expulsion-list-risks-common-mistakes');
  if (ba_expulsion_list_risks_common_mistakes) {
    gsap.from('#ba-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_section_diy_vs_professional_assistance = document.getElementById('ba-expulsion-section-diy-vs-professional-assistance');
  if (ba_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_section_bahia_specific_context = document.getElementById('ba-expulsion-section-bahia-specific-context');
  if (ba_expulsion_section_bahia_specific_context) {
    gsap.fromTo('#ba-expulsion-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_section_what_our_clients_say = document.getElementById('ba-expulsion-section-what-our-clients-say');
  if (ba_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#ba-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_section_frequently_asked_questions = document.getElementById('ba-expulsion-section-frequently-asked-questions');
  if (ba_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#ba-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_section_international_support = document.getElementById('ba-expulsion-section-international-support');
  if (ba_expulsion_section_international_support) {
    gsap.fromTo('#ba-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_list_our_credentials = document.getElementById('ba-expulsion-list-our-credentials');
  if (ba_expulsion_list_our_credentials) {
    gsap.from('#ba-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_list_related_services = document.getElementById('ba-expulsion-list-related-services');
  if (ba_expulsion_list_related_services) {
    gsap.from('#ba-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_section_youre_in_good_hands = document.getElementById('ba-expulsion-section-youre-in-good-hands');
  if (ba_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#ba-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_expulsion_section_21 = document.getElementById('ba-expulsion-section-21');
  if (ba_expulsion_section_21) {
    gsap.fromTo('#ba-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('ba-appeals-form-appeal-immigration-denials-in-brazil');
  if (ba_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#ba-appeals-form-appeal-immigration-denials-in-brazil input, #ba-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_list_quick_facts = document.getElementById('ba-appeals-list-quick-facts');
  if (ba_appeals_list_quick_facts) {
    gsap.from('#ba-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_list_common_challenges_applicants_face = document.getElementById('ba-appeals-list-common-challenges-applicants-face');
  if (ba_appeals_list_common_challenges_applicants_face) {
    gsap.from('#ba-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_list_how_we_solve_these_challenges = document.getElementById('ba-appeals-list-how-we-solve-these-challenges');
  if (ba_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#ba-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_section_service_overview = document.getElementById('ba-appeals-section-service-overview');
  if (ba_appeals_section_service_overview) {
    gsap.fromTo('#ba-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_form_who_is_this_service_for = document.getElementById('ba-appeals-form-who-is-this-service-for');
  if (ba_appeals_form_who_is_this_service_for) {
    gsap.from('#ba-appeals-form-who-is-this-service-for input, #ba-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_list_required_documents = document.getElementById('ba-appeals-list-required-documents');
  if (ba_appeals_list_required_documents) {
    gsap.from('#ba-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_list_appeal_process = document.getElementById('ba-appeals-list-appeal-process');
  if (ba_appeals_list_appeal_process) {
    gsap.from('#ba-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_section_timelines_deadlines = document.getElementById('ba-appeals-section-timelines-deadlines');
  if (ba_appeals_section_timelines_deadlines) {
    gsap.fromTo('#ba-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_section_fees_costs = document.getElementById('ba-appeals-section-fees-costs');
  if (ba_appeals_section_fees_costs) {
    gsap.fromTo('#ba-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_list_risks_common_mistakes = document.getElementById('ba-appeals-list-risks-common-mistakes');
  if (ba_appeals_list_risks_common_mistakes) {
    gsap.from('#ba-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_section_diy_vs_professional_assistance = document.getElementById('ba-appeals-section-diy-vs-professional-assistance');
  if (ba_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_section_bahia_specific_context = document.getElementById('ba-appeals-section-bahia-specific-context');
  if (ba_appeals_section_bahia_specific_context) {
    gsap.fromTo('#ba-appeals-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_section_what_our_clients_say = document.getElementById('ba-appeals-section-what-our-clients-say');
  if (ba_appeals_section_what_our_clients_say) {
    gsap.fromTo('#ba-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_section_frequently_asked_questions = document.getElementById('ba-appeals-section-frequently-asked-questions');
  if (ba_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#ba-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_section_international_support = document.getElementById('ba-appeals-section-international-support');
  if (ba_appeals_section_international_support) {
    gsap.fromTo('#ba-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_list_our_credentials = document.getElementById('ba-appeals-list-our-credentials');
  if (ba_appeals_list_our_credentials) {
    gsap.from('#ba-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_list_related_services = document.getElementById('ba-appeals-list-related-services');
  if (ba_appeals_list_related_services) {
    gsap.from('#ba-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_section_youre_in_good_hands = document.getElementById('ba-appeals-section-youre-in-good-hands');
  if (ba_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#ba-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_appeals_section_21 = document.getElementById('ba-appeals-section-21');
  if (ba_appeals_section_21) {
    gsap.fromTo('#ba-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('ba-consular-form-consular-services-in-brazil-for-citizens');
  if (ba_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#ba-consular-form-consular-services-in-brazil-for-citizens input, #ba-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_list_quick_facts = document.getElementById('ba-consular-list-quick-facts');
  if (ba_consular_list_quick_facts) {
    gsap.from('#ba-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_list_common_challenges_applicants_face = document.getElementById('ba-consular-list-common-challenges-applicants-face');
  if (ba_consular_list_common_challenges_applicants_face) {
    gsap.from('#ba-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_list_how_we_solve_these_challenges = document.getElementById('ba-consular-list-how-we-solve-these-challenges');
  if (ba_consular_list_how_we_solve_these_challenges) {
    gsap.from('#ba-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_section_service_overview = document.getElementById('ba-consular-section-service-overview');
  if (ba_consular_section_service_overview) {
    gsap.fromTo('#ba-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_form_who_is_this_service_for = document.getElementById('ba-consular-form-who-is-this-service-for');
  if (ba_consular_form_who_is_this_service_for) {
    gsap.from('#ba-consular-form-who-is-this-service-for input, #ba-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_list_required_documents = document.getElementById('ba-consular-list-required-documents');
  if (ba_consular_list_required_documents) {
    gsap.from('#ba-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_list_process = document.getElementById('ba-consular-list-process');
  if (ba_consular_list_process) {
    gsap.from('#ba-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_section_timelines_deadlines = document.getElementById('ba-consular-section-timelines-deadlines');
  if (ba_consular_section_timelines_deadlines) {
    gsap.fromTo('#ba-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_section_fees_costs = document.getElementById('ba-consular-section-fees-costs');
  if (ba_consular_section_fees_costs) {
    gsap.fromTo('#ba-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_list_risks_common_mistakes = document.getElementById('ba-consular-list-risks-common-mistakes');
  if (ba_consular_list_risks_common_mistakes) {
    gsap.from('#ba-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_section_diy_vs_professional_assistance = document.getElementById('ba-consular-section-diy-vs-professional-assistance');
  if (ba_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_section_bahia_specific_context = document.getElementById('ba-consular-section-bahia-specific-context');
  if (ba_consular_section_bahia_specific_context) {
    gsap.fromTo('#ba-consular-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_section_what_our_clients_say = document.getElementById('ba-consular-section-what-our-clients-say');
  if (ba_consular_section_what_our_clients_say) {
    gsap.fromTo('#ba-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_section_frequently_asked_questions = document.getElementById('ba-consular-section-frequently-asked-questions');
  if (ba_consular_section_frequently_asked_questions) {
    gsap.fromTo('#ba-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_section_international_support = document.getElementById('ba-consular-section-international-support');
  if (ba_consular_section_international_support) {
    gsap.fromTo('#ba-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_list_our_credentials = document.getElementById('ba-consular-list-our-credentials');
  if (ba_consular_list_our_credentials) {
    gsap.from('#ba-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_list_related_services = document.getElementById('ba-consular-list-related-services');
  if (ba_consular_list_related_services) {
    gsap.from('#ba-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_section_youre_in_good_hands = document.getElementById('ba-consular-section-youre-in-good-hands');
  if (ba_consular_section_youre_in_good_hands) {
    gsap.fromTo('#ba-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_consular_section_21 = document.getElementById('ba-consular-section-21');
  if (ba_consular_section_21) {
    gsap.fromTo('#ba-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('ba-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (ba_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#ba-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #ba-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_list_quick_facts = document.getElementById('ba-criminalrecords-list-quick-facts');
  if (ba_criminalrecords_list_quick_facts) {
    gsap.from('#ba-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_list_common_challenges_applicants_face = document.getElementById('ba-criminalrecords-list-common-challenges-applicants-face');
  if (ba_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#ba-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('ba-criminalrecords-list-how-we-solve-these-challenges');
  if (ba_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#ba-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_section_service_overview = document.getElementById('ba-criminalrecords-section-service-overview');
  if (ba_criminalrecords_section_service_overview) {
    gsap.fromTo('#ba-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_form_who_is_this_service_for = document.getElementById('ba-criminalrecords-form-who-is-this-service-for');
  if (ba_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#ba-criminalrecords-form-who-is-this-service-for input, #ba-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_list_required_documents = document.getElementById('ba-criminalrecords-list-required-documents');
  if (ba_criminalrecords_list_required_documents) {
    gsap.from('#ba-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_list_process = document.getElementById('ba-criminalrecords-list-process');
  if (ba_criminalrecords_list_process) {
    gsap.from('#ba-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_section_timelines_deadlines = document.getElementById('ba-criminalrecords-section-timelines-deadlines');
  if (ba_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#ba-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_section_fees_costs = document.getElementById('ba-criminalrecords-section-fees-costs');
  if (ba_criminalrecords_section_fees_costs) {
    gsap.fromTo('#ba-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_list_risks_common_mistakes = document.getElementById('ba-criminalrecords-list-risks-common-mistakes');
  if (ba_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#ba-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('ba-criminalrecords-section-diy-vs-professional-assistance');
  if (ba_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_section_bahia_specific_context = document.getElementById('ba-criminalrecords-section-bahia-specific-context');
  if (ba_criminalrecords_section_bahia_specific_context) {
    gsap.fromTo('#ba-criminalrecords-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_section_what_our_clients_say = document.getElementById('ba-criminalrecords-section-what-our-clients-say');
  if (ba_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#ba-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_section_frequently_asked_questions = document.getElementById('ba-criminalrecords-section-frequently-asked-questions');
  if (ba_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#ba-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_section_international_support = document.getElementById('ba-criminalrecords-section-international-support');
  if (ba_criminalrecords_section_international_support) {
    gsap.fromTo('#ba-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_list_our_credentials = document.getElementById('ba-criminalrecords-list-our-credentials');
  if (ba_criminalrecords_list_our_credentials) {
    gsap.from('#ba-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_list_related_services = document.getElementById('ba-criminalrecords-list-related-services');
  if (ba_criminalrecords_list_related_services) {
    gsap.from('#ba-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_section_youre_in_good_hands = document.getElementById('ba-criminalrecords-section-youre-in-good-hands');
  if (ba_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#ba-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_criminalrecords_section_21 = document.getElementById('ba-criminalrecords-section-21');
  if (ba_criminalrecords_section_21) {
    gsap.fromTo('#ba-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_form_extradition_assistance_in_brazil = document.getElementById('ba-extradition-form-extradition-assistance-in-brazil');
  if (ba_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#ba-extradition-form-extradition-assistance-in-brazil input, #ba-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_list_quick_facts = document.getElementById('ba-extradition-list-quick-facts');
  if (ba_extradition_list_quick_facts) {
    gsap.from('#ba-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_list_common_challenges_applicants_face = document.getElementById('ba-extradition-list-common-challenges-applicants-face');
  if (ba_extradition_list_common_challenges_applicants_face) {
    gsap.from('#ba-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_list_how_we_solve_these_challenges = document.getElementById('ba-extradition-list-how-we-solve-these-challenges');
  if (ba_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#ba-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_section_service_overview = document.getElementById('ba-extradition-section-service-overview');
  if (ba_extradition_section_service_overview) {
    gsap.fromTo('#ba-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_form_who_is_this_service_for = document.getElementById('ba-extradition-form-who-is-this-service-for');
  if (ba_extradition_form_who_is_this_service_for) {
    gsap.from('#ba-extradition-form-who-is-this-service-for input, #ba-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_list_required_documents = document.getElementById('ba-extradition-list-required-documents');
  if (ba_extradition_list_required_documents) {
    gsap.from('#ba-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_list_process = document.getElementById('ba-extradition-list-process');
  if (ba_extradition_list_process) {
    gsap.from('#ba-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_section_timelines_deadlines = document.getElementById('ba-extradition-section-timelines-deadlines');
  if (ba_extradition_section_timelines_deadlines) {
    gsap.fromTo('#ba-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_section_fees_costs = document.getElementById('ba-extradition-section-fees-costs');
  if (ba_extradition_section_fees_costs) {
    gsap.fromTo('#ba-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_list_risks_common_mistakes = document.getElementById('ba-extradition-list-risks-common-mistakes');
  if (ba_extradition_list_risks_common_mistakes) {
    gsap.from('#ba-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_section_diy_vs_professional_assistance = document.getElementById('ba-extradition-section-diy-vs-professional-assistance');
  if (ba_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_section_bahia_specific_context = document.getElementById('ba-extradition-section-bahia-specific-context');
  if (ba_extradition_section_bahia_specific_context) {
    gsap.fromTo('#ba-extradition-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_section_what_our_clients_say = document.getElementById('ba-extradition-section-what-our-clients-say');
  if (ba_extradition_section_what_our_clients_say) {
    gsap.fromTo('#ba-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_section_frequently_asked_questions = document.getElementById('ba-extradition-section-frequently-asked-questions');
  if (ba_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#ba-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_section_international_support = document.getElementById('ba-extradition-section-international-support');
  if (ba_extradition_section_international_support) {
    gsap.fromTo('#ba-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_list_our_credentials = document.getElementById('ba-extradition-list-our-credentials');
  if (ba_extradition_list_our_credentials) {
    gsap.from('#ba-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_list_related_services = document.getElementById('ba-extradition-list-related-services');
  if (ba_extradition_list_related_services) {
    gsap.from('#ba-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_section_youre_in_good_hands = document.getElementById('ba-extradition-section-youre-in-good-hands');
  if (ba_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#ba-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_extradition_section_21 = document.getElementById('ba-extradition-section-21');
  if (ba_extradition_section_21) {
    gsap.fromTo('#ba-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_form_discover_the_north_amazon_and_beyond = document.getElementById('ba-north-form-discover-the-north-amazon-and-beyond');
  if (ba_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#ba-north-form-discover-the-north-amazon-and-beyond input, #ba-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_list_quick_facts = document.getElementById('ba-north-list-quick-facts');
  if (ba_north_list_quick_facts) {
    gsap.from('#ba-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_list_common_challenges_applicants_face = document.getElementById('ba-north-list-common-challenges-applicants-face');
  if (ba_north_list_common_challenges_applicants_face) {
    gsap.from('#ba-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_list_how_we_solve_these_challenges = document.getElementById('ba-north-list-how-we-solve-these-challenges');
  if (ba_north_list_how_we_solve_these_challenges) {
    gsap.from('#ba-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_section_trip_overview = document.getElementById('ba-north-section-trip-overview');
  if (ba_north_section_trip_overview) {
    gsap.fromTo('#ba-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_form_who_is_this_trip_for = document.getElementById('ba-north-form-who-is-this-trip-for');
  if (ba_north_form_who_is_this_trip_for) {
    gsap.from('#ba-north-form-who-is-this-trip-for input, #ba-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_list_required_documents = document.getElementById('ba-north-list-required-documents');
  if (ba_north_list_required_documents) {
    gsap.from('#ba-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_list_booking_process = document.getElementById('ba-north-list-booking-process');
  if (ba_north_list_booking_process) {
    gsap.from('#ba-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_section_timelines_deadlines = document.getElementById('ba-north-section-timelines-deadlines');
  if (ba_north_section_timelines_deadlines) {
    gsap.fromTo('#ba-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_section_fees_costs = document.getElementById('ba-north-section-fees-costs');
  if (ba_north_section_fees_costs) {
    gsap.fromTo('#ba-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_list_risks_common_mistakes = document.getElementById('ba-north-list-risks-common-mistakes');
  if (ba_north_list_risks_common_mistakes) {
    gsap.from('#ba-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_section_diy_vs_professional_assistance = document.getElementById('ba-north-section-diy-vs-professional-assistance');
  if (ba_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_section_bahia_specific_context = document.getElementById('ba-north-section-bahia-specific-context');
  if (ba_north_section_bahia_specific_context) {
    gsap.fromTo('#ba-north-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_section_what_our_clients_say = document.getElementById('ba-north-section-what-our-clients-say');
  if (ba_north_section_what_our_clients_say) {
    gsap.fromTo('#ba-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_section_frequently_asked_questions = document.getElementById('ba-north-section-frequently-asked-questions');
  if (ba_north_section_frequently_asked_questions) {
    gsap.fromTo('#ba-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_section_international_support = document.getElementById('ba-north-section-international-support');
  if (ba_north_section_international_support) {
    gsap.fromTo('#ba-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_list_our_credentials = document.getElementById('ba-north-list-our-credentials');
  if (ba_north_list_our_credentials) {
    gsap.from('#ba-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_list_related_services = document.getElementById('ba-north-list-related-services');
  if (ba_north_list_related_services) {
    gsap.from('#ba-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_section_youre_in_good_hands = document.getElementById('ba-north-section-youre-in-good-hands');
  if (ba_north_section_youre_in_good_hands) {
    gsap.fromTo('#ba-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_north_section_21 = document.getElementById('ba-north-section-21');
  if (ba_north_section_21) {
    gsap.fromTo('#ba-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('ba-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (ba_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#ba-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #ba-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_list_quick_facts = document.getElementById('ba-centralwest-list-quick-facts');
  if (ba_centralwest_list_quick_facts) {
    gsap.from('#ba-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_list_common_challenges_applicants_face = document.getElementById('ba-centralwest-list-common-challenges-applicants-face');
  if (ba_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#ba-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_list_how_we_solve_these_challenges = document.getElementById('ba-centralwest-list-how-we-solve-these-challenges');
  if (ba_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#ba-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_section_trip_overview = document.getElementById('ba-centralwest-section-trip-overview');
  if (ba_centralwest_section_trip_overview) {
    gsap.fromTo('#ba-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_form_who_is_this_trip_for = document.getElementById('ba-centralwest-form-who-is-this-trip-for');
  if (ba_centralwest_form_who_is_this_trip_for) {
    gsap.from('#ba-centralwest-form-who-is-this-trip-for input, #ba-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_list_required_documents = document.getElementById('ba-centralwest-list-required-documents');
  if (ba_centralwest_list_required_documents) {
    gsap.from('#ba-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_list_booking_process = document.getElementById('ba-centralwest-list-booking-process');
  if (ba_centralwest_list_booking_process) {
    gsap.from('#ba-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_section_timelines_deadlines = document.getElementById('ba-centralwest-section-timelines-deadlines');
  if (ba_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#ba-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_section_fees_costs = document.getElementById('ba-centralwest-section-fees-costs');
  if (ba_centralwest_section_fees_costs) {
    gsap.fromTo('#ba-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_list_risks_common_mistakes = document.getElementById('ba-centralwest-list-risks-common-mistakes');
  if (ba_centralwest_list_risks_common_mistakes) {
    gsap.from('#ba-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_section_diy_vs_professional_assistance = document.getElementById('ba-centralwest-section-diy-vs-professional-assistance');
  if (ba_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_section_bahia_specific_context = document.getElementById('ba-centralwest-section-bahia-specific-context');
  if (ba_centralwest_section_bahia_specific_context) {
    gsap.fromTo('#ba-centralwest-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_section_what_our_clients_say = document.getElementById('ba-centralwest-section-what-our-clients-say');
  if (ba_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#ba-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_section_frequently_asked_questions = document.getElementById('ba-centralwest-section-frequently-asked-questions');
  if (ba_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#ba-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_section_international_support = document.getElementById('ba-centralwest-section-international-support');
  if (ba_centralwest_section_international_support) {
    gsap.fromTo('#ba-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_list_our_credentials = document.getElementById('ba-centralwest-list-our-credentials');
  if (ba_centralwest_list_our_credentials) {
    gsap.from('#ba-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_list_related_services = document.getElementById('ba-centralwest-list-related-services');
  if (ba_centralwest_list_related_services) {
    gsap.from('#ba-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_section_youre_in_good_hands = document.getElementById('ba-centralwest-section-youre-in-good-hands');
  if (ba_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#ba-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_centralwest_section_21 = document.getElementById('ba-centralwest-section-21');
  if (ba_centralwest_section_21) {
    gsap.fromTo('#ba-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('ba-southeast-form-dynamic-southeast-cities-and-history');
  if (ba_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#ba-southeast-form-dynamic-southeast-cities-and-history input, #ba-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_list_quick_facts = document.getElementById('ba-southeast-list-quick-facts');
  if (ba_southeast_list_quick_facts) {
    gsap.from('#ba-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_list_common_challenges_applicants_face = document.getElementById('ba-southeast-list-common-challenges-applicants-face');
  if (ba_southeast_list_common_challenges_applicants_face) {
    gsap.from('#ba-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_list_how_we_solve_these_challenges = document.getElementById('ba-southeast-list-how-we-solve-these-challenges');
  if (ba_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#ba-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_section_trip_overview = document.getElementById('ba-southeast-section-trip-overview');
  if (ba_southeast_section_trip_overview) {
    gsap.fromTo('#ba-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_form_who_is_this_trip_for = document.getElementById('ba-southeast-form-who-is-this-trip-for');
  if (ba_southeast_form_who_is_this_trip_for) {
    gsap.from('#ba-southeast-form-who-is-this-trip-for input, #ba-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_list_required_documents = document.getElementById('ba-southeast-list-required-documents');
  if (ba_southeast_list_required_documents) {
    gsap.from('#ba-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_list_booking_process = document.getElementById('ba-southeast-list-booking-process');
  if (ba_southeast_list_booking_process) {
    gsap.from('#ba-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_section_timelines_deadlines = document.getElementById('ba-southeast-section-timelines-deadlines');
  if (ba_southeast_section_timelines_deadlines) {
    gsap.fromTo('#ba-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_section_fees_costs = document.getElementById('ba-southeast-section-fees-costs');
  if (ba_southeast_section_fees_costs) {
    gsap.fromTo('#ba-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_list_risks_common_mistakes = document.getElementById('ba-southeast-list-risks-common-mistakes');
  if (ba_southeast_list_risks_common_mistakes) {
    gsap.from('#ba-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_section_diy_vs_professional_assistance = document.getElementById('ba-southeast-section-diy-vs-professional-assistance');
  if (ba_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_section_bahia_specific_context = document.getElementById('ba-southeast-section-bahia-specific-context');
  if (ba_southeast_section_bahia_specific_context) {
    gsap.fromTo('#ba-southeast-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_section_what_our_clients_say = document.getElementById('ba-southeast-section-what-our-clients-say');
  if (ba_southeast_section_what_our_clients_say) {
    gsap.fromTo('#ba-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_section_frequently_asked_questions = document.getElementById('ba-southeast-section-frequently-asked-questions');
  if (ba_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#ba-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_section_international_support = document.getElementById('ba-southeast-section-international-support');
  if (ba_southeast_section_international_support) {
    gsap.fromTo('#ba-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_list_our_credentials = document.getElementById('ba-southeast-list-our-credentials');
  if (ba_southeast_list_our_credentials) {
    gsap.from('#ba-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_list_related_services = document.getElementById('ba-southeast-list-related-services');
  if (ba_southeast_list_related_services) {
    gsap.from('#ba-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_section_youre_in_good_hands = document.getElementById('ba-southeast-section-youre-in-good-hands');
  if (ba_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#ba-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_southeast_section_21 = document.getElementById('ba-southeast-section-21');
  if (ba_southeast_section_21) {
    gsap.fromTo('#ba-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('ba-northeast-form-vibrant-northeast-beaches-and-culture');
  if (ba_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#ba-northeast-form-vibrant-northeast-beaches-and-culture input, #ba-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_list_quick_facts = document.getElementById('ba-northeast-list-quick-facts');
  if (ba_northeast_list_quick_facts) {
    gsap.from('#ba-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_list_common_challenges_applicants_face = document.getElementById('ba-northeast-list-common-challenges-applicants-face');
  if (ba_northeast_list_common_challenges_applicants_face) {
    gsap.from('#ba-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_list_how_we_solve_these_challenges = document.getElementById('ba-northeast-list-how-we-solve-these-challenges');
  if (ba_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#ba-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_section_trip_overview = document.getElementById('ba-northeast-section-trip-overview');
  if (ba_northeast_section_trip_overview) {
    gsap.fromTo('#ba-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_form_who_is_this_trip_for = document.getElementById('ba-northeast-form-who-is-this-trip-for');
  if (ba_northeast_form_who_is_this_trip_for) {
    gsap.from('#ba-northeast-form-who-is-this-trip-for input, #ba-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_list_required_documents = document.getElementById('ba-northeast-list-required-documents');
  if (ba_northeast_list_required_documents) {
    gsap.from('#ba-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_list_booking_process = document.getElementById('ba-northeast-list-booking-process');
  if (ba_northeast_list_booking_process) {
    gsap.from('#ba-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_section_timelines_deadlines = document.getElementById('ba-northeast-section-timelines-deadlines');
  if (ba_northeast_section_timelines_deadlines) {
    gsap.fromTo('#ba-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_section_fees_costs = document.getElementById('ba-northeast-section-fees-costs');
  if (ba_northeast_section_fees_costs) {
    gsap.fromTo('#ba-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_list_risks_common_mistakes = document.getElementById('ba-northeast-list-risks-common-mistakes');
  if (ba_northeast_list_risks_common_mistakes) {
    gsap.from('#ba-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_section_diy_vs_professional_assistance = document.getElementById('ba-northeast-section-diy-vs-professional-assistance');
  if (ba_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_section_bahia_specific_context = document.getElementById('ba-northeast-section-bahia-specific-context');
  if (ba_northeast_section_bahia_specific_context) {
    gsap.fromTo('#ba-northeast-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_section_what_our_clients_say = document.getElementById('ba-northeast-section-what-our-clients-say');
  if (ba_northeast_section_what_our_clients_say) {
    gsap.fromTo('#ba-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_section_frequently_asked_questions = document.getElementById('ba-northeast-section-frequently-asked-questions');
  if (ba_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#ba-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_section_international_support = document.getElementById('ba-northeast-section-international-support');
  if (ba_northeast_section_international_support) {
    gsap.fromTo('#ba-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_list_our_credentials = document.getElementById('ba-northeast-list-our-credentials');
  if (ba_northeast_list_our_credentials) {
    gsap.from('#ba-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_list_related_services = document.getElementById('ba-northeast-list-related-services');
  if (ba_northeast_list_related_services) {
    gsap.from('#ba-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_section_youre_in_good_hands = document.getElementById('ba-northeast-section-youre-in-good-hands');
  if (ba_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#ba-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_northeast_section_21 = document.getElementById('ba-northeast-section-21');
  if (ba_northeast_section_21) {
    gsap.fromTo('#ba-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_form_charming_south_wine_and_gauchos = document.getElementById('ba-south-form-charming-south-wine-and-gauchos');
  if (ba_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#ba-south-form-charming-south-wine-and-gauchos input, #ba-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_list_quick_facts = document.getElementById('ba-south-list-quick-facts');
  if (ba_south_list_quick_facts) {
    gsap.from('#ba-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_list_common_challenges_applicants_face = document.getElementById('ba-south-list-common-challenges-applicants-face');
  if (ba_south_list_common_challenges_applicants_face) {
    gsap.from('#ba-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_list_how_we_solve_these_challenges = document.getElementById('ba-south-list-how-we-solve-these-challenges');
  if (ba_south_list_how_we_solve_these_challenges) {
    gsap.from('#ba-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_section_trip_overview = document.getElementById('ba-south-section-trip-overview');
  if (ba_south_section_trip_overview) {
    gsap.fromTo('#ba-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_form_who_is_this_trip_for = document.getElementById('ba-south-form-who-is-this-trip-for');
  if (ba_south_form_who_is_this_trip_for) {
    gsap.from('#ba-south-form-who-is-this-trip-for input, #ba-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_list_required_documents = document.getElementById('ba-south-list-required-documents');
  if (ba_south_list_required_documents) {
    gsap.from('#ba-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_list_booking_process = document.getElementById('ba-south-list-booking-process');
  if (ba_south_list_booking_process) {
    gsap.from('#ba-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_section_timelines_deadlines = document.getElementById('ba-south-section-timelines-deadlines');
  if (ba_south_section_timelines_deadlines) {
    gsap.fromTo('#ba-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_section_fees_costs = document.getElementById('ba-south-section-fees-costs');
  if (ba_south_section_fees_costs) {
    gsap.fromTo('#ba-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_list_risks_common_mistakes = document.getElementById('ba-south-list-risks-common-mistakes');
  if (ba_south_list_risks_common_mistakes) {
    gsap.from('#ba-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_section_diy_vs_professional_assistance = document.getElementById('ba-south-section-diy-vs-professional-assistance');
  if (ba_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ba-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_section_bahia_specific_context = document.getElementById('ba-south-section-bahia-specific-context');
  if (ba_south_section_bahia_specific_context) {
    gsap.fromTo('#ba-south-section-bahia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_section_what_our_clients_say = document.getElementById('ba-south-section-what-our-clients-say');
  if (ba_south_section_what_our_clients_say) {
    gsap.fromTo('#ba-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_section_frequently_asked_questions = document.getElementById('ba-south-section-frequently-asked-questions');
  if (ba_south_section_frequently_asked_questions) {
    gsap.fromTo('#ba-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_section_international_support = document.getElementById('ba-south-section-international-support');
  if (ba_south_section_international_support) {
    gsap.fromTo('#ba-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_list_our_credentials = document.getElementById('ba-south-list-our-credentials');
  if (ba_south_list_our_credentials) {
    gsap.from('#ba-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_list_related_services = document.getElementById('ba-south-list-related-services');
  if (ba_south_list_related_services) {
    gsap.from('#ba-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_section_youre_in_good_hands = document.getElementById('ba-south-section-youre-in-good-hands');
  if (ba_south_section_youre_in_good_hands) {
    gsap.fromTo('#ba-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

  const ba_south_section_21 = document.getElementById('ba-south-section-21');
  if (ba_south_section_21) {
    gsap.fromTo('#ba-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.96, ease: 'easeInOutQuart'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
