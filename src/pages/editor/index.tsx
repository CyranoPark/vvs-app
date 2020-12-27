import useSWR from 'swr';
import { fetcher } from '../../utils/swr';
import { Category } from '../../types/Article';

const Editor = () => {
    const { data } = useSWR(
        `/articles?category=${Category.BLOG}&page=${0}`,
        fetcher
    );
    console.log(data);
    return <div className="container">ddddd</div>;
};

export default Editor;
