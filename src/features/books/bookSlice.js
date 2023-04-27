import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    booksData : []
}

const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        addBooks : (state,action)=>{
            action.payload.forEach(element => {
                const {volumeInfo,saleInfo} = element;
                const {title,description,authors,pageCount,imageLinks} = volumeInfo;
                state.booksData.push({
                    id:element.id,
                    title,
                    description,
                    authors,
                    pageCount,
                    imageLink:imageLinks.thumbnail,
                    price:saleInfo.retailPrice.amount
                });
            });
        }
    }
});

export const {addBooks} = bookSlice.actions;
export default bookSlice.reducer;