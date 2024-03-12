import React, { Fragment, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { fetchUsers } from "../../utils/fetchFakeData";
import { User } from "../../utils/type";
import { HighlightText } from "./highlightText";

type LoadingState = "idle" | "loading" | "succeeded" | "failed";

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [autocompleteList, setAutocompleteList] = useState<
    User[] | undefined
  >();
  const [loadingState, setLoadingState] = useState<LoadingState>("idle");

  const debouncedInputValue = useDebounce(inputValue, 500);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    const loadUsers = async () => {
      if (!debouncedInputValue) {
        setLoadingState("idle");
        return;
      }

      try {
        setLoadingState("loading");

        const users = await fetchUsers(debouncedInputValue);
        setAutocompleteList(users);

        setLoadingState("succeeded");
      } catch (err) {
        setLoadingState("failed");
      }
    };

    loadUsers();
  }, [debouncedInputValue]);

  return (
    <div>
      <input onChange={handleInput} value={inputValue} type="text" />
      {loadingState === "loading" && <div>Loading...</div>}

      {loadingState === "succeeded" && autocompleteList?.length === 0 && (
        <div>Nothing found</div>
      )}

      {loadingState === "succeeded" && (
        <div>
          {autocompleteList?.map((user) => {
            return (
              <Fragment key={user.id}>
                <HighlightText text={user.name} target={inputValue} />
              </Fragment>
            );
          })}
        </div>
      )}

      {loadingState === "idle" && (
        <div>
          <div>Start typing</div>
        </div>
      )}

      {loadingState === "failed" && (
        <div>
          <div>Request was rejected</div>
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
