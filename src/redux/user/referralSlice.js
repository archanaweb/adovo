import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import BaseUrl from '../../Api/BaseUrl';


export const fetchTotalReferl = createAsyncThunk(
  'user/totalRefrel',
  async (userId) => {
    const response = await fetch(`${BaseUrl}user/totalRefrel?userId=${userId}`);
    const responseData = await response.json();
    return responseData
  }
)
export const fetchTopReferl = createAsyncThunk(
  'user/topRefer',
  async () => {
    const response = await fetch(`${BaseUrl}user/topRefer`);
    const responseData = await response.json();
    return responseData
  }
)


export const generateReferralCode = createAsyncThunk(
    'user/userGenrateRefrelCode',
    async ({userId, formData}) => {
      const response = await fetch(`${BaseUrl}user/userGenrateRefrelCode?userId=${userId}`, {
        method: "POST",
        headers: {
            'accept': 'application/json'
        },
        body:  new URLSearchParams(formData)
      });
      const responseData = await response.json();
      return responseData
    }
  )



const ReferralSlice = createSlice({
  name: 'referal',
  initialState: {
    referalCode : null,
    totalRef: null,
    topRef: null,
    detail: null,
    loading : false,
    error : null,
    uploadImg : null
  },

  reducers: {
    
  },

  extraReducers: (builder) => {

      builder.addCase(fetchTotalReferl.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(fetchTotalReferl.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.totalRef =  action.payload?.referralCount
    });
    builder.addCase(fetchTotalReferl.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });

      builder.addCase(fetchTopReferl.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(fetchTopReferl.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.topRef =  action.payload
    });
    builder.addCase(fetchTopReferl.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });
      
      builder.addCase(generateReferralCode.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(generateReferralCode.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.referalCode =  action.payload?.responsResult
    });
    builder.addCase(generateReferralCode.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });


  },
})

// export const {} = offersSlice.actions

export default ReferralSlice.reducer