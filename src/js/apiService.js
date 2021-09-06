import axios from 'axios';

export default class imgApiService {
    constructor() {
        this.searchQuery = '';
        this.key = '23099756-b59a1c1cdbe94bc1dac04ed03';
        this.URL = 'https://pixabay.com/api/';
        this.page = 1;
        this.perPage = 12;
    }

    async fetchImages() {
        const query = `${this.URL}?key=${this.key}&page=${this.page}&per_page=${this.perPage}&q=${this.searchQuery}`;
        const result = await axios.get(query);
        this.page++;
        return result.data.hits;
    }

    resetPageNumber() {
        this.page = 1;
    }

    getQuery() {
        return this.searchQuery;
    }

    setQuery(newQuery) {
        this.searchQuery = newQuery;
    }
}