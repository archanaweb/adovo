import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import BaseUrl from '../../Api/BaseUrl';


export const fetchUserDetails = createAsyncThunk(
    'user/viewData',
    async (userId) => {
      const response = await fetch(`${BaseUrl}user/viewData?userId=${userId}`);
      const responseData = await response.json();
      return responseData
    }
  )
export const updateUserDetails = createAsyncThunk(
    'user/editProfile',
    async ({userId, formData}) => {
      const response = await fetch(`${BaseUrl}user/editProfile?userId=${userId}`, {
        method: "PUT",
        headers: {
            'accept': 'application/json'
        },
        body:  new URLSearchParams(formData)
      });
      const responseData = await response.json();
      return responseData
    }
  )
export const uploadProfileImage = createAsyncThunk(
    'user/uploadImage',
    async ({userId, form}) => {
      const response = await fetch(`${BaseUrl}user/uploadImage?userId=${userId}`, {
        method: 'PUT',
        headers: {
            'accept': 'application/json'
        },
        body: form
      });
      const responseData = await response.json();
      return responseData
    }
  )

  export const fetchUserLiveMessages = createAsyncThunk(
    'api/inbox',
    async () => {
      const response = await fetch(`${BaseUrl}api/inbox`);
      const responseData = await response.json();
      return responseData
    }
  )



const UserSlice = createSlice({
  name: 'user',
  initialState: {
    list : [],
    messageList : [],
    detail: null,
    loading : false,
    error : null,
    uploadImg : null
  },

  reducers: {
    
  },

  extraReducers: (builder) => {

    // fetch builder
    builder.addCase(fetchUserDetails.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.detail =  action.payload?.responseMesage
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });

      // fetch builder
    builder.addCase(fetchUserLiveMessages.pending, (state, action) => {
      state.loading =  true;
    });
  builder.addCase(fetchUserLiveMessages.fulfilled, (state, action) => {
      state.loading =  false;
      state.error = null;
      state.messageList =  action.payload?.responseResult
  });
  builder.addCase(fetchUserLiveMessages.rejected, (state, action) => {
      state.error =  action.payload;
      state.loading =  false;
    });

      builder.addCase(uploadProfileImage.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(uploadProfileImage.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.uploadImg =  action.payload?.responsResult
    });
    builder.addCase(uploadProfileImage.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });

      builder.addCase(updateUserDetails.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(updateUserDetails.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.detail =  action.payload?.responseResult
    });
    builder.addCase(updateUserDetails.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });

  },
})

// export const {} = offersSlice.actions

export default UserSlice.reducer