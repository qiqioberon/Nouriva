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
							className="relative -right-2/3 -z-10"
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
					<div className="relative -z-10  -top-[500px] mt-10 -ms-40 h-[120vw] w-[120vw] bg-emerald-500 rounded-full" />
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
				<div className="h-[700px] w-full overflow-hidden flex flex-col justify-center items-center">
					<div className="flex flex-col gap-16 justify-center items-center">
						<Image
							className="absolute right-0 -z-10 transform scale-x-[-1] pb-[300px]"
							src="/VectorMlungker.svg"
							alt="Vectormlungker"
							height={200}
							width={100}
						/>
						<div className="judul  h-[144px] flex flex-col justify-center items-center">
							<h1
								className={cn(
									"font-bold text-emerald-500 text-6xl",
									SourceSerif.className
								)}
							>
								Nouriva
							</h1>
							<h1 className="text-emerald-500 opacity-10 relative -z-10  -top-20 font-bold text-9xl">
								NOURIVA
							</h1>
						</div>
						<div className=" w-fit h-16 px-6 py-2.5 bg-stone-50 rounded-3xl shadow justify-center items-center gap-2.5 flex flex-row">
							<div className="text-zinc-800 text-2xl font-normal font-['Poppins'] leading-10">
								* Easy Nutrition Tracking
							</div>
							<div className="text-zinc-800 text-2xl font-normal font-['Poppins'] leading-10">
								* Parenting Tips
							</div>
							<div className="text-zinc-800 text-2xl font-normal font-['Poppins'] leading-10">
								* Empowering Knowledge
							</div>
						</div>
						<div className=" flex justify-center">
							<div className="w-[1008px] h-44 bg-gradient-to-br from-[#FFDD83] to-[#28CC9E] rounded-full overflow-hidden flex justify-center items-center">
								<div className="flex flex-col w-fit absolute z-40 gap-4 justify-center items-center">
									<h1
										className={cn(
											"font-semibold text-4xl text-white",
											InterFont.className
										)}
									>
										What are you waiting for?
									</h1>
									<Button className="rounded-3xl w-[118px]">Try Now!</Button>
								</div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 1440 320"
									className="relative z-10 w-full"
								>
									<path
										fill="#DCEDC8"
										className="opacity-10"
										fill-opacity="1"
										d="M0,128L80,112C160,96,320,64,480,85.3C640,107,800,181,960,181.3C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
									></path>
									<path
										fill="#DCEDC8"
										className="opacity-20"
										fill-opacity="1"
										d="M0,288L34.3,240C68.6,192,137,96,206,48C274.3,0,343,0,411,16C480,32,549,64,617,112C685.7,160,754,224,823,245.3C891.4,267,960,245,1029,218.7C1097.1,192,1166,160,1234,160C1302.9,160,1371,192,1406,208L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
									></path>
								</svg>
							</div>
							<Image
								className="absolute left-0 transform z-20 pt-[200px]"
								src="/VectorMlungker.svg"
								alt="Vectormlungker"
								height={100}
								width={100}
							/>
						</div>
					</div>
				</div>
				<div className="h-[300px] w-full overflow-hidden flex justify-end items-end">
					<div className="w-screen h-[300px] bg-gradient-to-b from-white to-[#5DD29D] absolute "></div>
					<Image
						className="relative bottom-0 scale-y-[-1]"
						src="/Rectanglebottom1.svg"
						alt="Rectanglebottom"
						width={1600}
						height={200}
					/>
				</div>
				<div className="w-screen h-fit py-5 relative bg-emerald-500 flex flex-col pt-24 gap-14 justify-center items-center">
					<div className="w-[1095px] left-[173px] top-[90px]   flex flex-row justify-center items-center gap-32">
						<Button
							className={cn(
								"text-emerald-50 text-3xl font-medium",
								InterFont.className
							)}
						>
							<p>Home</p>
						</Button>
						<Button
							className={cn(
								"text-emerald-50 text-3xl font-medium ",
								InterFont.className
							)}
						>
							<p>About Us</p>
						</Button>
						<Button
							className={cn(
								"text-emerald-50 text-3xl font-medium ",
								InterFont.className
							)}
						>
							<p>Features</p>
						</Button>
						<Button
							className={cn(
								"text-emerald-50 text-3xl font-medium ",
								InterFont.className
							)}
						>
							<p>FAQ</p>
						</Button>
						<Button>
							<p
								className={cn(
									"text-emerald-50 text-3xl font-medium ",
									InterFont.className
								)}
							>
								Join{" "}
							</p>
						</Button>
					</div>
					<div className="w-[874px] left-[283px] top-[184px]  justify-between items-start inline-flex">
						<Button
							className={cn(
								"text-emerald-50 text-base font-normal ",
								InterFont.className
							)}
						>
							<p>Terms & conditions</p>
						</Button>

						<Button
							className={cn(
								"text-emerald-50 text-base font-normal ",
								InterFont.className
							)}
						>
							<p>Privacy policy</p>
						</Button>
						<Button
							className={cn(
								"text-emerald-50 text-base font-normal ",
								InterFont.className
							)}
						>
							<p>Contact</p>
						</Button>
						<Button
							className={cn(
								"text-emerald-50 text-base font-normal ",
								InterFont.className
							)}
						>
							<p>Cookie policy</p>
						</Button>
						<Button
							className={cn(
								"text-emerald-50 text-base font-normal ",
								InterFont.className
							)}
						>
							<p>Support</p>
						</Button>
					</div>
					<div className="  w-[600px]  h-1 bg-white   "></div>

					<div className="left-[460.45px] top-[275px]  justify-start items-start gap-[40.48px] inline-flex">
						<Image
							className=""
							src="/facebook.png"
							alt="facebook"
							width={52}
							height={200}
						/>
						<Image
							className=""
							src="/instagram.png"
							alt="instagram"
							width={52}
							height={200}
						/>
						<Image
							className=""
							src="/twitter.png"
							alt="twitter"
							width={52}
							height={200}
						/>
						<Image
							className=""
							src="/pinterest.png"
							alt="pinterest"
							width={52}
							height={200}
						/>
						<Image
							className=""
							src="/youtube.png"
							alt="youtube"
							width={52}
							height={200}
						/>
						<Image
							className=""
							src="/gmail.png"
							alt="gmail"
							width={52}
							height={200}
						/>
					</div>
					<div className="left-[551px] top-[400px]  text-emerald-50 text-xl font-medium font-['Lato'] leading-normal">
						© 2023 Nouriva. All Rights Reserved.
					</div>
				</div>
			</div>
		</>
	);
}
