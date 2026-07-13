import type { Metadata } from "next";
import "./globals.css";

import { AuraProvider } from "./context/AuraContext";
import { TelemetryProvider } from "./context/TelemetryContext";

export const metadata: Metadata = {
  title: "AuraGen",
  description: "Self-Healing Generative UI via Cognitive Load",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TelemetryProvider>
          <AuraProvider>
            {children}
          </AuraProvider>
        </TelemetryProvider>
      </body>
    </html>
  );
}