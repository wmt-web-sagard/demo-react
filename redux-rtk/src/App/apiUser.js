import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiUser = createApi({
    reducerPath:"apiUser",
    baseQuery:fetchBaseQuery({baseUrl:"https://65697204de53105b0dd70a35.mockapi.io/"}),
    tagTypes:['User'],
    endpoints:(builder)=>({
        fetchUsers:builder.query({query:()=>"DemoApi",providesTags:['User']}),
        fetchSingleUser:builder.query({query:(id)=>"DemoApi/"+id,providesTags:['User']}),
        deleteUser : builder.mutation({
            query:(id)=>({
                url:"DemoApi/"+id,
                method:'DELETE'
            }),
            invalidatesTags:['User']    
        }),
        addUser : builder.mutation({
            query:(data)=>({
                url:"DemoApi",
                method:'POST',
                body:data
            }),
            invalidatesTags:['User']
        }),
        updateUser : builder.mutation({
            query:(data)=>({
                url:"DemoApi/"+data.id,
                method:'PUT',
                body:data
            }),
            invalidatesTags:['User']
        })
    }),
})

export const {useFetchUsersQuery,useDeleteUserMutation,useAddUserMutation,useUpdateUserMutation,useFetchSingleUserQuery} = apiUser