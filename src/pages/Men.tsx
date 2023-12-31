import axios from "axios";
import React from "react";
import { ItemBigProps } from "../components/ItemBigCard";
import ItemsBigGrid from "../components/ItemsBigGrid";
import ItemsHeader from "../components/ItemsHeader";

const Men = () => {
    const [items, setItems] = React.useState<ItemBigProps[]>([]);
    const [showFilter, setShowFilter] = React.useState<boolean>(true);
    React.useEffect(() => {
        axios.get("https://13ff161a782d7bb3.mokky.dev/items").then((res) => {
            setItems(res.data);
        });
    }, []);

    const onSearch = React.useCallback((search: string) => {
        console.log(search);
        axios
            .get(`https://13ff161a782d7bb3.mokky.dev/items?name=*${search}`)
            .then((res) => {
                if (res.data.length > 0) setItems(res.data);
            });
    }, []);
    return items.length === 0 ? (
        "Loading"
    ) : (
        <main className="mx-auto my-0 w-11/12 m-auto">
            <ItemsHeader
                showFilter={showFilter}
                setShowFilter={setShowFilter}
                onSearch={onSearch}
            />
            <div className="flex items-top m-0 p-0">
                {showFilter && (
                    <aside className="w-3/12 h-screen overflow-y-auto bg-green-600 mr-20"></aside>
                )}
                <ItemsBigGrid items={items} />
            </div>
        </main>
    );
};

export default Men;
