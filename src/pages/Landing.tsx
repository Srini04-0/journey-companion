import { Heart, Calendar, MessageCircle, Shield, ArrowRight, Brain, Users, Stethoscope, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const features = [
  {
    icon: Brain,
    title: "AI Emotional Support",
    description: "A caring AI companion that listens, reassures, and suggests coping strategies tailored to your journey.",
    bg: "bg-ivf-lavender",
  },
  {
    icon: Calendar,
    title: "Smart Medication Tracking",
    description: "Gentle, timely reminders so you never miss a dose. Confirmation at your own pace.",
    bg: "bg-ivf-blue",
  },
  {
    icon: Users,
    title: "Partner Care Mode",
    description: "Opt-in support so your partner knows how to help — with full privacy control.",
    bg: "bg-ivf-pink",
  },
  {
    icon: Stethoscope,
    title: "Secure Doctor Connect",
    description: "Message your clinic, share reports, and schedule consultations — all in one private space.",
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
        <div className="flex items-center gap-2">
          <ThemeToggle />
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
          <Sparkles className="h-4 w-4 text-primary" />
          AI-powered companion for your IVF journey
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
          You Are Not Alone in Your{" "}
          <span className="text-primary">IVF Journey</span> 💛
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          A calm, intelligent companion designed to help you feel informed,
          empowered, and cared for — every single day. Built with empathy and privacy at its core.
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
          <Button size="lg" variant="ghost" asChild className="rounded-full text-base px-8">
            <a href="#features">Learn More</a>
          </Button>
        </div>
      </section>

      {/* Illustration section */}
      <section className="px-6 pb-12 max-w-3xl mx-auto">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-ivf-lavender/50 via-ivf-pink/30 to-ivf-blue/40 overflow-hidden">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-ivf-pink flex items-center justify-center animate-pulse-gentle">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="w-16 h-16 rounded-full bg-ivf-blue flex items-center justify-center animate-pulse-gentle" style={{ animationDelay: "1s" }}>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </div>
            <p className="font-display text-lg font-semibold text-foreground mb-1">Support for both of you</p>
            <p className="text-sm text-muted-foreground">Designed for patients and their partners, with privacy and consent at every step.</p>
          </CardContent>
        </Card>
      </section>

      {/* Features */}
      <section id="features" className="px-6 pb-20 max-w-4xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-center text-foreground mb-8">
          How BloomIVF Supports You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <Card
              key={f.title}
              className="border-0 shadow-md hover:shadow-lg transition-shadow animate-fade-in"
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

      {/* Privacy banner */}
      <section className="px-6 pb-16 max-w-3xl mx-auto">
        <Card className="border-0 shadow-md bg-ivf-mint/40">
          <CardContent className="flex items-center gap-4 p-6">
            <Shield className="h-8 w-8 text-ivf-safe shrink-0" />
            <div>
              <p className="font-display font-semibold text-foreground">Built with empathy and privacy at its core</p>
              <p className="text-sm text-muted-foreground mt-1">Your data is encrypted and never shared. You control what your partner and clinic can see.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-muted-foreground border-t bg-card/50">
        <p>Made with 💜 for those on the IVF journey</p>
      </footer>
    </div>
  );
};

export default Landing;
