import axios from "axios";

const SearchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=Ojf-Ps4xZg7BsZsHOVPVUkQdjtJj0qfhVeSsdbs_hbY'

    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default SearchImages