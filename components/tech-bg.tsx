import { cn } from "@/lib/utils"

export default function TechBg({
  className,
  tone = "blue",
}: {
  className?: string
  tone?: "blue" | "warm"
}) {
  const stroke = tone === "blue" ? "rgba(37, 99, 235, 0.18)" : "rgba(180, 83, 9, 0.20)" // blue / amber
  const glowA = tone === "blue" ? "from-blue-100" : "from-amber-100"
  const glowB = tone === "blue" ? "from-blue-50" : "from-amber-50"
  const snippetColor = tone === "blue" ? "text-blue-700/20" : "text-amber-700/25"

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {/* Gradient base */}
      <div className={`absolute inset-0 bg-[radial-gradient(900px_450px_at_10%_-10%,var(--tw-gradient-from),transparent_60%)] ${glowA}`} />
      <div className={`absolute inset-0 bg-[radial-gradient(700px_400px_at_90%_120%,var(--tw-gradient-from),transparent_60%)] ${glowB}`} />

      {/* Subtle SVG grid */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id={`grid-${tone}`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke={stroke} strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#grid-${tone})`} />
      </svg>

      {/* Floating code snippets/brackets using built-in pulse animation and inline delays */}
      <div className="absolute inset-0">
        <span
          className={`absolute left-[6%] top-[20%] ${snippetColor} text-6xl motion-safe:animate-pulse`}
          style={{ animationDelay: "0ms" }}
        >
          {"<"}{" />"}
        </span>
        <span
          className={`absolute right-[8%] top-[28%] ${snippetColor} text-5xl motion-safe:animate-pulse`}
          style={{ animationDelay: "600ms" }}
        >
          {"{"}{"}"}
        </span>
        <span
          className={`absolute left-[18%] bottom-[18%] ${snippetColor} text-5xl motion-safe:animate-pulse`}
          style={{ animationDelay: "300ms" }}
        >
          {"["}{"]"}
        </span>
        <span
          className={`absolute right-[18%] bottom-[12%] ${snippetColor} text-6xl motion-safe:animate-pulse`}
          style={{ animationDelay: "900ms" }}
        >
          {"<"}{">"}
        </span>
      </div>
    </div>
  )
}
