export type Language = 'es' | 'en';

export type LocalizedText = Record<Language, string>;

export interface ExperienceItem {
  id: string;
  title: LocalizedText;
  company: LocalizedText;
  period: LocalizedText;
  highlights: Record<Language, string[]>;
  technologies: string[];
  current?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'ntt-data-junior-engineer',
    title: { es: 'Junior Engineer', en: 'Junior Engineer' },
    company: { es: 'NTT DATA', en: 'NTT DATA' },
    period: { es: 'Septiembre 2026 - Actualidad', en: 'September 2026 - Present' },
    highlights: {
      es: [
        'Gestiono, analizo y resuelvo incidentes de aplicaciones y servicios bancarios mediante ServiceNow, garantizando la continuidad operativa.',
        'Analizo flujos transaccionales e integraciones entre sistemas bancarios, con enfoque en servicios de recaudación, pagos y transferencias.',
        'Ejecuto consultas SQL y valido la información en bases de datos para diagnosticar incidentes y analizar inconsistencias.',
        'Coordino con equipos técnicos y áreas especializadas el seguimiento, escalamiento y resolución de incidentes.',
      ],
      en: [
        'Manage, analyze, and resolve incidents involving banking applications and services through ServiceNow, ensuring operational continuity.',
        'Analyze transactional flows and integrations between banking systems, focusing on collection, payment, and transfer services.',
        'Execute SQL queries and validate database information to diagnose incidents and analyze inconsistencies.',
        'Coordinate with technical teams and specialized areas to track, escalate, and resolve incidents.',
      ],
    },
    technologies: ['ServiceNow', 'SQL', 'Banking Systems', 'Incident Management'],
    current: true,
  },
  {
    id: 'easysoft-full-stack',
    title: { es: 'Desarrollador Full Stack Jr', en: 'Full Stack Developer Jr' },
    company: { es: 'EASYSOFT', en: 'EASYSOFT' },
    period: { es: 'Junio 2026 - Septiembre 2026', en: 'June 2026 - September 2026' },
    highlights: {
      es: [
        'Desarrollé funcionalidades para plataformas de banca empresarial y participé en su migración y evolución hacia una plataforma renovada.',
        'Desarrollé la lógica de armado de tramas transaccionales e integré servicios .NET mediante el análisis de contratos de API y consultas en SQL Server para validar la trazabilidad de las operaciones.',
        'Implementé interfaces web con Angular 18 y aplicaciones móviles con Ionic a partir de especificaciones de diseño en Figma y tickets gestionados en Jira.',
        'Diagnostiqué y corregí defectos funcionales en entornos de desarrollo y producción, colaborando con QA para resolver incidencias en plataformas bancarias críticas.',
      ],
      en: [
        'Developed features for corporate banking platforms and participated in their migration and evolution toward a renewed platform.',
        'Developed transactional message-building logic and integrated .NET services by analyzing API contracts and SQL Server queries to validate operation traceability.',
        'Implemented web interfaces with Angular 18 and mobile applications with Ionic based on Figma design specifications and Jira-managed tickets.',
        'Diagnosed and corrected functional defects in development and production environments, collaborating with QA to resolve incidents on critical banking platforms.',
      ],
    },
    technologies: ['Angular 18', 'Ionic', '.NET', 'SQL Server', 'Figma', 'Jira'],
  },
  {
    id: 'construiblec-consultant',
    title: { es: 'Consultor Técnico - Medio tiempo', en: 'Technical Consultant - Part-time' },
    company: { es: 'CONSTRUIBLEC', en: 'CONSTRUIBLEC' },
    period: { es: 'Mayo 2026 - Agosto 2026', en: 'May 2026 - August 2026' },
    highlights: {
      es: [
        'Supervisé técnicamente a pasantes y tomé decisiones de arquitectura para nuevas soluciones, realizando revisiones presenciales y dando seguimiento a su implementación en las plataformas.',
        'Mantuve y evolucioné la plataforma previamente desarrollada, guiando al equipo en la implementación de nuevas funcionalidades sobre OpenMAINT/CMDBuild.',
      ],
      en: [
        'Provided technical supervision to interns and made architectural decisions for new solutions, conducting on-site reviews and following up on their implementation across the platforms.',
        'Maintained and evolved the previously developed platform, guiding the team in implementing new features on OpenMAINT/CMDBuild.',
      ],
    },
    technologies: ['OpenMAINT', 'CMDBuild', 'Architecture', 'Technical Mentoring'],
  },
  {
    id: 'construiblec-junior-developer',
    title: { es: 'Desarrollador de Software Junior', en: 'Junior Software Developer' },
    company: { es: 'CONSTRUIBLEC', en: 'CONSTRUIBLEC' },
    period: { es: 'Enero 2026 - Mayo 2026', en: 'January 2026 - May 2026' },
    highlights: {
      es: [
        'Desarrollé un aplicativo interno con NestJS y React e integré OpenMAINT/CMDBuild v3.4 mediante servicios REST y SOAP (XML/WSDL).',
        'Integré sistemas empresariales conectando OpenMAINT/CMDBuild con Hostaway para automatizar flujos de trabajo y sincronizar información en tiempo real.',
        'Optimicé el rendimiento de una aplicación Java sobre Tomcat mediante pruebas de carga con k6 y ajustes de los pools de hilos y del procesamiento concurrente.',
        'Desplegué la solución en un VPS Linux con Docker y PostgreSQL, incluyendo el hardening de seguridad del servidor.',
      ],
      en: [
        'Developed an internal application with NestJS and React and integrated OpenMAINT/CMDBuild v3.4 through REST and SOAP services (XML/WSDL).',
        'Integrated enterprise systems by connecting OpenMAINT/CMDBuild with Hostaway to automate workflows and synchronize information in real time.',
        'Optimized the performance of a Java application on Tomcat through load testing with k6 and tuning thread pools and concurrent processing.',
        'Deployed the solution on a Linux VPS with Docker and PostgreSQL, including server security hardening.',
      ],
    },
    technologies: ['NestJS', 'React', 'Java', 'Tomcat', 'Docker', 'PostgreSQL', 'k6', 'REST', 'SOAP'],
  },
  {
    id: 'ntt-data-intern',
    title: { es: 'Pasante de Desarrollo', en: 'Development Intern' },
    company: { es: 'NTT DATA', en: 'NTT DATA' },
    period: { es: 'Junio 2025 - Diciembre 2025', en: 'June 2025 - December 2025' },
    highlights: {
      es: [
        'Diagnostiqué incidentes en el sistema de banca corporativa como parte del equipo de soporte N1 de un proyecto crítico con más de 20 integrantes y coordiné con equipos de desarrollo y otras áreas del banco hasta resolverlos para el cliente.',
        'Escribí y optimicé consultas SQL para la trazabilidad transaccional; identifiqué consultas con tiempos de respuesta elevados y propuse crear índices en columnas de filtro para reducir los escaneos completos de tabla.',
        'Analicé microservicios de Spring Boot mediante logs distribuidos con Dynatrace, OpenLens y Stratio e inspeccioné pods de Kubernetes para lograr trazabilidad de extremo a extremo.',
        'Documenté la resolución de incidentes recurrentes de procesamiento de pagos y carga de archivos y creé una referencia para que el equipo gestionara casos similares.',
      ],
      en: [
        'Diagnosed incidents in the corporate banking system as part of the N1 support team for a critical project with more than 20 members and coordinated with development teams and other bank areas until resolution for the customer.',
        'Wrote and optimized SQL queries for transactional traceability; identified queries with high response times and proposed creating indexes on filter columns to reduce full table scans.',
        'Analyzed Spring Boot microservices using distributed logs with Dynatrace, OpenLens, and Stratio and inspected Kubernetes pods to achieve end-to-end traceability.',
        'Documented the resolution of recurring payment-processing and file-upload incidents and created a reference for the team to handle similar cases.',
      ],
    },
    technologies: ['Spring Boot', 'SQL', 'Kubernetes', 'Dynatrace', 'OpenLens', 'Stratio', 'Microservices'],
  },
  {
    id: 'hunev-it-assistant',
    title: { es: 'Asistente de TI', en: 'IT Assistant' },
    company: { es: 'CORPORACIÓN HUNEV', en: 'HUNEV CORPORATION' },
    period: { es: 'Julio 2024 - Marzo 2025', en: 'July 2024 - March 2025' },
    highlights: {
      es: [
        'Automaticé con Python la validación de expedientes de personal destinados al IESS, contrastando documentos almacenados con un registro maestro en Excel y generando reportes de inconsistencias, lo que sustituyó la revisión manual carpeta por carpeta.',
        'Desarrollé de forma individual una aplicación web interna para firmas digitales (Angular/Node.js/MySQL), integré APIs de un proveedor externo y la desplegué en las dos sedes de la organización para digitalizar la incorporación documental de nuevo personal médico.',
        'Administré infraestructura Windows Server/Linux (DNS, DHCP, servidores web y bases de datos) y apliqué hardening de seguridad con firewalls Fortinet (VPNs, VLANs y políticas de acceso).',
      ],
      en: [
        'Automated the validation of personnel files intended for IESS with Python, cross-referencing stored documents against a master Excel register and generating inconsistency reports, replacing a manual folder-by-folder review.',
        'Individually developed an internal web application for digital signatures (Angular/Node.js/MySQL), integrated APIs from an external provider, and deployed it at both organization locations to digitize document onboarding for new medical staff.',
        'Administered Windows Server/Linux infrastructure (DNS, DHCP, web servers, and databases) and applied security hardening with Fortinet firewalls (VPNs, VLANs, and access policies).',
      ],
    },
    technologies: ['Python', 'Angular', 'Node.js', 'MySQL', 'Windows Server', 'Linux', 'Fortinet', 'VPN/VLAN'],
  },
];
