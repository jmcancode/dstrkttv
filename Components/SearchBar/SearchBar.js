import * as React from "react";
import { Searchbar } from "react-native-paper";

const SearchQuery = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Type here"
      placeholderTextColor="#777"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
      autoCapitalize="false"
      autoCompleteType="off"
      autoCorrect="false"
    />
  );
};

export default SearchQuery;
