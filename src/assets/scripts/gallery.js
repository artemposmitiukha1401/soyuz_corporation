document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('images_gallery');
    const images = gallery.querySelectorAll('.gallery_img');

    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            images.forEach(other => {
                if (other !== img) {
                    other.style.filter = 'blur(2px)';
                    other.style.opacity = '0.6';
                }
            });
        });

        img.addEventListener('mouseleave', () => {
            images.forEach(other => {
                other.style.filter = 'none';
                other.style.opacity = '1';

            });
        });
    });
});
const galleryImages = document.querySelectorAll('.gallery_img');
galleryImages.forEach(img => {
    img.addEventListener('click', function () {
        if (galleryImages.length === 1) {
            const newWindow = window.open('', '_blank');
            newWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Image View</title>
                    <style>
                        body { margin: 0; padding: 20px; text-align: center; background: #f0f0f0; }
                        img { max-width: 100%; max-height: 90vh; object-fit: contain; }
                    </style>
                </head>
                <body>
                    <img src="${this.src}" alt="Gallery Image">
                </body>
                </html>
            `);
            newWindow.document.close();
        } else {
            window.open(this.src, '_blank');
        }
    });
});
