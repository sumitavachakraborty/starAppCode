document.addEventListener('DOMContentLoaded', () => {
    const umbrellaImage = document.getElementById('umbrellaImage');
    const loaderIcon = document.getElementById('loaderIcon');
    const uploadedImage = document.getElementById('uploadedImage');
    const colorButtons = document.querySelectorAll('.color-btn');
    const uploadInput = document.getElementById('uploadInput');
    const uploadBtn = document.getElementById('uploadBtn');
    const fileNameDisplay = document.getElementById('fileName');
    const clearBtn = document.getElementById('clearBtn');

    const colorFilters = {
        black: 'invert(0) sepia(1) saturate(10000%) hue-rotate(0deg) brightness(0%) contrast(100%)',
        gray: 'invert(1) sepia(0) saturate(10000%) hue-rotate(0deg) brightness(50%) contrast(50%)',
        darkblue: 'invert(19%) sepia(93%) saturate(7486%) hue-rotate(196deg) brightness(98%) contrast(109%)',
        blue: 'invert(25%) sepia(93%) saturate(2605%) hue-rotate(230deg) brightness(95%) contrast(110%)',
        pink: 'invert(85%) sepia(8%) saturate(5371%) hue-rotate(310deg) brightness(101%) contrast(106%)',
        cyan: 'invert(80%) sepia(19%) saturate(5240%) hue-rotate(149deg) brightness(105%) contrast(101%)',
        yellow: 'invert(92%) sepia(100%) saturate(1611%) hue-rotate(4deg) brightness(109%) contrast(101%)',
        orange: 'invert(59%) sepia(99%) saturate(4246%) hue-rotate(8deg) brightness(102%) contrast(106%)',
        red: 'invert(22%) sepia(97%) saturate(7297%) hue-rotate(353deg) brightness(102%) contrast(102%)'
    };

    let isImageUploaded = false;

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            umbrellaImage.classList.add('hidden');
            if (isImageUploaded) {
                uploadedImage.classList.add('hidden');
            }
            loaderIcon.classList.remove('hidden');
            loaderIcon.style.filter = colorFilters[color];

            setTimeout(() => {
                umbrellaImage.style.filter = colorFilters[color];
                umbrellaImage.classList.remove('hidden');
                loaderIcon.classList.add('hidden');
                if (isImageUploaded) {
                    uploadedImage.classList.remove('hidden');
                }
            }, 2000);
        });
    });

    uploadBtn.addEventListener('click', () => {
        uploadInput.click();
    });

    uploadInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImage.src = e.target.result;
                uploadedImage.classList.remove('hidden');
                isImageUploaded = true;
            };
            reader.readAsDataURL(file);
            fileNameDisplay.textContent = file.name;
            clearBtn.classList.remove('hidden');
        }
    });

    clearBtn.addEventListener('click', () => {
        uploadInput.value = '';
        fileNameDisplay.textContent = 'UPLOAD LOGO';
        clearBtn.classList.add('hidden');
        uploadedImage.classList.add('hidden');
        isImageUploaded = false;
    });
});
