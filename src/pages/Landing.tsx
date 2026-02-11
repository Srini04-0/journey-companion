import { Heart, Calendar, MessageCircle, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Calendar,
    title: "Treatment Timeline",
    description: "Track every step of your IVF journey with a gentle, visual timeline.",
    bg: "bg-ivf-blue",
  },
  {
    icon: Heart,
    title: "Emotional Support",
    description: "Daily check-ins and an AI companion that truly listens.",
    bg: "bg-ivf-pink",
  },
  {
    icon: MessageCircle,
    title: "Medication Reminders",
    description: "Never miss a dose with friendly, calm reminders.",
    bg: "bg-ivf-lavender",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Your data stays yours. Always private, always protected.",
    bg: "bg-ivf-mint",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ivf-lavender via-background to-ivf-pink/30">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <Heart className="h-7 w-7 text-primary fill-primary/20" />
          <span className="font-display text-xl font-bold text-foreground">BloomIVF</span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild className="rounded-full">
            <Link to="/login?signup=true">Sign Up</Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-20 max-w-3xl mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur rounded-full px-4 py-1.5 text-sm text-muted-foreground mb-6 border">
          <Heart className="h-4 w-4 text-primary" />
          Your companion through every step
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
          You are not alone in your{" "}
          <span className="text-primary">IVF journey</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          A calm, supportive companion designed to help you feel informed,
          empowered, and cared for — every single day.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button size="lg" asChild className="rounded-full text-base px-8">
            <Link to="/login?signup=true">
              Get Started <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="rounded-full text-base px-8">
            <Link to="/login">I have an account</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <Card
              key={f.title}
              className="border-0 shadow-md hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardContent className="flex gap-4 p-5">
                <div className={`${f.bg} rounded-2xl p-3 shrink-0`}>
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-muted-foreground border-t bg-card/50">
        <p>Made with 💜 for those on the IVF journey</p>
      </footer>
    </div>
  );
};

export default Landing;
