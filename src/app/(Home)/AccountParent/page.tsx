"use client";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, InfoIcon } from "lucide-react";
import { Inter, Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
const InterFont = Inter({ subsets: ["latin"] });
const SourceSerif = Source_Serif_4({
	subsets: ["latin"],
	style: ["italic", "normal"],
});

interface LoginUserForm {
	email: string;
	name: string;
	phone: string;
	password: string;
}

export default function AccountParent() {
	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const methods = useForm<LoginUserForm>();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = methods;

	const onSubmit = (data: any) => {
		console.log(data);
	};
	return (
		<>
			<div className="container flex justify-between items-center px-36">
				<div className="flex flex-col gap-12 w-[298px]">
					<h1
						className={cn(
							"font-bold text-6xl text-emerald-500",
							SourceSerif.className
						)}
					>
						Account
					</h1>
					<div className="flex flex-col gap-6">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex flex-col gap-6"
						>
							<div className="flex flex-col gap-2">
								<label
									htmlFor="email"
									className={cn("font-medium text-sm", InterFont.className)}
								>
									Email:
								</label>
								<input
									className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
									type="email"
									id="email"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^\S+@\S+$/,
											message: "Invalid email address",
										},
									})}
								/>
								{/* {errors.email && <span>{errors.email.message}</span>} */}
							</div>
							<div className="flex flex-col gap-2">
								<label
									htmlFor="Name"
									className={cn("font-medium text-sm", InterFont.className)}
								>
									Name:
								</label>
								<input
									className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
									type="text"
									id="Name"
									placeholder="Your Name"
									{...register("name", {
										required: "Name is required",
									})}
								/>
								{/* {errors.username && <span>{errors.username.message}</span>} */}
							</div>

							<div className="flex flex-col gap-2">
								<label
									htmlFor="phone"
									className={cn("font-medium text-sm", InterFont.className)}
								>
									Phone Number:
								</label>
								<input
									className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
									type="text"
									id="phone"
									{...register("phone", {
										required: "Phone number is required",
										pattern: {
											value: /^[0-9\b]+$/,
											message: "Invalid phone number",
										},
									})}
								/>
							</div>

							<div className="flex flex-col gap-2">
								<label
									htmlFor="password"
									className={cn("font-medium text-sm", InterFont.className)}
								>
									Password:
								</label>
								<div className="relative">
									<input
										className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
										type={showPassword ? "text" : "password"}
										id="password"
										{...register("password", {
											required: "Password is required",
											minLength: {
												value: 6,
												message: "Password must be at least 6 characters",
											},
										})}
									/>
									{/* {errors.password && <span>{errors.password.message}</span>} */}
									<span className="absolute inset-y-0 right-0 flex items-center pr-2">
										{showPassword ? (
											<EyeOff
												onClick={togglePasswordVisibility}
												className="h-5 w-5 text-gray-500 cursor-pointer"
											/>
										) : (
											<Eye
												onClick={togglePasswordVisibility}
												className="h-5 w-5 text-gray-500 cursor-pointer"
											/>
										)}
									</span>
								</div>
							</div>
						</form>
					</div>
					<div
						className={cn(
							" px-6 py-4 bg-emerald-50 rounded-lg flex-col justify-center items-center gap-2 inline-flex",
							InterFont.className
						)}
					>
						<div className="self-stretch justify-center items-center gap-2.5 flex flex-row">
							<InfoIcon
								strokeWidth={2}
								className="h-5 w-5 text-gray-500 cursor-pointer"
							/>
							<p className="grow shrink basis-0 self-stretch text-neutral-800 text-base font-bold  leading-none">
								Your data is complete
							</p>
						</div>
						<div className="self-stretch justify-end items-end gap-2.5 inline-flex">
							<div className="grow shrink basis-0">
								<span className="text-zinc-800 text-sm font-normal  leading-none">
									Want to update your account data or is the data incorrect?{" "}
								</span>
								<span className="text-emerald-400 text-sm font-normal  underline leading-none">
									Edit
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="">
					<Image
						className=""
						src="/MbakKacamata.png"
						alt="MbakKacamata"
						width={500}
						height={200}
					/>
				</div>
			</div>
		</>
	);
}
