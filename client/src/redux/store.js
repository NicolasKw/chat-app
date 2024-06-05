import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import messagesReducer from './messagesSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        messages: messagesReducer
    }
});
