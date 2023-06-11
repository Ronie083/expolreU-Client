import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useEnrollCart = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: coursesCart = [] } = useQuery({
        queryKey: ['coursesCart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enrolledCart?email=${user.email}`)
            return res.json();
        }
    })
    return [coursesCart, refetch]
};

export default useEnrollCart;