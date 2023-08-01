import LoadingPage from "../UI/LoadingPage/LoadingPage";
import PaymentPage from "./PaymentPage"
import { useState } from "react";

const PaymentPageMain = () => {

    const [loading, Setloading] = useState(true);

    setTimeout(() => {
        Setloading(false);
    }, 1000)

    return (
        <>
            {loading ? <LoadingPage /> : <PaymentPage />}
        </>
    )
}

export default PaymentPageMain;