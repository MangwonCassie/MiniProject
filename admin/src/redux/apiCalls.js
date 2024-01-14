import { publicRequest, userRequest } from "../requestMethods";
import { deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductStart } from "./slices/productSlice.js";
import { loginFailure, loginStart, loginSuccess } from "./slices/userSlice.js"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch{
        dispatch(loginFailure());

    }

}


//NOTE: pages>productList> and store로 연결
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    
    try{
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    }catch{
        dispatch(getProductFailure);

    }

}


export const deleteProducts = async (id, dispatch) => {
    dispatch(deleteProductStart);
    
    try{
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(res.data));
    }catch{
        dispatch(deleteProductFailure);

    }

}

export const updateProducts = async (id, dispatch) => {
        dispatch(updateProductStart);
        
    try{
        const res = await userRequest.update(`/products/${id}`);
            dispatch(deleteProductSuccess(res.data));
    }catch{
         dispatch(deleteProductFailure);
    
    }

}