import { useState, useRef, useEffect, useCallback, RefObject } from 'react';

export interface UseMobileCarouselReturn {
  activeSlide: number;
  carouselRef: RefObject<HTMLDivElement>;
  handleScroll: () => void;
  scrollCarousel: (direction: 'left' | 'right') => void;
  scrollToSlide: (index: number) => void;
}

export const useMobileCarousel = (itemCount: number, resetDependency?: any): UseMobileCarouselReturn => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.offsetWidth * 0.86;
    if (cardWidth <= 0) return;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.max(0, Math.min(newIndex, itemCount - 1)));
  }, [itemCount]);

  const scrollCarousel = useCallback((direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.offsetWidth * 0.86;
    const currentScroll = carouselRef.current.scrollLeft;
    const targetScroll = direction === 'left' 
      ? currentScroll - cardWidth 
      : currentScroll + cardWidth;
    carouselRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.offsetWidth * 0.86;
    carouselRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setActiveSlide(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [resetDependency]);

  return {
    activeSlide,
    carouselRef,
    handleScroll,
    scrollCarousel,
    scrollToSlide,
  };
};
