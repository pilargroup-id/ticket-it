import React, { useEffect, useState } from 'react'
import DataTableTeamPerformance from '../../../components/table/DataTableTeamPerformance.jsx'
import ButtonRangeDate from '../../../components/button/ButtonRangeDate.jsx'
import ButtonExport from '../../../components/button/ButtonExport.jsx'
import { FileText01 } from '../../../components/template/TemplateIcons.jsx'
import { EMPTY_DATE_RANGE } from '../../../services/my-tickets/DataTableMT.js'
import { getDeveloperProjectSummary } from '../../../services/reports/DeveloperReports.js'
import FilterStatus from '../../../components/dropdown/filter/HeaderStatusPrjPerform.jsx'

const ProjectPerformence = () => {
  const [rows, setRows] = useState([])
  const [selectedRange, setSelectedRange] = useState(EMPTY_DATE_RANGE)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const response = await getDeveloperProjectSummary({
          startDate: selectedRange.startDate,
          endDate: selectedRange.endDate,
        })
        setRows(response.data)
      } catch (error) {
        console.error('Failed to fetch developer project summary:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [selectedRange])

  return (
    <div className="chart-page">
      <article className="dashboard-panel users-table-card">
        <div className="users-table-card__header">
          <div>
            <p className="dashboard-panel__eyebrow">Reports</p>
            <h1 className="dashboard-panel__title">Project Performance</h1>
            <p className="users-table-card__description">
              Monitoring performa pengerjaan ticket berdasarkan proyek dan kategori.
            </p>
          </div>

          <div className="users-table-card__actions">
            <ButtonRangeDate label="Periode" onChange={setSelectedRange} />
            <ButtonExport variant="action" aria-label="Export project performance report">
              <FileText01 size={18} aria-hidden="true" />
              <span>Export</span>
            </ButtonExport>
          </div>
        </div>

        <div className="dashboard-panel__body" style={{ marginTop: '0.75rem' }}>
          <DataTableTeamPerformance 
            rows={rows} 
            setRows={setRows} 
            dateRange={selectedRange}
            isLoading={isLoading}
          />
        </div>
      </article>
    </div>
  )
}

export default ProjectPerformence
