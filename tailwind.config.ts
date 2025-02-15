import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
        heading: ["Cal Sans", "Inter var", ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        risk: {
          low: '#10B981',
          medium: '#F59E0B',
          high: '#EF4444'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' }
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "meteor": {
          "0%": { transform: "translateY(-200px)", opacity: "0" },
          "10%, 90%": { opacity: "1" },
          "100%": { transform: "translateY(calc(100vh + 200px))", opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8", transform: "scale(1.1)" },
        },
        "gradient": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-20px)"
          }
        },
        "scale-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "1"
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: "0.8"
          }
        },
        "rotate-glow": {
          "0%": {
            transform: "rotate(0deg)",
            filter: "hue-rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)",
            filter: "hue-rotate(360deg)"
          }
        },
        "shimmer": {
          "0%": {
            backgroundPosition: "-1000px 0",
          },
          "100%": {
            backgroundPosition: "1000px 0",
          },
        },
        "bounce-subtle": {
          "0%, 100%": {
            transform: "translateY(-2%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "meteor": "meteor 5s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "scale-pulse": "scale-pulse 3s ease-in-out infinite",
        "rotate-glow": "rotate-glow 10s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "bounce-subtle": "bounce-subtle 3s ease-in-out infinite",
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
