import axios from "axios";

const SearchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=bbs1VzZnOfGf0Omdpny_1aUVVmpN5QCMTf4ZUpykkn8'

    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default SearchImages