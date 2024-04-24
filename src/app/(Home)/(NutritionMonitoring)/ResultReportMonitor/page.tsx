import { cn } from "@/lib/utils";

import { Inter, Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import { PieChart } from "@/components/Home/Piechart/piechar";
const InterFont = Inter({ subsets: ["latin"] });
const SourceSerif = Source_Serif_4({
	subsets: ["latin"],
	style: ["italic", "normal"],
});

export default function ResultMonitor() {
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
				{/* Background Layer */}

				{/* Foreground Content */}
				<div className="flex flex-col gap-12">
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
								"leading-9 sm:leading-8 md:leading-7", // Menyesuaikan jarak antar teks
								InterFont.className
							)}
						>
							Your child's daily food intake data on <b>24/3/24</b> has been
							submitted. Here is the resume
						</p>
					</div>
					<div
						className={cn(
							"w-full p-6 bg-white rounded-3xl flex-col justify-center items-start gap-2.5 inline-flex shadow-lg",
							InterFont.className
						)}
					>
						<div className="flex-col justify-start items-start gap-1 flex">
							<div className="text-center text-zinc-800 text-lg font-normal  leading-9">
								Age : 1 years old
							</div>
							<div className="text-center text-zinc-800 text-lg font-normal  leading-9">
								Food Type : lorem ipsum
							</div>
							<div className="text-center text-zinc-800 text-lg font-normal  leading-9">
								Food Name : lorem ipsum
							</div>
						</div>
					</div>
					<div className="flex flex-row gap-9 justify-center items-center">
						<div className="diagram">
							<PieChart />
						</div>
						<div
							className={cn(
								"text-black text-lg font-normal",
								InterFont.className
							)}
						>
							<p>
								Your child's daily nutritional needs have been fulfilled to 87%
								of the Recommended Nutrient Intake (RNI). Explore the details
								below
							</p>
						</div>
					</div>
					<div className="progressbar flex flex-col gap-4 justify-center items-center w-full">
						<div className="flex flex-col gap-5 w-full">
							<div className="">
								<span className="text-black text-2xl font-bold">Calori : </span>
								<span className="text-amber-400 text-2xl font-bold">
									625 cal
								</span>
							</div>
							<div className="w-full h-9 relative">
								<div className="w-[1123px] h-8 left-0 top-[2px] absolute bg-amber-200 rounded-lg" />
								<div className="w-[758px] h-8 left-0 top-[2px] absolute bg-emerald-400 rounded-lg" />
								<div className="left-[689px] top-0 absolute text-center text-white text-2xl font-normal font-['Inter'] leading-9">
									60%{" "}
								</div>
								<div className="left-[1129px] top-0 absolute text-center text-zinc-800 text-2xl font-normal font-['Inter'] leading-9">
									1125 cal
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-5 w-full">
							<div className="">
								<span className="text-black text-2xl font-bold">
									Carbohydrate :{" "}
								</span>
								<span className="text-emerald-400 text-2xl font-bold">
									140 gr
								</span>
							</div>
							<div className="w-full h-9 relative">
								<div className="w-[1123px] h-8 left-0 top-[2px] absolute bg-amber-200 rounded-lg" />
								<div className="w-[1000px] h-8 left-0 top-[2px] absolute bg-emerald-400 rounded-lg" />
								<div className="left-[689px] top-0 absolute text-center text-white text-2xl font-normal font-['Inter'] leading-9">
									90%{" "}
								</div>
								<div className="left-[1129px] top-0 absolute text-center text-zinc-800 text-2xl font-normal font-['Inter'] leading-9">
									155 gr
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-5 w-full">
							<div className="">
								<span className="text-black text-2xl font-bold">Fiber : </span>
								<span className="text-emerald-400 text-2xl font-bold">
									20 gr
								</span>
							</div>
							<div className="w-full h-9 relative">
								<div className="w-[1123px] h-8 left-0 top-[2px] absolute bg-amber-200 rounded-lg" />
								<div className="w-[1000px] h-8 left-0 top-[2px] absolute bg-emerald-400 rounded-lg" />
								<div className="left-[689px] top-0 absolute text-center text-white text-2xl font-normal font-['Inter'] leading-9">
									90%{" "}
								</div>
								<div className="left-[1129px] top-0 absolute text-center text-zinc-800 text-2xl font-normal font-['Inter'] leading-9">
									26 gr
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-5 w-full">
							<div className="">
								<span className="text-black text-2xl font-bold">Fat : </span>
								<span className="text-red-500 text-2xl font-bold">9 gr</span>
							</div>
							<div className="w-full h-9 relative">
								<div className="w-[1123px] h-8 left-0 top-[2px] absolute bg-amber-200 rounded-lg" />
								<div className="w-[300px] h-8 left-0 top-[2px] absolute bg-emerald-400 rounded-lg" />
								<div className="left-[200px] top-0 absolute text-center text-white text-2xl font-normal font-['Inter'] leading-9">
									20%{" "}
								</div>
								<div className="left-[1129px] top-0 absolute text-center text-zinc-800 text-2xl font-normal font-['Inter'] leading-9">
									26 gr
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-5 w-full">
							<div className="">
								<span className="text-black text-2xl font-bold">Water : </span>
								<span className="text-amber-400 text-2xl font-bold">
									0,8 Lt
								</span>
							</div>
							<div className="w-full h-9 relative">
								<div className="w-[1123px] h-8 left-0 top-[2px] absolute bg-amber-200 rounded-lg" />
								<div className="w-[800px] h-8 left-0 top-[2px] absolute bg-emerald-400 rounded-lg" />
								<div className="left-[689px] top-0 absolute text-center text-white text-2xl font-normal font-['Inter'] leading-9">
									75%{" "}
								</div>
								<div className="left-[1129px] top-0 absolute text-center text-zinc-800 text-2xl font-normal font-['Inter'] leading-9">
									2 Lt
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
