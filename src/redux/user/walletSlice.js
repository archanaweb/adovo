import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import BaseUrl from '../../Api/BaseUrl';


export const fetchViewWallet = createAsyncThunk(
  'user/viewUserWallet',
  async (userId) => {
    const response = await fetch(`${BaseUrl}user/viewUserWallet?userId=${userId}`);
    const responseData = await response.json();
    return responseData
  }
)
export const fetchTotalPoint = createAsyncThunk(
  'user/totalPoint',
  async (userId) => {
    const response = await fetch(`${BaseUrl}user/totalPoint?userId=${userId}`);
    const responseData = await response.json();
    return responseData
  }
)
export const fetchTotalAmount = createAsyncThunk(
    'user/totalAmount',
    async (userId) => {
      const response = await fetch(`${BaseUrl}user/totalAmount?userId=${userId}`);
      const responseData = await response.json();
      console.log('total amount', responseData)
      return responseData
    }
  )

const WalletSlice = createSlice({
  name: 'wallet',
  initialState: {
    viewWallet : null,
    totalPoint: null,
    totalAmount: null,
    loading : false,
    error : null,
    uploadImg : null
  },

  reducers: {
    
  },

  extraReducers: (builder) => {

      builder.addCase(fetchViewWallet.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(fetchViewWallet.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.viewWallet =  action.payload?.responseResult
    });
    builder.addCase(fetchViewWallet.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });

      builder.addCase(fetchTotalPoint.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(fetchTotalPoint.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.totalPoint =  action.payload?.responseResult
    });
    builder.addCase(fetchTotalPoint.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });
      builder.addCase(fetchTotalAmount.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(fetchTotalAmount.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.totalAmount =  action.payload?.responseResult 
    });
    builder.addCase(fetchTotalAmount.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });

  },
})

// export const {} = offersSlice.actions

export default WalletSlice.reducer