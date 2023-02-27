import { Fragment } from "react";

function UserIdPage(props) {

    return <Fragment>

        <h1>{props.id}</h1>

    </Fragment>

}


export async function getServerSideProps(context) {
    const { params } = context;

    const userId = params.uid;

    return {
        props: {
            id: 'userid-' + userId
        }
    }

}

export default UserIdPage;