function Header() {
  return (
    <header className="main_header">
      <div className="text-container">
        <h1 className="header-title">
          Look for <span>Banger</span> food
        </h1>
        <p className="header-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ex
          placeat quidem ea nulla velit corporis, dolorem commodi eius laborum!
        </p>
        <div className="header-input-container">
          <input type="text" placeholder="Find a Recipe ..." />
          <button>Search</button>
        </div>
      </div>
      <div>
        <img
          src="https://imgs.search.brave.com/dwlTpSp5Ss_AfiiIli0y5kWZMYOs9CNE1W29y2fvoPE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzcxLzU4LzIy/LzM2MF9GXzEwNzE1/ODIyMjlfU3pFa1V0/dEhTbjdjVXhDMGZt/NExvWTJMOHBIcWp1/SzYuanBn"
          alt=""
          className="main_img"
        />
      </div>
    </header>
  );
}

export default Header;
