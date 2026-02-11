import { useState } from "react";
import { Pill, Calendar, Heart, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";

type Tab = "all" | "meds" | "appointments" | "support";

const notifications = [
  { type: "meds" as const, icon: Pill, title: "Evening medication reminder", desc: "Time for Cetrotide 0.25mg — you're almost done for today 🌙", time: "2 hours ago", bg: "bg-ivf-lavender" },
  { type: "appointments" as const, icon: Calendar, title: "Upcoming scan", desc: "Ultrasound with Dr. Patel on Thursday at 10:30 AM", time: "5 hours ago", bg: "bg-ivf-blue" },
  { type: "support" as const, icon: Heart, title: "Daily check-in", desc: "How are you feeling today? Take a moment to reflect 💛", time: "8 hours ago", bg: "bg-ivf-pink" },
  { type: "meds" as const, icon: Pill, title: "Morning medications taken", desc: "Great job completing your morning doses! ✓", time: "Yesterday", bg: "bg-ivf-mint" },
  { type: "appointments" as const, icon: Calendar, title: "Appointment confirmed", desc: "Your egg retrieval consultation is scheduled for next Monday.", time: "2 days ago", bg: "bg-ivf-blue" },
  { type: "support" as const, icon: Heart, title: "Partner sent encouragement", desc: "Your partner is thinking of you today 💜", time: "2 days ago", bg: "bg-ivf-pink" },
];

const tabs: { key: Tab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "meds", label: "Medications" },
  { key: "appointments", label: "Appointments" },
  { key: "support", label: "Support" },
];

const Notifications = () => {
  const [tab, setTab] = useState<Tab>("all");
  const filtered = tab === "all" ? notifications : notifications.filter((n) => n.type === tab);

  return (
    <AppLayout>
      <div className="space-y-5 animate-fade-in">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
            <Bell className="h-6 w-6 text-primary" /> Notifications
          </h1>
          <p className="text-muted-foreground mt-1">Stay gently informed — no stress 🌿</p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {tabs.map((t) => (
            <Button
              key={t.key}
              variant={tab === t.key ? "default" : "outline"}
              className="rounded-full text-sm shrink-0"
              size="sm"
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </Button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((n, i) => (
            <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex gap-3 p-4">
                <div className={`${n.bg} rounded-2xl p-2.5 shrink-0`}>
                  <n.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{n.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{n.desc}</p>
                  <p className="text-[10px] text-muted-foreground/60 mt-1">{n.time}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Notifications;
