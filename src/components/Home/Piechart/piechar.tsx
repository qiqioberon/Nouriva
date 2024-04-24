"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export const data = {
	labels: ["Terpenuhi", "Tidak Terpenuhi"],
	datasets: [
		{
			label: "Persentase",
			data: [87, 13],
			backgroundColor: ["rgb(16 185 129)", "rgb(251 191 36"],
			// borderColor: [
			// 	"rgba(255, 99, 132, 1)",
			// 	"rgba(54, 162, 235, 1)",
			// 	"rgba(255, 206, 86, 1)",
			// 	"rgba(75, 192, 192, 1)",
			// 	"rgba(153, 102, 255, 1)",
			// 	"rgba(255, 159, 64, 1)",
			// ],
			borderWidth: 1,
		},
	],
};

export function PieChart() {
	return <Pie data={data} />;
}
