'use client';

import { useState } from "react";
import { sendNotificationEmail } from "./action";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Form() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({
        email: "",
        message: "",
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                sendNotificationEmail(message.email, message.message)
                    .then(() => {
                        setMessage({
                            email: "",
                            message: "",
                        });
                        toast({
                            title: "Message sent",
                            description: "I'll get back to you as soon as possible.",
                        });
                    })
                    .catch((e) => {
                        toast({
                            title: "Failed to send message",
                            description: e.message,
                            variant: "destructive",
                        })
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }}
            className="flex flex-col gap-4 border-t pt-5 border-foreground/5"
        >
            <Input
                value={message.email}
                onChange={(e) => {
                    setMessage({ ...message, email: e.target.value });
                }}
                type="email"
                required
                placeholder="Your email"
            />
            <Textarea
                value={message.message}
                onChange={(e) => {
                    setMessage({ ...message, message: e.target.value });
                }}
                required
                placeholder="Your message"
            />
            <Button
                disabled={loading}
                className="w-max"
            >
                {loading ? "Sending..." : "Send Message"}
            </Button>
        </form>
    )
}