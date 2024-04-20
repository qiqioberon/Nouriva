"use client";

import Link from "next/link";
import { Logo } from "../logo";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
const InterFont = Inter({ subsets: ["latin"] });
import { usePathname } from "next/navigation";

import { ChevronDown, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
	const [isRotated, setIsRotated] = useState(false);
	const handleClick = () => {
		setIsRotated(!isRotated);
	};
	const pathname = usePathname();
	return (
		<>
			<div className="fixed top-0 z-50 w-full h-24  flex flex-row px-[64px] justify-between py-[27px] items-center bg-white/80 ">
				<Logo />
				<div
					className={cn(
						"hidden md:flex",
						"flex-row",
						"gap-[64px] ",
						InterFont.className
					)}
				>
					<div>
						<Link
							className={`${
								pathname === "/" ? "font-bold" : ""
							}  hover:font-bold `}
							href="/"
						>
							<p>Home</p>
							<div
								className={`h-0.5 bg-emerald-400 rounded ${
									pathname === "/" ? "block" : "hidden"
								} `}
							></div>
						</Link>
					</div>
					<div>
						<Link
							href="/about"
							className={`${
								pathname === "/about" ? "font-bold" : ""
							}  hover:font-bold `}
						>
							<p>About Us</p>
							<div
								className={`h-0.5 bg-emerald-400 rounded ${
									pathname === "/about" ? "block" : "hidden"
								}`}
							></div>
						</Link>
					</div>
					<div>
						<Link
							href="/feature"
							className={`${
								pathname === "/feature" ? "font-bold" : ""
							}  hover:font-bold `}
						>
							<p>Feature</p>
							<div
								className={`h-0.5 bg-emerald-400 rounded ${
									pathname === "/feature" ? "block" : "hidden"
								}`}
							></div>
						</Link>
					</div>
					<div>
						<Link
							href="/tips"
							className={`${
								pathname === "/tips" ? "font-bold" : ""
							}  hover:font-bold `}
						>
							<p>Tips</p>
							<div
								className={`h-0.5 bg-emerald-400 rounded ${
									pathname === "/tips" ? "block" : "hidden"
								}`}
							></div>
						</Link>
					</div>
				</div>
				<div className={isRotated ? "flex flex-col gap-0 pt-[230px]" : ""}>
					<div
						className={cn(
							"flex flex-row gap-2 justify-center items-center",
							InterFont.className
						)}
					>
						<User size={24} color="#1C9170" />
						<p className="text-emerald-600 text-xl font-normal">
							Nouriva Aviruon
						</p>
						<ChevronDown
							size={24}
							color="#1C9170"
							className={cn(
								isRotated ? "rotate-180" : "",
								"transition-all duration-100"
							)}
							onClick={handleClick}
						/>
					</div>
					<div
						className={cn(
							isRotated ? "flex flex-col gap-2 py-6 px-2 " : "hidden",
							InterFont.className
						)}
					>
						<div className="w-full px-4 py-2 rounded-lg hover:bg-emerald-200">
							<p>Account</p>
						</div>
						<div className="w-full px-4 py-2 rounded-lg hover:bg-emerald-200">
							<p>Account</p>
						</div>
						<div className="w-full px-4 py-2 rounded-lg hover:bg-emerald-200">
							<p>Account</p>
						</div>
						<div className="w-full px-4 py-2 rounded-lg hover:bg-emerald-200">
							<p>Account</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
