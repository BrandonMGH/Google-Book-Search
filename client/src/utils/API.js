import axios from "axios";

export default {
    getAllBooks: function() {
        return axios.get("/api/books");
        
    },

    addNewBook: function(member) {
        return axios.post("/api/new", member);
    
    }
};