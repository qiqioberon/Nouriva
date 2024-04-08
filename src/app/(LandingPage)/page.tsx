import { Inter, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Navbar from "@/components/LandingPage/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const InterFont = Inter({ subsets: ["latin"] });
const SourceSerif = Source_Serif_4({
	subsets: ["latin"],
	style: ["italic", "normal"],
});
export default function landingpage() {
	return (
		<>
			<Navbar />
			<div className="overflow-hidden w-full scroll-m-auto">
				<div className="h-[900px] w-full overflow-hidden ">
					<div
						className={"flex flex-col justify-center items-center gap-8 pt-24"}
						style={SourceSerif.style}
					>
						<div className="italic">
							<span className="text-zinc-800 text-5xl font-light ">
								Welcome to{" "}
							</span>
							<span className="text-zinc-800 text-5xl font-semibold  ">
								Nouriva
							</span>
						</div>
						<div className="text-emerald-600 text-7xl font-bold  ">
							Streamlining Parenthood
						</div>
						<Button
							className="w-36 h-12 font-bold text-emerald-50"
							style={InterFont.style}
						>
							Learn More
						</Button>
					</div>
					<div className="flex flex-row">
						<Image
							className="relative left-16 -z-10 transform scale-x-[-1]"
							src="/VectorMlungker.svg"
							alt="Vectormlungker"
							height={400}
							width={200}
						/>
						<Image
							className="relative -right-[750px] -z-10"
							src="/VectorMlungker.svg"
							alt="Vectormlungker"
							height={400}
							width={200}
						/>
					</div>
					<div className=" h-28 gap-8 flex justify-center">
						<div className="w-80 px-6 py-4 bg-white rounded-tl-3xl rounded-tr rounded-bl rounded-br-3xl flex-col justify-center items-center gap-1.5 inline-flex">
							<div className="text-emerald-600 text-xl font-semibold font-['Source Serif Pro'] leading-loose">
								Effortlessly Monitor Growth
							</div>
							<div className="self-stretch text-center text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">
								Ensuring you never miss a beat in their development journey
							</div>
						</div>
						<div className="w-72 px-6 py-4 bg-white rounded-tl-3xl rounded-tr rounded-bl rounded-br-3xl flex-col justify-center items-center gap-1.5 inline-flex">
							<div className="text-emerald-600 text-xl font-semibold font-['Source Serif Pro'] leading-loose">
								Stay on Top of Nutrition
							</div>
							<div className="self-stretch text-center text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">
								Helps you ensure your child gets the nutrients they need
							</div>
						</div>
						<div className="w-72 px-6 py-4 bg-white rounded-tl-3xl rounded-tr rounded-bl rounded-br-3xl flex-col justify-center items-center gap-1.5 inline-flex">
							<div className="text-emerald-600 text-xl font-semibold font-['Source Serif Pro'] leading-loose">
								Never Miss a Moment
							</div>
							<div className="self-stretch text-center text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">
								With Parenting Tip, receive reminders and advice to you{" "}
							</div>
						</div>
					</div>
					<div className="relative -z-10  -top-[500px] mt-10 -ms-8 h-[1350px] w-[1350px] bg-emerald-500 rounded-full" />
				</div>
				<div className="h-[900px] w-full overflow-hidden bg-emerald-500 flex justify-end items-center px-[50px] py-[86px]">
					<Image
						className="absolute -left-24 z-10"
						src="/fotolp1.png"
						alt="fotolp1"
						width={700}
						height={100}
					/>
					<div className="w-[500px] flex flex-col gap-8 text-white">
						<h1 className={cn("font-bold text-5xl")}>Redefining Parenting</h1>
						<p className={cn("font-medium text-xl")}>
							We're driven by a shared passion for helping parents navigate the
							adventure of parenthood with confidence and ease. We believe that
							every child deserves the best possible start in life, and we're
							committed to providing parents with the tools and resources they
							need to make that a reality.
						</p>
						<Button className="bg-white text-emerald-500 hover:border-2 hover:border-emerald-700">
							Join Us
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
