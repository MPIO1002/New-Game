"use client";

export default function ShareButton() {
  return (
    <button
      className="cursor-pointer bg-transparent p-0 border-none shadow-none hover:scale-105 transition-all duration-300"
      onClick={() => {
        const url = encodeURIComponent(window.location.href);
        const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
          if (navigator.share) {
            navigator.share({
              title: document.title,
              url: window.location.href,
            });
          } else {
            window.location.href = fbShareUrl;
          }
        } else {
          window.open(fbShareUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
        }
      }}
      aria-label="Chia sẻ về Facebook"
    >
      <img
        src="/landing/share.png"
        alt="share"
        width={280}
        height={280}
        className="object-contain w-full h-auto"
        style={{ maxWidth: '280px' }}
        loading="lazy"
      />
    </button>
  );
}
