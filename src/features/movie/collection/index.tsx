import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import useCollection from "./useCollection";

const Collection: React.FC = () => {
    const {data, isLoading} = useCollection();

    return (
        <div className="Collection">
            <h3 className="title">왓챠피디아 컬렉션</h3>
            <div className="collection-list">
                {
                    isLoading || !data ? (
                        <Loading />
                    ) : (
                        data.map((collection) => (
                            <Link to={collection.url} key={collection.id}>
                                <li className="collection-list__item">{collection.title}</li>
                            </Link>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default Collection;