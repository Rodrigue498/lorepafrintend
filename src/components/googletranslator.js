import React, { useEffect } from "react";
import internet from "../assets/internet.png";

const GoogleTranslate = () => {
    useEffect(() => {
        // Suppress "Script error" in dev caused by Google iframe
        const handleGlobalError = (e) => {
            if (e.message === "Script error.") {
                e.preventDefault();
                return false;
            }
        };
        window.addEventListener("error", handleGlobalError);

        const addGoogleTranslateScript = () => {
            if (document.getElementById("google-translate-script")) return;

            const script = document.createElement("script");
            script.id = "google-translate-script";
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);

            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    { pageLanguage: "en", autoDisplay: false },
                    "google_translate_element"
                );
            };
        };

        const setLanguageToFrench = () => {
            try {
                const select = document.querySelector("select.goog-te-combo");
                if (select) {
                    select.value = "fr";
                    select.dispatchEvent(new Event("change"));
                    return true;
                }
            } catch (error) {
                console.error("Error setting language to French:", error);
            }
            return false;
        };

        addGoogleTranslateScript();

        // Wait until the Google Translate dropdown appears
        const interval = setInterval(() => {
            const changed = setLanguageToFrench();
            if (changed) clearInterval(interval);
        }, 1000);

        return () => {
            clearInterval(interval);
            window.removeEventListener("error", handleGlobalError);
        };
    }, []);

    const changeLanguage = (lang) => {
        try {
            const select = document.querySelector("select.goog-te-combo");
            if (select) {
                select.value = lang;
                select.dispatchEvent(new Event("change"));
            }
        } catch (error) {
            console.error("Error changing language:", error);
        }
    };

    return (
        <div className="relative">
            <img
                src={internet}
                alt="Internet Icon"
                className="h-10 w-10 cursor-pointer"
                onClick={() => {
                    const menu = document.getElementById("lang-options");
                    if (menu) menu.classList.toggle("hidden");
                }}
            />

            <div
                id="lang-options"
                className="w-48 h-48 absolute top-12 right-0 bg-white shadow-md rounded p-2 hidden z-50"
            >
                <button
                    onClick={() => changeLanguage("fr")}
                    className="block px-4 py-1 hover:bg-gray-100 w-full text-left text-lg"
                >
                    French
                </button>
                <button
                    onClick={() => changeLanguage("en")}
                    className="block px-4 py-1 hover:bg-gray-100 w-full text-left text-lg"
                >
                    English
                </button>
                <button
                    onClick={() => changeLanguage("es")}
                    className="block px-4 py-1 hover:bg-gray-100 w-full text-left text-lg"
                >
                    Spanish
                </button>
                <button
                    onClick={() => changeLanguage("zh-CN")}
                    className="block px-4 py-1 hover:bg-gray-100 w-full text-left text-lg"
                >
                    Chinese
                </button>
            </div>

            {/* Hidden Google Translate dropdown */}
            <div id="google_translate_element" className="hidden" />
        </div>
    );
};

export default GoogleTranslate;
