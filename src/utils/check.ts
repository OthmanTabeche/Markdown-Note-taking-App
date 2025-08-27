import axios from "axios";
import logger from "./logger.js";

interface Match {
    message: string;
    offset: number;
    length: number;
    replacements: { value: string }[];
}

async function check(content: string) {
    try {
        const response = await axios.post(
            "https://api.languagetool.org/v2/check",
            new URLSearchParams({
                text: content,
                language: "en"
            }),
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );

        const matches: Match[] = response.data.matches;

        if (matches.length === 0) {
            return { correctedText: content, errors: [] };
        }

        const errors = matches.map(match => ({
            message: match.message,
            incorrect: content.substring(match.offset, match.length),
            suggestions: match.replacements.map(r => r.value)
        }));

        return { errors };
    } catch (error: any) {
        logger.error("Error:", error.message);
        return null;
    }
}

export default check