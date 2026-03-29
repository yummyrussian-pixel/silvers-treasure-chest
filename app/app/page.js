import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ color: '#C6A85B', fontSize: '3rem', marginBottom: '10px', letterSpacing: '2px' }}>Silvers Treasure Chest</h1>
        <p style={{ fontSize: '1.2rem', color: '#aaaaaa', fontStyle: 'italic' }}>Rare & Certified Ethical Gemstones</p>
      </header>

      <div style={{ maxWidth: '600px', marginBottom: '50px', lineHeight: '1.6', color: '#dddddd' }}>
        <p>Welcome to a curated collection of fine gemstones. From vivid Tanzanite to deep Mozambique Rubies, we offer certified authenticity for collectors and jewellers worldwide.</p>
      </div>

      <a href="/shop" style={{ 
        backgroundColor: '#C6A85B', 
        color: '#000000', 
        padding: '15px 40px', 
        textDecoration: 'none', 
        fontWeight: 'bold', 
        borderRadius: '4px',
        fontSize: '1.1rem',
        letterSpacing: '1px',
        transition: '0.3s'
      }}>
        VIEW THE COLLECTION
      </a>

      <footer style={{ marginTop: '100px', color: '#666666', fontSize: '0.9rem' }}>
        © 2024 Silvers Treasure Chest. All Rights Reserved.
      </footer>
    </div>
  );
}
