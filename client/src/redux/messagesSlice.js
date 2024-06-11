import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { serverURL } from '../../server.config';

const initialState = {
    allMessages: []
};

export const fetchMessages = createAsyncThunk(
    'messages/fetchMessages',
    async () => {
        try {
            const { data } = await axios.get(`${serverURL}/messages/getMessages`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const addMessage = createAsyncThunk(
    'messages/addMessage',
    async (message) => {
        try {
            const { data } = await axios.post(`${serverURL}/messages/createMessage`, message);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
)

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.allMessages = action.payload;
        });
        builder.addCase(addMessage.fulfilled, (state, action) => {
            state.allMessages.push(action.payload);
        });
    }
});

export default messagesSlice.reducer;
