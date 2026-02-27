import {
  shopify,
  excel,
  word,
  powerpoint,
  odoo,
  windows,
  sharepoint,
  drive,
  onedrive,
  mega,
  microsoft365,
  canva,
  testimonio,
  testimonio2,
  testimonio3,
  analistafinanzas,
  administrativa,
  agentenegocios,
  seguridadlaboral,
  spmigration,
  sgsidefender,
  migrationgoogle,
  cesdeinfra,
  automation,
  cco,
  hi,
  zgza, 
  titulo,
  certificado,
  certificado2,
  azure,
  google,
  wordpress,
  linux,
  powerauto,
  devops,
  sql,
  powershell,
  entraid,
  php,
  javascript,
  git,
  html,
  css,
  owasp,
  owaspzap,
  jmeter,
  cloudflare,
  seguridad,
  soporte
} from "../assets";

export const navLinks = {
  es: [
    { id: "about", title: "Acerca" },
    { id: "work", title: "Proyectos" }, 
    { id: "contact", title: "Contacto" },
  ],
  en: [
    { id: "about", title: "About" },
    { id: "work", title: "Projects" }, 
    { id: "contact", title: "Contact" },
  ],
};

const services = {
  es: [
    { title: "Especialista M365", icon: microsoft365 },
    { title: "Infraestructura Azure", icon: azure },
    { title: "Seguridad Cloud", icon: seguridad },
    { title: "Líder Soporte IT", icon: soporte },
  ],
  en: [
    { title: "M365 Specialist", icon: microsoft365 },
    { title: "Azure Infrastructure", icon: azure },
    { title: "Cloud Security", icon: seguridad },
    { title: "IT Support Lead", icon: soporte },
  ],
};

const technologies = [
  { name: "microsoft365", icon: microsoft365 },
  { name: "sharepoint", icon: sharepoint },
  { name: "azure", icon: azure },
  { name: "cloudflare", icon: cloudflare },
  { name: "owasp", icon: owasp },
  { name: "jmeter", icon: jmeter },
  { name: "google", icon: google },
  { name: "wordpress", icon: wordpress },
  { name: "linux", icon: linux },
  { name: "powerauto", icon: powerauto },
  { name: "devops", icon: devops },
  { name: "windows", icon: windows },
  { name: "odoo", icon: odoo },
  { name: "sql", icon: sql },
  { name: "powershell", icon: powershell },
  { name: "entraid", icon: entraid },
  { name: "git", icon: git },
  { name: "php", icon: php },
  { name: "javascript", icon: javascript },
  { name: "html", icon: html },
  { name: "css", icon: css },
];

const experiences = {
  es: [
    {
      title: "Líder Técnico de Infraestructura TI",
      company_name: "CCO Systems",
      icon: cco,
      iconBg: "#ffffff",
      date: "Diciembre 2021 - Marzo 2026",
      points: [
        "Liderazgo de administración en Microsoft 365, análisis de datos y proyectos de auditoría de seguridad.",
        "Gestión de infraestructura en Azure (IaaS), administrando máquinas virtuales, redes y Microsoft Entra ID.",
        "Implementación de flujos de seguridad DAST con OWASP ZAP para mitigar vulnerabilidades.",
        "Ejecución de migraciones críticas de correo y datos hacia entornos de nube e híbridos.",
      ],
    },
    {
      title: "Analista de Sistemas TI",
      company_name: "Hospital Internacional Barquisimeto",
      icon: hi,
      iconBg: "#ffffff", // Ajustado a blanco para mejor contraste
      date: "Enero 2024 - Agosto 2025",
      points: [
        "Administración avanzada de Office 365 y auditoría de seguridad en entornos de salud críticos.",
        "Gestión de identidades mediante Single Sign-On (SSO) y administración compleja de DNS.",
        "Mantenimiento de infraestructura híbrida asegurando alta disponibilidad y hardening de servidores.",
        "Aplicación de metodologías Scrum y Azure DevOps para la gestión de proyectos técnicos.",
      ],
    },
    {
      title: "Analista de Sistemas",
      company_name: "LA ZARAGOZA C.A",
      icon: zgza,
      iconBg: "#ffffff", // CAMBIO TÉCNICO: Fondo blanco para que el logo circular respire
      date: "Enero 2019 - Enero 2021",
      points: [
        "Gestión de Infraestructura: Lideré la administración IT y ejecuté mejoras críticas en seguridad de red.",
        "Soluciones de Seguridad: Administré antivirus corporativo (Kaspersky), incluyendo despliegue y monitoreo.",
        "Mantenimiento Técnico: Diagnósticos avanzados de hardware y mantenimiento preventivo/correctivo.",
        "Integridad del Sistema: Gestión de licencias, control de inventario y respaldos de datos críticos.",
      ],
    },
    {
      title: "Técnico de Soporte TI",
      company_name: "LA ZARAGOZA C.A",
      icon: zgza,
      iconBg: "#ffffff", // CAMBIO TÉCNICO: Fondo blanco consistente para evitar el desborde visual
      date: "Diciembre 2016 - Enero 2018",
      points: [
        "Soporte Técnico: Soporte presencial para sistemas, impresoras e infraestructura de red corporativa.",
        "Mantenimiento: Formateo de equipos, actualizaciones de software y mantenimiento preventivo.",
        "Respaldo: Gestión de copias de seguridad críticas para asegurar la integridad de datos.",
      ],
    },
  ],
  en: [
    {
      title: "IT Infrastructure Technical Lead",
      company_name: "CCO Systems",
      icon: cco,
      iconBg: "#ffffff",
      date: "December 2021 - March 2026",
      points: [
        "Leadership in Microsoft 365 administration, data analysis, and security auditing projects.",
        "Azure Infrastructure management (IaaS), handling virtual machines, networking, and Microsoft Entra ID.",
        "Implementation of DAST security flows with OWASP ZAP to mitigate web application vulnerabilities.",
        "Execution of critical email and data migrations to cloud and hybrid environments.",
      ],
    },
    {
      title: "IT Systems Analyst",
      company_name: "Hospital International Barquisimeto",
      icon: hi,
      iconBg: "#ffffff",
      date: "January 2024 - August 2025",
      points: [
        "Advanced Office 365 administration and security auditing in critical healthcare environments.",
        "Identity and access management through Single Sign-On (SSO) and complex DNS management.",
        "Hybrid infrastructure maintenance ensuring high availability and server hardening.",
        "Application of Scrum methodologies and Azure DevOps for technical project management.",
      ],
    },
    {
      title: "Systems Analyst",
      company_name: "LA ZARAGOZA C.A",
      icon: zgza,
      iconBg: "#ffffff", // CAMBIO TÉCNICO: Consistencia en la versión inglés
      date: "January 2019 - January 2021",
      points: [
        "Infrastructure Management: Led IT administration and executed critical network security improvements.",
        "Security Solutions: Managed enterprise antivirus (Kaspersky), including deployment and monitoring.",
        "Technical Maintenance: Advanced hardware diagnostics and preventive/corrective maintenance.",
        "System Integrity: Managed software licensing, technical inventory, and critical data backups.",
      ],
    },
    {
      title: "IT Support Technician",
      company_name: "LA ZARAGOZA C.A",
      icon: zgza,
      iconBg: "#ffffff", // CAMBIO TÉCNICO: Consistencia en la versión inglés
      date: "December 2016 - January 2018",
      points: [
        "Technical Support: On-site support for computer systems, printers, and network infrastructure.",
        "System Maintenance: Preventive maintenance, equipment formatting, and software updates.",
        "Data Backup: Managed critical backups to ensure business continuity and data integrity.",
      ],
    },
  ],
};

const testimonials = {
  es: [
    {
      testimonial: "Durante 5 años, Rafael demostró un liderazgo excepcional ejecutando proyectos de infraestructura y M365, garantizando siempre el cumplimiento del 100% en implementaciones críticas de seguridad.",
      name: "Alejandro Gonzalez",
      designation: "Director de Proyectos TI",
      company: "CCO Systems",
      image: testimonio,
    },
    {
      testimonial: "Bajo el liderazgo técnico de Rafael, migramos con éxito SharePoint 2010 a la nube. Destaco su dominio en herramientas de migración y su visión para automatizar procesos críticos con Power Automate.",
      name: "Jesús Cuicas",
      designation: "Desarrollador",
      company: "CONTIGO CORP",
      image: testimonio2,
    },
    {
      testimonial: "Rafael lideró con éxito el análisis de seguridad ofensiva en nuestros portales web críticos. Su dominio de OWASP ZAP y su capacidad para remediar vulnerabilidades como XSS fortalecieron drásticamente nuestra postura de defensa.",
      name: "Carlos Augusto Herrera",
      designation: "Especialista Senior TI",
      company: "Solla",
      image: testimonio3,
    },
  ],
  en: [
    {
      testimonial: "Over 5 years, Rafael showed exceptional leadership in infrastructure and M365 projects, consistently achieving 100% completion in critical security implementations.",
      name: "Alejandro Gonzalez",
      designation: "IT Project Director",
      company: "CCO Systems",
      image: testimonio,
    },
    {
      testimonial: "Under Rafael's technical leadership, we successfully migrated SharePoint 2010 to the cloud. I highlight his mastery of migration tools and his vision for automating critical processes with Power Automate.",
      name: "Jesús Cuicas",
      designation: "Developer",
      company: "CONTIGO CORP",
      image: testimonio2,
    },
    {
      testimonial: "Rafael successfully led offensive security analysis (DAST) on our critical web portals. His mastery of OWASP ZAP and his ability to remediate vulnerabilities like SQLi and XSS drastically strengthened our defense posture.",
      name: "Carlos Augusto Herrera",
      designation: "Senior IT Specialist",
      company: "Solla",
      image: testimonio3,
    },
  ],
};

const projects = {
  es: [
    {
      name: "Migración a SharePoint Online",
      description:
        "Lideré la migración crítica de SharePoint Server 2010 a SharePoint Online con SharePoint Migration Tools, ejecutando la reestructuración de arquitecturas obsoletas hacia entornos modernos. Implementé la migración de librerías masivas, permisos granulares y la automatización de flujos de trabajo tradicionales mediante Power Automate para optimizar la colaboración empresarial.",
      tags: [
        { name: "SharePoint-Online", color: "blue-text-gradient" },
        { name: "Power-Automate", color: "green-text-gradient" },
        { name: "Migration-Tool", color: "pink-text-gradient" },
      ],
      image: spmigration,
      source_code_link: "#",
    },
    {
      name: "Ciberseguridad y Cumplimiento",
      description:
        "Lideré el diseño e implementación de un Sistema de Gestión de Seguridad de la Información (SGSI) utilizando el ecosistema avanzado de Microsoft Defender. Configuré Microsoft Defender para la detección proactiva de amenazas en endpoints e identidades, y desplegué Microsoft Purview para el gobierno de datos, estableciendo políticas de etiquetas de sensibilidad (DLP) y cumplimiento normativo para proteger activos críticos de la organización.",
      tags: [
        { name: "Defender-for-Cloud", color: "blue-text-gradient" },
        { name: "Microsoft-Purview", color: "green-text-gradient" },
        { name: "Compliance", color: "pink-text-gradient" },
      ],
      image: sgsidefender,
      source_code_link: "#",
    },
    {
      name: "Migración Google - Microsoft",
      description:
        "Ejecuté la migración integral de servicios desde Google Workspace hacia Microsoft 365. Lideré la transferencia crítica de buzones de correo, datos en Drive y la configuración de identidades mediante Single Sign-On (SSO), garantizando una transición fluida, sin pérdida de información y manteniendo la continuidad operativa para todos los usuarios de la organización.",
      tags: [
        { name: "Google-to-M365", color: "blue-text-gradient" },
        { name: "Identity-SSO", color: "green-text-gradient" },
        { name: "Cloud-Migration", color: "pink-text-gradient" },
      ],
      image: migrationgoogle,
      source_code_link: "#",
    },
    {
      name: "Ciberseguridad Ofensiva",
      description:
        "Ejecuté auditorías de seguridad dinámica (DAST) mediante escaneos de vulnerabilidades con OWASP ZAP sobre portales web críticos. El proyecto incluyó la identificación de fallos de seguridad (SQLi, XSS, configuraciones erróneas), el análisis de riesgos y la implementación de remediaciones técnicas para fortalecer la postura de defensa de las aplicaciones ante ataques externos.",
      tags: [
        { name: "OWASP-ZAP", color: "blue-text-gradient" },
        { name: "Ethical-Hacking", color: "green-text-gradient" },
        { name: "Vulnerability-Management", color: "pink-text-gradient" },
      ],
      image: owaspzap,
      source_code_link: "#",
    },
    {
      name: "Infraestructura Cloud CESDE",
      description:
        "Apoyé al equipo de Infraestructura con en el despliegue de la infraestructura completa en Microsoft Azure para el portal web institucional del CESDE y su salida a producción. El proyecto incluyó la configuración de Máquinas virutales, balanceador de carga, bases de datos SQL de alta disponibilidad y la implementación de redes virtuales (VNet) con reglas de seguridad estrictas, garantizando un entorno escalable, resiliente y optimizado para el tráfico estudiantil.",
      tags: [
        { name: "Azure-App-Service", color: "blue-text-gradient" },
        { name: "SQL-Azure", color: "green-text-gradient" },
        { name: "Cloud-Architecture", color: "pink-text-gradient" },
      ],
      image: cesdeinfra,
      source_code_link: "#",
    },
    {
      name: "Automatización de Identidades a Gran Escala",
      description:
        "Desarrollé y ejecuté scripts avanzados para la actualización masiva de propiedades de objetos en Microsoft Entra ID, impactando a más de 20,000 usuarios de forma simultánea. Esta solución automatizada garantizó la integridad de los datos de identidad, optimizó los tiempos de administración en un 90% y permitió el cumplimiento de políticas de acceso dinámico basadas en atributos actualizados.",
      tags: [
        { name: "PowerShell-Automation", color: "blue-text-gradient" },
        { name: "Microsoft-Entra-ID", color: "green-text-gradient" },
        { name: "Bulk-Operations", color: "pink-text-gradient" },
      ],
      image: automation,
      source_code_link: "#",
    },
  ],
  en: [
    {
      name: "SharePoint Cloud Modernization",
      description:
        "Led the critical migration from SharePoint Server 2010 to SharePoint Online using SharePoint Migration Tools, restructuring legacy architectures into modern environments. I implemented mass library migrations, granular permissions, and automation of traditional workflows through Power Automate to optimize business collaboration.",
      tags: [
        { name: "SharePoint-Online", color: "blue-text-gradient" },
        { name: "Power-Automate", color: "green-text-gradient" },
        { name: "Migration-Tool", color: "pink-text-gradient" },
      ],
      image: spmigration,
      source_code_link: "#",
    },
    {
      name: "ISMS & Microsoft Security Stack",
      description:
        "Led the design and implementation of an Information Security Management System (ISMS) using the advanced Microsoft ecosystem. I configured Microsoft Defender for proactive threat detection on endpoints and identities, and deployed Microsoft Purview for data governance, establishing sensitivity label policies (DLP) and regulatory compliance to protect critical organizational assets.",
      tags: [
        { name: "Defender-for-Cloud", color: "blue-text-gradient" },
        { name: "Microsoft-Purview", color: "green-text-gradient" },
        { name: "Compliance", color: "pink-text-gradient" },
      ],
      image: sgsidefender,
      source_code_link: "#",
    },
    {
      name: "Google to Microsoft Migration",
      description:
        "Executed the comprehensive migration of services from Google Workspace to Microsoft 365. I led the critical transfer of mailboxes, Drive data, and identity configuration through Single Sign-On (SSO), ensuring a smooth transition without data loss and maintaining operational continuity for all organization users.",
      tags: [
        { name: "Google-to-M365", color: "blue-text-gradient" },
        { name: "Identity-SSO", color: "green-text-gradient" },
        { name: "Cloud-Migration", color: "pink-text-gradient" },
      ],
      image: migrationgoogle,
      source_code_link: "#",
    },
    {
      name: "Offensive Cybersecurity",
      description:
        "Executed Dynamic Application Security Testing (DAST) through vulnerability scans with OWASP ZAP on critical web portals. The project included identifying security flaws (SQLi, XSS, misconfigurations), risk analysis, and implementing technical remediations to strengthen the applications' defense posture against external attacks.",
      tags: [
        { name: "OWASP-ZAP", color: "blue-text-gradient" },
        { name: "Ethical-Hacking", color: "green-text-gradient" },
        { name: "Vulnerability-Management", color: "pink-text-gradient" },
      ],
      image: owaspzap,
      source_code_link: "#",
    },
    {
      name: "CESDE Cloud Infrastructure",
      description:
        "I supported the Infrastructure team in the full deployment of the Microsoft Azure environment for the CESDE institutional web portal and its successful launch into production. The project included the configuration of Virtual Machines, Load Balancers, and High-Availability SQL Databases, as well as the implementation of Virtual Networks (VNet) with strict security rules. This ensured a scalable, resilient, and optimized environment tailored for student traffic.",
      tags: [
        { name: "Azure-App-Service", color: "blue-text-gradient" },
        { name: "SQL-Azure", color: "green-text-gradient" },
        { name: "Cloud-Architecture", color: "pink-text-gradient" },
      ],
      image: cesdeinfra,
      source_code_link: "#",
    },
    {
      name: "Large-Scale Identity Automation",
      description:
        "Developed and executed advanced scripts for bulk updating object properties in Microsoft Entra ID, impacting over 20,000 users simultaneously. This automated solution ensured identity data integrity, optimized administration times by 90%, and allowed compliance with dynamic access policies based on updated attributes.",
      tags: [
        { name: "PowerShell-Automation", color: "blue-text-gradient" },
        { name: "Microsoft-Entra-ID", color: "green-text-gradient" },
        { name: "Bulk-Operations", color: "pink-text-gradient" },
      ],
      image: automation,
      source_code_link: "#",
    },
  ],
};

export { services, technologies, experiences, testimonials, projects };