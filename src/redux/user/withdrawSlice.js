import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import BaseUrl from '../../Api/BaseUrl';


export const fetchWithdrawRequestList = createAsyncThunk(
  'user/withdrawRequestList',
  async (userId) => {
    const response = await fetch(`${BaseUrl}user/withdrawRequestList?userId=${userId}`);
    const responseData = await response.json();
    return responseData
  }
)
// export const fetchTopReferl = createAsyncThunk(
//   'user/topRefer',
//   async () => {
//     const response = await fetch(`${BaseUrl}user/topRefer`);
//     const responseData = await response.json();
//     return responseData
//   }
// )

export const userSubmitDocument = createAsyncThunk(
    'user/submitDocument',
    async ({userId, form}) => {
      const response = await fetch(`${BaseUrl}user/submitDocument`, {
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


export const userWithdrawAmount = createAsyncThunk(
    'user/withdrawAmount',
    async (formData) => {
      const response = await fetch(`${BaseUrl}user/withdrawAmount`, {
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



const WithdrawSlice = createSlice({
  name: 'withdraw',
  initialState: {
    WithdrawRequestList : [],
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

      builder.addCase(fetchWithdrawRequestList.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(fetchWithdrawRequestList.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.WithdrawRequestList =  action.payload?.referralCount
    });
    builder.addCase(fetchWithdrawRequestList.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });

    //   builder.addCase(fetchTopReferl.pending, (state, action) => {
    //     state.loading =  true;
    //   });
    // builder.addCase(fetchTopReferl.fulfilled, (state, action) => {
    //     state.loading =  false;
    //     state.error = null;
    //     state.topRef =  action.payload
    // });
    // builder.addCase(fetchTopReferl.rejected, (state, action) => {
    //     state.error =  action.payload;
    //     state.loading =  false;
    //   });
      
      builder.addCase(userSubmitDocument.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(userSubmitDocument.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        // state.referalCode =  action.payload?.responsResult
    });
    builder.addCase(userSubmitDocument.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });
      builder.addCase(userWithdrawAmount.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(userWithdrawAmount.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        // state.referalCode =  action.payload?.responsResult
    });
    builder.addCase(userWithdrawAmount.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });


  },
})

// export const {} = offersSlice.actions

export default WithdrawSlice.reducer