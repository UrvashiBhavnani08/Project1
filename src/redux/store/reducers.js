
import { combineReducers } from 'redux';
import authReducer from '../auth/authReducers';
import { companyReducer } from '../sales/salesReducer';
// Import other reducers if you have them

const rootReducer = combineReducers({
  auth: authReducer,
  sales: companyReducer
  // Add other reducers here
});

export default rootReducer;