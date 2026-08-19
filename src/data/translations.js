export const translations = {
  en: {
    nav: {
      about:      'About',
      experience: 'Experience',
      projects:   'Projects',
      contact:    'Contact',
      resume:     'Resume',
    },
    hero: {
      greeting:    "Hi, I'm",
      roleWords:   ['Backend', 'Developer'],
      description: 'Building scalable monolithic and microservice based applications with Python, Django, and FastAPI powering distributed architectures and production ready SaaS platforms.',
      viewProjects: 'View Projects',
      myExperience: 'My Experience',
      openTo:       'Open to opportunities',
    },
    about: {
      tag:   'About',
      title: 'Who I Am',
      bio: [
        'Backend engineer with 2.5+ years building distributed systems at scale. Currently at <strong>Zeta Labs</strong>, developing a multi-module SaaS platform with AI integration, microservices architecture, and cross-service gRPC communication.',
        'Previously at <strong>Ayata Incorporation</strong>, I built the core backend for iHRTrack, an HR and attendance management platform with real-time RFID and biometric hardware integrations, payroll processing, and shift scheduling.',
        'Alongside my professional work, I volunteer as <strong>IT Lead</strong> for <strong>Leo Club of Kathmandu Budigandaki</strong>, where I designed and built the club\'s official website and keep its content, gallery, and event pages running smoothly.',
        'I specialise in <strong>Python / Django / FastAPI</strong>, event-driven architectures with RabbitMQ, and service-to-service communication via gRPC, always focused on reliability, clean API design, and developer experience.',
      ],
      stats: [
        { value: '2.5+',  label: 'Years Exp.' },
        { value: '2',   label: 'Companies' },
        { value: '20+', label: 'Technologies' },
      ],
    },
    skills: {
      tag:   'Skills',
      title: 'Tech Stack',
      categories: {
        Language:     'Language',
        Framework:    'Frameworks',
        Database:     'Databases',
        Protocol:     'Protocols & Messaging',
        DevOps:       'DevOps',
        Architecture: 'Architecture',
      },
    },
    experience: {
      tag:   'Experience',
      title: "Where I've Worked",
      items: [
        {
          role: 'IT Lead',
          bullets: [
            "Lead IT strategy and manage the digital presence for Leo Club of Kathmandu Budigandaki",
            'Designed and built the club\'s official website with a user-friendly experience in mind',
            "Keep the site's content, gallery, and event pages fresh and easy to browse alongside ongoing club activities",
            'Support digital coordination for community service events and youth leadership programs',
          ],
        },
        {
          role: 'Backend Developer',
          bullets: [
            'Building a multi-module SaaS platform with AI integration across microservices',
            'Architecting and developing modules: KMS, BMS, Orchestration, CMS, Assessments, and System Intelligence',
            'Implementing RBAC, JWT auth, and inter-service gRPC communication',
            'Designing event-driven workflows with RabbitMQ across distributed services',
          ],
        },
        {
          role: 'Junior Backend Developer',
          bullets: [
            'Built the core backend for iHRTrack, an Attendance Management System (AMS)',
            'Integrated RFID and biometric hardware for real-time attendance tracking',
            'Developed payroll processing, shift scheduling, and employee communication features',
            'Used RabbitMQ for async events and gRPC + Django Channels for real-time communication',
          ],
        },
        {
          role: 'Backend Developer Intern',
          bullets: [
            'Learned Django and backend fundamentals in a production environment',
            'Assisted in REST API development, debugging, and end-to-end testing',
            'Worked in Agile workflow using ClickUp for task management',
          ],
        },
      ],
    },
    projects: {
      tag:   'Projects',
      title: "What I've Built",
      items: [
        {
          title:       'iHRTrack',
          description: 'HR management platform with biometric login, AI-powered facial recognition, RFID access, and geolocation-based mobile check-ins, built at Ayata Incorporation for SMEs and enterprises across web, iOS, and Android.',
          tag:         'Production · Ayata',
        },
        {
          title:       'Process Orchestration',
          description: 'Built microservices based SaaS solutions at Zeta Labs including KMS, BMS, Orchestration, CMS, Assessments, and a System Intelligence service with AI integration and cross module gRPC communication.',
          tag:         'Production · Zeta Labs',
        },
        {
          title:       'System Intelligence Service',
          description: 'Automated decision-making engine within the Zeta Labs SaaS platform, processing real-time signals across all modules and triggering intelligent workflow orchestration.',
          tag:         'Production · Zeta Labs',
        },
        {
          title:       'Zeta Health',
          description: 'Multi-tenant clinic and hospital management platform for Zeta Labs, covering patient bookings, doctor consultations, pharmacy operations, and billing, with AI-assisted visit summaries and automated in-app, email, and SMS notifications.',
          tag:         'Production · Zeta Labs',
        },
        {
          title:       'Leo Club of Kathmandu Budigandaki',
          description: "Official website for Leo Club of Kathmandu Budigandaki, a youth-led service organization under Lions Clubs International. Designed and built end-to-end, covering the club's story, leadership timeline, events, gallery, and online membership signup.",
          tag:         'Volunteer · IT Lead',
        },
      ],
    },
    contact: {
      tag:      'Contact',
      title:    'Get in Touch',
      desc:     "Have a project in mind or want to collaborate? Drop me a message and I'll get back to you soon.",
      form: {
        title:   'Send a Message',
        name:    'Your Name',
        email:   'Your Email',
        message: 'Your Message',
        ph: {
          name:    'Pawan Pandey',
          email:   'hello@example.com',
          message: 'Tell me about your project...',
        },
        send:       'Send Message',
        sending:    'Sending…',
        sent:       'Message Sent!',
        sentDesc:   "Thanks! I'll get back to you soon.",
        sentAnother: 'Send another',
        error:      'Failed to send. Try emailing directly.',
      },
      connect: 'Connect with me',
      socials: [
        { key: 'gmail',    label: 'Email',    sub: 'pawanpandey1251@gmail.com' },
        { key: 'linkedin', label: 'LinkedIn', sub: 'linkedin.com/in/pawanrajpandey' },
        { key: 'github',   label: 'GitHub',   sub: 'github.com/ozzypawan' },
        { key: 'phone',    label: 'Phone',    sub: '+977 9767279454' },
      ],
    },
    footer: '© 2026 Pawan Raj Pandey · Kathmandu, Nepal',
    controls: { lang: 'Lang', theme: 'Theme' },
  },

  np: {
    nav: {
      about:      'परिचय',
      experience: 'अनुभव',
      projects:   'प्रोजेक्टहरू',
      contact:    'सम्पर्क',
      resume:     'रिज्युमे',
    },
    hero: {
      greeting:    'नमस्ते, म',
      roleWords:   ['ब्याकेन्ड', 'डेभलपर'],
      description: 'Python, Django र FastAPI प्रयोग गरेर स्केलेबल मोनोलिथिक तथा माइक्रोसर्भिस आर्किटेक्चरमा आधारित एप्लिकेसन र प्रोडक्सन-रेडी SaaS प्लेटफर्महरू निर्माण गर्दछु।',
      viewProjects: 'प्रोजेक्टहरू हेर्नुहोस्',
      myExperience: 'मेरो अनुभव',
      openTo:       'अवसरहरूका लागि खुला',
    },
    about: {
      tag:   'परिचय',
      title: 'म को हुँ',
      bio: [
        '२.५+ वर्षदेखि ठूलो स्केलका वितरित प्रणालीहरू निर्माण गर्ने ब्याकेन्ड इन्जिनियर। हाल <strong>Zeta Labs</strong> मा AI एकीकरणसहित मल्टि-मोड्युल SaaS प्लेटफर्म विकास गर्दैछु, जसमा माइक्रोसर्भिस आर्किटेक्चर र क्रस-सर्भिस gRPC सञ्चार छ।',
        'पहिले <strong>Ayata Incorporation</strong> मा रियल-टाइम RFID तथा बायोमेट्रिक हार्डवेयर एकीकरण, पेरोल प्रोसेसिङ र शिफ्ट व्यवस्थापनसहित iHRTrack नामक HR प्लेटफर्मको मुख्य ब्याकेन्ड निर्माण गरेको थिएँ।',
        'व्यावसायिक कामसँगै, म <strong>Leo Club of Kathmandu Budigandaki</strong> को <strong>IT लिड</strong> को रूपमा स्वयंसेवा गर्छु, जहाँ मैले क्लबको आधिकारिक वेबसाइट डिजाइन र निर्माण गरें र यसको सामग्री, ग्यालरी र इभेन्ट पेजहरू सुचारु राख्छु।',
        'म <strong>Python / Django / FastAPI</strong>, RabbitMQ इभेन्ट-ड्रिभन आर्किटेक्चर र gRPC सर्भिस कम्युनिकेसनमा विशेषज्ञ छु, विश्वसनीयता, सफा API डिजाइन र राम्रो डेभलपर अनुभवमा जोड दिन्छु।',
      ],
      stats: [
        { value: '२.५+',  label: 'वर्ष अनुभव' },
        { value: '२',   label: 'कम्पनी' },
        { value: '२०+', label: 'प्रविधि' },
      ],
    },
    skills: {
      tag:   'सीपहरू',
      title: 'टेक स्ट्याक',
      categories: {
        Language:     'भाषा',
        Framework:    'फ्रेमवर्क',
        Database:     'डाटाबेस',
        Protocol:     'प्रोटोकल र मेसेजिङ',
        DevOps:       'DevOps',
        Architecture: 'आर्किटेक्चर',
      },
    },
    experience: {
      tag:   'अनुभव',
      title: 'म काम गरेको ठाउँ',
      items: [
        {
          role: 'IT लिड',
          bullets: [
            'Leo Club of Kathmandu Budigandaki को IT रणनीति र डिजिटल उपस्थिति नेतृत्व गर्दै',
            'क्लबको आधिकारिक वेबसाइट प्रयोगकर्ता-मैत्री बनाउने सोचका साथ डिजाइन र निर्माण गरें',
            'साइटको सामग्री, ग्यालरी र इभेन्ट पेजहरूलाई नियमित क्लब गतिविधिसँगै ताजा र सजिलै हेर्न मिल्ने बनाइराख्छु',
            'सामुदायिक सेवा कार्यक्रम र युवा नेतृत्व पहलहरूको डिजिटल संयोजनमा सहयोग गर्छु',
          ],
        },
        {
          role: 'ब्याकेन्ड डेभलपर',
          bullets: [
            'AI एकीकरणसहित माइक्रोसर्भिसेसमा आधारित मल्टि-मोड्युल SaaS प्लेटफर्म निर्माण',
            'KMS, BMS, Orchestration, CMS, Assessments र System Intelligence मोड्युलहरू विकास',
            'RBAC, JWT प्रमाणीकरण र inter-service gRPC सञ्चार कार्यान्वयन',
            'RabbitMQ प्रयोग गरेर इभेन्ट-ड्रिभन वर्कफ्लो डिजाइन',
          ],
        },
        {
          role: 'जुनियर ब्याकेन्ड डेभलपर',
          bullets: [
            'iHRTrack, एक Attendance Management System (AMS) को मुख्य ब्याकेन्ड निर्माण',
            'रियल-टाइम RFID र बायोमेट्रिक हार्डवेयर एकीकरण',
            'पेरोल प्रोसेसिङ, शिफ्ट शेड्युलिङ र कर्मचारी सञ्चार सुविधा विकास',
            'RabbitMQ async इभेन्ट र gRPC + Django Channels प्रयोग',
          ],
        },
        {
          role: 'ब्याकेन्ड डेभलपर इन्टर्न',
          bullets: [
            'प्रोडक्सन वातावरणमा Django र ब्याकेन्ड आधारभूत कुराहरू सिके',
            'REST API विकास, डिबगिङ र end-to-end testing मा सहयोग',
            'ClickUp प्रयोग गरी Agile workflow मा काम',
          ],
        },
      ],
    },
    projects: {
      tag:   'प्रोजेक्टहरू',
      title: 'मैले बनाएका',
      items: [
        {
          title:       'iHRTrack',
          description: 'बायोमेट्रिक लगइन, AI फेस रिकग्निसन, RFID एक्सेस र जियोलोकेसनमा आधारित मोबाइल चेकइनसहितको HR व्यवस्थापन प्लेटफर्म, Ayata Incorporation मा SME र ठूला उद्यमका लागि web, iOS र Android मा उपलब्ध।',
          tag:         'प्रोडक्सन · Ayata',
        },
        {
          title:       'Process Orchestration',
          description: 'Zeta Labs मा माइक्रोसर्भिसेस आधारित SaaS प्लेटफर्म, KMS, BMS, Orchestration, CMS, Assessments र System Intelligence सहित AI एकीकरण र cross module gRPC सञ्चार।',
          tag:         'प्रोडक्सन · Zeta Labs',
        },
        {
          title:       'System Intelligence Service',
          description: 'Zeta Labs SaaS भित्रको स्वचालित निर्णय इन्जिन जसले सबै मोड्युलबाट रियल-टाइम सिग्नल प्रोसेस गरी बुद्धिमान वर्कफ्लो ट्रिगर गर्छ।',
          tag:         'प्रोडक्सन · Zeta Labs',
        },
        {
          title:       'Zeta Health',
          description: 'Zeta Labs को लागि मल्टिटेनेन्ट क्लिनिक तथा अस्पताल व्यवस्थापन प्लेटफर्म, जसमा बिरामी बुकिङ, डाक्टर परामर्श, फार्मेसी सञ्चालन र बिलिङ समावेश छ, साथै AI सहयोगी भिजिट सारांश र स्वचालित इनएप, इमेल र SMS सूचनाहरू।',
          tag:         'प्रोडक्सन · Zeta Labs',
        },
        {
          title:       'Leo Club of Kathmandu Budigandaki',
          description: 'Leo Club of Kathmandu Budigandaki, Lions Clubs International अन्तर्गतको युवा नेतृत्वको सेवा संस्थाको आधिकारिक वेबसाइट। क्लबको कथा, नेतृत्व समयरेखा, कार्यक्रम, ग्यालरी र अनलाइन सदस्यता फारमसहित सुरुदेखि अन्त्यसम्म डिजाइन र निर्माण गरें।',
          tag:         'स्वयंसेवी · IT लिड',
        },
      ],
    },
    contact: {
      tag:      'सम्पर्क',
      title:    'सम्पर्क गर्नुहोस्',
      desc:     'प्रोजेक्ट छ वा सहकार्य गर्न चाहनुहुन्छ? सन्देश पठाउनुहोस्, चाँडै जवाफ दिन्छु।',
      form: {
        title:   'सन्देश पठाउनुहोस्',
        name:    'तपाईंको नाम',
        email:   'तपाईंको इमेल',
        message: 'तपाईंको सन्देश',
        ph: {
          name:    'पवन पाण्डे',
          email:   'hello@example.com',
          message: 'तपाईंको प्रोजेक्टको बारेमा बताउनुहोस्...',
        },
        send:       'सन्देश पठाउनुहोस्',
        sending:    'पठाउँदै…',
        sent:       'सन्देश पठाइयो!',
        sentDesc:   'धन्यवाद! चाँडै सम्पर्क गर्नेछु।',
        sentAnother: 'अर्को पठाउनुहोस्',
        error:      'पठाउन समस्या भयो। सिधै इमेल गर्नुहोस्।',
      },
      connect: 'मसँग जोडिनुहोस्',
      socials: [
        { key: 'gmail',    label: 'ईमेल',     sub: 'pawanpandey1251@gmail.com' },
        { key: 'linkedin', label: 'LinkedIn', sub: 'linkedin.com/in/pawanrajpandey' },
        { key: 'github',   label: 'GitHub',   sub: 'github.com/ozzypawan' },
        { key: 'phone',    label: 'फोन',      sub: '+977 9767279454' },
      ],
    },
    footer: '© २०२६ पवन राज पाण्डे · काठमाडौं, नेपाल',
    controls: { lang: 'भाषा', theme: 'थिम' },
  },
}
