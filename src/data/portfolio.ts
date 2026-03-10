export const DATA = {
  name: "FANIRY NOMENA ROMEO RAKOTONDRAZAFY",
  role: "Développeur Python & Intelligence Artificielle",
  bio: "Développeur Python & Intelligence Artificielle, spécialisé dans la conception de systèmes intelligents, vision par ordinateur et automatisation. Je conçois des solutions robustes, scalables et adaptées aux besoins réels des entreprises.",
  email: "fanirinomenaromeo@gmail.com",
  phone: "+261 38 34 093 55",
  address: "Ivm 142 C 67ha sud",
  linkedin: "https://www.linkedin.com/in/rakotondrazafy-faniry-nomena-roméo",

  skills: {
    languages: ["Python", "JavaScript", "SQL", "HTML/CSS"],
    backend: ["Flask", "Django", "FastAPI", "REST API"],
    frontend: ["React", "PyQt5", "Bootstrap", "Tailwind CSS"],
    db: ["MongoDB", "MySQL", "SQLite", "Redis"],
    tools: ["Docker", "Git", "Jupyter", "Linux", "Postman"],
    ia_advanced: ["TensorFlow", "OpenCV", "Scikit-learn", "Pandas", "NumPy"],
    ia_concepts: ["RAG", "LLM", "CrewAI", "LangChain"],
  },

  experience: [
    {
      year: "2025",
      title: "DÉVELOPPEUR PYTHON & IA ",
      company: "Rescue",
      subtitle: "Système de triage médical intelligent basé sur l'analyse visuelle en contexte d'urgence",
      details: [
        "Entraînement de modèles multi-head et finetuning avec Yolov8 pour la détection de blessures et posture.",
        "Mise en place d'un Système Multi-Agents (SMA) pour la priorisation automatique.",
        "Architecture multi-tier (Présentation, Logique métier, Données).",
        "Vision par ordinateur intégrée pour l'analyse d'état de conscience."
      ],
      tech: ["Deep Learning", "SMA", "Computer Vision", "Python"]
    },
    {
      year: "2025",
      title: "TECHNICIEN AUDIOVISUEL",
      company: "Reference.mg",
      subtitle: "Événements et visioconférences",
      details: [
        "Installation et configuration d'équipements audio/vidéo pro.",
        "Supervision temps réel et assistance technique lors d'événements.",
        "Résolution rapide de problèmes systèmes en direct."
      ],
      tech: ["Hardware", "Live Streaming", "Technical Support"]
    },
    {
      year: "2023 – 2024",
      title: "DÉVELOPPEUR PYTHON & IA ",
      company: "Auxiliaire Maritime de Madagascar (AUXIMAD)",
      subtitle: "Optimisation logistique",
      details: [
        "Application web Full-Stack Django pour l'optimisation des livraisons.",
        "Machine Learning (Random Forest) pour prédire consommation et trajets.",
        "NLP (TF-IDF) pour l'analyse des retours commentaires clients.",
        "Dashboards dynamiques de suivi de flotte en temps réel."
      ],
      tech: ["Django", "Machine Learning", "TF-IDF", "Random Forest"]
    },
    {
      year: "2022 – 2023",
      title: "DÉVELOPPEUR PYTHON ",
      company: "AUXIMAD",
      subtitle: "Gestion de flotte",
      details: [
        "Conception d'une application de gestion des réservations de véhicules.",
        "Architecture web orientée utilisateur pour la logistique interne."
      ],
      tech: ["Python", "Web Dev", "SQL"]
    },
    {
      year: "2022 – 2023",
      title: "DÉVELOPPEUR PYTHON TKINTER ",
      company: "MESUPRES",
      subtitle: "Gestion ministérielle",
      details: [
        "Création d'un système desktop de gestion de billetterie.",
        "Gestion automatisée des flux de ventes et suivi des entrées."
      ],
      tech: ["Tkinter", "Python Desktop", "SQLite"]
    }
  ]
};

export const PROJECTS = [
  {
    id: "01",
    title: "RESCUE",
    subtitle: "Système de triage médical intelligent basé sur l'analyse visuelle en contexte d'urgence",
    description: "Plateforme d'urgence exploitant le Deep Learning pour analyser l'état des patients (postures, blessures, conscience) et un Système Multi-Agents (SMA) pour automatiser la priorisation des soins en contexte critique.",
    features: ["Détection de posture & conscience", "Priorisation SMA", "Fine-tuning modèles DL", "Architecture Multi-tier"],
    tech: ["Python", "TensorFlow", "OpenCV", "Flask", "MongoDB"],
    video: "https://res.cloudinary.com/dwlrfcu3x/video/upload/v1773129020/rescue_hun62m.mp4", 
    github: "https://github.com/Maestro21Chigiryh/RESCUE",
    status: "MISSION_COMPLETED"
  },
  {
    id: "02",
    title: "Learn Maths With AI",
    subtitle: "Apprentissage ludique des mathématiques par l'IA",
    description: "Application éducative interactive utilisant l'Intelligence Artificielle pour adapter les défis mathématiques au niveau de l'enfant, rendant l'apprentissage intuitif et personnalisé via le jeu.",
    features: ["Adaptation de difficulté IA", "Interface interactive", "Suivi de progression", "Gamification"],
    tech: ["Python", "Flask", "OpenCV"],
    video: "https://res.cloudinary.com/dwlrfcu3x/video/upload/v1773128337/Learn_m1afix.mp4",
    github: "https://github.com/Maestro21Chigiryh/malagasy-face-classifier",
    status: "MISSION_COMPLETED"
  },
  {
    id: "03",
    title: "Qui est Malagasy ?",
    subtitle: "Classification faciale par Deep Learning",
    description: "Système de reconnaissance et de classification basé sur l'analyse de traits faciaux, conçu pour identifier et catégoriser les caractéristiques morphologiques dans un contexte de diversité phénotypique.",
    features: ["Reconnaissance faciale", "Classification d'images", "Dataset personnalisé", "Optimisation modèles"],
    tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
    video: "https://res.cloudinary.com/dwlrfcu3x/video/upload/v1773128062/gasy_fnforb.mp4",
    github: "https://github.com/Maestro21Chigiryh/malagasy-id",
    status: "MISSION_COMPLETED"
  }
];