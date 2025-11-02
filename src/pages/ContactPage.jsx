import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Heading from "../components/UI/Heading";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

const ContactPage = () => {
    const { theme } = useOutletContext()
    const isDark = theme === "dark";
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.info(`Thanks, ${form.name || "Guest"}! We'll get back to you soon.`);
        alert(form.message);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section
            className={` flex flex-col items-center justify-center px-6 py-3 transition-colors duration-300 rounded-2xl ${isDark ? "bg-gray-900 text-gray-100 shadow-xl shadow-amber-500" : "bg-gray-50 text-gray-900"
                }`}
        >
            <Heading first_txt="Contact" second_txt="Us" description="We'd love to hear from you! Reach out anytime." />

            <div
                className={`w-full max-w-3xl rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 mb-2 ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
                    }`}
            >
                <div className="flex-1 space-y-4 text-center items-center justify-center">
                    <div className="flex items-center gap-3">
                        <Mail className={isDark ? "text-amber-400" : "text-amber-600"} />
                        <span>support@shoply.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className={isDark ? "text-amber-400" : "text-amber-600"} />
                        <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className={isDark ? "text-amber-400" : "text-amber-600"} />
                        <span>Kolkata, India</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className={`p-3 rounded-lg border outline-none transition-colors duration-300 ${isDark
                            ? "bg-gray-900 border-gray-600 text-gray-100 focus:border-amber-400"
                            : "bg-gray-50 border-gray-300 text-gray-900 focus:border-amber-600"
                            }`}
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className={`p-3 rounded-lg border outline-none transition-colors duration-300 ${isDark
                            ? "bg-gray-900 border-gray-600 text-gray-100 focus:border-amber-400"
                            : "bg-gray-50 border-gray-300 text-gray-900 focus:border-amber-600"
                            }`}
                    />
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="4"
                        required
                        className={`p-3 rounded-lg border outline-none resize-none transition-colors duration-300 ${isDark
                            ? "bg-gray-900 border-gray-600 text-gray-100 focus:border-amber-400"
                            : "bg-gray-50 border-gray-300 text-gray-900 focus:border-amber-600"
                            }`}
                    />
                    <button
                        type="submit"
                        className={`flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-colors duration-300 ${isDark
                            ? "bg-amber-400 hover:bg-amber-300 text-gray-900"
                            : "bg-amber-500 hover:bg-amber-600 text-white"
                            }`}
                    >
                        <Send size={18} /> Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactPage;
