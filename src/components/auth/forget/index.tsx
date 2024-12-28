"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { sendRequest } from "@/utils/api";

const ForgetPassword = () => {

    // const onSendMail = async () => {
    //     if (!form.email) {
    //         setErrors({ ...errors, email: "Please enter your email." });
    //         return;
    //     }

    //     if (!validateEmail(form.email)) {
    //         setErrors({ ...errors, email: "Invalid email format." });
    //         return;
    //     }

    //     const promise = sendRequest<IBackendRes<{ _id: string; email: string }>>({
    //         method: "POST",
    //         url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/retry-password`,
    //         body: { email: form.email },
    //     });

    //     const response = await toast.promise(promise, {
    //         pending: "Sending email...",
    //     });

    //     if (response.statusCode === 201) {
    //         setIsDisabled(true);
    //         toast.success("Please check your email to get the verification code.");
    //     } else if (response.statusCode === 400) {
    //         setErrors({ ...errors, email: "Email does not exist." });
    //     } else {
    //         toast.error("An error occurred.");
    //     }
    // };

    return (
        <div></div>
    )

    // return (
    //     <>
    //         <h2 className="text-2xl md:text-3xl text-center font-bold tracking-wide text-white uppercase">
    //             Forget Password
    //         </h2>
    //         <div className="mt-4">
    //             <label htmlFor="email" className="block text-md font-medium text-white">
    //                 Email <span className="text-red-600">*</span>
    //             </label>
    //             <label className="input input-bordered w-full mt-2 pl-3 pr-0 py-2 rounded-md text-gray-800 flex items-center gap-2">
    //                 <input
    //                     type="email"
    //                     id="email"
    //                     name="email"
    //                     value={form.email}
    //                     className="grow input focus:border-0 p-0"
    //                     placeholder="Please enter your email"
    //                     onChange={handleChange}
    //                 />
    //                 <button
    //                     className="btn rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md"
    //                     disabled={isDisabled}
    //                     onClick={onSendMail}
    //                 >
    //                     {isDisabled ? "Waiting" : "Send"}
    //                 </button>
    //             </label>
    //             {errors.email && (
    //                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
    //             )}
    //         </div>

    //         <div className="mt-4">
    //             <label
    //                 htmlFor="password"
    //                 className="block text-md font-medium text-white"
    //             >
    //                 Password <span className="text-red-600">*</span>
    //             </label>
    //             <input
    //                 id="password"
    //                 name="password"
    //                 type="password"
    //                 placeholder="Please enter your password"
    //                 maxLength={255}
    //                 className="input input-bordered w-full mt-2 px-3 py-2 rounded-md text-gray-800"
    //                 onChange={handleChange}
    //             />
    //             {errors.password && (
    //                 <p className="text-red-500 text-sm mt-1">{errors.password}</p>
    //             )}
    //         </div>

    //         <div className="mt-4">
    //             <label
    //                 htmlFor="repassword"
    //                 className="block text-md font-medium text-white"
    //             >
    //                 Re-password <span className="text-red-600">*</span>
    //             </label>
    //             <input
    //                 id="repassword"
    //                 name="repassword"
    //                 type="password"
    //                 placeholder="Please re-enter your password"
    //                 maxLength={255}
    //                 className="input input-bordered w-full mt-2 px-3 py-2 rounded-md text-gray-800"
    //                 onChange={handleChange}
    //             />
    //             {errors.repassword && (
    //                 <p className="text-red-500 text-sm mt-1">{errors.repassword}</p>
    //             )}
    //         </div>

    //         <div className="mt-4">
    //             <label htmlFor="code" className="block text-md font-medium text-white">
    //                 Code <span className="text-red-600">*</span>
    //             </label>
    //             <input
    //                 id="code"
    //                 name="code"
    //                 type="code"
    //                 placeholder="Please enter the code sent to your email"
    //                 maxLength={255}
    //                 className="input input-bordered w-full mt-2 px-3 py-2 rounded-md text-gray-800"
    //                 onChange={handleChange}
    //             />
    //             {errors.code && (
    //                 <p className="text-red-500 text-sm mt-1">{errors.code}</p>
    //             )}
    //         </div>

    //         <button
    //             type="button"
    //             className="special-button w-full mt-8 py-2"
    //             onClick={onFinish}
    //         >
    //             Reset Password
    //         </button>
    //     </>
    // );
};

export default ForgetPassword;