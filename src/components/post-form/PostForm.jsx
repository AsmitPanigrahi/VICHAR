import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImSpinner2 } from "react-icons/im";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");

        const submit = async (data) => {
        if (!userData) {
            setError("User data not available. Please try again.");
            return;
        }

        setError("");
        setLoader(true);
        try {
            console.log("data", data);
            console.log("post", post);
            if (post) {
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

                if (file) {
                    appwriteService.deleteFile(post.featuredImage);
                }

                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined,
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                if (!data.image[0]) {
                    console.error("No image provided");
                    setError("No image provided");
                    return;
                }
                const file = await appwriteService.uploadFile(data.image[0]);
                console.log("file", file);
                console.log("userData", userData);

                if (file && userData) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                }
            }
        } catch (error) {
            console.log("Error on PostForm on submit function", error);
            setError(error.message);
        } finally {
            setLoader(false);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    if (!userData) {
        return <div>Loading user data...</div>;
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap -mx-2">
    <div className="w-full lg:w-full px-2 text-lg">
        <Input
            label="Title"
            placeholder="Title"
            className="mb-4 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("title", { required: true })}
        />
        <Input
            label="Slug"
            placeholder="Slug"
            className="mb-4 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
        />
        <RTE label="Content" name="content" control={control} defaultValue={getValues("content")}/>
        <div className="mt-6">
        <Input
            label="Featured Image"
            type="file"
            className="mb-4 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
        />
        </div>
        
        {post && (
            <div className="w-full my-4">
                <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-lg"
                />
            </div>
        )}
        <Select
            options={["active", "inactive"]}
            label="Status"
            className="my-4 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : "bg-blue-500"} className="my-4 w-full transition duration-300 ease-in-out hover:bg-green-600">
            {loader ? (
                <ImSpinner2 className="animate-spin mx-auto" />
            ) : post ? (
              "Update"
            ) : (
              "Submit"
            )}
        </Button>
        {error && <p className="text-red-400">{error}</p>}
    </div>
</form>
    );
}