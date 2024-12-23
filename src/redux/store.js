import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './user/userSlice'
import ReferralReducer from './user/referralSlice'
import WalletReducer from './user/walletSlice'
import WithdrawReducer from './user/withdrawSlice'

export default configureStore({
  reducer: {
    user: UserReducer,
    referal: ReferralReducer,
    wallet: WalletReducer,
    withdraw: WithdrawReducer
  },
})