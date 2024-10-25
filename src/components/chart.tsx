"use client";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useTheme } from "next-themes";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  stats: { name: string; base_stat: number }[];
}

const Chart = ({ stats }: RadarChartProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const formatStatName = (name: string) => {
    const capitalizeFirstLetter = (str: string) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const formattedName = name.replace("special-", "s.");
    return capitalizeFirstLetter(formattedName);
  };

  const data = {
    labels: stats.map((stat) => formatStatName(stat.name)),
    datasets: [
      {
        label: "Base Stats",
        data: stats.map((stat) => stat.base_stat),
        backgroundColor: "rgba(251, 191, 36, 0.2)",
        borderColor: "RGB(245, 158, 11)",
        borderWidth: 3,
        pointBackgroundColor: "RGB(245, 158, 11)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "RGB(245, 158, 11)",
        pointRadius: 4,
      },
    ],
  };

  const options: ChartOptions<"radar"> = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
    },
    scales: {
      r: {
        min: 0,
        max: 200,
        backgroundColor: "transparent",
        ticks: {
          stepSize: 40,
          color: isDark ? "rgb(156, 163, 175)" : "rgb(75, 85, 99)",
          backdropColor: "transparent",
          font: {
            size: 12,
          },
        },
        grid: {
          color: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          lineWidth: 2,
        },
        pointLabels: {
          color: "RGB(245, 158, 11)",
          font: {
            size: 18,
            weight: "lighter" as const,
          },
        },
        angleLines: {
          color: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
          lineWidth: 2,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
        padding: 10,
      },
    },
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4 mr-8 2xl:mr-10">
      <div className="w-[550px] h-[550px]">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
