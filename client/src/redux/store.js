import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "./apis/adminApi";
import adminReducer from "./slices/adminSlice";
import { contactApi } from "./apis/contactApi";
import { topNavbarApi } from "./apis/topNavbarApi";
import { mainNavbarApi } from "./apis/mainNavbarApi";
import { heroApi } from "./apis/heroApi";
import { castingMethodApi } from "./apis/castingMethodApi";
import { footerApi } from "./apis/footerApi";
import { aboutApi } from "./apis/aboutApi";
import { engineeringSupportApi } from "./apis/engineeringSupportApi";
import { valueServiceApi } from "./apis/valueServiceApi";
import { rfqApi } from "./apis/rfqApi";
import { careerApi } from "./apis/careerApi";
import { capabilityApi } from "./apis/castingCapabilityApi";


const reduxStore = configureStore({
  reducer: {
    
    [adminApi.reducerPath]: adminApi.reducer,
    [topNavbarApi.reducerPath]: topNavbarApi.reducer,
    [mainNavbarApi.reducerPath]: mainNavbarApi.reducer,
    [heroApi.reducerPath]: heroApi.reducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    [rfqApi.reducerPath]: rfqApi.reducer,
    [careerApi.reducerPath]: careerApi.reducer,
    [castingMethodApi.reducerPath]: castingMethodApi.reducer,
  
    [capabilityApi.reducerPath]: capabilityApi.reducer,
    [valueServiceApi.reducerPath]: valueServiceApi.reducer,
    [engineeringSupportApi.reducerPath]: engineeringSupportApi.reducer,


    [contactApi.reducerPath]: contactApi.reducer,
    [footerApi.reducerPath]: footerApi.reducer,

    admin: adminReducer,
  },

  middleware: (def) =>
    def().concat(
      adminApi.middleware,
      topNavbarApi.middleware,
      mainNavbarApi.middleware,
      heroApi.middleware,
      aboutApi.middleware,
      rfqApi.middleware,
      careerApi.middleware,
      castingMethodApi.middleware,
      capabilityApi.middleware,
      valueServiceApi.middleware,
      engineeringSupportApi.middleware,

      contactApi.middleware,
      footerApi.middleware,

    ),

});

export default reduxStore;
