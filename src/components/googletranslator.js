import React, { useEffect } from "react";
import internet from "../assets/internet.png";

const GoogleTranslate = () => {
    useEffect(() => {
        const addScript = () => {
            if (window.googleTranslateElementInit) return;

            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "en",
                        includedLanguages: "en,es,zh-CN,fr",
                        autoDisplay: false,
                    },
                    "google_translate_element"
                );
            };

            const script = document.createElement("script");
            script.src =
                "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
        };

        addScript();
    }, []);

    const changeLanguage = (lang) => {
        const select = document.querySelector("select.goog-te-combo");
        if (select) {
            select.value = lang;
            select.dispatchEvent(new Event("change"));
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
                className="w-48 h-48 absolute top-12 right-0 bg-white shadow-md rounded p-2 hidden"
            >
                <button
                    onClick={() => changeLanguage("fr")}
                    className="block px-4 py-1 hover:bg-gray-100 w-full h-1/4 text-left text-lg"
                >
                    French
                </button>
                <button
                    onClick={() => changeLanguage("en")}
                    className="block px-4 py-1 hover:bg-gray-100 h-1/4 w-full text-left text-lg"
                >
                    English
                </button>
                <button
                    onClick={() => changeLanguage("es")}
                    className="block px-4 py-1 hover:bg-gray-100 h-1/4 w-full text-left text-lg"
                >
                    Spanish
                </button>
                <button
                    onClick={() => changeLanguage("zh-CN")}
                    className="block px-4 py-1 hover:bg-gray-100 h-1/4 w-full text-left text-lg"
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
