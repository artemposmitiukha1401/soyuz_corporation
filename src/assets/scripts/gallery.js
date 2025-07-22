document.addEventListener('DOMContentLoaded', () => {
    const galleries = [];


    const galleryById = document.getElementById('images_gallery');
    if (galleryById) {
        galleries.push(galleryById);
    }

    const galleriesByClass = document.querySelectorAll('.images_gallery');
    galleriesByClass.forEach(gallery => {
        if (!galleries.includes(gallery)) {
            galleries.push(gallery);
        }
    });

    if (galleries.length === 0) {
        console.warn('No gallery containers found with id or class "images_gallery"');
        return;
    }

    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('.gallery_img');

        if (images.length === 0) {
            console.warn('No images with class "gallery_img" found in gallery');
            return;
        }

        images.forEach(img => {
            img.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            img.style.transform = 'scale(1)';
            img.style.filter = 'blur(0px) brightness(1)';
            img.style.opacity = '1';
        });

        images.forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.05)';
                img.style.filter = 'blur(0px) brightness(1.1)';
                img.style.zIndex = '10';

                images.forEach(other => {
                    if (other !== img) {
                        other.style.filter = 'blur(3px) brightness(0.7)';
                        other.style.opacity = '0.5';
                        other.style.transform = 'scale(0.98)';
                    }
                });
            });

            img.addEventListener('mouseleave', () => {
                images.forEach(image => {
                    image.style.filter = 'blur(0px) brightness(1)';
                    image.style.opacity = '1';
                    image.style.transform = 'scale(1)';
                    image.style.zIndex = '1';
                });
            });

            img.addEventListener('mousedown', () => {
                img.style.transform = 'scale(0.95)';
            });

            img.addEventListener('mouseup', () => {
                img.style.transform = 'scale(1.05)';
            });
        });

        images.forEach(img => {
            img.addEventListener('click', function (e) {

                const ripple = document.createElement('div');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                    z-index: 20;
                `;

                if (getComputedStyle(this).position === 'static') {
                    this.style.position = 'relative';
                }

                this.appendChild(ripple);

                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 600);

                setTimeout(() => {
                    
                    const newWindow = window.open('', '_blank');
                    newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Image View</title>
            <style>
                body {
                    margin: 0;
                    padding: 20px;
                    background: #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    font-family: Arial, sans-serif;
                }
                img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    border-radius: 8px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                    animation: fadeIn 0.2s ease-in-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
            </style>
        </head>
        <body>
            <img src="${this.src}" alt="Gallery Image">
        </body>
        </html>
    `);
                    newWindow.document.close();
                }, 150);
            });
        });
        gallery.style.opacity = '0';
        gallery.style.transform = 'translateY(20px)';
        gallery.style.transition = 'all 0.2s ease-out';

        setTimeout(() => {
            gallery.style.opacity = '1';
            gallery.style.transform = 'translateY(0)';
        }, 100);
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .gallery_img {
        cursor: pointer;
        overflow: hidden;
    }
    
    .gallery_img:hover {
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    }
`;
document.head.appendChild(style)