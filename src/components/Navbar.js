import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({connectMyWallet, WalletAddress}) {
  return (
    <>
      <h1 style={{ color: "#6634eb", fontSize: 40, textAlign: "center" }}>
    Welcome to the NFT Market!Have a Nice Day!
      </h1>
      <div id="navbar">
        <Link className="a" to="/">Home</Link>
        <Link className="a" to="/upload">Upload</Link>
        <Link className="a" to="/owned-nfts">Own</Link>
        <button type="button" className="connect-wallet-button" onClick={connectMyWallet}>
        {WalletAddress ? `${WalletAddress.slice(0, 8)}...${WalletAddress.slice(-4)}` : "Connect Wallet"}
        </button>
      </div>
    </>
  );
}

export default Navbar;