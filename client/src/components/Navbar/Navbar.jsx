export const Navbar = ({route}) => {
  const { destination, dateDispatch, checkInDate, checkOutDate, guests } =
    useDate();

  const { authDispatch, accessToken } = useAuth();

  const handleSearchClick = () => {
    dateDispatch({
      type: "OPEN_SEARCH_MODAL",
    });
  };

  const handleAuthClick = () => {
    if (accessToken) {
      authDispatch({
        type: "SHOW_DROP_DOWN_OPTIONS"
      })
    } else {
      authDispatch({
        type: "SHOW_AUTH_MODAL",
      });
    }
}}