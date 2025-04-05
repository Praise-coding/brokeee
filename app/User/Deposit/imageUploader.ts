"use server"
import {supabase} from "@/app/api/supabaseImage/server";
import {auth} from "@/app/api/auth/lib/authOption";

export const uploadImage = async (rawImageFile: File | undefined) => {
    if (rawImageFile) {
        const userData = await auth()
        const image = rawImageFile
        const fileExt = image?.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;

        const filePath = `${userData?.user.UserInfo.FirstName + " " + userData?.user.UserInfo.LastName}/${fileName}`;

        const {data, error} = await supabase.storage
            .from("images")
            .upload(filePath, image, {
                cacheControl: "3600",
                upsert: false,
            });

        if (error) {
            throw new Error("an error occurred")
        } else {
            return `https://qjwmnqxjncnbdtxcvsdd.supabase.co/storage/v1/object/public/${data.fullPath}`;
        }
    }

    return null
};

