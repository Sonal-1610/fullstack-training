import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hey there! 🚗 I'm your ParkSmart assistant. Need help finding a spot? Just tell me where you're headed! 🅿️",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    try {
      const response = await fetch("https://api.lovable.ai/assistant/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_LOVABLE_API_KEY`,
        },
        body: JSON.stringify({
          assistantId: "YOUR_ASSISTANT_ID",
          message: inputValue,
          context: messages,
        }),
      });

      const data = await response.json();
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.reply || "Oops! Something went wrong 😅",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
      const aiMessage: Message = {
        id: (Date.now() + 2).toString(),
        role: "assistant",
        content: "Sorry! I couldn't fetch parking info at the moment 😔",
      };
      setMessages((prev) => [...prev, aiMessage]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          size="icon"
          variant="hero"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-strong z-50"
          onClick={() => setIsOpen(true)}
        >
          🅿️
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 max-h-[600px] bg-card rounded-xl shadow-strong flex flex-col z-50 overflow-hidden">
          <div className="flex items-center justify-between bg-primary/10 p-4">
            <h3 className="font-semibold text-lg">ParkSmart Assistant</h3>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            >
              ✖️
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-2 rounded-lg ${
                  msg.role === "assistant" ? "bg-primary/10 self-start" : "bg-success/10 self-end"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="flex gap-2 p-3 border-t border-muted-foreground/20">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button size="sm" variant="success" onClick={handleSend}>
              Send
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
