import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React from "react";
import { Head } from "@inertiajs/react";

const Edit = ({ userId }) => {
    const { data, setData, post, processing, errors } = useForm({
        id: userId.id,
        name: userId.name,
        email: userId.email,
    });

    const submitData = (e) => {
        e.preventDefault();

        post(route("users.update"));
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <Head title="Edit Users" />
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">
                    Get started today!
                </h1>

                <p className="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    libero nulla eaque error neque ipsa culpa autem, at itaque
                    nostrum!
                </p>
            </div>

            <form
                onSubmit={submitData}
                className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
                <div className="relative">
                    <TextInput
                        type="hidden"
                        className="w-full"
                        value={data.id}
                        onChange={(e) => setData("id", e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="name" className="sr-only">
                        Name
                    </label>

                    <div className="relative">
                        <TextInput
                            type="text"
                            className="w-full"
                            placeholder="Name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">
                        Email
                    </label>

                    <div className="relative">
                        <TextInput
                            type="email"
                            className="w-full"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        disabled={processing}
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Edit;
