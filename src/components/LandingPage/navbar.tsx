"use client";

import Link from "next/link";
import { Logo } from "../logo";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
const InterFont = Inter({ subsets: ["latin"] });
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export default function Navbar() {
	const pathname = usePathname();
	return (
		<>
			<div className="navbar h-24  flex flex-row px-[64px] justify-between py-[27px] items-center">
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
							className={`${pathname === "/" ? "active" : "font-medium "} `}
							href="/"
						>
							<p>Home</p>
							<div
								className={`h-0.5 bg-emerald-400 rounded ${
									pathname === "/" ? "block" : "hidden"
								}`}
							></div>
						</Link>
					</div>
					<div>
						<Link href="/about">
							<p>About Us</p>
							<div
								className={`h-0.5 bg-emerald-400 rounded ${
									pathname === "/about" ? "block" : "hidden"
								}`}
							></div>
						</Link>
					</div>
					<div>
						<Link href="/Feature">
							<p>Feature</p>
							<div
								className={`h-0.5 bg-emerald-400 rounded ${
									pathname === "/feature" ? "block" : "hidden"
								}`}
							></div>
						</Link>
					</div>
					<div>
						<Link href="/tips">
							<p>Tips</p>
							<div
								className={`h-0.5 bg-emerald-400 rounded ${
									pathname === "/tips" ? "block" : "hidden"
								}`}
							></div>
						</Link>
					</div>
				</div>
				<div
					className={cn(
						"space-x-4 md:block md:w-auto flex items-center justify-between w-full",
						InterFont.className
					)}
				>
					<Button className="w-24 h-8" variant={"default"} asChild>
						<Link href="/login">Login</Link>
					</Button>
					<Button className=" w-24 h-8 " asChild variant={"outline"}>
						<Link href="/register">Register</Link>
					</Button>
				</div>
			</div>
		</>
	);
}
