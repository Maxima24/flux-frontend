"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "lib/utils";
import { motion } from "framer-motion";

export const cardVariants = cva(
  "rounded-lg bg-card border !border-orange-500/20 text-card-foreground transition-all backdrop-blur-md",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-dark-800 border-gray-200 dark:border-gray-700",
        glass: "bg-glass backdrop-blur-md",
        gradient:
          "bg-gradient-to-br from-primary-500/10 to-purple-500/10 border-white/10",
      },
      hover: {
        default: "hover:shadow-lg",
        lift: "hover:-translate-y-1 hover:shadow-md",
        glow: "hover:shadow-primary-500/25 hover:border-primary-500/50",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: "default",
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  isAnimated?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hover, isAnimated = false, ...props }, ref) => {
    const classes = cn(cardVariants({ variant, hover, className }));

    if (isAnimated) {
      // Only pass safe props to motion.div (exclude drag handlers and other HTML-specific events)
      const { 
        onDrag, 
        onDragStart, 
        onDragEnd, 
        onDragCapture,
        onDragStartCapture,
        onDragEndCapture,
        onDragLeave,
        onDragOver,
        onDragLeaveCapture,
        onDragOverCapture,
        onDrop,
        onDropCapture,
        ...safeProps 
      } = props as any;

      return (
        <motion.div
          className={classes}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          {...safeProps}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";


export default Card;