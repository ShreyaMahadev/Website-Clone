'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const columns = [
  { label: 'HSN Code' },
  { label: 'SAC Code' },
  { label: 'Billing DateFormat' },
  { label: 'Invoice Prefix' },
  { label: 'CGST Value' },
  { label: 'IGST Value' },
  { label: 'SGST Value' },
];

export default function GeneralSettingsPage() {
  const router = useRouter();

  const handleAddClick = () => {
    router.push('/general-settings/billing-manager');
  };

  return (
    <div style={{ padding: 32 }}>
      <div style={{
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        padding: 24,
        maxWidth: 1200,
        margin: '0 auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <h2 style={{ margin: 0, fontWeight: 600, fontSize: 24, flex: 1 }}>Billing Manager</h2>
          <button
            onClick={handleAddClick}
            style={{
              background: '#009fe3',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '10px 28px',
              fontWeight: 600,
              fontSize: 18,
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
            }}
          >
            ADD
          </button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
            <thead>
              <tr>
                {columns.map(col => (
                  <th
                    key={col.label}
                    style={{
                      textAlign: 'left',
                      padding: '16px 12px',
                      fontWeight: 700,
                      fontSize: 20,
                      borderBottom: '2px solid #eee'
                    }}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* No data row */}
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center', padding: 32, color: '#888' }}>
                  No records to display
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginTop: 24,
          color: '#888',
          fontSize: 16
        }}>
          Items per page:&nbsp;
          <select style={{ fontSize: 16, padding: '2px 8px', borderRadius: 4, border: '1px solid #ccc' }}>
            <option>5</option>
            <option>10</option>
            <option>25</option>
          </select>
          <span style={{ margin: '0 16px' }}>0 of 0</span>
          <button style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#ccc' }} disabled>&lt;</button>
          <button style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#ccc' }} disabled>&gt;</button>
        </div>
      </div>
    </div>
  );
}