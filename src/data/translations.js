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
      roleWords:   ['Senior', 'Backend', 'Developer'],
      description: 'Designing, building, and scaling production systems in Python/Django, FastAPI, and .NET — owning API design, database architecture, microservices, and deployment pipelines for SaaS platforms.',
      viewProjects: 'View Projects',
      myExperience: 'My Experience',
      openTo:       'Open to opportunities',
    },
    about: {
      tag:   'About',
      title: 'Who I Am',
      bio: [
        'Senior backend developer with <strong>4.5+ years</strong> designing, building, and scaling production systems in Python/Django, FastAPI, and .NET. Progressed from intern to senior-level engineer, owning API design, database architecture, microservices, and deployment pipelines for SaaS platforms.',
        'Currently at <strong>I.D.E.N.T.V. Nepal — A.I Solution Pvt. Ltd.</strong>, I own backend architecture and technical decisions across APIs, microservices, data layers (PostgreSQL, MySQL, MongoDB, Redis, Qdrant), and CI/CD — collaborating fully remotely across teams.',
        'Previously at <strong>Ayata Incorporation Pvt. Ltd.</strong>, I spent over three years shipping Django backends and REST APIs used in production, including the core backend for iHRTrack, with a focus on schema design, query performance, and secure data handling.',
        'Alongside my professional work, I volunteer as <strong>IT Lead</strong> for <strong>Leo Club of Kathmandu Budigandaki</strong>, where I designed and built the club\'s official website and keep its content, gallery, and event pages running smoothly.',
      ],
      stats: [
        { value: '4.5+',  label: 'Years Exp.' },
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
          role: 'Senior Backend Developer',
          bullets: [
            'Progressed from core development to senior-level backend ownership within months, taking on system architecture and technical decision-making.',
            'Design, develop, and deploy scalable backend applications, APIs, and microservices using Python, Django, Django REST Framework, FastAPI, and .NET.',
            'Build and maintain data layers across PostgreSQL, MySQL, MongoDB, Redis, and Qdrant, with real-time and async communication via WebSockets, RabbitMQ, REST, and gRPC.',
            'Own CI/CD pipelines (Jenkins, Docker, Git) and implement RBAC; collaborate fully remotely across teams on architecture reviews and production debugging.',
          ],
        },
        {
          role: 'Backend Developer',
          bullets: [
            'Developed and maintained backend systems in Python (Django), building and shipping REST APIs used across production applications.',
            'Designed and optimized database schemas and queries, and strengthened security practices for performance, stability, and safe data handling.',
            'Recognized by leadership for consistent technical delivery, problem-solving, and strong cross-functional collaboration.',
          ],
        },
        {
          role: 'Backend Developer Intern',
          bullets: [
            'Gained hands-on production experience building backend features and API integrations with Python and Django.',
            'The internship led to a full-time offer as Backend Developer.',
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
          description: 'Microservices-based SaaS platform spanning KMS, BMS, Orchestration, CMS, Assessments, and a System Intelligence service, with AI integration and cross-module gRPC communication.',
          tag:         'Production · IDENTV',
        },
        {
          title:       'System Intelligence Service',
          description: 'Automated decision-making engine within the SaaS platform, processing real-time signals across modules and triggering intelligent workflow orchestration.',
          tag:         'Production · IDENTV',
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
      roleWords:   ['वरिष्ठ', 'ब्याकेन्ड', 'डेभलपर'],
      description: 'Python/Django, FastAPI र .NET मा प्रोडक्सन प्रणाली डिजाइन, निर्माण र स्केल गर्दछु — SaaS प्लेटफर्मका लागि API डिजाइन, डाटाबेस आर्किटेक्चर, माइक्रोसर्भिसेस र डिप्लोयमेन्ट पाइपलाइनको स्वामित्व लिँदै।',
      viewProjects: 'प्रोजेक्टहरू हेर्नुहोस्',
      myExperience: 'मेरो अनुभव',
      openTo:       'अवसरहरूका लागि खुला',
    },
    about: {
      tag:   'परिचय',
      title: 'म को हुँ',
      bio: [
        '<strong>४.५+</strong> वर्षदेखि Python/Django, FastAPI र .NET मा प्रोडक्सन प्रणाली डिजाइन, निर्माण र स्केल गर्ने वरिष्ठ ब्याकेन्ड डेभलपर। इन्टर्नबाट सिनियर-लेभल इन्जिनियरसम्म पुगेर API डिजाइन, डाटाबेस आर्किटेक्चर, माइक्रोसर्भिसेस र डिप्लोयमेन्ट पाइपलाइनको स्वामित्व लिएको छु।',
        'हाल <strong>I.D.E.N.T.V. Nepal — A.I Solution Pvt. Ltd.</strong> मा ब्याकेन्ड आर्किटेक्चर र प्राविधिक निर्णयहरूको जिम्मेवारी छ — API, माइक्रोसर्भिसेस, डाटा लेयर (PostgreSQL, MySQL, MongoDB, Redis, Qdrant) र CI/CD सहित पूर्ण रिमोट टिमहरूसँग सहकार्य गर्दै।',
        'पहिले <strong>Ayata Incorporation Pvt. Ltd.</strong> मा तीन वर्षभन्दा बढी Django ब्याकेन्ड र REST API निर्माण गरें, जसमा iHRTrack को मुख्य ब्याकेन्ड पनि पर्छ, स्किमा डिजाइन, क्वेरी पर्फरमेन्स र सुरक्षित डाटा ह्यान्डलिङमा जोड दिँदै।',
        'व्यावसायिक कामसँगै, म <strong>Leo Club of Kathmandu Budigandaki</strong> को <strong>IT लिड</strong> को रूपमा स्वयंसेवा गर्छु, जहाँ मैले क्लबको आधिकारिक वेबसाइट डिजाइन र निर्माण गरें र यसको सामग्री, ग्यालरी र इभेन्ट पेजहरू सुचारु राख्छु।',
      ],
      stats: [
        { value: '४.५+',  label: 'वर्ष अनुभव' },
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
          role: 'वरिष्ठ ब्याकेन्ड डेभलपर',
          bullets: [
            'केही महिनामै कोर डेभलपमेन्टबाट सिनियर-लेभल ब्याकेन्ड स्वामित्वमा पुगेँ, सिस्टम आर्किटेक्चर र प्राविधिक निर्णयको जिम्मेवारी लिँदै।',
            'Python, Django, Django REST Framework, FastAPI र .NET प्रयोग गरेर स्केलेबल ब्याकेन्ड एप्लिकेसन, API र माइक्रोसर्भिसेस डिजाइन, विकास र डिप्लोय गर्छु।',
            'PostgreSQL, MySQL, MongoDB, Redis र Qdrant मा डाटा लेयर निर्माण गर्छु, र WebSockets, RabbitMQ, REST तथा gRPC मार्फत रियल-टाइम/असिंक सञ्चार लागू गर्छु।',
            'CI/CD पाइपलाइन (Jenkins, Docker, Git) र RBAC को स्वामित्व लिन्छु; पूर्ण रिमोट टिमहरूसँग आर्किटेक्चर रिभ्यू र प्रोडक्सन डिबगिङ गर्छु।',
          ],
        },
        {
          role: 'ब्याकेन्ड डेभलपर',
          bullets: [
            'Python (Django) मा ब्याकेन्ड सिस्टम विकास र मर्मत गर्दै प्रोडक्सन एप्लिकेसनहरूका लागि REST API डेलिभर गरें।',
            'डाटाबेस स्किमा र क्वेरी अनुकूलन गर्दै सुरक्षा अभ्यास बलियो बनाएँ, पर्फरमेन्स, स्थिरता र सुरक्षित डाटा ह्यान्डलिङ सुधार गर्दै।',
            'निरन्तर प्राविधिक डेलिभरी, समस्या समाधान र क्रस-फंक्शनल सहकार्यका लागि नेतृत्वबाट मान्यता प्राप्त।',
          ],
        },
        {
          role: 'ब्याकेन्ड डेभलपर इन्टर्न',
          bullets: [
            'Python र Django मा ब्याकेन्ड फिचर र API इन्टिग्रेसन बनाउँदै प्रोडक्सन अनुभव हासिल गरें।',
            'इन्टर्नसिपपछि पूर्णकालीन ब्याकेन्ड डेभलपरको प्रस्ताव पाएँ।',
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
          description: 'माइक्रोसर्भिसेस आधारित SaaS प्लेटफर्म, KMS, BMS, Orchestration, CMS, Assessments र System Intelligence सहित AI एकीकरण र cross module gRPC सञ्चार।',
          tag:         'प्रोडक्सन · IDENTV',
        },
        {
          title:       'System Intelligence Service',
          description: 'SaaS प्लेटफर्मभित्रको स्वचालित निर्णय इन्जिन जसले सबै मोड्युलबाट रियल-टाइम सिग्नल प्रोसेस गरी बुद्धिमान वर्कफ्लो ट्रिगर गर्छ।',
          tag:         'प्रोडक्सन · IDENTV',
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
