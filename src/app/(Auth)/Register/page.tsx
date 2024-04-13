"use client";
import { cn } from "@/lib/utils";
import { Inter, Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import { useForm } from "react-hook-form";
const InterFont = Inter({ subsets: ["latin"] });
const SourceSerif = Source_Serif_4({
	subsets: ["latin"],
	style: ["italic", "normal"],
});

interface RegisterUserForm {
	email: string;
	password: string;
	name: string;
	confirmPassword: string;
}

export default function Register() {
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

				<div className="w-[720px] h-fit pt-32 flex flex-col justify-start items-center">
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
						<div className="isi flex flex-col gap-6">
							<form onSubmit={handleSubmit(onSubmit)}>
								<h2>Register</h2>
								<div>
									<label htmlFor="Name">Name:</label>
									<input
										type="text"
										id="Name"
										{...register("name", {
											required: "Name is required",
										})}
									/>
									{/* {errors.username && <span>{errors.username.message}</span>} */}
								</div>

								<div>
									<label htmlFor="email">Email:</label>
									<input
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

								<div>
									<label htmlFor="password">Password:</label>
									<input
										type="password"
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
								</div>

								<div>
									<label htmlFor="confirmPassword">Confirm Password:</label>
									const password = useRef(""); // Declare the password variable
									<input
										type="password"
										id="confirmPassword"
										{...register("confirmPassword", {
											required: "Please confirm your password",
											// validate: (value) =>
											// 	value === password.current ||
											// 	"The passwords do not match",
										})}
									/>
									{/* {errors.confirmPassword && (
										<span>{errors.confirmPassword.message}</span>
									)} */}
								</div>

								<button type="submit">Register</button>
							</form>
						</div>
						<div className="already"></div>
					</div>
				</div>
			</div>
		</>
	);
}
