import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateAddressForm from "./Partials/UpdateAddressForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import Layout from "@/Layouts/Layout";

import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Edit({ auth, mustVerifyEmail, status }) {
    const [edit, setEdit] = useState();
    return (
        <>
            <Head title="Profile" />
            <Layout auth={auth}>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdateAddressForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
