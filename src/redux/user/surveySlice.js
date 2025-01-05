import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import BaseUrl from '../../Api/BaseUrl';
import { fetchUserDetails } from './userSlice';


export const fetchSurveyList = createAsyncThunk(
  'api/qmapiList',
  async () => {
    const response = await fetch(`${BaseUrl}api/qmapiList`);
    const responseData = await response.json();
    return responseData
  }
)
export const fetchOfferDetail = createAsyncThunk(
  'admin/ViewQmapidata',
  async (id) => {
    const response = await fetch(`${BaseUrl}admin/ViewQmapidata?id=${id}`);
    const responseData = await response.json();
    return responseData
  }
)




const SurveySlice = createSlice({
  name: 'survey',
  initialState: {
    surveyList : [],
    surveyDetail: null,
    topRef: null,
    detail: null,
    loading : false,
    error : null,
    uploadImg : null
  },

  reducers: {
    
  },

  extraReducers: (builder) => {

      builder.addCase(fetchSurveyList.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(fetchSurveyList.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.surveyList =  action.payload?.responseResult
    });
    builder.addCase(fetchSurveyList.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });
      builder.addCase(fetchUserDetails.pending, (state, action) => {
        state.loading =  true;
      });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.loading =  false;
        state.error = null;
        state.surveyDetail =  action.payload?.responseResult
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
        state.error =  action.payload;
        state.loading =  false;
      });

  },
})

// export const {} = offersSlice.actions

export default SurveySlice.reducer