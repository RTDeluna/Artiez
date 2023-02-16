
import ApplicationLogo from "@/Components/ApplicationLogo";

import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (

        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link to="/">
                    <img
                        src="assets/artiez.svg"
                        alt=""
                        className="w-20 h-20 fill-current "
                    />
                </Link>
            </div>


            {/* <div className="w-2/3 min-h-screen flex place-items-center mx-auto">
                <div className="mt-6 px-6 py-4 shadow-md overflow-hidden sm:rounded-lg"> */}
            {children}
            {/* </div>
            </div> */}
            {/* </div> */}
        </>
    );
}

{
}