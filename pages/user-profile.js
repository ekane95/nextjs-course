import { Fragment } from "react";

function UserProfilePage(props) {

    return <Fragment>

        <h1>{props.username}</h1>

    </Fragment>

}


export async function getServerSideProps(context) {
    const { req, res } = context;

    

    return {
        props: {
            username: 'User Name from Props'
        }
    }

}

export default UserProfilePage;