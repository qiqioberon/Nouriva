import Navbar from "@/components/Home/navbar";

export default function Home({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Navbar />

			<div className="pt-24">{children}</div>
		</>
	);
}
