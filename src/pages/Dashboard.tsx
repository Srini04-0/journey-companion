import { useState } from "react";
import { Check, Calendar, Clock, Smile, Frown, Meh, AlertCircle, CloudRain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import AppLayout from "@/components/AppLayout";

const timelineSteps = [
  { label: "Stimulation", active: true, completed: true },
  { label: "Egg Retrieval", active: true, completed: false },
  { label: "Embryo Transfer", active: false, completed: false },
  { label: "Two-Week Wait", active: false, completed: false },
];

const todayMeds = [
  { name: "Gonal-F 150 IU", time: "8:00 AM", taken: true },
  { name: "Menopur 75 IU", time: "8:00 AM", taken: true },
  { name: "Cetrotide 0.25mg", time: "8:00 PM", taken: false },
];

const moods = [
  { label: "Calm", icon: Smile, color: "bg-ivf-mint" },
  { label: "Low", icon: Meh, color: "bg-ivf-blue" },
  { label: "Anxious", icon: AlertCircle, color: "bg-ivf-peach" },
  { label: "Sad", icon: Frown, color: "bg-ivf-lavender" },
  { label: "Overwhelmed", icon: CloudRain, color: "bg-ivf-pink" },
];

const Dashboard = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [meds, setMeds] = useState(todayMeds);

  const toggleMed = (idx: number) => {
    setMeds((prev) => prev.map((m, i) => (i === idx ? { ...m, taken: !m.taken } : m)));
  };

  const completedSteps = timelineSteps.filter((s) => s.completed).length;

  return (
    <AppLayout>
      <div className="space-y-5 animate-fade-in">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Good morning, Sarah 💜</h1>
          <p className="text-muted-foreground mt-1">Day 8 of your stimulation cycle</p>
        </div>

        {/* Timeline */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg">Your Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-3">
              {timelineSteps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                      step.completed
                        ? "bg-primary text-primary-foreground"
                        : step.active
                        ? "bg-ivf-lavender text-primary border-2 border-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.completed ? <Check className="h-4 w-4" /> : i + 1}
                  </div>
                  <span className="text-[10px] text-center mt-1 text-muted-foreground leading-tight max-w-[70px]">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
            <Progress value={(completedSteps / timelineSteps.length) * 100} className="h-2 rounded-full" />
            <p className="text-xs text-muted-foreground mt-2 text-center">
              You're doing beautifully — one step at a time 🌸
            </p>
          </CardContent>
        </Card>

        {/* Today's Medications */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> Today's Medications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {meds.map((med, i) => (
              <button
                key={i}
                onClick={() => toggleMed(i)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                  med.taken ? "bg-ivf-mint/60" : "bg-ivf-warm hover:bg-ivf-peach/40"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    med.taken ? "bg-primary border-primary" : "border-muted-foreground/30"
                  }`}
                >
                  {med.taken && <Check className="h-3.5 w-3.5 text-primary-foreground" />}
                </div>
                <div className="text-left flex-1">
                  <p className={`text-sm font-medium ${med.taken ? "line-through text-muted-foreground" : "text-foreground"}`}>
                    {med.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{med.time}</p>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Next Appointment */}
        <Card className="border-0 shadow-md bg-ivf-blue/40">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="bg-primary/10 rounded-2xl p-3">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Next Ultrasound Scan</p>
              <p className="text-xs text-muted-foreground">Thursday, Feb 13 · 10:30 AM</p>
              <p className="text-xs text-muted-foreground">Dr. Amara Patel — Fertility Clinic</p>
            </div>
          </CardContent>
        </Card>

        {/* Emotional Check-in */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg">How are you feeling today?</CardTitle>
            <p className="text-xs text-muted-foreground">There's no wrong answer. Just check in with yourself 💛</p>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              {moods.map((mood) => (
                <Button
                  key={mood.label}
                  variant={selectedMood === mood.label ? "default" : "outline"}
                  className={`rounded-full text-sm gap-1.5 ${
                    selectedMood === mood.label ? "" : mood.color + " border-0 hover:opacity-80"
                  }`}
                  onClick={() => setSelectedMood(mood.label)}
                >
                  <mood.icon className="h-4 w-4" />
                  {mood.label}
                </Button>
              ))}
            </div>
            {selectedMood && (
              <p className="text-sm text-muted-foreground mt-3 animate-fade-in">
                Thank you for sharing. Remember, whatever you feel is completely valid. 💜
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
