"use server";

import { EMAIL_PLUNK_API_KEY } from "@/lib/env";

export const sendNotificationEmail = async (email: string, message: string) => {
    if (!EMAIL_PLUNK_API_KEY) {
        throw new Error("EMAIL_PLUNK_API_KEY is not set");
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${EMAIL_PLUNK_API_KEY}`,
        },
        body: `{"to":"tezaalfian2916@gmail.com","subject":"New Email From ${email}","body":"${message}","subscribed":true,"reply":"${email}","headers":{}}`,
    };

    await fetch("https://api.useplunk.com/v1/send", options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
};