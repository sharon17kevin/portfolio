import { motion, useInView } from 'motion/react';
import React from 'react';


interface StaggeredMotionProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  duration?: number;
  className?: string;
  childClassName?: string;
  once?: boolean;
}

const StaggeredMotion: React.FC<StaggeredMotionProps> = ({
  children,
  staggerDelay = 0.1,
  duration = 0.5,
  className = '',
  childClassName = '',
  once = true,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: "-10% 0px",
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div 
          key={index} 
          variants={itemVariants}
          className={childClassName}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredMotion;