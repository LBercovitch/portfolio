import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly when pathname changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;