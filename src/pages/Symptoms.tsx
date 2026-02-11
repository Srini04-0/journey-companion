import { useState } from "react";
import { Activity, Droplets, Smile, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";

const symptoms = [
  { key: "pain", label: "Pain", icon: Activity, levels: ["None", "Mild", "Moderate", "Severe"] },
  { key: "bloating", label: "Bloating", icon: AlertTriangle, levels: ["None", "Mild", "Moderate", "Severe"] },
  { key: "mood", label: "Mood", icon: Smile, levels: ["Great", "Okay", "Low", "Very Low"] },
  { key: "spotting", label: "Spotting", icon: Droplets, levels: ["None", "Light", "Moderate", "Heavy"] },
];

const getIndicator = (val: number) => {
  if (val <= 1) return { label: "Normal", color: "bg-ivf-mint text-green-700" };
  if (val === 2) return { label: "Monitor", color: "bg-ivf-peach text-amber-700" };
  return { label: "Contact Clinic", color: "bg-ivf-pink text-rose-700" };
};

const weekLog = [
  { day: "Mon", pain: 0, bloating: 1, mood: 1, spotting: 0 },
  { day: "Tue", pain: 1, bloating: 1, mood: 0, spotting: 0 },
  { day: "Wed", pain: 1, bloating: 2, mood: 1, spotting: 0 },
  { day: "Thu", pain: 0, bloating: 1, mood: 0, spotting: 0 },
  { day: "Fri", pain: 2, bloating: 2, mood: 2, spotting: 1 },
  { day: "Sat", pain: 1, bloating: 1, mood: 1, spotting: 0 },
  { day: "Sun", pain: 0, bloating: 0, mood: 0, spotting: 0 },
];

const Symptoms = () => {
  const [values, setValues] = useState<Record<string, number>>({ pain: 0, bloating: 1, mood: 1, spotting: 0 });
  const [saved, setSaved] = useState(false);

  const update = (key: string, val: number[]) => {
    setValues((prev) => ({ ...prev, [key]: val[0] }));
    setSaved(false);
  };

  return (
    <AppLayout>
      <div className="space-y-5 animate-fade-in">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Symptom Tracker</h1>
          <p className="text-muted-foreground mt-1">Log how you're feeling — no pressure, just awareness 🌸</p>
        </div>

        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg">Today's Log</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {symptoms.map((s) => {
              const val = values[s.key];
              const indicator = getIndicator(val);
              return (
                <div key={s.key}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <s.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{s.label}</span>
                    </div>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${indicator.color}`}>
                      {indicator.label}
                    </span>
                  </div>
                  <Slider
                    value={[val]}
                    onValueChange={(v) => update(s.key, v)}
                    max={3}
                    step={1}
                    className="mb-1"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    {s.levels.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </div>
                </div>
              );
            })}
            <Button
              className="w-full rounded-xl"
              onClick={() => setSaved(true)}
            >
              {saved ? "✓ Saved for today" : "Save Today's Log"}
            </Button>
            {saved && (
              <p className="text-xs text-muted-foreground text-center animate-fade-in">
                Your log has been saved. You're doing a great job tracking your health. 💜
              </p>
            )}
          </CardContent>
        </Card>

        {/* Weekly Summary */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg">This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 text-center">
              {weekLog.map((d) => {
                const max = Math.max(d.pain, d.bloating, d.mood, d.spotting);
                const ind = getIndicator(max);
                return (
                  <div key={d.day} className="space-y-1">
                    <span className="text-[10px] text-muted-foreground">{d.day}</span>
                    <div className={`h-8 rounded-lg ${ind.color.split(" ")[0]} opacity-70`} />
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Overall a steady week. Remember, mild symptoms are very common during stimulation. 🌿
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Symptoms;
