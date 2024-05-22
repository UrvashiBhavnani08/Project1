// actions/companyActions

import axios from "axios";

export const CREATE_COMPANY_REQUEST = "CREATE_COMPANY_REQUEST";
export const CREATE_COMPANY_SUCCESS = "CREATE_COMPANY_SUCCESS";
export const CREATE_COMPANY_FAILURE = "CREATE_COMPANY_FAILURE";

export const UPDATE_COMPANY_REQUEST = "UPDATE_COMPANY_REQUEST";
export const UPDATE_COMPANY_SUCCESS = "UPDATE_COMPANY_SUCCESS";
export const UPDATE_COMPANY_FAILURE = "UPDATE_COMPANY_FAILURE";

export const GET_COMPANIES_REQUEST = "GET_COMPANIES_REQUEST";
export const GET_COMPANIES_SUCCESS = "GET_COMPANIES_SUCCESS";
export const GET_COMPANIES_FAILURE = "GET_COMPANIES_FAILURE";

export const GET_COMPANY_REQUEST = "GET_COMPANY_REQUEST";
export const GET_COMPANY_SUCCESS = "GET_COMPANY_SUCCESS";
export const GET_COMPANY_FAILURE = "GET_COMPANY_FAILURE";

export const DELETE_COMPANY_REQUEST = "DELETE_COMPANY_REQUEST";
export const DELETE_COMPANY_SUCCESS = "DELETE_COMPANY_SUCCESS";
export const DELETE_COMPANY_FAILURE = "DELETE_COMPANY_FAILURE";

export const createCompany = (formData) => async (dispatch) => {
  dispatch({ type: CREATE_COMPANY_REQUEST });

  try {
    const { data } = await axios.post("http://localhost:5000/api/sales/create-company", formData);

    dispatch({
      type: CREATE_COMPANY_SUCCESS,
      payload: data,
    });
    // window.location.reload()
  } catch (error) {
    dispatch({
      type: CREATE_COMPANY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateCompany = (id, formData) => async (dispatch) => {
  dispatch({ type: UPDATE_COMPANY_REQUEST });

  try {
    const { data } = await axios.put(`/api/companies/${id}`, formData);

    dispatch({
      type: UPDATE_COMPANY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_COMPANY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const getCompanies = () => async (dispatch) => {
  dispatch({ type: GET_COMPANIES_REQUEST });
  try {
    const { data } = await axios.get(`http://localhost:5000/api/sales/get`);
    dispatch({
      type: GET_COMPANIES_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: GET_COMPANIES_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};





export const getCompany = (id) => async (dispatch) => {
  dispatch({ type: GET_COMPANY_REQUEST });

  try {
    const { data } = await axios.get(`http://localhost:5000/api/sales/get/${id}`);
    dispatch({
      type: GET_COMPANY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMPANY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteCompany = (id) => async (dispatch) => {
  dispatch({ type: DELETE_COMPANY_REQUEST });

  try {
    await axios.delete(`http://localhost:5000/api/sales/delete/${id}`);

    dispatch({
      type: DELETE_COMPANY_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COMPANY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};