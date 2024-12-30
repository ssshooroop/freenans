import React, { useEffect, useRef } from 'react';
import './Documents.css';

const Documents: React.FC = () => {
  const documentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = documentsRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const documents = container.getElementsByClassName('document');
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      Array.from(documents).forEach((doc, index) => {
        const element = doc as HTMLElement;
        // Разные параметры анимации для каждого документа
        const speed = [0.2, 0.15, 0.25, 0.18, 0.22][index];
        const maxMove = [20, 25, 15, 30, 22][index];
        const maxRotate = [5, 8, 6, 7, 10][index];

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const moveX = (mouseX - centerX) * speed;
        const moveY = (mouseY - centerY) * speed;

        const rotate = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI) * 0.05;

        element.style.transform = `
          translate(${moveX}px, ${moveY}px) 
          rotate(${rotate * maxRotate}deg)
        `;
      });
    };

    const parentHero = container.closest('.hero');
    if (parentHero) {
      parentHero.addEventListener('mousemove', handleMouseMove);
      return () => parentHero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="documents-container" ref={documentsRef}>
      <div className="document document-1">
        <div className="document-content">
          <h3>INVOICE</h3>
          <p>5000$</p>
        </div>
      </div>
      <div className="document document-2">
        <div className="document-content">
          <h3>INVOICE</h3>
          <p>11,224$</p>
        </div>
      </div>
      <div className="document document-3">
        <div className="document-content">
          <h3>Purchase Order</h3>
          <p>TOTAL: 2000$</p>
        </div>
      </div>
      <div className="document document-4">
        <div className="document-content">
          <h3>Price quote</h3>
          <p>TOTAL: 2000$</p>
        </div>
      </div>
      <div className="document document-5">
        <div className="document-content">
          <h3>Receivables</h3>
          <p>1200$<br/>2300$<br/>300$</p>
        </div>
      </div>
    </div>
  );
};

export default Documents;