

// // Define a custom fetchBaseQuery function that reads the token value from state
// const customBaseQuery = fetchBaseQuery({
//   baseUrl: `http://localhost:9999/clinic-management`,
//   prepareHeaders: (headers, { getState }) => {
//     // Get the current value of the token from state
//     const token = getState().auth.token;
//     // If we have a token, add it to the headers
//     if (token) {
//       headers.set('Authorization', `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// // Define an API service using createApi
// export const api = createApi({
//   baseQuery: customBaseQuery,
//   endpoints: (builder) => ({
//     // Define an endpoint for getting user details
//     getUserDetails: builder.query({
//       query: () => '/user',
//     }),
//     // Define other endpoints as needed
//   }),
// });

// // Export hooks for usage in components
// export const { useGetUserDetailsQuery } = api;


// import { useGetUserDetailsQuery } from './api';

// function Profile() {
//   // Initiate the query
//   const { data, error, isLoading } = useGetUserDetailsQuery();

//   // Render UI based on query status
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
//   if (data) {
//     return (
//       <div>
//         <h1>User Profile</h1>
//         <p>Name: {data.name}</p>
//         <p>Email: {data.email}</p>
//         {/* Render other user details */}
//       </div>
//     );
//   }
// }

// export default Profile;
