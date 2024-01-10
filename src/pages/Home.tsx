import axios from "axios";
import React from "react";
import ItemsBigGrid from "../components/Cards/ItemBigGrid/ItemsBigGrid";
import Filters from "../components/Layouts/Filters";
import ItemsHeader from "../components/Layouts/ItemsHeader";

const Home = () => {
    const [items, setItems] = React.useState([]);
    const [showFilter, setShowFilter] = React.useState<boolean>(true);
    const [sort, setSort] = React.useState<string>("");
    const [search, setSearch] = React.useState<string>("");
    React.useEffect(() => {
        axios.get("https://13ff161a782d7bb3.mokky.dev/items").then((res) => {
            setItems(res.data);
        });
    }, []);

    const onSearch = React.useCallback((value: string) => {
        setSearch(value);
    }, []);

    React.useEffect(() => {
        const searchStr = search ? `name=*${search}` : "";
        console.log(searchStr);
        const sortStr = sort ? `&sortBy=${sort}` : "";
        axios
            .get(
                `https://13ff161a782d7bb3.mokky.dev/items?${searchStr}${sortStr}`
            )
            .then((res) => {
                if (res.data.length > 0) setItems(res.data);
            });
    }, [search, sort]);

    const onSort = (value: string) => {
        setSort(value);
    };
    return (
        <main className="mx-auto my-0 px-10 m-auto">
            <ItemsHeader
                onSearch={onSearch}
                onShowFilter={setShowFilter}
                onSort={onSort}
                showFilter={showFilter}
            />
            <div className="flex items-top m-0 p-0">
                <Filters showFilter={showFilter} />
                <ItemsBigGrid items={items} />
            </div>
        </main>
    );
};

export default Home;
