"use client";

import Navbar from "./Navbar";
import WelcomeCard from "./WelcomeCard";
import TelemetryTracker from "./TelemetryTracker";
import AskAura from "./AskAura";
import CodeEditor from "./CodeEditor";
import DynamicRenderer from "./DynamicRenderer";
import AdaptiveDashboard from "./AdaptiveDashboard";
import SelfHealingEngine from "./SelfHealingEngine";
import ErrorBoundary from "./ErrorBoundary";
import CognitiveGauge from "./CognitiveGauge";
import ResponseCard from "./ResponseCard";
import useTelemetry from "../hooks/useTelemetry";
import Footer from "./Footer";

export default function Dashboard() {
  const { cognitiveLoad } = useTelemetry();

  return (
    <div className="min-h-screen bg-transparent text-white p-8">

      {/* Navbar */}
      <Navbar />

      {/* Welcome Section */}
      <section className="mt-8">
        <WelcomeCard />
      </section>

      {/* AI Analytics */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">

        {/* Cognitive Load */}
        <CognitiveGauge />

        {/* Week 3 Components */}
        <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-white">
            Stress Analytics
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Live stress analysis will appear here.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-white">
            Focus Score
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            User focus metrics will appear here.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-white">
            Productivity Index
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Productivity insights will appear here.
          </p>
        </div>

      </section>

      {/* Main Dashboard */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* Left Side */}
        <div className="xl:col-span-2 space-y-6">

          <TelemetryTracker />

          <AskAura />

          <CodeEditor />

          <ErrorBoundary>
            <DynamicRenderer />
          </ErrorBoundary>

          <AdaptiveDashboard cognitiveLoad={cognitiveLoad} />

          <SelfHealingEngine cognitiveLoad={cognitiveLoad} />

        </div>

        {/* Right Side */}
        <div className="space-y-6">

          <ResponseCard />

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}