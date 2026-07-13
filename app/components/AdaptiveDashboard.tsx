"use client";

import useAdaptiveLayout from "../hooks/useAdaptiveLayout";

type AdaptiveDashboardProps = {
  cognitiveLoad: number;
};

export default function AdaptiveDashboard({
  cognitiveLoad,
}: AdaptiveDashboardProps) {
  const layout = useAdaptiveLayout(cognitiveLoad);

  return (
    <section className="rounded-3xl border border-cyan-500/10 bg-slate-900/70 p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-white">
        Adaptive Dashboard
      </h2>

      <p className="text-slate-400 mt-2">
        Layout changes automatically according to cognitive load.
      </p>

      <div className="mt-6">

        {layout === "normal" && (
          <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-5">
            <h3 className="text-green-400 font-semibold">
              🟢 Normal Mode
            </h3>

            <p className="text-slate-300 mt-2">
              All dashboard widgets are visible.
            </p>
          </div>
        )}

        {layout === "focus" && (
          <div className="rounded-xl bg-yellow-500/10 border border-yellow-500/20 p-5">
            <h3 className="text-yellow-400 font-semibold">
              🟡 Focus Mode
            </h3>

            <p className="text-slate-300 mt-2">
              Less important widgets are minimized to reduce distractions.
            </p>
          </div>
        )}

        {layout === "simplified" && (
          <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-5">
            <h3 className="text-red-400 font-semibold">
              🔴 Simplified Mode
            </h3>

            <p className="text-slate-300 mt-2">
              High cognitive load detected. The interface is simplified to help the user focus.
            </p>
          </div>
        )}

      </div>

    </section>
  );
}