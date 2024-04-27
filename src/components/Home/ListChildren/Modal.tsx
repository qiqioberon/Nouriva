"use client";
import { useForm } from "react-hook-form";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import AddChildren from "@/api/children/addChildren";
const InterFont = Inter({ subsets: ["latin"] });
interface RegisterChildren {
	name: string;
	weight: number;
	height: number;
	birthDate: string;
}

export default function ModalAddChildren({
	setShowModal,
}: {
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const methods = useForm<RegisterChildren>();
	const { mutateAddChildren, responseAddChild, isSuccess } = AddChildren();
	const { register, handleSubmit, formState } = methods;
	const onSubmit = async (data: RegisterChildren) => {
		console.log(data);
		await mutateAddChildren(data);
		setShowModal(false);
	};

	console.log(isSuccess);
	if (isSuccess && responseAddChild) {
		console.log(responseAddChild);
	}

	return (
		<>
			<div className="fixed top-0 z-40 h-screen inset-0 bg-black bg-opacity-50 flex justify-center pt-28 pb-20 overflow-y-auto">
				<div className="w-[500px] h-fit p-12 bg-white justify-center items-center rounded-2xl flex flex-col gap-8 ">
					<div className="flex flex-row justify-between items-center w-full">
						<h1 className="text-4xl font-bold">Add Children</h1>
						<X
							onClick={() => setShowModal(false)}
							className="hover:bg-slate-200 rounded-full "
						/>
					</div>
					<form className="flex flex-col gap-6 w-full">
						<div className="flex flex-col gap-2">
							<label
								htmlFor="name"
								className={cn("font-medium text-lg", InterFont.className)}
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
								{...register("name", { required: true })}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label
								htmlFor="weight"
								className={cn("font-medium text-lg", InterFont.className)}
							>
								Weight
							</label>
							<input
								type="number"
								id="weight"
								className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
								{...register("weight", { required: true })}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label
								htmlFor="height"
								className={cn("font-medium text-lg", InterFont.className)}
							>
								Height
							</label>
							<input
								type="number"
								id="height"
								className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
								{...register("height", { required: true })}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label
								htmlFor="birthDate"
								className={cn("font-medium text-lg", InterFont.className)}
							>
								Birth Date
							</label>
							<input
								type="date"
								id="birthDate"
								className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
								{...register("birthDate", { required: true })}
							/>
						</div>
						<Button onClick={handleSubmit(onSubmit)}>Add Children</Button>
					</form>
				</div>
			</div>
		</>
	);
}
