import Navbar from "@/components/Home/navbar";
import { QueryProvider } from "@/components/providers/query-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<QueryProvider>
				<Navbar />

				<div className="pt-24 flex justify-center items-center w-full">
					{children}
				</div>
				<ToastContainer position="top-center" />
			</QueryProvider>
		</>
	);
}
