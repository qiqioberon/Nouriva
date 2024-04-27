"use client";
import { cn } from "@/lib/utils";

import { Edit, Eye, EyeOff, InfoIcon } from "lucide-react";
import { Inter, Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import getUser from "@/api/parent/getuser";
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
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState(false);
	const { getUserData } = getUser();
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
					<div className="flex flex-row gap-5">
						<h1
							className={cn(
								"font-bold text-6xl text-emerald-500",
								SourceSerif.className
							)}
						>
							Account
						</h1>
						{!isEditing ? (
							<div
								className="flex flex-row gap-3 bg-emerald-500 text-white justify-center items-center rounded-lg px-3 py-1 hover:bg-emerald-100 cursor-pointer"
								onClick={() => setIsEditing(!isEditing)}
							>
								<p>Edit</p>
								<Edit color="white" />
							</div>
						) : (
							<div
								className="flex flex-row gap-3 bg-emerald-500 text-white justify-center items-center rounded-lg px-3 py-1 hover:bg-emerald-100 cursor-pointer"
								onClick={() => setIsEditing(!isEditing)}
							>
								<p>Submit</p>
								<Edit color="white" />
							</div>
						)}
					</div>
					<div className="flex flex-col gap-6">
						{isEditing ? (
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
						) : (
							<div className="flex flex-col gap-6">
								<div className="flex flex-col gap-2">
									<h5
										className={cn("font-medium text-sm", InterFont.className)}
									>
										Email
									</h5>
									<p
										className={cn(
											"w-full border border-emerald-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
											InterFont.className
										)}
									>
										{getUserData?.data.data.email}
									</p>
								</div>
								<div className="flex flex-col gap-2">
									<h5
										className={cn("font-medium text-sm", InterFont.className)}
									>
										Name
									</h5>
									<p
										className={cn(
											"w-full border border-emerald-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
											InterFont.className
										)}
									>
										{getUserData?.data.data.name}
									</p>
								</div>
								<div className="flex flex-col gap-2">
									<h5
										className={cn("font-medium text-sm", InterFont.className)}
									>
										Phone Number
									</h5>
									<p
										className={cn(
											"w-full border border-emerald-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
											InterFont.className
										)}
									>
										{getUserData?.data.data.phoneNumber}
									</p>
								</div>
							</div>
						)}
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
