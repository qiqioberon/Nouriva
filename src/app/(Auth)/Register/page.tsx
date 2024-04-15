"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Inter, Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
const InterFont = Inter({ subsets: ["latin"] });
const SourceSerif = Source_Serif_4({
	subsets: ["latin"],
	style: ["italic", "normal"],
});

interface RegisterUserForm {
	email: string;
	name: string;
	phone: string;
	password: string;
	confirmPassword: string;
	reminder: boolean;
}

export default function Register() {
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordrep, setShowPasswordrep] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const methods = useForm<RegisterUserForm>();
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
			<div className="flex flex-row gap-0 w-screen">
				<div className="w-[720px] pt-32 flex flex-col justify-start items-center">
					<div className="w-[569px] h-fit flex-col justify-start items-start gap-[22px] inline-flex">
						<div className="w-full">
							<span
								className={cn(
									"text-zinc-800 text-4xl font-light italic",
									InterFont.className
								)}
							>
								Elevate Your Parenting Experience with{" "}
							</span>
							<span
								className={cn(
									"text-zinc-800 text-5xl font-semibold italic",
									SourceSerif.className
								)}
							>
								Nouriva
							</span>
						</div>
						<div
							className={cn(
								"text-zinc-800 text-sm font-light ",
								InterFont.className
							)}
						>
							-Revolutionizing Parenthood
						</div>
					</div>
					<div className="imagebg mt-10">
						<Image
							className="absolute -z-10 left-20 transform"
							src="/illustrasiAuth.png"
							alt="illustrasiAuth"
							height={400}
							width={457}
						/>
						<div className="w-full h-48 bg-emerald-500 absolute -z-20 left-0 mt-10" />
					</div>
				</div>

				<div className="w-[720px] h-fit pt-20 flex flex-col justify-start items-center">
					<div className="w-[458px] bg-white flex flex-col gap-8">
						<div className="title ">
							<h1
								className={cn(
									"font-semibold text-5xl text-emerald-600 text-center",
									SourceSerif.className
								)}
							>
								Register
							</h1>
						</div>
						<div className="isi  px-20 py-10">
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

								<div className="flex flex-col gap-2">
									<label
										htmlFor="confirmPassword"
										className={cn("font-medium text-sm", InterFont.className)}
									>
										Confirm Password:
									</label>
									<div className="relative">
										<input
											className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
											type={showPasswordrep ? "text" : "password"}
											id="confirmPassword"
											{...register("confirmPassword", {
												required: "Please confirm your password",
												// validate: (value) =>
												// 	value === password.current ||
												// 	"The passwords do not match",
											})}
										/>
										<span className="absolute inset-y-0 right-0 flex items-center pr-2">
											{showPasswordrep ? (
												<EyeOff
													onClick={() => setShowPasswordrep(!showPasswordrep)}
													className="h-5 w-5 text-gray-500 cursor-pointer"
												/>
											) : (
												<Eye
													onClick={() => setShowPasswordrep(!showPasswordrep)}
													className="h-5 w-5 text-gray-500 cursor-pointer"
												/>
											)}
										</span>
									</div>
									{/* {errors.confirmPassword && (
										<span>{errors.confirmPassword.message}</span>
									)} */}
								</div>

								<div className="flex flex-col gap-2 items-center">
									<p className={cn("font-medium text-sm", InterFont.className)}>
										Do you want to get reminder daily food?
									</p>
									<div className="flex flex-row gap-0">
										<div className="flex flex-row gap-2 px-2 py-2">
											<input
												type="radio"
												id="reminder"
												{...register("reminder")}
											/>{" "}
											<label
												className={cn(
													"font-medium text-sm",
													InterFont.className
												)}
											>
												Yes
											</label>
										</div>
										<div className="flex flex-row gap-2 px-2 py-2">
											<input
												type="radio"
												id="reminder"
												{...register("reminder")}
											/>{" "}
											<label
												className={cn(
													"font-medium text-sm",
													InterFont.className
												)}
											>
												Maybe Later
											</label>
										</div>
									</div>
								</div>
								<Button>Register</Button>
							</form>
						</div>
						<div className="already flex flex-row gap-2 justify-center items-center">
							<p className={cn("font-medium text-sm", InterFont.className)}>
								Already have account?
							</p>
							<a
								href="/login"
								className={cn(
									"font-medium text-sm text-emerald-400 hover:text-emerald-800",
									InterFont.className
								)}
							>
								Login
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
