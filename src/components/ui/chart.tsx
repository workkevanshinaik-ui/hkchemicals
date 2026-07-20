import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = { [k in string]: { label?: React.ReactNode; icon?: React.ComponentType; } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> }) };

type ChartContextProps = { config: ChartConfig };
const ChartContext = React.createContext<ChartContextProps | null>(null);
const useChart = () => { const context = React.useContext(ChartContext); if (!context) throw new Error("useChart must be used within a <ChartContainer />"); return context; };

const ChartContainer = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & { config: ChartConfig; children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"] }>(
  ({ id, className, children, config, ...props }, ref) => {
    const uniqueId = React.useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
    return (
      <ChartContext.Provider value={{ config }}>
        <div data-chart={chartId} ref={ref} className={cn("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke=#ccc]]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke=#fff]]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke=#ccc]]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke=#ccc]]:stroke-border [&_.recharts-sector[stroke=#fff]]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", className)} {...props}>
          <ChartStyle id={chartId} config={config} />
          <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    );
  },
);
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, cfg]) => cfg.theme || cfg.color);
  if (!colorConfig.length) return null;
  return (
    <style dangerouslySetInnerHTML={{ __html: Object.entries(THEMES).map(([theme, prefix]) => `${prefix} [data-chart=${id}] {\n${colorConfig.map(([key, itemConfig]) => { const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color; return color ? `  --color-${key}: ${color};` : null; }).filter(Boolean).join("\n")}\n}`).join("\n") }} />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof RechartsPrimitive.Tooltip> & React.ComponentProps<"div"> & { hideLabel?: boolean; hideIndicator?: boolean; indicator?: "line" | "dot" | "dashed"; nameKey?: string; labelKey?: string }>(
  ({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }, ref) => {
    const { config } = useChart();
    if (!active || !payload?.length) return null;
    return (
      <div ref={ref} className={cn("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className)}>
        {payload.map((item, index) => (
          <div key={item.dataKey} className="flex w-full items-stretch gap-2">
            <div className="flex w-1 shrink-0 rounded-[2px] bg-[--color-bg]" style={{ "--color-bg": color || item.payload.fill || item.color } as React.CSSProperties} />
            <div className="flex flex-1 justify-between gap-2">
              <span className="text-muted-foreground">{item.name}</span>
              <span className="font-mono font-medium tabular-nums text-foreground">{item.value?.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;
const ChartLegendContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & { hideIcon?: boolean; nameKey?: string }>(
  ({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
    if (!payload?.length) return null;
    return (
      <div ref={ref} className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}>
        {payload.map((item) => (
          <div key={item.value} className="flex items-center gap-1.5">
            {!hideIcon && <div className="h-2 w-2 shrink-0 rounded-[2px]" style={{ backgroundColor: item.color }} />}
            <span className="text-muted-foreground">{item.value}</span>
          </div>
        ))}
      </div>
    );
  },
);
ChartLegendContent.displayName = "ChartLegend";

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };