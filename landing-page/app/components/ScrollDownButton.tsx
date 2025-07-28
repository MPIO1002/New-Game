'use client';

export default function ScrollDownButton() {
  const scrollToSection = () => {
    document.querySelector('#section1')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center">
      <button 
        onClick={scrollToSection}
        className="h-12 w-12 rounded-full flex items-center justify-center cursor-pointer"
        aria-label="Scroll xuống"
      >
      </button>
    </div>
  );
}
