import TextField from "@material-ui/core/TextField";
import { List, ListItem } from "material-ui";
import { useEffect, useState } from "react";
import { ISearch } from "../../api/Search/ISearch";

const SEARCH_DELAY = 300;
export const SearchList = function <T>(props: {
  search: ISearch<T>;
  onItemClick?: (item: T) => void;
}) {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([] as T[]);
  let lastTimeout: number = 0;
  const searchFunc = () => {
    props.search
      .search(searchText)
      .then(setResults)
      .catch(() => setResults([]));
  };
  useEffect(searchFunc);

  return (
    <div>
      <TextField
        fullWidth
        label="Search"
        size="small"
        onChange={(ev) => {
          setSearchText(ev.target.value);
          clearTimeout(lastTimeout);
          lastTimeout = window.setTimeout(searchFunc, SEARCH_DELAY);
        }}
        variant="outlined"
      />
      <List>
        {results.length === 0 ? (
          <ListItem>Start typing to search</ListItem>
        ) : (
          results.map((el, index) => (
            <ListItem key={index}>{props.search.getElement(el)}</ListItem>
          ))
        )}
      </List>
    </div>
  );
};
