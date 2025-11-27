"use client";

import React from "react";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import "@heroui/input";
import { motion } from "framer-motion";

import { useLocale } from "@/utils/i18n";

export const ContactSection: React.FC = () => {
    const { t } = useLocale();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation
        if (!name || !email || !message) {
            window.alert(t("contact_fill_all"));

            return;
        }

        // Placeholder: send to backend or API
        window.alert(
            t("contact_sent") +
            "\nThank you — I will reply at hoana5k44nknd@gmail.com (placeholder).",
        );
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <motion.section
            className="w-full max-w-2xl my-16 px-4"
            id="contact"
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-1 bg-cyan-500" />
                <h2 className="text-2xl font-semibold">{t("contact_title")}</h2>
            </div>

            <form className="grid gap-4" onSubmit={onSubmit}>
                <Input
                    placeholder={t("contact_name")}
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                />
                <Input
                    placeholder={t("contact_email")}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <Textarea
                    className="w-full"
                    placeholder={t("contact_message")}
                    value={message}
                    onChange={(e) => setMessage(e.currentTarget.value)}
                />
                <Button color="primary" type="submit">
                    {t("contact_send")}
                </Button>
            </form>
        </motion.section>
    );
};

export default ContactSection;
