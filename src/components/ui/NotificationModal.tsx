'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  icon?: React.ReactNode;
}

export default function NotificationModal({
  isOpen,
  onClose,
  title,
  message,
  icon,
}: NotificationModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center text-center p-8 pt-10">
              {/* Icon Bubble */}
              <div className="mb-5 rounded-full bg-primary-50 p-4 ring-8 ring-primary-50/50">
                {icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {title}
              </h3>

              <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                {message}
              </p>

              <button
                onClick={onClose}
                className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl shadow-lg shadow-primary-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Got it
              </button>
            </div>

            {/* Bottom decoration */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
