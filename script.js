// 基础交互功能
document.addEventListener('DOMContentLoaded', () => {
    // 为成员列表项添加悬停效果
    const memberItems = document.querySelectorAll('.member-item');
    
    memberItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-3px)';
            item.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'none';
            item.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });

    // 条款列表点击效果
    const clauses = document.querySelectorAll('.clauses li');
    clauses.forEach(clause => {
        clause.addEventListener('click', () => {
            clause.classList.toggle('highlight');
        });
    });
});

// 添加打印样式
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});