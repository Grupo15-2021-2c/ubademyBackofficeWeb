let loading = true;

export const setLoading = (isLoading) => {
    loading = isLoading;
    console.log(loading)
}

export const getLoading = () => {
    console.log("loading");
    return loading;
}