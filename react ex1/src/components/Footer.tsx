const Footer = () => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  return (
    <footer>
      <p>daniel ifrach</p>
      <div>{currentDate}</div>
      <div>{currentTime}</div>
    </footer>
  );
};

export default Footer;
