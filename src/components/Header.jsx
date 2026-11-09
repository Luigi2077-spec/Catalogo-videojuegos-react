function Header() {
  return (
    <header className="py-5 text-center shadow-sm" style={{
      background: '#0f0c1b',
      borderBottom: '4px solid #00ff00'
    }}>
      
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');`}
      </style>

      <div className="container py-1">
        
        <h1 
          className="mb-4" 
          style={{ 
            fontFamily: '"Press Start 2P", cursive', 
            color: '#00ff00',
            textShadow: '4px 4px 0px #000'
          }}
        >
          Gaming Hub
        </h1>
        
        <p 
          className="mb-0" 
          style={{ 
            fontFamily: '"Press Start 2P", cursive', 
            color: '#ffffff', 
            fontSize: '12px',
            lineHeight: '1.8'
          }}
        >
          Explora los títulos más destacados de la industria
        </p>
      </div>
    </header>
  );
}

export default Header;