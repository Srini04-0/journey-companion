import { useState } from "react";
import { Sun, Sunset, Moon, Check, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/components/AppLayout";

type Med = { name: string; dosage: string; instructions: string; taken: boolean };

const initialMeds: Record<string, Med[]> = {
  Morning: [
    { name: "Gonal-F", dosage: "150 IU injection", instructions: "Inject subcutaneously in the abdomen. Rotate injection sites.", taken: true },
    { name: "Menopur", dosage: "75 IU injection", instructions: "Mix powder with solvent. Inject slowly.", taken: false },
  ],
  Afternoon: [
    { name: "Folic Acid", dosage: "5mg tablet", instructions: "Take with food for better absorption.", taken: false },
  ],
  Evening: [
    { name: "Cetrotide", dosage: "0.25mg injection", instructions: "Inject at the same time each evening. You're doing great.", taken: false },
    { name: "Progesterone", dosage: "200mg capsule", instructions: "Take before bed. Rest well tonight.", taken: false },
  ],
};

const timeIcons: Record<string, typeof Sun> = { Morning: Sun, Afternoon: Sunset, Evening: Moon };
const timeBg: Record<string, string> = { Morning: "bg-ivf-peach", Afternoon: "bg-ivf-warm", Evening: "bg-ivf-lavender" };

const Medications = () => {
  const [meds, setMeds] = useState(initialMeds);

  const toggle = (period: string, idx: number) => {
    setMeds((prev) => ({
      ...prev,
      [period]: prev[period].map((m, i) => (i === idx ? { ...m, taken: !m.taken } : m)),
    }));
  };

  return (
    <AppLayout>
      <div className="space-y-5 animate-fade-in">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Medications</h1>
          <p className="text-muted-foreground mt-1">Your daily schedule — take each one at your own pace 🌿</p>
        </div>

        {Object.entries(meds).map(([period, list]) => {
          const Icon = timeIcons[period];
          return (
            <Card key={period} className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <div className={`${timeBg[period]} rounded-xl p-2`}>
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  {period}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {list.map((med, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-3 transition-all ${med.taken ? "bg-ivf-mint/50" : "bg-ivf-warm/50"}`}
                  >
                    <button
                      onClick={() => toggle(period, i)}
                      className="w-full flex items-center gap-3"
                    >
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          med.taken ? "bg-primary border-primary" : "border-muted-foreground/30"
                        }`}
                      >
                        {med.taken && <Check className="h-3.5 w-3.5 text-primary-foreground" />}
                      </div>
                      <div className="text-left flex-1">
                        <p className={`text-sm font-semibold ${med.taken ? "line-through text-muted-foreground" : "text-foreground"}`}>
                          {med.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{med.dosage}</p>
                      </div>
                    </button>
                    <div className="flex items-start gap-2 mt-2 ml-9">
                      <Info className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground leading-relaxed">{med.instructions}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </AppLayout>
  );
};

export default Medications;
