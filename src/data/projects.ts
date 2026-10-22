// Typed project portfolio content and repository URLs.
import type { Project, SideQuest } from '../types/content';

export type { Project, ProjectContext, ProjectIconName, ProjectType, SideQuest } from '../types/content';

export const repoUrls = {
  backupsys: 'https://github.com/cunhanina/backupsys',
  factoryIntegrator: 'https://github.com/cunhanina/Projeto-Integrador-IV',
  visualInspector: 'https://github.com/cunhanina/visual-inspector',
  predictiveMaintenance: 'https://github.com/cunhanina/predictive-maintenance',
  colorSorter: 'https://github.com/cunhanina/Projeto-Integrador-II',
  pokeroast: 'https://github.com/cunhanina/pokeroast',
  pathfindingVisualizer: 'https://github.com/cunhanina/pathfinding-visualizer',
  meetingScribe: 'https://github.com/cunhanina/meeting_scribe'
} as const;

export const projects: Project[] = [
  {
    order: 1,
    title: 'Backup System',
    type: 'DEVOPS',
    context: 'WORK',
    repo: repoUrls.backupsys,
    outcome: 'Separates CNC/PLC backup workflows by role, with validation and audit logging.',
    description:
      'A Python desktop application with separate operator and engineering interfaces for CNC/PLC backup tasks. It validates data and records actions in an audit trail.',
    icon: 'backupsys',
    tech: ['Python', 'CustomTkinter', 'JSON', 'PyInstaller']
  },
  {
    order: 2,
    title: 'Factory Integrator',
    type: 'INTEGRATION',
    context: 'ACADEMIC',
    repo: repoUrls.factoryIntegrator,
    outcome: 'Manages assembly orders and connects MongoDB with Node-RED, PLCs, and a collaborative robot.',
    description:
      'A Django web system for assembly-order management and visualization, with MongoDB and Node-RED integration to PLCs and collaborative assembly robots.',
    icon: 'factory-integrator',
    tech: ['Django', 'MongoDB', 'Channels', 'JavaScript', 'Tailwind', 'Node-RED', 'PLC']
  },
  {
    order: 3,
    title: 'Visual Inspector',
    type: 'VISION',
    context: 'PERSONAL',
    repo: repoUrls.visualInspector,
    outcome: 'Classifies six steel-surface defects from files or webcam, with Grad-CAM explanations.',
    description:
      'A computer-vision quality-control station for six steel surface defect classes, with file and live-webcam input and Grad-CAM heatmaps.',
    icon: 'visual-inspector',
    tech: ['Python', 'PyTorch', 'ResNet-18', 'Streamlit', 'OpenCV', 'Grad-CAM']
  },
  {
    order: 4,
    title: 'Predictive Maintenance',
    type: 'PREDICTIVE',
    context: 'PERSONAL',
    repo: repoUrls.predictiveMaintenance,
    outcome: 'Estimates turbofan remaining useful life from sensor telemetry in an operator dashboard.',
    description:
      'A Streamlit dashboard that uses turbofan sensor data to estimate cycles remaining and provides SHAP-based explanations.',
    icon: 'predictive-maintenance',
    tech: ['Python', 'scikit-learn', 'Streamlit', 'SHAP', 'Docker', 'pytest']
  },
  {
    order: 5,
    title: 'Color-Sorting Conveyor',
    type: 'AUTOMATION',
    context: 'ACADEMIC',
    repo: repoUrls.colorSorter,
    outcome: 'Sorts colored pieces on a conveyor using sensors and pneumatic ejection.',
    description:
      'An Arduino-based color-sorting conveyor that detects part presence and color, then uses electro-pneumatic actuation to sort pieces.',
    icon: 'color-sorting-conveyor',
    tech: ['Arduino C++', 'TCS230', 'IR sensor', 'LCD I2C', 'Pneumatics']
  },
  {
    order: 6,
    title: 'pokeroast',
    type: 'AI',
    context: 'PERSONAL',
    repo: repoUrls.pokeroast,
    outcome: 'Analyzes team weaknesses and suggests counter-picks with AI-generated roasts.',
    description: 'Analyzes team weaknesses and suggests counter-picks with AI-generated roasts.',
    icon: 'fire',
    tech: ['Python', 'Groq (Llama 3.3)', 'Streamlit', 'PokeAPI', 'Plotly', 'pyttsx3']
  }
];

export const sideQuests: SideQuest[] = [
  {
    name: 'pathfinding-visualizer',
    summary: 'Compares A* and Dijkstra across weighted terrain, generated mazes, and smoothed paths.',
    repo: repoUrls.pathfindingVisualizer
  },
  {
    name: 'meeting_scribe',
    summary: 'Captures mic and system audio, transcribes locally, and summarizes with Ollama.',
    repo: repoUrls.meetingScribe
  }
];
