import { Inter, Source_Serif_4 } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/LandingPage/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

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
							<div
								className={cn(
									"text-emerald-600 text-xl font-semibold font-['Source Serif Pro'] leading-loose",
									SourceSerif.className
								)}
							>
								Effortlessly Monitor Growth
							</div>
							<div
								className={cn(
									"self-stretch text-center text-zinc-800 text-sm font-normal font-['Inter'] leading-tight",
									InterFont.className
								)}
							>
								Ensuring you never miss a beat in their development journey
							</div>
						</div>
						<div className="w-72 px-6 py-4 bg-white rounded-tl-3xl rounded-tr rounded-bl rounded-br-3xl flex-col justify-center items-center gap-1.5 inline-flex">
							<div
								className={cn(
									"text-emerald-600 text-xl font-semibold font-['Source Serif Pro'] leading-loose",
									SourceSerif.className
								)}
							>
								Stay on Top of Nutrition
							</div>
							<div
								className={cn(
									"self-stretch text-center text-zinc-800 text-sm font-normal font-['Inter'] leading-tight",
									InterFont.className
								)}
							>
								Helps you ensure your child gets the nutrients they need
							</div>
						</div>
						<div className="w-72 px-6 py-4 bg-white rounded-tl-3xl rounded-tr rounded-bl rounded-br-3xl flex-col justify-center items-center gap-1.5 inline-flex">
							<div
								className={cn(
									"text-emerald-600 text-xl font-semibold font-['Source Serif Pro'] leading-loose",
									SourceSerif.className
								)}
							>
								Never Miss a Moment
							</div>
							<div
								className={cn(
									"self-stretch text-center text-zinc-800 text-sm font-normal font-['Inter'] leading-tight",
									InterFont.className
								)}
							>
								With Parenting Tip, receive reminders and advice to you{" "}
							</div>
						</div>
					</div>
					<div className="relative -z-10  -top-[500px] mt-10 -ms-8 h-[1350px] w-[1350px] bg-emerald-500 rounded-full" />
				</div>
				<div className="h-[900px] w-full overflow-hidden bg-emerald-500 flex justify-end items-center px-[50px] py-[86px]">
					<Image
						className="absolute -left-36 z-10"
						src="/fotolp1.png"
						alt="fotolp1"
						width={700}
						height={100}
					/>
					<div className="w-[600px] flex flex-col gap-8 text-white">
						<h1 className={cn("font-bold text-5xl", SourceSerif.className)}>
							Redefining Parenting
						</h1>
						<p className={cn("font-medium text-xl", InterFont.className)}>
							We're driven by a shared passion for helping parents navigate the
							adventure of parenthood with confidence and ease. We believe that
							every child deserves the best possible start in life, and we're
							committed to providing parents with the tools and resources they
							need to make that a reality.
						</p>
						<Button
							className={cn(
								"bg-white text-emerald-500 hover:border-2 hover:border-emerald-700 font-semibold",
								InterFont.className
							)}
						>
							Join Us
						</Button>
					</div>
				</div>
				<div className="h-[900px] w-full overflow-hidden flex flex-col items-start">
					<Image
						className=""
						src="/Rectanglebottom1.svg"
						alt="Rectanglebottom"
						width={1600}
						height={200}
					/>
					<div className="w-full flex justify-center items-center pt-10">
						<div className="flex flex-col gap-10">
							<div className="flex flex-col gap-2 justify-center items-center">
								<p className={cn("font-normal text-3xl", InterFont.className)}>
									Our
								</p>
								<h1
									className={cn(
										"text-emerald-500 font-bold text-6xl",
										SourceSerif.className
									)}
								>
									Growth Analysis
								</h1>
							</div>
							<div className="button flex flex-row gap-4 w-full justify-center">
								<Button>Weight Monitoring</Button>
								<Button variant={"outline"}>BMI Calculation</Button>
								<Button variant={"outline"}>Height Measurement</Button>
								<Button variant={"outline"}>Head Circumference</Button>
							</div>
							<div className="w-[1000px] h-80 px-12 py-6 bg-emerald-400 rounded-3xl justify-start items-center gap-12 inline-flex">
								<div className="grow shrink basis-0 text-white text-2xl font-normal font-['Inter'] leading-9">
									Keep tabs on your child's weight to ensure they are growing at
									a healthy rate. Regular weight checks help identify any
									potential issues early on and allow for timely interventions
									if needed.
								</div>

								<div className="w-80 h-80 relative">
									<Image
										className=""
										src="/MomSon.png"
										alt="MonAndSon"
										width={300}
										height={100}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="h-[900px] w-full overflow-hidden flex flex-col gap-32">
					<div className="flex flex-col gap-2 justify-center items-center">
						<p className={cn("font-normal text-3xl", InterFont.className)}>
							Special
						</p>
						<h1
							className={cn(
								"text-emerald-500 font-bold text-6xl",
								SourceSerif.className
							)}
						>
							Parenting Tips Of The Day
						</h1>
					</div>
					<div className="flex flex-row gap-14 justify-center items-center">
						<div className="Accordion w-[533px]">
							<Accordion type="single" collapsible>
								<AccordionItem value="item-1">
									<AccordionTrigger>
										1. Challenge yourself today
									</AccordionTrigger>
									<AccordionContent>
										Step back and allow your child to take the lead in small
										tasks. Whether it's tying their shoelaces or setting the
										table, let them try. Offer words of encouragement and praise
										their efforts, even if they don't succeed on the first try
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-2">
									<AccordionTrigger>
										2. Practice Positive Discipline
									</AccordionTrigger>
									<AccordionContent>
										Yes. It adheres to the WAI-ARIA design pattern.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-3">
									<AccordionTrigger>3. Lead by Example</AccordionTrigger>
									<AccordionContent>
										Yes. It adheres to the WAI-ARIA design pattern.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-4">
									<AccordionTrigger>4. Listen Actively</AccordionTrigger>
									<AccordionContent>
										Yes. It adheres to the WAI-ARIA design pattern.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
						<div className="Image">
							<Image
								className=""
								src="/MbakKacamata.png"
								alt="MbakKacamata"
								width={564}
								height={100}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
