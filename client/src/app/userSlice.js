import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    certificates: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.certificates = action.certificates? action.certificates : [];
            console.log(state)
            console.log(action.payload);
            console.log(state.user, state.certificates)
        },
        createCertificate: (state, action) => {
            if(state.user === action.payload.user){
                state.user.certificates = state.user.certificates.push(action.payload.certificateId)
            }
        },

    },
});

export const { login, createCertificate } = userSlice.actions;

export default userSlice.reducer;