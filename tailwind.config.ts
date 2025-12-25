
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
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
				'noto': ['Noto Sans JP', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(217, 91%, 60%)',
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				copper: '#B07B47'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'gentle-glow': {
					'0%, 100%': {
						opacity: '0.8'
					},
					'50%': {
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '0.3',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.1)'
					}
				},
				'heartbeat': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'10%': {
						transform: 'scale(1.05)'
					},
					'20%': {
						transform: 'scale(1)'
					},
					'30%': {
						transform: 'scale(1.08)'
					},
					'40%': {
						transform: 'scale(1)'
					}
				},
				'heartbeat-glow': {
					'0%, 100%': {
						opacity: '0.2',
						transform: 'scale(1)'
					},
					'10%': {
						opacity: '0.5',
						transform: 'scale(1.15)'
					},
					'20%': {
						opacity: '0.2',
						transform: 'scale(1)'
					},
					'30%': {
						opacity: '0.7',
						transform: 'scale(1.2)'
					},
					'40%': {
						opacity: '0.2',
						transform: 'scale(1)'
					}
				},
				'heartbeat-intense': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'10%': {
						transform: 'scale(1.1)'
					},
					'20%': {
						transform: 'scale(1)'
					},
					'30%': {
						transform: 'scale(1.15)'
					},
					'40%': {
						transform: 'scale(1)'
					}
				},
				'glow-intense': {
					'0%, 100%': {
						opacity: '0.4',
						transform: 'scale(1)'
					},
					'10%': {
						opacity: '0.8',
						transform: 'scale(1.25)'
					},
					'20%': {
						opacity: '0.4',
						transform: 'scale(1)'
					},
					'30%': {
						opacity: '1',
						transform: 'scale(1.3)'
					},
					'40%': {
						opacity: '0.4',
						transform: 'scale(1)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'pulse-ring': {
					'0%, 100%': {
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'20%': {
						opacity: '0'
					},
					'30%': {
						opacity: '1'
					},
					'40%': {
						opacity: '0'
					}
				},
				'electric-flash': {
					'0%, 100%': {
						opacity: '0',
						transform: 'scale(0.8) rotate(0deg)'
					},
					'25%': {
						opacity: '1',
						transform: 'scale(1) rotate(90deg)'
					},
					'50%': {
						opacity: '0',
						transform: 'scale(0.8) rotate(180deg)'
					},
					'75%': {
						opacity: '1',
						transform: 'scale(1) rotate(270deg)'
					}
				},
				'particle-float': {
					'0%, 100%': {
						transform: 'translateY(0) translateX(0) scale(1)',
						opacity: '0'
					},
					'25%': {
						opacity: '1'
					},
					'50%': {
						transform: 'translateY(-30px) translateX(15px) scale(0.5)',
						opacity: '0.5'
					},
					'75%': {
						opacity: '0.3'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'gentle-glow': 'gentle-glow 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
				'heartbeat-glow': 'heartbeat-glow 1.5s ease-in-out infinite',
				'heartbeat-intense': 'heartbeat-intense 1s ease-in-out infinite',
				'glow-intense': 'glow-intense 1s ease-in-out infinite',
				'pulse-ring': 'pulse-ring 1s ease-in-out infinite',
				'electric-flash': 'electric-flash 2s ease-in-out infinite',
				'particle-float': 'particle-float 3s ease-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
