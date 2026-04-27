"use client";

import React from "react";
import { Spinner } from "@heroui/spinner";

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark text-white">
      <div className="text-center flex flex-col items-center">
        <div className="font-display font-bold text-6xl tracking-tighter animate-pulse uppercase mb-8">
          TRAN HOAN
        </div>

        <Spinner
          className="text-brand-cyan"
          classNames={{
            label: "text-brand-cyan font-mono animate-pulse-fast mt-4",
          }}
          color="primary"
          label="INITIALIZING BACKEND..."
          size="lg"
        />

        <div className="w-48 h-1 bg-brand-gray mt-8 mx-auto rounded-full overflow-hidden">
          <div className="h-full bg-brand-cyan loader-bar shadow-[0_0_10px_#66FCF1]" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
