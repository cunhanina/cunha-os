// Typed skill groups. Each skill may link to evidence (a section or a repo).
// To add a skill: copy a line. To remove one: delete its line.
// To show evidence: add one or more entries from `proof` to its `evidence` array.
import { repoUrls } from './projects';
import type { SkillEvidence, SkillGroup } from '../types/content';

// Evidence links, defined once and reused below.
const proof = {
  cncRole: { label: 'CNC programming role', translationKey: 'skills.evidence.cncRole', href: '#experience-entry-1' },
  boschInternship: {
    label: 'Bosch internship responsibilities',
    translationKey: 'skills.evidence.boschInternship',
    href: '#experience-entry-0'
  },
  apprenticeship: {
    label: 'Advanced Manufacturing apprenticeship',
    translationKey: 'skills.evidence.advancedManufacturing',
    href: '#experience-entry-2'
  },
  classLeader: {
    label: 'Class Leader experience',
    translationKey: 'skills.evidence.classLeader',
    href: '#leadership-title'
  },
  mechatronics: {
    label: 'Mechatronics education',
    translationKey: 'skills.evidence.mechatronics',
    href: '#education-0'
  },
  projectManagement: {
    label: 'Project Management postgraduate program',
    translationKey: 'skills.evidence.projectManagement',
    href: '#education-1'
  },
  dataScience: {
    label: 'Data Science education',
    translationKey: 'skills.evidence.computerScience',
    href: '#education-2'
  },
  backupSystem: {
    label: 'Backup System project card',
    translationKey: 'skills.evidence.backupCard',
    href: '#project-card-1'
  },
  colorSorter: {
    label: 'Color-Sorting Conveyor',
    translationKey: 'skills.evidence.colorSorter',
    href: repoUrls.colorSorter,
    external: true
  },
  visualInspector: {
    label: 'visual-inspector',
    translationKey: 'skills.evidence.visualInspector',
    href: repoUrls.visualInspector,
    external: true
  },
  predictiveMaintenance: {
    label: 'predictive-maintenance',
    translationKey: 'skills.evidence.predictiveMaintenance',
    href: repoUrls.predictiveMaintenance,
    external: true
  },
  factoryIntegrator: {
    label: 'Factory Integrator',
    translationKey: 'skills.evidence.factoryIntegrator',
    href: repoUrls.factoryIntegrator,
    external: true
  }
} satisfies Record<string, SkillEvidence>;

export const skillGroups: SkillGroup[] = [
  {
    category: 'MANUFACTURING',
    skills: [
      { label: 'CNC Programming', evidence: [proof.cncRole] },
      { label: 'CNC Simulation', evidence: [proof.cncRole] },
      { label: 'SolidWorks', evidence: [proof.mechatronics] },
      { label: '3D Modeling', evidence: [proof.mechatronics] },
      { label: 'Metrology' },
      { label: 'Pneumatics', evidence: [proof.colorSorter] },
      { label: 'Industrial Robotics', evidence: [proof.factoryIntegrator] }
    ]
  },
  {
    category: 'SOFTWARE & DATA',
    skills: [
      { label: 'Python', evidence: [proof.backupSystem, proof.visualInspector, proof.predictiveMaintenance] },
      { label: 'C / C++', evidence: [proof.colorSorter] },
      { label: 'JavaScript', evidence: [proof.factoryIntegrator] },
      { label: 'Django', evidence: [proof.factoryIntegrator] },
      { label: 'SQL', evidence: [proof.dataScience] },
      { label: 'MongoDB', evidence: [proof.factoryIntegrator] },
      { label: 'Data Science', evidence: [proof.dataScience] },
      { label: 'Machine Learning', evidence: [proof.visualInspector, proof.predictiveMaintenance] },
      { label: 'PyTorch', evidence: [proof.visualInspector] },
      { label: 'Git' }
    ]
  },
  {
    category: 'SYSTEMS & AUTOMATION',
    skills: [
      { label: 'Node-RED', evidence: [proof.boschInternship, proof.factoryIntegrator] },
      { label: 'PLC', evidence: [proof.factoryIntegrator] },
      { label: 'Shopfloor Integration', evidence: [proof.boschInternship] },
      { label: 'SAP ERP', evidence: [proof.apprenticeship] },
      { label: 'Arduino', evidence: [proof.colorSorter] },
      { label: 'Microcontrollers', evidence: [proof.colorSorter] },
      { label: 'Electronics' },
      { label: 'Hardware Troubleshooting' }
    ]
  },
  {
    category: 'PROJECT DELIVERY',
    skills: [
      { label: 'Project Management', evidence: [proof.projectManagement] },
      { label: 'Technical Documentation', evidence: [proof.boschInternship] },
      { label: 'Proof-of-Concept Development', evidence: [proof.boschInternship] },
      { label: 'Testing & Validation', evidence: [proof.boschInternship] },
      { label: 'Leadership', evidence: [proof.classLeader] }
    ]
  }
];

export const skillsPitch = 'Where the shop floor meets the codebase.';
