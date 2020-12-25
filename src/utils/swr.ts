import api from './api';

export const fetcher = (url: string) => {
    return api.get(url).then((res) => res.data);
};
