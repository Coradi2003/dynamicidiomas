import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5551986356096"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg animate-pulse-glow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="Fale conosco no WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.598c-.39 1.1-1.932 2.014-3.164 2.28-.846.18-1.95.322-5.67-1.218-4.762-1.97-7.826-6.804-8.064-7.118-.23-.314-1.932-2.572-1.932-4.904 0-2.332 1.224-3.476 1.658-3.952.434-.476.948-.596 1.264-.596.314 0 .63.002.904.016.29.014.68-.11 1.064.812.39.94 1.326 3.232 1.442 3.466.116.234.194.508.038.822-.154.314-.232.508-.464.782-.232.274-.488.612-.696.822-.232.232-.474.484-.204.948.27.464 1.202 1.982 2.58 3.212 1.772 1.582 3.266 2.072 3.73 2.306.464.234.734.196 1.004-.118.27-.314 1.158-1.35 1.466-1.814.308-.464.616-.384 1.04-.232.424.156 2.704 1.276 3.168 1.508.464.234.774.35.89.542.116.194.116 1.108-.274 2.178z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
