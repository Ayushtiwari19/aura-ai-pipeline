"use client";

import { useTelemetryContext } from "../context/TelemetryContext";

export default function useTelemetry() {
  const { telemetry, setTelemetry } = useTelemetryContext();

  return {
    telemetry,
    setTelemetry,
  };
}