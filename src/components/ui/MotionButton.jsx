import {cn} from "@/lib/utils";
import {Slot} from "@radix-ui/react-slot";
import {cva} from "class-variance-authority";
import {motion} from "framer-motion";
import * as React from "react";
import {Link} from "react-router-dom";

const motionButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[var(--gradient-green-start)] to-[var(--gradient-green-end)] text-white shadow-lg hover:shadow-xl",
        blue: "bg-[var(--gradient-green-end)] text-white shadow-lg hover:shadow-xl",
        outline:
          "border-2 border-[var(--gradient-green-start)] text-[var(--gradient-green-start)] hover:bg-[var(--gradient-green-end)] hover:text-white",
        secondary: "bg-[#f0f0f0] text-[#333] hover:bg-[#e0e0e0]",
        ghost: "text-inherit hover:bg-black/5",
        link: "text-[var(--gradient-green-start)] underline-offset-4 hover:underline",
        danger: "bg-red-500 text-white shadow-lg hover:bg-red-600",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        default: "h-10 px-6 text-sm",
        md: "h-11 px-8 text-base rounded-full",
        lg: "h-12 px-10 text-lg rounded-full",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const MotionButton = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      disabled = false,
      to,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : to ? Link : "button";
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.3}}>
        <Comp
          className={cn(
            motionButtonVariants({variant, size, className}),
            disabled && "opacity-50 cursor-not-allowed"
          )}
          ref={ref}
          disabled={disabled}
          to={to}
          style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}
          onMouseEnter={() => !disabled && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}>
          {React.Children.map(children, (child) => {
            if (typeof child === "string") {
              return (
                <motion.span
                  animate={
                    isHovered
                      ? {
                          letterSpacing: "0.05em",
                        }
                      : {
                          letterSpacing: "0em",
                        }
                  }
                  transition={{duration: 0.2}}>
                  {child}
                </motion.span>
              );
            }
            return (
              <motion.div
                animate={
                  isHovered
                    ? {
                        rotate: 15,
                      }
                    : {
                        rotate: 0,
                      }
                }
                transition={{duration: 0.3}}>
                {child}
              </motion.div>
            );
          })}
        </Comp>
      </motion.div>
    );
  }
);

MotionButton.displayName = "MotionButton";

export {MotionButton, motionButtonVariants};
