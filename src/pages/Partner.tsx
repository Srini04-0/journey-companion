import { Heart, MessageCircle, Coffee, Clock, Shield, Calendar, Activity, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/components/AppLayout";

const suggestions = [
  { icon: MessageCircle, title: "Send a kind message", description: "A simple 'I'm thinking of you' can mean the world today.", bg: "bg-ivf-pink" },
  { icon: Coffee, title: "Quiet time together", description: "Sometimes just being present — no words needed — is the greatest comfort.", bg: "bg-ivf-lavender" },
  { icon: Clock, title: "Be patient & understanding", description: "Hormones can make emotions intense. Your patience is a gift right now.", bg: "bg-ivf-blue" },
  { icon: Heart, title: "Small act of care", description: "Prepare her favorite tea, a warm blanket, or a gentle shoulder rub.", bg: "bg-ivf-mint" },
  { icon: Calendar, title: "Offer to attend appointment", description: "Having you there at the next scan could be really meaningful.", bg: "bg-ivf-peach" },
];

const Partner = () => {
  return (
    <AppLayout>
      <div className="space-y-5 animate-fade-in">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Partner Support 💞</h1>
          <p className="text-muted-foreground mt-1">Small gestures that make a big difference</p>
        </div>

        {/* Emotional Support Card */}
        <Card className="border-0 shadow-md bg-gradient-to-br from-ivf-lavender/60 to-ivf-pink/40">
          <CardContent className="p-5">
            <p className="font-display font-semibold text-foreground mb-1">💞 Emotional Support Suggested Today</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              She may need reassurance today. A calm, supportive presence can help her feel safe and cared for.
            </p>
          </CardContent>
        </Card>

        {/* Limited Health Overview */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" /> Health Overview
            </CardTitle>
            <p className="text-[11px] text-muted-foreground">Only showing what she's chosen to share</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Current phase</span>
              <Badge variant="secondary" className="rounded-full">Stimulation — Day 8</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Next appointment</span>
              <span className="text-xs text-muted-foreground">Thu, Feb 13 · 10:30 AM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Emotional status</span>
              <Badge variant="outline" className="rounded-full bg-ivf-mint/50">Mostly Calm</Badge>
            </div>
            <p className="text-[11px] text-muted-foreground pt-2 border-t border-border">
              Detailed medical data is not shown. She controls what's visible here.
            </p>
          </CardContent>
        </Card>

        {/* Action Suggestions */}
        <div className="space-y-3">
          <h2 className="font-display text-base font-semibold text-foreground">Ways to Support</h2>
          {suggestions.map((s) => (
            <Card key={s.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="flex gap-4 p-4">
                <div className={`${s.bg} rounded-2xl p-3 shrink-0`}>
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{s.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{s.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Privacy Notice */}
        <Card className="border-0 bg-ivf-warm/50">
          <CardContent className="flex items-start gap-3 p-4">
            <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">Privacy & Consent</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This page is fully opt-in. Your partner controls what information is visible. Detailed health data is never shared without explicit consent.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Partner;
