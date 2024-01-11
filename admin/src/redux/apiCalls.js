import { publicRequest } from "../requestMethods";
import { getProductFailure, getProductStart, getProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch{
        dispatch(loginFailure());

    }

}


//NOTE: pages>productList>
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    
    try{
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    }catch{
        dispatch(getProductFailure);

    }

}