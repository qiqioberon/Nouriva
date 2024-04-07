import Link from "next/link";
import Image from "next/image";
import { Source_Serif_4 } from "next/font/google";
import { cn } from "@/lib/utils";

const Font = Source_Serif_4({ subsets: ["latin"], style: "italic" });
export const Logo = () => {
	return (
		<Link href="/">
			<div
				className={cn(
					"hover:opacity-75 transition items-center gap-x-2 hidden md:flex",
					Font.className
				)}
			>
				<Image src="/Logo.svg" alt="Logo" height={50} width={50} />
				<p className="text-xl text-emerald-600 pb-1 font-bold ">Nouriva</p>
			</div>
		</Link>
	);
};
