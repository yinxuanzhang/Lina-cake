import { useState } from 'react';
import './CakeMenu.css';
import { cakeCategories } from './CakeCategories'; // 👈 引入

export function CakeMenu() {
  const [selectedCake, setSelectedCake] = useState(null);

  return (
  <div className="cake-menu-page">
    <div className="cake-menu-hero">
    <img
      src="/images/logo.png"
      alt="Lina Cake Logo"
      className="logo-image"
    />
    <p className="hero-subtext">手作蛋糕 · 定制甜品</p>
</div>

      {cakeCategories.map((category) => (
        <section className="cake-category-section" key={category.title}>
          <h2 className="category-title">{category.title}</h2>

          <div className="cake-grid">
            {category.items.map((cake) => (
              <button
                className="cake-card"
                key={cake.id}
                onClick={() => setSelectedCake(cake)}
              >
                <img src={cake.image} className="cake-image" />

                <div className="cake-info">
                  <p className="cake-code">{cake.code}</p>
                  {cake.size && <p className="cake-size">{cake.size}</p>}
                  <p className="cake-price">{cake.price}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      ))}

      {selectedCake && (
        <div className="cake-modal-overlay" onClick={() => setSelectedCake(null)}>
          <div className="cake-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCake(null)}>
              
            </button>

            <img src={selectedCake.image} className="cake-modal-image" />

            <div className="cake-modal-info">
              <p>{selectedCake.code}</p>
              {selectedCake.size && <p>{selectedCake.size}</p>}
              <p>{selectedCake.price}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}