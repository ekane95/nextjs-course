import { Fragment, useEffect, useState } from "react";
import useSWR from 'swr';

function LastSalesPage(props) {
    const [sales, setSales] = useState(props.sales);
    // const [isLoading, setIsLoading] = useState(false);

    // useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))
    const { data, error } = useSWR(
        'https://fir-next-app-b4005-default-rtdb.firebaseio.com/sales.json',
        (url) => fetch(url).then(res => res.json())
    );

    useEffect(() => {

        if (data) {
            const transformedSales = [];

            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume
                });
            }

            setSales(transformedSales)

        }

    }, [data]);

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(
    //         'https://fir-next-app-b4005-default-rtdb.firebaseio.com/sales.json'
    //     ).then((response) => response.json()
    //     ).then(data => {
    //         const transformedSales = [];

    //         for (const key in data) {
    //             transformedSales.push({
    //                 id: key,
    //                 username: data[key].username,
    //                 volume: data[key].volume
    //             });
    //         }

    //         setSales(transformedSales)
    //         setIsLoading(false);
    //     });
    // }, []);

    if (error) {
        return <p>Failed to load...</p>;
    }

    if (!data && !sales) {
        return <p>Loading...</p>;
    }

    return <Fragment>
        <ul>
            {sales.map(sale => (
                <li key={sale.id}>
                    {sale.username} - ${sale.volume}
                </li>
            ))}
        </ul>
    </Fragment>

}

export async function getStaticProps() {
    const response = await fetch(
        'https://fir-next-app-b4005-default-rtdb.firebaseio.com/sales.json'
    )

    const data = await response.json();

    const transformedSales = [];

    for (const key in data) {
        transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume
        });
    }

    return {
        props: {
            sales: transformedSales,
        },
        revalidate: 10,
    }
}

export default LastSalesPage;