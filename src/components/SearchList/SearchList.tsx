import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useEffect, useState } from "react";
import React from "react";
import { ISearch } from "../../api/Search/ISearch";

const SEARCH_DELAY = 300;
export const SearchList = function <T>(props: {
  search: ISearch<T>;
  onItemClick?: (item: T) => void;
  resultComponent: (props: { item: T }) => JSX.Element;
  maxResults?: number;
}) {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([] as T[]);
  let lastTimeout: number = 0;
  const searchFunc = async (text: string) => {
    try {
      setResults(await props.search.search(text));
    } catch (e) {
      setResults([]);
    }
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Search"
        size="small"
        inputProps={{
          onInput: (ev) => {
            const newText = (ev.target as HTMLInputElement).value;
            searchFunc(newText);
            setSearchText(newText);
            // clearTimeout(lastTimeout);
            // lastTimeout = window.setTimeout(searchFunc, SEARCH_DELAY);
          },
        }}
        variant="outlined"
      />
      <List>
        {results.length === 0 || searchText === "" ? (
          <ListItem>Start typing to search</ListItem>
        ) : (
          results.map((el, index) => (
            <ListItem
              onClick={() => {
                if (props.onItemClick) props.onItemClick(el);
              }}
              key={index}
            >
              <props.resultComponent item={el} />
            </ListItem>
          ))
        )}
      </List>
    </div>
  );
};
