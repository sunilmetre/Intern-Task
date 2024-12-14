
 // GSAP animations for text and images on page load
gsap.to('.text-img p', { opacity: 1, duration: 2, ease: 'power2.out', delay: 1 });
gsap.to('.top-img img, .bottom-img img', { opacity: 1, duration: 1, ease: 'power2.out', delay: 0.5 });

// Mouse movement effect for individual images
document.querySelectorAll('.top-img img, .bottom-img img').forEach(image => {
  // Variables to store the original position
  let originalX = 0;
  let originalY = 0;

  image.addEventListener('mouseenter', () => {
    image.classList.add('active'); // Activate the hovered image
    
    // Apply a slight scale effect when hovered
    gsap.to(image, { scale: 1.05, duration: 0.3, ease: 'power2.out' });

    // Change text color when image is hovered
    document.querySelector('.text-img p').style.color = '#212121e3';

    // Show text-bottom on hover
    gsap.to('.text-bottom', { opacity: 1, duration: 0.3, ease: 'power2.out' });

    // Hide other images
    document.querySelectorAll('.top-img img, .bottom-img img').forEach(otherImage => {
      if (otherImage !== image) {
        gsap.to(otherImage, { opacity: 0, duration: 0.5, ease: 'power2.out' });
      }
    });

    // Set the z-index of the hovered image to 99999 to bring it to the top
    gsap.to(image, { zIndex: 99999, duration: 0.3, ease: 'power2.out' });
  });

  image.addEventListener('mouseleave', () => {
    image.classList.remove('active'); // Reset when mouse leaves
    
    // Reset scale effect after hover
    gsap.to(image, { scale: 1, duration: 0.3, ease: 'power2.out' });

    // Reset text color when mouse leaves
    document.querySelector('.text-img p').style.color = 'white'; // Reset to original color

    // Hide text-bottom again
    gsap.to('.text-bottom', { opacity: 0, duration: 0.3, ease: 'power2.out' });

    // Show all images back
    document.querySelectorAll('.top-img img, .bottom-img img').forEach(otherImage => {
      gsap.to(otherImage, { opacity: 1, duration: 0.5, ease: 'power2.out' });
    });

    // Reset z-index of the hovered image to its initial state (1)
    gsap.to(image, { zIndex: 1, duration: 0.3, ease: 'power2.out' });
  });

  // Mouse movement tracking for individual images
  image.addEventListener('mousemove', (e) => {
    const rect = image.getBoundingClientRect();
    
    // Calculate the offset from the center of the image
    const offsetX = (e.pageX - rect.left - rect.width / 2) / 2;  // Amplified movement in X direction
    const offsetY = (e.pageY - rect.top - rect.height / 2) / 2;  // Amplified movement in Y direction

    // Apply smooth movement using GSAP with a small duration for smooth transitions
    gsap.to(image, {
      x: offsetX,
      y: offsetY,
      ease: 'power2.out',
      duration: 0.1 // Adjust duration for smoother movement
    });

    // Move the text with the image
    gsap.to('.text-top p', {
      x: offsetX,  // Move text horizontally
      y: offsetY,  // Move text vertically
      ease: 'power2.out',
      duration: 0.1 // Apply smooth transition for text
    });

    gsap.to('.text-bottom', {
      x: offsetX,  // Move text-bottom horizontally
      y: offsetY,  // Move text-bottom vertically
      ease: 'power2.out',
      duration: 0.1 // Apply smooth transition for text-bottom
    });
  });
});


