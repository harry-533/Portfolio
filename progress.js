document.addEventListener('DOMContentLoaded', function() {
    function setProgress(y1, y2, f1, f2, top) {
        const y1Circle = document.querySelector('.ring-fill-y1');
        const y1Text = document.getElementById('percentage-text-y1');
        const y2Circle = document.querySelector('.ring-fill-y2');
        const y2Text = document.getElementById('percentage-text-y2');
        const f1Circle = document.querySelector('.ring-fill-f1');
        const f1Text = document.getElementById('percentage-text-f1');
        const f2Circle = document.querySelector('.ring-fill-f2');
        const f2Text = document.getElementById('percentage-text-f2');
        const topCircle = document.querySelector('.ring-fill-top');
        const topText = document.getElementById('percentage-text-top');
    
        const radius = y1Circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const topRadius = topCircle.r.baseVal.value;
        const topCircumference = 2 * Math.PI * radius;
    
        const y1Offset = circumference - (y1 / 100) * circumference;
        const y2Offset = circumference - (y2 / 100) * circumference;
        const f1Offset = circumference - (f1 / 100) * circumference;
        const f2Offset = circumference - (f2 / 100) * circumference;
        const topOffset = topCircumference - (top / 100) * topCircumference;
        y1Circle.style.strokeDashoffset = y1Offset;
        y1Circle.style.stroke = '#0dc5b0';
        y2Circle.style.strokeDashoffset = y2Offset;
        y2Circle.style.stroke = '#0dc5b0';
        f1Circle.style.strokeDashoffset = f1Offset;
        f1Circle.style.stroke = '#0dc5b0';
        f2Circle.style.strokeDashoffset = f2Offset;
        f2Circle.style.stroke = '#0dc5b0';
        topCircle.style.strokeDashoffset = topOffset;
        topCircle.style.stroke = '#0dc5b0';
        
    
        y1Text.textContent = `${y1}%`;
        y2Text.textContent = `${y2}%`;
        f1Text.textContent = `${f1}%`;
        f2Text.textContent = `${f2}%`;
        topText.textContent = `${top}%`;
    }

    function trackTotal(y1, y2, f1, f2, top) {
        const y1Top = document.querySelector('.top-left-y1');
        const y2Top = document.querySelector('.top-left-y2');
        const f1Top = document.querySelector('.top-left-f1');
        const f2Top = document.querySelector('.top-left-f2');
        const topTop = document.querySelector('.top-left-top');

        y1Top.textContent = y1
        y2Top.textContent = y2
        f1Top.textContent = f1
        f2Top.textContent = f2
        topTop.textContent = top
    }

    function countChecked() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        let y1Count = 0;
        let y2Count = 0;
        let f1Count = 0;
        let f2Count = 0;
        let topCount = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.id.includes('task2f') && checkbox.checked) {
                f2Count++;
                topCount++;
            } else if (checkbox.id.includes('f') && checkbox.checked) {
                f1Count++;
                topCount++;
            } else if (checkbox.id.includes('task2-') && checkbox.checked) {
                y2Count++;
                topCount++;
            } else if (checkbox.checked) {
                y1Count++;
                topCount++;
            }
        })

        return {
            y1Count,
            y2Count,
            f1Count,
            f2Count,
            topCount
        };
    }

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
      const saved = localStorage.getItem(checkbox.id);
      checkbox.checked = saved === 'true';

        let { y1Count: y1, y2Count: y2, f1Count: f1, f2Count: f2, topCount: top } = countChecked();

        trackTotal(y1, y2, f1, f2, top);
        setProgress(((y1/54)*100).toFixed(1), ((y2/54)*100).toFixed(1), ((f1/37)*100).toFixed(1), ((f2/18)*100).toFixed(1), ((top/163)*100).toFixed(1));
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
            let { y1Count: y1, y2Count: y2, f1Count: f1, f2Count: f2, topCount: top } = countChecked();

            trackTotal(y1, y2, f1, f2, top);
            setProgress(((y1/54)*100).toFixed(1), ((y2/54)*100).toFixed(1), ((f1/37)*100).toFixed(1), ((f2/18)*100).toFixed(1), ((top/163)*100).toFixed(1));
        });
    });
})