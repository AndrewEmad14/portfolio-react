const experiences = [
  {
    id: 1,
    title: "ITI 9-Month Program",
    role: "Open Source Track",
    type: "internship",
    period: "Oct 2025 – Present",
    current: true,
    description:
      "Hands-on training in Linux system administration (Red Hat, Bash), containerization with Docker, web server config with Nginx, full-stack development with Angular, Node.js, and Django, and database management with MySQL and MongoDB.",
    bullets: [],
    tags: ["Linux / Red Hat", "Docker", "Nginx", "Angular", "Node.js", "Django", "MySQL / MongoDB"],
  },

  {
    id: 2,
    title: "iOS Developer Intern",
    role: "ITI Intensive Program",
    type: "internship",
    period: "Nov 2024 – Mar 2025",
    current: false,
    description:
      "Built and shipped multiple iOS apps including a task manager, sports tracker, weather app, and M-commerce platform. Applied SOLID principles and architectural patterns throughout.",
    bullets: [],
    tags: ["Swift", "Objective-C", "UIKit", "SwiftUI", "REST / GraphQL", "CoreData", "MVVM / MVP"],
  },
  {
    id: 3,
    title: "Kamelna — Multiplayer Card Game",
    role: "iOS App · Personal Project",
    type: "project",
    period: "Apr 2025 – Jul 2025",
    current: false,
    description: null,
    bullets: [
      "Real-time multiplayer via Firebase Firestore for game state sync and Firebase Realtime Database for live chat",
      "Authentication with email, Google, and Facebook using Firebase Auth",
      "Built with SwiftUI and MVVM architecture, enhanced with Lottie animations",
    ],
    tags: ["SwiftUI", "Firebase", "MVVM", "Lottie"],
  }
];
 
export default experiences;