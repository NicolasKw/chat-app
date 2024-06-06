import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { serverURL } from '../../server.config';

const initialState = {
    users: [],
    signedInUser: {},
    selectedRecipient: {},
    userValidated: false
};

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        try {
            const { data } = await axios.get(`${serverURL}/users/getUsers`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const signOutUser = createAsyncThunk(
    'users/signOutUser',
    async (username) => {
        try {
            const { data } = await axios.put(`${serverURL}/users/signOut/${username}`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        addSignedInUser: (state, action) => {
            state.signedInUser = action.payload;
        },
        addSelectedRecipient: (state, action) => {
            state.selectedRecipient = action.payload;
        }
    },
    extraReducers: (builder) => {
        // fetchUsers
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            const signedInUser = action.payload.filter((user) => user.signedIn);
            (signedInUser.length) && (state.signedInUser = signedInUser[0]);
        });
        // signOutUser
        builder.addCase(signOutUser.fulfilled, (state, action) => {
            state.signedInUser = {};
            state.users.forEach((user) => {
                if(user.username === action.payload.username) {
                    user.signedIn = action.payload.signedIn;
                    return;
                }
            });
        });
    }
});

export const { addUser, addSignedInUser, addSelectedRecipient } = usersSlice.actions;
export default usersSlice.reducer;
