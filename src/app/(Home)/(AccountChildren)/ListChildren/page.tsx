"use client";
import ModalAddChildren from "@/components/Home/ListChildren/Modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Info, InfoIcon, Plus } from "lucide-react";
import { Inter, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const InterFont = Inter({ subsets: ["latin"] });
const SourceSerif = Source_Serif_4({
	subsets: ["latin"],
	style: ["italic", "normal"],
});

export default function ListChildren() {
	const [showModal, setShowModal] = useState(false);

	const bgImage = "./Logo.svg";
	return (
		<>
			{showModal && <ModalAddChildren setShowModal={setShowModal} />}
			<div
				className="absolute w-full h-full bg-center bg-contain -z-10 "
				style={{
					backgroundImage: `url(${bgImage})`,
					opacity: 0.1, // Set the desired opacity level
					backgroundRepeat: "no-repeat",
				}}
			/>
			<div className="container relative flex flex-col gap-5 justify-center items-center overflow-hidden mx-0 pt-10">
				<div className="grid grid-cols-4 gap-6 w-full">
					<div className="flex flex-col gap-0">
						<div className="w-full bg-orange-100 p-3 rounded-lg relative -z-10 flex flex-row justify-center items-center gap-2">
							<InfoIcon size={32} />
							<p>Data is incomplete</p>
						</div>
						<div className="flex flex-col gap-6 border border-slate-500 w-full h-fit p-6">
							<h1>1st Children</h1>
							<div className="flex flex-col gap-2">
								<p>Name: Nourivano Yayaya</p>
								<p>Age : 2 Years Old</p>
							</div>
							<div className="flex flex-row justify-between">
								<Button variant="default" asChild>
									<Link href="/AccountChildren">Profile</Link>
								</Button>
								<Button variant="outline" asChild>
									<Link href="NutritionReport"> Nutrition Report</Link>
								</Button>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-0 pt-14">
						{/* <div className="w-full bg-orange-100 p-3 rounded-lg relative -z-10 flex flex-row justify-center items-center gap-2">
							<InfoIcon size={32} />
							<p>Data is incomplete</p>
						</div> */}
						<div className="flex flex-col gap-6 border border-slate-500 w-full h-fit p-6">
							<h1>2st Children</h1>
							<div className="flex flex-col gap-2">
								<p>Name: Senourivano</p>
								<p>Age : 2 Years Old</p>
							</div>
							<div className="flex flex-row justify-between">
								<Button variant="default" asChild>
									<Link href="/AccountChildren">Profile</Link>
								</Button>
								<Button variant="outline" asChild>
									<Link href="NutritionReport"> Nutrition Report </Link>
								</Button>
							</div>
						</div>
					</div>
					<div className="flex flex-row gap-0 pt-14 h-full">
						<div
							className="flex flex-col gap-6 border border-slate-500 w-full h-full p-6 justify-center items-center hover:bg-emerald-100 cursor-pointer"
							onClick={() => setShowModal(!showModal)}
						>
							<Plus size={32} />
							<p>Add Children</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
