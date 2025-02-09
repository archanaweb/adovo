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
export const fetchCompletedOffer = createAsyncThunk(
  'user/totalCompleteOffer',
  async (id) => {
    const response = await fetch(`${BaseUrl}user/totalCompleteOffer?userId=${id}`);
    const responseData = await response.json();
    return responseData
  }
)



const OfferSlice = createSlice({
  name: 'offer',
  initialState: {
    offerList : [],
    selectedDevice: 'all',
    deviceFilterOfferList: [],
    offerDetail: null,
    topRef: null,
    completedOffer: null,
    detail: null,
    loading : false,
    error : null,
    uploadImg : null,
  },

  reducers: {
    setSelectedDevice: (state, action) => {
      state.selectedDevice = action.payload;
      // console.log('offerListdevice', state.age)

    }
},

  extraReducers: (builder) => {

      builder.addCase(fetchOfferList.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(fetchOfferList.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.offerList =  action.payload?.responseResult
        state.deviceFilterOfferList =  action.payload?.responseResult
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


      builder.addCase(fetchCompletedOffer.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(fetchCompletedOffer.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.completedOffer =  action.payload?.responseResult
    });
    builder.addCase(fetchCompletedOffer.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });

  },
})

// export const {} = offersSlice.actions

export const { setSelectedDevice } = OfferSlice.actions;
export default OfferSlice.reducer