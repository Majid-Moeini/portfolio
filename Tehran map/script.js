const baseWidth = 1200;
const baseHeight = 700;
const dotBaseSize = 26.5;
const highlightSize = 34;
const highlightRadius = 1.5 * 37.8; 

    const circles = [
      { x: 578, y: 132 },
      { x: 620, y: 132 },
      { x: 661, y: 132 },
      { x: 455, y: 173 },
      { x: 496, y: 173 },
      { x: 537, y: 173 },
      { x: 578, y: 173 },
      { x: 620, y: 173 },
      { x: 661, y: 173 },
      { x: 702, y: 173 },
      { x: 743, y: 173 },
      { x: 785, y: 173 },
      { x: 826, y: 173 },
      { x: 867, y: 173 },
      { x: 908, y: 173 },
      { x: 950, y: 173 },
      { x: 248, y: 215 },
      { x: 290, y: 215 },
      { x: 331, y: 215 },
      { x: 372, y: 215 },
      { x: 413, y: 215 },
      { x: 455, y: 215 },
      { x: 496, y: 215 },
      { x: 537, y: 215 },
      { x: 578, y: 215 },
      { x: 620, y: 215 },
      { x: 661, y: 215 },
      { x: 702, y: 215 },
      { x: 743, y: 215 },
      { x: 785, y: 215 },
      { x: 826, y: 215 },
      { x: 867, y: 215 },
      { x: 908, y: 215 },
      { x: 950, y: 215 },
      { x: 991, y: 215 },
      { x: 1032, y: 215 },
      { x: 83, y: 256 },
      { x: 125, y: 256 },
      { x: 166, y: 256 },
      { x: 207, y: 256 },
      { x: 248, y: 256 },
      { x: 290, y: 256 },
      { x: 331, y: 256 },
      { x: 372, y: 256 },
      { x: 413, y: 256 },
      { x: 455, y: 256 },
      { x: 496, y: 256 },
      { x: 537, y: 256 },
      { x: 578, y: 256 },
      { x: 620, y: 256 },
      { x: 661, y: 256 },
      { x: 702, y: 256 },
      { x: 743, y: 256 },
      { x: 785, y: 256 },
      { x: 826, y: 256 },
      { x: 867, y: 256 },
      { x: 908, y: 256 },
      { x: 950, y: 256 },
      { x: 991, y: 256 },
      { x: 1032, y: 256 },
      { x: 1073, y: 256 },
      { x: 1115, y: 256 },
      { x: 166, y: 297 },
      { x: 207, y: 297 },
      { x: 248, y: 297 },
      { x: 290, y: 297 },
      { x: 331, y: 297 },
      { x: 372, y: 297 },
      { x: 413, y: 297 },
      { x: 455, y: 297 },
      { x: 496, y: 297 },
      { x: 537, y: 297 },
      { x: 578, y: 297 },
      { x: 620, y: 297 },
      { x: 661, y: 297 },
      { x: 702, y: 297 },
      { x: 743, y: 297 },
      { x: 785, y: 297 },
      { x: 826, y: 297 },
      { x: 867, y: 297 },
      { x: 908, y: 297 },
      { x: 950, y: 297 },
      { x: 991, y: 297 },
      { x: 1032, y: 297 },
      { x: 1073, y: 297 },
      { x: 1115, y: 297 },
      { x: 207, y: 338 },
      { x: 248, y: 338 },
      { x: 290, y: 338 },
      { x: 331, y: 338 },
      { x: 372, y: 338 },
      { x: 413, y: 338 },
      { x: 455, y: 338 },
      { x: 496, y: 338 },
      { x: 537, y: 338 },
      { x: 578, y: 338 },
      { x: 620, y: 338 },
      { x: 661, y: 338 },
      { x: 702, y: 338 },
      { x: 743, y: 338 },
      { x: 785, y: 338 },
      { x: 826, y: 338 },
      { x: 867, y: 338 },
      { x: 908, y: 338 },
      { x: 950, y: 338 },
      { x: 991, y: 338 },
      { x: 1032, y: 338 },
      { x: 1073, y: 338 },
      { x: 290, y: 380 },
      { x: 331, y: 380 },
      { x: 372, y: 380 },
      { x: 413, y: 380 },
      { x: 455, y: 380 },
      { x: 496, y: 380 },
      { x: 537, y: 380 },
      { x: 578, y: 380 },
      { x: 620, y: 380 },
      { x: 661, y: 380 },
      { x: 702, y: 380 },
      { x: 743, y: 380 },
      { x: 785, y: 380 },
      { x: 826, y: 380 },
      { x: 867, y: 380 },
      { x: 908, y: 380 },
      { x: 372, y: 421 },
      { x: 413, y: 421 },
      { x: 455, y: 421 },
      { x: 496, y: 421 },
      { x: 537, y: 421 },
      { x: 578, y: 421 },
      { x: 620, y: 421 },
      { x: 661, y: 421 },
      { x: 702, y: 421 },
      { x: 743, y: 421 },
      { x: 785, y: 421 },
      { x: 826, y: 421 },
      { x: 867, y: 421 },
      { x: 908, y: 421 },
      { x: 950, y: 421 },
      { x: 372, y: 462 },
      { x: 413, y: 462 },
      { x: 455, y: 462 },
      { x: 496, y: 462 },
      { x: 537, y: 462 },
      { x: 578, y: 462 },
      { x: 620, y: 462 },
      { x: 661, y: 462 },
      { x: 702, y: 462 },
      { x: 743, y: 462 },
      { x: 785, y: 462 },
      { x: 826, y: 462 },
      { x: 867, y: 462 },
      { x: 908, y: 462 },
      { x: 950, y: 462 },
      { x: 455, y: 503 },
      { x: 496, y: 503 },
      { x: 537, y: 503 },
      { x: 578, y: 503 },
      { x: 620, y: 503 },
      { x: 661, y: 503 },
      { x: 702, y: 503 },
      { x: 743, y: 503 },
      { x: 785, y: 503 },
      { x: 826, y: 503 },
      { x: 867, y: 503 },
      { x: 908, y: 503 },
      { x: 950, y: 503 },
      { x: 537, y: 544 },
      { x: 578, y: 544 },
      { x: 620, y: 544 },
      { x: 661, y: 544 },
      { x: 702, y: 544 },
      { x: 743, y: 544 },
      { x: 785, y: 544 },
      { x: 826, y: 544 },
      { x: 867, y: 544 },
      { x: 908, y: 544 },
      { x: 950, y: 544 },
      { x: 578, y: 586 },
      { x: 620, y: 586 },
      { x: 661, y: 586 },
      { x: 702, y: 586 },
      { x: 743, y: 586 },
      { x: 867, y: 586 },
      { x: 908, y: 586 },
    ];


    const container = document.getElementById('map-container');
    const layer = document.getElementById('dots-layer');

    function createDots() {
      circles.forEach(({ x, y }) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.dataset.x = x;
        dot.dataset.y = y;
        layer.appendChild(dot);
      });
    }

    function resizeDots() {
      const scale = container.clientWidth / baseWidth;
      const dots = document.querySelectorAll('.dot');
      dots.forEach(dot => {
        const x = parseFloat(dot.dataset.x);
        const y = parseFloat(dot.dataset.y);
        const size = dot.classList.contains('active') ? highlightSize : dotBaseSize;
        dot.style.width = size * scale + 'px';
        dot.style.height = size * scale + 'px';
        dot.style.left = (x * scale - (size * scale) / 2) + 'px';
        dot.style.top = (y * scale - (size * scale) / 2) + 'px';
      });
    }

    function handleMouseMove(e) {
      const rect = container.getBoundingClientRect();
      const scale = container.clientWidth / baseWidth;
      const mouseX = (e.clientX - rect.left) / scale;
      const mouseY = (e.clientY - rect.top) / scale;

      const dots = document.querySelectorAll('.dot');
      dots.forEach(dot => {
        const x = parseFloat(dot.dataset.x);
        const y = parseFloat(dot.dataset.y);
        const dx = mouseX - x;
        const dy = mouseY - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const isActive = distance < highlightRadius;
        dot.classList.toggle('active', isActive);
      });
      resizeDots();
    }

    window.addEventListener('resize', resizeDots);
    container.addEventListener('mousemove', handleMouseMove);

    createDots();
    resizeDots();