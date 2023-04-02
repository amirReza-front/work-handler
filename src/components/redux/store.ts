import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducers/counterSlice'
import listWorksSlice from './reducers/listWorksSlice'
// ...

export const store = configureStore({
  reducer: {
    counter :counterSlice ,
    listWorks:listWorksSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch