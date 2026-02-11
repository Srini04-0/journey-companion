import { ReactNode } from "react";
import { Home, Pill, MessageCircle, Activity, Settings, Bell, Users, Stethoscope } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const bottomNav = [
  { to: "/dashboard", icon: Home, label: "Home" },
  { to: "/medications", icon: Pill, label: "Meds" },
  { to: "/chat", icon: MessageCircle, label: "Chat" },
  { to: "/symptoms", icon: Activity, label: "Track" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

const desktopNav = [
  { to: "/dashboard", icon: Home, label: "Dashboard" },
  { to: "/medications", icon: Pill, label: "Medications" },
  { to: "/chat", icon: MessageCircle, label: "Support Chat" },
  { to: "/symptoms", icon: Activity, label: "Symptoms" },
  { to: "/partner", icon: Users, label: "Partner" },
  { to: "/clinic", icon: Stethoscope, label: "Clinic" },
  { to: "/notifications", icon: Bell, label: "Notifications" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

const AppLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-56 border-r bg-card/50 p-4 sticky top-0 h-screen">
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold">B</span>
          </div>
          <span className="font-display text-lg font-bold text-foreground">BloomIVF</span>
        </div>
        <nav className="space-y-1 flex-1">
          {desktopNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors",
                location.pathname === item.to
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 pb-20 md:pb-6 px-4 pt-6 md:px-8 max-w-2xl mx-auto w-full">
        {children}
      </main>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur border-t z-50">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
          {bottomNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "flex flex-col items-center gap-0.5 text-[10px] py-1 px-3 rounded-lg transition-colors",
                location.pathname === item.to
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5", location.pathname === item.to && "text-primary")} />
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default AppLayout;
