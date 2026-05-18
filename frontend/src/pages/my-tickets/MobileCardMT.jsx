import React from 'react';

function MobileCardMT({ ticket }) {
  if (!ticket) return null;

  return (
    <div style={{
      backgroundColor: '#fff',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      fontSize: '14px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        <span style={{ fontWeight: 600, color: '#666' }}>Ticket ID</span>
        <span style={{ fontWeight: 'bold' }}>{ticket.ticketCode || '-'}</span>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        <span style={{ fontWeight: 600, color: '#666' }}>Nama Pembuat</span>
        <span style={{ fontWeight: 'bold' }}>{ticket.namaPembuat || ticket.userName || '-'}</span>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        <span style={{ fontWeight: 600, color: '#666' }}>Category</span>
        <span style={{ fontWeight: 'bold' }}>{ticket.category || '-'}</span>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        <span style={{ fontWeight: 600, color: '#666' }}>Masalah</span>
        <span style={{ fontWeight: 'bold', textAlign: 'right' }}>{ticket.problem || '-'}</span>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        <span style={{ fontWeight: 600, color: '#666' }}>Status</span>
        <span style={{ fontWeight: 'bold' }}>{ticket.status || '-'}</span>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px' }}>
        <span style={{ fontWeight: 600, color: '#666' }}>Support</span>
        <span style={{ fontWeight: 'bold' }}>{ticket.supportName || '-'}</span>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 600, color: '#666' }}>Solution</span>
        <span style={{ fontWeight: 'bold', textAlign: 'right' }}>{ticket.solution || '-'}</span>
      </div>
    </div>
  );
}

export default MobileCardMT;
