import { useState } from "react";
import { Heart, Shield, ArrowLeft, User, Users, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

type Role = "patient" | "partner" | "clinic";

const roles: { key: Role; label: string; icon: typeof User; desc: string }[] = [
  { key: "patient", label: "Patient", icon: User, desc: "Track your IVF journey" },
  { key: "partner", label: "Partner", icon: Users, desc: "Support your loved one" },
  { key: "clinic", label: "Clinic / Doctor", icon: Stethoscope, desc: "Manage patient care" },
];

const Login = () => {
  const [searchParams] = useSearchParams();
  const [isSignUp, setIsSignUp] = useState(searchParams.get("signup") === "true");
  const [role, setRole] = useState<Role>("patient");
  const [useOtp, setUseOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "partner") {
      navigate("/partner");
    } else if (role === "clinic") {
      navigate("/clinic");
    } else {
      navigate("/dashboard");
    }
  };

  const handleOtpRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ivf-lavender via-background to-ivf-blue px-4 py-8">
      <div className="w-full max-w-md animate-fade-in">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-3">
              <div className="bg-ivf-lavender rounded-full p-3">
                <Heart className="h-8 w-8 text-primary fill-primary/20" />
              </div>
            </div>
            <CardTitle className="font-display text-2xl">
              {isSignUp ? "Create Your Account" : "Welcome Back"}
            </CardTitle>
            <CardDescription className="text-base">
              {isSignUp
                ? "Begin your supported IVF journey"
                : "Continue your journey with care"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Role Selection */}
            <div className="grid grid-cols-3 gap-2 mb-5">
              {roles.map((r) => (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => setRole(r.key)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl text-xs transition-all border-2 ${
                    role === r.key
                      ? "border-primary bg-primary/5 text-primary font-semibold"
                      : "border-transparent bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <r.icon className="h-5 w-5" />
                  {r.label}
                </button>
              ))}
            </div>

            {/* OTP Toggle */}
            {!isSignUp && (
              <div className="flex justify-center mb-4">
                <div className="flex bg-muted rounded-full p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => { setUseOtp(false); setOtpSent(false); }}
                    className={`px-4 py-1.5 rounded-full transition-colors ${!useOtp ? "bg-card shadow text-foreground font-medium" : "text-muted-foreground"}`}
                  >
                    Password
                  </button>
                  <button
                    type="button"
                    onClick={() => setUseOtp(true)}
                    className={`px-4 py-1.5 rounded-full transition-colors ${useOtp ? "bg-card shadow text-foreground font-medium" : "text-muted-foreground"}`}
                  >
                    OTP Login
                  </button>
                </div>
              </div>
            )}

            {useOtp && !isSignUp ? (
              /* OTP Login Flow */
              <form onSubmit={otpSent ? handleSubmit : handleOtpRequest} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp-email">Email or Phone</Label>
                  <Input id="otp-email" placeholder="you@example.com" className="rounded-xl h-11" />
                </div>
                {otpSent && (
                  <div className="space-y-2 animate-fade-in">
                    <Label>Enter verification code</Label>
                    <div className="flex justify-center">
                      <InputOTP maxLength={6}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">Code sent to your email. Check spam too!</p>
                  </div>
                )}
                <Button type="submit" className="w-full rounded-xl h-11 text-base">
                  {otpSent ? "Verify & Sign In" : "Send Code"}
                </Button>
              </form>
            ) : (
              /* Standard Login/Signup */
              <form onSubmit={handleSubmit} className="space-y-4">
                {isSignUp && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" className="rounded-xl h-11" />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" className="rounded-xl h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" className="rounded-xl h-11" />
                </div>

                <Button type="submit" className="w-full rounded-xl h-11 text-base">
                  {isSignUp ? "Create Account" : "Sign In"}
                </Button>
              </form>
            )}

            <div className="mt-4 text-center">
              <button
                onClick={() => { setIsSignUp(!isSignUp); setUseOtp(false); setOtpSent(false); }}
                className="text-sm text-primary hover:underline"
              >
                {isSignUp ? "Already have an account? Sign in" : "New here? Create an account"}
              </button>
            </div>

            {isSignUp && role === "patient" && (
              <p className="text-xs text-center text-muted-foreground mt-3">
                You can invite your partner after creating your account 💜
              </p>
            )}

            <div className="mt-5 flex items-center gap-2 justify-center text-xs text-muted-foreground bg-ivf-mint/50 rounded-xl p-3">
              <Shield className="h-4 w-4 shrink-0" />
              <span>Your data is private and secure. We never share your information.</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
