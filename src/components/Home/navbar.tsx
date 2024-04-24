"use client";

import Link from "next/link";
import { Logo } from "../logo";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
const InterFont = Inter({ subsets: ["latin"] });
import { usePathname } from "next/navigation";

import { ChevronDown, LogOut, User } from "lucide-react";
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
								pathname === "/FindReportMonitor" ? "font-bold" : ""
							}  hover:font-bold `}
							href="/FindReportMonitor"
						>
							<p>Nutrition Monitor</p>
							<div
								className={`h-0.5 bg-emerald-400 rounded ${
									pathname === "/FindReportMonitor" ? "block" : "hidden"
								} `}
							></div>
						</Link>
					</div>
					<div>
						<Link
							href="/NutritionReport"
							className={`${
								pathname === "/NutritionReport" ? "font-bold" : ""
							}  hover:font-bold `}
						>
							<p>Nutrition Report</p>
							<div
								className={`h-0.5 bg-emerald-400 rounded ${
									pathname === "/NutritionReport" ? "block" : "hidden"
								}`}
							></div>
						</Link>
					</div>
					<div>
						<Link
							href="/AccountChildren"
							className={`${
								pathname === "/AccountChildren" ? "font-bold" : ""
							}  hover:font-bold `}
						>
							<p>Account Children</p>
							<div
								className={`h-0.5 bg-emerald-400 rounded ${
									pathname === "/AccountChildren" ? "block" : "hidden"
								}`}
							></div>
						</Link>
					</div>
					<div>
						<Link
							href="/AccountParent"
							className={`${
								pathname === "/AccountParent" ? "font-bold" : ""
							}  hover:font-bold `}
						>
							<p>Your Account</p>
							<div
								className={`h-0.5 bg-emerald-400 rounded ${
									pathname === "/AccountParent" ? "block" : "hidden"
								}`}
							></div>
						</Link>
					</div>
				</div>
				<div className={isRotated ? "flex flex-col gap-0 pt-[87px]" : ""}>
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
						<Link href="/">
							<div className="w-full px-4 py-2 rounded-lg hover:bg-emerald-200 flex flex-row gap-4 items-center ">
								<LogOut size={25} strokeWidth={1} />
								<p>Logout</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
