import { Helmet } from "react-helmet";

export const NotFound = () => {
    return (
        <div>
            <Helmet>
                <title>Not Found!</title>
            </Helmet>
            <span>Not found!</span>
        </div>
    )
};
