
import useUserStore from '@/store/userstore';
import { useMutation, MutationFunction } from "@tanstack/react-query";
import main from "../main";
import { LoginUser as LoginUserType } from "@/types/LoginUserType";
import { toast } from "react-toastify";



export default function LoginUser() {
    const {
        mutate: mutateUseLoginUser,
        data: response,
        isSuccess,
    } = useMutation({
        mutationFn: (data: LoginUserType) => {
            const loginUser = data;
            return main.post(`auth/login`, loginUser);
        },
        onError: (error: Error) => toast.error(getErrorMessage(error)),
        onSuccess: () => toast.success("Sukses Login"),
    });

    if (response && response.data && response.data.data.accessToken) {
        const { accessToken } = response.data.data;
        useUserStore.getState().setAccessToken(accessToken);

        console.log(useUserStore.getState().accessToken);
    }


    return { mutateUseLoginUser, response, isSuccess };
}


function getErrorMessage(error: any) {
    let resultMessage = "";
    if (error) {
        console.log(error.request);
        const responseJson = JSON.parse(error.request.response);
        console.log(responseJson.resultMessage.en);

        resultMessage = responseJson.resultMessage.en.toString();
    }
    return resultMessage;
}
