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
      roleWords:   ['Backend', 'Engineer'],
      description: 'Building scalable monolithic and microservice based applications with Python, Django, and FastAPI powering distributed architectures and production ready SaaS platforms.',
      viewProjects: 'View Projects',
      myExperience: 'My Experience',
      openTo:       'Open to opportunities',
    },
    about: {
      tag:   'About',
      title: 'Who I Am',
      bio: [
        'Backend engineer with 2+ years building distributed systems at scale. Currently at <strong>Zeta Labs</strong>, developing a multi-module SaaS platform with AI integration, microservices architecture, and cross-service gRPC communication.',
        'Previously at <strong>Ayata Incorporation</strong>, I built the core backend for an Attendance Management System with real-time RFID and biometric hardware integrations, payroll processing, and shift scheduling.',
        'I specialise in <strong>Python / Django / FastAPI</strong>, event-driven architectures with RabbitMQ, and service-to-service communication via gRPC, always focused on reliability, clean API design, and developer experience.',
      ],
      stats: [
        { value: '2+',  label: 'Years Exp.' },
        { value: '2',   label: 'Companies' },
        { value: '15+', label: 'Technologies' },
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
            'Built the core backend for an Attendance Management System (AMS)',
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
          title:       'Attendance Management System',
          description: 'Full-featured backend for tracking attendance, payroll, and shift scheduling with real-time RFID and biometric hardware integration, built at Ayata Incorporation.',
          tag:         'Production · Ayata',
        },
        {
          title:       'Multi-Module SaaS Platform',
          description: 'Built microservices based SaaS solutions at Zeta Labs including KMS, BMS, Orchestration, CMS, Assessments, and a System Intelligence service with AI integration and cross module gRPC communication.',
          tag:         'Production · Zeta Labs',
        },
        {
          title:       'System Intelligence Service',
          description: 'Automated decision-making engine within the Zeta Labs SaaS platform, processing real-time signals across all modules and triggering intelligent workflow orchestration.',
          tag:         'Production · Zeta Labs',
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

  /* ---------------------------------------------------------------- */
  /* Nepali (ne)                                                        */
  /* ---------------------------------------------------------------- */
  np: {
    nav: {
      about:      'परिचय',
      experience: 'अनुभव',
      projects:   'प्रोजेक्टहरू',
      contact:    'सम्पर्क',
      resume:     'रेज्युमे',
    },
    hero: {
      greeting:    'नमस्ते, म हुँ',
      roleWords:   ['ब्याकेन्ड', 'इन्जिनियर'],
      description: 'Python र Django सँग स्केलेबल, वितरित प्रणालीहरू निर्माण गर्दैछु — माइक्रोसर्भिसेस र इभेन्ट-ड्रिभन आर्किटेक्चरदेखि उत्पादन-स्तरीय SaaS प्लेटफर्महरूसम्म।',
      viewProjects: 'प्रोजेक्टहरू हेर्नुहोस्',
      myExperience: 'मेरो अनुभव',
      openTo:       'अवसरहरूको लागि खुला',
    },
    about: {
      tag:   'परिचय',
      title: 'म को हुँ',
      bio: [
        '२+ वर्षदेखि ठूलो स्तरमा वितरित प्रणालीहरू निर्माण गर्ने ब्याकेन्ड इन्जिनियर। हाल <strong>Zeta Labs</strong> मा AI एकीकरण, माइक्रोसर्भिसेस आर्किटेक्चर, र cross-service gRPC संचारसहित मल्टि-मोड्युल SaaS प्लेटफर्म विकास गर्दैछु।',
        'अघि <strong>Ayata Incorporation</strong> मा, मैले रियल-टाइम RFID र बायोमेट्रिक हार्डवेयर एकीकरण, पे-रोल प्रोसेसिङ, र शिफ्ट शेड्युलिङसहित उपस्थिति व्यवस्थापन प्रणाली (AMS) को मुख्य ब्याकेन्ड निर्माण गरेँ।',
        'म <strong>Python/Django</strong>, RabbitMQ सँग इभेन्ट-ड्रिभन आर्किटेक्चर, र gRPC मार्फत service-to-service संचारमा विशेषज्ञ छु — सधैं विश्वसनीयता, स्वच्छ API डिजाइन, र developer अनुभवमा केन्द्रित।',
      ],
      stats: [
        { value: '२+',  label: 'वर्षको अनुभव' },
        { value: '२',   label: 'कम्पनीहरू' },
        { value: '१५+', label: 'प्रविधिहरू' },
      ],
    },
    skills: {
      tag:   'सीपहरू',
      title: 'प्राविधिक स्ट्याक',
      categories: {
        Language:     'भाषा',
        Framework:    'फ्रेमवर्कहरू',
        Database:     'डेटाबेसहरू',
        Protocol:     'प्रोटोकल र मेसेजिङ',
        DevOps:       'DevOps',
        Architecture: 'आर्किटेक्चर',
      },
    },
    experience: {
      tag:   'अनुभव',
      title: 'मैले काम गरेका ठाउँहरू',
      items: [
        {
          role: 'ब्याकेन्ड डेभलपर',
          bullets: [
            'माइक्रोसर्भिसेसमा AI एकीकरणसहित मल्टि-मोड्युल SaaS प्लेटफर्म निर्माण गर्दैछु',
            'KMS, BMS, Orchestration, CMS, Assessments, र System Intelligence मोड्युलहरू आर्किटेक्ट र विकास गर्दैछु',
            'RBAC, JWT प्रमाणीकरण, र inter-service gRPC संचार कार्यान्वयन गर्दैछु',
            'वितरित सेवाहरूमा RabbitMQ सँग इभेन्ट-ड्रिभन वर्कफ्लो डिजाइन गर्दैछु',
          ],
        },
        {
          role: 'जुनियर ब्याकेन्ड डेभलपर',
          bullets: [
            'उपस्थिति व्यवस्थापन प्रणाली (AMS) को मुख्य ब्याकेन्ड निर्माण गरेँ',
            'रियल-टाइम उपस्थिति ट्र्याकिङका लागि RFID र बायोमेट्रिक हार्डवेयर एकीकृत गरेँ',
            'पे-रोल प्रोसेसिङ, शिफ्ट शेड्युलिङ, र कर्मचारी संचार सुविधाहरू विकास गरेँ',
            'async इभेन्टका लागि RabbitMQ र रियल-टाइम संचारका लागि gRPC + Django Channels प्रयोग गरेँ',
          ],
        },
        {
          role: 'ब्याकेन्ड डेभलपर इन्टर्न',
          bullets: [
            'प्रोडक्शन वातावरणमा Django र ब्याकेन्ड मूल अवधारणाहरू सिकेँ',
            'REST API विकास, डिबगिङ, र end-to-end परीक्षणमा सहयोग गरेँ',
            'ClickUp प्रयोग गरी Agile वर्कफ्लोमा काम गरेँ',
          ],
        },
      ],
    },
    projects: {
      tag:   'प्रोजेक्टहरू',
      title: 'मैले बनाएका कुराहरू',
      items: [
        {
          title:       'उपस्थिति व्यवस्थापन प्रणाली',
          description: 'रियल-टाइम RFID र बायोमेट्रिक हार्डवेयर एकीकरणसहित उपस्थिति, पे-रोल, र शिफ्ट शेड्युलिङ ट्र्याक गर्ने पूर्ण-सुविधा ब्याकेन्ड, Ayata Incorporation मा निर्माण।',
          tag:         'प्रोडक्शन · Ayata',
        },
        {
          title:       'मल्टि-मोड्युल SaaS प्लेटफर्म',
          description: 'Zeta Labs मा माइक्रोसर्भिसेस SaaS — KMS, BMS, Orchestration, CMS, Assessments, र System Intelligence सेवासहित, सबैमा AI एकीकरण र cross-module gRPC संचार।',
          tag:         'प्रोडक्शन · Zeta Labs',
        },
        {
          title:       'सिस्टम इन्टेलिजेन्स सेवा',
          description: 'Zeta Labs SaaS प्लेटफर्म भित्र स्वचालित निर्णय-निर्माण इन्जिन, सबै मोड्युलहरूमा रियल-टाइम संकेतहरू प्रोसेस गरी बुद्धिमान वर्कफ्लो orchestration ट्रिगर गर्ने।',
          tag:         'प्रोडक्शन · Zeta Labs',
        },
      ],
    },
    contact: {
      tag:      'सम्पर्क',
      title:    'सम्पर्क गर्नुहोस्',
      desc:     'कुनै प्रोजेक्ट मनमा छ वा सहकार्य गर्न चाहनुहुन्छ? सन्देश पठाउनुहोस् र म चाँडै जवाफ दिनेछु।',
      form: {
        title:   'सन्देश पठाउनुहोस्',
        name:    'तपाईंको नाम',
        email:   'तपाईंको इमेल',
        message: 'तपाईंको सन्देश',
        ph: {
          name:    'पवन पाण्डे',
          email:   'hello@example.com',
          message: 'आफ्नो प्रोजेक्टको बारेमा बताउनुहोस्...',
        },
        send:       'सन्देश पठाउनुहोस्',
        sending:    'पठाउँदै…',
        sent:       'सन्देश पठाइयो!',
        sentDesc:   'धन्यवाद! म चाँडै तपाईंसँग सम्पर्क गर्नेछु।',
        sentAnother: 'अर्को पठाउनुहोस्',
        error:      'पठाउन असफल। सिधै इमेल गर्नुहोस्।',
      },
      connect: 'सम्पर्क गर्नुहोस्',
      socials: [
        { key: 'gmail',    label: 'ईमेल',     sub: 'pawanpandey1251@gmail.com' },
        { key: 'linkedin', label: 'LinkedIn', sub: 'linkedin.com/in/pawanrajpandey' },
        { key: 'github',   label: 'GitHub',   sub: 'github.com/ozzypawan' },
        { key: 'phone',    label: 'फोन',      sub: '+977 9767279454' },
      ],
    },
    footer: '© २०२६ पवन राज पाण्डे — React र Three.js सँग बनाइएको · काठमाडौं, नेपाल',
    controls: { lang: 'भाषा', theme: 'थिम' },
  },
}
