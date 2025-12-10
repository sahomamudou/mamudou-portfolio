import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="
          fixed bottom-6 right-6 z-50
          bg-blue-600 hover:bg-blue-700
          text-white p-4 rounded-full shadow-lg
          flex items-center justify-center
        "
      >
        <HiArrowUp className="text-2xl" />
      </motion.button>
    )
  );
};

export default BackToTop;
