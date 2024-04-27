"use client";

import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Inter, Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const InterFont = Inter({ subsets: ["latin"] });
const SourceSerif = Source_Serif_4({
	subsets: ["latin"],
	style: ["italic", "normal"],
});
interface ChildrenData {
	Date: Date;
	Foodtype: string;
	FoodName: string;
	Anak: string;
}

export default function FindReport() {
	const router = useRouter();

	const methods = useForm<ChildrenData>();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = methods;

	const onSubmit = (data: any) => {
		console.log(data);
		router.push("/ResultReportMonitor");
	};
	const bgImage = "./Logo.svg";
	return (
		<>
			<div
				className="absolute w-[900px] h-2/3 bg-center bg-contain -z-10 "
				style={{
					backgroundImage: `url(${bgImage})`,
					opacity: 0.1, // Set the desired opacity level
					backgroundRepeat: "no-repeat",
				}}
			/>
			<div className="container flex flex-col gap-5 justify-center items-center overflow-hidden ">
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
					<p
						className={cn(
							"text-center text-zinc-800 font-['Inter']",
							"w-[867px]", // Anda bisa mengubah unit atau menyesuaikan width
							"sm:text-lg md:text-xl", // Ukuran teks berubah berdasarkan ukuran layar
							"leading-9 sm:leading-8 md:leading-7" // Menyesuaikan jarak antar teks
						)}
					>
						Submit your child's daily food intake data to receive growth
						analysis and nutritional report
					</p>
				</div>

				<div className="flex flex-col gap-6 py-12 px-12 w-[488px] bg-white  shadow-xl rounded-2xl">
					<div className="flex flex-col gap-3">
						<label
							htmlFor="Date"
							className={cn("font-bold text-sm ", InterFont.className)}
						>
							Date:
						</label>
						<input
							className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
							type="Date"
							id="Date"
							{...register("Date", {
								required: "Date number is required",
							})}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label
							htmlFor="Foodtype"
							className={cn("font-bold text-sm ", InterFont.className)}
						>
							Food Type :
						</label>
						<select
							className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
							id="Foodtype"
							{...register("Foodtype", {
								required: "Foodtype number is required",
							})}
						>
							<option value="" disabled selected>
								Select Food Type
							</option>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</select>
					</div>
					<div className="flex flex-col gap-3">
						<label
							htmlFor="FoodName"
							className={cn("font-bold text-sm ", InterFont.className)}
						>
							Food Name :
						</label>
						<select
							className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
							id="FoodName"
							{...register("FoodName", {
								required: "FoodName number is required",
							})}
						>
							<option value="" disabled selected>
								Select Food Name
							</option>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</select>
					</div>
					<div className="flex flex-col gap-3">
						<label
							htmlFor="Anak"
							className={cn("font-bold text-sm ", InterFont.className)}
						>
							Nama Anak:
						</label>
						<select
							className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
							id="Anak"
							{...register("Anak", {
								required: "Anak number is required",
							})}
						>
							<option value="" disabled selected>
								Select Nama Anak
							</option>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</select>
					</div>
					<Button
						className="w-full bg-emerald-500 text-white rounded-md p-2 focus:outline-none"
						onClick={handleSubmit(onSubmit)}
					>
						Submit
					</Button>
				</div>
			</div>
			<Image
				className="absolute bottom-0  rotate-180 -z-20"
				src="/Rectanglebottom1.svg"
				alt="Rectanglebottom"
				width={5000}
				height={200}
			/>
		</>
	);
}
