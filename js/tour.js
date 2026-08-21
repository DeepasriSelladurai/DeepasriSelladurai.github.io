/**
 * Deepasri Selladurai - Guided Portfolio Tour Walkthrough Controller
 * High-performance spotlight, popovers, keyboard navigation, and localStorage persistence.
 */

class PortfolioTour {
    constructor() {
        this.steps = portfolioData?.tourSteps || [];
        this.currentStep = 0;
        this.isActive = false;
        this.spotlight = null;
        this.popover = null;
        this.overlay = null;
        this.resizeListener = null;
        this.keyListener = null;

        this.init();
    }

    init() {
        // Build DOM elements
        this.createTourDOM();
        this.bindEvents();
    }

    createTourDOM() {
        // Create Tour Overlay Container
        this.overlay = document.createElement('div');
        this.overlay.className = 'tour-overlay';
        this.overlay.setAttribute('aria-hidden', 'true');

        // Create Spotlight element
        this.spotlight = document.createElement('div');
        this.spotlight.className = 'tour-spotlight';
        this.spotlight.style.display = 'none';

        // Create Popover element
        this.popover = document.createElement('div');
        this.popover.className = 'tour-popover';
        this.popover.setAttribute('role', 'dialog');
        this.popover.setAttribute('aria-label', 'Guided Portfolio Tour');

        document.body.appendChild(this.overlay);
        document.body.appendChild(this.spotlight);
        document.body.appendChild(this.popover);
    }

    bindEvents() {
        // Keyboard navigation
        this.keyListener = (e) => {
            if (!this.isActive) return;

            if (e.key === 'Escape') {
                this.skip();
            } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
                this.next();
            } else if (e.key === 'ArrowLeft') {
                this.prev();
            }
        };
        window.addEventListener('keydown', this.keyListener);

        // Reposition on window resize
        this.resizeListener = () => {
            if (this.isActive) {
                this.renderStep(this.currentStep);
            }
        };
        window.addEventListener('resize', this.resizeListener);
    }

    start() {
        if (!this.steps || this.steps.length === 0) return;

        this.isActive = true;
        this.currentStep = 0;

        this.overlay.classList.add('active');
        this.overlay.setAttribute('aria-hidden', 'false');
        this.spotlight.style.display = 'block';

        this.renderStep(this.currentStep);
    }

    renderStep(index) {
        if (index < 0 || index >= this.steps.length) {
            this.finish();
            return;
        }

        this.currentStep = index;
        const step = this.steps[index];
        const targetEl = document.querySelector(step.target);

        if (!targetEl) {
            console.warn(`Tour target element '${step.target}' not found. Moving to next step.`);
            this.next();
            return;
        }

        // Scroll target into view
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Wait brief delay for scroll animation to stabilize
        setTimeout(() => {
            const rect = targetEl.getBoundingClientRect();
            const padding = 10;

            // Position Spotlight around target element
            this.spotlight.style.top = `${Math.max(0, rect.top - padding + window.scrollY)}px`;
            this.spotlight.style.left = `${Math.max(0, rect.left - padding)}px`;
            this.spotlight.style.width = `${rect.width + padding * 2}px`;
            this.spotlight.style.height = `${rect.height + padding * 2}px`;
            this.spotlight.style.position = 'absolute';

            const progressPct = ((index + 1) / this.steps.length) * 100;
            const isLast = index === this.steps.length - 1;

            // Populate Popover HTML
            this.popover.innerHTML = `
                <div class="tour-popover-header">
                    <span class="tour-step-badge">Step ${index + 1} of ${this.steps.length}</span>
                    <button class="tour-skip-btn" id="tour-btn-skip">Skip Tour <i class='bx bx-x'></i></button>
                </div>
                <h4 class="tour-popover-title">${step.title}</h4>
                <div class="tour-popover-body">${step.content}</div>
                <div class="tour-progress-track">
                    <div class="tour-progress-fill" style="width: ${progressPct}%;"></div>
                </div>
                <div class="tour-actions">
                    <button class="tour-btn tour-btn-prev" id="tour-btn-prev" ${index === 0 ? 'disabled' : ''}>
                        <i class='bx bx-chevron-left'></i> Previous
                    </button>
                    <div class="tour-btn-group">
                        <button class="tour-btn tour-btn-next" id="tour-btn-next">
                            ${isLast ? 'Finish Tour <i class="bx bx-check"></i>' : 'Next <i class="bx bx-chevron-right"></i>'}
                        </button>
                    </div>
                </div>
            `;

            // Bind button click events
            this.popover.querySelector('#tour-btn-skip').onclick = () => this.skip();
            this.popover.querySelector('#tour-btn-prev').onclick = () => this.prev();
            this.popover.querySelector('#tour-btn-next').onclick = () => this.next();

            // Position Popover nicely relative to target
            this.positionPopover(rect);

            this.popover.classList.add('visible');
        }, 300);
    }

    positionPopover(targetRect) {
        const popoverWidth = 380;
        const popoverHeight = 220;
        const margin = 18;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Default position below element
        let top = targetRect.bottom + margin;
        let left = targetRect.left + (targetRect.width / 2) - (popoverWidth / 2);

        // If bottom overflow, place above
        if (top + popoverHeight > viewportHeight - 20) {
            top = targetRect.top - popoverHeight - margin;
        }

        // If top overflow (rare), pin to bottom
        if (top < 20) {
            top = 20;
        }

        // Viewport horizontal clamp
        if (left < 16) {
            left = 16;
        } else if (left + popoverWidth > viewportWidth - 16) {
            left = viewportWidth - popoverWidth - 16;
        }

        this.popover.style.top = `${top}px`;
        this.popover.style.left = `${left}px`;
    }

    next() {
        if (this.currentStep < this.steps.length - 1) {
            this.renderStep(this.currentStep + 1);
        } else {
            this.finish();
        }
    }

    prev() {
        if (this.currentStep > 0) {
            this.renderStep(this.currentStep - 1);
        }
    }

    skip() {
        this.close();
        if (typeof showToast === 'function') {
            showToast("Tour skipped. You can replay it anytime from the navigation bar!");
        }
    }

    finish() {
        this.close();
        try {
            localStorage.setItem('portfolio_tour_completed', 'true');
        } catch (e) {
            // Ignore quota / private mode errors
        }
        if (typeof showToast === 'function') {
            showToast("✨ Tour completed! Thank you for exploring my portfolio.");
        }
    }

    close() {
        this.isActive = false;
        this.overlay.classList.remove('active');
        this.overlay.setAttribute('aria-hidden', 'true');
        this.spotlight.style.display = 'none';
        this.popover.classList.remove('visible');
    }

    replay() {
        this.start();
    }
}

// Instantiate and export globally
window.portfolioTour = new PortfolioTour();
