export default function Shop() {
  const stones = [
    { id: 1, name: "2.20ct Tanzanite Pear Cabochon", price: 195, origin: "Tanzania", cert: "AGI Certified" },
    { id: 2, name: "1.85ct Mozambique Ruby", price: 420, origin: "Mozambique", cert: "GIA Certified" },
    { id: 3, name: "3.10ct Ethiopian Opal", price: 260, origin: "Ethiopia", cert: "Authentic" },
    { id: 4, name: "2.40ct Ceylon Sapphire", price: 780, origin: "Sri Lanka", cert: "GIA Certified" },
    { id: 5, name: "5.00ct Amethyst Oval", price: 140, origin: "Brazil", cert: "Authentic" },
    { id: 6, name: "1.20ct Colombian Emerald", price: 950, origin: "Colombia", cert: "IGI Certified" },
    { id: 7, name: "4.50ct Citrine Cushion", price: 180, origin: "Brazil", cert: "Authentic" },
    { id: 8, name: "2.80ct Pink Spinel", price: 520, origin: "Myanmar", cert: "GIA Certified" },
    { id: 9, name: "3.60ct Aquamarine", price: 390, origin: "Pakistan", cert: "Authentic" },
    { id: 10, name: "6.20ct Smoky Quartz", price: 120, origin: "Worldwide", cert: "Authentic" }
  ];

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#C6A85B', fontSize: '2.5rem' }}>The Vault</h1>
        <p style={{ color: '#aaa' }}>🚚 Free shipping on orders over £300. Standard £10 shipping applied otherwise.</p>
        <a href="/" style={{ color: '#C6A85B', textDecoration: 'none' }}>← Back to Home</a>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
        {stones.map((stone) => (
          <div key={stone.id} style={{ border: '1px solid #333', padding: '20px', borderRadius: '8px', backgroundColor: '#1a1a1a' }}>
            <h3 style={{ color: '#C6A85B', marginBottom: '10px' }}>{stone.name}</h3>
            <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>£{stone.price}</p>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Origin: {stone.origin}</p>
            <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '20px' }}>{stone.cert}</p>
            
            <button style={{ 
              width: '100%', 
              padding: '12px', 
              backgroundColor: '#fff', 
              color: '#000', 
              border: 'none', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              borderRadius: '4px'
            }} onClick={() => alert(`Added ${stone.name} to cart!`)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
