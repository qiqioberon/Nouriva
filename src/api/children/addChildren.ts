import { useMutation, MutationFunction } from "@tanstack/react-query";
import main from "../main";
import { AddChild } from "@/types/AddChildType";
import { toast } from "react-toastify";

export default function AddChildren() {
    const {
        mutate: mutateAddChildren,
        data: responseAddChild,
        isSuccess,
        error,
    } = useMutation({
        mutationFn: (data: AddChild) => {
            const AddChildren = data;
            return main.post(`childs/register`, AddChildren);
        },
        onError: (error: any) => toast.error(getErrorMessage(error)),
        onSuccess: () => toast.success("Sukses Add Child"),
    });

    return { mutateAddChildren, responseAddChild, isSuccess, error };
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