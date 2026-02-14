import { useState } from "react";
import { Send, Heart, Wind, Sparkles, Info, Users, Smile } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppLayout from "@/components/AppLayout";

type Message = { from: "bot" | "user"; text: string };

const initial: Message[] = [
  { from: "bot", text: "Hi Sarah 💜 I'm your AI companion. I'm here to listen, support, and help you feel calm." },
  { from: "bot", text: "Whatever you're feeling right now is completely normal. You're not alone in this." },
];

const suggestions = [
  { icon: Wind, label: "Breathing exercise", response: "Let's try a calming breathing exercise together.\n\n🫧 Breathe in for 4 counts…\n🫧 Hold for 4…\n🫧 Slowly out for 6.\n\nRepeat 3 times. You're doing wonderfully. 🌬️" },
  { icon: Sparkles, label: "Positive affirmation", response: "Here's something for you: 'My body is strong and capable. I trust the process and give myself grace.' 🌸" },
  { icon: Heart, label: "I feel anxious", response: "Anxiety is such a common feeling during IVF. It shows how much you care. Try to be gentle with yourself today — one moment at a time. 💛" },
  { icon: Smile, label: "Relaxation tips", response: "Here are a few gentle ideas:\n\n🌿 Take a warm bath with lavender\n📖 Read a comforting book\n🎵 Listen to calming music\n☕ Make your favorite warm drink\n\nSmall comforts matter. 💜" },
  { icon: Users, label: "Tell my partner", response: "Would you like me to let your partner know you could use some extra support today? I can send a gentle notification with just the right words. 💞" },
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initial);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setTimeout(() => {
      const match = suggestions.find((s) => text.toLowerCase().includes(s.label.toLowerCase()));
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: match?.response || "Thank you for sharing that with me. I'm here for you, always. 💜\n\nRemember, this is emotional support — not a medical diagnosis. Your feelings are valid, and your strength is remarkable." },
      ]);
    }, 800);
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-10rem)] md:h-[calc(100vh-6rem)] animate-fade-in">
        <div className="mb-4">
          <h1 className="font-display text-2xl font-bold text-foreground">Emotional Support 💬</h1>
          <p className="text-muted-foreground text-sm mt-1">A safe space to share and breathe 🌿</p>
        </div>

        {/* Suggestion cards */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
          {suggestions.map((s) => (
            <button
              key={s.label}
              onClick={() => sendMessage(s.label)}
              className="shrink-0 flex items-center gap-2 bg-ivf-lavender/60 hover:bg-ivf-lavender rounded-full px-4 py-2 text-sm text-foreground transition-colors"
            >
              <s.icon className="h-4 w-4 text-primary" />
              {s.label}
            </button>
          ))}
        </div>

        {/* Breathing Animation Card */}
        <Card className="border-0 bg-gradient-to-r from-ivf-lavender/40 to-ivf-blue/30 mb-4">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="w-12 h-12 rounded-full bg-ivf-lavender flex items-center justify-center animate-breathe">
              <span className="text-xl">🫧</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Quick calm</p>
              <p className="text-xs text-muted-foreground">Breathe with the bubble — in… hold… out…</p>
            </div>
          </CardContent>
        </Card>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                  msg.from === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-card shadow-sm border rounded-bl-md"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground mt-3 mb-2">
          <Info className="h-3.5 w-3.5 shrink-0" />
          This is emotional support, not a medical diagnosis. Always consult your doctor.
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Share what's on your mind…"
            className="rounded-full h-11"
          />
          <Button size="icon" className="rounded-full h-11 w-11 shrink-0" onClick={() => sendMessage(input)}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Chat;
