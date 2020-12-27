import { ApiMethods } from '../../types/Api';
import { IArticle, IArticlesParams } from '../../types/Article';
import axios from 'axios';

export default async (req, res) => {
    const { category, page }: IArticlesParams = req.params;

    try {
        if (req.method === ApiMethods.GET) {
            const { data } = await axios.get<IArticle[]>(
                `${process.env.API_BASE_URL}/articles`,
                {
                    params: { category, page },
                }
            );
            res.json(data);
        }
    } catch (e) {
        res.json(null);
    }
};
