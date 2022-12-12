export function ShoppingBanner({...props}) {
  return (
    <div className="w-full px-4 mb-8 md:mb-0 md:w-1/3">
      <div className="relative mb-10" style={{height: '564px'}}>
        <a
          className="absolute top-1/2 left-0 ml-8 transform translate-1/2"
          href="#"
        >
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 16.0185C9.268 16.2905 9.268 16.7275 9 16.9975C8.732 17.2675 8.299 17.2685 8.031 16.9975L0.201 9.0895C-0.067 8.8195 -0.067 8.3825 0.201 8.1105L8.031 0.2025C8.299 -0.0675 8.732 -0.0675 9 0.2025C9.268 0.4735 9.268 0.9115 9 1.1815L1.859 8.6005L9 16.0185Z"
              fill="#1F40FF"
            ></path>
          </svg>
        </a>
        <img
          className="object-cover w-full h-full"
          src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/shop/shop_hero.png"
          alt=""
        />
        <a
          className="absolute top-1/2 right-0 mr-8 transform translate-1/2"
          href="#"
        >
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.19922 1.1817C-0.0687795 0.909696 -0.0687794 0.472695 0.19922 0.202695C0.46722 -0.0673054 0.90022 -0.0683048 1.16822 0.202695L8.99822 8.11069C9.26622 8.3807 9.26622 8.81769 8.99822 9.08969L1.16822 16.9977C0.900219 17.2677 0.467218 17.2677 0.199219 16.9977C-0.0687809 16.7267 -0.0687808 16.2887 0.199219 16.0187L7.34022 8.5997L0.19922 1.1817Z"
              fill="#1F40FF"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
