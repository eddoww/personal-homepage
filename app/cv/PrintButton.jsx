"use client";

import { PrinterIcon } from "@/components/icons";

export default function PrintButton() {
  return (
    <button type="button" className="btn" onClick={() => window.print()}>
      <PrinterIcon />
      Print
    </button>
  );
}
