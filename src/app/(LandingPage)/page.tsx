import { Logo } from "@/components/logo";
import { Inter } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Navbar from "@/components/LandingPage/navbar";

const InterFont = Inter({ subsets: ["latin"] });
export default function landingpage() {
	return (
		<>
			<Navbar />
		</>
	);
}
