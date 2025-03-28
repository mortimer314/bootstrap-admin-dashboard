// Sidebar Toggle
document.getElementById('sidebar-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('show');
});

// Handle responsive sidebar
function handleResize() {
    if (window.innerWidth > 992) {
        document.getElementById('sidebar').classList.remove('show');
    }
}

window.addEventListener('resize', handleResize);

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Chart Configuration
const chartConfig = {
    // Line chart defaults
    line: {
        type: 'line',
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#fff',
                    titleColor: '#1e293b',
                    bodyColor: '#64748b',
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        padding: 10,
                        color: '#64748b'
                    },
                    border: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        padding: 10,
                        color: '#64748b'
                    },
                    border: {
                        display: false
                    }
                }
            }
        }
    },
    // Small chart defaults
    small: {
        type: 'line',
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            }
        }
    },
    // Donut chart defaults
    donut: {
        type: 'doughnut',
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#fff',
                    titleColor: '#1e293b',
                    bodyColor: '#64748b',
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: true
                }
            },
            cutout: '75%'
        }
    }
};

// Initialize Charts
document.addEventListener('DOMContentLoaded', function() {
    // Overview Page Charts
    if (document.getElementById('revenueChart')) {
        new Chart(document.getElementById('revenueChart'), {
            ...chartConfig.line,
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Revenue',
                    data: [2800, 3200, 2900, 4100, 3800, 4600, 4200, 4800, 5100, 4700, 5200, 3468.96],
                    fill: true,
                    borderColor: '#ff4081',
                    backgroundColor: 'rgba(255, 64, 129, 0.1)',
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 4
                }]
            }
        });
    }

    // Small Charts for Stats Cards
    const smallChartIds = ['dailyChart', 'weeklyChart', 'monthlyChart', 'yearlyChart', 
                          'incomeChart', 'expenseChart', 'successChart', 'transactionChart'];
    smallChartIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            new Chart(element, {
                ...chartConfig.small,
                data: {
                    labels: new Array(10).fill(''),
                    datasets: [{
                        data: Array.from({length: 10}, () => Math.floor(Math.random() * 50) + 30),
                        borderColor: '#fff',
                        borderWidth: 2,
                        fill: false,
                        tension: 0.4,
                        pointRadius: 0
                    }]
                }
            });
        }
    });

    // Donut Charts
    if (document.getElementById('donutChart')) {
        new Chart(document.getElementById('donutChart'), {
            ...chartConfig.donut,
            data: {
                labels: ['Products', 'Services', 'Others'],
                datasets: [{
                    data: [33, 55, 12],
                    backgroundColor: [
                        '#ff4081',
                        '#7c4dff',
                        '#ffa726'
                    ],
                    borderWidth: 0,
                    spacing: 0
                }]
            }
        });
    }

    if (document.getElementById('spendingChart')) {
        new Chart(document.getElementById('spendingChart'), {
            ...chartConfig.donut,
            data: {
                labels: ['Shopping', 'Bills', 'Entertainment'],
                datasets: [{
                    data: [45, 30, 25],
                    backgroundColor: [
                        '#ff4081',
                        '#00c853',
                        '#ffa726'
                    ],
                    borderWidth: 0,
                    spacing: 0
                }]
            }
        });
    }
});

// Add animation to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.05)';
    });
}); 