Blog post - async logic and data fetching<br />
![](./imgProject.png)
- change directory to frontend
- using placeholders API for data 
- using createAsyncThunk for fetching data
- using extraReducers for handling actions and tracking Promise objects state like pending,fulfilled and rejected
- Memoziation witn Redux and Selector--> we added the function createSelectore from RTK and we used it in postSlice , we call that function in userPage , we make memoaziation this way
- added React.Memo() to PostLists comp so every time we push a a reaction btn only the pushed btn will rerender and all the other
- i didnt included the createEntityAdapter section

