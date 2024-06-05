import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    allMessages: []
};

export const fetchMessages = createAsyncThunk(
    'messages/fetchMessages',
    async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/messages/getMessages');
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.allMessages.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.allMessages = action.payload;
        });
    }
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
