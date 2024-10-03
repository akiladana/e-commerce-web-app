const NavBar = () => {
  return (
    <header className="flex justify-around items-center p-4 max-container padding-x ">
      <h1 className="text-bold text-2xl ">Exclusive</h1>
      <ul className="flex justify-between gap-4">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/">
          <li>Contact</li>
        </a>
        <a href="/">
          <li>About</li>
        </a>
        <a href="/">
          <li>Sign up</li>
        </a>
      </ul>
      <input
        type="search"
        placeholder="What are you looking for?"
        className="text-sm "
      />
    </header>
  );
};

export default NavBar;
