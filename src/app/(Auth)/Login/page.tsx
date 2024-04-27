"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Inter, Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginUser as LoginType } from "@/types/LoginUserType";
import LoginUser from "@/api/parent/login";

const InterFont = Inter({ subsets: ["latin"] });
const SourceSerif = Source_Serif_4({
	subsets: ["latin"],
	style: ["italic", "normal"],
});

export default function Login() {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const { mutateUseLoginUser, response, isSuccess } = LoginUser();
	const methods = useForm<LoginType>();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = methods;

	const onSubmit = async (data: any) => {
		try {
			console.log(data);
			console.log(isSuccess);

			await mutateUseLoginUser(data);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	if (isSuccess && response && response.status === 200) {
		console.log(response);
		console.log(response?.status);
		const { accessToken } = response.data.data;
		if (typeof window !== "undefined") {
			localStorage.setItem("accessToken", accessToken);
		}
		console.log(accessToken);

		router.push("/FindReportMonitor");
	}
	return (
		<>
			<div className="flex flex-row gap-0 w-screen">
				<div className="w-[720px] pt-32 flex flex-col justify-start items-center">
					<div className="w-[569px] h-fit flex-col justify-start items-start gap-[22px] inline-flex">
						<div className="w-full">
							<div
								className={cn(
									"text-zinc-800 text-4xl font-light italic",
									InterFont.className
								)}
							>
								Welcome Back To
							</div>
							<div
								className={cn(
									"text-zinc-800 text-5xl font-semibold italic",
									SourceSerif.className
								)}
							>
								Nouriva
							</div>
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

				<div className="w-[720px] pt-32 flex flex-col justify-center items-center">
					<div className="w-[458px] bg-white flex flex-col gap-8 shadow-lg pb-10">
						<div className="title ">
							<h1
								className={cn(
									"font-semibold text-5xl text-emerald-600 text-center",
									SourceSerif.className
								)}
							>
								Login
							</h1>
						</div>
						<div className="isi  px-20 py-10">
							<form className="flex flex-col gap-6">
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
								<a href="#" className=" text-gray-500 cursor-pointer text-end">
									Forgot Password?
								</a>
								<Button onClick={handleSubmit(onSubmit)}>Login</Button>
							</form>
						</div>
						<div className="already flex flex-row gap-2 justify-center items-center">
							<p className={cn("font-medium text-sm", InterFont.className)}>
								You dont have an account yet?
							</p>
							<Button
								className={cn("font-medium text-sm ", InterFont.className)}
								variant="outline"
								asChild
							>
								<Link href="/Register">Register</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
