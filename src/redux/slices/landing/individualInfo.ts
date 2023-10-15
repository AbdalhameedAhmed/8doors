import { createSlice } from '@reduxjs/toolkit';

export const individualInfo = createSlice({
  name: 'individualInfo',
  initialState: {
    address: null,
    bloodGroupId: null,
    cityId: null,
    countryId: null,
    dateOfBirth: null,
    firstName: null,
    gender: null,
    id: null,
    imageUrl: null,
    lastName: null,
    nationalId: null,
    postCode: null,
    stateId: null,
  },
  reducers: {
    addIndividualInfo: (state, action) => {
      return action.payload;
    },
    resetIndividualInfo: (state) => {
      return {
        address: null,
        bloodGroupId: null,
        cityId: null,
        countryId: null,
        dateOfBirth: null,
        firstName: null,
        gender: null,
        id: null,
        imageUrl: null,
        lastName: null,
        nationalId: null,
        postCode: null,
        stateId: null,
      };
    },
  },
});

export const { addIndividualInfo, resetIndividualInfo } =
  individualInfo.actions;
export default individualInfo.reducer;
