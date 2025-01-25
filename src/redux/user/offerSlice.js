import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import BaseUrl from '../../Api/BaseUrl';


export const fetchOfferList = createAsyncThunk(
  'api/offerList',
  async (pageno) => {
    const response = await fetch(`${BaseUrl}api/offerList?page=${pageno}`);
    const responseData = await response.json();
    return responseData
  }
)
export const fetchOfferDetail = createAsyncThunk(
  'admin/viewOffer',
  async (id) => {
    const response = await fetch(`${BaseUrl}admin/viewOffer?offerId=${id}`);
    const responseData = await response.json();
    return responseData
  }
)

// export const generateReferralCode = createAsyncThunk(
//     'user/userGenrateRefrelCode',
//     async ({userId, formData}) => {
//       const response = await fetch(`${BaseUrl}user/userGenrateRefrelCode?userId=${userId}`, {
//         method: "POST",
//         headers: {
//             'accept': 'application/json'
//         },
//         body:  new URLSearchParams(formData)
//       });
//       const responseData = await response.json();
//       return responseData
//     }
//   )



const OfferSlice = createSlice({
  name: 'offer',
  initialState: {
    offerList : [],
    offerDetail: null,
    topRef: null,
    detail: null,
    loading : false,
    error : null,
    uploadImg : null
  },

  reducers: {
    
  },

  extraReducers: (builder) => {

      builder.addCase(fetchOfferList.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(fetchOfferList.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.offerList =  action.payload?.responseResult
    });
    builder.addCase(fetchOfferList.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });
      builder.addCase(fetchOfferDetail.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(fetchOfferDetail.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.offerDetail =  action.payload?.responseResult
    });
    builder.addCase(fetchOfferDetail.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });

  },
})

// export const {} = offersSlice.actions

export default OfferSlice.reducer