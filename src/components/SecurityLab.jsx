import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const SecurityLab = ({ language }) => {
  const isSpanish = language === "es";
  
  const [scenario, setScenario] = useState("GoogleToM365");
  const [isPlanning, setIsPlanning] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Sincronización de idioma: si cambia el switch, reseteamos la vista de detalles
  useEffect(() => {
    setShowDetails(false);
  }, [language]);

  const migrationData = {
    GoogleToM365: {
      title: isSpanish ? "Migración de Google Workspace a Microsoft 365" : "Google Workspace to Microsoft 365 Migration",
      description: isSpanish 
        ? "Migración crítica de productividad y colaboración para entornos corporativos de alto volumen."
        : "Critical productivity and collaboration migration for high-volume corporate environments.",
      workloads: isSpanish 
        ? ["Buzones de Gmail a Exchange Online", "Google Drive a OneDrive/SharePoint", "Calendarios", "Unidades Compartidas"]
        : ["Gmail to Exchange Online", "Google Drive to OneDrive/SharePoint", "Calendars", "Shared Drives"],
      toolstack: "Migration Manager / PowerShell",
      protocol: "API REST / OAuth 2.0 / Modern Auth",
      complexity: isSpanish ? "Alta" : "High",
      icon: "🌐"
    },
    AzureInfra: {
      title: isSpanish ? "Infraestructura Azure Cloud e Híbrida" : "Azure Cloud & Hybrid Infra",
      description: isSpanish 
        ? "Diseño y despliegue de infraestructura en la nube y entornos híbridos escalables."
        : "Design and deployment of cloud infrastructure and scalable hybrid environments.",
      workloads: isSpanish
        ? ["Máquinas Virtuales Azure", "Redes Virtuales (VNets) y Grupos de Seguridad de Red", "Azure Backup & Recovery", "Bases de Datos SQL"]
        : ["Azure Virtual Machines", "VNets & Security Groups", "Azure Backup & Recovery", "SQL Databases"],
      toolstack: "Azure Portal / CLI / Terraform",
      protocol: "TCP/IP / Hub-and-Spoke",
      complexity: isSpanish ? "Arquitectura Senior" : "Senior Architecture",
      icon: "☁️"
    },
    IdentityAccess: {
      title: isSpanish ? "Gestión de Identidades (IAM)" : "Identity & Access Management",
      description: isSpanish
        ? "Gestión centralizada de identidades y modernización del acceso seguro."
        : "Centralized identity management and secure access modernization.",
      workloads: isSpanish
        ? ["Microsoft Entra ID", "Sincronización Entra Connect", "MFA y SSPR", "Grupos Dinámicos"]
        : ["Microsoft Entra ID", "Entra Connect Sync", "MFA & SSPR", "Dynamic Groups"],
      toolstack: "Entra ID / PowerShell",
      protocol: "SAML 2.0 / OpenID Connect",
      complexity: isSpanish ? "Nivel Empresarial" : "Enterprise Level",
      icon: "🆔"
    },
    IntuneMDM: {
      title: isSpanish ? "Gestión de Dispositivos (MDM/MAM)" : "Device Management (MDM/MAM)",
      description: isSpanish
        ? "Control total de puntos finales y políticas de seguridad multiplataforma."
        : "Full Endpoint control and multi-platform security policy enforcement.",
      workloads: isSpanish
        ? ["Cumplimiento ISO 27001", "Cifrado BitLocker", "Perfiles Wi-Fi", "Autopilot Deployment"]
        : ["ISO 27001 Compliance", "BitLocker Management", "Wi-Fi Profiles", "Autopilot Deployment"],
      toolstack: "Microsoft Intune / Entra ID",
      protocol: "MDM Channel / SCEP",
      complexity: isSpanish ? "Estratégica" : "Strategic",
      icon: "📱"
    },
    SecurityCompliance: {
      title: isSpanish ? "Ciberseguridad y Cumplimiento" : "Cybersecurity & Compliance",
      description: isSpanish
        ? "Protección de datos y capacitación bajo el modelo Zero Trust."
        : "Data protection and training under the Zero Trust model.",
      workloads: isSpanish
        ? ["Políticas DLP", "Capacitación de Seguridad", "Simulación de Phishing", "Defender for Endpoint"]
        : ["DLP Policies", "Security Training", "Phishing Simulation", "Defender for Endpoint"],
      toolstack: "Microsoft Purview / Defender",
      protocol: "ISO 27001 / NIST",
      complexity: isSpanish ? "Alta (Cultura Proactiva)" : "High (Proactive Culture)",
      icon: "🛡️"
    },
    DisasterRecovery: {
      title: isSpanish ? "Continuidad del Negocio (BCDR)" : "Business Continuity (BCDR)",
      description: isSpanish
        ? "Estrategias de recuperación ante desastres y protección de datos."
        : "Disaster recovery strategies and data protection.",
      workloads: isSpanish
        ? ["Respaldos SQL Críticos", "Mantenimiento de Servidores", "Diagnóstico de Hardware", "Cronjobs Linux"]
        : ["SQL Critical Backups", "Server Maintenance", "Hardware Diagnostics", "Linux Cronjobs"],
      toolstack: "Azure Backup / SQL Management",
      protocol: "RTO & RPO Optimization",
      complexity: isSpanish ? "Crítica" : "Critical",
      icon: "💾"
    },
    TechnicalLeadership: {
      title: isSpanish ? "Liderazgo y Consultoría TI" : "IT Leadership & Consulting",
      description: isSpanish
        ? "Gestión de proyectos y asesoramiento tecnológico estratégico."
        : "Project management and strategic technological advisory.",
      workloads: isSpanish
        ? ["Liderazgo de Equipos", "Gestión de KPIs", "Capacitación a Usuarios", "Preventa Técnica"]
        : ["Team Leadership", "KPI Management", "User Training", "Technical Pre-sales"],
      toolstack: "Agile / Project Management",
      protocol: "ITIL V4 / Soft Skills",
      complexity: "Senior Management",
      icon: "📊"
    }
  };

  const handleAudit = () => {
    setIsPlanning(true);
    setShowDetails(false);
    setTimeout(() => {
      setIsPlanning(false);
      setShowDetails(true);
    }, 1200);
  };

  const activePlan = migrationData[scenario];

  return (
    <div className="mt-12 bg-[#050816] p-8 rounded-3xl border-2 border-[#3399FF]/20 shadow-[0_0_50px_rgba(51,153,255,0.1)]">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        
        {/* PANEL DE SELECCIÓN */}
        <div className="flex-[0.8] w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#3399FF] rounded-full shadow-[0_0_10px_#3399FF] animate-pulse" />
            <h3 className="text-white font-bold text-[22px] uppercase tracking-tighter">
              {isSpanish ? "Centro de Arquitectura" : "Architecture Hub"}
            </h3>
          </div>

          {/* DESCRIPCIÓN REINSERTADA */}
          <p className="text-secondary text-[14px] leading-relaxed mb-6 italic">
            {isSpanish 
              ? "Interactúa con este simulador para conocer la metodología técnica aplicada en mis proyectos. Selecciona una especialidad y audita los detalles técnicos." 
              : "Interact with this simulator to learn the technical methodology applied in my projects. Select a specialty and audit the technical details."}
          </p>

          <div className="space-y-6">
            <div>
              <label className="text-secondary text-xs font-bold uppercase tracking-wider ml-1 mb-3 block">
                {isSpanish ? "Seleccionar Especialidad:" : "Select Specialty:"}
              </label>
              <div className="grid grid-cols-1 gap-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {Object.keys(migrationData).map((key) => (
                  <button
                    key={key}
                    onClick={() => { setScenario(key); setShowDetails(false); }}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${scenario === key ? 'border-[#3399FF] bg-[#3399FF]/10 text-white shadow-[0_0_15px_rgba(51,153,255,0.1)]' : 'border-white/5 text-secondary hover:border-white/20 hover:bg-white/5'}`}
                  >
                    <span className="text-2xl">{migrationData[key].icon}</span>
                    <span className="font-medium text-sm">{migrationData[key].title}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAudit}
              disabled={isPlanning}
              className="w-full bg-[#3399FF] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#287acc] transition-all active:scale-[0.98] shadow-lg shadow-blue-500/20 disabled:opacity-50"
            >
              {isPlanning 
                ? (isSpanish ? "Procesando Auditoría..." : "Processing Audit...") 
                : (isSpanish ? "AUDITAR DETALLES TÉCNICOS" : "AUDIT TECHNICAL DETAILS")}
            </button>
          </div>
        </div>

        {/* VISUALIZADOR */}
        <div className="flex-1 w-full min-h-[520px] bg-[#0a0d1d] rounded-2xl border border-white/5 p-8 relative flex flex-col justify-center">
          {!showDetails && !isPlanning && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#3399FF]/10 rounded-full flex items-center justify-center border border-[#3399FF]/20 mx-auto">
                <span className="text-3xl">📂</span>
              </div>
              <p className="text-secondary italic max-w-xs mx-auto text-sm">
                {isSpanish 
                  ? "Selecciona una especialidad para desglosar la metodología aplicada."
                  : "Select a specialty to break down the applied methodology."}
              </p>
            </motion.div>
          )}

          {isPlanning && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[#3399FF] border-t-transparent rounded-full animate-spin" />
              <p className="text-blue-400 font-mono text-sm uppercase tracking-widest">
                {isSpanish ? "Validando Stack..." : "Validating Stack..."}
              </p>
            </div>
          )}

          {showDetails && !isPlanning && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div>
                <h4 className="text-white text-2xl font-bold mb-2">{activePlan.title}</h4>
                <p className="text-secondary text-sm leading-relaxed">{activePlan.description}</p>
              </div>

              <div>
                <h5 className="text-[#3399FF] font-bold uppercase text-[10px] tracking-[3px] mb-3">
                  {isSpanish ? "Alcance Técnico" : "Technical Scope"}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activePlan.workloads.map((item, idx) => (
                    <div key={idx} className="bg-white/5 p-2 rounded border border-white/5 text-[11px] text-gray-300 flex items-center gap-2">
                      <span className="text-[#3399FF]">▹</span> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="bg-[#11162d] p-4 rounded-xl border-l-4 border-[#3399FF]">
                  <p className="text-secondary text-[10px] uppercase font-bold mb-1 tracking-widest">Core Toolstack</p>
                  <p className="text-white font-semibold text-sm">{activePlan.toolstack}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <p className="text-secondary text-[10px] uppercase font-bold mb-1">
                      {isSpanish ? "Protocolo" : "Protocol"}
                    </p>
                    <p className="text-white font-mono text-[10px]">{activePlan.protocol}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <p className="text-secondary text-[10px] uppercase font-bold mb-1">
                      {isSpanish ? "Gestión" : "Management"}
                    </p>
                    <p className="text-white text-xs">{activePlan.complexity}</p>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-gray-500 font-mono italic text-center">
                {isSpanish 
                  ? "* Información validada por Rafael Escobar." 
                  : "* Information validated by Rafael Escobar."}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(SecurityLab, "lab");