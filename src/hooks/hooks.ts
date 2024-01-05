import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";

export const useDebounce = <T>(value: T, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debouncedValue;
};

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
