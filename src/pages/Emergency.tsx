import { useState } from "react";
import { Shield, Phone, Users, MessageCircle, MapPin, AlertCircle, Activity, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";

const Emergency = () => {
  const [contacted, setContacted] = useState<string | null>(null);

  return (
    <AppLayout>
      <div className="space-y-5 animate-fade-in">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Need Support?</h1>
          <p className="text-muted-foreground mt-1">You're safe. Let's help you get the right support calmly 💛</p>
        </div>

        {/* Current Status */}
        <Card className="border-0 shadow-md bg-ivf-lavender/30">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base">Your Current Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">Phase: <span className="font-medium">Stimulation — Day 8</span></span>
            </div>
            <div className="flex items-center gap-3">
              <Activity className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">Last symptoms: <span className="font-medium">Mild bloating, Normal pain</span></span>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            className="w-full rounded-xl h-14 text-base justify-start gap-4"
            variant={contacted === "clinic" ? "default" : "outline"}
            onClick={() => setContacted("clinic")}
          >
            <div className="bg-ivf-blue rounded-xl p-2">
              <Phone className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="font-medium">Contact Clinic</p>
              <p className="text-xs opacity-80">Reach Dr. Patel's office directly</p>
            </div>
          </Button>

          <Button
            className="w-full rounded-xl h-14 text-base justify-start gap-4"
            variant={contacted === "partner" ? "default" : "outline"}
            onClick={() => setContacted("partner")}
          >
            <div className="bg-ivf-pink rounded-xl p-2">
              <Users className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="font-medium">Notify Partner</p>
              <p className="text-xs opacity-80">Let them know you need support</p>
            </div>
          </Button>

          <Button
            className="w-full rounded-xl h-14 text-base justify-start gap-4"
            variant={contacted === "callback" ? "default" : "outline"}
            onClick={() => setContacted("callback")}
          >
            <div className="bg-ivf-peach rounded-xl p-2">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="font-medium">Request Callback</p>
              <p className="text-xs opacity-80">Clinic will call you back shortly</p>
            </div>
          </Button>
        </div>

        {contacted && (
          <Card className="border-0 shadow-md bg-ivf-mint/40 animate-fade-in">
            <CardContent className="p-4 text-center">
              <p className="text-sm font-medium text-foreground">
                {contacted === "clinic" && "📞 Connecting to Dr. Patel's clinic..."}
                {contacted === "partner" && "💜 Your partner has been notified. They'll be with you soon."}
                {contacted === "callback" && "📱 Callback requested. The clinic will reach you within 15 minutes."}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Shared Info */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" /> What's shared in an alert
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>✓ Current IVF phase</p>
            <p>✓ Recent symptoms logged</p>
            <p className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> Live location (only if you enable it below)
            </p>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <span className="text-sm text-foreground">Share live location</span>
              <Button variant="outline" size="sm" className="rounded-full text-xs">
                Enable
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Safety note */}
        <div className="flex items-start gap-2 text-xs text-muted-foreground bg-ivf-warm rounded-xl p-3">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <span>If you are experiencing a medical emergency, please call emergency services (911) immediately. This feature is for non-emergency IVF support.</span>
        </div>
      </div>
    </AppLayout>
  );
};

export default Emergency;
