import { useState, useEffect } from 'react';
import type {CardType} from "../components/mainPage/main/card/types/card-types";

export function useFetchCarItems() {
    const [data, setData] = useState<CardType[]>([]);
    const [error, setError] = useState<null | string>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://68655caf5b5d8d033980e30c.mockapi.io/car-items');
                if (!res.ok) {
                    throw new Error(`Error fetching car items: ${res.status}`);
                }
                const json: CardType[] = await res.json();
                setData(json);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Unknown error');
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { data, error, loading };
}