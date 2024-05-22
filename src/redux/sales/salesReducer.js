// reducers/companyReducer

import {
    CREATE_COMPANY_REQUEST,
    CREATE_COMPANY_SUCCESS,
    CREATE_COMPANY_FAILURE,
    UPDATE_COMPANY_REQUEST,
    UPDATE_COMPANY_SUCCESS,
    UPDATE_COMPANY_FAILURE,
    GET_COMPANIES_REQUEST,
    GET_COMPANIES_SUCCESS,
    GET_COMPANIES_FAILURE,
    GET_COMPANY_REQUEST,
    GET_COMPANY_SUCCESS,
    GET_COMPANY_FAILURE,
    DELETE_COMPANY_REQUEST,
    DELETE_COMPANY_SUCCESS,
    DELETE_COMPANY_FAILURE,
} from "./salesAction";

const initialState = {
    companies: [],
    company:[],
    loading: false,
    error: null,    
};

export const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COMPANY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CREATE_COMPANY_SUCCESS:
            return {
                ...state,
                companies: [...state.companies, action.payload],
                loading: false,
                error: null,
            };
        case CREATE_COMPANY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case UPDATE_COMPANY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case UPDATE_COMPANY_SUCCESS:
            const updatedCompanies = state.companies.map((company) => {
                if (company.id === action.payload.id) {
                    return {
                        ...company,
                        ...action.payload,
                    };
                } else {
                    return company;
                }
            });
            return {
                ...state,
                companies: updatedCompanies,
                loading: false,
                error: null,
            };
        case UPDATE_COMPANY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };



        case GET_COMPANIES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_COMPANIES_SUCCESS:
            return {
                loading: false,
                companies: action.payload,
                error: null,
            };
        case GET_COMPANIES_FAILURE:
            return {
                loading: false,
                companies: [],
                error: action.payload,
            };



        case GET_COMPANY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_COMPANY_SUCCESS:
            return {
                ...state,
                company: action.payload,
                loading: false,
                error: null,
            };
        case GET_COMPANY_FAILURE:
            return {
                ...state,
                company: null,
                loading: false,
                error: action.payload,
            };
        case DELETE_COMPANY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case DELETE_COMPANY_SUCCESS:
            const remainingCompanies = state.companies.filter(
                (company) => company.id !== action.payload
            );
            return {
                ...state,
                companies: remainingCompanies,
                loading: false,
                error: null,
            };
        case DELETE_COMPANY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}