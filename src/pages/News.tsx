import React from 'react'
import Navbar from '../components/Navbar';

function News() {
  return (
    <div className="w-100">
      <header className="logo-header">
        <Navbar />
      </header>
      <main>
        <h1>News</h1>
        <p>If you have any questions, feel free to reach out!</p>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default News