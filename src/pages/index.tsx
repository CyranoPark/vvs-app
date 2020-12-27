import useSWR from 'swr';
import { fetcher } from '../utils/swr';

const Home = () => {
    const { data } = useSWR('/articles', fetcher);

    return <div className="container">ddddd</div>;
};

export default Home;
