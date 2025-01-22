'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { type PropsWithChildren } from 'react';

type BounceInProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}> & Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'transition'>;

const BounceIn = ({ 
  children, 
  className = "", 
  delay = 0,
  ...props 
}: BounceInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        y: {
          type: "spring",
          damping: 10,
          stiffness: 400,
          duration: 0.15,
        },
        opacity: { duration: 0.15 }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default BounceIn; 