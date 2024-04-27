"use client";
import { cn } from "@/lib/utils";
import { Inter, Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import { PieChart } from "@/components/Home/Piechart/piechar";
import { ChevronRight, InfoIcon } from "lucide-react";
const InterFont = Inter({ subsets: ["latin"] });
const SourceSerif = Source_Serif_4({
	subsets: ["latin"],
	style: ["italic", "normal"],
});

export default function NutritionReport() {
	const bgImage = "./Logo.svg";
	return (
		<>
			<div
				className="absolute w-full h-full bg-center bg-contain -z-10 "
				style={{
					backgroundImage: `url(${bgImage})`,
					opacity: 0.1, // Set the desired opacity level
					backgroundRepeat: "no-repeat",
				}}
			/>
			<div className="container relative flex flex-col gap-5 justify-center items-center overflow-hidden mx-0 ">
				<div className="flex flex-col gap-8 justify-center items-center flex-shrink">
					<h1
						className={cn(
							"text-emerald-500 font-bold",
							"sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl", // Mengubah ukuran teks berdasarkan ukuran layar
							SourceSerif.className
						)}
					>
						Nutrition Monitoring
					</h1>
					<div className="yearmonth flex flex-row gap-8 w-full">
						<div
							className={cn(
								"year flex flex-col gap-3 w-full",
								InterFont.className
							)}
						>
							<p className="text-lg font-semibold">Year</p>
							<select
								name="year"
								id="year"
								className="border-2 border-gray-300 rounded-lg w-full h-10"
							>
								<option value="" disabled selected>
									Select Year
								</option>
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</select>
						</div>
						<div
							className={cn(
								"Month flex flex-col gap-3 w-full",
								InterFont.className
							)}
						>
							<p className="text-lg font-semibold">Month</p>
							<select
								name="Month"
								id="Month"
								className="border-2 border-gray-300 rounded-lg w-full h-10"
							>
								<option value="" disabled selected>
									Select Month
								</option>
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</select>
						</div>
					</div>
					<div
						className={cn(
							"week flex flex-row justify-between w-full",
							InterFont.className
						)}
					>
						<div className="text-lg font-medium">Week 1</div>
						<div className="text-lg font-bold">Week 2</div>
						<div className="text-lg font-medium">Week 3</div>
						<div className="text-lg font-medium">Week 4</div>
					</div>
				</div>
				<div
					className={cn(
						"report flex flex-col gap-9 justify-center items-center w-full",
						InterFont.className
					)}
				>
					<div className="alert bg-emerald-200 flex flex-row gap-2 items-center justify-center py-4 px-6 rounded-lg w-full">
						<InfoIcon />
						<div className="w-full">
							<span className="text-zinc-800 text-sm font-medium ">
								Your child has{" "}
							</span>
							<span className="text-emerald-500 text-sm font-bold ">
								good nutrition
							</span>
							<span className="text-zinc-800 text-sm font-medium ">
								{" "}
								this week
							</span>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-10 w-full pb-9">
						<div className="flex flex-col py-5 px-10 gap-2 justify-center items-center rounded-lg bg-white border-2 border-zinc-500">
							<p className="text-center font-bold text-xl"> Day 1</p>
							<PieChart />
							<div className="flex flex-row gap-1 justify-center items-center">
								<p className="text-center text-lg font-normal">See Detail</p>
								<ChevronRight />
							</div>
						</div>
						<div className="flex flex-col py-5 px-10 gap-2 justify-center items-center rounded-lg bg-white border-2 border-zinc-500">
							<p className="text-center font-bold text-xl"> Day 2</p>
							<PieChart />
							<div className="flex flex-row gap-1 justify-center items-center">
								<p className="text-center text-lg font-normal">See Detail</p>
								<ChevronRight />
							</div>
						</div>
						<div className="flex flex-col py-5 px-10 gap-2 justify-center items-center rounded-lg bg-white border-2 border-zinc-500">
							<p className="text-center font-bold text-xl"> Day 3</p>
							<PieChart />
							<div className="flex flex-row gap-1 justify-center items-center">
								<p className="text-center text-lg font-normal">See Detail</p>
								<ChevronRight />
							</div>
						</div>
						<div className="flex flex-col py-5 px-10 gap-2 justify-center items-center rounded-lg bg-white border-2 border-zinc-500">
							<p className="text-center font-bold text-xl"> Day 4</p>
							<PieChart />
							<div className="flex flex-row gap-1 justify-center items-center">
								<p className="text-center text-lg font-normal">See Detail</p>
								<ChevronRight />
							</div>
						</div>
						<div className="flex flex-col py-5 px-10 gap-2 justify-center items-center rounded-lg bg-white border-2 border-zinc-500">
							<p className="text-center font-bold text-xl"> Day 5</p>
							<PieChart />
							<div className="flex flex-row gap-1 justify-center items-center">
								<p className="text-center text-lg font-normal">See Detail</p>
								<ChevronRight />
							</div>
						</div>
						<div className="flex flex-col py-5 px-10 gap-2 justify-center items-center rounded-lg bg-white border-2 border-zinc-500">
							<p className="text-center font-bold text-xl"> Day 6</p>
							<PieChart />
							<div className="flex flex-row gap-1 justify-center items-center">
								<p className="text-center text-lg font-normal">See Detail</p>
								<ChevronRight />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
