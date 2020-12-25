// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ApiMethods } from '../../types/Api';

export default (req, res) => {
    if (req.method === ApiMethods.GET) {
        res.statusCode = 200;
        return res.json({ name: 'GET request' });
    }

    res.json({ name: req.method });
};
