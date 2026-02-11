import { useState } from "react";
import { Send, Paperclip, User, Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppLayout from "@/components/AppLayout";

type Msg = { from: "patient" | "doctor"; text: string; time: string };

const mockThread: Msg[] = [
  { from: "doctor", text: "Hi Sarah, your Day 6 scan looked great. Follicles are developing well.", time: "Yesterday, 3:15 PM" },
  { from: "patient", text: "Thank you! I've been feeling some mild bloating — is that normal?", time: "Yesterday, 4:02 PM" },
  { from: "doctor", text: "Yes, mild bloating is very common during stimulation. Stay hydrated and rest when you can. If it becomes severe, let us know right away.", time: "Yesterday, 4:20 PM" },
  { from: "patient", text: "That's reassuring, thank you Dr. Patel.", time: "Yesterday, 4:25 PM" },
];

const Clinic = () => {
  const [messages, setMessages] = useState<Msg[]>(mockThread);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "patient", text: input, time: "Just now" }]);
    setInput("");
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-10rem)] md:h-[calc(100vh-6rem)] animate-fade-in">
        <div className="mb-4">
          <h1 className="font-display text-2xl font-bold text-foreground">Clinic Messages</h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <p className="text-sm text-muted-foreground">Dr. Amara Patel — Fertility Clinic</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "patient" ? "justify-end" : "justify-start"}`}>
              <div className="max-w-[80%]">
                <div className="flex items-center gap-1.5 mb-1">
                  {msg.from === "doctor" ? (
                    <Stethoscope className="h-3 w-3 text-primary" />
                  ) : (
                    <User className="h-3 w-3 text-muted-foreground" />
                  )}
                  <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                </div>
                <div
                  className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.from === "patient"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-card shadow-sm border rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload hint */}
        <Card className="border-0 bg-ivf-warm/50 mt-3 mb-2">
          <CardContent className="flex items-center gap-3 p-3">
            <Paperclip className="h-4 w-4 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">You can share reports and prescriptions with your clinic securely.</p>
          </CardContent>
        </Card>

        {/* Input */}
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full h-11 w-11 shrink-0">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Message your clinic…"
            className="rounded-full h-11"
          />
          <Button size="icon" className="rounded-full h-11 w-11 shrink-0" onClick={send}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Clinic;
