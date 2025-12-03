import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

const ContactComponent = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
    try {
      const email = "sandeeprajput88066@gmail.com";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
      alert("Clipboard not supported. Try manually copying!");
    }
  };

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/codesofsandeep",
      username: "@codesofsandeep",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://shorturl.at/1H90r",
      username: "in/sandeep-rajput",
    },
  ];

  return (
    <section className="min-h-fit flex items-start justify-center py-5">
      <div className="max-w-6xl w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start mb-10"
        >
          <h1 className="text-solid text-4xl md:text-6xl font-black uppercase mb-10">
            CONTACT
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        {/* <div className="grid md:grid-cols-2 gap-8"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">

          {/* Email Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="border border-[0.5px] rounded-2xl p-6 text-centerbackdrop-blur-md"
          >
            <Mail className="w-12 h-12 text-solid mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-solid mb-3">Email Me</h3>
            <p className="text-midcolor/80 text-sm mb-6">
              Copy my email address to get in touch directly
            </p>

            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-solid px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-5 h-5 solid" />
                  <span className="text-lg">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span className="text-lg">sandeeprajput88066@gmail.com</span>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="border border-[0.5px] rounded-2xl p-6  backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold text-solid mb-6 text-center">
              Connect With Me
            </h3>

            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-between p-4 border-b text-midcolor transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <IconComponent className="w-5 h-5" />
                      <div className="text-left">
                        <div className="font-medium text-base">{social.name}</div>
                        <div className="text-solid text-sm">{social.username}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-sm sm:text-base">
            Prefer a quick chat?{" "}
            <a
              href="mailto:sandeeprajput88066@gmail.com"
              className="text-solid font-medium underline underline-offset-2"
            >
              Send me an email
            </a>{" "}
            and I'll respond within hours.
          </p>
        </motion.div>

      </div>
    </section>

//     <section className="min-h-fit flex items-start justify-center py-5 px-4 sm:px-6 md:px-10 lg:px-20">
//   <div className="max-w-6xl w-full">

//     {/* Header */}
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="flex flex-col items-start mb-10"
//     >
//       <h1 className="text-solid text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-10">
//         CONTACT
//       </h1>
//     </motion.div>

//     {/* Main Content Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"> {/* Updated: grid-cols-1 for mobile */}

//       {/* Email Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="border rounded-2xl p-6 text-center bg-white/80 backdrop-blur-md sm:p-8" /* Updated: padding responsive */
//       >
//         <Mail className="w-12 h-12 text-solid mx-auto mb-4" />
//         <h3 className="text-xl sm:text-2xl font-semibold text-solid mb-3">Email Me</h3>
//         <p className="text-midcolor/80 text-sm sm:text-base mb-6">
//           Copy my email address to get in touch directly
//         </p>

//         <motion.button
//           onClick={copyEmail}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-solid px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 sm:py-5" /* Updated: padding responsive */
//         >
//           {copiedEmail ? (
//             <>
//               <Check className="w-5 h-5 solid" />
//               <span className="text-lg sm:text-xl">Copied to clipboard!</span>
//             </>
//           ) : (
//             <>
//               <Copy className="w-5 h-5" />
//               <span className="text-lg sm:text-xl">sandeeprajput88066@gmail.com</span>
//             </>
//           )}
//         </motion.button>
//       </motion.div>

//       {/* Social Links Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//         className="border rounded-2xl p-6 bg-white/80 backdrop-blur-md sm:p-8" /* Updated: padding responsive */
//       >
//         <h3 className="text-xl sm:text-2xl font-semibold text-solid mb-6 text-center">
//           Connect With Me
//         </h3>

//         <div className="space-y-4">
//           {socialLinks.map((social, index) => {
//             const IconComponent = social.icon;
//             return (
//               <motion.a
//                 key={index}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="flex items-center justify-between p-4 sm:p-5 border-b text-midcolor transition-all duration-300 group rounded-lg hover:bg-white/10"
//               >
//                 <div className="flex items-center gap-4">
//                   <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" /> {/* Updated: icon size responsive */}
//                   <div className="text-left">
//                     <div className="font-medium text-base sm:text-lg">{social.name}</div>
//                     <div className="text-solid text-sm sm:text-base">{social.username}</div>
//                   </div>
//                 </div>
//                 <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </motion.a>
//             );
//           })}
//         </div>
//       </motion.div>

//     </div>

//     {/* Footer */}
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.9, ease: "easeOut" }}
//       className="text-center mt-12"
//     >
//       <p className="text-gray-600 text-sm sm:text-base">
//         Prefer a quick chat?{" "}
//         <a
//           href="mailto:sandeeprajput88066@gmail.com"
//           className="text-solid font-medium underline underline-offset-2"
//         >
//           Send me an email
//         </a>{" "}
//         and I'll respond within hours.
//       </p>
//     </motion.div>

//   </div>
// </section>

  );
};

export default ContactComponent;
