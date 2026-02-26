import React from "react";

const LanguageSelector = ({ onSelect }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary">
      <div className="bg-tertiary p-8 rounded-2xl border-2 border-azure-blue shadow-card text-center max-w-sm mx-4">
        <h2 className="text-white text-2xl font-bold mb-6">
          Bienvenido / Welcome
        </h2>
        <p className="text-secondary mb-8">
          Selecciona tu idioma para continuar <br />
          Select your language to continue
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => onSelect("es")}
            className="bg-azure-blue hover:bg-[#005a9e] text-white py-3 px-6 rounded-lg font-bold transition-colors"
          >
            Español
          </button>
          <button
            onClick={() => onSelect("en")}
            className="border-2 border-azure-blue text-white py-3 px-6 rounded-lg font-bold hover:bg-azure-blue transition-all"
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;