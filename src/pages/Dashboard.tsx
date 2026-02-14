import { useState } from "react";
import { Check, Calendar, Clock, Smile, Frown, Meh, AlertCircle, CloudRain, Brain, TrendingUp, Shield, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import AppLayout from "@/components/AppLayout";
import { Link } from "react-router-dom";

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

const moodHistory = [
  { day: "Mon", mood: "Calm" },
  { day: "Tue", mood: "Low" },
  { day: "Wed", mood: "Anxious" },
  { day: "Thu", mood: "Calm" },
  { day: "Fri", mood: "Calm" },
  { day: "Sat", mood: "Low" },
  { day: "Sun", mood: "Calm" },
];

const moodColorMap: Record<string, string> = {
  Calm: "bg-ivf-mint",
  Low: "bg-ivf-blue",
  Anxious: "bg-ivf-peach",
  Sad: "bg-ivf-lavender",
  Overwhelmed: "bg-ivf-pink",
};

const aiInsights = [
  { label: "Recovery pattern", status: "Stable", color: "text-ivf-safe", bg: "bg-ivf-mint" },
  { label: "Stress levels", status: "Needs Rest", color: "text-ivf-monitor", bg: "bg-ivf-peach" },
  { label: "Overall wellbeing", status: "Stable", color: "text-ivf-safe", bg: "bg-ivf-mint" },
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
            <CardTitle className="font-display text-lg">🌷 Your Journey</CardTitle>
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

        {/* AI Insight Card */}
        <Card className="border-0 shadow-md bg-gradient-to-br from-ivf-lavender/40 to-ivf-blue/30">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" /> AI Insights
            </CardTitle>
            <p className="text-xs text-muted-foreground">Personalized gentle insights based on your journey</p>
          </CardHeader>
          <CardContent className="space-y-2">
            {aiInsights.map((insight) => (
              <div key={insight.label} className="flex items-center justify-between py-1.5">
                <span className="text-sm text-foreground">{insight.label}</span>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${insight.bg} ${insight.color}`}>
                  {insight.status}
                </span>
              </div>
            ))}
            <p className="text-xs text-muted-foreground mt-2 pt-2 border-t border-border">
              💡 Stress levels slightly elevated. Consider rest and gentle movement today.
            </p>
          </CardContent>
        </Card>

        {/* Today's Medications */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> 💊 Today's Medications
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
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">📅 Next Ultrasound Scan</p>
              <p className="text-xs text-muted-foreground">Thursday, Feb 13 · 10:30 AM</p>
              <p className="text-xs text-muted-foreground">Dr. Amara Patel — Fertility Clinic</p>
            </div>
            <Button variant="outline" size="sm" className="rounded-full text-xs shrink-0 gap-1">
              <ExternalLink className="h-3 w-3" /> Calendar
            </Button>
          </CardContent>
        </Card>

        {/* Emotional Check-in */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg">💛 How are you feeling today?</CardTitle>
            <p className="text-xs text-muted-foreground">There's no wrong answer. Just check in with yourself</p>
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
              <div className="animate-fade-in mt-4 space-y-3">
                <p className="text-sm text-muted-foreground">
                  Thank you for sharing. Whatever you feel is completely valid. 💜
                </p>
                {selectedMood === "Anxious" || selectedMood === "Overwhelmed" ? (
                  <Card className="border bg-ivf-lavender/30">
                    <CardContent className="p-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-ivf-lavender flex items-center justify-center animate-breathe">
                        <span className="text-lg">🫧</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-foreground">Try a breathing exercise</p>
                        <Link to="/chat" className="text-xs text-primary hover:underline">Open calming support →</Link>
                      </div>
                    </CardContent>
                  </Card>
                ) : null}
              </div>
            )}

            {/* Weekly Mood Graph */}
            <div className="mt-5 pt-4 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-foreground">This week's mood</span>
              </div>
              <div className="grid grid-cols-7 gap-1.5 text-center">
                {moodHistory.map((d) => (
                  <div key={d.day} className="flex flex-col items-center gap-1">
                    <div className={`w-full h-8 rounded-lg ${moodColorMap[d.mood]} opacity-70`} />
                    <span className="text-[10px] text-muted-foreground">{d.day}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground text-center mt-2">Mostly calm this week — that's wonderful 🌿</p>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Support */}
        <Link to="/emergency">
          <Card className="border-0 shadow-md bg-ivf-pink/30 hover:bg-ivf-pink/50 transition-colors cursor-pointer">
            <CardContent className="flex items-center gap-3 p-4">
              <Shield className="h-5 w-5 text-ivf-alert shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Need urgent support?</p>
                <p className="text-xs text-muted-foreground">Calmly reach your clinic or partner if something feels wrong.</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
