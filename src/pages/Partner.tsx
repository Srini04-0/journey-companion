import { Heart, MessageCircle, Coffee, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AppLayout from "@/components/AppLayout";

const suggestions = [
  { icon: MessageCircle, title: "Send a kind message", description: "A simple 'I'm thinking of you' can mean the world today.", bg: "bg-ivf-pink" },
  { icon: Coffee, title: "Quiet time together", description: "Sometimes just being present — no words needed — is the greatest comfort.", bg: "bg-ivf-lavender" },
  { icon: Clock, title: "Be patient & understanding", description: "Hormones can make emotions intense. Your patience is a gift right now.", bg: "bg-ivf-blue" },
  { icon: Heart, title: "Small act of care", description: "Prepare her favorite tea, a warm blanket, or a gentle shoulder rub.", bg: "bg-ivf-mint" },
];

const Partner = () => {
  return (
    <AppLayout>
      <div className="space-y-5 animate-fade-in">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Partner Support</h1>
          <p className="text-muted-foreground mt-1">Small gestures that make a big difference 💛</p>
        </div>

        {/* Emotional Support Card */}
        <Card className="border-0 shadow-md bg-gradient-to-br from-ivf-lavender/60 to-ivf-pink/40">
          <CardContent className="p-5">
            <p className="font-display font-semibold text-foreground mb-1">Emotional Support Suggested Today</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sarah may be feeling anxious today. A calm, reassuring presence can help her feel safe and supported.
            </p>
          </CardContent>
        </Card>

        {/* Action Suggestions */}
        <div className="space-y-3">
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
              <p className="text-sm font-medium text-foreground">Privacy First</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This page is opt-in. Your partner has chosen to share limited emotional context with you. Detailed health data is never shared.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Partner;
