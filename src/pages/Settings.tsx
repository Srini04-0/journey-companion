import { Bell, Brain, Users, Shield, ChevronRight, AlertTriangle, Download, Lock, Fingerprint } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/components/AppLayout";
import ThemeToggle from "@/components/ThemeToggle";

const Settings = () => {
  return (
    <AppLayout>
      <div className="space-y-5 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground mt-1">Manage your preferences and privacy 🔒</p>
          </div>
          <ThemeToggle />
        </div>

        {/* Reminders */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base flex items-center gap-2">
              <Bell className="h-4 w-4 text-primary" /> Reminders
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Medication reminders", desc: "Get notified when it's time for your medications", default: true },
              { label: "Appointment reminders", desc: "Reminders before your scheduled appointments", default: true },
              { label: "Emotional check-in", desc: "Daily gentle prompts to check in with yourself", default: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <Switch defaultChecked={item.default} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI Features */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base flex items-center gap-2">
              <Brain className="h-4 w-4 text-primary" /> AI Features
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "AI emotional support", desc: "Get supportive messages and suggestions", default: true },
              { label: "Smart symptom insights", desc: "AI-powered symptom pattern analysis", default: true },
              { label: "AI health insights", desc: "Personalized wellness observations on dashboard", default: true },
              { label: "Mood pattern detection", desc: "AI detects emotional trends and suggests coping", default: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <Switch defaultChecked={item.default} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Partner Access */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" /> Partner Access
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Enable partner support</p>
                <p className="text-xs text-muted-foreground">Allow your partner to see emotional support suggestions</p>
              </div>
              <Switch defaultChecked={true} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Share mood check-ins</p>
                <p className="text-xs text-muted-foreground">Let your partner see your daily mood (general only)</p>
              </div>
              <Switch defaultChecked={false} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Share appointment dates</p>
                <p className="text-xs text-muted-foreground">Partner can see upcoming appointment dates</p>
              </div>
              <Switch defaultChecked={true} />
            </div>
          </CardContent>
        </Card>

        {/* Emergency Alerts */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-primary" /> Emergency Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Enable emergency support</p>
                <p className="text-xs text-muted-foreground">Quick contact for clinic and partner when needed</p>
              </div>
              <Switch defaultChecked={true} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Share location in alerts</p>
                <p className="text-xs text-muted-foreground">Include live location when contacting clinic</p>
              </div>
              <Switch defaultChecked={false} />
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" /> Privacy & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-ivf-mint/50 rounded-xl p-3 mb-2">
              <Lock className="h-4 w-4 shrink-0 text-ivf-safe" />
              <span>All your data is encrypted end-to-end. We never share your information.</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <Fingerprint className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">Two-factor authentication</span>
              </div>
              <Badge variant="outline" className="text-xs rounded-full">Setup</Badge>
            </div>
            {["Privacy Policy", "Terms of Service", "Data Export", "Download Medical Records", "Delete Account"].map((item) => (
              <button
                key={item}
                className="w-full flex items-center justify-between py-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <span className="flex items-center gap-2">
                  {item === "Data Export" || item === "Download Medical Records" ? <Download className="h-3.5 w-3.5" /> : null}
                  {item}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
            ))}
          </CardContent>
        </Card>

        <p className="text-xs text-center text-muted-foreground pb-4">
          BloomIVF v2.0 · Made with 💜 for your journey
        </p>
      </div>
    </AppLayout>
  );
};

export default Settings;
