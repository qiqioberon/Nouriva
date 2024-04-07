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
			<div className="overflow-x-hidden">
				<div className="h-[900px] w-[1440px] overflow-clip">
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

					<div className="mt-10 -ms-8 h-[1400px] w-[1440px] bg-emerald-500 rounded-full" />
					<Image
						className="relative bottom-0 right-24 -z-10"
						src="/VectorMlungker.svg"
						alt="Vectormlungker"
						height={400}
						width={200}
					/>
					<Image
						className="relative bottom-0 left-24 -z-10 transform scale-x-[-1]"
						src="/VectorMlungker.svg"
						alt="Vectormlungker"
						height={400}
						width={200}
					/>
				</div>
			</div>
		</>
	);
}
