import React from 'react';

const STATUS_CARDS = [
  { title: 'Resolved' },
  { title: 'Waiting' },
  { title: 'In Progress' },
  { title: 'Feedback' },
  { title: 'Void' },
];

function getColorForStatus(status) {
  switch (status) {
    case 'Waiting': return '#ffa500';
    case 'In Progress': return '#007bff';
    case 'Resolved': return '#28a745';
    case 'Feedback': return '#ffc107';
    case 'Void': return '#dc3545';
    default: return '#6c757d';
  }
}

function getBgColorForStatus(status) {
  switch (status) {
    case 'Waiting': return '#fff8e6';
    case 'In Progress': return '#e6f2ff';
    case 'Resolved': return '#e6ffe6';
    case 'Feedback': return '#fffbe6';
    case 'Void': return '#ffe6e6';
    default: return '#f8f9fa';
  }
}

function MobilePillStatus({ activeStatus = '', onStatusChange, statusCounts = {} }) {
  const handleCardClick = (status) => {
    onStatusChange?.(activeStatus === status ? '' : status);
  };

  return (
    <div style={{
      display: 'flex',
      gap: '10px',
      overflowX: 'auto',
      padding: '10px 0',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    }}>
      {STATUS_CARDS.map((card) => {
        const isActive = activeStatus === card.title;
        const color = getColorForStatus(card.title);
        const bgColor = getBgColorForStatus(card.title);
        const count = statusCounts[card.title] ?? 0;

        return (
          <div
            key={card.title}
            onClick={() => handleCardClick(card.title)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              borderRadius: '20px',
              backgroundColor: bgColor,
              border: `1px solid ${color}`,
              boxShadow: isActive ? `0 0 0 1px ${color}` : 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              color: isActive ? color : '#444',
              fontWeight: isActive ? 800 : 600,
              fontSize: '14px',
              transition: 'all 0.2s ease-in-out'
            }}
          >
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: color,
            }} />
            <span>{card.title}</span>
            <div style={{
              backgroundColor: isActive ? color : 'rgba(0,0,0,0.08)',
              color: isActive ? '#fff' : '#444',
              borderRadius: '12px',
              padding: '2px 8px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {count}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MobilePillStatus;
